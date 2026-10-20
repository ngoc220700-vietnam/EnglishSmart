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

    // 2. READING & WRITING (5 PARTS)
    const rwPart1Questions = [
        { id: 1, image_desc: "A piano", statement: "These are pianos.", is_correct: false, correct_answer: "cross", explanation: "The image shows a single piano, not multiple pianos -> Cross." },
        { id: 2, image_desc: "Sausages", statement: "These are sausages.", is_correct: true, correct_answer: "tick", explanation: "The image shows sausages -> Tick." },
        { id: 3, image_desc: "A skirt", statement: "These are skirts.", is_correct: false, correct_answer: "cross", explanation: "The image shows a single skirt -> Cross." },
        { id: 4, image_desc: "A lamp", statement: "This is a lamp.", is_correct: true, correct_answer: "tick", explanation: "The image shows a bedside lamp -> Tick." },
        { id: 5, image_desc: "A watch", statement: "This is a watch.", is_correct: true, correct_answer: "tick", explanation: "The image shows a wristwatch -> Tick." }
    ];

    const rwPart2Questions = profile.rw_p2.questions;

    const rwPart3Questions = [
        { id: 11, scrambled_letters: ["L", "E", "M", "O", "N"], correct_word: "LEMON", hint: "A yellow sour fruit", explanation: "L-E-M-O-N -> LEMON" },
        { id: 12, scrambled_letters: ["B", "A", "N", "A", "N", "A"], correct_word: "BANANA", hint: "A long yellow fruit monkeys love", explanation: "B-A-N-A-N-A -> BANANA" },
        { id: 13, scrambled_letters: ["A", "P", "P", "L", "E"], correct_word: "APPLE", hint: "A round red or green fruit", explanation: "A-P-P-L-E -> APPLE" },
        { id: 14, scrambled_letters: ["O", "R", "A", "N", "G", "E"], correct_word: "ORANGE", hint: "A round sweet citrus fruit", explanation: "O-R-A-N-G-E -> ORANGE" },
        { id: 15, scrambled_letters: ["G", "R", "A", "P", "E", "S"], correct_word: "GRAPES", hint: "Small purple or green fruit in bunches", explanation: "G-R-A-P-E-S -> GRAPES" }
    ];

    const rwPart4Questions = [
        { id: 16, question: "16. In Mark's flat there are chairs next to the table in the [______].", correct_answers: ["kitchen", "KITCHEN"], explanation: "Chairs are placed around the dining table in the kitchen." },
        { id: 17, question: "17. Mark's family sit and eat their [______] there.", correct_answers: ["dinner", "DINNER"], explanation: "The family sits down to eat dinner together." },
        { id: 18, question: "18. Mark sits on his chair and reads his [______].", correct_answers: ["book", "BOOK"], explanation: "Mark enjoys reading a book." },
        { id: 19, question: "19. Mark listens to the radio or plays on his [______].", correct_answers: ["tablet", "TABLET"], explanation: "Mark plays games on his electronic tablet." },
        { id: 20, question: "20. There is a big red and blue [______] on the floor under his chair.", correct_answers: ["rug", "RUG"], explanation: "A colorful rug lies beneath the chair on the floor." }
    ];

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
                    title: "Part 3: Look at the pictures. Write the words (5 questions)",
                    instruction: "Rearrange the scrambled letters to spell the correct English vocabulary word.",
                    questions: rwPart3Questions
                },
                {
                    part_number: 4,
                    title: "Part 4: Read this. Choose a word from the box (5 questions)",
                    instruction: "Read the story and type the correct word in each gap (16 - 20).",
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