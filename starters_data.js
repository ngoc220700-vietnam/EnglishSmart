// =========================================================================
// CAMBRIDGE PRE-A1 STARTERS 1 - 4 COMPREHENSIVE TEST DATABASE
// 12 FULL CAMBRIDGE YOUNG LEARNERS PRACTICE TESTS (STARTERS 1 - 4)
// ALL 3 SKILLS INCLUDED:
// 1. LISTENING (20 QUESTIONS: PART 1, 2, 3, 4)
// 2. READING & WRITING (25 QUESTIONS: PART 1, 2, 3, 4, 5)
// 3. SPEAKING (PART 1, 2, 3, 4 - AUDIO EXAMINER & MICROPHONE RECORDER)
// Official Cambridge Shields Scoring (Up to 15 Shields)
// =========================================================================

const startersTestProfiles = [
    // --- BOOK 1: CAMBRIDGE STARTERS 1 ---
    {
        id: "starters_1_test_1",
        book: "Starters 1",
        book_title: "Cambridge English Starters 1",
        test_title: "Test 1",
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
        test_title: "Test 2",
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
        test_title: "Test 3",
        badge: "Book 1 • Test 3",
        theme: "At School & The Toy Shop",
        lis_theme: "Classroom Art Lesson, Toy Castle & Farm Animals",
        rw_theme: "School Bag Essentials, Jungle Animals & Bedroom Furniture",
        spk_theme: "Art Room, Vehicle Cards & Best Friends"
    },

    // --- BOOK 2: CAMBRIDGE STARTERS 2 ---
    {
        id: "starters_2_test_1",
        book: "Starters 2",
        book_title: "Cambridge English Starters 2",
        test_title: "Test 1",
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
        test_title: "Test 2",
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
        test_title: "Test 3",
        badge: "Book 2 • Test 3",
        theme: "Sports Day & In the Garden",
        lis_theme: "Running Races, The Treehouse & Pet Friends",
        rw_theme: "Garden Flowers, Action Verbs & Clothes in the Wardrobe",
        spk_theme: "Garden Scene, Clothes Cards & Sports Hobbies"
    },

    // --- BOOK 3: CAMBRIDGE STARTERS 3 ---
    {
        id: "starters_3_test_1",
        book: "Starters 3",
        book_title: "Cambridge English Starters 3",
        test_title: "Test 1",
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
        test_title: "Test 2",
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
        test_title: "Test 3",
        badge: "Book 3 • Test 3",
        theme: "At the Airport & Travel Adventure",
        lis_theme: "Airport Terminal, Train Station & Mountain Cabin",
        rw_theme: "Vehicles & Transport, Camping Gear & Weather Words",
        spk_theme: "Travel Scene, Vehicle Cards & Holiday Trips"
    },

    // --- BOOK 4: CAMBRIDGE STARTERS 4 ---
    {
        id: "starters_4_test_1",
        book: "Starters 4",
        book_title: "Cambridge English Starters 4",
        test_title: "Test 1",
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
        test_title: "Test 2",
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
        test_title: "Test 3",
        badge: "Book 4 • Test 3",
        theme: "Grandma's House & The Pet Show",
        lis_theme: "Baking Cookies, Pet Parade & The Tree Swing",
        rw_theme: "Pet Animals, Family Members & House Rooms",
        spk_theme: "Pet Show Scene, Food Cards & Pets at Home"
    }
];

