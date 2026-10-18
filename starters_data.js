// =========================================================================
// CAMBRIDGE PRE-A1 STARTERS 1 - 4 COMPREHENSIVE TEST DATABASE
// TRỌN BỘ 12 ĐỀ THI CAMBRIDGE YOUNG LEARNERS (STARTERS 1 - 4)
// ĐẦY ĐỦ 3 KỸ NĂNG:
// 1. LISTENING (20 CÂU: PART 1, 2, 3, 4)
// 2. READING & WRITING (25 CÂU: PART 1, 2, 3, 4, 5)
// 3. SPEAKING (PART 1, 2, 3, 4 - AUDIO EXAMINER & MICROPHONE RECORDER)
// Chấm điểm theo số Khiên Cambridge (Shields 🛡️ Tối đa 15 Khiên)
// =========================================================================

const startersTestProfiles = [
    // --- CUỐN 1: CAMBRIDGE STARTERS 1 ---
    {
        id: "starters_1_test_1",
        book: "Starters 1",
        book_title: "Cambridge English Starters 1",
        test_title: "Test 1 (Starters 1)",
        badge: "Book 1 • Test 1",
        theme: "At the Park & Family Activities",
        lis_theme: "Park Playground, Pet Shop & School Bus",
        rw_theme: "Classroom Objects, Animal Friends & Birthday Party",
        spk_theme: "Park Scene, Animal Cards & Daily Habits"
    },
    {
        id: "starters_1_test_2",
        book: "Starters 1",
        book_title: "Cambridge English Starters 1",
        test_title: "Test 2 (Starters 1)",
        badge: "Book 1 • Test 2",
        theme: "Beach Holiday & Water Sports",
        lis_theme: "Sunny Beach, Grandma's Garden & Fruit Market",
        rw_theme: "Sea Animals, Kitchen Utensils & Playing Sports",
        spk_theme: "Beach Scene, Food Cards & Favourite Colours"
    },
    {
        id: "starters_1_test_3",
        book: "Starters 1",
        book_title: "Cambridge English Starters 1",
        test_title: "Test 3 (Starters 1)",
        badge: "Book 1 • Test 3",
        theme: "At School & The Toy Shop",
        lis_theme: "Classroom Art Lesson, Toy Castle & Farm Animals",
        rw_theme: "School Bag Essentials, Jungle Animals & Bedroom Furniture",
        spk_theme: "Art Room, Vehicle Cards & Best Friends"
    },

    // --- CUỐN 2: CAMBRIDGE STARTERS 2 ---
    {
        id: "starters_2_test_1",
        book: "Starters 2",
        book_title: "Cambridge English Starters 2",
        test_title: "Test 1 (Starters 2)",
        badge: "Book 2 • Test 1",
        theme: "In the Living Room & Farm Fun",
        lis_theme: "Living Room Games, The Old Farmhouse & Playground",
        rw_theme: "Living Room Objects, Wild Zoo Animals & Sports Equipment",
        spk_theme: "Living Room Scene, Fruit Cards & Family Members"
    },
    {
        id: "starters_2_test_2",
        book: "Starters 2",
        book_title: "Cambridge English Starters 2",
        test_title: "Test 2 (Starters 2)",
        badge: "Book 2 • Test 2",
        theme: "Supermarket & Delicious Food",
        lis_theme: "Grocery Shopping, Happy Pets & The Circus Show",
        rw_theme: "Breakfast Food, Zoo Animals & School Subjects",
        spk_theme: "Supermarket Scene, Toy Cards & Daily Meals"
    },
    {
        id: "starters_2_test_3",
        book: "Starters 2",
        book_title: "Cambridge English Starters 2",
        test_title: "Test 3 (Starters 2)",
        badge: "Book 2 • Test 3",
        theme: "Sports Day & In the Garden",
        lis_theme: "Running Races, The Treehouse & Pet Friends",
        rw_theme: "Garden Flowers, Action Verbs & Clothes in the Wardrobe",
        spk_theme: "Garden Scene, Clothes Cards & Sports Hobbies"
    },

    // --- CUỐN 3: CAMBRIDGE STARTERS 3 ---
    {
        id: "starters_3_test_1",
        book: "Starters 3",
        book_title: "Cambridge English Starters 3",
        test_title: "Test 1 (Starters 3)",
        badge: "Book 3 • Test 1",
        theme: "At the Zoo & Animal Kingdom",
        lis_theme: "Feeding Giraffes, Monkey Island & Pet Clinic",
        rw_theme: "Jungle Animals, Transport Vehicles & Dining Room",
        spk_theme: "Zoo Scene, Animal Cards & Favourite Animals"
    },
    {
        id: "starters_3_test_2",
        book: "Starters 3",
        book_title: "Cambridge English Starters 3",
        test_title: "Test 2 (Starters 3)",
        badge: "Book 3 • Test 2",
        theme: "Music Room & Birthday Celebration",
        lis_theme: "Musical Instruments, Cake Baking & Puppet Theatre",
        rw_theme: "Musical Items, Party Clothes & Kitchen Food",
        spk_theme: "Party Scene, Instrument Cards & Music Preferences"
    },
    {
        id: "starters_3_test_3",
        book: "Starters 3",
        book_title: "Cambridge English Starters 3",
        test_title: "Test 3 (Starters 3)",
        badge: "Book 3 • Test 3",
        theme: "At the Airport & Travel Adventure",
        lis_theme: "Airport Terminal, Train Station & Mountain Cabin",
        rw_theme: "Vehicles & Transport, Camping Gear & Weather Words",
        spk_theme: "Travel Scene, Vehicle Cards & Holiday Trips"
    },

    // --- CUỐN 4: CAMBRIDGE STARTERS 4 ---
    {
        id: "starters_4_test_1",
        book: "Starters 4",
        book_title: "Cambridge English Starters 4",
        test_title: "Test 1 (Starters 4)",
        badge: "Book 4 • Test 1",
        theme: "A Day in the Countryside",
        lis_theme: "Barnyard Animals, Fishing in the River & Picnic Basket",
        rw_theme: "Farm Animals, Picnic Food & Body Parts",
        spk_theme: "Countryside Scene, Animal Cards & Outdoor Games"
    },
    {
        id: "starters_4_test_2",
        book: "Starters 4",
        book_title: "Cambridge English Starters 4",
        test_title: "Test 2 (Starters 4)",
        badge: "Book 4 • Test 2",
        theme: "In the Toy Shop & Fun Games",
        lis_theme: "Toy Train Tracks, Giant Teddy Bear & Painting Station",
        rw_theme: "Toys & Games, Clothes & Room Furniture",
        spk_theme: "Toy Shop Scene, Toy Cards & Playtime at Home"
    },
    {
        id: "starters_4_test_3",
        book: "Starters 4",
        book_title: "Cambridge English Starters 4",
        test_title: "Test 3 (Starters 4)",
        badge: "Book 4 • Test 3",
        theme: "Grandma's House & The Pet Show",
        lis_theme: "Baking Cookies, Pet Parade & The Tree Swing",
        rw_theme: "Pet Animals, Family Members & House Rooms",
        spk_theme: "Pet Show Scene, Food Cards & Pets at Home"
    }
];

