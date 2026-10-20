// =========================================================================
// CAMBRIDGE PRE-A1 STARTERS 1 - 4 COMPREHENSIVE TEST DATABASE
// 12 FULL CAMBRIDGE PRACTICE TESTS (BOOKS 1 - 4)
// 100% AUTHENTIC QUESTIONS & EXAMPLES DIRECTLY FROM SCANNED CAMBRIDGE BOOKS
// =========================================================================

const startersTestProfiles = [
    // --- BOOK 1: CAMBRIDGE STARTERS 1 ---
    {
        id: "starters_1_test_1",
        book: "Starters 1",
        book_title: "Cambridge English Starters 1",
        test_title: "Test 1",
        badge: "Book 1 - Test 1",
        p1_names: ["Mark", "Grace", "Eva", "Dan", "Nick", "Alice", "Alex"],
        lis_p2: {
            examples: [
                { question: "What is the boy's name?", answer: "Tom" },
                { question: "How old is he?", answer: "11" }
            ],
            questions: [
                { id: 6, question: "6. What is Tom's friend's name?", correct_answers: ["Alex", "ALEX", "alex"], explanation: "Tom confirms his friend's name is Alex." },
                { id: 7, question: "7. How old is Tom's friend?", correct_answers: ["12", "twelve", "TWELVE"], explanation: "His friend is twelve years old." },
                { id: 8, question: "8. How many brothers has Tom's friend got?", correct_answers: ["2", "two", "TWO"], explanation: "His friend has got two brothers." },
                { id: 9, question: "9. How many children are in Tom's class?", correct_answers: ["14", "fourteen", "FOURTEEN"], explanation: "There are fourteen children in his class." },
                { id: 10, question: "10. What is the name of Tom's teacher? Mrs [______]", correct_answers: ["Bird", "BIRD", "bird"], explanation: "His teacher's name is Mrs Bird." }
            ]
        },
        lis_p3: {
            questions: [
                {
                    id: 11,
                    question: "11. What is Anna taking to school?",
                    options: ["A", "B", "C"],
                    correct_answers: ["B"],
                    audio_script: "Mum: Have you got your books for school, Anna, and some pens? - Anna: Yes, Mum. - Mum: And have you got your jacket? It's cold today. - Anna: No, Mum. But I don't want it and I'm not taking it!",
                    explanation: "Anna is taking her books and pens, but not her jacket -> Answer B."
                },
                {
                    id: 12,
                    question: "12. Which is Bill's dad?",
                    options: ["A", "B", "C"],
                    correct_answers: ["C"],
                    audio_script: "Woman: Where's your dad today, Bill? Is he playing basketball? - Bill: No, he's in the garden. - Woman: Is he cleaning the car? - Bill: No, he's painting the window. Look, there he is!",
                    explanation: "Bill's dad is painting the window -> Answer C."
                },
                {
                    id: 13,
                    question: "13. What would Sam like to do?",
                    options: ["A", "B", "C"],
                    correct_answers: ["C"],
                    audio_script: "Woman: Would you like to ride a horse today, Sam? - Sam: No, thanks. I don't like horses. - Woman: Would you like to play tennis? - Sam: No, can I go swimming with Dad, please?",
                    explanation: "Sam would like to go swimming with Dad -> Answer C."
                },
                {
                    id: 14,
                    question: "14. Which is Jill's bedroom?",
                    options: ["A", "B", "C"],
                    correct_answers: ["B"],
                    audio_script: "Man: Is that your bedroom, Jill, with the blue bed? - Jill: No, mine has got a yellow bed and a green chair next to it.",
                    explanation: "Jill's bedroom has a yellow bed and a green chair -> Answer B."
                },
                {
                    id: 15,
                    question: "15. Which is Nick's brother?",
                    options: ["A", "B", "C"],
                    correct_answers: ["A"],
                    audio_script: "Girl: Is that your brother with the baseball cap, Nick? - Nick: No, my brother has brown hair and he's reading a comic under the umbrella.",
                    explanation: "Nick's brother has brown hair and is reading under the umbrella -> Answer A."
                }
            ]
        },
        lis_p4: {
            example: {
                item: "The cake in the cupboard",
                color: "Brown",
                spot: { x: 77.1, y: 15.6 },
                audio_script: "Examiner: Look at the picture. Can you see the cake in the cupboard? - Boy: Yes, I can. - Examiner: Colour it brown, please. - Boy: Brown? Okay."
            },
            questions: [
                {
                    id: 16,
                    item: "The cake in the boy's hand",
                    correct_color: "Pink",
                    spot: { x: 61.1, y: 35.8 },
                    audio_script: "Examiner: Look at the boy who is standing up. Can you see the cake in his hand? - Girl: Yes, I can. - Examiner: Colour the cake in his hand pink, please. - Girl: Pink? Okay, I'm colouring it pink now.",
                    explanation: "Colour the cake in the boy's hand pink."
                },
                {
                    id: 17,
                    item: "The cake on the girl's plate",
                    correct_color: "Yellow",
                    spot: { x: 45.3, y: 54.8 },
                    audio_script: "Examiner: Now look at the girl at the table. Can you see the cake on her plate? - Girl: Yes, she's eating dinner. - Examiner: Colour that cake yellow. - Girl: Yellow. Okay, that's done.",
                    explanation: "Colour the cake on the girl's plate yellow."
                },
                {
                    id: 18,
                    item: "The cake on the mat in front of the door",
                    correct_color: "Orange",
                    spot: { x: 14.1, y: 57.0 },
                    audio_script: "Examiner: Find the mat by the door. - Girl: Okay, I see the mat. Oh, there's a cake on it! - Examiner: That's right! Colour the cake on the mat orange. - Girl: Orange for the cake on the mat.",
                    explanation: "Colour the cake on the mat in front of the door orange."
                },
                {
                    id: 19,
                    item: "The cake in front of the cat",
                    correct_color: "Green",
                    spot: { x: 41.4, y: 74.9 },
                    audio_script: "Examiner: Can you see the cat under the table? - Girl: Yes, it's walking on the floor. - Examiner: There is a cake in front of the cat. Colour it green. - Girl: A green cake? That's funny! Okay.",
                    explanation: "Colour the cake in front of the cat green."
                },
                {
                    id: 20,
                    item: "The cake next to the mother's feet",
                    correct_color: "Blue",
                    spot: { x: 14.5, y: 68.7 },
                    audio_script: "Examiner: Now find the mother. - Girl: She's standing near the door and pointing at the floor. - Examiner: Yes. Look at the cake next to her feet. Colour it blue. - Girl: Blue? Yes, I'm colouring it blue.",
                    explanation: "Colour the cake next to the mother's feet blue."
                }
            ]
        },
        rw_p1: {
            examples: [
                { statement: "This is a foot.", answer: true, image_desc: "A foot" },
                { statement: "These are pianos.", answer: false, image_desc: "Two guitars" }
            ],
            questions: [
                { id: 1, image_desc: "A train", statement: "This is a train.", is_correct: true, correct_answer: "tick", explanation: "The image shows a train -> Tick." },
                { id: 2, image_desc: "Sausages", statement: "These are sausages.", is_correct: true, correct_answer: "tick", explanation: "The image shows sausages -> Tick." },
                { id: 3, image_desc: "T-shirts", statement: "These are skirts.", is_correct: false, correct_answer: "cross", explanation: "The image shows T-shirts, not skirts -> Cross." },
                { id: 4, image_desc: "A bookcase", statement: "This is a lamp.", is_correct: false, correct_answer: "cross", explanation: "The image shows a bookcase, not a lamp -> Cross." },
                { id: 5, image_desc: "A watch", statement: "This is a watch.", is_correct: true, correct_answer: "tick", explanation: "The image shows a watch -> Tick." }
            ]
        },
        rw_p2: {
            examples: [
                { statement: "A young child is waving.", answer: "yes" },
                { statement: "The woman's bag is in her hand.", answer: "no" }
            ],
            questions: [
                { id: 6, statement: "6. Two people are wearing red shorts.", correct_answer: "yes", explanation: "In the picture, two people are wearing red shorts (yes)." },
                { id: 7, statement: "7. The door of the house is closed.", correct_answer: "no", explanation: "The door of the house is open, not closed (no)." },
                { id: 8, statement: "8. The dog has brown ears.", correct_answer: "yes", explanation: "The dog sitting on the ground has brown ears (yes)." },
                { id: 9, statement: "9. The girl in a blue jacket is talking.", correct_answer: "no", explanation: "The girl is drinking, not talking (no)." },
                { id: 10, statement: "10. The man with black hair is driving.", correct_answer: "yes", explanation: "The man with black hair is driving the car (yes)." }
            ]
        }
    },
    {
        id: "starters_1_test_2",
        book: "Starters 1",
        book_title: "Cambridge English Starters 1",
        test_title: "Test 2",
        badge: "Book 1 - Test 2",
        p1_names: ["Mark", "Jill", "Pat", "Grace", "Alice", "Hugo", "Ben"],
        lis_p2: {
            examples: [
                { question: "What is the name of May's toy monster?", answer: "Pink" },
                { question: "How old is the monster?", answer: "2" }
            ],
            questions: [
                { id: 6, question: "6. What number is Pink's bus?", correct_answers: ["16", "sixteen", "SIXTEEN"], explanation: "Pink takes bus number sixteen." },
                { id: 7, question: "7. What is the name of Pink's school? [______] School", correct_answers: ["Sun", "SUN", "sun"], explanation: "The school is Sun School." },
                { id: 8, question: "8. How many legs has Pink got?", correct_answers: ["4", "four", "FOUR"], explanation: "The monster Pink has four legs." },
                { id: 9, question: "9. What is the name of the chicken?", correct_answers: ["Cluck", "CLUCK", "cluck"], explanation: "The chicken is named Cluck." },
                { id: 10, question: "10. How many eggs has the chicken got?", correct_answers: ["3", "three", "THREE"], explanation: "The chicken has three eggs." }
            ]
        },
        rw_p2: {
            examples: [
                { statement: "There is a mirror on the wall.", answer: "yes" },
                { statement: "The baby is having a bath.", answer: "no" }
            ],
            questions: [
                { id: 6, statement: "6. Some clothes are on the chair.", correct_answer: "yes", explanation: "There are clothes folded on the chair (yes)." },
                { id: 7, statement: "7. The boy has got brown hair.", correct_answer: "yes", explanation: "The boy has brown hair (yes)." },
                { id: 8, statement: "8. There are three boats in the water.", correct_answer: "no", explanation: "There are two boats, not three (no)." },
                { id: 9, statement: "9. There is a rug on the floor.", correct_answer: "yes", explanation: "A round rug is placed on the floor (yes)." },
                { id: 10, statement: "10. The girl is wearing green socks.", correct_answer: "no", explanation: "The girl is wearing yellow socks (no)." }
            ]
        }
    },
    {
        id: "starters_1_test_3",
        book: "Starters 1",
        book_title: "Cambridge English Starters 1",
        test_title: "Test 3",
        badge: "Book 1 - Test 3",
        p1_names: ["Matt", "Sue", "Tom", "Hugo", "Jill", "Lucy", "Alex"],
        lis_p2: {
            examples: [
                { question: "What is the boy's name?", answer: "Bill" },
                { question: "How many arms has the monster got?", answer: "6" }
            ],
            questions: [
                { id: 6, question: "6. What is the monster's name?", correct_answers: ["Croc", "CROC", "croc"], explanation: "The monster's name is Croc." },
                { id: 7, question: "7. How many drawings of monsters has Bill got?", correct_answers: ["8", "eight", "EIGHT"], explanation: "Bill has eight drawings of monsters." },
                { id: 8, question: "8. What is Bill's teacher's name? Mrs [______]", correct_answers: ["Hall", "HALL", "hall"], explanation: "His teacher's name is Mrs Hall." },
                { id: 9, question: "9. How many boys are in Bill's class?", correct_answers: ["12", "twelve", "TWELVE"], explanation: "There are twelve boys in his class." },
                { id: 10, question: "10. Which school does Bill go to? [______] School", correct_answers: ["River", "RIVER", "river"], explanation: "Bill attends River School." }
            ]
        },
        rw_p2: {
            examples: [
                { statement: "The boy and girl are waving.", answer: "yes" },
                { statement: "Some birds are sitting in a tree.", answer: "no" }
            ],
            questions: [
                { id: 6, statement: "6. The man with black hair is taking a photo.", correct_answer: "yes", explanation: "The man with black hair is holding a camera taking a photo (yes)." },
                { id: 7, statement: "7. The door of the house is open.", correct_answer: "no", explanation: "The door of the house is closed (no)." },
                { id: 8, statement: "8. A baby is playing with his toys.", correct_answer: "yes", explanation: "The baby is on the lawn playing with toys (yes)." },
                { id: 9, statement: "9. The woman in the garden is wearing a red dress.", correct_answer: "no", explanation: "She is wearing a blue dress (no)." },
                { id: 10, statement: "10. The brown horse has a white tail.", correct_answer: "yes", explanation: "The brown horse has a distinctive white tail (yes)." }
            ]
        }
    },

    // --- BOOK 2: CAMBRIDGE STARTERS 2 ---
    {
        id: "starters_2_test_1",
        book: "Starters 2",
        book_title: "Cambridge English Starters 2",
        test_title: "Test 1",
        badge: "Book 2 - Test 1",
        p1_names: ["Pat", "Hugo", "Mark", "Jill", "Alice", "Lucy", "Kim"],
        lis_p2: {
            examples: [
                { question: "What is this robot's name?", answer: "Bill" },
                { question: "How many robots has the boy got?", answer: "3" }
            ],
            questions: [
                { id: 6, question: "6. Which friend can the robot phone?", correct_answers: ["Tom", "TOM", "tom"], explanation: "The robot can call his friend Tom." },
                { id: 7, question: "7. How many words can the robot say?", correct_answers: ["20", "twenty", "TWENTY"], explanation: "The robot can say twenty words." },
                { id: 8, question: "8. What is the name of the boy's cousin?", correct_answers: ["Lucy", "LUCY", "lucy"], explanation: "The boy's cousin is named Lucy." },
                { id: 9, question: "9. How many games can the robot play?", correct_answers: ["4", "four", "FOUR"], explanation: "The robot knows four games." },
                { id: 10, question: "10. What is the cat's name?", correct_answers: ["Tiger", "TIGER", "tiger"], explanation: "The family cat is named Tiger." }
            ]
        },
        rw_p2: {
            examples: [
                { statement: "The family is in their dining room.", answer: "yes" },
                { statement: "The baby's balloon is blue.", answer: "no" }
            ],
            questions: [
                { id: 6, statement: "6. The mother has got some drinks.", correct_answer: "yes", explanation: "The mother is carrying drinks on a tray (yes)." },
                { id: 7, statement: "7. One person is holding a camera.", correct_answer: "yes", explanation: "A person is holding a camera (yes)." },
                { id: 8, statement: "8. You can see a doll on the table.", correct_answer: "no", explanation: "There is no doll on the table (no)." },
                { id: 9, statement: "9. There is a tiger in the painting.", correct_answer: "yes", explanation: "The framed picture on the wall shows a tiger (yes)." },
                { id: 10, statement: "10. The door is closed.", correct_answer: "no", explanation: "The door is wide open (no)." }
            ]
        }
    },
    {
        id: "starters_2_test_2",
        book: "Starters 2",
        book_title: "Cambridge English Starters 2",
        test_title: "Test 2",
        badge: "Book 2 - Test 2",
        p1_names: ["Ben", "Alice", "Grace", "Mark", "Hugo", "Kim", "Nick"],
        lis_p2: {
            examples: [
                { question: "What is the name of the girl's brother?", answer: "Sam" },
                { question: "How old is the girl's brother?", answer: "2" }
            ],
            questions: [
                { id: 6, question: "6. What is the name of the girl's sister?", correct_answers: ["Anna", "ANNA", "anna"], explanation: "Her sister's name is Anna." },
                { id: 7, question: "7. How old is the girl's sister?", correct_answers: ["8", "eight", "EIGHT"], explanation: "Her sister is eight years old." },
                { id: 8, question: "8. What is the name of the girl's school? [______] School", correct_answers: ["King", "KING", "king"], explanation: "She attends King School." },
                { id: 9, question: "9. What is the name of the girl's street? [______] Street", correct_answers: ["Park", "PARK", "park"], explanation: "She lives in Park Street." },
                { id: 10, question: "10. How many cousins has the girl got?", correct_answers: ["5", "five", "FIVE"], explanation: "She has got five cousins." }
            ]
        },
        rw_p2: {
            examples: [
                { statement: "There is one teacher in the classroom.", answer: "yes" },
                { statement: "The door of the classroom is open.", answer: "no" }
            ],
            questions: [
                { id: 6, statement: "6. The walls in the classroom are green.", correct_answer: "no", explanation: "The classroom walls are yellow, not green (no)." },
                { id: 7, statement: "7. The cupboard is under the clock.", correct_answer: "yes", explanation: "The wooden cupboard sits directly under the wall clock (yes)." },
                { id: 8, statement: "8. The girl has got a red pencil on her desk.", correct_answer: "yes", explanation: "There is a red pencil lying on her desk (yes)." },
                { id: 9, statement: "9. You can see two posters on the wall.", correct_answer: "no", explanation: "There are three posters on the wall (no)." },
                { id: 10, statement: "10. One of the boys is writing on the board.", correct_answer: "yes", explanation: "A boy is standing at the board writing (yes)." }
            ]
        }
    },
    {
        id: "starters_2_test_3",
        book: "Starters 2",
        book_title: "Cambridge English Starters 2",
        test_title: "Test 3",
        badge: "Book 2 - Test 3",
        p1_names: ["Pat", "Lucy", "Sam", "Anna", "Nick", "Dan", "Tom"],
        lis_p2: {
            examples: [
                { question: "What is the boy's name?", answer: "Matt" },
                { question: "How old is he?", answer: "8" }
            ],
            questions: [
                { id: 6, question: "6. How many children are in Matt's class?", correct_answers: ["18", "eighteen", "EIGHTEEN"], explanation: "There are eighteen children in Matt's class." },
                { id: 7, question: "7. How many pictures are on the wall?", correct_answers: ["7", "seven", "SEVEN"], explanation: "There are seven pictures pinned on the wall." },
                { id: 8, question: "8. What is the name of Matt's monster?", correct_answers: ["Claw", "CLAW", "claw"], explanation: "Matt's monster is named Claw." },
                { id: 9, question: "9. How many eyes has Matt's monster got?", correct_answers: ["5", "five", "FIVE"], explanation: "His monster has got five eyes." },
                { id: 10, question: "10. Who has got a jellyfish monster in his picture?", correct_answers: ["Ben", "BEN", "ben"], explanation: "Ben drew the jellyfish monster." }
            ]
        },
        rw_p2: {
            examples: [
                { statement: "There are four monkeys in the trees.", answer: "yes" },
                { statement: "The bird is sitting on the giraffe's head.", answer: "no" }
            ],
            questions: [
                { id: 6, statement: "6. One of the elephants is in the water.", correct_answer: "yes", explanation: "One elephant is bathing in the pool (yes)." },
                { id: 7, statement: "7. A snake is sleeping under a tree.", correct_answer: "yes", explanation: "A coiled snake is asleep beneath the tree (yes)." },
                { id: 8, statement: "8. Two people are wearing shorts.", correct_answer: "no", explanation: "Three people are wearing shorts (no)." },
                { id: 9, statement: "9. You can see five ducks.", correct_answer: "no", explanation: "There are only three ducks (no)." },
                { id: 10, statement: "10. The crocodile's mouth is closed.", correct_answer: "yes", explanation: "The crocodile's jaws are closed (yes)." }
            ]
        }
    },

    // --- BOOK 3: CAMBRIDGE STARTERS 3 ---
    {
        id: "starters_3_test_1",
        book: "Starters 3",
        book_title: "Cambridge English Starters 3",
        test_title: "Test 1",
        badge: "Book 3 - Test 1",
        p1_names: ["Mark", "Hugo", "Anna", "Dan", "Grace", "Sue", "Nick"],
        lis_p2: {
            examples: [
                { question: "What is Jill's new teacher's name?", answer: "Mrs Apple" },
                { question: "How many children are in Jill's class?", answer: "18" }
            ],
            questions: [
                { id: 6, question: "6. What is the name of the school? [______] School", correct_answers: ["Bird", "BIRD", "bird"], explanation: "The school is Bird School." },
                { id: 7, question: "7. Which is Jill's classroom? Number [______]", correct_answers: ["7", "seven", "SEVEN"], explanation: "Jill's classroom is Number 7." },
                { id: 8, question: "8. What is the teacher's favourite song?", correct_answers: ["Rainbow", "RAINBOW", "rainbow"], explanation: "Her favourite song is Rainbow." },
                { id: 9, question: "9. How many computers are there in the classroom?", correct_answers: ["4", "four", "FOUR"], explanation: "There are four computers in the classroom." },
                { id: 10, question: "10. What is the frog's name?", correct_answers: ["Hop", "HOP", "hop"], explanation: "The class pet frog is named Hop." }
            ]
        },
        rw_p2: {
            examples: [
                { statement: "A man is swimming.", answer: "yes" },
                { statement: "The woman has got a red bag.", answer: "no" }
            ],
            questions: [
                { id: 6, statement: "6. Some of the children are playing basketball.", correct_answer: "no", explanation: "The children are playing beach volleyball (no)." },
                { id: 7, statement: "7. The dog is sitting next to the boy.", correct_answer: "yes", explanation: "The dog is seated beside the boy on the sand (yes)." },
                { id: 8, statement: "8. There are flowers under the tree.", correct_answer: "yes", explanation: "Bright flowers are growing under the tree (yes)." },
                { id: 9, statement: "9. One girl is flying a kite.", correct_answer: "no", explanation: "The girl is holding an ice cream, not flying a kite (no)." },
                { id: 10, statement: "10. The birds are standing on the beach.", correct_answer: "yes", explanation: "Seagulls are standing along the shoreline (yes)." }
            ]
        }
    },
    {
        id: "starters_3_test_2",
        book: "Starters 3",
        book_title: "Cambridge English Starters 3",
        test_title: "Test 2",
        badge: "Book 3 - Test 2",
        p1_names: ["Dan", "May", "Sam", "Alex", "Anna", "Pat", "Grace"],
        lis_p2: {
            examples: [
                { question: "What is the name of Kim's dog?", answer: "Ben" },
                { question: "How old is Kim's dog?", answer: "3" }
            ],
            questions: [
                { id: 6, question: "6. How many chickens has Kim's mum got?", correct_answers: ["12", "twelve", "TWELVE"], explanation: "Her mum has twelve chickens." },
                { id: 7, question: "7. What is the name of Kim's duck?", correct_answers: ["Quack", "QUACK", "quack"], explanation: "The duck is named Quack." },
                { id: 8, question: "8. How many goats are in the garden?", correct_answers: ["2", "two", "TWO"], explanation: "There are two goats in the garden." },
                { id: 9, question: "9. What is the lizard's name?", correct_answers: ["Greenie", "GREENIE", "greenie"], explanation: "The lizard is named Greenie." },
                { id: 10, question: "10. How old is the lizard?", correct_answers: ["4", "four", "FOUR"], explanation: "The lizard is four years old." }
            ]
        },
        rw_p2: {
            examples: [
                { statement: "One boy is painting a picture of a tree.", answer: "yes" },
                { statement: "You can see six children in the garden.", answer: "no" }
            ],
            questions: [
                { id: 6, statement: "6. One kite is in the tree.", correct_answer: "yes", explanation: "A colorful kite is caught in the tree branches (yes)." },
                { id: 7, statement: "7. There are two skateboards.", correct_answer: "no", explanation: "There is only one skateboard on the grass (no)." },
                { id: 8, statement: "8. One of the girls is wearing a baseball cap.", correct_answer: "yes", explanation: "A girl is wearing a backwards baseball cap (yes)." },
                { id: 9, statement: "9. You can see the sun.", correct_answer: "yes", explanation: "The bright sun is visible in the clear sky (yes)." },
                { id: 10, statement: "10. Two boys are riding their bikes.", correct_answer: "no", explanation: "Only one boy is riding a bicycle (no)." }
            ]
        }
    },
    {
        id: "starters_3_test_3",
        book: "Starters 3",
        book_title: "Cambridge English Starters 3",
        test_title: "Test 3",
        badge: "Book 3 - Test 3",
        p1_names: ["Mark", "May", "Anna", "Ben", "Hugo", "Jill", "Sue"],
        lis_p2: {
            examples: [
                { question: "What is the boy's name?", answer: "Sam" },
                { question: "How old is he?", answer: "7" }
            ],
            questions: [
                { id: 6, question: "6. What is the name of the zoo? [______] Zoo", correct_answers: ["Wild", "WILD", "wild"], explanation: "The zoo is named Wild Zoo." },
                { id: 7, question: "7. How many monkeys are there in the zoo?", correct_answers: ["14", "fourteen", "FOURTEEN"], explanation: "There are fourteen monkeys in the zoo." },
                { id: 8, question: "8. What is the name of the funny monkey?", correct_answers: ["Coco", "COCO", "coco"], explanation: "The funny monkey is named Coco." },
                { id: 9, question: "9. What is the name of Sam's teacher? Mrs [______]", correct_answers: ["Wood", "WOOD", "wood"], explanation: "Sam's teacher is Mrs Wood." },
                { id: 10, question: "10. How many children are there in Sam's class?", correct_answers: ["19", "nineteen", "NINETEEN"], explanation: "There are nineteen children in Sam's class." }
            ]
        },
        rw_p2: {
            examples: [
                { statement: "A girl is looking at the horse.", answer: "yes" },
                { statement: "There is a bird on the wall.", answer: "no" }
            ],
            questions: [
                { id: 6, statement: "6. The teacher is cleaning the board.", correct_answer: "yes", explanation: "The teacher is wiping the blackboard (yes)." },
                { id: 7, statement: "7. The window is open.", correct_answer: "no", explanation: "The window pane is closed shut (no)." },
                { id: 8, statement: "8. There is a box under the table.", correct_answer: "yes", explanation: "A wooden storage box is under the study table (yes)." },
                { id: 9, statement: "9. Two of the children are wearing red T-shirts.", correct_answer: "no", explanation: "One child is wearing a red shirt, the other is blue (no)." },
                { id: 10, statement: "10. The boy with the glasses is looking at the computer.", correct_answer: "yes", explanation: "The boy wearing round spectacles is using the computer (yes)." }
            ]
        }
    },

    // --- BOOK 4: CAMBRIDGE STARTERS 4 ---
    {
        id: "starters_4_test_1",
        book: "Starters 4",
        book_title: "Cambridge English Starters 4",
        test_title: "Test 1",
        badge: "Book 4 - Test 1",
        p1_names: ["Sue", "Eva", "Mark", "Alice", "Sam", "Hugo", "Ben"],
        lis_p2: {
            examples: [
                { question: "What is the teacher's name?", answer: "Mrs Box" },
                { question: "How old is Alex?", answer: "8" }
            ],
            questions: [
                { id: 6, question: "6. What is Alex's family name?", correct_answers: ["Green", "GREEN", "green"], explanation: "Alex's surname is Green." },
                { id: 7, question: "7. Where does Alex live? In [______] Street", correct_answers: ["Water", "WATER", "water"], explanation: "Alex lives in Water Street." },
                { id: 8, question: "8. Which number is Alex's house?", correct_answers: ["17", "seventeen", "SEVENTEEN"], explanation: "Alex lives at number 17." },
                { id: 9, question: "9. What is Alex's sister's name?", correct_answers: ["Lucy", "LUCY", "lucy"], explanation: "Alex's sister is named Lucy." },
                { id: 10, question: "10. How many children are in the football class?", correct_answers: ["12", "twelve", "TWELVE"], explanation: "There are twelve children in the football class." }
            ]
        },
        rw_p2: {
            examples: [
                { statement: "The monkey is on the zebra's head.", answer: "yes" },
                { statement: "The giraffe is playing the guitar.", answer: "no" }
            ],
            questions: [
                { id: 6, statement: "6. The crocodile has got a cake on its tail.", correct_answer: "yes", explanation: "There is a birthday cake resting on the crocodile's tail (yes)." },
                { id: 7, statement: "7. The elephant is holding four balloons.", correct_answer: "no", explanation: "The elephant is holding three balloons, not four (no)." },
                { id: 8, statement: "8. There is a spider on the tree.", correct_answer: "yes", explanation: "A black spider is dangling from the branch (yes)." },
                { id: 9, statement: "9. The bird has got a flower in its mouth.", correct_answer: "yes", explanation: "The flying parrot has a yellow flower in its beak (yes)." },
                { id: 10, statement: "10. The watermelon is between the bananas and the pineapple.", correct_answer: "no", explanation: "The watermelon is next to the coconut (no)." }
            ]
        }
    },
    {
        id: "starters_4_test_2",
        book: "Starters 4",
        book_title: "Cambridge English Starters 4",
        test_title: "Test 2",
        badge: "Book 4 - Test 2",
        p1_names: ["Grace", "Sam", "Mark", "Alice", "May", "Tom", "Pat"],
        lis_p2: {
            examples: [
                { question: "What is the boy's name?", answer: "Bill" },
                { question: "How old is the boy?", answer: "7" }
            ],
            questions: [
                { id: 6, question: "6. What is the name of the monster in Bill's picture?", correct_answers: ["Fluff", "FLUFF", "fluff"], explanation: "The monster is named Fluff." },
                { id: 7, question: "7. How old is the monster?", correct_answers: ["100", "hundred", "one hundred"], explanation: "The friendly monster is one hundred years old." },
                { id: 8, question: "8. Where is the monster's school? In [______] Street", correct_answers: ["Forest", "FOREST", "forest"], explanation: "The school is in Forest Street." },
                { id: 9, question: "9. How many sisters has the monster got?", correct_answers: ["4", "four", "FOUR"], explanation: "The monster has four sisters." },
                { id: 10, question: "10. What is the name of the baby in the monster's family?", correct_answers: ["Dot", "DOT", "dot"], explanation: "The baby monster is named Dot." }
            ]
        },
        rw_p2: {
            examples: [
                { statement: "The girl is playing the guitar.", answer: "yes" },
                { statement: "The people are in the garden.", answer: "no" }
            ],
            questions: [
                { id: 6, statement: "6. The man has got a book.", correct_answer: "yes", explanation: "The man is holding an open book (yes)." },
                { id: 7, statement: "7. There are five flowers on the table.", correct_answer: "no", explanation: "There are four flowers in the vase (no)." },
                { id: 8, statement: "8. The baby is sleeping on the sofa.", correct_answer: "yes", explanation: "The infant is asleep on the couch cushion (yes)." },
                { id: 9, statement: "9. The cat is on the rug.", correct_answer: "no", explanation: "The cat is curled up on the armchair, not the rug (no)." },
                { id: 10, statement: "10. The clock is between the window and the mirror.", correct_answer: "yes", explanation: "The wall clock hangs directly between the window and mirror (yes)." }
            ]
        }
    },
    {
        id: "starters_4_test_3",
        book: "Starters 4",
        book_title: "Cambridge English Starters 4",
        test_title: "Test 3",
        badge: "Book 4 - Test 3",
        p1_names: ["Lucy", "Grace", "Pat", "Alice", "Ben", "Tom", "Eva"],
        lis_p2: {
            examples: [
                { question: "What is the boy's name?", answer: "Hugo" },
                { question: "How old is the boy?", answer: "9" }
            ],
            questions: [
                { id: 6, question: "6. What is Hugo's family name?", correct_answers: ["White", "WHITE", "white"], explanation: "Hugo's family surname is White." },
                { id: 7, question: "7. Where does Hugo live? In [______] Street", correct_answers: ["Beach", "BEACH", "beach"], explanation: "Hugo lives in Beach Street." },
                { id: 8, question: "8. What is the number of Hugo's house?", correct_answers: ["24", "twenty-four", "TWENTY-FOUR"], explanation: "Hugo lives at house number 24." },
                { id: 9, question: "9. What is the name of Hugo's friend?", correct_answers: ["Mark", "MARK", "mark"], explanation: "Hugo's best friend is Mark." },
                { id: 10, question: "10. How old is Hugo's friend?", correct_answers: ["10", "ten", "TEN"], explanation: "His friend Mark is ten years old." }
            ]
        },
        rw_p2: {
            examples: [
                { statement: "The family is listening to music on the radio.", answer: "yes" },
                { statement: "The people are in the living room.", answer: "no" }
            ],
            questions: [
                { id: 6, statement: "6. The family is cleaning the kitchen.", correct_answer: "yes", explanation: "The family members are washing dishes and wiping counters in the kitchen (yes)." },
                { id: 7, statement: "7. The dog is under the table.", correct_answer: "no", explanation: "The dog is standing by the doorway (no)." },
                { id: 8, statement: "8. Dad is taking a photo.", correct_answer: "yes", explanation: "Dad is holding up his camera to take a picture (yes)." },
                { id: 9, statement: "9. There is some food on the table.", correct_answer: "yes", explanation: "Plates of fruit and sandwiches are on the dining table (yes)." },
                { id: 10, statement: "10. The door is open.", correct_answer: "no", explanation: "The door leading to the garden is firmly closed (no)." }
            ]
        }
    }
];