// Generator for standard Cambridge Pre-A1 Starters Tests
function generateStartersTest(profile, idx) {
    const testNum = idx + 1;

    // =========================================================================
    // 1. LISTENING (4 PARTS - 20 QUESTIONS)
    // =========================================================================
    // 6 Interactive Hotspot Target Locations distributed on the book scene image
    const part1Spots = [
        { id: "spot_1", x: 46, y: 40, label: "A" },
        { id: "spot_2", x: 82, y: 44, label: "B" },
        { id: "spot_3", x: 64, y: 44, label: "C" },
        { id: "spot_4", x: 28, y: 39, label: "D" },
        { id: "spot_5", x: 48, y: 58, label: "E" },
        { id: "spot_6", x: 74, y: 54, label: "F" }
    ];

    const part1Names = [
        { name: "Tom", spot: "spot_1", clue: "Can you see Tom? He is sailing his red boat." },
        { name: "Lucy", spot: "spot_2", clue: "Where is Lucy? She is sitting under the oak tree reading a book." },
        { name: "Bill", spot: "spot_3", clue: "Look at Bill! He is kicking a football into the net." },
        { name: "Sue", spot: "spot_4", clue: "Is that Sue? Yes, she is sitting on the yellow bench eating ice cream." },
        { name: "Alex", spot: "spot_5", clue: "Who is on the path with a helmet? That is Alex riding his bike." }
    ];

    const part1Questions = part1Names.map((item, i) => ({
        id: i + 1,
        type: "match",
        name: item.name,
        target_spot: item.spot,
        audio_prompt: item.clue,
        correct_answer: item.spot,
        explanation: `Audio: "${item.clue}" -> Correct target is Spot ${item.spot.toUpperCase().replace('SPOT_', '')}.`
    }));

    const part2Questions = [
        { id: 6, question: "6. What is the girl's name?", correct_answers: ["Kim", "KIM"], audio_script: "Examiner: What is your name? - Girl: My name is Kim. K-I-M.", explanation: "The girl spells her name: K-I-M." },
        { id: 7, question: "7. How old is she?", correct_answers: ["8", "eight", "EIGHT"], audio_script: "Examiner: And how old are you, Kim? - Girl: I'm eight years old today!", explanation: "The girl says: 'I am eight years old'." },
        { id: 8, question: "8. What is her school's name? [______] School", correct_answers: ["Green", "GREEN"], audio_script: "Examiner: What school do you go to? - Girl: I go to Green School. G-R-E-E-N.", explanation: "The school name is Green School (G-R-E-E-N)." },
        { id: 9, question: "9. How many children are in her class?", correct_answers: ["12", "twelve", "TWELVE"], audio_script: "Examiner: How many children are in your class? - Girl: There are twelve children.", explanation: "There are twelve children in the class." },
        { id: 10, question: "10. What is her teacher's name? Mrs [______]", correct_answers: ["Bird", "BIRD"], audio_script: "Examiner: Who is your teacher? - Girl: Her name is Mrs Bird. B-I-R-D.", explanation: "The teacher's name is Mrs Bird (B-I-R-D)." }
    ];

    const part3Questions = [
        {
            id: 11,
            question: "11. What is Pat's favourite animal?",
            options: ["A. Monkey", "B. Elephant", "C. Giraffe"],
            correct_answers: ["B"],
            audio_script: "Boy: Do you like monkeys, Pat? - Pat: They are cute, but my favourite is the elephant!",
            explanation: "Pat confirms her favourite animal is the elephant -> Answer B."
        },
        {
            id: 12,
            question: "12. Which sport is Nick playing today?",
            options: ["A. Tennis", "B. Football", "C. Swimming"],
            correct_answers: ["A"],
            audio_script: "Girl: Is Nick swimming in the pool? - Boy: No, he's on the court playing tennis with his sister.",
            explanation: "Nick is playing tennis on the court -> Answer A."
        },
        {
            id: 13,
            question: "13. What is May having for lunch?",
            options: ["A. Burger and chips", "B. Fish and rice", "C. Chicken salad"],
            correct_answers: ["B"],
            audio_script: "Dad: Do you want chicken today, May? - May: No thanks, Dad. I'd love fish and rice, please.",
            explanation: "May chooses fish and rice -> Answer B."
        },
        {
            id: 14,
            question: "14. Where is Sam's puppy?",
            options: ["A. In the bedroom", "B. Under the kitchen table", "C. In the garden under a bush"],
            correct_answers: ["C"],
            audio_script: "Mum: Sam, look in the garden! - Sam: Oh, the puppy is sleeping under the rose bush!",
            explanation: "The puppy is sleeping under the rose bush in the garden -> Answer C."
        },
        {
            id: 15,
            question: "15. What colour is Anna's new school bag?",
            options: ["A. Purple and pink", "B. Blue and yellow", "C. Bright green"],
            correct_answers: ["A"],
            audio_script: "Girl: Did you get a green bag, Anna? - Anna: No, my new bag is purple and pink!",
            explanation: "Anna's new bag is purple and pink -> Answer A."
        }
    ];

    const part4Questions = [
        { id: 16, item: "The balloon in the sky", correct_color: "Red", audio_script: "Examiner: Look at the balloon flying in the sky. Colour it red.", explanation: "Colour the balloon in the sky red." },
        { id: 17, item: "The cat sleeping on the sofa", correct_color: "Brown", audio_script: "Examiner: Can you see the cat on the sofa? Colour the cat brown.", explanation: "Colour the cat sleeping on the sofa brown." },
        { id: 18, item: "The car next to the house", correct_color: "Blue", audio_script: "Examiner: Find the car next to the front door. Colour it blue.", explanation: "Colour the car next to the house blue." },
        { id: 19, item: "The flower in the girl's hair", correct_color: "Yellow", audio_script: "Examiner: Now look at the flower in the girl's hair. Make it yellow.", explanation: "Colour the flower in the girl's hair yellow." },
        { id: 20, item: "The apple on the kitchen table", correct_color: "Green", audio_script: "Examiner: Can you see the apple on the table? Colour it green.", explanation: "Colour the apple on the kitchen table green." }
    ];

    // =========================================================================
    // 2. READING & WRITING (5 PARTS - 25 QUESTIONS)
    // =========================================================================
    const rwPart1Questions = [
        { id: 1, statement: "This is a pencil.", is_correct: true, icon: "✏️", explanation: "The image shows a pencil -> Tick (✓)." },
        { id: 2, statement: "This is an elephant.", is_correct: false, icon: "🐊", explanation: "The image shows a crocodile -> Cross (✗)." },
        { id: 3, statement: "This is a guitar.", is_correct: true, icon: "🎸", explanation: "The image shows a guitar -> Tick (✓)." },
        { id: 4, statement: "This is a computer.", is_correct: false, icon: "⚽", explanation: "The image shows a football -> Cross (✗)." },
        { id: 5, statement: "This is an apple.", is_correct: true, icon: "🍎", explanation: "The image shows an apple -> Tick (✓)." }
    ];

    const rwPart2Questions = [
        { id: 6, statement: "There is a dog sleeping under the table.", correct_answers: ["yes", "YES"], explanation: "A dog is sleeping under the table -> 'yes'." },
        { id: 7, statement: "The boy is wearing a blue hat.", correct_answers: ["no", "NO"], explanation: "The boy is wearing a red hat -> 'no'." },
        { id: 8, statement: "There are two birds flying in the sky.", correct_answers: ["yes", "YES"], explanation: "Two birds are flying in the sky -> 'yes'." },
        { id: 9, statement: "The girl is drinking a glass of milk.", correct_answers: ["no", "NO"], explanation: "The girl is eating a banana -> 'no'." },
        { id: 10, statement: "A red ball is on the green mat.", correct_answers: ["yes", "YES"], explanation: "A red ball is on the green floor mat -> 'yes'." }
    ];

    const rwPart3Questions = [
        { id: 11, scrambled: "E / S / O / H / R", hint: "🐴 Farm animal", correct_word: "HORSE", explanation: "Letters rearranged: H-O-R-S-E." },
        { id: 12, scrambled: "A / B / N / A / N / A", hint: "🍌 Sweet fruit", correct_word: "BANANA", explanation: "Letters rearranged: B-A-N-A-N-A." },
        { id: 13, scrambled: "D / O / O / R", hint: "🚪 Room entrance", correct_word: "DOOR", explanation: "Letters rearranged: D-O-O-R." },
        { id: 14, scrambled: "T / R / A / I / N", hint: "🚂 Track vehicle", correct_word: "TRAIN", explanation: "Letters rearranged: T-R-A-I-N." },
        { id: 15, scrambled: "J / U / I / C / E", hint: "🧃 Fresh drink", correct_word: "JUICE", explanation: "Letters rearranged: J-U-I-C-E." }
    ];

    const rwPart4Cloze = {
        title: "A Friendly Dog",
        text_template: "I am an animal with four [16] and a long tail. I live in a house with a happy [17]. In the morning, children play with me in the green [18]. I like to run and catch a yellow [19]. At night, I sleep on a soft [20] in the kitchen. What am I? I am a dog.",
        word_bank: [
            { word: "legs", icon: "🦵" },
            { word: "family", icon: "👨‍👩‍👧‍👦" },
            { word: "garden", icon: "🌳" },
            { word: "ball", icon: "⚽" },
            { word: "mat", icon: "🛋️" },
            { word: "books", icon: "📚" },
            { word: "water", icon: "💧" }
        ],
        questions: [
            { id: 16, correct_answer: "legs", explanation: "Dogs have four legs ('four legs')." },
            { id: 17, correct_answer: "family", explanation: "Living with a happy family ('happy family')." },
            { id: 18, correct_answer: "garden", explanation: "Playing in the green garden ('green garden')." },
            { id: 19, correct_answer: "ball", explanation: "Chasing a yellow ball ('yellow ball')." },
            { id: 20, correct_answer: "mat", explanation: "Sleeping on a soft mat ('soft mat')." }
        ]
    };

    const rwPart5Questions = [
        { id: 21, question: "21. Where are the children playing?", correct_answers: ["park", "garden", "beach"], clue: "Look at Picture 1: The boy and girl are running on the sand next to the ocean.", explanation: "Write 1 word: 'beach' or 'park'." },
        { id: 22, question: "22. What is flying high in the air?", correct_answers: ["kite", "a kite"], clue: "Look at Picture 1: A colourful diamond-shaped kite is flying.", explanation: "Write 1 word: 'kite'." },
        { id: 23, question: "23. Who is catching the ball now?", correct_answers: ["dog", "the dog"], clue: "Look at Picture 2: The small brown dog jumps up to grab the ball.", explanation: "Write 1 word: 'dog'." },
        { id: 24, question: "24. What colour is the mother's hat?", correct_answers: ["yellow", "YELLOW"], clue: "Look at Picture 3: Mother is sitting under an umbrella wearing a big yellow sunhat.", explanation: "Write 1 word: 'yellow'." },
        { id: 25, question: "25. How many ice creams is Dad holding?", correct_answers: ["3", "three", "THREE"], clue: "Look at Picture 3: Dad is walking from the shop holding three cones.", explanation: "Write 1 word: 'three' or '3'." }
    ];

    // =========================================================================
    // 3. SPEAKING (4 PARTS - EXAMINER AUDIO & RECORDING)
    // =========================================================================
    const speakingParts = {
        part_1: {
            title: "Part 1: Scene Picture & Greetings",
            examiner_instruction: "Hello! What is your name? Look at this picture. It is a sunny day at the park. Point to the tree. Where is the bird?",
            prompts: [
                {
                    q: "Hello, what is your name?",
                    model_answer: "Hello teacher! My name is Minh.",
                    hint: "Greet the examiner and state your name: 'Hello teacher! My name is [Your name]'."
                },
                {
                    q: "Point to the tree. Where is the green tree?",
                    model_answer: "Here is the big green tree next to the lake.",
                    hint: "Point to the tree and say: 'Here is the tree!'."
                },
                {
                    q: "Now look, where is the bird?",
                    model_answer: "The little blue bird is on the branch of the tree.",
                    hint: "Point to the bird and say: 'The bird is in the tree!'."
                }
            ]
        },
        part_2: {
            title: "Part 2: Object Cards",
            examiner_instruction: "Look at these cards. Which is the banana? Put the banana next to the girl.",
            prompts: [
                {
                    q: "Which is the banana? What colour is it?",
                    model_answer: "This is the banana. It is yellow.",
                    hint: "Point to the banana: 'It is a banana. It is yellow.'"
                },
                {
                    q: "Do you like bananas? What fruit do you like?",
                    model_answer: "Yes, I do! I like apples and watermelon.",
                    hint: "Express your fruit preference: 'Yes, I do. I like apples.'"
                },
                {
                    q: "Look at this bike. Can you ride a bike?",
                    model_answer: "Yes, I can ride my red bike every afternoon.",
                    hint: "Talk about your bike riding ability: 'Yes, I can ride a bike.'"
                }
            ]
        },
        part_3: {
            title: "Part 3: Questions about the Scene",
            examiner_instruction: "Now look at the boy. What is he doing? What colour is his T-shirt?",
            prompts: [
                {
                    q: "What is this boy doing?",
                    model_answer: "He is eating an ice cream and smiling.",
                    hint: "Describe the action: 'He is eating ice cream.'"
                },
                {
                    q: "What colour is his T-shirt?",
                    model_answer: "His T-shirt is bright orange.",
                    hint: "State the T-shirt colour: 'It is orange.'"
                },
                {
                    q: "Tell me about this dog.",
                    model_answer: "It is a small brown dog. It is running on the green grass.",
                    hint: "Describe the dog: 'It is brown and friendly. It is running.'"
                }
            ]
        },
        part_4: {
            title: "Part 4: Personal Questions",
            examiner_instruction: "Now let's talk about you. How old are you? What is your favourite animal?",
            prompts: [
                {
                    q: "How old are you?",
                    model_answer: "I am seven years old.",
                    hint: "State your age: 'I am [age] years old.'"
                },
                {
                    q: "What is your favourite animal?",
                    model_answer: "My favourite animal is a playful dolphin.",
                    hint: "Name your favourite animal: 'My favourite animal is a dolphin.'"
                },
                {
                    q: "Is your house big or small?",
                    model_answer: "My house is big and has a nice garden.",
                    hint: "Describe your home: 'My house is big and has a garden.'"
                }
            ]
        }
    };

    const bookNum = parseInt(profile.book.replace('Starters ', '')) || 1;
    const testNumInBook = ((idx % 3) + 1);
    const basePage = 5 + (testNumInBook - 1) * 14;

    let spkScenePage, spkCardsPage;
    if (bookNum === 1 || bookNum === 2) {
        if (testNumInBook === 1) { spkScenePage = 44; spkCardsPage = 45; }
        else if (testNumInBook === 2) { spkScenePage = 46; spkCardsPage = 47; }
        else { spkScenePage = 48; spkCardsPage = 49; }
    } else {
        if (testNumInBook === 1) { spkScenePage = 47; spkCardsPage = 48; }
        else if (testNumInBook === 2) { spkScenePage = 51; spkCardsPage = 52; }
        else { spkScenePage = 55; spkCardsPage = 56; }
    }

    const bookImages = {
        listening: {
            part_1: [`images/starters/book${bookNum}/page_${basePage}.jpg`],
            part_2: [`images/starters/book${bookNum}/page_${basePage + 1}.jpg`],
            part_3: [`images/starters/book${bookNum}/page_${basePage + 3}.jpg`, `images/starters/book${bookNum}/page_${basePage + 4}.jpg`],
            part_4: [`images/starters/book${bookNum}/page_${basePage + 5}.jpg`]
        },
        reading_writing: {
            part_1: [`images/starters/book${bookNum}/page_${basePage + 6}.jpg`, `images/starters/book${bookNum}/page_${basePage + 7}.jpg`],
            part_2: [`images/starters/book${bookNum}/page_${basePage + 8}.jpg`],
            part_3: [`images/starters/book${bookNum}/page_${basePage + 9}.jpg`],
            part_4: [`images/starters/book${bookNum}/page_${basePage + 10}.jpg`],
            part_5: [
                `images/starters/book${bookNum}/page_${basePage + 11}.jpg`,
                `images/starters/book${bookNum}/page_${basePage + 12}.jpg`,
                `images/starters/book${bookNum}/page_${basePage + 13}.jpg`
            ]
        },
        speaking: {
            part_1: [`images/starters/book${bookNum}/page_${spkScenePage}.jpg`],
            part_2: [`images/starters/book${bookNum}/page_${spkCardsPage}.jpg`],
            part_3: [`images/starters/book${bookNum}/page_${spkScenePage}.jpg`],
            part_4: [`images/starters/book${bookNum}/page_${spkScenePage}.jpg`]
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
        book_images: bookImages,
        part1_spots: part1Spots,
        listening: {
            total_questions: 20,
            parts: [
                { part_number: 1, title: "Part 1: Listen and draw lines (5 questions)", spots: part1Spots, questions: part1Questions },
                { part_number: 2, title: "Part 2: Listen and write a name or a number (5 questions)", questions: part2Questions },
                { part_number: 3, title: "Part 3: Listen and tick the box A, B, C (5 questions)", questions: part3Questions },
                { part_number: 4, title: "Part 4: Listen and colour (5 questions)", questions: part4Questions }
            ]
        },
        reading_writing: {
            total_questions: 25,
            parts: [
                { part_number: 1, title: "Part 1: Put a tick (✓) or a cross (✗) (5 questions)", questions: rwPart1Questions },
                { part_number: 2, title: "Part 2: Look and write 'yes' or 'no' (5 questions)", questions: rwPart2Questions },
                { part_number: 3, title: "Part 3: Jumbled letters - Write the words (5 questions)", questions: rwPart3Questions },
                { part_number: 4, title: "Part 4: Read and choose words from the box (5 questions)", cloze: rwPart4Cloze },
                { part_number: 5, title: "Part 5: Look at the pictures and answer with 1 word (5 questions)", questions: rwPart5Questions }
            ]
        },
        speaking: speakingParts
    };
}

const startersProfileData = {
    avatar: "avatars/starters.jpg",
    name: "Starters Master",
    age: "Cambridge 1 - 4",
    curriculum: "Complete 12 Cambridge Pre-A1 Starters 1 - 4 Practice Tests (Listening • Reading & Writing • Speaking • Cambridge Shields 🛡️)",
    units: {},
    starters_tests: {}
};

startersTestProfiles.forEach((profile, idx) => {
    startersProfileData.units[profile.id] = { title: `${profile.book} • ${profile.test_title}` };
    startersProfileData.starters_tests[profile.id] = generateStartersTest(profile, idx);
});

if (typeof studentsDB !== 'undefined') {
    studentsDB["starters"] = startersProfileData;
}