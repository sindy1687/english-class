// 文法塔統一題庫系統 - 第三關：be動詞疑問句（多樣化題庫）
// 每個小關卡10題，難度逐關遞增

// 統一題庫 - 所有題目按難度分類（be動詞疑問句）
const UNIFIED_QUESTION_BANK = {
  easy: [
        {
            question: "___ you a student?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 you 是第二人稱，疑問句用 Are。（你是學生嗎？）",
            logicHint: "主詞 you 是第二人稱，疑問句要用什麼呢?",
            difficultWords: ["student"]
        },
        {
            question: "___ he your brother?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 he 是第三人稱單數，疑問句用 Is。（他是你的兄弟嗎？）",
            logicHint: "主詞 he 是第三人稱單數，疑問句要用什麼呢?",
            difficultWords: ["your", "brother"]
        },
        {
            question: "___ they from Taiwan?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 they 是複數，疑問句用 Are。（他們來自台灣嗎？）",
            logicHint: "主詞 they 是複數，疑問句要用什麼呢?",
            difficultWords: ["from", "Taiwan"]
        },
        {
            question: "___ she a teacher?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 she 是第三人稱單數，疑問句用 Is。（她是老師嗎？）",
            logicHint: "主詞 she 是第三人稱單數，疑問句要用什麼呢?",
            difficultWords: ["teacher"]
        },
        {
            question: "___ we late?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 we 是複數，疑問句用 Are。（我們遲到了嗎？）",
            logicHint: "主詞 we 是複數，疑問句要用什麼呢?",
            difficultWords: ["late"]
        },
        {
            question: "___ it cold today?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 it 是第三人稱單數，疑問句用 Is。（今天很冷嗎？）",
            logicHint: "主詞 it 是第三人稱單數，疑問句要用什麼呢?",
            difficultWords: ["cold", "today"]
        },
        {
            question: "___ I right?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 0,
            explanation: "主詞 I 是第一人稱單數，疑問句用 Am。（我對嗎？）",
            logicHint: "主詞 I 是第一人稱單數，疑問句要用什麼呢?",
            difficultWords: ["right"]
        },
        {
            question: "___ the children happy?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the children 是複數，疑問句用 Are。（孩子們開心嗎？）",
            logicHint: "主詞 the children 是複數，疑問句要用什麼呢?",
            difficultWords: ["children", "happy"]
        },
        {
            question: "___ this your book?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 this 是單數，疑問句用 Is。（這是你的書嗎？）",
            logicHint: "主詞 this 是單數，疑問句要用什麼呢?",
            difficultWords: ["this", "your", "book"]
        },
        {
            question: "___ those flowers beautiful?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 those flowers 是複數，疑問句用 Are。（那些花很美嗎？）",
            logicHint: "主詞 those flowers 是複數，疑問句要用什麼呢?",
            difficultWords: ["those", "flowers", "beautiful"]
        }
  ],
  medium: [
        {
            question: "___ your sister at school?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 your sister 是單數，疑問句用 Is。（你的妹妹在學校嗎？）",
            logicHint: "主詞 your sister 是單數，疑問句要用什麼呢?",
            difficultWords: ["sister", "school"]
        },
        {
            question: "___ the buses on time?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the buses 是複數，疑問句用 Are。（巴士準時嗎？）",
            logicHint: "主詞 the buses 是複數，疑問句要用什麼呢?",
            difficultWords: ["buses", "time"]
        },
        {
            question: "___ this movie exciting?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 this movie 是單數，疑問句用 Is。（這部電影刺激嗎？）",
            logicHint: "主詞 this movie 是單數，疑問句要用什麼呢?",
            difficultWords: ["movie", "exciting"]
        },
        {
            question: "___ we going to the party?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 we 是複數，疑問句用 Are。（我們要去派對嗎？）",
            logicHint: "主詞 we 是複數，疑問句要用什麼呢?",
            difficultWords: ["party"]
        },
        {
            question: "___ the weather cold today?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the weather 是單數，疑問句用 Is。（今天天氣冷嗎？）",
            logicHint: "主詞 the weather 是單數，疑問句要用什麼呢?",
            difficultWords: ["weather", "cold"]
        },
        {
            question: "___ they your friends?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 they 是複數，疑問句用 Are。（他們是你的朋友嗎？）",
            logicHint: "主詞 they 是複數，疑問句要用什麼呢?",
            difficultWords: ["friends"]
        },
        {
            question: "___ her hair long?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 her hair 是單數，疑問句用 Is。（她的頭髮很長嗎？）",
            logicHint: "主詞 her hair 是單數，疑問句要用什麼呢?",
            difficultWords: ["hair", "long"]
        },
        {
            question: "___ the children playing outside?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the children 是複數，疑問句用 Are。（孩子們在外面玩嗎？）",
            logicHint: "主詞 the children 是複數，疑問句要用什麼呢?",
            difficultWords: ["children", "playing", "outside"]
        },
        {
            question: "___ this restaurant good?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 this restaurant 是單數，疑問句用 Is。（這家餐廳好嗎？）",
            logicHint: "主詞 this restaurant 是單數，疑問句要用什麼呢?",
            difficultWords: ["restaurant", "good"]
        },
        {
            question: "___ your parents working?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 your parents 是複數，疑問句用 Are。（你的父母在工作嗎？）",
            logicHint: "主詞 your parents 是複數，疑問句要用什麼呢?",
            difficultWords: ["parents", "working"]
        },
        {
            question: "___ the students studying for the exam?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the students 是複數，疑問句用 Are。（學生們在為考試讀書嗎？）",
            logicHint: "主詞 the students 是複數，疑問句要用什麼呢?",
            difficultWords: ["students", "studying", "exam"]
        },
        {
            question: "___ his job challenging?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 his job 是單數，疑問句用 Is。（他的工作有挑戰性嗎？）",
            logicHint: "主詞 his job 是單數，疑問句要用什麼呢?",
            difficultWords: ["job", "challenging"]
        },
        {
            question: "___ the birds singing in the morning?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the birds 是複數，疑問句用 Are。（鳥兒在早上唱歌嗎？）",
            logicHint: "主詞 the birds 是複數，疑問句要用什麼呢?",
            difficultWords: ["birds", "singing", "morning"]
        },
        {
            question: "___ this lesson important for the test?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 this lesson 是單數，疑問句用 Is。（這堂課對考試重要嗎？）",
            logicHint: "主詞 this lesson 是單數，疑問句要用什麼呢?",
            difficultWords: ["lesson", "important", "test"]
        },
        {
            question: "___ the windows open in the classroom?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the windows 是複數，疑問句用 Are。（教室的窗戶開著嗎？）",
            logicHint: "主詞 the windows 是複數，疑問句要用什麼呢?",
            difficultWords: ["windows", "open", "classroom"]
        },
        {
            question: "___ her voice beautiful when she sings?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 her voice 是單數，疑問句用 Is。（她唱歌時聲音很美嗎？）",
            logicHint: "主詞 her voice 是單數，疑問句要用什麼呢?",
            difficultWords: ["voice", "beautiful", "sings"]
        },
        {
            question: "___ the pictures clear enough to see?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the pictures 是複數，疑問句用 Are。（這些照片清楚到能看見嗎？）",
            logicHint: "主詞 the pictures 是複數，疑問句要用什麼呢?",
            difficultWords: ["pictures", "clear", "enough"]
        },
        {
            question: "___ this computer fast enough for gaming?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 this computer 是單數，疑問句用 Is。（這台電腦快到能玩遊戲嗎？）",
            logicHint: "主詞 this computer 是單數，疑問句要用什麼呢?",
            difficultWords: ["computer", "fast", "gaming"]
        },
        {
            question: "___ the teachers busy with their work?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the teachers 是複數，疑問句用 Are。（老師們忙於工作嗎？）",
            logicHint: "主詞 the teachers 是複數，疑問句要用什麼呢?",
            difficultWords: ["teachers", "busy", "work"]
        },
        {
            question: "___ the coffee hot enough to drink?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the coffee 是單數，疑問句用 Is。（這咖啡熱到能喝嗎？）",
            logicHint: "主詞 the coffee 是單數，疑問句要用什麼呢?",
            difficultWords: ["coffee", "hot", "drink"]
        },
        {
            question: "___ the dogs friendly to strangers?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the dogs 是複數，疑問句用 Are。（這些狗對陌生人友善嗎？）",
            logicHint: "主詞 the dogs 是複數，疑問句要用什麼呢?",
            difficultWords: ["dogs", "friendly", "strangers"]
        }
  ],
  hard: [
        {
            question: "___ the information accurate?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the information 是不可數名詞，疑問句用 Is。（這個資訊準確嗎？）",
            logicHint: "主詞 the information 是不可數名詞，疑問句要用什麼呢?",
            difficultWords: ["information", "accurate"]
        },
        {
            question: "___ the news true?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the news 是不可數名詞，疑問句用 Is。（這個新聞是真的嗎？）",
            logicHint: "主詞 the news 是不可數名詞，疑問句要用什麼呢?",
            difficultWords: ["news", "true"]
        },
        {
            question: "___ the police here?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the police 是複數概念，疑問句用 Are。（警察在這裡嗎？）",
            logicHint: "主詞 the police 是複數概念，疑問句要用什麼呢?",
            difficultWords: ["police"]
        },
        {
            question: "___ the furniture comfortable?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the furniture 是不可數名詞，疑問句用 Is。（這家具舒適嗎？）",
            logicHint: "主詞 the furniture 是不可數名詞，疑問句要用什麼呢?",
            difficultWords: ["furniture", "comfortable"]
        },
        {
            question: "___ the scissors sharp?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the scissors 是複數概念，疑問句用 Are。（這剪刀鋒利嗎？）",
            logicHint: "主詞 the scissors 是複數概念，疑問句要用什麼呢?",
            difficultWords: ["scissors", "sharp"]
        },
        {
            question: "___ the advice helpful?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the advice 是不可數名詞，疑問句用 Is。（這個建議有幫助嗎？）",
            logicHint: "主詞 the advice 是不可數名詞，疑問句要用什麼呢?",
            difficultWords: ["advice", "helpful"]
        },
        {
            question: "___ the glasses broken?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the glasses 是複數概念，疑問句用 Are。（這眼鏡壞了嗎？）",
            logicHint: "主詞 the glasses 是複數概念，疑問句要用什麼呢?",
            difficultWords: ["glasses", "broken"]
        },
        {
            question: "___ the luggage heavy?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the luggage 是不可數名詞，疑問句用 Is。（這行李很重嗎？）",
            logicHint: "主詞 the luggage 是不可數名詞，疑問句要用什麼呢?",
            difficultWords: ["luggage", "heavy"]
        },
        {
            question: "___ the trousers too long?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the trousers 是複數概念，疑問句用 Are。（這褲子太長了嗎？）",
            logicHint: "主詞 the trousers 是複數概念，疑問句要用什麼呢?",
            difficultWords: ["trousers", "long"]
        },
        {
            question: "___ the equipment ready?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the equipment 是不可數名詞，疑問句用 Is。（這設備準備好了嗎？）",
            logicHint: "主詞 the equipment 是不可數名詞，疑問句要用什麼呢?",
            difficultWords: ["equipment", "ready"]
        },
        {
            question: "___ the stairs safe to climb?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the stairs 是複數概念，疑問句用 Are。（這樓梯安全到能爬嗎？）",
            logicHint: "主詞 the stairs 是複數概念，疑問句要用什麼呢?",
            difficultWords: ["stairs", "safe", "climb"]
        },
        {
            question: "___ the knowledge useful for the job?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the knowledge 是不可數名詞，疑問句用 Is。（這個知識對工作有用嗎？）",
            logicHint: "主詞 the knowledge 是不可數名詞，疑問句要用什麼呢?",
            difficultWords: ["knowledge", "useful", "job"]
        },
        {
            question: "___ the jeans expensive to buy?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the jeans 是複數概念，疑問句用 Are。（這牛仔褲貴到能買嗎？）",
            logicHint: "主詞 the jeans 是複數概念，疑問句要用什麼呢?",
            difficultWords: ["jeans", "expensive", "buy"]
        },
        {
            question: "___ the research complete for the report?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the research 是不可數名詞，疑問句用 Is。（這研究完整到能寫報告嗎？）",
            logicHint: "主詞 the research 是不可數名詞，疑問句要用什麼呢?",
            difficultWords: ["research", "complete", "report"]
        },
        {
            question: "___ the headphones working properly?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the headphones 是複數概念，疑問句用 Are。（這耳機正常運作嗎？）",
            logicHint: "主詞 the headphones 是複數概念，疑問句要用什麼呢?",
            difficultWords: ["headphones", "working", "properly"]
        },
        {
            question: "___ the evidence clear enough to prove?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the evidence 是不可數名詞，疑問句用 Is。（這證據清楚到能證明嗎？）",
            logicHint: "主詞 the evidence 是不可數名詞，疑問句要用什麼呢?",
            difficultWords: ["evidence", "clear", "prove"]
        },
        {
            question: "___ the sunglasses cool to wear?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the sunglasses 是複數概念，疑問句用 Are。（這太陽眼鏡酷到能戴嗎？）",
            logicHint: "主詞 the sunglasses 是複數概念，疑問句要用什麼呢?",
            difficultWords: ["sunglasses", "cool", "wear"]
        },
        {
            question: "___ the progress good enough to continue?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the progress 是不可數名詞，疑問句用 Is。（這進度好到能繼續嗎？）",
            logicHint: "主詞 the progress 是不可數名詞，疑問句要用什麼呢?",
            difficultWords: ["progress", "good", "continue"]
        },
        {
            question: "___ the binoculars powerful enough to see?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the binoculars 是複數概念，疑問句用 Are。（這望遠鏡強到能看見嗎？）",
            logicHint: "主詞 the binoculars 是複數概念，疑問句要用什麼呢?",
            difficultWords: ["binoculars", "powerful", "see"]
        },
        {
            question: "___ the software reliable for daily use?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 1,
            explanation: "主詞 the software 是不可數名詞，疑問句用 Is。（這軟體可靠到能日常使用嗎？）",
            logicHint: "主詞 the software 是不可數名詞，疑問句要用什麼呢?",
            difficultWords: ["software", "reliable", "daily"]
        },
        {
            question: "___ the people friendly to visitors?",
            options: ["Am", "Is", "Are", "Be"],
            correct: 2,
            explanation: "主詞 the people 是複數概念，疑問句用 Are。（這些人對訪客友善嗎？）",
            logicHint: "主詞 the people 是複數概念，疑問句要用什麼呢?",
            difficultWords: ["people", "friendly", "visitors"]
        }
  ]
};