// Authentic Cambridge Pre-A1 Starters Reading & Writing Part 3 Data (All 12 Tests)
const startersRwPart3Data = {
    "starters_1_test_1": {
        example: { word: "LIME", scrambled_letters: ["M", "I", "E", "L"] },
        questions: [
            { id: 11, scrambled_letters: ["A", "R", "E", "P"], correct_word: "PEAR", explanation: "P-E-A-R -> PEAR" },
            { id: 12, scrambled_letters: ["E", "M", "N", "O", "L"], correct_word: "LEMON", explanation: "L-E-M-O-N -> LEMON" },
            { id: 13, scrambled_letters: ["A", "G", "R", "N", "E", "O"], correct_word: "ORANGE", explanation: "O-R-A-N-G-E -> ORANGE" },
            { id: 14, scrambled_letters: ["A", "N", "N", "B", "A", "A"], correct_word: "BANANA", explanation: "B-A-N-A-N-A -> BANANA" },
            { id: 15, scrambled_letters: ["E", "P", "A", "E", "N", "L", "I", "P", "P"], correct_word: "PINEAPPLE", explanation: "P-I-N-E-A-P-P-L-E -> PINEAPPLE" }
        ]
    },
    "starters_1_test_2": {
        example: { word: "PEAR", scrambled_letters: ["A", "R", "P", "E"] },
        questions: [
            { id: 11, scrambled_letters: ["S", "H", "F", "I"], correct_word: "FISH", explanation: "F-I-S-H -> FISH" },
            { id: 12, scrambled_letters: ["A", "D", "B", "E", "R"], correct_word: "BREAD", explanation: "B-R-E-A-D -> BREAD" },
            { id: 13, scrambled_letters: ["I", "S", "C", "P", "H"], correct_word: "CHIPS", explanation: "C-H-I-P-S -> CHIPS" },
            { id: 14, scrambled_letters: ["A", "M", "T", "O", "T", "O"], correct_word: "TOMATO", explanation: "T-O-M-A-T-O -> TOMATO" },
            { id: 15, scrambled_letters: ["R", "G", "U", "B", "E", "R"], correct_word: "BURGER", explanation: "B-U-R-G-E-R -> BURGER" }
        ]
    },
    "starters_1_test_3": {
        example: { word: "BATH", scrambled_letters: ["T", "H", "B", "A"] },
        questions: [
            { id: 11, scrambled_letters: ["P", "M", "A", "L"], correct_word: "LAMP", explanation: "L-A-M-P -> LAMP" },
            { id: 12, scrambled_letters: ["O", "A", "F", "S"], correct_word: "SOFA", explanation: "S-O-F-A -> SOFA" },
            { id: 13, scrambled_letters: ["K", "L", "O", "C", "C"], correct_word: "CLOCK", explanation: "C-L-O-C-K -> CLOCK" },
            { id: 14, scrambled_letters: ["M", "R", "O", "R", "I", "R"], correct_word: "MIRROR", explanation: "M-I-R-R-O-R -> MIRROR" },
            { id: 15, scrambled_letters: ["O", "C", "P", "M", "U", "R", "T", "E"], correct_word: "COMPUTER", explanation: "C-O-M-P-U-T-E-R -> COMPUTER" }
        ]
    },
    "starters_2_test_1": {
        example: { word: "HAT", scrambled_letters: ["H", "T", "A"] },
        questions: [
            { id: 11, scrambled_letters: ["S", "K", "O", "S", "C"], correct_word: "SOCKS", explanation: "S-O-C-K-S -> SOCKS" },
            { id: 12, scrambled_letters: ["O", "S", "B", "T", "O"], correct_word: "BOOTS", explanation: "B-O-O-T-S -> BOOTS" },
            { id: 13, scrambled_letters: ["H", "T", "R", "I", "S"], correct_word: "SHIRT", explanation: "S-H-I-R-T -> SHIRT" },
            { id: 14, scrambled_letters: ["S", "R", "S", "D", "E"], correct_word: "DRESS", explanation: "D-R-E-S-S -> DRESS" },
            { id: 15, scrambled_letters: ["O", "E", "S", "R", "S", "R", "T", "U"], correct_word: "TROUSERS", explanation: "T-R-O-U-S-E-R-S -> TROUSERS" }
        ]
    },
    "starters_2_test_2": {
        example: { word: "ARM", scrambled_letters: ["M", "R", "A"] },
        questions: [
            { id: 11, scrambled_letters: ["R", "I", "H", "A"], correct_word: "HAIR", explanation: "H-A-I-R -> HAIR" },
            { id: 12, scrambled_letters: ["C", "A", "F", "E"], correct_word: "FACE", explanation: "F-A-C-E -> FACE" },
            { id: 13, scrambled_letters: ["E", "T", "F", "E"], correct_word: "FEET", explanation: "F-E-E-T -> FEET" },
            { id: 14, scrambled_letters: ["N", "H", "D", "A"], correct_word: "HAND", explanation: "H-A-N-D -> HAND" },
            { id: 15, scrambled_letters: ["T", "O", "H", "U", "M"], correct_word: "MOUTH", explanation: "M-O-U-T-H -> MOUTH" }
        ]
    },
    "starters_2_test_3": {
        example: { word: "HAT", scrambled_letters: ["A", "T", "H"] },
        questions: [
            { id: 11, scrambled_letters: ["O", "S", "K", "C"], correct_word: "SOCK", explanation: "S-O-C-K -> SOCK" },
            { id: 12, scrambled_letters: ["R", "E", "D", "S", "S"], correct_word: "DRESS", explanation: "D-R-E-S-S -> DRESS" },
            { id: 13, scrambled_letters: ["T", "H", "S", "I", "R"], correct_word: "SHIRT", explanation: "S-H-I-R-T -> SHIRT" },
            { id: 14, scrambled_letters: ["S", "N", "A", "E", "J"], correct_word: "JEANS", explanation: "J-E-A-N-S -> JEANS" },
            { id: 15, scrambled_letters: ["T", "A", "E", "C", "K", "J"], correct_word: "JACKET", explanation: "J-A-C-K-E-T -> JACKET" }
        ]
    },
    "starters_3_test_1": {
        example: { word: "BREAD", scrambled_letters: ["R", "A", "B", "D", "E"] },
        questions: [
            { id: 11, scrambled_letters: ["E", "C", "R", "I"], correct_word: "RICE", explanation: "R-I-C-E -> RICE" },
            { id: 12, scrambled_letters: ["L", "K", "I", "M"], correct_word: "MILK", explanation: "M-I-L-K -> MILK" },
            { id: 13, scrambled_letters: ["R", "E", "G", "R", "U", "B"], correct_word: "BURGER", explanation: "B-U-R-G-E-R -> BURGER" },
            { id: 14, scrambled_letters: ["O", "M", "T", "A", "O", "T"], correct_word: "TOMATO", explanation: "T-O-M-A-T-O -> TOMATO" },
            { id: 15, scrambled_letters: ["H", "E", "K", "N", "C", "I", "C"], correct_word: "CHICKEN", explanation: "C-H-I-C-K-E-N -> CHICKEN" }
        ]
    },
    "starters_3_test_2": {
        example: { word: "PEAR", scrambled_letters: ["E", "P", "R", "A"] },
        questions: [
            { id: 11, scrambled_letters: ["E", "L", "I", "M"], correct_word: "LIME", explanation: "L-I-M-E -> LIME" },
            { id: 12, scrambled_letters: ["I", "I", "W", "K"], correct_word: "KIWI", explanation: "K-I-W-I -> KIWI" },
            { id: 13, scrambled_letters: ["A", "G", "O", "M", "N"], correct_word: "MANGO", explanation: "M-A-N-G-O -> MANGO" },
            { id: 14, scrambled_letters: ["E", "R", "A", "G", "N", "O"], correct_word: "ORANGE", explanation: "O-R-A-N-G-E -> ORANGE" },
            { id: 15, scrambled_letters: ["W", "T", "M", "O", "L", "A", "E", "N", "R", "E"], correct_word: "WATERMELON", explanation: "W-A-T-E-R-M-E-L-O-N -> WATERMELON" }
        ]
    },
    "starters_3_test_3": {
        example: { word: "EAR", scrambled_letters: ["E", "A", "R"] },
        questions: [
            { id: 11, scrambled_letters: ["A", "D", "H", "N"], correct_word: "HAND", explanation: "H-A-N-D -> HAND" },
            { id: 12, scrambled_letters: ["T", "O", "F", "O"], correct_word: "FOOT", explanation: "F-O-O-T -> FOOT" },
            { id: 13, scrambled_letters: ["I", "H", "R", "A"], correct_word: "HAIR", explanation: "H-A-I-R -> HAIR" },
            { id: 14, scrambled_letters: ["E", "S", "N", "O"], correct_word: "NOSE", explanation: "N-O-S-E -> NOSE" },
            { id: 15, scrambled_letters: ["O", "H", "T", "U", "M"], correct_word: "MOUTH", explanation: "M-O-U-T-H -> MOUTH" }
        ]
    },
    "starters_4_test_1": {
        example: { word: "BUS", scrambled_letters: ["S", "U", "B"] },
        questions: [
            { id: 11, scrambled_letters: ["I", "B", "K", "E"], correct_word: "BIKE", explanation: "B-I-K-E -> BIKE" },
            { id: 12, scrambled_letters: ["O", "B", "A", "T"], correct_word: "BOAT", explanation: "B-O-A-T -> BOAT" },
            { id: 13, scrambled_letters: ["E", "P", "A", "N", "L"], correct_word: "PLANE", explanation: "P-L-A-N-E -> PLANE" },
            { id: 14, scrambled_letters: ["T", "A", "R", "N", "I"], correct_word: "TRAIN", explanation: "T-R-A-I-N -> TRAIN" },
            { id: 15, scrambled_letters: ["O", "T", "L", "I", "P", "E", "H", "R", "C", "E"], correct_word: "HELICOPTER", explanation: "H-E-L-I-C-O-P-T-E-R -> HELICOPTER" }
        ]
    },
    "starters_4_test_2": {
        example: { word: "BEAN", scrambled_letters: ["N", "E", "A", "B"] },
        questions: [
            { id: 11, scrambled_letters: ["R", "S", "E", "I", "F"], correct_word: "FRIES", explanation: "F-R-I-E-S -> FRIES" },
            { id: 12, scrambled_letters: ["E", "B", "D", "A", "R"], correct_word: "BREAD", explanation: "B-R-E-A-D -> BREAD" },
            { id: 13, scrambled_letters: ["S", "G", "A", "E", "P", "R"], correct_word: "GRAPES", explanation: "G-R-A-P-E-S -> GRAPES" },
            { id: 14, scrambled_letters: ["U", "A", "E", "S", "S", "G", "A"], correct_word: "SAUSAGE", explanation: "S-A-U-S-A-G-E -> SAUSAGE" },
            { id: 15, scrambled_letters: ["M", "O", "L", "E", "W", "E", "T", "R", "A", "N"], correct_word: "WATERMELON", explanation: "W-A-T-E-R-M-E-L-O-N -> WATERMELON" }
        ]
    },
    "starters_4_test_3": {
        example: { word: "KITE", scrambled_letters: ["I", "K", "E", "T"] },
        questions: [
            { id: 11, scrambled_letters: ["L", "L", "D", "O"], correct_word: "DOLL", explanation: "D-O-L-L -> DOLL" },
            { id: 12, scrambled_letters: ["R", "I", "T", "N", "A"], correct_word: "TRAIN", explanation: "T-R-A-I-N -> TRAIN" },
            { id: 13, scrambled_letters: ["P", "E", "N", "A", "L"], correct_word: "PLANE", explanation: "P-L-A-N-E -> PLANE" },
            { id: 14, scrambled_letters: ["O", "O", "B", "R", "T"], correct_word: "ROBOT", explanation: "R-O-B-O-T -> ROBOT" },
            { id: 15, scrambled_letters: ["O", "P", "E", "E", "L", "H", "R", "C", "T", "I"], correct_word: "HELICOPTER", explanation: "H-E-L-I-C-O-P-T-E-R -> HELICOPTER" }
        ]
    }
};