// Hàm khởi tạo chi tiết dữ liệu 1 bài thi Starters chuẩn Cambridge YLE
function generateStartersTest(profile, idx) {
    const testNum = idx + 1;

    // =========================================================================
    // 1. LISTENING (4 PARTS - TỔNG CỘNG 20 CÂU HỎI)
    // =========================================================================
    const part1Names = [
        { name: "Tom", target: "boy playing with a red boat", coords: "next to the fountain", clue: "Can you see Tom? He's sailing his red boat." },
        { name: "Lucy", target: "girl reading a picture book", coords: "under the big green tree", clue: "Where's Lucy? She's sitting under the oak tree reading." },
        { name: "Bill", target: "boy kicking a black and white football", coords: "on the grass", clue: "Look at Bill! He's kicking a soccer ball into the net." },
        { name: "Sue", target: "girl eating an ice cream", coords: "sitting on the yellow bench", clue: "Is that Sue? Yes, she's eating a strawberry ice cream cone." },
        { name: "Alex", target: "boy riding a blue bicycle", coords: "on the path", clue: "Who is riding the blue bike? That's Alex with his helmet." }
    ];

    const part1Questions = part1Names.map((item, i) => ({
        id: i + 1,
        type: "match",
        name: item.name,
        target_description: item.target,
        scene_location: item.coords,
        audio_prompt: item.clue,
        options: [
            "Cậu bé đang thả thuyền buồm đỏ cạnh đài phun nước",
            "Cô bé đang đọc sách tranh dưới gốc cây to",
            "Cậu bé đang sút quả bóng đá trên thảm cỏ",
            "Cô bé đang ngồi trên ghế vàng ăn kem dâu",
            "Cậu bé đang đội mũ bảo hiểm đạp xe đạp màu xanh",
            "Cô bé đang bế chú mèo con màu trắng"
        ],
        correct_answer: (i === 0 ? "Cậu bé đang thả thuyền buồm đỏ cạnh đài phun nước" :
                        i === 1 ? "Cô bé đang đọc sách tranh dưới gốc cây to" :
                        i === 2 ? "Cậu bé đang sút quả bóng đá trên thảm cỏ" :
                        i === 3 ? "Cô bé đang ngồi trên ghế vàng ăn kem dâu" :
                        "Cậu bé đang đội mũ bảo hiểm đạp xe đạp màu xanh"),
        explanation: `Đoạn ghi âm: "${item.clue}" -> Đáp án nối đúng với ${item.name}.`
    }));

    const part2Questions = [
        { id: 6, question: "6. What is the girl's name?", correct_answers: ["Kim", "KIM"], audio_script: "Examiner: What is your name? - Girl: My name is Kim. K-I-M.", explanation: "Bé đánh vần tên: K-I-M." },
        { id: 7, question: "7. How old is she?", correct_answers: ["8", "eight", "EIGHT"], audio_script: "Examiner: And how old are you, Kim? - Girl: I'm eight years old today!", explanation: "Bé nói: 'I'm eight years old'." },
        { id: 8, question: "8. What is her school's name? [______] School", correct_answers: ["Green", "GREEN"], audio_script: "Examiner: What school do you go to? - Girl: I go to Green School. G-R-E-E-N.", explanation: "Tên trường là Green School (G-R-E-E-N)." },
        { id: 9, question: "9. How many children are in her class?", correct_answers: ["12", "twelve", "TWELVE"], audio_script: "Examiner: How many children are in your class? - Girl: There are twelve children.", explanation: "Trong lớp có 12 bạn học sinh." },
        { id: 10, question: "10. What is her teacher's name? Mrs [______]", correct_answers: ["Bird", "BIRD"], audio_script: "Examiner: Who is your teacher? - Girl: Her name is Mrs Bird. B-I-R-D.", explanation: "Cô giáo tên Mrs Bird (B-I-R-D)." }
    ];

    const part3Questions = [
        {
            id: 11,
            question: "11. What is Pat's favourite animal?",
            options: ["A. Monkey (Chú khỉ tinh nghịch)", "B. Elephant (Chú voi to lớn)", "C. Giraffe (Hươu cao cổ)"],
            correct_answers: ["B"],
            audio_script: "Boy: Do you like monkeys, Pat? - Pat: They are cute, but my favourite is the elephant!",
            explanation: "Pat xác nhận con vật yêu thích nhất là 'elephant' (chú voi) -> Đáp án B."
        },
        {
            id: 12,
            question: "12. Which sport is Nick playing today?",
            options: ["A. Tennis (Quần vợt)", "B. Football (Bóng đá)", "C. Swimming (Bơi lội)"],
            correct_answers: ["A"],
            audio_script: "Girl: Is Nick swimming in the pool? - Boy: No, he's on the court playing tennis with his sister.",
            explanation: "Nick đang chơi quần vợt trên sân ('playing tennis') -> Đáp án A."
        },
        {
            id: 13,
            question: "13. What is May having for lunch?",
            options: ["A. Burger and chips", "B. Fish and rice (Cá và cơm)", "C. Chicken salad"],
            correct_answers: ["B"],
            audio_script: "Dad: Do you want chicken today, May? - May: No thanks, Dad. I'd love fish and rice, please.",
            explanation: "May chọn món cá và cơm ('fish and rice') -> Đáp án B."
        },
        {
            id: 14,
            question: "14. Where is Sam's puppy?",
            options: ["A. In the bedroom", "B. Under the kitchen table", "C. In the garden under a bush (Trong vườn dưới bụi cây)"],
            correct_answers: ["C"],
            audio_script: "Mum: Sam, look in the garden! - Sam: Oh, the puppy is sleeping under the rose bush!",
            explanation: "Chú cún đang ngủ dưới bụi hoa trong vườn -> Đáp án C."
        },
        {
            id: 15,
            question: "15. What colour is Anna's new school bag?",
            options: ["A. Purple and pink (Màu tím và hồng)", "B. Blue and yellow", "C. Bright green"],
            correct_answers: ["A"],
            audio_script: "Girl: Did you get a green bag, Anna? - Anna: No, my new bag is purple and pink!",
            explanation: "Cặp sách mới của Anna có màu tím và hồng ('purple and pink') -> Đáp án A."
        }
    ];

    const part4Questions = [
        { id: 16, item: "The balloon in the sky", correct_color: "Red (Đỏ)", audio_script: "Examiner: Look at the balloon flying in the sky. Colour it red.", explanation: "Quả bóng bay trên bầu trời tô màu đỏ (Red)." },
        { id: 17, item: "The cat sleeping on the sofa", correct_color: "Brown (Nâu)", audio_script: "Examiner: Can you see the cat on the sofa? Colour the cat brown.", explanation: "Con mèo ngủ trên ghế sô-pha tô màu nâu (Brown)." },
        { id: 18, item: "The car next to the house", correct_color: "Blue (Xanh dương)", audio_script: "Examiner: Find the car next to the front door. Colour it blue.", explanation: "Chiếc xe ô tô bên cạnh cửa nhà tô màu xanh dương (Blue)." },
        { id: 19, item: "The flower in the girl's hair", correct_color: "Yellow (Vàng)", audio_script: "Examiner: Now look at the flower in the girl's hair. Make it yellow.", explanation: "Bông hoa cài trên tóc bé gái tô màu vàng (Yellow)." },
        { id: 20, item: "The apple on the kitchen table", correct_color: "Green (Xanh lá)", audio_script: "Examiner: Can you see the apple on the table? Colour it green.", explanation: "Quả táo trên bàn ăn tô màu xanh lá cây (Green)." }
    ];

    // =========================================================================
    // 2. READING & WRITING (5 PARTS - TỔNG CỘNG 25 CÂU HỎI)
    // =========================================================================
    const rwPart1Questions = [
        { id: 1, statement: "This is a pencil.", is_correct: true, icon: "✏️", explanation: "Bức tranh là chiếc bút chì (pencil) -> Câu này ĐÚNG (Tick ✓)." },
        { id: 2, statement: "This is an elephant.", is_correct: false, icon: "🐊", explanation: "Bức tranh là con cá sấu (crocodile), không phải con voi -> Câu này SAI (Cross ✗)." },
        { id: 3, statement: "This is a guitar.", is_correct: true, icon: "🎸", explanation: "Bức tranh là cây đàn guitar -> Câu này ĐÚNG (Tick ✓)." },
        { id: 4, statement: "This is a computer.", is_correct: false, icon: "⚽", explanation: "Bức tranh là quả bóng đá (football), không phải máy tính -> Câu này SAI (Cross ✗)." },
        { id: 5, statement: "This is an apple.", is_correct: true, icon: "🍎", explanation: "Bức tranh là quả táo chín đỏ (apple) -> Câu này ĐÚNG (Tick ✓)." }
    ];

    const rwPart2Questions = [
        { id: 6, statement: "There is a dog sleeping under the table.", correct_answers: ["yes", "YES"], explanation: "Nhìn tranh: có một chú chó đang nằm ngủ ngoan dưới gầm bàn -> 'yes'." },
        { id: 7, statement: "The boy is wearing a blue hat.", correct_answers: ["no", "NO"], explanation: "Cậu bé đang đội mũ màu đỏ (red hat), không phải màu xanh -> 'no'." },
        { id: 8, statement: "There are two birds flying in the sky.", correct_answers: ["yes", "YES"], explanation: "Trên bầu trời có đúng 2 chú chim nhỏ đang bay lượn -> 'yes'." },
        { id: 9, statement: "The girl is drinking a glass of milk.", correct_answers: ["no", "NO"], explanation: "Bé gái đang cầm quả chuối ăn, không phải uống sữa -> 'no'." },
        { id: 10, statement: "A red ball is on the green mat.", correct_answers: ["yes", "YES"], explanation: "Quả bóng tròn màu đỏ nằm ngay trên thảm trải sàn màu xanh -> 'yes'." }
    ];

    const rwPart3Questions = [
        { id: 11, scrambled: "E / S / O / H / R", hint: "🐴 Con ngựa trung thành", correct_word: "HORSE", explanation: "Các chữ cái ghép lại thành từ vựng: H-O-R-S-E (Con ngựa)." },
        { id: 12, scrambled: "A / B / N / A / N / A", hint: "🍌 Quả chuối chín vàng", correct_word: "BANANA", explanation: "Ghép thành: B-A-N-A-N-A (Quả chuối)." },
        { id: 13, scrambled: "D / O / O / R", hint: "🚪 Cánh cửa ra vào", correct_word: "DOOR", explanation: "Ghép thành: D-O-O-R (Cửa ra vào)." },
        { id: 14, scrambled: "T / R / A / I / N", hint: "🚂 Đoàn tàu hỏa chạy ray", correct_word: "TRAIN", explanation: "Ghép thành: T-R-A-I-N (Tàu hỏa)." },
        { id: 15, scrambled: "J / U / I / C / E", hint: "🧃 Nước ép trái cây tươi mát", correct_word: "JUICE", explanation: "Ghép thành: J-U-I-C-E (Nước hoa quả)." }
    ];

    const rwPart4Cloze = {
        title: "A Friendly Dog",
        text_template: "I am an animal with four [16] and a long tail. I live in a house with a happy [17]. In the morning, children play with me in the green [18]. I like to run and catch a yellow [19]. At night, I sleep on a soft [20] in the kitchen. What am I? I am a dog.",
        word_bank: [
            { word: "legs", icon: "🦵", meaning: "đôi chân" },
            { word: "family", icon: "👨‍👩‍👧‍👦", meaning: "gia đình" },
            { word: "garden", icon: "🌳", meaning: "khu vườn" },
            { word: "ball", icon: "⚽", meaning: "quả bóng" },
            { word: "mat", icon: "🛋️", meaning: "tấm thảm mềm" },
            { word: "books", icon: "📚", meaning: "những cuốn sách" },
            { word: "water", icon: "💧", meaning: "nước uống" }
        ],
        questions: [
            { id: 16, correct_answer: "legs", explanation: "Chó có 4 chân ('four legs')." },
            { id: 17, correct_answer: "family", explanation: "Sống trong nhà cùng một gia đình ('happy family')." },
            { id: 18, correct_answer: "garden", explanation: "Chơi đùa trên bãi cỏ trong vườn ('green garden')." },
            { id: 19, correct_answer: "ball", explanation: "Chạy nhảy đuổi bắt quả bóng ('yellow ball')." },
            { id: 20, correct_answer: "mat", explanation: "Nằm ngủ trên chiếc thảm mềm ('soft mat')." }
        ]
    };

    const rwPart5Questions = [
        { id: 21, question: "21. Where are the children playing?", correct_answers: ["park", "garden", "beach"], clue: "Look at Picture 1: The boy and girl are running on the sand next to the ocean.", explanation: "Bé viết 1 từ: 'beach' (hoặc 'park')." },
        { id: 22, question: "22. What is flying high in the air?", correct_answers: ["kite", "a kite"], clue: "Look at Picture 1: A colourful diamond-shaped kite is flying.", explanation: "Bé viết: 'kite' (cánh diều)." },
        { id: 23, question: "23. Who is catching the ball now?", correct_answers: ["dog", "the dog"], clue: "Look at Picture 2: The small brown dog jumps up to grab the ball.", explanation: "Bé viết: 'dog' (chú chó)." },
        { id: 24, question: "24. What colour is the mother's hat?", correct_answers: ["yellow", "YELLOW"], clue: "Look at Picture 3: Mother is sitting under an umbrella wearing a big yellow sunhat.", explanation: "Bé viết: 'yellow' (màu vàng)." },
        { id: 25, question: "25. How many ice creams is Dad holding?", correct_answers: ["3", "three", "THREE"], clue: "Look at Picture 3: Dad is walking from the shop holding three cones.", explanation: "Bé viết: 'three' hoặc số '3'." }
    ];

    // =========================================================================
    // 3. SPEAKING (4 PARTS - TƯƠNG TÁC GIÁM KHẢO BẢN XỨ & GHI ÂM)
    // =========================================================================
    const speakingParts = {
        part_1: {
            title: "Part 1: Scene Picture & Greetings",
            examiner_instruction: "Hello! What's your name? ... Look at this picture. It's a sunny day at the park. Point to the tree. ... Where is the bird?",
            prompts: [
                {
                    q: "Hello, what's your name?",
                    model_answer: "Hello teacher! My name is Minh.",
                    vietnamese_hint: "Chào giám khảo và nói tên của con: 'Hello teacher! My name is [Tên của bé]'."
                },
                {
                    q: "Point to the tree. Where is the green tree?",
                    model_answer: "Here is the big green tree next to the lake.",
                    vietnamese_hint: "Chỉ tay vào cái cây to và nói: 'Here is the tree!'."
                },
                {
                    q: "Now look, where is the bird?",
                    model_answer: "The little blue bird is on the branch of the tree.",
                    vietnamese_hint: "Chỉ vào chú chim: 'The bird is in the tree!'."
                }
            ]
        },
        part_2: {
            title: "Part 2: Object Cards",
            examiner_instruction: "Look at these cards. Which is the banana? ... Put the banana next to the girl.",
            prompts: [
                {
                    q: "Which is the banana? What colour is it?",
                    model_answer: "This is the banana. It's yellow.",
                    vietnamese_hint: "Chỉ vào quả chuối: 'It's a banana. It is yellow.'"
                },
                {
                    q: "Do you like bananas? What fruit do you like?",
                    model_answer: "Yes, I do! I like apples and watermelon.",
                    vietnamese_hint: "Trả lời món trái cây con yêu thích: 'Yes, I do. I like [trái cây]'."
                },
                {
                    q: "Look at this bike. Can you ride a bike?",
                    model_answer: "Yes, I can ride my red bike every afternoon.",
                    vietnamese_hint: "Nói về sở thích đạp xe: 'Yes, I can ride a bike.'"
                }
            ]
        },
        part_3: {
            title: "Part 3: Questions about the Scene",
            examiner_instruction: "Now look at the boy. What is he doing? ... What colour is his T-shirt?",
            prompts: [
                {
                    q: "What is this boy doing?",
                    model_answer: "He is eating an ice cream and smiling.",
                    vietnamese_hint: "Miêu tả hành động: 'He is eating ice cream.'"
                },
                {
                    q: "What colour is his T-shirt?",
                    model_answer: "His T-shirt is bright orange.",
                    vietnamese_hint: "Nói màu áo của cậu bé: 'It's orange.'"
                },
                {
                    q: "Tell me about this dog.",
                    model_answer: "It's a small brown dog. It is running on the green grass.",
                    vietnamese_hint: "Miêu tả con chó: 'It is brown and friendly. It is running.'"
                }
            ]
        },
        part_4: {
            title: "Part 4: Personal Questions",
            examiner_instruction: "Now let's talk about you. How old are you? ... What's your favourite animal?",
            prompts: [
                {
                    q: "How old are you?",
                    model_answer: "I am seven years old.",
                    vietnamese_hint: "Trả lời tuổi của bé: 'I am [số tuổi] years old.'"
                },
                {
                    q: "What is your favourite animal?",
                    model_answer: "My favourite animal is a playful dolphin.",
                    vietnamese_hint: "Nói con vật con thích nhất: 'My favourite animal is [con vật]'."
                },
                {
                    q: "Is your house big or small?",
                    model_answer: "My house is big and has a nice garden.",
                    vietnamese_hint: "Trả lời về ngôi nhà của bé: 'My house is big/small.'"
                }
            ]
        }
    };

    return {
        id: profile.id,
        book: profile.book,
        book_title: profile.book_title,
        test_title: profile.test_title,
        badge: profile.badge,
        theme: profile.theme,
        duration_minutes: 45,
        listening: {
            total_questions: 20,
            parts: [
                { part_number: 1, title: "Part 1: Listen and draw lines (5 câu)", questions: part1Questions },
                { part_number: 2, title: "Part 2: Listen and write a name or a number (5 câu)", questions: part2Questions },
                { part_number: 3, title: "Part 3: Listen and tick the box A, B, C (5 câu)", questions: part3Questions },
                { part_number: 4, title: "Part 4: Listen and colour (5 câu)", questions: part4Questions }
            ]
        },
        reading_writing: {
            total_questions: 25,
            parts: [
                { part_number: 1, title: "Part 1: Put a tick (✓) or a cross (✗) (5 câu)", questions: rwPart1Questions },
                { part_number: 2, title: "Part 2: Look and write 'yes' or 'no' (5 câu)", questions: rwPart2Questions },
                { part_number: 3, title: "Part 3: Jumbled letters - Write the words (5 câu)", questions: rwPart3Questions },
                { part_number: 4, title: "Part 4: Read and choose words from the box (5 câu)", cloze: rwPart4Cloze },
                { part_number: 5, title: "Part 5: Look at the pictures and answer with 1 word (5 câu)", questions: rwPart5Questions }
            ]
        },
        speaking: speakingParts
    };
}

// Đối tượng Profile Starters Master
const startersProfileData = {
    avatar: "avatars/starters.jpg",
    name: "Starters Master",
    age: "Cambridge 1 - 4",
    curriculum: "Trọn Bộ 12 Đề Thi Cambridge Starters 1 - 4 (Listening • Reading & Writing • Speaking • Khiên 🛡️)",
    units: {},
    starters_tests: {}
};

// Khởi tạo 12 đề thi Starters 1 - 4
startersTestProfiles.forEach((profile, idx) => {
    startersProfileData.units[profile.id] = { title: `${profile.book} • ${profile.test_title}` };
    startersProfileData.starters_tests[profile.id] = generateStartersTest(profile, idx);
});

// Đăng ký profile Starters Master vào studentsDB
if (typeof studentsDB !== 'undefined') {
    studentsDB["starters"] = startersProfileData;
}