// 困難單字詞典
const DIFFICULT_WORDS = {
    "student": "學生",
    "brother": "兄弟",
    "Taiwan": "台灣",
    "teacher": "老師",
    "late": "遲到",
    "cold": "冷",
    "right": "對的",
    "children": "孩子們",
    "book": "書",
    "flowers": "花",
    "beautiful": "美麗的",
    "phone": "手機",
    "parents": "父母",
    "weather": "天氣",
    "nice": "好的",
    "ready": "準備好的",
    "name": "名字",
    "dogs": "狗",
    "friendly": "友善的",
    "answer": "答案",
    "correct": "正確的",
    "girls": "女孩們",
    "park": "公園",
    "car": "車",
    "expensive": "貴的",
    "books": "書",
    "interesting": "有趣的",
    "sister": "姐妹",
    "school": "學校",
    "buses": "巴士",
    "time": "時間",
    "movie": "電影",
    "exciting": "刺激的",
    "party": "派對",
    "friends": "朋友們",
    "hair": "頭髮",
    "long": "長的",
    "playing": "玩",
    "outside": "外面",
    "restaurant": "餐廳",
    "good": "好的",
    "working": "工作",
    "coffee": "咖啡",
    "hot": "熱的",
    "studying": "讀書",
    "exam": "考試",
    "job": "工作",
    "challenging": "有挑戰性的",
    "birds": "鳥",
    "singing": "唱歌",
    "morning": "早上",
    "lesson": "課程",
    "important": "重要的",
    "test": "測驗",
    "windows": "窗戶",
    "open": "開的",
    "classroom": "教室",
    "voice": "聲音",
    "sings": "唱歌",
    "pictures": "照片",
    "clear": "清楚的",
    "enough": "足夠的",
    "computer": "電腦",
    "fast": "快的",
    "gaming": "遊戲",
    "teachers": "老師們",
    "busy": "忙的",
    "work": "工作",
    "drink": "喝",
    "strangers": "陌生人",
    "information": "資訊",
    "accurate": "準確的",
    "news": "新聞",
    "true": "真的",
    "police": "警察",
    "furniture": "家具",
    "comfortable": "舒適的",
    "scissors": "剪刀",
    "sharp": "鋒利的",
    "advice": "建議",
    "helpful": "有幫助的",
    "glasses": "眼鏡",
    "broken": "壞的",
    "luggage": "行李",
    "heavy": "重的",
    "trousers": "褲子",
    "equipment": "設備",
    "stairs": "樓梯",
    "safe": "安全的",
    "climb": "爬",
    "knowledge": "知識",
    "useful": "有用的",
    "jeans": "牛仔褲",
    "buy": "買",
    "research": "研究",
    "complete": "完整的",
    "report": "報告",
    "headphones": "耳機",
    "working": "運作",
    "properly": "正常地",
    "evidence": "證據",
    "prove": "證明",
    "sunglasses": "太陽眼鏡",
    "cool": "酷的",
    "wear": "戴",
    "progress": "進度",
    "continue": "繼續",
    "binoculars": "望遠鏡",
    "powerful": "強力的",
    "see": "看見",
    "software": "軟體",
    "reliable": "可靠的",
    "daily": "日常的",
    "use": "使用",
    "people": "人們",
    "visitors": "訪客"
};

// 關卡配置
const LEVEL_CONFIG = {
    sub1: {
        name: "星辰之塔第一層",
        description: "探索be動詞疑問句的基礎",
        difficulty: "easy"
    },
    sub2: {
        name: "星辰之塔第二層", 
        description: "挑戰更複雜的疑問句型",
        difficulty: "medium"
    },
    sub3: {
        name: "星辰之塔頂層",
        description: "征服最困難的疑問句挑戰",
        difficulty: "hard"
    }
};

// 隨機選擇題目函數
function getRandomQuestions(subLevel, count = 10) {
    const levelConfig = LEVEL_CONFIG[subLevel];
    if (!levelConfig) {
        console.error('無效的關卡:', subLevel);
        return [];
    }
    
    const difficulty = levelConfig.difficulty;
    const questions = UNIFIED_QUESTION_BANK[difficulty];
    
    if (!questions || questions.length === 0) {
        console.error('找不到題目:', difficulty);
        return [];
    }
    
    // 隨機選擇指定數量的題目
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// 取得關卡資訊
function getLevelInfo(subLevel) {
    return LEVEL_CONFIG[subLevel] || null;
}

// 取得所有關卡
function getAllLevels() {
    return Object.keys(LEVEL_CONFIG);
}