// Authentic Cambridge Pre-A1 Starters Reading & Writing Part 4 Data (All 12 Tests)
const startersRwPart4Data = {
    "starters_1_test_1": {
        title: "A chair",
        example: { word: "legs" },
        word_bank: ["legs", "dinner", "tablet", "book", "arm", "kitchen", "motorbike", "rug"],
        questions: [
            { id: 16, question: "16. In Mark's flat there are chairs next to the table in the [______].", correct_answers: ["kitchen"], explanation: "Chairs are placed around the dining table in the kitchen." },
            { id: 17, question: "17. Mark's family sit and eat their [______] there.", correct_answers: ["dinner"], explanation: "The family sits down to eat dinner together." },
            { id: 18, question: "18. Mark sits on his chair and reads his [______].", correct_answers: ["book"], explanation: "Mark enjoys reading a book." },
            { id: 19, question: "19. Mark listens to the radio or plays on his [______].", correct_answers: ["tablet"], explanation: "Mark plays games on his electronic tablet." },
            { id: 20, question: "20. There is a big red and blue [______] on the floor under his chair.", correct_answers: ["rug"], explanation: "A colorful rug lies beneath the chair on the floor." }
        ]
    },
    "starters_1_test_2": {
        title: "A living room",
        example: { word: "house" },
        word_bank: ["house", "piano", "kiwi", "kitchen", "television", "ruler", "pictures", "sofa"],
        questions: [
            { id: 16, question: "16. His living room is between the dining room and the [______].", correct_answers: ["kitchen"], explanation: "The living room is located between the dining room and the kitchen." },
            { id: 17, question: "17. Ben's family watches [______] in the living room.", correct_answers: ["television", "TV"], explanation: "Ben's family watches television together in the living room." },
            { id: 18, question: "18. Ben and his sister sit on the [______] and play games there.", correct_answers: ["sofa"], explanation: "Ben and his sister sit comfortably on the sofa to play games." },
            { id: 19, question: "19. Ben's mum plays a [______] in the living room.", correct_answers: ["piano"], explanation: "Ben's mum plays musical tunes on the piano." },
            { id: 20, question: "20. There are [______] of the family on the wall.", correct_answers: ["pictures"], explanation: "Framed pictures of the family hang on the living room wall." }
        ]
    },
    "starters_1_test_3": {
        title: "A beach",
        example: { word: "sea" },
        word_bank: ["sea", "pencil", "fish", "books", "hippo", "hats", "football", "sand"],
        questions: [
            { id: 16, question: "16. They wear [______] on their heads.", correct_answers: ["hats"], explanation: "People wear sun hats on their heads to protect from the sun." },
            { id: 17, question: "17. Some people go to sleep and some sit and read [______] there.", correct_answers: ["books"], explanation: "Visitors sit by the sea and read books peacefully." },
            { id: 18, question: "18. Children run on the [______] or play football with their friends.", correct_answers: ["sand"], explanation: "Children enjoy running on the warm beach sand." },
            { id: 19, question: "19. Children run on the sand or play [______] with their friends.", correct_answers: ["football"], explanation: "Kids love playing football games together on the beach." },
            { id: 20, question: "20. [______] live in the water and children like catching them.", correct_answers: ["Fish", "fish"], explanation: "Fish swim in the sea water." }
        ]
    },
    "starters_2_test_1": {
        title: "Mary's ducks",
        example: { word: "farm" },
        word_bank: ["farm", "trees", "songs", "water", "feet", "pencil", "bread", "goat"],
        questions: [
            { id: 16, question: "16. There are some chickens, and ducks and a [______].", correct_answers: ["goat"], explanation: "A goat lives on Mary's farm along with the chickens and ducks." },
            { id: 17, question: "17. The ducks are brown and white and they have big orange [______].", correct_answers: ["feet"], explanation: "Ducks have bright orange webbed feet for walking and paddling." },
            { id: 18, question: "18. Mary gives the ducks [______] in the morning.", correct_answers: ["bread"], explanation: "Mary feeds fresh pieces of bread to her ducks." },
            { id: 19, question: "19. In the day, the ducks swim in the [______].", correct_answers: ["water"], explanation: "Ducks love swimming around in the farm pond water." },
            { id: 20, question: "20. At night they sleep under the two big [______].", correct_answers: ["trees"], explanation: "The ducks rest peacefully underneath the shade of two large trees." }
        ]
    },
    "starters_2_test_2": {
        title: "Tom's kitchen",
        example: { word: "house" },
        word_bank: ["house", "alphabet", "chairs", "tail", "flowers", "sausages", "school", "lemonade"],
        questions: [
            { id: 16, question: "16. Tom's family sit on [______] and eat their food.", correct_answers: ["chairs"], explanation: "Family members sit on dining chairs around the table." },
            { id: 17, question: "17. Tom likes eating [______] and chips.", correct_answers: ["sausages"], explanation: "Tom's favourite meal is tasty sausages with chips." },
            { id: 18, question: "18. And his sister likes drinking [______].", correct_answers: ["lemonade"], explanation: "His sister enjoys drinking refreshing cold lemonade." },
            { id: 19, question: "19. Tom has some eggs for breakfast and then he goes to [______].", correct_answers: ["school"], explanation: "After having breakfast in the morning, Tom heads to school." },
            { id: 20, question: "20. There are some beautiful [______] from the garden on the kitchen table.", correct_answers: ["flowers"], explanation: "A vase with fresh colourful flowers brightens up the kitchen table." }
        ]
    },
    "starters_2_test_3": {
        title: "A school",
        example: { word: "bus" },
        word_bank: ["bus", "door", "football", "teacher", "bread", "playground", "glasses", "posters"],
        questions: [
            { id: 16, question: "16. She likes her school because it has a big [______].", correct_answers: ["playground"], explanation: "Eva loves the spacious outdoor school playground." },
            { id: 17, question: "17. She plays [______] there with her friends.", correct_answers: ["football"], explanation: "Eva and her classmates kick the ball and play football." },
            { id: 18, question: "18. Mrs Rice is their [______]. Eva loves her.", correct_answers: ["teacher"], explanation: "Mrs Rice is the caring and kind classroom teacher." },
            { id: 19, question: "19. In Eva's classroom, there is a [______] and a big window.", correct_answers: ["door"], explanation: "The classroom features an entrance door and a wide bright window." },
            { id: 20, question: "20. There are lots of [______] and a board on the wall.", correct_answers: ["posters"], explanation: "Colourful educational posters decorate the classroom walls." }
        ]
    },
    "starters_3_test_1": {
        title: "A donkey",
        example: { word: "zoo" },
        word_bank: ["zoo", "water", "ears", "boat", "tail", "carrots", "books", "legs"],
        questions: [
            { id: 16, question: "16. A donkey has two very long [______] on its head.", correct_answers: ["ears"], explanation: "Donkeys are known for their distinctively long upright ears." },
            { id: 17, question: "17. At the end of its body a donkey has a small [______].", correct_answers: ["tail"], explanation: "A donkey swishes its small furry tail." },
            { id: 18, question: "18. A donkey can walk and run on its four [______].", correct_answers: ["legs"], explanation: "The donkey stands firmly and trots on its four strong legs." },
            { id: 19, question: "19. Donkeys drink [______].", correct_answers: ["water"], explanation: "Animals drink fresh cool water when thirsty." },
            { id: 20, question: "20. They love eating [______] and they like apples, too.", correct_answers: ["carrots"], explanation: "Donkeys crunch on sweet orange carrots and apples." }
        ]
    },
    "starters_3_test_2": {
        title: "My bedroom",
        example: { word: "bed" },
        word_bank: ["bed", "books", "guitar", "meatballs", "chair", "drink", "drawings", "teddy"],
        questions: [
            { id: 16, question: "16. I sit on a [______] next to my desk.", correct_answers: ["chair"], explanation: "The child sits on a desk chair to draw and study." },
            { id: 17, question: "17. I like doing funny [______] of robots with my crayons.", correct_answers: ["drawings"], explanation: "Colourful robot drawings made with crayons." },
            { id: 18, question: "18. I like reading [______], too.", correct_answers: ["books"], explanation: "Reading interesting storybooks in the bedroom." },
            { id: 19, question: "19. My favourite toy is my new [______].", correct_answers: ["teddy"], explanation: "A soft huggable teddy bear is the child's favourite toy." },
            { id: 20, question: "20. I love music and I'm learning the [______].", correct_answers: ["guitar"], explanation: "Practising musical melodies on the guitar." }
        ]
    },
    "starters_3_test_3": {
        title: "Tom's cat",
        example: { word: "house" },
        word_bank: ["house", "eyes", "mouse", "food", "mat", "kites", "milk", "bathroom"],
        questions: [
            { id: 16, question: "16. It has a long tail and two green [______].", correct_answers: ["eyes"], explanation: "The cat looks attentively with two bright green eyes." },
            { id: 17, question: "17. In the morning, the cat plays on the [______] on the floor in the living room with Tom.", correct_answers: ["mat"], explanation: "The cat loves curling up and rolling on the living room floor mat." },
            { id: 18, question: "18. Its favourite toy is a [______].", correct_answers: ["mouse"], explanation: "The cat chases and pounces on a small toy mouse." },
            { id: 19, question: "19. It drinks its [______] and eats its food in the garden.", correct_answers: ["milk"], explanation: "The cat laps up a saucer of fresh milk." },
            { id: 20, question: "20. It drinks its milk and eats its [______] in the garden.", correct_answers: ["food"], explanation: "The pet finishes its tasty pet food bowl outside." }
        ]
    },
    "starters_4_test_1": {
        title: "Lucy's bedroom",
        example: { word: "table" },
        word_bank: ["table", "onions", "book", "games", "radio", "cupboard", "baby", "posters"],
        questions: [
            { id: 16, question: "16. There is a table with a lamp on it and she's got a [______] for her clothes.", correct_answers: ["cupboard"], explanation: "A wardrobe cupboard keeps all clothes neat and organized." },
            { id: 17, question: "17. Lucy has got some cool [______] on the walls.", correct_answers: ["posters"], explanation: "Fun superhero and airplane posters cover the bedroom walls." },
            { id: 18, question: "18. Lucy sits on her bed and plays [______] on her tablet.", correct_answers: ["games"], explanation: "Lucy taps the tablet screen playing digital games." },
            { id: 19, question: "19. Lucy likes to listen to music on the [______] and draw pictures in her room.", correct_answers: ["radio"], explanation: "Catchy songs play through the bedroom radio." },
            { id: 20, question: "20. In the evening, she reads a [______] in bed.", correct_answers: ["book"], explanation: "Reading a comforting bedtime storybook before falling asleep." }
        ]
    },
    "starters_4_test_2": {
        title: "My cousin Nick",
        example: { word: "brothers" },
        word_bank: ["brothers", "pear", "piano", "jeans", "television", "playground", "helicopter", "ice creams"],
        questions: [
            { id: 16, question: "16. He likes to wear T-shirts and [______].", correct_answers: ["jeans"], explanation: "Nick dresses casually in comfy cotton T-shirts and blue denim jeans." },
            { id: 17, question: "17. We like to go to the [______] on our bikes.", correct_answers: ["playground"], explanation: "The cousins pedal their bicycles to the community playground." },
            { id: 18, question: "18. Then, we get [______] - chocolate is our favourite!", correct_answers: ["ice creams", "ice cream"], explanation: "Enjoying cool delicious chocolate ice cream cones together." },
            { id: 19, question: "19. In the evening, we watch [______] or talk to our friends on the computer.", correct_answers: ["television", "TV"], explanation: "Relaxing together in front of the television in the evening." },
            { id: 20, question: "20. Nick likes playing the [______] too. We love music.", correct_answers: ["piano"], explanation: "Nick presses the keys playing nice melodies on the piano." }
        ]
    },
    "starters_4_test_3": {
        title: "Ben's pet",
        example: { word: "cat" },
        word_bank: ["cat", "pencils", "feet", "apples", "night", "football", "water", "garden"],
        questions: [
            { id: 16, question: "16. Kiwi lives in Ben's [______].", correct_answers: ["garden"], explanation: "Kiwi the pet mouse lives safely in a cage in the outdoor garden." },
            { id: 17, question: "17. Kiwi has a brown body and very small [______].", correct_answers: ["feet"], explanation: "The little mouse scampers on tiny pink feet." },
            { id: 18, question: "18. Kiwi likes drinking [______] and eating fruit.", correct_answers: ["water"], explanation: "Kiwi sips drops of clean water from its feeder bottle." },
            { id: 19, question: "19. Its favourite fruit is [______].", correct_answers: ["apples", "apple"], explanation: "Crisp sweet apples are the pet's top favourite treat." },
            { id: 20, question: "20. Kiwi sleeps in the day and plays at [______].", correct_answers: ["night"], explanation: "Mice are nocturnal, sleeping during daytime and running on wheels at night." }
        ]
    }
};

