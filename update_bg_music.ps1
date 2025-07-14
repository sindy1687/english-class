# Batch update background music system
# Unify all HTML files' background music system to SoundSystem.bgm

$files = @(
    "apollo.html",
    "ares.html", 
    "artemis.html",
    "athena.html",
    "demeter.html",
    "dionysus.html",
    "eros.html",
    "hades.html",
    "hephaestus.html",
    "hera.html",
    "hermes.html",
    "hestia.html",
    "persephone.html",
    "poseidon.html"
)

$oldBgMusicCode = @"
    // ===== 背景音樂控制 =====
    let bgMusic = null;
    let isMusicPlaying = false;

    function initBackgroundMusic() {
      bgMusic = new Audio('sound/午後放鬆時光（純音樂）.mp3');
      bgMusic.loop = true;
      bgMusic.volume = 0.3;
      
      // 從localStorage讀取音樂狀態
      const musicState = localStorage.getItem('bgMusicState');
      if (musicState === 'playing') {
        playBackgroundMusic();
      }
    }

    function toggleBackgroundMusic() {
      if (isMusicPlaying) {
        pauseBackgroundMusic();
      } else {
        playBackgroundMusic();
      }
    }

    function playBackgroundMusic() {
      if (bgMusic) {
        bgMusic.play().then(() => {
          isMusicPlaying = true;
          document.getElementById('bgMusicControl').textContent = '🔊';
          document.getElementById('bgMusicControl').classList.remove('paused');
          localStorage.setItem('bgMusicState', 'playing');
        }).catch(err => {
          console.log('背景音樂播放失敗:', err);
        });
      }
    }

    function pauseBackgroundMusic() {
      if (bgMusic) {
        bgMusic.pause();
        isMusicPlaying = false;
        document.getElementById('bgMusicControl').textContent = '🔇';
        document.getElementById('bgMusicControl').classList.add('paused');
        localStorage.setItem('bgMusicState', 'paused');
      }
    }
"@

$newBgMusicCode = @"
    // ===== 背景音樂控制 =====
    function initBackgroundMusic() {
      if (typeof SoundSystem !== 'undefined') {
        SoundSystem.bgm.initGlobalAudio();
        SoundSystem.bgm.updateAllControls();
      }
    }

    function toggleBackgroundMusic() {
      if (typeof SoundSystem !== 'undefined') {
        SoundSystem.bgm.toggle();
      }
    }

    function playBackgroundMusic() {
      if (typeof SoundSystem !== 'undefined') {
        SoundSystem.bgm.play();
      }
    }

    function pauseBackgroundMusic() {
      if (typeof SoundSystem !== 'undefined') {
        SoundSystem.bgm.pause();
      }
    }
"@

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Processing file: $file"
        
        # Read file content
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # Replace background music code
        $content = $content -replace [regex]::Escape($oldBgMusicCode), $newBgMusicCode
        
        # Check if sound.js reference needs to be added
        if ($content -notmatch "js/sound\.js") {
            # Find script tags and add sound.js in appropriate position
            $content = $content -replace '(<script src="js/[^"]+\.js"></script>)', '$1' + "`n  <script src=`"js/sound.js`"></script>"
        }
        
        # Write back to file
        Set-Content $file $content -Encoding UTF8
        Write-Host "Updated: $file"
    } else {
        Write-Host "File not found: $file"
    }
}

Write-Host "Batch update completed!" 