// Generator for standard Cambridge Pre-A1 Starters Tests
function generateStartersTest(profile, idx) {
    const testNum = idx + 1;

    // 1. LISTENING (4 PARTS)
    const part1Spots = [
        { id: "spot_1", x: 49, y: 42, description: "Boy flying a kite" },
        { id: "spot_2", x: 20, y: 44, description: "Girl sitting at table" },
        { id: "spot_3", x: 74, y: 47, description: "Boy fishing by water" },
        { id: "spot_4", x: 58, y: 88, description: "Boy with blue helmet" },
        { id: "spot_5", x: 82, y: 40, description: "Girl on the path" },
        { id: "spot_6", x: 22, y: 58, description: "Boy in green shirt" }
    ];

    // Select 5 active names from profile.p1_names
    const activeNames = profile.p1_names.slice(0, 5);
    const part1Questions = activeNames.map((name, i) => {
        const spotId = `spot_${i + 1}`;
        const desc = part1Spots[i] ? part1Spots[i].description : `Person ${i + 1}`;
        return {
            id: i + 1,
            type: "match",
            name: name,
            target_spot: spotId,
            correct_answer: spotId,
            audio_prompt: `Can you see ${name}? Draw a line to ${name} (${desc}).`,
            explanation: `Audio identifies ${name} as the ${desc}.`
        };
    });

    const part2Questions = profile.lis_p2.questions;

    const defaultPart3Questions = [
        {
            id: 11,
            question: "11. What is Pat's favourite animal?",
            options: ["A", "B", "C"],
            correct_answers: ["B"],
            audio_script: "Boy: Do you like monkeys, Pat? - Pat: They are cute, but my favourite is the elephant!",
            explanation: "Pat confirms her favourite animal is the elephant -> Answer B."
        },
        {
            id: 12,
            question: "12. Which sport is Nick playing today?",
            options: ["A", "B", "C"],
            correct_answers: ["A"],
            audio_script: "Girl: Is Nick swimming in the pool? - Boy: No, he's on the court playing tennis with his sister.",
            explanation: "Nick is playing tennis on the court -> Answer A."
        },
        {
            id: 13,
            question: "13. What is May having for lunch?",
            options: ["A", "B", "C"],
            correct_answers: ["B"],
            audio_script: "Dad: Do you want chicken today, May? - May: No thanks, Dad. I'd love fish and rice, please.",
            explanation: "May chooses fish and rice -> Answer B."
        },
        {
            id: 14,
            question: "14. Where is Sam's puppy?",
            options: ["A", "B", "C"],
            correct_answers: ["C"],
            audio_script: "Mum: Sam, look in the garden! - Sam: Oh, the puppy is sleeping under the rose bush!",
            explanation: "The puppy is sleeping under the rose bush in the garden -> Answer C."
        },
        {
            id: 15,
            question: "15. What colour is Anna's new school bag?",
            options: ["A", "B", "C"],
            correct_answers: ["A"],
            audio_script: "Girl: Did you get a green bag, Anna? - Anna: No, my new bag is purple and pink!",
            explanation: "Anna's new bag is purple and pink -> Answer A."
        }
    ];

    const part3Questions = (profile.lis_p3 && profile.lis_p3.questions) ? profile.lis_p3.questions : defaultPart3Questions;

    const defaultPart4Example = {
        item: "The cake in the cupboard",
        color: "Brown",
        spot: { x: 77.1, y: 15.6 },
        audio_script: "Examiner: Look at the picture. Can you see the cake in the cupboard? - Boy: Yes, I can. - Examiner: Colour it brown, please. - Boy: Brown? Okay."
    };

    const defaultPart4Questions = [
        { id: 16, item: "Item 1", correct_color: "Pink", spot: { x: 61.1, y: 35.8 }, audio_script: "Examiner: Can you see the boy? Look at the cake in his hand. Colour it pink.", explanation: "Colour the cake in the boy's hand pink." },
        { id: 17, item: "Item 2", correct_color: "Yellow", spot: { x: 45.3, y: 54.8 }, audio_script: "Examiner: Now look at the girl at the table. Can you see the cake on her plate? Colour it yellow.", explanation: "Colour the cake on the girl's plate yellow." },
        { id: 18, item: "Item 3", correct_color: "Orange", spot: { x: 14.1, y: 57.0 }, audio_script: "Examiner: Look at the mat by the door. There is a cake on it. Colour it orange.", explanation: "Colour the cake on the mat orange." },
        { id: 19, item: "Item 4", correct_color: "Green", spot: { x: 41.4, y: 74.9 }, audio_script: "Examiner: Can you see the cat under the table? There is a cake in front of the cat. Colour it green.", explanation: "Colour the cake in front of the cat green." },
        { id: 20, item: "Item 5", correct_color: "Blue", spot: { x: 14.5, y: 68.7 }, audio_script: "Examiner: Now find the mother. Look at the cake next to her feet. Colour it blue.", explanation: "Colour the cake next to the mother's feet blue." }
    ];

    const part4Example = (profile.lis_p4 && profile.lis_p4.example) ? profile.lis_p4.example : defaultPart4Example;
    const part4Questions = (profile.lis_p4 && profile.lis_p4.questions) ? profile.lis_p4.questions : defaultPart4Questions;

    // 2. READING & WRITING (5 PARTS)
    const defaultRwPart1Examples = [
        { statement: "This is a foot.", answer: true, image_desc: "A foot" },
        { statement: "These are pianos.", answer: false, image_desc: "Two guitars" }
    ];

    const defaultRwPart1Questions = [
        { id: 1, image_desc: "A train", statement: "This is a train.", is_correct: true, correct_answer: "tick", explanation: "The image shows a train -> Tick." },
        { id: 2, image_desc: "Sausages", statement: "These are sausages.", is_correct: true, correct_answer: "tick", explanation: "The image shows sausages -> Tick." },
        { id: 3, image_desc: "T-shirts", statement: "These are skirts.", is_correct: false, correct_answer: "cross", explanation: "The image shows T-shirts, not skirts -> Cross." },
        { id: 4, image_desc: "A bookcase", statement: "This is a lamp.", is_correct: false, correct_answer: "cross", explanation: "The image shows a bookcase, not a lamp -> Cross." },
        { id: 5, image_desc: "A watch", statement: "This is a watch.", is_correct: true, correct_answer: "tick", explanation: "The image shows a watch -> Tick." }
    ];

    const rwPart1Examples = (profile.rw_p1 && profile.rw_p1.examples) ? profile.rw_p1.examples : defaultRwPart1Examples;
    const rwPart1Questions = (profile.rw_p1 && profile.rw_p1.questions) ? profile.rw_p1.questions : defaultRwPart1Questions;

    const rwPart2Questions = profile.rw_p2.questions;

    const p3Config = startersRwPart3Data[profile.id] || startersRwPart3Data["starters_1_test_1"];
    const rwPart3Example = p3Config.example;
    const rwPart3Questions = p3Config.questions;

    const p4Config = startersRwPart4Data[profile.id] || startersRwPart4Data["starters_1_test_1"];
    const rwPart4Questions = p4Config.questions;
    const rwPart4WordBank = p4Config.word_bank;
    const rwPart4Example = p4Config.example;
    const rwPart4Title = p4Config.title;

    const rwPart5Questions = [
        { id: 21, question: "21. Who is wearing a hat?", correct_answers: ["the boy", "boy", "a boy"], explanation: "In the picture, the young boy is wearing a sun hat." },
        { id: 22, question: "22. How many animals are drinking now?", correct_answers: ["2", "two", "TWO"], explanation: "Exactly two animals are drinking from the river." },
        { id: 23, question: "23. What is jumping from the tree?", correct_answers: ["a monkey", "monkey", "the monkey"], explanation: "A monkey is leaping down from the tree branch." },
        { id: 24, question: "24. Which child is not happy?", correct_answers: ["the girl", "girl", "a girl"], explanation: "The little girl looks upset because she dropped her snack." },
        { id: 25, question: "25. What is the boy doing? Smiling and [______]", correct_answers: ["waving", "WAVING"], explanation: "The boy is smiling and waving his hand happily." }
    ];

    // 3. SPEAKING (4 PARTS)
    const speakingData = {
        part_1: {
            title: "Part 1: Scene & Identification",
            instruction: "Look at the big picture. Listen to the examiner and point to the objects in the picture.",
            examiner_audio: "https://actions.google.com/sounds/v1/ambiences/outdoor_market.ogg",
            prompt: "Look at this picture. It's a sunny day. Here is the tree. Where is the dog? Where is the ball?",
            model_response: "The dog is sleeping under the tree. The ball is on the grass near the red boat."
        },
        part_2: {
            title: "Part 2: Object Cards Placement",
            instruction: "Look at these small object cards. Which is the radio? Put the radio next to the girl.",
            examiner_audio: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
            prompt: "Now look at these cards. Which is the guitar? Please put the guitar on the yellow chair.",
            model_response: "Here is the guitar. I put it on the yellow chair next to the window."
        },
        part_3: {
            title: "Part 3: Questions about the Picture",
            instruction: "Answer the examiner's questions about the characters and activities in the picture.",
            examiner_audio: "https://actions.google.com/sounds/v1/ambiences/street_traffic.ogg",
            prompt: "Now, what is this boy doing? What colour is his bicycle? Tell me about the dog.",
            model_response: "The boy is riding his bicycle. It is bright blue. The dog has brown ears and is sleeping."
        },
        part_4: {
            title: "Part 4: Personal Questions",
            instruction: "Answer the examiner's personal questions about yourself, your hobbies and family.",
            examiner_audio: "https://actions.google.com/sounds/v1/ambiences/office_room.ogg",
            prompt: "How old are you? What is your favourite food? How many people are in your family?",
            model_response: "I am eight years old. My favourite food is pizza. There are four people in my family: my mum, my dad, my sister and me."
        }
    };

    return {
        id: profile.id,
        title: `${profile.book} - ${profile.test_title}`,
        badge: profile.badge,
        book: profile.book,
        test_title: profile.test_title,
        listening: {
            audio_url: "https://actions.google.com/sounds/v1/ambiences/outdoor_market.ogg",
            duration_seconds: 1500,
            parts: [
                {
                    part_number: 1,
                    title: "Part 1: Listen and draw lines (5 questions)",
                    instruction: "Listen and draw lines between the names and the people in the picture.",
                    spots: part1Spots,
                    names: profile.p1_names,
                    questions: part1Questions
                },
                {
                    part_number: 2,
                    title: "Part 2: Listen and write a name or a number (5 questions)",
                    instruction: "Listen to the conversation and write a name or a number for each question.",
                    examples: profile.lis_p2.examples,
                    questions: part2Questions
                },
                {
                    part_number: 3,
                    title: "Part 3: Listen and tick the box (5 questions)",
                    instruction: "Listen to the audio and select the correct option (A, B or C).",
                    questions: part3Questions
                },
                {
                    part_number: 4,
                    title: "Part 4: Listen and colour (5 questions)",
                    instruction: "Listen carefully and choose the correct crayon to colour the objects in the picture.",
                    example: part4Example,
                    questions: part4Questions
                }
            ]
        },
        reading_writing: {
            duration_seconds: 1200,
            parts: [
                {
                    part_number: 1,
                    title: "Part 1: Look and read. Put a tick or a cross (5 questions)",
                    instruction: "Look at each picture and read the sentence. Click Tick if correct, Cross if wrong.",
                    examples: rwPart1Examples,
                    questions: rwPart1Questions
                },
                {
                    part_number: 2,
                    title: "Part 2: Look and read. Write 'yes' or 'no' (5 questions)",
                    instruction: "Look at the picture and read each sentence carefully. Choose yes or no.",
                    examples: profile.rw_p2.examples,
                    questions: rwPart2Questions
                },
                {
                    part_number: 3,
                    title: "Part 3: Look at the pictures. Look at the letters. Write the words (5 questions)",
                    instruction: "Look at each picture and letters. Rearrange the letters to write the correct word.",
                    example: rwPart3Example,
                    questions: rwPart3Questions
                },
                {
                    part_number: 4,
                    title: "Part 4: Read this. Choose a word from the box (5 questions)",
                    instruction: "Read the story and type the correct word in each gap (16 - 20).",
                    story_title: rwPart4Title,
                    example: rwPart4Example,
                    word_bank: rwPart4WordBank,
                    questions: rwPart4Questions
                },
                {
                    part_number: 5,
                    title: "Part 5: Look at the pictures and write one-word answers (5 questions)",
                    instruction: "Answer each question with one word based on the story pictures.",
                    questions: rwPart5Questions
                }
            ]
        },
        speaking: speakingData
    };
}

// Build startersProfileData
const startersProfileData = {
    avatar: "avatars/starters.jpg",
    name: "Starters Master",
    age: "Pre-A1 Starters 1 - 4",
    curriculum: "Complete Cambridge English Pre-A1 Starters 1, 2, 3 & 4 (Listening | Reading & Writing | Speaking)",
    units: {},
    starters_tests: {}
};

// Generate all 12 authentic tests
startersTestProfiles.forEach((profile, idx) => {
    startersProfileData.units[profile.id] = { title: `${profile.book} ${profile.test_title}` };
    startersProfileData.starters_tests[profile.id] = generateStartersTest(profile, idx);
});

// Register Starters Master profile to studentsDB
if (typeof studentsDB !== 'undefined') {
    studentsDB["starters"] = startersProfileData;
}