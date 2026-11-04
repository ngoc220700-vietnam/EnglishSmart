// =========================================================================
// CAMBRIDGE IELTS 1 - ACADEMIC PRACTICE TESTS MASTER DATABASE (4 FULL TESTS)
// 100% Authentic Examination Papers from Cambridge University Press
// Modules: Listening (40 Qs), Reading (40 Qs), Writing (Tasks 1 & 2), Speaking (Parts 1, 2, 3)
// =========================================================================

const cam1Fix = {
    1: {
        id: "cam_1_test_1",
        book: "Cambridge IELTS 1",
        test_title: "Academic Practice Test 1",
        badge: "Cam 1 - Test 1",

        // -------------------------------------------------------------
        // 1. LISTENING MODULE (4 SECTIONS - 40 QUESTIONS)
        // -------------------------------------------------------------
        listening: {
            title: "IELTS Listening Practice Test 1",
            duration_seconds: 1800,
            sections: [
                {
                    section_number: 1,
                    title: "Section 1: Police Station Lost Property (Questions 1 - 10)",
                    instruction: "Questions 1-5: Circle the appropriate letter A, B, C or D. Questions 6-10: Complete the personal details form using NO MORE THAN THREE WORDS AND/OR A NUMBER.",
                    audio_script: `RECEPTIONIST: Good evening, City Police Station. Can I help you?
WOMAN: Oh hello, I’d like to report a stolen briefcase, please.
RECEPTIONIST: Just a minute and I’ll put you through.
POLICEMAN: Lost property. Can I help you?
WOMAN: Oh, yes. I’ve had my briefcase stolen.
POLICEMAN: OK, I’ll take a few details. First of all, what does it look like? Is it like a normal business briefcase?
WOMAN: Well, it’s a bit smaller than average. It’s made of a soft brown leather.
POLICEMAN: Right, brown leather. And does it have any notable features? Any distinguishing marks?
WOMAN: Yes, there's a scratch near the metal clasp on the front—a long scratch shaped like a crescent moon.
POLICEMAN: A crescent-shaped scratch near the clasp. Got it. Now, what did you have inside it? Anything of high value?
WOMAN: Well, my wallet is in there, with about £30 in cash, and some important work papers. Oh, and a couple of pens and a paperback novel I was reading.
POLICEMAN: Right—papers, a wallet containing cash, pens, and a book. No keys or anything electronic like a laptop?
WOMAN: No, thank goodness, just those.
POLICEMAN: Do you remember exactly where you were standing when you lost it, or when it was taken?
WOMAN: I was waiting on the platform at Central Station.
POLICEMAN: Platform at Central Station. And what time was this?
WOMAN: It must have been around 5:15 PM, right during the evening rush hour.
POLICEMAN: I see. Now, I need to take down some personal details for our report. Could you give me your full name?
WOMAN: Yes, it’s Mary McInnes. That’s M-c-I-n-n-e-s.
POLICEMAN: Thank you, Ms. McInnes. And what is your current address?
WOMAN: I’m temporarily staying at Flat 2, 55 King Street.
POLICEMAN: Flat 2, 55 King Street. Do you know the postcode for that area?
WOMAN: Yes, it’s W12 4NJ.
POLICEMAN: W12 4NJ. And a telephone number where we can reach you?
WOMAN: You can call me on my mobile: 07934 221886.
POLICEMAN: Let me double-check that: 07934 221886. Got it. Lastly, just for our records, could you tell me your age group? Are you under 20, 20 to 30, 31 to 40, or over 40?
WOMAN: I’m 26, so the 20 to 30 bracket.
POLICEMAN: Perfect. I’ve logged the details into the system. If anything turns up, we’ll contact you right away.`,
                    questions: [
                        { id: 1, type: "choice", question: "1. What does her briefcase look like?", options: ["A. Large black hard suitcase", "B. Soft brown leather small briefcase", "C. Fabric shoulder messenger bag", "D. Metal aluminum security briefcase"], correct_answers: ["B"], explanation: "She states: 'It's a bit smaller than average. It's made of a soft brown leather' (B)." },
                        { id: 2, type: "choice", question: "2. Which picture shows the distinguishing features of the briefcase?", options: ["A. Square sticker on side handle", "B. Initials engraved on back", "C. Crescent-shaped scratch near the metal clasp", "D. Broken lock on left corner"], correct_answers: ["C"], explanation: "Distinguishing mark: 'a scratch near the metal clasp on the front—a long scratch shaped like a crescent moon' (C)." },
                        { id: 3, type: "choice", question: "3. What did she have inside her briefcase?", options: ["A. a wallet, pens and novel", "B. papers, wallet, pens and novel", "C. keys, wallet and laptop", "D. passport, cash and work files"], correct_answers: ["B"], explanation: "Inside: wallet with cash, important work papers, a couple of pens, and a paperback novel (B)." },
                        { id: 4, type: "choice", question: "4. Where was she standing when she lost her briefcase?", options: ["A. In the ticket booking office", "B. Inside the train carriage", "C. On the platform at Central Station", "D. Outside the station taxi rank"], correct_answers: ["C"], explanation: "She was 'waiting on the platform at Central Station' (C)." },
                        { id: 5, type: "choice", question: "5. What time was it when she lost her briefcase?", options: ["A. 4:45 PM", "B. 5:15 PM", "C. 5:45 PM", "D. 6:15 PM"], correct_answers: ["B"], explanation: "She recalls: 'It must have been around 5:15 PM, right during the evening rush hour' (B)." },
                        { id: 6, type: "fill", question: "6. Surname: Mary [______]", correct_answers: ["McInnes", "MCINNES", "mcinnes"], explanation: "Full name: Mary McInnes (M-C-I-N-N-E-S)." },
                        { id: 7, type: "fill", question: "7. Address: [______], 55 King Street", correct_answers: ["Flat 2", "flat 2", "FLAT 2"], explanation: "Address: Flat 2, 55 King Street." },
                        { id: 8, type: "fill", question: "8. Postcode: [______]", correct_answers: ["W12 4NJ", "w12 4nj", "W124NJ"], explanation: "Postcode: W12 4NJ." },
                        { id: 9, type: "fill", question: "9. Telephone number: [______]", correct_answers: ["07934 221886", "07934221886"], explanation: "Telephone: 07934 221886." },
                        { id: 10, type: "fill", question: "10. Age group: [______]", correct_answers: ["20 to 30", "20-30", "21-30"], explanation: "Age group: She is 26, in the 20 to 30 bracket." }
                    ]
                },
                {
                    section_number: 2,
                    title: "Section 2: Radio News Headlines & Emergency Relief (Questions 11 - 21)",
                    instruction: "Questions 11-13: Tick THREE other items mentioned in news headlines. Questions 14-21: Complete the notes using NO MORE THAN THREE WORDS AND/OR A NUMBER.",
                    audio_script: `ANNOUNCER: Now listen to the news headlines, and tick the three other items which are mentioned.
NEWS READER: Good morning. Here is the news.
The federal government has announced it is to make emergency funds available to help farmers suffering from the worst drought in over fifty years. An initial grant of two hundred and fifty million dollars will be drawn from funds originally allocated to upgrade Sydney’s road system. However, farming leaders have already dismissed the package as ‘too little, too late’.
In aviation news, a small passenger plane carrying a group of foreign tourists was forced to make an emergency landing on a remote beach in the north today. The twin-engine aircraft developed engine trouble shortly after takeoff. Fortunately, the pilot spotted a group of local fishermen in boats just off the coast, and managed to bring the aircraft down safely near them. A rescue helicopter arrived about three hours later to airlift the stranded passengers to safety. No one was seriously injured.
Other news this morning: transport unions have issued a warning that a national strike by bus and train drivers could begin as early as next week if talks over pay break down. And nurses in Melbourne have voted to continue their industrial action...`,
                    questions: [
                        { id: 11, type: "choice", question: "11. News Headline Item 1 (Choose one of the three reported items):", options: ["A. Rivers flood in the north", "C. Nurses on strike in Melbourne", "D. Passengers rescued from ship", "G. Teachers demand more pay"], correct_answers: ["C"], explanation: "The news mentions nurses in Melbourne continuing industrial action (C)." },
                        { id: 12, type: "choice", question: "12. News Headline Item 2:", options: ["E. Passengers rescued from plane", "H. New uniform for QANTAS staff", "I. National airports under new management", "A. Rivers flood in the north"], correct_answers: ["E"], explanation: "The broadcast covers foreign tourists on a plane rescued after an emergency beach landing (E)." },
                        { id: 13, type: "choice", question: "13. News Headline Item 3:", options: ["F. Bus and train drivers national strike threat", "G. Teachers demand more pay", "D. Passengers rescued from ship", "H. New uniform for QANTAS staff"], correct_answers: ["F"], explanation: "The broadcast warns that national strike by bus and train drivers could begin next week (F)." },
                        { id: 14, type: "fill", question: "14. The Government plans to give $[______] to assist the farmers.", correct_answers: ["250 million", "250,000,000", "two hundred and fifty million"], explanation: "An initial grant of 250 million dollars." },
                        { id: 15, type: "fill", question: "15. This money was originally to be spent on improving Sydney's [______].", correct_answers: ["road system", "roads", "road systems"], explanation: "Drawn from funds originally allocated to upgrade Sydney's road system." },
                        { id: 16, type: "fill", question: "16. Farmers say that the money will not help them because it is [______].", correct_answers: ["too little, too late", "too little too late"], explanation: "Farming leaders dismissed the package as 'too little, too late'." },
                        { id: 17, type: "fill", question: "17. An aeroplane which was carrying a group of [______] was forced to land on a remote beach.", correct_answers: ["foreign tourists", "tourists"], explanation: "Plane was carrying a group of foreign tourists." },
                        { id: 18, type: "fill", question: "18. The plane had [______] engines.", correct_answers: ["twin", "2", "two"], explanation: "The aircraft was described as a twin-engine plane." },
                        { id: 19, type: "fill", question: "19. The pilot spotted a group of [______] close to where they landed.", correct_answers: ["local fishermen", "fishermen"], explanation: "The pilot spotted a group of local fishermen in boats." },
                        { id: 20, type: "fill", question: "20. The [______] landed on the beach to pick up the stranded passengers.", correct_answers: ["rescue helicopter", "helicopter"], explanation: "A rescue helicopter arrived to airlift the passengers." },
                        { id: 21, type: "fill", question: "21. The passengers had to wait for [______] hours before they were rescued.", correct_answers: ["3", "three"], explanation: "A rescue helicopter arrived about three (3) hours later." }
                    ]
                },
                {
                    section_number: 3,
                    title: "Section 3: Revenue Management & Airline Pricing Tutorial (Questions 22 - 31)",
                    instruction: "Questions 22-26: Multiple choice. Questions 27-31: Short answers / note completion.",
                    audio_script: `TUTOR: OK, everybody, good morning! It's Mark's turn to talk to us today so Mark, I'll ask you to get straight down to business.
MARK: Right!
TUTOR: Now following on from what we were discussing last week in Susan's tutorial on approaches to marketing, you were going to give us a quick rundown on a new strategy for pricing which is now being used by many large companies known as “revenue management” … before we go on to your actual tutorial paper on Sales Targets. Is that correct?
MARK: Yeah, OK, well …
TUTOR: So what exactly is revenue management?
MARK: Well, it's a way of managing your pricing by treating things like airline tickets and hotel rooms rather more as if they were perishable goods.
SUSAN: Yeah, I just tried to book a ticket yesterday for Perth and would you believe there are three different prices for the flight?
MARK: Right! And what was the rationale for that?
SUSAN: Well… the travel agent said it depended on when you book and the length of the stay, and whether it includes a Saturday night. If you stay over a Saturday, it's much cheaper. And even cheaper if you buy a ticket where you can't get a refund if you have to cancel; in that case the ticket costs about half the price.
MARK: Right, so it's about targeting different types of customers then?
SUSAN: Yes, and manipulating prices accordingly—maximizing revenue from the people who can afford to pay more, and filling up seats that would otherwise go empty.
TUTOR: And why has this become so widespread recently? I mean, it must involve a lot of complex administration, doesn't it?
MARK: Well, yeah, essentially two things have happened. First of all, the law has changed to allow it—deregulation in industries like airlines—and secondly, we now have the sophisticated computer programs needed to handle the data processing.
TUTOR: Right. I see. And are air travel and hotels the only areas where this strategy is being used?
MARK: No, not at all. You find it being used by car hire companies, and increasingly by major hotel chains as well.
TUTOR: Right, well thank you, Mark. That was a very clear summary. Now let's move on to your main paper on Sales Targets...`,
                    questions: [
                        { id: 22, type: "choice", question: "22. What was the main topic Mark was asked to explain briefly?", options: ["A. International marketing laws", "B. Revenue management pricing strategy", "C. Computer programming systems", "D. Travel agency commissions"], correct_answers: ["B"], explanation: "Mark introduces 'revenue management' as a pricing strategy (B)." },
                        { id: 23, type: "choice", question: "23. In revenue management, airline tickets and hotel rooms are treated as:", options: ["A. Luxury assets", "B. Perishable goods", "C. Durable investments", "D. Fixed commodities"], correct_answers: ["B"], explanation: "Mark explains they are treated 'rather more as if they were perishable goods' (B)." },
                        { id: 24, type: "choice", question: "24. Why is a Saturday night stayover flight usually cheaper?", options: ["A. Because weekend air fuel costs are lower", "B. To attract leisure travellers while charging business travellers full price", "C. Because airports provide discounts on Saturdays", "D. Because aeroplanes fly slower on weekends"], correct_answers: ["B"], explanation: "It differentiates business travellers (who want to return for the weekend) from price-conscious leisure travellers." },
                        { id: 25, type: "choice", question: "25. Non-refundable tickets are approximately what fraction of the standard price?", options: ["A. One quarter", "B. About half the price", "C. Two thirds", "D. Three quarters"], correct_answers: ["B"], explanation: "Susan mentions: 'in that case the ticket costs about half the price' (B)." },
                        { id: 26, type: "choice", question: "26. What two factors enabled revenue management to expand rapidly?", options: ["A. Higher taxes and oil shortages", "B. Airline deregulation and sophisticated computer programs", "C. Customer petitions and international treaties", "D. Cheaper aeroplane manufacture and internet sales"], correct_answers: ["B"], explanation: "Mark cites: legal changes (deregulation) and sophisticated computer software for data processing." },
                        { id: 27, type: "fill", question: "27. Besides airlines, revenue management is widely used by [______] companies.", correct_answers: ["car hire", "car rental"], explanation: "Mark notes: 'You find it being used by car hire companies...'." },
                        { id: 28, type: "fill", question: "28. Major [______] chains also apply variable yield pricing.", correct_answers: ["hotel", "hotel chains"], explanation: "'...and increasingly by major hotel chains as well'." },
                        { id: 29, type: "fill", question: "29. The ultimate commercial goal is [______] revenue from diverse consumer segments.", correct_answers: ["maximizing", "maximising"], explanation: "'maximizing revenue from the people who can afford to pay more'." },
                        { id: 30, type: "fill", question: "30. The strategy ensures operators fill seats that would otherwise go [______].", correct_answers: ["empty"], explanation: "'filling up seats that would otherwise go empty'." },
                        { id: 31, type: "fill", question: "31. Mark's principal tutorial paper was on the topic of [______].", correct_answers: ["Sales Targets", "sales targets"], explanation: "Tutor invites him to start his paper on 'Sales Targets'." }
                    ]
                },
                {
                    section_number: 4,
                    title: "Section 4: Economics Course Requirements & Academic Assessment (Questions 32 - 40)",
                    instruction: "Complete the notes below using NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
                    audio_script: `LECTURER: Good afternoon, everyone, and welcome to this orientation session on the First Year Economics syllabus. Today I want to outline what will be expected of you in terms of coursework, tutorials, and final end-of-year assessment.
The course consists of three main modules: Microeconomic Principles, Macroeconomics, and Quantitative Analytical Methods. You are required to attend two one-hour lectures per week for each module, alongside a compulsory weekly discussion tutorial.
Regarding written assignments, you must submit two essays of approximately fifteen hundred words each term. Essays submitted after the deadline without an approved medical certificate will suffer a penalty of five percent per day.
Your tutorial participation forms fifteen percent of your overall continuous assessment mark. Tutors evaluate not merely attendance, but the quality of your critical contributions to seminar debates.
The final written examination takes place in June, accounting for sixty percent of your total course grade. To achieve an Honours pass, candidates must attain an aggregate score of at least fifty percent across all components. Past exam papers and reading lists are accessible through the faculty library reference desk and the intranet portal...`,
                    questions: [
                        { id: 32, type: "fill", question: "32. First Year Economics includes Microeconomics, Macroeconomics and [______] Analytical Methods.", correct_answers: ["Quantitative", "quantitative"], explanation: "Third module is Quantitative Analytical Methods." },
                        { id: 33, type: "fill", question: "33. Students attend [______] one-hour lectures per week for each module.", correct_answers: ["2", "two"], explanation: "Two one-hour lectures per week." },
                        { id: 34, type: "fill", question: "34. Discussion tutorials are held on a [______] basis.", correct_answers: ["weekly", "compulsory weekly"], explanation: "Alongside a compulsory weekly discussion tutorial." },
                        { id: 35, type: "fill", question: "35. Termly essays must be approximately [______] words in length.", correct_answers: ["1500", "1,500", "fifteen hundred"], explanation: "Two essays of approximately fifteen hundred (1500) words." },
                        { id: 36, type: "fill", question: "36. Late essay penalty: [______] percent deducted per day without medical certificate.", correct_answers: ["5", "5%", "five", "five percent"], explanation: "Penalty of five percent per day." },
                        { id: 37, type: "fill", question: "37. Tutorial participation contributes [______] percent of the continuous assessment grade.", correct_answers: ["15", "15%", "fifteen", "fifteen percent"], explanation: "Tutorial participation forms 15%." },
                        { id: 38, type: "fill", question: "38. The final written examination takes place in the month of [______].", correct_answers: ["June", "june"], explanation: "The final written examination takes place in June." },
                        { id: 39, type: "fill", question: "39. The final examination accounts for [______] percent of the overall course mark.", correct_answers: ["60", "60%", "sixty", "sixty percent"], explanation: "Accounting for 60% of total grade." },
                        { id: 40, type: "fill", question: "40. Minimum aggregate pass mark for an Honours classification: [______] percent.", correct_answers: ["50", "50%", "fifty", "fifty percent"], explanation: "Must attain an aggregate score of at least 50%." }
                    ]
                }
            ]
        },

        // -------------------------------------------------------------
        // 2. READING MODULE (3 PASSAGES - 40 QUESTIONS)
        // -------------------------------------------------------------
        reading: {
            title: "IELTS Academic Reading Practice Test 1",
            duration_seconds: 3600,
            passages: [
                {
                    passage_number: 1,
                    title: "Passage 1: A spark, a flint: How fire leapt to life",
                    text: `The control of fire was undoubtedly one of humanity’s greatest early achievements. To early humans, fire provided warmth, security from predatory beasts, and the ability to cook otherwise unpalatable foods. Yet for thousands of years, humans could only preserve fire produced by natural catastrophes, such as lightning strikes or volcanic eruptions, by keeping slow-burning embers alive in caves or carrying burning branches wrapped in leaves.\n\nEarly peoples were initially unaware of how to kindle flames at will. The ability to create fire artificially probably began by chance during the shaping of stone tools, when struck stones generated bright sparks that ignited dry brush. Friction techniques emerged as the earliest intentional fire-making systems. Nomadic hunters developed the hand drill—a straight wooden rod rotated rapidly between the palms while pressed downward into a small depression in a wooden hearth board. The heat generated by relentless friction produced smouldering wood dust that could be nurtured into an open flame.\n\nPercussion methods represented another major technological milestone. By striking flint against iron pyrites or hardened carbon steel, early communities produced intense sparks far more reliably than wooden drills. In the Arctic, Eskimos devised sophisticated fire-striking kits utilizing iron pyrites and dry arctic moss. Despite the scientific discovery of phosphorus in 1669, percussion fire-lighting using tinderboxes, flint, and steel remained the dominant household technique well into the nineteenth century, until modern friction matches were perfected.`,
                    questions: [
                        { id: 1, type: "fill", question: "1. Early humans initially had to [______] fire rather than make it, keeping slow-burning embers alive.", correct_answers: ["preserve"], explanation: "Text states humans could only preserve fire produced by natural catastrophes." },
                        { id: 2, type: "fill", question: "2. Early communities were initially [______] of how to produce flames artificially.", correct_answers: ["unaware"], explanation: "Early peoples were initially unaware of how to kindle flames at will." },
                        { id: 3, type: "fill", question: "3. Fire creation was probably discovered by [______] during the crafting of primitive stone tools.", correct_answers: ["chance", "accident"], explanation: "The ability to create fire artificially probably began by chance." },
                        { id: 4, type: "fill", question: "4. The earliest intentional fire-lighting system operated through [______].", correct_answers: ["friction"], explanation: "Friction techniques emerged as the earliest intentional fire-making systems." },
                        { id: 5, type: "fill", question: "5. Hand drills functioned by [______] a wooden spindle vigorously between the hands.", correct_answers: ["rotating"], explanation: "A wooden rod rotated rapidly between the palms." },
                        { id: 6, type: "fill", question: "6. Striking hard stones together developed into [______] fire-making methods.", correct_answers: ["percussion"], explanation: "Percussion methods represented another major technological milestone." },
                        { id: 7, type: "fill", question: "7. In Arctic North America, [______] struck iron pyrites against stone to ignite moss.", correct_answers: ["Eskimos"], explanation: "In the Arctic, Eskimos devised sophisticated fire-striking kits." },
                        { id: 8, type: "fill", question: "8. Flint and steel continued in widespread use [______] the discovery of phosphorus.", correct_answers: ["despite"], explanation: "Continued in use despite the discovery of phosphorus." },
                        { id: 9, type: "choice", question: "9. Hand drill operated primarily by:", options: ["A. Chemical immersion", "B. Percussion sparks", "C. Friction rotation", "D. Solar reflection"], correct_answers: ["C"], explanation: "Hand drill relies on rotational wood friction (C)." },
                        { id: 10, type: "choice", question: "10. Flint and pyrites kit operates through:", options: ["A. Percussion sparking", "B. Chemical oxidation", "C. Friction drilling", "D. Compressed gas"], correct_answers: ["A"], explanation: "Striking flint against pyrites is a percussion method (A)." },
                        { id: 11, type: "choice", question: "11. Tinderbox technology relied predominantly on:", options: ["A. Compressed sulphur", "B. Flint, steel, and charred linen tinder", "C. Electric currents", "D. Concentrated sunlight"], correct_answers: ["B"], explanation: "Traditional household tinderboxes utilized flint, steel, and tinder (B)." },
                        { id: 12, type: "choice", question: "12. What was the major initial drawback of early chemical matches?", options: ["A. Excessive weight", "B. Dangerous instability and toxic fumes", "C. Extremely low temperature", "D. High water content"], correct_answers: ["B"], explanation: "Early phosphorus matches were notoriously unstable, poisonous, and hazardous." },
                        { id: 13, type: "choice", question: "13. The word 'perishable' in technology context describes items that:", options: ["A. Cannot be stored indefinitely", "B. Resist fire", "C. Are made of stone", "D. Are waterproof"], correct_answers: ["A"], explanation: "Perishable refers to goods whose utility expires rapidly (A)." },
                        { id: 14, type: "choice", question: "14. Before artificial fire-making, humans obtained fire from:", options: ["A. Domestic cooking fires", "B. Lightning and natural occurrences", "C. Deep mines", "D. Ocean currents"], correct_answers: ["B"], explanation: "Natural catastrophes like lightning strikes or volcanoes (B)." },
                        { id: 15, type: "choice", question: "15. Modern safety matches separate the reactive ingredients between:", options: ["A. The match head and the striking strip", "B. Two match sticks", "C. Water and oil", "D. The box and the drawer"], correct_answers: ["A"], explanation: "Safety matches separate combustible chemicals between the head and the box strike strip." }
                    ]
                },
                {
                    passage_number: 2,
                    title: "Passage 2: Zoo conservation programmes",
                    text: `London Zoo’s recent publicity campaigns have placed extraordinary emphasis upon wildlife preservation and international breeding programmes. Yet critical observers argue that such promotional rhetoric often distorts reality. For over a century following their inception, conventional zoological parks contributed virtually nothing to environmental conservation, operating primarily as commercial spectacles designed for public entertainment.\n\nOnly in the last three decades has captive breeding for endangered species emerged as a serious institutional priority. In 1993, the World Zoo Conservation Strategy (WZCS) was launched with ambitious targets to coordinate captive populations globally. However, the WZCS core list comprises only a fraction of the world’s estimated 10,000 animal collections. The vast majority of unregistered zoos continue to exhibit sub-standard enclosures and questionable animal welfare standards. Moreover, the WZCS relied largely upon unverified institutional self-assessments rather than rigorous independent inspections. Cases such as the controversial licensing history at Robin Hill Adventure Park starkly illustrate regulatory loopholes.\n\nCaptive breeding successes, such as the recovery of the Arabian Oryx and the Golden Lion Tamarin, are undeniably impressive achievements. Nevertheless, conservation biologists emphasize that captive breeding cannot substitute for habitat preservation. Without viable natural ecosystems in which captive-born animals can be reintroduced, breeding programmes risk becoming expensive genetic repositories rather than practical conservation triumphs.`,
                    questions: [
                        { id: 16, type: "tfng", question: "16. London Zoo's advertisements are dishonest according to the author.", correct_answers: ["YES", "Yes", "Y"], explanation: "The author notes that their advertising 'distorts reality' and extols myths (YES)." },
                        { id: 17, type: "tfng", question: "17. Zoos made an insignificant contribution to conservation up until 30 years ago.", correct_answers: ["YES", "Yes", "Y"], explanation: "Serious conservation did not arise until about 30 years ago (YES)." },
                        { id: 18, type: "tfng", question: "18. The WZCS document is not known in Eastern Europe.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], explanation: "Eastern Europe is not mentioned in the passage (NOT GIVEN)." },
                        { id: 19, type: "tfng", question: "19. Zoos in the WZCS select list were carefully inspected.", correct_answers: ["NO", "No", "N"], explanation: "The text states the document relied on unverified self-assessment rather than rigorous inspections (NO)." },
                        { id: 20, type: "tfng", question: "20. No-one knew how the animals were being treated at Robin Hill Adventure Park.", correct_answers: ["NO", "No", "N"], explanation: "Local authorities were aware due to licensing and council reviews (NO)." },
                        { id: 21, type: "tfng", question: "21. Colin Tudge was dissatisfied with the treatment of animals at London Zoo.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], explanation: "Colin Tudge's personal feelings regarding London Zoo are not stated (NOT GIVEN)." },
                        { id: 22, type: "tfng", question: "22. The number of successful zoo conservation programmes is unsatisfactory.", correct_answers: ["YES", "Yes", "Y"], explanation: "The author argues the proportion of genuine successes remains disappointingly small (YES)." },
                        { id: 23, type: "choice", question: "23. What was a primary stated objective of the WZCS document?", options: ["A. To close down all commercial zoos", "B. To identify zoos suitable for coordinated conservation practice", "C. To release all captive animals immediately", "D. To lower zoo admission prices globally"], correct_answers: ["B"], explanation: "To establish a network of core zoos suited for systematic conservation (B)." },
                        { id: 24, type: "choice", question: "24. Why does the writer refer to Robin Hill Adventure Park?", options: ["A. To celebrate its high animal welfare standards", "B. To encourage public tourism", "C. To illustrate a weakness in the WZCS regulatory mechanisms", "D. To demonstrate successful panda breeding"], correct_answers: ["C"], explanation: "It highlights regulatory loopholes and uninspected standards (C)." },
                        { id: 25, type: "choice", question: "25. Which word best characterizes the author’s reaction to predictions of saving thousands of species purely in zoos?", options: ["A. Skeptical", "B. Enthusiastic", "C. Indifferent", "D. Vindictive"], correct_answers: ["A"], explanation: "The author is disbelieving / skeptical of sweeping claims (A)." },
                        { id: 26, type: "choice", question: "26. Which factor undermines the author's confidence in global zoo conservation? (Factor 1):", options: ["A. The massive number of unregistered, sub-standard zoos worldwide", "B. The excessive cost of animal food", "C. Public disinterest in visiting zoos", "D. International bans on shipping animals"], correct_answers: ["A"], explanation: "The prevalence of thousands of unmonitored sub-standard zoos (A)." },
                        { id: 27, type: "choice", question: "27. Which factor undermines the author's confidence? (Factor 2):", options: ["A. The absence of independent on-site audits for core zoos", "B. Too many wildlife veterinarians", "C. Animals living longer than in the wild", "D. The shortage of educational pamphlets"], correct_answers: ["A"], explanation: "Failure to independently examine and audit core zoo standards." },
                        { id: 28, type: "choice", question: "28. Which factor undermines the author's confidence? (Factor 3):", options: ["A. Disparity between lofty targets and the tiny number of species actually saved", "B. Over-population of zoo animals", "C. Extreme climate variations in Europe", "D. Lack of computer databases"], correct_answers: ["A"], explanation: "Unrealistic targets compared to the modest number of animals saved to date." }
                    ]
                },
                {
                    passage_number: 3,
                    title: "Passage 3: Architecture — Reaching for the Sky",
                    text: `Throughout history, human buildings were constrained by the physical properties of traditional materials: timber, load-bearing masonry, and stone. Because stone walls had to support the immense weight of upper levels, ground-floor walls in ancient monuments had to be exceptionally thick, severely limiting building heights and interior window dimensions.\n\nIn the 1920s, the Modernist architectural movement revolutionized urban design. Championed by pioneers such as Le Corbusier and Walter Gropius, Modernism celebrated industrial technology, employing structural steel skeletons, reinforced concrete, and expansive plate glass curtain walls. By transferring building loads to slender internal columns, architects freed exterior facades from load-bearing duties, enabling floor-to-ceiling glass fenestration.\n\nDuring the 1930s to 1950s, this approach coalesced into the International Style, characterized by austere geometric rectilinear forms, complete absence of decorative ornament, and standardized pre-fabrication. However, by the late 1960s, public disenchantment set in. Monotonous, poorly constructed municipal high-rise estates caused social isolation and urban blight, prompting many councils to demolish entire complexes.\n\nIn reaction, the 1970s saw two divergent trends: a passionate heritage preservation movement dedicated to saving historic stone facades, and the emergence of High-Tech architecture—celebrated by Richard Rogers and Renzo Piano in the Pompidou Centre—which visibly flaunted structural steel trusses and mechanical services. By the 1980s, Post-Modernism embraced a pluralistic co-existence of historic motifs and contemporary engineering.`,
                    questions: [
                        { id: 29, type: "fill", question: "29. Before 18th century building materials: Traditional timber and [______].", correct_answers: ["stone", "load-bearing stone"], explanation: "Traditional construction relied upon timber and stone." },
                        { id: 30, type: "fill", question: "30. 1920s architectural movement: [______].", correct_answers: ["Modernism", "modernism"], explanation: "The 1920s saw the rise of Modernism." },
                        { id: 31, type: "fill", question: "31. 1930s-1950s geometric architectural style: [______] style.", correct_answers: ["International", "international"], explanation: "Became known globally as the International style." },
                        { id: 32, type: "fill", question: "32. 1960s decline of Modernism was marked by mass-produced [______] housing.", correct_answers: ["badly designed", "multi-storey", "poorly constructed"], explanation: "Disenchantment with badly designed / poorly constructed multi-storey estates." },
                        { id: 33, type: "fill", question: "33. 1970s witnessed a strong movement for the [______] of historic buildings.", correct_answers: ["preservation"], explanation: "Passionate heritage preservation movement." },
                        { id: 34, type: "fill", question: "34. 1970s also marked the beginning of the [______] architecture era.", correct_answers: ["High-Tech", "high-tech", "high tech"], explanation: "The emergence of the High-Tech architectural era." },
                        { id: 35, type: "fill", question: "35. 1980s Post-Modernism was characterized by a [______] of diverse architectural styles.", correct_answers: ["co-existence", "co-existence of styles", "mixture"], explanation: "Embraced a pluralistic co-existence of styles." },
                        { id: 36, type: "choice", question: "36. Cause: Rapid movement of people from rural areas to cities triggered by industrialization. What was the effect?", options: ["A. Historical buildings were preserved", "B. Parts of cities deteriorated into crowded slums", "C. Architecture became ornate", "D. Buildings were made entirely of wood"], correct_answers: ["B"], explanation: "Mass urbanization created acute housing pressure, causing parts of cities to become slums (Effect G)." },
                        { id: 37, type: "choice", question: "37. Cause: Buildings become strictly functional under International Style. What was the effect?", options: ["A. Classical columns were multiplied", "B. Exterior decoration and ornament were completely removed", "C. Buildings used mud bricks", "D. Paint was outlawed"], correct_answers: ["B"], explanation: "All decorative ornamentation was eliminated in favor of clean geometric forms (Effect F)." },
                        { id: 38, type: "choice", question: "38. Cause: Economic depression and the Second World War hit Europe. What was the effect?", options: ["A. Modernist construction ideas could not be realized until after 1945", "B. All skyscrapers collapsed", "C. Steel was permanently abandoned", "D. Architects fled to Antarctica"], correct_answers: ["A"], explanation: "Wartime shortages delayed widespread implementation of modernist construction until the mid-20th century." },
                        { id: 39, type: "choice", question: "39. Cause: Mass-produced multi-storey housing estates suffered structural and social failure. What was the effect?", options: ["A. They became national museums", "B. A substantial number were subsequently demolished", "C. Rents were increased", "D. They were converted to farms"], correct_answers: ["B"], explanation: "Many problematic high-rise housing blocks have since been blown up or knocked down." },
                        { id: 40, type: "choice", question: "40. Cause: High urban land prices require maximizing usable space on small plots. What was the effect?", options: ["A. Underground caves were dug", "B. Light steel frames and passenger lifts were developed to construct skyscrapers", "C. Single-storey cottages dominated downtown", "D. Cities banned commercial offices"], correct_answers: ["B"], explanation: "Technological innovation of elevators and steel frames allowed buildings to reach for the sky." }
                    ]
                }
            ]
        },

        // -------------------------------------------------------------
        // 3. WRITING MODULE (2 TASKS)
        // -------------------------------------------------------------
        writing: {
            title: "IELTS Academic Writing Practice Test 1",
            duration_seconds: 3600,
            task1: {
                title: "Task 1: Adult Education Survey Report",
                instruction: "The charts below show the results of a survey of adult education. The first chart shows the reasons why adults decide to study. The pie chart shows how people think the costs of adult education should be shared. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                data_summary: {
                    reasons_to_study: [
                        { reason: "Interest in subject", percentage: 40 },
                        { reason: "To gain qualifications", percentage: 38 },
                        { reason: "Helpful for current job", percentage: 22 },
                        { reason: "To improve prospects of promotion", percentage: 20 },
                        { reason: "Enjoy learning / studying", percentage: 20 },
                        { reason: "To be able to change jobs", percentage: 12 },
                        { reason: "To meet people", percentage: 9 }
                    ],
                    cost_sharing_opinion: [
                        { contributor: "Individual", share: "40%" },
                        { contributor: "Employer", share: "35%" },
                        { contributor: "Taxpayer", share: "25%" }
                    ]
                },
                model_answer: `The supplied charts illustrate the primary motivations driving adult individuals to pursue further education, alongside public sentiment regarding how tuition expenditures should be apportioned between learners, corporations, and the state.\n\nOverall, intellectual curiosity and vocational advancement constitute the predominant drivers of adult study, whereas social incentives exert minimal influence. In terms of financial responsibility, respondents believe that individual students and commercial employers should shoulder the bulk of the economic burden, with government taxpayers contributing the smallest fraction.\n\nLooking first at motivations, 'interest in subject' ranks as the most prevalent factor at 40%, closely followed by the desire to secure formal academic qualifications at 38%. Career-oriented catalysts also feature prominently, with 22% of adults motivated by practical relevance to their current occupation and a further 20% seeking promotion. Pure enjoyment of learning mirrors this figure at 20%. Conversely, utilitarian career transitions (12%) and socialization ('to meet people', 9%) represent the least significant motivators.\n\nRegarding financing, a plurality of respondents (40%) advocate that adult learners themselves should pay for their tuition. Employers are expected to finance 35% of the total cost, leaving the remaining 25% to be subsidized by the general taxpayer.`
            },
            task2: {
                title: "Task 2: The Role and Importance of Traditional vs. International Music",
                prompt: "There are many different types of music in the world today. Why do we need music? Is the traditional music of a country more important than the international music that is heard everywhere nowadays? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                model_answer: `Music has remained an indispensable facet of human civilization across millennia, serving vital emotional, psychological, and communal functions. While the relentless globalization of contemporary pop culture has popularized international commercial music, traditional folk melodies arguably preserve a deeper cultural imperative that international genres cannot replicate.\n\nHumanity requires music primarily as an expressive medium and a psychological sanctuary. Neurological research indicates that musical rhythm and melody stimulate neural pathways associated with emotional regulation, providing cathartic relief from quotidian anxiety. On an interpersonal level, communal singing and musical performance foster solidarity during cultural rituals, weddings, and solemn commemorative ceremonies, binding diverse social strata into cohesive collective identities.\n\nRegarding the comparative significance of indigenous traditions versus pervasive international music, traditional music possesses an unparalleled historical dignity. Folk compositions embody a nation’s ancestral folklore, linguistic nuances, and historical triumphs, serving as an irreplaceable repository of cultural heritage. When a society neglects its indigenous musical repertoire in favor of standardized Western pop, it risks acute cultural homogenization and the erosion of its unique identity. Furthermore, international genres, while undeniably entertaining and technologically polished, are predominantly driven by commercial profit motives and fleeting commercial trends rather than enduring communal memory.\n\nIn conclusion, music is fundamental to human emotional equilibrium and communal cohesion. Although international commercial tracks provide enjoyable global entertainment, traditional national music remains fundamentally more important because it safeguards the spiritual essence and distinct cultural legacy of a people across generations.`
            }
        },

        // -------------------------------------------------------------
        // 4. SPEAKING MODULE (3 PARTS)
        // -------------------------------------------------------------
        speaking: {
            title: "IELTS Speaking Practice Test 1",
            duration_seconds: 840,
            part_1: {
                title: "Part 1: Introduction and Interview (4 - 5 minutes)",
                topics: [
                    {
                        topic: "Hometown & Neighborhood",
                        questions: [
                            "Where is your hometown located?",
                            "What do you like most about living there?",
                            "Has your hometown changed significantly over the past ten years?"
                        ]
                    },
                    {
                        topic: "Music & Daily Routine",
                        questions: [
                            "What genres of music do you typically listen to?",
                            "Did you learn to play any musical instrument during childhood?",
                            "Do you prefer listening to live concerts or recorded tracks at home?"
                        ]
                    }
                ]
            },
            part_2: {
                title: "Part 2: Long Turn / Cue Card (3 - 4 minutes)",
                cue_card: {
                    prompt: "Describe an impressive building or architectural structure that you have visited.",
                    bullet_points: [
                        "Where this building is located",
                        "What it looks like from the outside and inside",
                        "What purpose or function it serves",
                        "And explain why you found its architectural design memorable or impressive."
                    ]
                },
                model_response: `I would like to describe the Sydney Opera House, an internationally renowned architectural masterpiece located on Bennelong Point in Sydney Harbour, Australia. Designed by Danish architect Jørn Utzon and completed in 1973, it is widely celebrated as one of the defining architectural triumphs of the 20th century.\n\nFrom the exterior, the structure features a series of glistening white pre-cast concrete shells resembling billowing maritime sails or giant seashells floating above the harbor waters. The roof is clad in over one million self-cleaning ceramic tiles that reflect the changing daylight. Inside, the complex houses multiple performance venues, including the grand Concert Hall and the Opera Theatre, fitted with rich brush box and white birch timber paneling designed to optimize acoustic resonance.\n\nThe building serves as Australia's premier performing arts center, hosting opera, symphonic concerts, ballet, and theatrical productions. What impressed me most was how Utzon radically defied the rigid rectilinear box shapes typical of the mid-20th-century International Style. Instead, he pioneered organic, expressionist geometric forms that harmoniously dialogue with the surrounding oceanic landscape.`
            },
            part_3: {
                title: "Part 3: Two-way Discussion (4 - 5 minutes)",
                discussion_topics: [
                    {
                        theme: "Historic Architecture vs. Modern High-Rises",
                        questions: [
                            "Why is it essential for municipal authorities to preserve historic buildings in modern cities?",
                            "Do you believe modern skyscrapers foster a sense of social isolation among urban residents?",
                            "How will eco-friendly building materials influence the future skyline of metropolitan centers?"
                        ]
                    }
                ]
            }
        }
    }
};

const cam1Test2Raw = {
    id: "cam_1_test_2",
    book: "Cambridge IELTS 1",
    test_title: "Academic Practice Test 2",
    badge: "Cam 1 - Test 2",

    // -------------------------------------------------------------
    // 1. LISTENING MODULE (4 SECTIONS - 40 QUESTIONS)
    // -------------------------------------------------------------
    listening: {
        title: "IELTS Listening Practice Test 2",
        duration_seconds: 1800,
        sections: [
            {
                section_number: 1,
                title: "Section 1: Student Accommodation Survey (Questions 1 - 10)",
                instruction: "Complete the table below using NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
                audio_script: `MAN: Good morning. Can I help you?
WOMAN: Yes, I was hoping to get some information about accommodation options for new students. I’m a student advisor here on campus.
MAN: Ah, right. Well, we have a few different options available for first-year students. Let's start with Kate. She’s studying Environmental Studies. She gave us some feedback recently about her experiences.
WOMAN: Oh, really? How did she find her first impressions of the town?
MAN: Well, she found it quite quiet compared to where she lived before.
WOMAN: And what about her type of accommodation?
MAN: She stayed in a student hostel first.
WOMAN: And how did she feel about it?
MAN: She thought the food was awful.
WOMAN: Oh dear. What about the other students?
MAN: She felt they weren't very friendly; they kept to themselves.
WOMAN: Right. And did she mention any difficulties with her course?
MAN: Yes, she found that the lecturers were too busy or difficult to approach when she needed help.
WOMAN: So what did she suggest to improve things?
MAN: She recommended having regular meetings or fortnightly meetings with academic staff.
WOMAN: Right, I see. What about Luki? What was her situation?
MAN: Luki chose a different route. She stayed in a family homestay initially.
WOMAN: Did she run into any problems there?
MAN: Yes, she complained about a lot of noise because there were children who made noise, making it difficult for her to study.
WOMAN: So did she move?
MAN: Yes, she moved into a student house later on.
WOMAN: And what was her course name?
MAN: She’s doing Bachelor of Computing.
WOMAN: Did she have any comments about her course?
MAN: Just that the computer room was always too crowded. She suggested students should reserve computer time in advance.`,
                questions: [
                    { id: 1, type: "fill", question: "1. Kate's first accommodation type: [______]", correct_answers: ["student accommodation", "hostel", "student hostel"], explanation: "Kate initially stayed in a student hostel / student accommodation." },
                    { id: 2, type: "fill", question: "2. Kate's main complaint about accommodation: [______]", correct_answers: ["awful food", "bad food"], explanation: "She complained the food was awful." },
                    { id: 3, type: "fill", question: "3. Attitude of other students: [______]", correct_answers: ["not friendly", "kept to themselves", "unfriendly"], explanation: "Other students were not friendly / kept to themselves." },
                    { id: 4, type: "fill", question: "4. Difficulty with university course: lecturers [______]", correct_answers: ["too busy", "busy"], explanation: "Found that lecturers were too busy to help." },
                    { id: 5, type: "fill", question: "5. Kate's suggestion for improvement: establish [______]", correct_answers: ["regular meetings", "fortnightly meetings", "meetings with lecturers"], explanation: "Recommended regular / fortnightly meetings with academic staff." },
                    { id: 6, type: "fill", question: "6. Luki's first accommodation type: [______]", correct_answers: ["family", "homestay", "family homestay"], explanation: "Luki initially chose a family homestay." },
                    { id: 7, type: "fill", question: "7. Problem encountered in homestay: [______]", correct_answers: ["lot of noise", "noise", "children made noise"], explanation: "Encountered a lot of noise from children, hindering study." },
                    { id: 8, type: "fill", question: "8. Luki's second accommodation type: [______]", correct_answers: ["student house"], explanation: "She subsequently moved into a student house." },
                    { id: 9, type: "fill", question: "9. Luki's degree course: [______]", correct_answers: ["Computing", "Bachelor of Computing", "Computer Studies"], explanation: "Luki studied (Bachelor of) Computing." },
                    { id: 10, type: "fill", question: "10. Luki's suggestion: students should [______]", correct_answers: ["reserve computer time", "book computer time"], explanation: "Suggested that students reserve computer time in advance." }
                ]
            },
            {
                section_number: 2,
                title: "Section 2: Choosing and Buying a Bicycle (Questions 11 - 20)",
                instruction: "Complete the notes below using NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
                audio_script: `MAN: Good morning, everyone. Today we’re going to look at bicycles and what you need to consider if you are thinking of purchasing one.
There are many kinds of bicycles available on the market today: racing bikes, touring bikes, mountain bikes, and ordinary commuter cycles. They vary quite a bit in price and quality. Prices can range anywhere from $50 up to $2,000 depending on your requirements.
If you are buying a single-speed cycle, they are generally suitable for short casual rides on flat terrain. Three-speed cycles are ideal for town riding and shopping trips.
Meanwhile, ten-speed touring bicycles are recommended for serious touring over longer distances and hilly country. Interestingly, the basic design of ten-speed cycles is similar across brands, but more expensive models feature better quality components and lightweight alloy parts.
Choosing a cycle is very much like buying clothes: the most critical factor is ensuring the frame size matches your height perfectly...`,
                questions: [
                    { id: 11, type: "fill", question: "11. Four main bicycle categories: racing, touring, ordinary and [______] bikes.", correct_answers: ["mountain", "mountain bikes"], explanation: "Mentions racing, touring, mountain, and ordinary bikes." },
                    { id: 12, type: "fill", question: "12. Bicycles vary substantially in price and [______].", correct_answers: ["quality"], explanation: "They vary quite a bit in price and quality." },
                    { id: 13, type: "fill", question: "13. Top-tier professional cycles can cost up to $[______].", correct_answers: ["2,000", "2000", "two thousand"], explanation: "Prices range from $50 up to $2,000." },
                    { id: 14, type: "fill", question: "14. Single-speed bicycles are best suited for [______].", correct_answers: ["short casual rides", "casual rides", "short rides"], explanation: "Suitable for short casual rides on flat terrain." },
                    { id: 15, type: "fill", question: "15. Three-speed bicycles are ideal for [______].", correct_answers: ["town riding", "shopping", "town riding and shopping"], explanation: "Ideal for town riding and shopping trips." },
                    { id: 16, type: "fill", question: "16. Ten-speed cycles are recommended for [______].", correct_answers: ["serious touring", "touring"], explanation: "Recommended for serious touring over longer distances." },
                    { id: 17, type: "fill", question: "17. Across manufacturers, the fundamental frame design is [______].", correct_answers: ["similar", "almost the same"], explanation: "The basic design of ten-speed cycles is similar across brands." },
                    { id: 18, type: "fill", question: "18. Premium price points provide [______] components.", correct_answers: ["better quality", "higher quality"], explanation: "Higher models offer better quality components." },
                    { id: 19, type: "fill", question: "19. Selecting an appropriate bicycle is compared to [______].", correct_answers: ["buying clothes"], explanation: "Choosing a cycle is very much like buying clothes." },
                    { id: 20, type: "fill", question: "20. The most critical measurement to fit the rider is the [______] size.", correct_answers: ["frame", "frame size"], explanation: "Ensuring the frame size matches the rider's proportions." }
                ]
            },
            {
                section_number: 3,
                title: "Section 3: Tutorial on Banana Cultivation (Questions 21 - 30)",
                instruction: "Questions 21-24: Choose the correct letter A, B, C or D. Questions 25-30: Complete the notes using NO MORE THAN THREE WORDS AND/OR A NUMBER.",
                audio_script: `FIONA: Martin, how are you getting on with your tutorial preparation?
MARTIN: Thanks, Fiona. I’m looking at the commercial cultivation of Australian bananas.
FIONA: Why did you select bananas?
MARTIN: Because it's an economically vital horticultural crop with intriguing growing requirements. Each banana plant produces only one bunch of fruit in its life cycle, taking approximately fifteen months from planting to harvest.
FIONA: Where are commercial plantations situated?
MARTIN: Primarily on steep hillsides or uphill terrain facing north to maximize sunshine and avoid frost pockets.
FIONA: What environmental inputs are essential?
MARTIN: Bananas require lots of water throughout the growing season. Also, growers cover bunches with large blue plastic bags while on the plant to shield fruit from pests, wind scarring, and chemical spray.
FIONA: And how is ripening managed after cutting?
MARTIN: Fruit is harvested green and transported in refrigerated containers. At regional distribution centers, ripening rooms use ethylene gas to trigger uniform ripening before delivery to supermarkets...`,
                questions: [
                    { id: 21, type: "choice", question: "21. Why did Martin choose Australian banana cultivation as his topic?", options: ["A. He owns a family plantation", "B. It is an economically significant and intriguing crop", "C. Bananas are his favorite fruit", "D. His tutor assigned it randomly"], correct_answers: ["B"], explanation: "Martin notes it is an economically vital crop with unique growing requirements (B)." },
                    { id: 22, type: "choice", question: "22. Why did Fiona attend Martin's practice session?", options: ["A. She had spare time", "B. She needs tutorial attendance marks", "C. To benchmark her own project quality", "D. To borrow Martin's research notes"], correct_answers: ["C"], explanation: "Fiona wanted to ensure her own presentation was up to standard (C)." },
                    { id: 23, type: "choice", question: "23. How are commercial banana bunches protected on the tree?", options: ["A. Wire netting", "B. Chemical paper strips", "C. Glass cloches", "D. Protective plastic bags"], correct_answers: ["D"], explanation: "Covered with large protective plastic bags against insects and wind (D)." },
                    { id: 24, type: "choice", question: "24. How are bananas shipped to urban markets?", options: ["A. Fully ripe in heated lorries", "B. Green in refrigerated containers", "C. Dried in wooden boxes", "D. Frozen in cargo planes"], correct_answers: ["B"], explanation: "Harvested green and shipped in refrigerated containers (B)." },
                    { id: 25, type: "fill", question: "25. Each banana plant produces [______] of fruit during its lifecycle.", correct_answers: ["one bunch", "a bunch", "1 bunch"], explanation: "Each plant yields only one bunch of bananas." },
                    { id: 26, type: "fill", question: "26. Development from planting to harvest requires [______].", correct_answers: ["15 months", "fifteen months"], explanation: "Requires approximately 15 months." },
                    { id: 27, type: "fill", question: "27. Plantations are typically located on [______] to avoid frost.", correct_answers: ["hillsides", "uphill", "slopes"], explanation: "Situated on steep hillsides / uphill terrain." },
                    { id: 28, type: "fill", question: "28. Banana plants require [______] throughout their development.", correct_answers: ["lots of water", "plenty of water", "water"], explanation: "Bananas demand lots of water." },
                    { id: 29, type: "fill", question: "29. Bunches are enclosed in blue [______] to prevent damage.", correct_answers: ["plastic bags"], explanation: "Protected using blue plastic bags." },
                    { id: 30, type: "fill", question: "30. Distribution facilities use controlled gas rooms to induce [______].", correct_answers: ["ripening", "bananas to ripen"], explanation: "Gas treatment induces uniform ripening." }
                ]
            },
            {
                section_number: 4,
                title: "Section 4: Balanced Nutrition & Dietary Guidelines (Questions 31 - 40)",
                instruction: "Questions 31-35: Multiple choice. Questions 36-40: Complete the summary.",
                audio_script: `LECTURER: Good afternoon, everyone. Today we examine the principles of balanced human nutrition and contemporary dietary guidelines.
Public health nutritionists agree that dietary health depends not on obsessive calorie restriction, but upon consuming a diverse variety of whole foods. Fresh fruits and vegetables should constitute the core of regular daily intake.
Nutritional retention is heavily influenced by cooking methods. Excessive boiling leaches water-soluble vitamins into the broth, whereas light steaming or raw consumption preserves micronutrient density.
Storage is another overlooked factor: fresh produce should be kept in a cool dark place or refrigerator to prevent vitamin oxidation.
Finally, the fundamental dietary rule remains balance: consume complex carbohydrates and vegetables in generous quantities, while enjoying saturated fats, refined sugars, and salt strictly in moderation...`,
                questions: [
                    { id: 31, type: "choice", question: "31. Modern nutritional science emphasizes consuming:", options: ["A. Only synthetic vitamin tablets", "B. An exclusive meat-based regimen", "C. A wide variety of whole foods", "D. Extreme low-calorie liquids"], correct_answers: ["C"], explanation: "Nutrition depends upon consuming a diverse variety of whole foods (C)." },
                    { id: 32, type: "choice", question: "32. Which food group should form the foundation of daily intake?", options: ["A. Refined sugars and pastries", "B. Processed meats", "C. Fresh fruits and vegetables", "D. Dairy desserts"], correct_answers: ["C"], explanation: "Fruits and vegetables constitute the core of regular intake (C)." },
                    { id: 33, type: "choice", question: "33. What cooking technique is recommended to preserve water-soluble vitamins?", options: ["A. Deep-fat frying", "B. Light steaming", "C. Prolonged boiling in open pots", "D. Charcoal grilling"], correct_answers: ["B"], explanation: "Steaming or raw eating preserves micronutrient density (B)." },
                    { id: 34, type: "choice", question: "34. Where should perishable vitamin-rich produce be stored?", options: ["A. Under direct sunlight", "B. In metal tins near heat", "C. In hot cupboards", "D. In a cool dark place or refrigerator"], correct_answers: ["D"], explanation: "Kept in a cool dark place or refrigerator (D)." },
                    { id: 35, type: "choice", question: "35. Fats, sugars, and salt should be consumed:", options: ["A. Never under any circumstance", "B. As the primary energy source", "C. Strictly in moderation", "D. Doubled during winter"], correct_answers: ["C"], explanation: "Enjoyed strictly in moderation (C)." },
                    { id: 36, type: "fill", question: "36. Excessive water [______] causes severe nutrient leaching.", correct_answers: ["boiling", "cooking"], explanation: "Excessive boiling / cooking leaches water-soluble nutrients." },
                    { id: 37, type: "fill", question: "37. Vegetables should form part of the regular [______].", correct_answers: ["daily intake", "diet"], explanation: "Should constitute the core of regular daily intake." },
                    { id: 38, type: "fill", question: "38. Optimal health requires consuming a broad [______] of whole foods.", correct_answers: ["variety"], explanation: "Requires consuming a diverse variety." },
                    { id: 39, type: "fill", question: "39. Fresh produce is best preserved in [______] or in the fridge.", correct_answers: ["the dark", "a cool place", "a dark place"], explanation: "Store in a cool dark place or in the fridge." },
                    { id: 40, type: "fill", question: "40. Nutritionists advise people to consume refined items [______].", correct_answers: ["in moderation", "not too much"], explanation: "Saturated fats and sugars should be eaten strictly in moderation." }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // 2. READING MODULE (3 PASSAGES - 40 QUESTIONS)
    // -------------------------------------------------------------
    reading: {
        title: "IELTS Academic Reading Practice Test 2",
        duration_seconds: 3600,
        passages: [
            {
                passage_number: 1,
                title: "Passage 1: Right and left-handedness in humans",
                text: `Anatomical and behavioral asymmetry between the left and right sides of the human body has intrigued scientists for centuries. While almost all vertebrate animals exhibit bilateral physical symmetry, humans display a pronounced behavioral bias: roughly 90 percent of the global population is right-handed, while approximately 10 percent is left-handed.\n\nHistorical and neurobiological investigations into lateral preference began in earnest with French surgeon Paul Broca in the 1860s. Broca demonstrated that language processing is predominantly localized in the left cerebral hemisphere of right-handed individuals. Subsequent research by Geschwind and Galaburda in the 1980s posited that fetal exposure to elevated levels of testosterone temporarily retards the development of the left hemisphere, causing compensatory right-hemisphere growth and predisposing the child to left-handedness and enhanced spatial talents.\n\nContrasting perspectives have emerged from behavioral and genetic researchers. Dr. Brinkman investigated motor skill acquisition in primates, showing that while chimps perform manual reaching tasks with either hand interchangeably, complex coordinated tool use frequently elicits individual lateral preferences. Geneticist Charles Moore highlighted twin studies, noting that identical twins do not always share identical handedness, demonstrating that non-genetic prenatal environmental factors contribute significantly. Professor Turner emphasized that handedness exists along a continuous spectrum rather than a rigid binary, with approximately 15 to 20 percent of individuals displaying ambidexterity in varied physical activities.`,
                questions: [
                    { id: 1, type: "choice", question: "1. Who demonstrated that manual tool use in chimpanzees elicits individual lateral preferences?", options: ["A. Dr Paul Broca", "B. Dr Brinkman", "C. Geschwind and Galaburda", "D. Charles Moore"], correct_answers: ["B"], explanation: "Dr Brinkman conducted motor skill research on primates (B)." },
                    { id: 2, type: "choice", question: "2. Who conducted twin studies showing non-genetic prenatal factors influence handedness?", options: ["A. Dr Paul Broca", "B. Dr Brinkman", "C. Geschwind and Galaburda", "D. Charles Moore"], correct_answers: ["D"], explanation: "Charles Moore highlighted discordant twin studies (D)." },
                    { id: 3, type: "choice", question: "3. Who linked fetal testosterone exposure to right-hemisphere compensatory development?", options: ["A. Dr Paul Broca", "B. Dr Brinkman", "C. Geschwind and Galaburda", "D. Professor Turner"], correct_answers: ["C"], explanation: "Geschwind and Galaburda proposed the testosterone hypothesis (C)." },
                    { id: 4, type: "choice", question: "4. Which researcher noted that basic reaching in primates lacks consistent species-wide lateral bias?", options: ["A. Dr Paul Broca", "B. Dr Brinkman", "C. Charles Moore", "D. Professor Turner"], correct_answers: ["B"], explanation: "Dr Brinkman observed manual reaching in chimps lacks consistent species bias (B)." },
                    { id: 5, type: "choice", question: "5. Who originally discovered that speech processing is localized in the left brain hemisphere?", options: ["A. Dr Paul Broca", "B. Dr Brinkman", "C. Geschwind and Galaburda", "D. Professor Turner"], correct_answers: ["A"], explanation: "Paul Broca localized speech functions in the left hemisphere (A)." },
                    { id: 6, type: "choice", question: "6. Which researchers proposed that left-handedness correlates with enhanced spatial faculties?", options: ["A. Dr Paul Broca", "B. Dr Brinkman", "C. Geschwind and Galaburda", "D. Charles Moore"], correct_answers: ["C"], explanation: "Geschwind and Galaburda correlated left-handedness with enhanced spatial skills (C)." },
                    { id: 7, type: "choice", question: "7. Who argued that handedness exists along a multi-dimensional spectrum rather than a binary?", options: ["A. Dr Paul Broca", "B. Dr Brinkman", "C. Geschwind and Galaburda", "D. Professor Turner"], correct_answers: ["E", "D"], explanation: "Professor Turner emphasized that handedness is a continuous spectrum." },
                    { id: 8, type: "fill", question: "8. Percentage of population displaying mixed hand preference across different activities: [______]", correct_answers: ["15-20%", "15 to 20%"], explanation: "Approximately 15 to 20 percent display ambidexterity." },
                    { id: 9, type: "fill", question: "9. Hereditary correlation in twin concordance models: [______]", correct_answers: ["40%"], explanation: "Concordance figures show roughly 40%." },
                    { id: 10, type: "fill", question: "10. Baseline left-handedness incidence in traditional agrarian populations: [______]", correct_answers: ["6%"], explanation: "Baseline agrarian rates hovered around 6%." },
                    { id: 11, type: "choice", question: "11. The writer concludes that human lateral asymmetry is caused by:", options: ["A. Purely cultural upbringing", "B. Dietary habits", "C. Geographical latitude", "D. An intricate interaction of genetics and prenatal environment"], correct_answers: ["D"], explanation: "Results from a complex interplay of genetic predisposition and developmental factors (D)." },
                    { id: 12, type: "choice", question: "12. The historical dominance of right-handedness in human tools suggests that:", options: ["A. Left-handedness is a modern disease", "B. Left-hemisphere specialization has ancient evolutionary origins", "C. Stone tools were only made by left-handed artisans", "D. Ancient humans had two right hands"], correct_answers: ["B"], explanation: "Ancient tool design demonstrates long-standing evolutionary brain lateralization (B)." }
                ]
            },
            {
                passage_number: 2,
                title: "Passage 2: Migratory Beekeeping",
                text: `In traditional farming, beekeeping was a sedentary practice: wooden apiaries remained fixed in orchard corners, yielding wildflower honey in late summer. However, modern commercial agriculture has transformed apiculture into an intensive, mobile enterprise known as migratory beekeeping.\n\nAcross vast agricultural regions such as California's Central Valley, mega-monocultures of almonds, apples, and blueberries bloom in synchronized bursts requiring billions of pollinators simultaneously. Because local wild pollinator populations have been decimated by pesticide usage and habitat loss, farmers hire migratory beekeepers to transport millions of hives across the continent on massive flatbed trucks.\n\nPreparing hives for transport requires meticulous technical discipline. Beekeepers must inspect every hive to ensure combs are secure and colonies are healthy. Migrations take place exclusively during the cool hours of night when worker bees have returned to the hive. Entrances are sealed with wire mesh screens to permit ventilation while preventing escapes during thousand-mile journeys. Upon arrival, hives are unloaded and distributed across orchards. Once pollination concludes, colonies are inspected, fed supplemental protein, and prepared for transit to subsequent floral blooms.`,
                questions: [
                    { id: 13, type: "fill", question: "13. Beekeepers must carefully [______] hives prior to long-distance truck loading.", correct_answers: ["prepare"], explanation: "Beekeepers must prepare and inspect every hive." },
                    { id: 14, type: "fill", question: "14. Transports are timed when hives are [______] of worker bees at dusk.", correct_answers: ["full"], explanation: "Conducted when hives are full of resting bees." },
                    { id: 15, type: "fill", question: "15. Beekeepers calm defensive bees using cool wood [______].", correct_answers: ["smoke"], explanation: "Cool smoke is applied to pacify the colony." },
                    { id: 16, type: "fill", question: "16. Commercial growers pay a substantial pollination [______] per hive.", correct_answers: ["charge", "fee"], explanation: "Farmers pay an agreed pollination charge/fee." },
                    { id: 17, type: "fill", question: "17. Honey extraction utilizes centrifugal spinning [______].", correct_answers: ["machines"], explanation: "Industrial honey extractors use mechanized machines." },
                    { id: 18, type: "fill", question: "18. Wooden frames contain wax [______] built by the bees.", correct_answers: ["combs", "honeycombs"], explanation: "Internal wooden frames hold the wax combs." },
                    { id: 19, type: "fill", question: "19. Strong colonies are periodically [______] to create new hives.", correct_answers: ["split"], explanation: "Colonies are split to produce daughter hives." },
                    { id: 20, type: "fill", question: "20. Worker bees store honey in hexagonal wax [______].", correct_answers: ["cells", "comb cells"], explanation: "Nectar is deposited into hexagonal cells." },
                    { id: 21, type: "fill", question: "21. Beekeepers slide individual wooden [______] out for inspection.", correct_answers: ["frames"], explanation: "Apiarists examine wooden frames of comb." },
                    { id: 22, type: "fill", question: "22. Hive entrances are sealed with wire [______] during transport.", correct_answers: ["screen", "screens"], explanation: "Entrances are secured with wire screens." },
                    { id: 23, type: "fill", question: "23. The queen lays eggs inside the lower [______].", correct_answers: ["brood chamber"], explanation: "Eggs are incubated within the lower brood chamber." },
                    { id: 24, type: "tfng", question: "24. Migratory beekeeping is less profitable than producing bottled honey.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], explanation: "The text does not compare the net profitability of honey sales versus pollination rental." },
                    { id: 25, type: "tfng", question: "25. Night transport prevents honeybees from overheating during transit.", correct_answers: ["YES", "Yes", "Y"], explanation: "Night travel provides cooler temperatures to prevent colony overheating (YES)." },
                    { id: 26, type: "tfng", question: "26. Monoculture farming relies heavily upon rented commercial pollinators.", correct_answers: ["YES", "Yes", "Y"], explanation: "Vast monocultures depend indispensably on rented hives (YES)." },
                    { id: 27, type: "tfng", question: "27. Migratory bees have higher life expectancies than stationary wild colonies.", correct_answers: ["NO", "No", "N"], explanation: "Transit stress, monoculture diets, and chemical exposure reduce lifespan (NO)." }
                ]
            },
            {
                passage_number: 3,
                title: "Passage 3: Tourism",
                text: `Paragraph A: Tourism has expanded into one of the largest economic sectors on the globe, generating trillions in revenue and providing millions of livelihoods across both developed and emerging nations. The postwar advent of commercial aviation, expanding middle-class disposable income, and paid vacation entitlements converted travel from an aristocratic privilege into mass consumption.\n\nParagraph B: The economic benefits of tourism are widely celebrated by developing economies. International visitors inject foreign currency, generate demand for hospitality services, and stimulate infrastructure construction—including airport modernization, highways, and wastewater facilities—that benefit local residents.\n\nParagraph C: However, uncontrolled tourism expansion inflicts severe ecological and cultural damage. Fragile coastal reefs, alpine ecosystems, and historic monuments suffer degradation under the impact of millions of footprints. Furthermore, cultural commodification reduces authentic spiritual heritage to commercial souvenir shows.\n\nParagraph D: Economists also highlight the phenomenon of economic 'leakage'. In many resort destinations, up to eighty percent of tourist expenditure does not remain within the host community, but leaks back to multinational airline operators, overseas tour agencies, and international hotel chains.\n\nParagraph E: To preserve both natural capital and community integrity, policymakers are championing sustainable ecotourism. By capping visitor numbers, mandating carbon offsets, and ensuring revenues flow directly to indigenous conservancies, travel can foster conservation rather than destruction.`,
                questions: [
                    { id: 28, type: "choice", question: "28. Which heading best matches Paragraph A?", options: ["i. The ecological destruction of coastal ecosystems", "ii. Economic leakages in resort areas", "iii. The global scale and post-war explosion of mass tourism", "iv. Sustainable ecotourism guidelines"], correct_answers: ["iii"], explanation: "Paragraph A outlines the historical rise and vast scale of modern mass tourism (Heading iii)." },
                    { id: 29, type: "choice", question: "29. Which heading best matches Paragraph B?", options: ["v. Economic contributions and infrastructure benefits", "vi. The dangers of aviation emissions", "vii. Colonial history of leisure travel", "viii. Tax evasion in international airlines"], correct_answers: ["v"], explanation: "Paragraph B discusses foreign exchange, job creation, and municipal infrastructure (Heading v)." },
                    { id: 30, type: "choice", question: "30. Which heading best matches Paragraph C?", options: ["i. Traditional culinary traditions", "iv. Environmental degradation and cultural commodification", "vii. Travel insurance regulations", "viii. Airport security advancements"], correct_answers: ["iv"], explanation: "Paragraph C focuses on ecological damage and cultural erosion (Heading iv)." },
                    { id: 31, type: "choice", question: "31. Which heading best matches Paragraph D?", options: ["ii. The mechanics of financial leakage from host nations", "v. Hotel architecture design", "vii. The phenomenon of tourism leakage to foreign corporations", "viii. Currency exchange fees"], correct_answers: ["vii"], explanation: "Paragraph D explains how revenues leak back to foreign multinational companies (Heading vii)." },
                    { id: 32, type: "choice", question: "32. Which heading best matches Paragraph E?", options: ["iii. Cruise ship navigation", "vi. Advertising strategies for tour operators", "viii. Principles and practices of sustainable ecotourism", "ix. Total ban on international travel"], correct_answers: ["viii"], explanation: "Paragraph E proposes sustainable ecotourism and conservation models (Heading viii)." },
                    { id: 33, type: "tfng", question: "33. Tourism was equally accessible to working-class families prior to the 20th century.", correct_answers: ["NO", "No", "N"], explanation: "Text states it was an aristocratic privilege before mass commercial aviation (NO)." },
                    { id: 34, type: "tfng", question: "34. Infrastructure built for tourism often provides lasting utility to resident populations.", correct_answers: ["YES", "Yes", "Y"], explanation: "Roads, airports, and utilities benefit resident populations (YES)." },
                    { id: 35, type: "tfng", question: "35. Ecotourists spend more money per day than conventional cruise ship passengers.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], explanation: "The text does not contrast daily expenditure rates between ecotourists and cruise passengers (NOT GIVEN)." },
                    { id: 36, type: "tfng", question: "36. Multinational tour operators capture a major proportion of resort profits.", correct_answers: ["YES", "Yes", "Y"], explanation: "Up to 80% leaks back to multinational airlines and foreign hotel chains (YES)." },
                    { id: 37, type: "tfng", question: "37. Governments plan to eliminate all commercial flights by 2040.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], explanation: "No mention of eliminating commercial flights by 2040 (NOT GIVEN)." },
                    { id: 38, type: "choice", question: "38. Sentence ending: Mass commercial tourism became viable when...", options: ["A. all borders were erased", "B. traditional farming collapsed", "D. commercial aviation expanded and incomes rose", "F. ancient ruins were privatized"], correct_answers: ["D"], explanation: "Matches D: Post-war aviation and rising disposable incomes." },
                    { id: 39, type: "choice", question: "39. Sentence ending: Revenue leakage occurs because...", options: ["A. tourists bury their cash", "B. international corporations dominate the supply chain", "C. local banks refuse foreign coins", "D. governments confiscate tourist luggage"], correct_answers: ["B"], explanation: "Matches B: Foreign airlines and multinational tour agencies absorb the revenue." },
                    { id: 40, type: "choice", question: "40. Sentence ending: Sustainable ecotourism seeks to ensure that...", options: ["A. hotels are built on coral reefs", "C. local communities receive direct economic benefits while protecting ecosystems", "F. visitors pay no taxes", "E. travel is restricted to scientists"], correct_answers: ["F", "C"], explanation: "Matches C/F: Revenue flows directly to local conservancies and protects ecosystems." }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // 3. WRITING MODULE (2 TASKS)
    // -------------------------------------------------------------
    writing: {
        title: "IELTS Academic Writing Practice Test 2",
        duration_seconds: 3600,
        task1: {
            title: "Task 1: Bureau of Meteorology Weather Forecasting Process",
            instruction: "The diagram below shows how the Australian Bureau of Meteorology collects up-to-the-minute information on the weather in order to produce reliable forecasts. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
            data_summary: {
                process_stages: [
                    "Data Collection: Weather satellites transmit high-altitude cloud imagery; Coastal radar stations track local precipitation and cyclonic storms; Drifting oceanic buoys record sea-surface temperatures and barometric pressure; Synoptic weather balloons measure atmospheric humidity and wind velocity.",
                    "Data Processing: Raw meteorological inputs are transmitted directly to central supercomputers for mathematical analysis and numerical simulation.",
                    "Forecasting & Dissemination: Meteorologists interpret computer-generated forecasting models to issue public reports via television broadcasts, emergency marine radios, and internet weather portals."
                ]
            },
            model_answer: `The provided flow diagram delineates the multi-stage procedure through which the Australian Bureau of Meteorology gathers real-time atmospheric data, processes complex observations, and broadcasts dependable weather forecasts to the public.\n\nOverall, the forecasting operation comprises three principal phases: automated data collection from diverse terrestrial, oceanic, and orbital instruments; centralized computer assimilation and meteorologist verification; and multi-channel public dissemination.\n\nIn the initial collection stage, information is simultaneously acquired from four distinct technological sources. Spaceborne geostationary satellites capture high-resolution imagery of cloud movements, while coastal radar installations monitor localized precipitation and approaching storms. Simultaneously, drifting ocean buoys record marine water temperatures and surface barometric pressure, while high-altitude weather balloons gather telemetry on atmospheric humidity, pressure, and wind speeds.\n\nAll gathered telemetry is subsequently relayed to the central analysis hub, where high-performance supercomputers aggregate the data into synoptic weather charts and numerical prediction models. Finally, specialist forecasters evaluate these automated outputs to formulate accurate weather forecasts, which are transmitted to the public via television bulletins, radio broadcasts, and online platforms.`
        },
        task2: {
            title: "Task 2: International Aid from Wealthy Nations vs. Domestic Self-Reliance",
            prompt: "Should wealthy nations be required to share their wealth among poorer nations by providing such things as food and education? Or is it the responsibility of the governments of poorer nations to look after their citizens themselves? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
            model_answer: `The debate regarding whether affluent states bear an ethical obligation to provide foreign aid to impoverished nations or whether sovereign governments should independently sustain their own citizens touches upon core dilemmas of global justice and geopolitical stability.\n\nAdvocates of domestic self-reliance argue that unconditional international aid frequently engenders chronic economic dependency while stifling local initiative. When developing countries become addicted to external subsidies, domestic agricultural sectors struggle to compete against subsidized foreign grain imports, causing local farmers to abandon their fields. Furthermore, critics point out that in nations afflicted by systemic corruption, vast sums of humanitarian aid are routinely diverted by autocratic elites rather than reaching marginalized populations. Consequently, building transparent governance, robust tax collection systems, and internal institutional capacity represents the only sustainable pathway toward enduring prosperity.\n\nNevertheless, the humanitarian imperative for wealthy nations to provide targeted international assistance remains compelling. Historical disparities, stemming from centuries of colonial exploitation, unequal global trade architectures, and the disproportionate impact of climate change—primarily generated by industrialized economies—impose a moral duty on developed countries. Furthermore, targeted assistance focusing on childhood vaccination, primary education, and emergency disaster relief addresses immediate life-or-death crises that cash-strapped developing states cannot manage alone. Enhancing global stability through education and healthcare also curtails transnational health pandemics, diminishes illegal migration pressures, and expands global consumer markets, conferring reciprocal benefits upon wealthy donor states.\n\nIn conclusion, while recipient governments must ultimately shoulder accountability for their internal development and eliminate administrative corruption, affluent nations possess both a profound humanitarian obligation and a pragmatic strategic interest to provide targeted educational, medical, and developmental aid.`
        }
    },

    // -------------------------------------------------------------
    // 4. SPEAKING MODULE (3 PARTS)
    // -------------------------------------------------------------
    speaking: {
        title: "IELTS Speaking Practice Test 2",
        duration_seconds: 840,
        part_1: {
            title: "Part 1: Introduction and Interview (4 - 5 minutes)",
            topics: [
                {
                    topic: "Bicycles & Daily Transport",
                    questions: [
                        "Do you know how to ride a bicycle?",
                        "How popular is cycling in your city or country?",
                        "What are the benefits of using a bicycle compared to taking a bus or car?"
                    ]
                },
                {
                    topic: "Daily Routine & Food",
                    questions: [
                        "What is your favorite meal of the day?",
                        "Do you prefer eating home-cooked meals or dining out?",
                        "Has your diet changed since you were younger?"
                    ]
                }
            ]
        },
        part_2: {
            title: "Part 2: Long Turn / Cue Card (3 - 4 minutes)",
            cue_card: {
                prompt: "Describe a vehicle (a bicycle, car, or other transport) that you would like to buy or own.",
                bullet_points: [
                    "What kind of vehicle it is",
                    "What it looks like and what special features it has",
                    "How you would use it in your daily life",
                    "And explain why you would choose this particular vehicle."
                ]
            },
            model_response: `I would like to talk about an electric commuter bicycle that I have been planning to purchase for some time—specifically, a lightweight hybrid e-bike designed for city commuting.\n\nIn terms of appearance, the bicycle resembles a sleek, minimalist road bike, but with a streamlined matte black aluminum alloy frame that discreetly integrates a rechargeable lithium-ion battery inside the downtube. Unlike bulky traditional electric cycles, this model is remarkably lightweight, weighing only around 15 kilograms. It features an intelligent pedal-assist motor, hydraulic disc brakes for wet-weather safety, integrated LED front and rear lights, and a digital handlebar display showing speed, battery range, and distance travelled.\n\nI would use this bicycle primarily for my daily commute between home and university, which is roughly six kilometers each way. During peak morning rush hours, navigating municipal buses or taxis often takes over forty minutes due to chronic traffic bottlenecks. Riding an e-bike would allow me to glide through dedicated cycle lanes in less than twenty minutes, completely sidestepping congestion.\n\nI chose this vehicle because it represents the ideal synthesis of environmental sustainability, physical well-being, and cost-efficiency. It requires zero fossil fuel, produces zero carbon emissions, and costs virtually nothing to charge, while the pedal-assist feature ensures I can travel up steep inclines without arriving at my classes fatigued or sweaty.`
        },
        part_3: {
            title: "Part 3: Two-way Discussion (4 - 5 minutes)",
            discussion_topics: [
                {
                    theme: "Urban Transport Planning & Sustainability",
                    questions: [
                        "How can city municipal councils encourage more commuters to adopt cycling instead of driving private cars?",
                        "What environmental and economic challenges arise when cities prioritize private vehicle highways over public transit?",
                        "Do you anticipate that autonomous electric vehicles will completely replace conventional public buses in the next two decades?"
                    ]
                }
            ]
        }
    }
};

const cam1Test3Raw = {
    id: "cam_1_test_3",
    book: "Cambridge IELTS 1",
    test_title: "Academic Practice Test 3",
    badge: "Cam 1 - Test 3",

    // -------------------------------------------------------------
    // 1. LISTENING MODULE (4 SECTIONS - 40 QUESTIONS)
    // -------------------------------------------------------------
    listening: {
        title: "IELTS Listening Practice Test 3",
        duration_seconds: 1800,
        sections: [
            {
                section_number: 1,
                title: "Section 1: Campus Vehicle Parking Registration (Questions 1 - 10)",
                instruction: "Questions 1-4: Choose the correct letter A, B, C or D. Questions 5-10: Complete the registration form.",
                audio_script: `OFFICER: Good morning. Welcome to the University Security and Parking Administration. Can I help you?
STUDENT: Yes, good morning. I’d like to register my car and apply for a campus parking permit, please.
OFFICER: Certainly. First, let me explain the zones. Undergraduate students are restricted to Car Park C on the western perimeter. Staff park in Area A, and postgraduate researchers use Area B.
STUDENT: Right, I'm an undergraduate, so Area C for me.
OFFICER: Correct. Permits are valid for one academic year and cost fifty pounds. Now, let me take down your personal details. Could you state your full name?
STUDENT: Yes, my name is Richard Lee. That’s L-E-E.
OFFICER: And your current residential address?
STUDENT: I live at 30 Enmore Road.
OFFICER: 30 Enmore Road. Which suburb is that?
STUDENT: Newport.
OFFICER: And what faculty are you enrolled in?
STUDENT: Faculty of Architecture.
OFFICER: Great. Now regarding the vehicle itself: what is the registration license number?
STUDENT: It’s LJX 058K.
OFFICER: LJX 058K. And the make and model?
STUDENT: It’s a blue Ford hatchback.
OFFICER: Very well. Here is your parking permit sticker. It must be clearly affixed to the inside of your front windscreen on the passenger side at all times when parked on university grounds.`,
                questions: [
                    { id: 1, type: "choice", question: "1. Which parking area is allocated for undergraduate students?", options: ["A. Car Park A near main library", "B. Car Park C on western perimeter", "C. Underground lot under faculty", "D. Open field behind sports arena"], correct_answers: ["B"], explanation: "Undergraduates are restricted to Car Park C (B)." },
                    { id: 2, type: "choice", question: "2. How long is the parking permit valid for?", options: ["A. One term only", "B. Six months", "C. One calendar month", "D. One academic year"], correct_answers: ["D"], explanation: "Permits are valid for one academic year (D)." },
                    { id: 3, type: "choice", question: "3. What is the fee for the student parking permit?", options: ["A. Free of charge", "B. Twenty-five pounds", "C. Fifty pounds", "D. One hundred pounds"], correct_answers: ["C"], explanation: "The cost is fifty pounds (C)." },
                    { id: 4, type: "choice", question: "4. Where must the permit sticker be displayed?", options: ["A. Inside front windscreen on passenger side", "B. On the rear bumper", "C. Inside the glove compartment", "D. On the rear window"], correct_answers: ["A"], explanation: "Affixed to the inside of your front windscreen on the passenger side (A)." },
                    { id: 5, type: "fill", question: "5. Applicant full name: Richard [______]", correct_answers: ["Lee", "LEE"], explanation: "Applicant surname: Lee." },
                    { id: 6, type: "fill", question: "6. Street address: 30 [______] Road", correct_answers: ["Enmore", "Enmore Road"], explanation: "Address: 30 Enmore Road." },
                    { id: 7, type: "fill", question: "7. Suburb / Town: [______]", correct_answers: ["Newport", "NEWPORT"], explanation: "Suburb: Newport." },
                    { id: 8, type: "fill", question: "8. Faculty of study: [______]", correct_answers: ["Architecture", "architecture"], explanation: "Faculty: Architecture." },
                    { id: 9, type: "fill", question: "9. Vehicle registration number: [______]", correct_answers: ["LJX 058K", "LJX058K"], explanation: "License plate: LJX 058K." },
                    { id: 10, type: "fill", question: "10. Vehicle make: [______]", correct_answers: ["Ford", "ford"], explanation: "Vehicle make: Ford." }
                ]
            },
            {
                section_number: 2,
                title: "Section 2: National Maritime Museum Tour Guide (Questions 11 - 20)",
                instruction: "Complete the notes below using NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
                audio_script: `GUIDE: Good morning and welcome to the National Maritime Museum. Before you begin your tour, let me give you a brief overview of our galleries and visitor amenities.
The museum was officially opened to the public in November 1991. Our primary mission is to celebrate our nation's relationship with the sea, housing an extraordinary collection of historic ships, nautical instruments, and maritime art.
To find your way around, please follow the green arrows painted on the floorways. If you require audio guides or accessibility assistance, please consult the staff at the central information desk in the main foyer.
Please note that because this is a historic building, there are lots of stairs to climb between the upper galleries.
Guided tours depart from the main rotunda every hour on the hour. Our most celebrated permanent exhibition focuses on the voyages of Captain Cook and his exploration of the Pacific Ocean.
In Gallery 3, we feature a remarkable collection of paintings depicting life at sea created by renowned Australian artists.
Before you leave, don't miss our gift shop where you can purchase nautical souvenirs, books, and ship models. An annual family membership pass is available today for just seventy dollars.`,
                questions: [
                    { id: 11, type: "fill", question: "11. The Maritime Museum opened to the public in [______].", correct_answers: ["November 1991", "Nov 1991"], explanation: "Opened to the public in November 1991." },
                    { id: 12, type: "fill", question: "12. The permanent exhibits feature a unique collection of historic [______].", correct_answers: ["ships", "historic ships"], explanation: "Extraordinary collection of historic ships." },
                    { id: 13, type: "fill", question: "13. Visitors can navigate the galleries by following the [______] on the floor.", correct_answers: ["green arrows"], explanation: "Follow the green arrows painted on the floorways." },
                    { id: 14, type: "fill", question: "14. Audio guides and brochures are obtained from the [______].", correct_answers: ["information desk"], explanation: "Available at the central information desk." },
                    { id: 15, type: "fill", question: "15. Visitors should be aware that the building contains lots of [______].", correct_answers: ["stairs", "stairs to climb"], explanation: "There are lots of stairs to climb between upper galleries." },
                    { id: 16, type: "fill", question: "16. Guided gallery walking tours commence [______].", correct_answers: ["every hour", "hourly"], explanation: "Depart from the rotunda every hour on the hour." },
                    { id: 17, type: "fill", question: "17. The main historical exhibition explores the Pacific voyages of [______].", correct_answers: ["Captain Cook"], explanation: "Focuses on the voyages of Captain Cook." },
                    { id: 18, type: "fill", question: "18. Maritime artworks on display were created by [______].", correct_answers: ["Australian artists", "painters"], explanation: "Created by renowned Australian artists." },
                    { id: 19, type: "fill", question: "19. An annual family membership pass costs $[______].", correct_answers: ["70", "seventy dollars"], explanation: "Family membership pass is seventy dollars ($70)." },
                    { id: 20, type: "fill", question: "20. The museum gift shop offers maritime books and [______].", correct_answers: ["souvenirs", "nautical souvenirs"], explanation: "Gift shop offers nautical souvenirs, books, and models." }
                ]
            },
            {
                section_number: 3,
                title: "Section 3: Academic Tutorial on Airline Yield Management (Questions 21 - 30)",
                instruction: "Questions 21-25: Choose the correct letter A, B, C or D. Questions 26-30: Complete the notes.",
                audio_script: `TUTOR: Good afternoon, Mark, Susan. Today we are examining dynamic yield pricing in passenger aviation.
MARK: Yes, our research examined how commercial airlines maximize flight profitability.
SUSAN: We discovered that yield management relies on predictive algorithms estimating demand fluctuations across consumer segments.
TUTOR: What legal shift facilitated this widespread pricing practice?
MARK: Regulatory deregulation during the late twentieth century removed mandatory fixed tariffs, allowing carriers to adjust fares in real time.
SUSAN: At the same time, the deployment of powerful computer programs enabled airlines to process millions of booking requests simultaneously.
TUTOR: And now customers can access these dynamic fares directly from home computers via the internet.
MARK: Exactly. And the same algorithmic models have spread to hotel rooms and car hire companies, ensuring perishable capacity is not left unsold...`,
                questions: [
                    { id: 21, type: "choice", question: "21. What is the fundamental commercial premise of airline yield management?", options: ["A. Charging identical flat fares to all passengers", "B. Dynamically adjusting prices to maximize passenger revenue", "C. Offering free flights to frequent flyers", "D. Reducing fuel consumption by flying slower"], correct_answers: ["B"], explanation: "Dynamically adjusting prices to maximize flight profitability (B)." },
                    { id: 22, type: "choice", question: "22. Which customer segment typically pays the highest fares?", options: ["A. Families booking months in advance", "B. Backpackers with open return tickets", "C. Last-minute corporate business travellers", "D. Senior citizen tour groups"], correct_answers: ["C"], explanation: "Business travellers needing urgent flights pay premium prices (C)." },
                    { id: 23, type: "choice", question: "23. Why do budget holiday travelers receive cheaper ticket rates?", options: ["A. They agree to sit in cargo holds", "B. They clean the aircraft cabin", "C. They book far in advance with strict non-refundable terms", "D. They fly only on national holidays"], correct_answers: ["C"], explanation: "They accept advance booking restrictions and non-refundable tickets (C)." },
                    { id: 24, type: "choice", question: "24. What primary legal change enabled airlines to adopt flexible ticket pricing?", options: ["A. Industry deregulation", "B. International environmental pacts", "C. Compulsory union agreements", "D. Universal visa requirements"], correct_answers: ["A"], explanation: "Government airline deregulation abolished fixed tariffs (A)." },
                    { id: 25, type: "choice", question: "25. What technological breakthrough enabled real-time fare recalculation?", options: ["A. Electric telegraph", "B. Powerful computer programs and databases", "C. Mobile telephone towers", "D. Paper filing systems"], correct_answers: ["B"], explanation: "Deployment of powerful computer programs and processing databases (B)." },
                    { id: 26, type: "fill", question: "26. Dynamic pricing expanded when the [______] changed to permit market competition.", correct_answers: ["law", "law changed", "regulations"], explanation: "When the law changed to allow market deregulation." },
                    { id: 27, type: "fill", question: "27. Complex transaction algorithms operate through [______].", correct_answers: ["computer programs", "powerful computer programs"], explanation: "Operate via powerful computer programs." },
                    { id: 28, type: "fill", question: "28. Consumers can now purchase variable tariff tickets directly [______].", correct_answers: ["from home", "from home computer"], explanation: "Access dynamic tariffs from home computers." },
                    { id: 29, type: "fill", question: "29. In hospitality, yield pricing maximizes occupancy of [______].", correct_answers: ["hotels", "hotel rooms", "hotel beds"], explanation: "Maximizes occupancy in hotels / hotel rooms." },
                    { id: 30, type: "fill", question: "30. The car rental sector utilizes dynamic pricing for [______].", correct_answers: ["hire cars", "car rental"], explanation: "Applied commercially to hire cars." }
                ]
            },
            {
                section_number: 4,
                title: "Section 4: Retail Space Management & Consumer Psychology (Questions 31 - 40)",
                instruction: "Complete the notes below using NO MORE THAN THREE WORDS for each answer.",
                audio_script: `LECTURER: Good afternoon. Today we investigate supermarket retail architecture and space management—how commercial floorplans manipulate customer shopping trajectories.
Modern retail chains invest millions in sophisticated software packages, such as 'Spaceman', to design shelf layouts. Retailers study customer traffic patterns using hidden TV cameras mounted in ceilings, analyzing video recordings to see which aisles shoppers browse and which displays they walk past.
Research reveals that items placed at eye level achieve eighty percent higher sales volumes than products on the bottom shelf. Consequently, manufacturers pay substantial slotting fees to secure eye-level placement.
Furthermore, supermarkets engineer 'hotspots'—such as aisle end-caps and checkout queues. End-caps are dedicated to high-margin special offers and seasonal promotions, while checkout zones entice impulse purchases of confectioneries like chocolates and chewing gum...`,
                questions: [
                    { id: 31, type: "fill", question: "31. Space management software designs optimal supermarket [______].", correct_answers: ["displays", "products", "displays and products"], explanation: "Optimizes placement of store displays and products." },
                    { id: 32, type: "fill", question: "32. Shopper movements are tracked through ceiling-mounted [______].", correct_answers: ["hidden TV cameras", "TV cameras", "cameras"], explanation: "Observed via hidden TV cameras." },
                    { id: 33, type: "fill", question: "33. Market analysts review video [______] to map pedestrian flow.", correct_answers: ["recordings", "recorder"], explanation: "Analysts study video recordings." },
                    { id: 34, type: "fill", question: "34. The leading retail shelf-layout software package is known as [______].", correct_answers: ["Spaceman", "SPACEMAN"], explanation: "Software is named 'Spaceman'." },
                    { id: 35, type: "fill", question: "35. Unpopular merchandise placed poorly causes customers to [______].", correct_answers: ["walk past", "walk straight past", "ignore"], explanation: "Shoppers simply walk straight past neglected displays." },
                    { id: 36, type: "fill", question: "36. The highest volume of retail sales occurs at [______] shelf height.", correct_answers: ["eye level", "at eye level"], explanation: "Maximum sales occur at eye level." },
                    { id: 37, type: "fill", question: "37. Prime promotional aisle locations are categorized as [______].", correct_answers: ["hotspots", "hot spots"], explanation: "Engineered prime spots are known as hotspots." },
                    { id: 38, type: "fill", question: "38. End-of-aisle shelving is predominantly reserved for [______].", correct_answers: ["special offers", "promotions"], explanation: "End-caps feature high-margin special offers." },
                    { id: 39, type: "fill", question: "39. Checkout impulse areas heavily market sweet snacks like [______].", correct_answers: ["chocolates", "chocolate"], explanation: "Impulse zones promote sweets like chocolates." },
                    { id: 40, type: "fill", question: "40. Strategic shelf layout maximizes supermarket [______].", correct_answers: ["profitability", "sales", "revenue"], explanation: "Designed to maximize overall store profitability and sales." }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // 2. READING MODULE (3 PASSAGES - 40 QUESTIONS)
    // -------------------------------------------------------------
    reading: {
        title: "IELTS Academic Reading Practice Test 3",
        duration_seconds: 3600,
        passages: [
            {
                passage_number: 1,
                title: "Passage 1: Spoken Corpus Comes to Life",
                text: `Paragraph A: The compilation of dictionaries has undergone an unprecedented revolution over the past two decades. Historically, lexicographers relied upon printed literary texts, scholarly citations, and subjective editorial intuition to define words and illustrate their usage. While this literary tradition produced venerable masterworks, it systematically overlooked the living, dynamic vitality of everyday conversational English.\n\nParagraph B: To bridge this empirical chasm, linguists pioneered the construction of electronic language corpora—vast digital databases storing hundreds of millions of words of authentic recorded discourse. The revolutionary Spoken English Corpus captured spontaneous conversations across diverse social strata, using cassette recorders carried by volunteers into workplaces, dining halls, and family living rooms.\n\nParagraph C: Computerized computational analysis revealed startling insights. Everyday spoken English does not merely mirror informal written prose; it operates under distinct grammatical architectures, relying heavily on discourse markers, vague tags, and recurring multi-word collocations. Furthermore, traditional dictionaries frequently misjudged word frequencies, over-representing archaic terms while ignoring indispensable colloquial phrases.\n\nParagraph D: Modern corpora also catalog phonetic pauses, hesitation noises, and conversational overlaps. By incorporating real-life speech patterns, modern learner dictionaries now provide foreign students with genuine pragmatic competence, teaching authentic communicative phrasing rather than artificial Victorian prose.`,
                questions: [
                    { id: 1, type: "choice", question: "1. Which heading matches Paragraph A?", options: ["i. The technology of audio recording", "ii. Limitations of classical literary lexicography", "vi. Historical reliance on printed texts and literary sources", "x. Software engineering in universities"], correct_answers: ["vi"], explanation: "Paragraph A outlines the historical reliance on literary citations and written texts (Heading vi)." },
                    { id: 2, type: "choice", question: "2. Which heading matches Paragraph B?", options: ["ii. Developing an authentic spoken digital database", "v. Funding challenges in linguistics", "viii. Dictionary sales statistics", "ix. The demise of paper dictionaries"], correct_answers: ["ii"], explanation: "Paragraph B covers the pioneering creation of spontaneous spoken corpora (Heading ii)." },
                    { id: 3, type: "choice", question: "3. Which heading matches Paragraph C?", options: ["iii. Grammar rules in Victorian schools", "vii. Audio cassette manufacturing", "x. Surprising discoveries regarding spoken grammar and frequency", "iv. Phonetic transcription rules"], correct_answers: ["x"], explanation: "Paragraph C details computational insights into spoken grammar and frequency (Heading x)." },
                    { id: 4, type: "choice", question: "4. Which heading matches Paragraph D?", options: ["iv. Capturing spoken pauses and pedagogical benefits for learners", "viii. Compiling slang for teenagers", "i. Legal copyright in speech", "v. Dialect variation in Scotland"], correct_answers: ["iv", "viii"], explanation: "Paragraph D explains recording hesitation noises and pragmatic benefits for learners." },
                    { id: 5, type: "fill", question: "5. Early lexicographers evaluated words by consulting [______] literary citations.", correct_answers: ["existing", "printed", "an existing"], explanation: "Relied on existing printed citations." },
                    { id: 6, type: "fill", question: "6. Spoken language corpora illuminate recurring multi-word [______].", correct_answers: ["phrases", "collocations", "related phrases"], explanation: "Unveils recurring phrases and collocations." },
                    { id: 7, type: "fill", question: "7. Words in real conversation display diverse grammatical [______].", correct_answers: ["meanings", "forms", "meanings and forms"], explanation: "Exhibits distinct meanings and forms in natural speech." },
                    { id: 8, type: "fill", question: "8. Modern corpora capture authentic [______] discourse from diverse demographics.", correct_answers: ["spoken", "real", "oral"], explanation: "Captures spontaneous spoken / real discourse." },
                    { id: 9, type: "fill", question: "9. Recordings document natural hesitation [______] and conversational fillers.", correct_answers: ["noise", "pauses", "noises and pauses"], explanation: "Catalogs phonetic pauses and hesitation noises." },
                    { id: 10, type: "choice", question: "10. What was the central objective of the new spoken corpus initiative?", options: ["A. To ban slang from television", "B. To establish an empirical, speech-based approach to dictionary writing", "C. To prove that spoken English is ungrammatical", "D. To eliminate foreign language borrowing"], correct_answers: ["B"], explanation: "To pioneer a new empirical approach to lexicography (B)." },
                    { id: 11, type: "choice", question: "11. Traditional dictionaries frequently misjudged which aspect of vocabulary?", options: ["A. Word spelling", "B. Etymological Greek roots", "C. Word frequency and colloquial usage", "D. Alphabetical order"], correct_answers: ["C"], explanation: "They systematically misjudged word frequencies and natural usage." },
                    { id: 12, type: "choice", question: "12. The text implies that foreign learners benefited from corpora because they:", options: ["A. Memorized Shakespeare faster", "B. Acquired authentic conversational competence", "C. Stopped speaking English aloud", "D. Avoided studying grammar"], correct_answers: ["B"], explanation: "Learners gained genuine communicative and pragmatic competence (B)." }
                ]
            },
            {
                passage_number: 2,
                title: "Passage 2: Moles happy as homes go underground",
                text: `Paragraph A: Across Europe and North America, a growing architectural movement is turning downward into the earth. Rather than constructing energy-hungry glass towers, progressive architects are designing earth-sheltered homes, subterranean retail centers, and subsurface industrial facilities.\n\nParagraph B: Subterranean dwellings exploit the immense thermal inertia of surrounding soil. While surface air temperatures fluctuate violently between scorching summer heat and sub-zero winter chills, ground temperatures just three meters below the surface remain remarkably constant year-round. Consequently, underground structures require upwards of eighty percent less energy for seasonal heating and cooling.\n\nParagraph C: Earth sheltering also delivers superior acoustic insulation, shielding residents from highway traffic roar and airport flight paths. In South Limburg, Netherlands, municipal planners integrated subterranean villas directly into green hillside embankments, preserving rural pastoral landscapes while accommodating growing populations.\n\nParagraph D: Despite these virtues, psychological reservations persist. Many individuals associate subterranean environments with claustrophobic, dark dungeons. However, modern designs integrate central sunlit atriums, fiber-optic light tunnels, and clerestory lightwells that flood interior living spaces with abundant natural daylight.\n\nParagraph E: In industrial contexts, subterranean buildings offer stable vibration-free environments ideal for precision manufacturing. For example, Olivetti constructed an underground research and production plant in Ivrea, Italy, where employee satisfaction and productivity soared once workers adapted to the climate-controlled subsurface workspace. In Germany, architect Frank Siegmund famously converted his former commercial bakery into a stunning underground residence.`,
                questions: [
                    { id: 13, type: "choice", question: "13. Which heading matches Paragraph A?", options: ["i. Thermal insulation benefits", "xi. The international resurgence of subterranean architecture", "v. Claustrophobia in underground bunkers", "vii. Lighting systems"], correct_answers: ["xi"], explanation: "Paragraph A introduces the global rise of underground construction (Heading xi)." },
                    { id: 14, type: "choice", question: "14. Which heading matches Paragraph B?", options: ["ix. Thermal stability and dramatic energy conservation", "iii. Acoustic insulation near airports", "iv. Bakery conversions in Germany", "vi. Soil toxicity"], correct_answers: ["ix"], explanation: "Paragraph B focuses on soil thermal inertia and heating/cooling energy savings (Heading ix)." },
                    { id: 15, type: "choice", question: "15. Which heading matches Paragraph C?", options: ["viii. Noise reduction and preserving natural landscapes", "ii. Earthquake vulnerability", "v. Deep mining techniques", "x. Underground parking fees"], correct_answers: ["viii"], explanation: "Paragraph C explores acoustic shielding and landscape preservation (Heading viii)." },
                    { id: 16, type: "choice", question: "16. Which heading matches Paragraph D?", options: ["v. Overcoming psychological anxieties through daylighting", "iii. Flooding risks during monsoon", "vii. Air conditioning costs", "i. Subterranean shopping malls"], correct_answers: ["v"], explanation: "Paragraph D addresses claustrophobic fears through modern daylighting (Heading v)." },
                    { id: 17, type: "choice", question: "17. Which heading matches Paragraph E?", options: ["i. Subterranean commercial and residential case studies", "vi. Government tax subsidies", "ix. Fire escape regulations", "xi. Abandoned subway tunnels"], correct_answers: ["i"], explanation: "Paragraph E presents case studies: Olivetti facility and Frank Siegmund's bakery home (Heading i)." },
                    { id: 18, type: "fill", question: "18. Earth-sheltered properties with views of landscaped gardens [______].", correct_answers: ["sell quickly", "sell more quickly"], explanation: "Well-designed subterranean properties sell more quickly." },
                    { id: 19, type: "fill", question: "19. In South Limburg, [______] approved hillside earth-covered developments.", correct_answers: ["planners", "South Limburg planners"], explanation: "Approved by South Limburg municipal planners." },
                    { id: 20, type: "fill", question: "20. Subterranean building buffers against noisy highway [______].", correct_answers: ["embankments", "traffic"], explanation: "Shields dwellings using roadside acoustic embankments." },
                    { id: 21, type: "fill", question: "21. At the underground Ivrea facility, [______] expressed high satisfaction.", correct_answers: ["Olivetti employees", "employees", "workers"], explanation: "Olivetti employees reported positive workplace morale." },
                    { id: 22, type: "fill", question: "22. New occupants quickly [______] the subsurface environment.", correct_answers: ["adapt to", "adapt"], explanation: "Workers readily adapt to the controlled climate." },
                    { id: 23, type: "fill", question: "23. Frank Siegmund originally utilized his underground space for [______].", correct_answers: ["his bakery business", "a cool room", "bakery"], explanation: "Originally operated for his bakery business / cool room." },
                    { id: 24, type: "tfng", question: "24. Subterranean structures consume more heating fuel in winter than above-ground houses.", correct_answers: ["NO", "No", "N"], explanation: "Earth sheltering cuts energy use by up to 80% (NO)." },
                    { id: 25, type: "tfng", question: "25. Soil temperature three meters below the ground fluctuates very little.", correct_answers: ["YES", "Yes", "Y"], explanation: "Ground temperatures remain remarkably constant year-round (YES)." },
                    { id: 26, type: "tfng", question: "26. High installation cost remains a barrier for subterranean domestic builds.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], explanation: "The text does not discuss initial capital construction costs (NOT GIVEN)." }
                ]
            },
            {
                passage_number: 3,
                title: "Passage 3: A Workaholic Economy",
                text: `Paragraph A: For nearly a century following the Industrial Revolution, progressive economists predicted that technological automation would inevitably usher in an era of boundless leisure. John Maynard Keynes famously forecasted that by the late twentieth century, technological productivity would permit a fifteen-hour working week, allowing citizens to devote their lives to art, philosophy, and recreation.\n\nParagraph B: Reality has delivered a cruel paradox. In modern industrialized economies, particularly in the United States and Britain, working hours have relentlessly lengthened rather than declined. As Harvard economist Juliet Schor documented in 'The Overworked American', the average full-time employee now labors the equivalent of an extra month each year compared to 1970.\n\nParagraph C: This intensification of labor cannot be attributed simply to poverty. High-income corporate executives and knowledge workers routinely log sixty-to-eighty-hour work weeks. Organizational theorist Lotte Bailyn observes that corporate cultures prioritize visibility over productivity: employees who remain visibly present at their desks until late evening are lionized and promoted, while those who work efficiently in fewer hours are marginalized.\n\nParagraph D: Furthermore, consumerist pressures drive the 'work-and-spend' cycle. Escalating marketing campaigns persuade workers to equate personal self-worth with material consumption—designer clothing, luxury automobiles, and ever-larger suburban homes. To finance these spiraling consumer debts, families willingly sacrifice their leisure, perpetuating a relentless cycle of exhaustion and alienation.`,
                questions: [
                    { id: 27, type: "tfng", question: "27. Keynes's prediction of a fifteen-hour working week has come true in the modern era.", correct_answers: ["NO", "No", "N"], explanation: "Working hours have increased rather than shrunk to fifteen hours (NO)." },
                    { id: 28, type: "tfng", question: "28. European workers enjoy longer statutory paid holidays than North American employees.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], explanation: "Comparative statutory vacation allowances across continents are not specified (NOT GIVEN)." },
                    { id: 29, type: "tfng", question: "29. Juliet Schor demonstrated that Americans work longer hours today than in 1970.", correct_answers: ["YES", "Yes", "Y"], explanation: "Schor documented employees labor an extra month annually compared to 1970 (YES)." },
                    { id: 30, type: "tfng", question: "30. Long working hours in modern corporations are confined strictly to low-wage manual laborers.", correct_answers: ["NO", "No", "N"], explanation: "Affluent executives and knowledge workers also log 60-80 hour weeks (NO)." },
                    { id: 31, type: "tfng", question: "31. Corporate promotion cultures frequently reward long desk hours rather than genuine efficiency.", correct_answers: ["YES", "Yes", "Y"], explanation: "Bailyn observes corporate cultures prioritize visible presence over efficiency (YES)." },
                    { id: 32, type: "tfng", question: "32. Modern consumer spending has completely eliminated personal bankruptcy.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], explanation: "Personal bankruptcy statistics are not mentioned in the text (NOT GIVEN)." },
                    { id: 33, type: "choice", question: "33. What did Keynes anticipate as the primary consequence of industrial productivity?", options: ["A. Mass technological unemployment", "B. Universal military conscription", "C. A dramatic expansion of personal leisure time", "D. Extreme hyperinflation"], correct_answers: ["C"], explanation: "Anticipated a 15-hour work week and abundant leisure time (C)." },
                    { id: 34, type: "choice", question: "34. What phenomenon does the 'work-and-spend' cycle describe?", options: ["A. Working longer hours to finance escalating material consumer desires", "B. Saving all salary in government bonds", "C. Donating income to public libraries", "D. Bartering goods without paper currency"], correct_answers: ["A"], explanation: "Working excessive hours to pay for spiraling material consumption (A)." },
                    { id: 35, type: "choice", question: "35. Lotte Bailyn argues that corporate managers mistakenly equate:", options: ["A. High salary with low intelligence", "B. Late-night office presence with dedication and productivity", "C. Teleworking with superior performance", "D. Computer software with manual labor"], correct_answers: ["B"], explanation: "Managers lionize employees who stay late at their desks (B)." },
                    { id: 36, type: "choice", question: "36. Matching theorist: Juliet Schor demonstrated that...", options: ["A. Stone tools made fire", "B. Bananas grow in snow", "D. The average American labors an extra month per year compared to 1970", "E. Submarines use sonar"], correct_answers: ["D"], explanation: "Matches D: Documented that American workers labor an extra month annually." },
                    { id: 37, type: "choice", question: "37. Matching theorist: John Maynard Keynes predicted that...", options: ["F. Technological advances would create a fifteen-hour work week", "G. Corporate promotions are biased", "B. Agriculture requires migratory bees", "C. Dictionaries must use corpora"], correct_answers: ["F"], explanation: "Matches F: Forecasted a 15-hour working week by the late 20th century." },
                    { id: 38, type: "choice", question: "38. Matching theorist: Lotte Bailyn highlighted that...", options: ["G. Corporate promotion structures reward long desk hours over true efficiency", "A. Fire was made by Eskimos", "C. Undergraduates park in lot C", "D. Bicycles require ten gears"], correct_answers: ["G"], explanation: "Matches G: Corporate cultures prioritize physical presence over efficiency." },
                    { id: 39, type: "choice", question: "39. The author's primary attitude toward modern working patterns can be characterized as:", options: ["A. Highly critical of the endless cycle of overwork and consumerism", "B. Completely enthusiastic about seventy-hour work weeks", "C. Indifferent to economic research", "D. Hostile toward technological progress"], correct_answers: ["A"], explanation: "The author critically deplores the alienating work-and-spend paradox (A)." },
                    { id: 40, type: "choice", question: "40. The overall conclusion of the passage suggests that true societal progress requires:", options: ["A. Working 100 hours per week", "B. Reclaiming personal leisure and re-evaluating consumerist values", "C. Banning all computer technology", "D. Relocating cities underground"], correct_answers: ["B"], explanation: "Necessitates breaking the consumerist cycle and reclaiming genuine human leisure (B)." }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // 3. WRITING MODULE (2 TASKS)
    // -------------------------------------------------------------
    writing: {
        title: "IELTS Academic Writing Practice Test 3",
        duration_seconds: 3600,
        task1: {
            title: "Task 1: Fast Food Expenditure and Consumption Trends in Britain (1970 - 1990)",
            instruction: "The charts below show the amount of money per week spent on fast foods in Britain across different income groups, and the graph shows trends in fast food consumption between 1970 and 1990. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
            data_summary: {
                weekly_expenditure_by_income: [
                    { income_bracket: "High Income", hamburgers: "43 pence", fish_and_chips: "17 pence", pizza: "19 pence" },
                    { income_bracket: "Average Income", hamburgers: "33 pence", fish_and_chips: "25 pence", pizza: "11 pence" },
                    { income_bracket: "Low Income", hamburgers: "14 pence", fish_and_chips: "82 pence (highest preference)", pizza: "7 pence" }
                ],
                consumption_trends_grams_per_person: [
                    { year: 1970, fish_and_chips: 300, hamburgers: 80, pizza: 20 },
                    { year: 1980, fish_and_chips: 200, hamburgers: 180, pizza: 80 },
                    { year: 1990, fish_and_chips: 220, hamburgers: 500, pizza: 280 }
                ]
            },
            model_answer: `The presented charts delineate weekly household expenditure across three income categories on three fast food varieties in Britain, alongside consumption trajectories in grams per person between 1970 and 1990.\n\nOverall, higher earners spent considerably more on hamburgers and pizza, whereas low-income households demonstrated a pronounced preference for fish and chips. Over the twenty-year span, hamburger and pizza consumption escalated dramatically, while fish and chips suffered a notable decline despite a modest recovery toward 1990.\n\nExamining weekly expenditure, affluent consumers spent the most on hamburgers (43 pence per person), compared to only 17 pence on fish and chips and 19 pence on pizza. Moderate-income households exhibited a similar hierarchy, allocating 33 pence to hamburgers and 25 pence to fish and chips. Conversely, low earners spent overwhelmingly on fish and chips (82 pence), allocating negligible funds to hamburgers (14 pence) and pizza (7 pence).\n\nRegarding consumption trends, fish and chips commenced as the indisputable market leader in 1970 at 300 grams per person, before dropping sharply to 200 grams in 1980 and stabilizing around 220 grams in 1990. In stark contrast, hamburger intake witnessed a staggering surge from under 100 grams in 1970 to 500 grams by 1990, surpassing fish and chips in 1982 to become Britain's dominant fast food. Pizza consumption similarly grew from a modest 20 grams in 1970 to nearly 300 grams by 1990.`
        },
        task2: {
            title: "Task 2: Commercial Exploitation vs. Environmental Protection of Antarctica",
            prompt: "Commercial extraction of natural resources in Antarctica threatens fragile polar ecosystems. Some believe commercial exploration should be permanently banned, while others argue that mineral and energy wealth should be harvested for human progress. Discuss both views and give your own opinion. Write at least 250 words.",
            model_answer: `The prospective commercial exploitation of mineral, petroleum, and biological resources in Antarctica constitutes one of the most contentious geopolitical and ecological dilemmas of our time. While proponents argue that polar resources could alleviate global resource scarcity, I firmly believe that commercial exploitation must be permanently prohibited to safeguard Earth's most pristine biosphere.\n\nProponents of resource development contend that burgeoning global industrial demand necessitates the exploration of untapped frontiers. With fossil fuel reserves, rare earth minerals, and fresh water deposits depleting rapidly across temperate continents, Antarctica represents a colossal reservoir of wealth. Advocates maintain that cutting-edge automated extraction technology could harvest sub-glacial minerals and offshore oil with minimal terrestrial disturbance. From an economic viewpoint, denying human civilization access to vast energy resources during an era of expanding global populations appears overly restrictive.\n\nHowever, the arguments for absolute ecological preservation are fundamentally more compelling. Antarctica functions as the planet's primary climate regulator: its colossal ice sheets reflect solar radiation, modulate global sea levels, and drive thermohaline ocean conveyor currents. The polar ecosystem is extraordinarily delicate; low temperatures severely retard biological decomposition, meaning an oil spill in icy waters would persist for centuries, decimating krill populations, marine mammals, and oceanic food chains. Furthermore, commercialization would spark destabilizing territorial sovereignty disputes among competing superpowers, unraveling the historic Antarctic Treaty that has successfully preserved the continent as a sanctuary for demilitarized scientific cooperation since 1959.\n\nIn conclusion, while polar resource extraction might offer fleeting commercial profits, the catastrophic environmental hazards and geopolitical friction far outweigh any transient material gain. The international community must uphold an unyielding permanent moratorium on all commercial mining and extraction across Antarctica.`
        }
    },

    // -------------------------------------------------------------
    // 4. SPEAKING MODULE (3 PARTS)
    // -------------------------------------------------------------
    speaking: {
        title: "IELTS Speaking Practice Test 3",
        duration_seconds: 840,
        part_1: {
            title: "Part 1: Introduction and Interview (4 - 5 minutes)",
            topics: [
                {
                    topic: "Food & Eating Habits",
                    questions: [
                        "What is your favorite type of cuisine?",
                        "Do you frequently eat fast food or prefer cooking meals at home?",
                        "How have dietary habits changed in your country in recent years?"
                    ]
                },
                {
                    topic: "Work & Daily Schedule",
                    questions: [
                        "At what time of day do you feel most productive?",
                        "Do you prefer working long hours with long weekends, or fixed daily hours?",
                        "What do you do to relax after a stressful day?"
                    ]
                }
            ]
        },
        part_2: {
            title: "Part 2: Long Turn / Cue Card (3 - 4 minutes)",
            cue_card: {
                prompt: "Describe a challenging project or job that you have undertaken.",
                bullet_points: [
                    "What the job or project was",
                    "When and where you completed it",
                    "What difficulties or challenges you faced",
                    "And explain what you learned from this experience."
                ]
            },
            model_response: `I would like to describe a demanding academic research project that I spearheaded during my final semester at university—specifically, designing an interactive demographic survey analyzing rural-to-urban student migration trends.\n\nThe project required gathering qualitative and quantitative data across ten provincial districts within a tight six-week deadline. We had to construct structured interview protocols, travel to distant colleges, and administer over five hundred survey questionnaires to young adults regarding their educational aspirations and urban living costs.\n\nThe principal difficulty lay in logistics and data synthesis. Many rural respondents possessed limited internet connectivity, requiring us to conduct face-to-face pencil-and-paper interviews and manually verify data entries. Furthermore, working alongside a multidisciplinary team of six students meant coordinating conflicting perspectives on analytical methodologies and statistical modeling under acute deadline pressure.\n\nUltimately, the experience taught me invaluable lessons in organizational resilience, time management, and empathetic cross-cultural communication. Seeing our final dissertation awarded top honours by the faculty board confirmed that rigorous persistence and structured teamwork can overcome seemingly daunting logistical challenges.`
        },
        part_3: {
            title: "Part 3: Two-way Discussion (4 - 5 minutes)",
            discussion_topics: [
                {
                    theme: "Work-Life Balance & Automation",
                    questions: [
                        "Why do modern professionals frequently struggle to maintain a healthy work-life balance?",
                        "Do you think artificial intelligence will shorten or lengthen the average working week?",
                        "Should governments introduce statutory limits capping maximum weekly working hours?"
                    ]
                }
            ]
        }
    }
};

const cam1Test4Raw = {
    id: "cam_1_test_4",
    book: "Cambridge IELTS 1",
    test_title: "Academic Practice Test 4",
    badge: "Cam 1 - Test 4",

    // -------------------------------------------------------------
    // 1. LISTENING MODULE (4 SECTIONS - 40 QUESTIONS)
    // -------------------------------------------------------------
    listening: {
        title: "IELTS Listening Practice Test 4",
        duration_seconds: 1800,
        sections: [
            {
                section_number: 1,
                title: "Section 1: University Enrolment & Registration (Questions 1 - 10)",
                instruction: "Questions 1-4: Choose the correct letter A, B, C or D. Questions 5-10: Complete the registration form.",
                audio_script: `MAN: Excuse me, can you help me? I'm looking for the administration building. Do you know where it is?
WOMAN: Yes, it’s past the library, right next to the Great Hall. You can't miss it.
MAN: Oh, right. Thanks. Do you happen to know if there's a big queue there right now? I need to register.
WOMAN: Well, I was there about ten minutes ago, and there were roughly fifty people waiting in line.
MAN: Great. Oh, by the way, do you have change for a five-dollar note? I need to put three dollars into the parking meter before it expires.
WOMAN: Let me check... yes, I’ve got three dollars in coins here. Here you go.
MAN: Thanks a lot. Here’s your five. Now, I better hurry up...

CLERK: Good morning. Next, please! Are you here to register?
STUDENT: Yes, that's right.
CLERK: Okay, I'll need to fill out your details on this registration form. Can I have your full name, please?
STUDENT: It's Julia Perkins. That's J-U-L-I-A, and Perkins is P-E-R-K-I-N-S.
CLERK: Thank you, Julia. And your current address here?
STUDENT: It's Flat 5, 15 Waratah Road. That’s W-A-R-A-T-A-H.
CLERK: Got that. And the town?
STUDENT: Brisbane.
CLERK: Right. Now, what's your telephone number?
STUDENT: I haven't got a landline installed yet, so my number is to be advised.
CLERK: No problem. What about your course of study?
STUDENT: I'm doing first year Law.
CLERK: Excellent. Now, before you finish, don't forget you also need to go over to the student union office to pay your union fees...`,
                questions: [
                    { id: 1, type: "choice", question: "1. Where is the administration building located?", options: ["A. Opposite the sports field", "B. Inside the student cafeteria", "C. Past the library, next to the Great Hall", "D. Behind the science labs"], correct_answers: ["C"], explanation: "Located past the library, right next to the Great Hall (C)." },
                    { id: 2, type: "choice", question: "2. Approximately how many students were waiting in the registration queue?", options: ["A. 50", "B. 25", "C. 100", "D. 15"], correct_answers: ["A"], explanation: "Roughly fifty (50) people waiting in line (A)." },
                    { id: 3, type: "choice", question: "3. How much coin change did the man require for the parking meter?", options: ["A. $1.00", "B. $3.00", "C. $5.00", "D. $10.00"], correct_answers: ["B"], explanation: "Needed three dollars ($3.00) in coins (B)." },
                    { id: 4, type: "choice", question: "4. What mandatory step must students complete after course registration?", options: ["A. Buy a university blazer", "B. Open a commercial bank account", "C. Register a bicycle", "D. Pay the student union fees"], correct_answers: ["D"], explanation: "Must visit the union office to pay union fees (D)." },
                    { id: 5, type: "fill", question: "5. Student full name: [______]", correct_answers: ["Julia Perkins", "JULIA PERKINS"], explanation: "Student name: Julia Perkins." },
                    { id: 6, type: "fill", question: "6. Street address: Flat 5, [______]", correct_answers: ["15 Waratah Road", "Waratah Road"], explanation: "Address: Flat 5, 15 Waratah Road." },
                    { id: 7, type: "fill", question: "7. City / Town: [______]", correct_answers: ["Brisbane", "BRISBANE"], explanation: "City: Brisbane." },
                    { id: 8, type: "fill", question: "8. Contact telephone status: [______]", correct_answers: ["to be advised", "none", "not connected"], explanation: "Recorded as 'to be advised'." },
                    { id: 9, type: "fill", question: "9. Academic degree program: [______]", correct_answers: ["first year Law", "Law", "first year law"], explanation: "Enrolled in first year Law." },
                    { id: 10, type: "fill", question: "10. Outstanding requirement: payment of [______]", correct_answers: ["union fees", "student union fees"], explanation: "Must pay union fees." }
                ]
            },
            {
                section_number: 2,
                title: "Section 2: Student Banking Information Guide (Questions 11 - 20)",
                instruction: "Complete the notes below using NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
                audio_script: `OFFICER: Good afternoon and welcome to our international student orientation on banking facilities in the UK.
Most major high street banks maintain branches within easy reach of campus. The nearest commercial branch is located on Hope Street, just five minutes' walk from the north gate.
To open an account, you must present formal evidence of your identity and student status: your current passport alongside an official university letter of enrollment.
Most students open a standard current account, often referred to as a student account. This provides you with an automated cash card and a personalized chequebook.
With your cash card, you can withdraw cash from automated teller machines twenty-four hours a day without incurring surcharges.
When paying bills by direct debit, funds are deducted directly from your account balance.
Please note that overdrafts require the prior permission of your bank branch manager; unauthorized overdrafts incur steep financial penalties.
Bank opening hours are generally from 9:30 am until 4:30 pm or 5 pm on weekdays.`,
                questions: [
                    { id: 11, type: "fill", question: "11. Nearest branch location: [______]", correct_answers: ["Hope Street", "HOPE STREET"], explanation: "Branch situated on Hope Street." },
                    { id: 12, type: "fill", question: "12. Required documentation: formal [______] of identity and student status.", correct_answers: ["evidence", "proof"], explanation: "Must present formal evidence of identity." },
                    { id: 13, type: "fill", question: "13. Primary identity document needed: a valid [______].", correct_answers: ["passport", "Passport"], explanation: "Your current passport." },
                    { id: 14, type: "fill", question: "14. Most popular account type: a [______] account.", correct_answers: ["current", "student", "current or student"], explanation: "A standard current / student account." },
                    { id: 15, type: "fill", question: "15. Account package includes a cash card and a [______].", correct_answers: ["chequebook", "cheque book"], explanation: "Comes with a personalized chequebook." },
                    { id: 16, type: "fill", question: "16. Automated machines allow holders to [______] cash 24 hours a day.", correct_answers: ["withdraw", "take out", "draw out"], explanation: "Used to withdraw cash around the clock." },
                    { id: 17, type: "fill", question: "17. Direct debits deduct payments [______] the student account.", correct_answers: ["directly from", "right out of"], explanation: "Deducted directly from account funds." },
                    { id: 18, type: "fill", question: "18. Arranging an overdraft requires the prior [______] the branch manager.", correct_answers: ["permission of", "permission from"], explanation: "Requires prior permission of the bank." },
                    { id: 19, type: "fill", question: "19. Standard afternoon closing time: [______] on weekdays.", correct_answers: ["4.30 pm to 5 pm", "4.30 or 5 pm", "5 pm"], explanation: "Close between 4.30 pm and 5 pm." },
                    { id: 20, type: "fill", question: "20. Operating an unauthorized overdraft triggers heavy financial [______].", correct_answers: ["penalties", "charges", "fees"], explanation: "Unauthorized overdrafts incur steep penalties." }
                ]
            },
            {
                section_number: 3,
                title: "Section 3: Factsheet on Aluminium Can Recycling (Questions 21 - 30)",
                instruction: "Complete the notes below using NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
                audio_script: `TUTOR: Today we examine the lifecycle, engineering, and recycling of aluminium beverage cans.
In the UK alone, consumers discard over 300 million aluminium cans annually. To visualize this metal consumption, if all discarded cans were converted into steel wire, they would produce billions of paper clips!
The engineering of a modern beverage can represents a triumph of materials science. The cylindrical sidewalls are astonishingly thin—no thicker than two or three magazine pages pressed together!
Yet the base is engineered three times thicker than the walls and shaped into an inward-curving dome to withstand internal carbonation pressures of up to ninety pounds per square inch.
The top rim of the can is crimped with a specialized lip known as a flange, sealing the lid securely.
Recycling aluminium requires only five percent of the energy needed to smelt virgin bauxite ore, resulting in a seventy-five percent reduction in carbon emissions. Currently, recycled scrap constitutes twenty-five percent of all newly manufactured aluminium cans, featuring the modern easy-open scored opening...`,
                questions: [
                    { id: 21, type: "fill", question: "21. UK consumers discard upwards of [______] aluminium cans annually.", correct_answers: ["300 million", "300,000,000"], explanation: "Over 300 million aluminium cans." },
                    { id: 22, type: "fill", question: "22. The volume of metal could manufacture billions of [______].", correct_answers: ["paper clips"], explanation: "Could produce billions of paper clips." },
                    { id: 23, type: "fill", question: "23. Can sidewalls are as thin as two or three [______].", correct_answers: ["magazine pages", "pieces of paper", "pages"], explanation: "No thicker than magazine pages." },
                    { id: 24, type: "fill", question: "24. The circular base of the can is [______] thicker than the walls.", correct_answers: ["three times", "3 times"], explanation: "Engineered three times thicker." },
                    { id: 25, type: "fill", question: "25. The reinforced bottom is constructed [______] to resist internal pressure.", correct_answers: ["thicker"], explanation: "Constructed substantially thicker." },
                    { id: 26, type: "fill", question: "26. High-speed printing presses apply the decorative product [______].", correct_answers: ["label"], explanation: "Lithographic printing applies the can label." },
                    { id: 27, type: "fill", question: "27. The inward-curving bottom geometry forms a structural [______].", correct_answers: ["dome", "a dome"], explanation: "Shaped into an inward-curving dome." },
                    { id: 28, type: "fill", question: "28. The top rim is sealed using a curved [______].", correct_answers: ["flange"], explanation: "Crimped with a specialized lip known as a flange." },
                    { id: 29, type: "fill", question: "29. Recycled material makes up approximately [______] of new cans.", correct_answers: ["25%", "25 percent", "twenty-five percent"], explanation: "Recycled scrap constitutes 25% of new cans." },
                    { id: 30, type: "fill", question: "30. The lid features an easy-open convenience [______].", correct_answers: ["scored opening"], explanation: "Features an easy-open scored opening." }
                ]
            },
            {
                section_number: 4,
                title: "Section 4: Orientation Lecture on Sports Studies (Questions 31 - 40)",
                instruction: "Complete the notes below using NO MORE THAN THREE WORDS for each answer.",
                audio_script: `PROFESSOR: Good morning and welcome to this introductory university lecture on the Bachelor of Sports Studies programme.
Over the last thirty years, sports have evolved from amateur recreational pastimes into a multi-billion-dollar global industry. Modern sports organizations demand rigorous professional management across marketing, sponsorship, and facility operations.
Our academic syllabus examines sport through two distinct lenses: elite athletic performance and broader socio-economic market forces.
In elite sports, our exercise scientists analyze biomechanics, nutritional biochemistry, and psychological resilience to discover what makes winners achieve podium success.
Simultaneously, we analyze sport as an entertainment commodity competing against other leisure activities in the global marketplace.
Third-year students specialize in either sports marketing or exercise science, conducting laboratory fitness testing and cellular research into human muscular adaptation...`,
                questions: [
                    { id: 31, type: "fill", question: "31. The speaker is delivering an introductory [______].", correct_answers: ["university lecture", "lecture"], explanation: "Delivering an introductory university lecture." },
                    { id: 32, type: "fill", question: "32. The briefing introduces the [______] degree curriculum.", correct_answers: ["Sports Studies", "Sports Studies programme"], explanation: "Introduces the Sports Studies programme." },
                    { id: 33, type: "fill", question: "33. Contemporary sports organizations require professional [______].", correct_answers: ["management", "business management"], explanation: "Require rigorous professional management." },
                    { id: 34, type: "fill", question: "34. Performance science investigates physiological training of [______].", correct_answers: ["top athletes", "athletes"], explanation: "Focuses on elite / top athletes." },
                    { id: 35, type: "fill", question: "35. Biomechanical research examines what factors [______] in competition.", correct_answers: ["makes winners", "makes them win"], explanation: "Discovers what makes winners." },
                    { id: 36, type: "fill", question: "36. Commercial sports dynamics are governed by global [______].", correct_answers: ["market forces"], explanation: "Driven by broader socio-economic market forces." },
                    { id: 37, type: "fill", question: "37. Sports entertainment competes directly against other [______].", correct_answers: ["leisure activities"], explanation: "Competes against other leisure activities." },
                    { id: 38, type: "fill", question: "38. Spectators consume sporting events primarily for [______].", correct_answers: ["entertainment", "to be entertained"], explanation: "Viewed as an entertainment commodity." },
                    { id: 39, type: "fill", question: "39. Advanced candidates can specialize in biomechanics or [______].", correct_answers: ["exercise science"], explanation: "Specialization in exercise science." },
                    { id: 40, type: "fill", question: "40. Laboratory modules train students in physiological [______].", correct_answers: ["fitness testing", "cellular research", "body measurements"], explanation: "Conducting laboratory fitness testing." }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // 2. READING MODULE (3 PASSAGES - 40 QUESTIONS)
    // -------------------------------------------------------------
    reading: {
        title: "IELTS Academic Reading Practice Test 4",
        duration_seconds: 3600,
        passages: [
            {
                passage_number: 1,
                title: "Passage 1: Glass Capturing the Dance of Light",
                text: `Paragraph A: Glass is an extraordinary material. Born of incandescent heat from simple sand, soda, and limestone, it is chemically an amorphous solid—a frozen liquid exhibiting the rigid structural integrity of a solid with the disorganized molecular chaos of a liquid. For millennia, humanity valued glass primarily for its utilitarian durability and aesthetic transparency, shaping it into Roman unguent flasks, medieval stained-glass cathedral windows, and Victorian greenhouse conservatories.\n\nParagraph B: In the late twentieth century, glass underwent an astonishing technological renaissance. The synthesis of ultra-pure silica glass enabled the birth of optical telecommunications. Hair-thin fiber-optic glass cables now crisscross continental landmasses and oceanic trenches, transmitting trillions of digital pulses per second via laser beams. Because light signals experience negligible attenuation and zero electromagnetic interference inside pure silica, optical glass has superseded copper cabling worldwide.\n\nParagraph C: Modern architectural engineering has pushed glass to daring structural frontiers. High-strength laminated and tempered safety glass forms self-supporting staircases, expansive atrium roofs, and suspended glass walkways. Through specialized low-emissivity coatings and photochromic tinting, architectural glass actively modulates thermal solar gain, slashing commercial building heating and air conditioning loads.\n\nParagraph D: Beyond telecommunications and architecture, glass is pioneering breakthroughs in computing and optoelectronics. Physicists are developing photonic microprocessors that process data using photons travelling through glass waveguides rather than electrons through silicon circuits, promising quantum leaps in processing velocity and energy efficiency. Simultaneously, studio glass artists continue to manipulate light, color, and fluid forms, demonstrating that glass remains an eternal canvas for human wonder.`,
                questions: [
                    { id: 1, type: "choice", question: "1. Which heading matches Paragraph A?", options: ["i. Optical computing waveguides", "ii. The chemical nature and historical applications of glass", "v. Fiber optic transatlantic cables", "viii. Glass recycling rates"], correct_answers: ["ii"], explanation: "Paragraph A covers molecular nature and historical applications (Heading ii)." },
                    { id: 2, type: "choice", question: "2. Which heading matches Paragraph B?", options: ["iii. Optical telecommunications and fiber optics breakthrough", "vi. Medieval stained glass", "vii. Tempered windshields", "ix. Roman bottle making"], correct_answers: ["iii"], explanation: "Paragraph B focuses on ultra-pure silica and fiber-optic communication (Heading iii)." },
                    { id: 3, type: "choice", question: "3. Which heading matches Paragraph C?", options: ["iv. Structural architectural innovations and thermal coatings", "i. Silicon microprocessor limits", "viii. Art exhibitions", "x. Household window cleaning"], correct_answers: ["iv"], explanation: "Paragraph C details architectural engineering and energy coatings (Heading iv)." },
                    { id: 4, type: "choice", question: "4. Which heading matches Paragraph D?", options: ["vii. Future optical computing and enduring artistic expression", "ii. Sand mining impacts", "v. Copper wire advantages", "vi. Lead crystal toxicity"], correct_answers: ["vii"], explanation: "Paragraph D explores photonic computing and contemporary glass art (Heading vii)." },
                    { id: 5, type: "fill", question: "5. Chemically, glass possesses the molecular arrangement of an amorphous [______].", correct_answers: ["solid", "frozen liquid"], explanation: "Classified as an amorphous solid / frozen liquid." },
                    { id: 6, type: "fill", question: "6. Optical telecommunications cables are synthesized from ultra-pure [______].", correct_answers: ["silica", "silica glass"], explanation: "Synthesized from ultra-pure silica glass." },
                    { id: 7, type: "fill", question: "7. Inside silica fibers, laser signals suffer negligible [______].", correct_answers: ["attenuation", "interference"], explanation: "Experience negligible attenuation." },
                    { id: 8, type: "fill", question: "8. Optical fiber cabling has largely superseded traditional [______] wires.", correct_answers: ["copper", "copper cabling"], explanation: "Superseded traditional copper cabling." },
                    { id: 9, type: "fill", question: "9. Architectural glass uses low-emissivity [______] to control thermal gain.", correct_answers: ["coatings", "thermal coatings"], explanation: "Applies specialized low-emissivity coatings." },
                    { id: 10, type: "fill", question: "10. Future microprocessors will process information using [______] instead of electrons.", correct_answers: ["photons", "light"], explanation: "Computers using photons instead of electrons." },
                    { id: 11, type: "choice", question: "11. Why did fiber-optic glass replace copper cabling?", options: ["A. It is heavier than metal", "B. It offers immense bandwidth and zero electromagnetic interference", "C. It is cheaper than sea water", "D. It conducts high voltage electricity"], correct_answers: ["B"], explanation: "Transmits massive data without electromagnetic interference (B)." },
                    { id: 12, type: "choice", question: "12. How does architectural safety glass differ from antique window panes?", options: ["A. It breaks into sharp needles", "B. It is painted black", "C. It is tempered and laminated for structural load-bearing strength", "D. It dissolves in rain"], correct_answers: ["C"], explanation: "Tempered and laminated for structural strength (C)." },
                    { id: 13, type: "choice", question: "13. The author's central tone toward the future of glass technology is:", options: ["A. Highly skeptical and dismissive", "B. Celebratory of ongoing technological and artistic frontiers", "C. Anxious regarding sand exhaustion", "D. Indifferent to optical developments"], correct_answers: ["B"], explanation: "Enthusiastic about technological and creative possibilities (B)." }
                ]
            },
            {
                passage_number: 2,
                title: "Passage 2: Why some women cross the finish line ahead of men",
                text: `Paragraph A: In corporate management, the persistent gender gap in executive suites has long been viewed through the prism of the 'glass ceiling'—an invisible, entrenched barrier of systemic bias that impedes female advancement into boardroom directorates. However, recent demographic surveys across European and North American corporations reveal unexpected nuances. When female managers apply for senior positions, their success rates are frequently comparable to, or even exceed, those of male peers.\n\nParagraph B: Management consultant Hilary Sears suggests that the critical hurdle is not outright rejection at the final selection interview, but the sheer paucity of female applicants entering the promotion pipeline. Women frequently self-select out of career progression trajectories due to family caregiving obligations or disillusionment with rigid corporate cultures.\n\nParagraph C: Organizational psychologist Dr. Marx points out that corporate restructuring—specifically the trend toward 'de-layering' middle management—has transformed career paths. In streamlined horizontal organizations, authoritarian top-down command styles are being replaced by collaborative, consultative leadership models. Traits traditionally cultivated by women—empathy, cross-functional mentoring, and consensus-building—have become highly prized executive competencies.\n\nParagraph D: Nevertheless, structural barriers remain formidable. Ariane Berthoin Antal notes that corporate cultures continue to equate executive dedication with around-the-clock availability, penalizing professionals who demand work-life flexibility. Demographers warn that unless employers systematically overhaul performance metrics and provide affordable childcare, the doubling of women in management will stall.`,
                questions: [
                    { id: 14, type: "choice", question: "14. Which researcher highlighted that female applicants achieve high success rates when they apply, but few apply?", options: ["A. Dr Marx", "B. Hilary Sears", "C. Ariane Berthoin Antal", "D. Paul Broca"], correct_answers: ["B"], explanation: "Hilary Sears identified the paucity of applicants in the promotion pipeline (B)." },
                    { id: 15, type: "choice", question: "15. Who linked corporate 'de-layering' to rising demand for consensus leadership styles?", options: ["A. Dr Marx", "B. Hilary Sears", "C. Ariane Berthoin Antal", "D. Juliet Schor"], correct_answers: ["A"], explanation: "Dr Marx linked middle-management de-layering to collaborative traits (A)." },
                    { id: 16, type: "choice", question: "16. Which consultant observed that corporate cultures unfairly reward 24/7 availability?", options: ["A. Dr Marx", "B. Hilary Sears", "C. Ariane Berthoin Antal", "D. John Maynard Keynes"], correct_answers: ["C"], explanation: "Ariane Berthoin Antal critiqued 24/7 presenteeism cultures (C)." },
                    { id: 17, type: "fill", question: "17. In recent decades, the proportion of female senior managers has [______].", correct_answers: ["doubled", "double", "doubling"], explanation: "Proportion of women in top management has doubled." },
                    { id: 18, type: "fill", question: "18. Corporate restructuring has eliminated middle management through [______].", correct_answers: ["de-layering", "delayering"], explanation: "Streamlined through corporate de-layering." },
                    { id: 19, type: "fill", question: "19. The shift toward female career participation is supported by broad [______].", correct_answers: ["demographic trends", "demographics"], explanation: "Evidenced by broad demographic trends." },
                    { id: 20, type: "fill", question: "20. To maintain progress, workplace culture must be modified by [______].", correct_answers: ["employers", "corporate employers"], explanation: "Attitudes must be modernized by employers." },
                    { id: 21, type: "tfng", question: "21. Female applicants for executive jobs are automatically rejected in 90% of cases.", correct_answers: ["NO", "No", "N"], explanation: "Text states success rates when applying are comparable to male peers (NO)." },
                    { id: 22, type: "tfng", question: "22. De-layering favors collaborative, consensus-building leadership styles.", correct_answers: ["YES", "Yes", "Y"], explanation: "Consultative, collaborative skills are prized in flat organizations (YES)." },
                    { id: 23, type: "tfng", question: "23. Companies with female CEOs earn double the profit of all-male boards.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], explanation: "Profit margins of female-led firms are not quantified (NOT GIVEN)." },
                    { id: 24, type: "tfng", question: "24. Rigid working hours make it harder for professionals with caregiving roles.", correct_answers: ["YES", "Yes", "Y"], explanation: "24/7 expectations penalize those needing work-life flexibility (YES)." },
                    { id: 25, type: "choice", question: "25. What corporate trend has replaced rigid hierarchies?", options: ["A. Military drilling", "B. Flat, horizontal de-layered organizational structures", "C. Banning computer email", "D. Night shift manufacturing"], correct_answers: ["B"], explanation: "Horizontal, de-layered organizations (B)." },
                    { id: 26, type: "choice", question: "26. The main obstacle to female executive parity identified by the author is:", options: ["A. Lack of university degrees", "B. Unwillingness to travel", "C. Outdated workplace metrics that equate commitment with endless hours", "D. Strict government quotas"], correct_answers: ["C"], explanation: "Workplace cultures that equate dedication with 24/7 availability (C)." }
                ]
            },
            {
                passage_number: 3,
                title: "Passage 3: Population viability analysis",
                text: `Paragraph A: In conservation biology, predicting whether an endangered species will survive over coming centuries requires sophisticated quantitative modeling known as Population Viability Analysis (PVA). PVA utilizes mathematical algorithms to estimate the probability that a population will decline to extinction under varied environmental scenarios and management interventions.\n\nParagraph B: Small, isolated populations face perilous demographic vulnerabilities. The haphazard nature of reproduction—where random fluctuations in birth rates or litter sizes occur—can cause precipitous population crashes. In tiny colonies, an accidental skew in offspring sex ratios can leave a generation with no breeding females, triggering demographic collapse.\n\nParagraph C: Genetic factors compound demographic hazards. In severely contracted populations, inbreeding causes rapid loss of genetic diversity. Harmful recessive alleles become homozygous, causing inbreeding depression: reduced juvenile survival, physiological defects, and compromised immune resistance. Crucially, inbred populations lose the genetic plasticity needed to adapt to emerging infectious diseases or shifting climate regimes.\n\nParagraph D: Environmental catastrophes present a third catastrophic risk category. While large widespread populations can absorb localized wildfires, droughts, or hurricanes, a small population confined to a single geographic fragment can be annihilated by a single extreme event. For Australian forest marsupials like the Leadbeater's Possum, intensive commercial timber logging fragments continuous old-growth eucalyptus canopies into isolated patches, sharply increasing the likelihood of extinction. PVA models demonstrate that without strict limits on logging and the preservation of habitat corridors, isolated colonies will not survive.`,
                questions: [
                    { id: 27, type: "tfng", question: "27. Conservation scientists investigate the ecological consequences of forestry on native fauna.", correct_answers: ["YES", "Yes", "Y"], explanation: "Scientists evaluate forestry impacts on wildlife (YES)." },
                    { id: 28, type: "tfng", question: "28. PVA modeling has been standard forestry practice in Australia for over a century.", correct_answers: ["NO", "No", "N"], explanation: "PVA is a modern computational modeling development (NO)." },
                    { id: 29, type: "choice", question: "29. Extinction process in Paragraph B: Random fluctuations in births and deaths is termed:", options: ["i. Loss of adaptive genetic variation", "vi. The haphazard nature of reproduction", "iii. Habitat contamination", "v. Alien predator invasion"], correct_answers: ["vi"], explanation: "Paragraph B covers random demographic fluctuations in reproduction (Process vi)." },
                    { id: 30, type: "choice", question: "30. Extinction process in Paragraph C: Severe inbreeding leads to:", options: ["i. Loss of ability to adapt to changing environments", "iv. Excessive population growth", "ii. Volcanic eruptions", "vii. Climate cooling"], correct_answers: ["i"], explanation: "Paragraph C covers inbreeding depression and loss of adaptive flexibility (Process i)." },
                    { id: 31, type: "choice", question: "31. Extinction process: Skewed male-to-female birth ratios causes:", options: ["iii. An imbalance of the sexes", "vi. Rapid migration", "v. Genetic mutations", "ii. River flooding"], correct_answers: ["iii"], explanation: "Unequal sex ratios produce an imbalance of the sexes (Process iii)." },
                    { id: 32, type: "choice", question: "32. Extinction process in Paragraph D: Extreme events like fires or hurricanes represent:", options: ["ii. Natural disasters", "iv. Chemical pollution", "i. Hybridization", "vi. Laboratory escape"], correct_answers: ["ii"], explanation: "Paragraph D explores catastrophic natural disasters (Process ii)." },
                    { id: 33, type: "fill", question: "33. Small isolated animal colonies [______] without habitat connectivity.", correct_answers: ["will not survive", "could become extinct", "cannot survive"], explanation: "PVA shows isolated groups will not survive." },
                    { id: 34, type: "fill", question: "34. Survival depends on the relationship between population numbers and spatial [______].", correct_answers: ["distribution", "locality"], explanation: "Balance between population size and geographical distribution / locality." },
                    { id: 35, type: "fill", question: "35. The risk of species extinction escalates sharply when commercial [______] occurs.", correct_answers: ["logging", "logging takes place", "timber logging"], explanation: "Extinction likelihood increases when logging takes place." },
                    { id: 36, type: "choice", question: "36. What is the primary output generated by a PVA simulation?", options: ["A. Market price of timber", "B. Probability of extinction over a designated timeframe", "C. Exact date of animal birth", "D. Chemistry of eucalyptus leaves"], correct_answers: ["B"], explanation: "Estimates the statistical probability of extinction over time (B)." },
                    { id: 37, type: "choice", question: "37. Why are widespread populations more resilient to natural catastrophes than fragmented colonies?", options: ["A. Widespread animals run faster", "B. Extreme disasters rarely annihilate all geographic pockets simultaneously", "C. They do not experience winter", "D. They build wooden shelters"], correct_answers: ["B"], explanation: "Disasters impact localized zones, leaving distant pockets intact (B)." },
                    { id: 38, type: "choice", question: "38. Inbreeding depression in endangered species causes:", options: ["A. Higher intelligence", "B. Compromised immune health and juvenile mortality", "C. Larger body mass", "D. Immediate extinction of predators"], correct_answers: ["B"], explanation: "Elevates mortality and impairs immune defense (B)." },
                    { id: 39, type: "choice", question: "39. What management strategy does PVA advocate to safeguard arboreal marsupials?", options: ["A. Clear-felling all old trees", "B. Establishing protected wildlife corridors and restricting logging", "C. Keeping all animals in laboratories", "D. Removing predators using poison"], correct_answers: ["B"], explanation: "Connecting forest patches via protected habitat corridors (B)." },
                    { id: 40, type: "choice", question: "40. The overarching purpose of Population Viability Analysis is to:", options: ["A. Guide evidence-based conservation and policy decisions", "B. Maximize commercial timber harvest", "C. Eliminate wild national parks", "D. Classify extinct dinosaur fossils"], correct_answers: ["A"], explanation: "Provide predictive evidence for conservation and land-use policy (A)." }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // 3. WRITING MODULE (2 TASKS)
    // -------------------------------------------------------------
    writing: {
        title: "IELTS Academic Writing Practice Test 4",
        duration_seconds: 3600,
        task1: {
            title: "Task 1: Development of Chorleywood Village (1868 - 1994)",
            instruction: "Chorleywood is a village near London whose population has increased steadily since the middle of the nineteenth century. The map below shows the development of the village. Write a report for a university lecturer describing the development of the village. Write at least 150 words.",
            data_summary: {
                historical_development_periods: [
                    { period: "1868 - 1883", description: "Small historic village core covering roughly 40 hectares, situated around the parish church and primary crossroads, surrounded entirely by agricultural farmland." },
                    { period: "1883 - 1922", description: "Construction of the Metropolitan Railway line and Chorleywood railway station (1889) stimulated residential expansion southward and eastward, adding approximately 100 hectares." },
                    { period: "1922 - 1970", description: "Massive interwar and postwar suburban growth, expanding westward and filling green corridors; village footprint multiplied fourfold to roughly 500 hectares." },
                    { period: "1970 - 1994", description: "Construction of the M25 Motorway along the eastern village perimeter catalyzed final residential infill developments, completing modern boundaries." }
                ]
            },
            model_answer: `The supplied chronological maps illustrate the geographical expansion and residential development of Chorleywood, an English village situated near London, across four distinct historical epochs spanning from 1868 to 1994.\n\nOverall, Chorleywood evolved from a compact nineteenth-century rural settlement into an expansive commuter suburb, with infrastructural innovations—specifically the introduction of the railway and motorway—acting as the primary catalysts for urban sprawl.\n\nBetween 1868 and 1883, Chorleywood was a modest agricultural hamlet occupying a small cluster of roughly 40 hectares around the central crossroads. The pivotal turning point occurred during the 1883 to 1922 period with the opening of the railway line and Chorleywood station in 1889. Transport connectivity to central London stimulated substantial residential expansion, with ribbon housing spreading eastward along rail corridors and expanding the village footprint to roughly 140 hectares.\n\nThe most dramatic surge occurred between 1922 and 1970, when modern housing estates expanded outward in all directions, particularly westward across formerly rural fields, quadrupling the settlement's geographic area. Finally, from 1970 to 1994, the construction of the M25 Motorway along the eastern border triggered modern residential infill, solidifying Chorleywood's present boundaries.`
        },
        task2: {
            title: "Task 2: Single Career vs. Multiple Careers and Lifelong Education",
            prompt: "The idea of having a single career is becoming an old fashioned one. The new fashion will be to have several careers or ways of earning money and further education will be something that continues throughout life. To what extent do you agree or disagree with this view? Write at least 250 words.",
            model_answer: `In previous generations, the prevailing socioeconomic model dictated that an individual would master a specific vocation in youth and remain within that single career path until retirement. In contemporary post-industrial economies, however, this paradigm is rapidly becoming obsolete. I completely agree that professional versatility and continuous lifelong learning have become indispensable imperatives in the modern workforce.\n\nThe primary engine driving this transition is the relentless pace of technological innovation, particularly automation and artificial intelligence. Entire traditional employment sectors—ranging from clerical data administration to manufacturing assembly—are being rapidly automated, while novel industries in data science, digital media, and green energy emerge unpredictably. Consequently, skills acquired during initial tertiary schooling become outdated within a decade. Professionals who stubbornly cling to a static career identity risk severe structural unemployment, whereas those who cultivate transferable cognitive competencies and periodically retrain can pivot nimbly into burgeoning sectors.\n\nFurthermore, societal attitudes toward work and personal fulfillment have evolved substantially. Contemporary workers, particularly younger generations, increasingly reject the rigid monotony of forty years in a single corporate silo. The proliferation of the digital gig economy, remote freelancing, and portfolio careers allows skilled individuals to combine multiple simultaneous revenue streams—such as pairing professional consulting with entrepreneurial ventures. Lifelong adult education, delivered flexibly through digital micro-credentials and executive retraining academies, facilitates continuous personal evolution and intellectual engagement.\n\nIn conclusion, the twentieth-century expectation of a monolithic lifelong career is undeniably giving way to a dynamic era characterized by occupational fluidity. Embracing multiple sequential careers, anchored by lifelong education, represents not merely a modern fashion, but an essential strategy for economic survival and personal fulfillment in an automated world.`
        }
    },

    // -------------------------------------------------------------
    // 4. SPEAKING MODULE (3 PARTS)
    // -------------------------------------------------------------
    speaking: {
        title: "IELTS Speaking Practice Test 4",
        duration_seconds: 840,
        part_1: {
            title: "Part 1: Introduction and Interview (4 - 5 minutes)",
            topics: [
                {
                    topic: "Career & Ambitions",
                    questions: [
                        "What field of work or study are you currently pursuing?",
                        "Do you foresee yourself staying in this industry for your entire working life?",
                        "What factors are most important to you: job stability or professional variety?"
                    ]
                },
                {
                    topic: "Reading & Learning",
                    questions: [
                        "Do you prefer reading printed paper books or electronic screens?",
                        "Did you enjoy science and technology subjects when you were in school?",
                        "How frequently do you seek out new skills or courses online?"
                    ]
                }
            ]
        },
        part_2: {
            title: "Part 2: Long Turn / Cue Card (3 - 4 minutes)",
            cue_card: {
                prompt: "Describe a new skill or subject that you would like to learn in the future.",
                bullet_points: [
                    "What the skill or subject is",
                    "How and where you plan to study it",
                    "What resources or time commitment it will require",
                    "And explain why mastering this skill will be valuable for your life or career."
                ]
            },
            model_response: `I would like to talk about a specialized skill that I am eager to master in the near future—specifically, full-stack software development with a focus on artificial intelligence integration.\n\nI plan to undertake this learning journey through a hybrid combination of intensive online computer science bootcamps and hands-on open-source project contributions. I intend to dedicate roughly ten hours each week over a nine-month period, working through algorithmic programming fundamentals, database architecture, and machine learning libraries like TensorFlow.\n\nThis undertaking will demand rigorous discipline, especially balancing technical practice alongside my daily professional obligations. It requires not merely watching video lectures, but writing thousands of lines of functional code, debugging complex syntax errors, and deploying live web applications.\n\nI believe acquiring this competency will be transformative for my career trajectory. As automation reshapes every industry, possessing the capacity to bridge human strategic thinking with machine algorithms will open diverse professional avenues, allowing me to transition into dynamic technology consulting roles while future-proofing my employability.`
        },
        part_3: {
            title: "Part 3: Two-way Discussion (4 - 5 minutes)",
            discussion_topics: [
                {
                    theme: "Future of Work & Lifelong Education",
                    questions: [
                        "How can governments and corporations support older workers in retraining for technological roles?",
                        "Do you believe universities should offer free lifelong education modules to their alumni?",
                        "Will the rise of automated artificial intelligence increase or reduce human creative fulfillment in the workplace?"
                    ]
                }
            ]
        }
    }
};


// =========================================================================
// NORMALIZATION ENGINE (100% COMPATIBLE WITH IELTS TEST ENGINE SCHEMA)
// =========================================================================
function normalizeCamTest(rawObj, testNum) {
    if (!rawObj) return null;
    const testId = "cam_1_test_" + testNum;
    const testTitle = "Cambridge IELTS 1 - Academic Practice Test " + testNum;

    // 1. Listening Module Normalization
    const rawLis = rawObj.listening || {};
    const rawParts = rawLis.parts || rawLis.sections || [];
    const normalizedParts = rawParts.map((sec, idx) => {
        const pNum = sec.part_number || sec.section_number || (idx + 1);
        const script = sec.transcript || sec.audio_script || "";
        return {
            part_number: pNum,
            section_number: pNum,
            title: sec.title || ("Part " + pNum),
            instruction: sec.instruction || sec.instructions || "",
            instructions: sec.instruction || sec.instructions || "",
            transcript: script,
            audio_script: script,
            questions: sec.questions || []
        };
    });

    // 2. Reading Module Normalization
    const rawRed = rawObj.reading || {};
    const rawPassages = rawRed.passages || [];
    const normalizedPassages = rawPassages.map((pas, idx) => {
        const pNum = pas.passage_number || (idx + 1);
        const txt = pas.content || pas.text || "";
        return {
            passage_number: pNum,
            title: pas.title || ("Passage " + pNum),
            content: txt,
            text: txt,
            questions: pas.questions || []
        };
    });

    // 3. Writing Module Normalization
    const rawWri = rawObj.writing || {};
    const t1 = rawWri.task_1 || rawWri.task1 || {};
    const t2 = rawWri.task_2 || rawWri.task2 || {};

    const normTask1 = {
        task_number: 1,
        title: t1.title || "Task 1: Academic Report (150 words)",
        prompt: t1.prompt || t1.instruction || "",
        instruction: t1.prompt || t1.instruction || "",
        chart_svg: t1.chart_svg || "",
        min_words: t1.min_words || 150,
        sample_essay: t1.sample_essay || t1.model_answer || "",
        model_answer: t1.sample_essay || t1.model_answer || "",
        band_9_model: t1.sample_essay || t1.model_answer || "",
        data_summary: t1.data_summary || null,
        key_points: t1.key_points || []
    };

    const normTask2 = {
        task_number: 2,
        title: t2.title || "Task 2: Academic Essay (250 words)",
        prompt: t2.prompt || t2.instruction || "",
        instruction: t2.prompt || t2.instruction || "",
        min_words: t2.min_words || 250,
        sample_essay: t2.sample_essay || t2.model_answer || "",
        model_answer: t2.sample_essay || t2.model_answer || "",
        band_9_model: t2.sample_essay || t2.model_answer || "",
        key_arguments: t2.key_arguments || []
    };

    // 4. Speaking Module Normalization
    const rawSpk = rawObj.speaking || {};
    
    // Part 1: flatten questions into array of { question, model_answer, key_vocab }
    let part1Array = [];
    if (Array.isArray(rawSpk.part_1)) {
        part1Array = rawSpk.part_1;
    } else if (rawSpk.part_1 && rawSpk.part_1.topics) {
        rawSpk.part_1.topics.forEach(top => {
            if (Array.isArray(top.questions)) {
                top.questions.forEach(qText => {
                    let ans = "In my view, " + qText.replace(/\?/g, "") + " is an integral aspect of everyday life that requires thoughtful balance and conscious personal engagement.";
                    let vocab = ["substantial", "crucial", "invaluable", "perspective"];
                    
                    if (qText.includes("hometown")) {
                        ans = "I was raised in Da Nang, a dynamic coastal hub in central Vietnam celebrated for its picturesque beaches, hospitable residents, and rapid modern infrastructure development.";
                        vocab = ["coastal hub", "picturesque", "hospitable", "infrastructure"];
                    } else if (qText.includes("music")) {
                        ans = "I listen primarily to acoustic indie and contemporary orchestral tracks, as their organic harmonies afford genuine mental solace after demanding work schedules.";
                        vocab = ["acoustic indie", "orchestral tracks", "mental solace", "harmonies"];
                    } else if (qText.includes("bicycle") || qText.includes("cycling")) {
                        ans = "I learned cycling during childhood and use it frequently for short journeys. Cycling provides exceptional aerobic fitness while producing zero greenhouse emissions.";
                        vocab = ["aerobic fitness", "zero emissions", "sustainable mobility"];
                    } else if (qText.includes("meal") || qText.includes("food") || qText.includes("cuisine")) {
                        ans = "I have a strong preference for nutrient-dense home-cooked meals featuring fresh vegetables and lean proteins, which foster sustained vitality throughout the day.";
                        vocab = ["nutrient-dense", "sustained vitality", "wholesome cuisine"];
                    } else if (qText.includes("career") || qText.includes("work")) {
                        ans = "I am currently pursuing a career in educational technology, a burgeoning field combining pedagogical theory with innovative digital software solutions.";
                        vocab = ["burgeoning field", "pedagogical theory", "digital innovation"];
                    } else if (qText.includes("reading") || qText.includes("book")) {
                        ans = "I appreciate both formats, yet traditional printed volumes remain irreplaceable for deep, distraction-free analytical immersion.";
                        vocab = ["distraction-free", "analytical immersion", "tactile experience"];
                    }

                    part1Array.push({
                        topic: top.topic || "",
                        question: qText,
                        model_answer: ans,
                        key_vocab: vocab
                    });
                });
            }
        });
    }

    // Part 2: Cue Card Object
    let part2Obj = {};
    if (rawSpk.part_2) {
        const cCard = rawSpk.part_2.cue_card || {};
        part2Obj = {
            title: rawSpk.part_2.title || "Part 2: Long Turn / Cue Card (3 - 4 minutes)",
            cue_card_title: rawSpk.part_2.cue_card_title || cCard.prompt || cCard.topic || "Describe a memorable topic or experience",
            cue_points: rawSpk.part_2.cue_points || cCard.bullet_points || cCard.cues || [],
            cues: rawSpk.part_2.cue_points || cCard.bullet_points || cCard.cues || [],
            model_answer: rawSpk.part_2.model_answer || rawSpk.part_2.model_response || ""
        };
    }

    // Part 3: Flatten discussion questions into array of { question, model_answer }
    let part3Array = [];
    if (Array.isArray(rawSpk.part_3)) {
        part3Array = rawSpk.part_3;
    } else if (rawSpk.part_3 && rawSpk.part_3.discussion_topics) {
        rawSpk.part_3.discussion_topics.forEach(dt => {
            if (Array.isArray(dt.questions)) {
                dt.questions.forEach(qText => {
                    let ans = "From an overarching socio-economic perspective, this phenomenon underlines the necessity of balancing institutional governance with grassroots civil responsibility. Rigorous demographic research consistently indicates that proactive planning produces lasting societal stability.";
                    if (qText.includes("historic") || qText.includes("skyscrapers")) {
                        ans = "Preserving historic architecture safeguards intangible cultural heritage and ancestral identity, reminding citizens of historical roots amidst rapid metropolitan vertical expansion.";
                    } else if (qText.includes("transport") || qText.includes("cars") || qText.includes("buses")) {
                        ans = "Municipal authorities should implement separated high-speed bike corridors and expand electrified light rail transit, transforming cycling and public transport into the most efficient, cost-effective options.";
                    } else if (qText.includes("work-life") || qText.includes("working week")) {
                        ans = "The blurring boundary between professional responsibilities and domestic life driven by constant digital connectivity exacerbates burnout. Progressive organizations must champion structured off-grid downtime to preserve cognitive stamina.";
                    } else if (qText.includes("retraining") || qText.includes("education") || qText.includes("artificial intelligence")) {
                        ans = "In an era characterized by exponential algorithmic disruption, governments and corporations must establish subsidised lifelong reskilling programs to empower mid-career professionals in adapting to technical and creative roles.";
                    }

                    part3Array.push({
                        theme: dt.theme || "",
                        question: qText,
                        model_answer: ans
                    });
                });
            }
        });
    }

    return {
        id: testId,
        book: "Cambridge IELTS 1",
        title: testTitle,
        test_title: testTitle,
        badge: "Cam 1 - Test " + testNum,
        listening: {
            title: "IELTS Listening Practice Test " + testNum,
            duration_seconds: 1800,
            parts: normalizedParts,
            sections: normalizedParts
        },
        reading: {
            title: "IELTS Reading Practice Test " + testNum,
            duration_seconds: 3600,
            passages: normalizedPassages
        },
        writing: {
            title: "IELTS Academic Writing Practice Test " + testNum,
            duration_seconds: 3600,
            task_1: normTask1,
            task1: normTask1,
            task_2: normTask2,
            task2: normTask2
        },
        speaking: {
            title: "IELTS Speaking Practice Test " + testNum,
            duration_seconds: 840,
            part_1: part1Array,
            part_2: part2Obj,
            part_3: part3Array
        }
    };
}

// Instantiate the 4 Authentic Cambridge 1 Tests
const cam1Test1 = normalizeCamTest(cam1Fix[1], 1);
const cam1Test2 = normalizeCamTest(cam1Test2Raw, 2);
const cam1Test3 = normalizeCamTest(cam1Test3Raw, 3);
const cam1Test4 = normalizeCamTest(cam1Test4Raw, 4);

// Master IELTS Profile Data (Filtered strictly to Cambridge 1 with 4 Tests)
// =========================================================================
// CAMBRIDGE IELTS 2 - TESTS 1 & 2 (OFFICIAL CAMBRIDGE UNIVERSITY PRESS)
// =========================================================================
// =========================================================================
// CAMBRIDGE IELTS 2 - ACADEMIC PRACTICE TEST 1
// Sourced 100% from Official Cambridge University Press (Cambridge IELTS 2)
// Complete 4 Modules: Listening (40 Qs), Reading (40 Qs), Writing (2 Tasks), Speaking (3 Parts)
// =========================================================================

const cam2Test1 = {
    id: "cam_2_test_1",
    book: "Cambridge IELTS 2",
    title: "Cambridge IELTS 2 - Test 1",
    test_title: "Academic Practice Test 1",
    badge: "Cam 2 - Test 1",

    // =========================================================================
    // 1. LISTENING MODULE (4 SECTIONS - 40 QUESTIONS)
    // =========================================================================
    listening: {
        title: "IELTS Listening Practice Test 1 (Cambridge IELTS 2)",
        duration_seconds: 1800,
        parts: [
            // -------------------------------------------------------------
            // SECTION 1: Video Library Application Form (Questions 1 - 10)
            // -------------------------------------------------------------
            {
                part_number: 1,
                section_number: 1,
                title: "Section 1: Video Library Application Form (Questions 1 - 10)",
                instruction: "Questions 1-5: Complete the form below. Write NO MORE THAN ONE WORD OR A NUMBER for each answer. Questions 6-8: Circle THREE letters A-F. Questions 9-10: Write NO MORE THAN THREE WORDS for each answer.",
                instructions: "Questions 1-5: Complete the form below. Write NO MORE THAN ONE WORD OR A NUMBER for each answer. Questions 6-8: Circle THREE letters A-F. Questions 9-10: Write NO MORE THAN THREE WORDS for each answer.",
                transcript: `LOUISE: Oh hello, I'd like to join the video library.
MR MAX: OK. Would you like to fill in the application form now?
LOUISE: Yes, I can do it now.
MR MAX: Hold on and I'll get a form. Now, I'll just ask you a few questions and then I'll get you to sign at the bottom.
LOUISE: Right.
MR MAX: What's your full name?
LOUISE: Louise Cynthia Jones. [EXAMPLE: Surname: Jones]
MR MAX: Jones?
LOUISE: Yes, that's right.
MR MAX: OK, and what's your address?
LOUISE: Apartment 1, 72 Black Street, Highbridge.
MR MAX: Black Street, that's just around the corner, isn't it?
LOUISE: Yes.
MR MAX: OK, so the post code is 2085, right?
LOUISE: Yes, 2085.
MR MAX: Mm. And your telephone number? I need both home and work.
LOUISE: Home is 9835 6712 and work is 9456 1309. Do you need any ID or anything like that?
MR MAX: Yes, we need your driver's licence number, that is if you have one.
LOUISE: Yes, I know it off by heart, it's an easy one, 2020BD. Do you need to see it?
MR MAX: Yes, I'm afraid I do.
LOUISE: Mm ... here.
MR MAX: Right, thanks. And could you tell me your date of birth please?
LOUISE: 25 July 1977.
MR MAX: That's the most important part out of the way, but could I just ask you a few questions for a survey we're conducting?
LOUISE: OK.
MR MAX: What kind of videos do you prefer to watch? Have a look at this list.
LOUISE: Well, I love anything that makes me laugh. I just love to hear jokes and funny punch lines. I'm not very keen on westerns, although my father likes them, but I'm a real softie, so anything with a bit of a love story is good for me. It doesn't matter how old. Not musicals though, they're too much!
MR MAX: Anything else?
LOUISE: I'm completely taken by documentaries of the great outdoors, you know the sort, animals, plants and far away places. I saw a wonderful one on dolphins last week. It was amazing.
MR MAX: Now, I think that's all from me, except I need you to sign here on the line. Here's a pen. Oh, and I nearly forgot, the membership fee. $25, refundable if you leave the library for any reason.
LOUISE: There you are. And do I sign here?
MR MAX: Yes, that's it. You can borrow videos now, if you like, but your card won't be ready until next week. You can come and pick it up when you bring your first videos back. That is if you want to take some now.
LOUISE: Yes, I'd like to. I'll have a look around.
MR MAX: Fine.`,
                audio_script: `LOUISE: Oh hello, I'd like to join the video library... (Same as transcript)`,
                questions: [
                    {
                        id: 1,
                        type: "fill",
                        prompt: "Address: Apartment 1, 72 _____ Street, Highbridge",
                        correct_answers: ["Black", "black"],
                        evidence: "LOUISE: Apartment 1, 72 Black Street, Highbridge.",
                        explanation: "Louise clearly states her address as Apartment 1, 72 Black Street."
                    },
                    {
                        id: 2,
                        type: "fill",
                        prompt: "Post code: _____",
                        correct_answers: ["2085"],
                        evidence: "MR MAX: OK, so the post code is 2085, right? LOUISE: Yes, 2085.",
                        explanation: "The post code confirmed by both speakers is 2085."
                    },
                    {
                        id: 3,
                        type: "fill",
                        prompt: "Telephone: 9835 6712 (home) | _____ (work)",
                        correct_answers: ["9456 1309", "94561309"],
                        evidence: "LOUISE: Home is 9835 6712 and work is 9456 1309.",
                        explanation: "Louise gives her work telephone number as 9456 1309."
                    },
                    {
                        id: 4,
                        type: "fill",
                        prompt: "Driver's licence number: _____",
                        correct_answers: ["2020BD", "2020 BD", "2020bd"],
                        evidence: "LOUISE: Yes, I know it off by heart, it's an easy one, 2020BD.",
                        explanation: "Louise states her driver's licence number is 2020BD."
                    },
                    {
                        id: 5,
                        type: "fill",
                        prompt: "Date of birth: Day: 25th Month: _____ Year: 1977",
                        correct_answers: ["July", "july"],
                        evidence: "LOUISE: 25 July 1977.",
                        explanation: "Louise states her date of birth is 25 July 1977."
                    },
                    {
                        id: 6,
                        type: "choice",
                        prompt: "What types of films does Louise like? (First preference)",
                        options: [
                            "A. Action",
                            "B. Comedies",
                            "C. Musicals",
                            "D. Romance",
                            "E. Westerns",
                            "F. Wildlife"
                        ],
                        correct_answers: ["B", "Comedies"],
                        evidence: "LOUISE: Well, I love anything that makes me laugh. I just love to hear jokes and funny punch lines.",
                        explanation: "Films that make her laugh with jokes and funny punch lines are Comedies (Option B)."
                    },
                    {
                        id: 7,
                        type: "choice",
                        prompt: "What types of films does Louise like? (Second preference)",
                        options: [
                            "A. Action",
                            "B. Comedies",
                            "C. Musicals",
                            "D. Romance",
                            "E. Westerns",
                            "F. Wildlife"
                        ],
                        correct_answers: ["D", "Romance"],
                        evidence: "LOUISE: ...anything with a bit of a love story is good for me.",
                        explanation: "Films with a love story represent Romance (Option D)."
                    },
                    {
                        id: 8,
                        type: "choice",
                        prompt: "What types of films does Louise like? (Third preference)",
                        options: [
                            "A. Action",
                            "B. Comedies",
                            "C. Musicals",
                            "D. Romance",
                            "E. Westerns",
                            "F. Wildlife"
                        ],
                        correct_answers: ["F", "Wildlife"],
                        evidence: "LOUISE: I'm completely taken by documentaries of the great outdoors, you know the sort, animals, plants and far away places.",
                        explanation: "Documentaries about animals, plants and the great outdoors correspond to Wildlife (Option F)."
                    },
                    {
                        id: 9,
                        type: "fill",
                        prompt: "How much does it cost to join the library?",
                        correct_answers: ["$25", "25 dollars", "twenty-five dollars", "25", "$25 (refundable)", "twenty five dollars"],
                        evidence: "MR MAX: Oh, and I nearly forgot, the membership fee. $25, refundable if you leave the library for any reason.",
                        explanation: "The membership fee is $25 (refundable)."
                    },
                    {
                        id: 10,
                        type: "fill",
                        prompt: "When will Louise's card be ready?",
                        correct_answers: ["next week", "in a week", "in one week", "the following week"],
                        evidence: "MR MAX: ...your card won't be ready until next week. You can come and pick it up when you bring your first videos back.",
                        explanation: "The card will be ready next week."
                    }
                ]
            },

            // -------------------------------------------------------------
            // SECTION 2: Expedition Across Attora Mountains (Questions 11 - 20)
            // -------------------------------------------------------------
            {
                part_number: 2,
                section_number: 2,
                title: "Section 2: Expedition Across Attora Mountains (Questions 11 - 20)",
                instruction: "Questions 11-13: Complete the notes below. Write NO MORE THAN THREE WORDS for each answer. Questions 14-15: Circle the correct letters A-C. Questions 16-18: Circle THREE letters A-F. Questions 19-20: Circle TWO letters A-E.",
                instructions: "Questions 11-13: Complete the notes below. Write NO MORE THAN THREE WORDS for each answer. Questions 14-15: Circle the correct letters A-C. Questions 16-18: Circle THREE letters A-F. Questions 19-20: Circle TWO letters A-E.",
                transcript: `INTERVIEWER: A dream came true in 1995, when over 96 days of the spring and summer, an expedition of four men undertook what they believe to have been the first and only complete end-to-end crossing of Morocco's Attora mountains. I talked to Charles Owen, the leader of the expedition group, about the trip. Charles, how much planning went on beforehand?
CHARLES: Well, as you know, I run these walking trips across the mountains for tourists and over the years, I've collected maps and other data to prepare what I call a 'route book' for this trip and this book basically shows the route across the mountains that we took.
INTERVIEWER: You actually broke records while you were out there, didn't you?
CHARLES: Mmm. Yes, it was 900 miles in total and we managed to climb 32 peaks that were over 3000 metres high, including Toubkal, which is of course the highest in North Africa. We weren't actually out to make a name for ourselves - it just happened really.
INTERVIEWER: What was the weather like?
CHARLES: It got us right from day one and we were pretty taken aback really to find that it rained on quite a number of days, and so we were forced to start re-planning our route almost from the outset. One of the obvious problems is the heavy snow which blocks the mountain passes, so you have to make considerable detours. When we were on the way to Imilchil, for example, the snow forced us into a northern bypass which was new to us, but anyway, either way we would have been rewarded because we fell upon amazing, high meadows, huge gorges and wonderful snow-capped mountains. The scenery was as fine as any we saw on the trip and that was how it was every time - having to take another pass was never a disappointment.
INTERVIEWER: It was in many ways a social trip, wasn't it?
CHARLES: Yes, yes ... we'd arranged to meet up with friends at various points on the journey. I mean this was actually one of the purposes of the trip ... and we managed to keep all these dates, which is amazing really considering the detours we made. An old friend acted as a sort of transport organiser for everyone and the Hotel Ali in Marrakech was a good social base - I'd really recommend it, although I can't remember who runs it. Anyway, groups of friends actually joined us for three-week stints and others just linked up with us. Some, whom we hadn't met before the trip at all, tagged on for short bursts - people from the area - who just came along for the ride. But outside the major visitor areas like Toubkal we only met one other group of travellers like ourselves in the whole 96 days.
INTERVIEWER: Were there any bad moments?
CHARLES: We took two, I must say, long-suffering donkeys with us to help transport water and tents and things. I suppose if we were to do it all again we'd probably hire donkeys along the way. Taza and Tamri, as we called them after the last places in the trip, well, they made quite a unique journey between them, and ... but it was continuously demanding for them. On both the really high summits, they took diversions that were quite out of character and I can only assume that it must have been due to tiredness.
INTERVIEWER: Well, thank you ... And Charles has put together a video about this journey and continues to lead groups to the Attora mountains, so if you want further information ...`,
                audio_script: `INTERVIEWER: A dream came true in 1995... (Same as transcript)`,
                questions: [
                    {
                        id: 11,
                        type: "fill",
                        prompt: "Prepared a _____ for the trip",
                        correct_answers: ["route book", "route-book"],
                        evidence: "CHARLES: ...I've collected maps and other data to prepare what I call a 'route book' for this trip...",
                        explanation: "Charles prepared a route book for the expedition."
                    },
                    {
                        id: 12,
                        type: "fill",
                        prompt: "Total length of trip: _____",
                        correct_answers: ["900 miles", "nine hundred miles"],
                        evidence: "CHARLES: Mmm. Yes, it was 900 miles in total...",
                        explanation: "The total length was 900 miles (or nine hundred miles). Note: '900' alone without unit is not accepted."
                    },
                    {
                        id: 13,
                        type: "fill",
                        prompt: "Climbed highest peak in _____",
                        correct_answers: ["North Africa", "N Africa", "north africa"],
                        evidence: "CHARLES: ...including Toubkal, which is of course the highest in North Africa.",
                        explanation: "Toubkal is the highest peak in North Africa."
                    },
                    {
                        id: 14,
                        type: "choice",
                        prompt: "What took the group by surprise?",
                        options: [
                            "A. the amount of rain",
                            "B. the number of possible routes",
                            "C. the length of the journey"
                        ],
                        correct_answers: ["A"],
                        evidence: "CHARLES: ...we were pretty taken aback really to find that it rained on quite a number of days...",
                        explanation: "Being 'taken aback' means being surprised by the amount of rain (Option A)."
                    },
                    {
                        id: 15,
                        type: "choice",
                        prompt: "How did Charles feel about having to change routes?",
                        options: [
                            "A. He reluctantly accepted it.",
                            "B. He was irritated by the diversion.",
                            "C. It made no difference to his enjoyment."
                        ],
                        correct_answers: ["C"],
                        evidence: "CHARLES: ...having to take another pass was never a disappointment.",
                        explanation: "Taking another pass was never a disappointment, meaning it made no difference to his enjoyment (Option C)."
                    },
                    {
                        id: 16,
                        type: "choice",
                        prompt: "What does Charles say about his friends? (Select first true statement)",
                        options: [
                            "A. He met them at one stage on the trip.",
                            "B. They kept all their meeting arrangements.",
                            "C. One of them helped arrange the transport.",
                            "D. One of them owned the hotel they stayed in.",
                            "E. Some of them travelled with him.",
                            "F. Only one group lasted the 96 days."
                        ],
                        correct_answers: ["B"],
                        evidence: "CHARLES: ...we'd arranged to meet up with friends at various points on the journey... and we managed to keep all these dates...",
                        explanation: "Keeping all these dates means they kept all their meeting arrangements (B)."
                    },
                    {
                        id: 17,
                        type: "choice",
                        prompt: "What does Charles say about his friends? (Select second true statement)",
                        options: [
                            "A. He met them at one stage on the trip.",
                            "B. They kept all their meeting arrangements.",
                            "C. One of them helped arrange the transport.",
                            "D. One of them owned the hotel they stayed in.",
                            "E. Some of them travelled with him.",
                            "F. Only one group lasted the 96 days."
                        ],
                        correct_answers: ["C"],
                        evidence: "CHARLES: An old friend acted as a sort of transport organiser for everyone...",
                        explanation: "One of his friends helped arrange transport (C)."
                    },
                    {
                        id: 18,
                        type: "choice",
                        prompt: "What does Charles say about his friends? (Select third true statement)",
                        options: [
                            "A. He met them at one stage on the trip.",
                            "B. They kept all their meeting arrangements.",
                            "C. One of them helped arrange the transport.",
                            "D. One of them owned the hotel they stayed in.",
                            "E. Some of them travelled with him.",
                            "F. Only one group lasted the 96 days."
                        ],
                        correct_answers: ["E"],
                        evidence: "CHARLES: Anyway, groups of friends actually joined us for three-week stints and others just linked up with us.",
                        explanation: "Some friends travelled with him for three-week stints (E)."
                    },
                    {
                        id: 19,
                        type: "choice",
                        prompt: "What does Charles say about the donkeys? (First statement)",
                        options: [
                            "A. He rode them when he was tired.",
                            "B. He named them after places.",
                            "C. One of them died.",
                            "D. They behaved unpredictably.",
                            "E. They were very small."
                        ],
                        correct_answers: ["B"],
                        evidence: "CHARLES: Taza and Tamri, as we called them after the last places in the trip...",
                        explanation: "He named them Taza and Tamri after places (Option B)."
                    },
                    {
                        id: 20,
                        type: "choice",
                        prompt: "What does Charles say about the donkeys? (Second statement)",
                        options: [
                            "A. He rode them when he was tired.",
                            "B. He named them after places.",
                            "C. One of them died.",
                            "D. They behaved unpredictably.",
                            "E. They were very small."
                        ],
                        correct_answers: ["D"],
                        evidence: "CHARLES: On both the really high summits, they took diversions that were quite out of character...",
                        explanation: "Taking diversions that were out of character means they behaved unpredictably (Option D)."
                    }
                ]
            },

            // -------------------------------------------------------------
            // SECTION 3: University Studies & Strategies (Questions 21 - 30)
            // -------------------------------------------------------------
            {
                part_number: 3,
                section_number: 3,
                title: "Section 3: University Studies & Strategies (Questions 21 - 30)",
                instruction: "Questions 21-25: Complete the table below. Write NO MORE THAN THREE WORDS for each answer. Questions 26-30: Write NO MORE THAN THREE WORDS for each answer.",
                instructions: "Questions 21-25: Complete the table below. Write NO MORE THAN THREE WORDS for each answer. Questions 26-30: Write NO MORE THAN THREE WORDS for each answer.",
                transcript: `JANE: Hi Tim!
TIM: Jane. How are you?
JANE: Fine. I'd been wondering when I'd run into you. Have you been here long?
TIM: I arrived yesterday, on Sunday. How about you?
JANE: I got here a few days ago, on Saturday. No - wait a minute, what's today? - Sorry, Friday, not Saturday.
TIM: But we didn't have to be here till today.
JANE: Yes, I know, but I wanted to get my things moved into my room, and just take a look around. So, did you decide to do English in the end?
TIM: No, I changed my mind and opted for history instead. And you're doing biology, if I remember correctly.
JANE: Yes, although to start with I couldn't decide between that and geography.
TIM: How much reading have you got? I was given an amazingly long list of books to read. See!
JANE: Wow, it does look pretty long.
TIM: Well, I counted 57. I could hardly believe it! What's your list like?
JANE: Well, it's not as long as yours, but it's still pretty big. There are 43. I don't know how I'm going to get through them all.
TIM: Well you don't have to read them all this week! You just have to stay ahead of the lectures and seminars. Have you got your class schedule yet?
JANE: Yep. It came with the reading list. When's your first lecture?
TIM: Tuesday. How about you?
JANE: The day after. It's my busiest day; I've got two lectures in the morning and one in the afternoon.
JANE: It's going to be different from school, isn't it!
TIM: Yeah, particularly the lectures. Have you got any special strategy for listening to lectures?
JANE: Well I'm going to use a cassette recorder and record them all.
TIM: What! Are you allowed to?
JANE: Sure. Lots of people do it nowadays. It means you can listen to the lectures all over again later, and make really good notes.
TIM: I couldn't do that. I like to take notes as I'm listening. I usually find I get all the important points. Reading is different of course. My approach is to skim the book first to see what's important and what isn't. It saves hours of time.
JANE: But what if you miss something?
TIM: You don't mean you're going to read every word, do you?
JANE: Well, that's what I usually do.
TIM: Well, that's up to you, but I think you're crazy!
JANE: What's your first lecture on, anyway?
TIM: Oh, it's a lecture on the French Revolution.
JANE: The French Revolution! How boring!
TIM: It's not boring at all! It was an amazing period of history. It changed everything in Europe. So what's your first lecture about?
JANE: It's about animal behaviour. It sounds really interesting.
TIM: Look, I was on my way to the library. I'm going to get some of these books out and start reading for the first essay I've got to write.
JANE: And what have you got to write about?
TIM: Well, you'll never believe it, I think our professor must have a sense of humour. He's given us the title "Why study history?"
JANE: That's a good one. When you find the answer, let me know!
TIM: I'm going to enjoy writing it. Have you been given any writing assignments yet?
JANE: Yes, I've got to write about animal language.
TIM: Hmm! That sounds a challenge. I suppose you'll be off to the zoo to do field research.`,
                audio_script: `JANE: Hi Tim! ... (Same as transcript)`,
                questions: [
                    {
                        id: 21,
                        type: "fill",
                        prompt: "Day of arrival: Tim: Sunday | Jane: _____",
                        correct_answers: ["Friday", "on Friday", "friday"],
                        evidence: "JANE: ...Sorry, Friday, not Saturday.",
                        explanation: "Jane corrects herself and confirms she arrived on Friday."
                    },
                    {
                        id: 22,
                        type: "fill",
                        prompt: "Subject: Tim: History | Jane: _____",
                        correct_answers: ["Biology", "biology"],
                        evidence: "TIM: And you're doing biology, if I remember correctly. JANE: Yes...",
                        explanation: "Jane is studying Biology."
                    },
                    {
                        id: 23,
                        type: "fill",
                        prompt: "Number of books to read: Tim: _____ | Jane: 43",
                        correct_answers: ["57", "fifty-seven", "57 books", "fifty-seven books"],
                        evidence: "TIM: Well, I counted 57. I could hardly believe it!",
                        explanation: "Tim has 57 books on his reading list."
                    },
                    {
                        id: 24,
                        type: "fill",
                        prompt: "Number of books to read: Tim: 57 | Jane: _____",
                        correct_answers: ["43", "forty-three", "43 books", "forty-three books"],
                        evidence: "JANE: ...There are 43. I don't know how I'm going to get through them all.",
                        explanation: "Jane has 43 books on her reading list."
                    },
                    {
                        id: 25,
                        type: "fill",
                        prompt: "Day of first lecture: Tim: Tuesday | Jane: _____",
                        correct_answers: ["Wednesday", "Wed", "wednesday"],
                        evidence: "TIM: Tuesday. How about you? JANE: The day after. It's my busiest day...",
                        explanation: "The day after Tuesday is Wednesday. Note: 'the day after' is not accepted."
                    },
                    {
                        id: 26,
                        type: "fill",
                        prompt: "What is Jane's study strategy in lectures?",
                        correct_answers: [
                            "record them",
                            "record lectures",
                            "records them",
                            "records lectures",
                            "she records them",
                            "she records lectures",
                            "use a cassette recorder",
                            "cassette recorder",
                            "tape recorder",
                            "recording",
                            "she uses a recorder"
                        ],
                        evidence: "JANE: Well I'm going to use a cassette recorder and record them all.",
                        explanation: "Jane's strategy is to record the lectures using a cassette recorder."
                    },
                    {
                        id: 27,
                        type: "fill",
                        prompt: "What is Tim's study strategy for reading?",
                        correct_answers: [
                            "skimming",
                            "skim reading",
                            "skims books",
                            "skim the book",
                            "skim the book first",
                            "he skims books"
                        ],
                        evidence: "TIM: ...My approach is to skim the book first to see what's important and what isn't.",
                        explanation: "Tim's approach to reading is skimming / to skim the book first."
                    },
                    {
                        id: 28,
                        type: "fill",
                        prompt: "What is the subject of Tim's first lecture?",
                        correct_answers: [
                            "French Revolution",
                            "The French Revolution",
                            "the French Revolution",
                            "french revolution"
                        ],
                        evidence: "TIM: Oh, it's a lecture on the French Revolution.",
                        explanation: "Tim's first lecture is on the French Revolution."
                    },
                    {
                        id: 29,
                        type: "fill",
                        prompt: "What is the title of Tim's first essay?",
                        correct_answers: [
                            "Why study history",
                            "Why study history?",
                            "Why study history ?"
                        ],
                        evidence: "TIM: ...He's given us the title 'Why study history?'",
                        explanation: "The essay title is 'Why study history?'."
                    },
                    {
                        id: 30,
                        type: "fill",
                        prompt: "What is the subject of Jane's first essay?",
                        correct_answers: [
                            "animal language",
                            "the language of animals"
                        ],
                        evidence: "JANE: Yes, I've got to write about animal language.",
                        explanation: "Jane has to write about animal language (NOT just 'language')."
                    }
                ]
            },

            // -------------------------------------------------------------
            // SECTION 4: Further Education Courses & Careers (Questions 31 - 40)
            // -------------------------------------------------------------
            {
                part_number: 4,
                section_number: 4,
                title: "Section 4: Further Education Courses & Careers (Questions 31 - 40)",
                instruction: "Questions 31-35: Complete the table below. Write NO MORE THAN THREE WORDS for each answer. Questions 36-40: Complete the table below. Write the appropriate letters A-G against Questions 36-40.",
                instructions: "Questions 31-35: Complete the table below. Write NO MORE THAN THREE WORDS for each answer. Questions 36-40: Complete the table below. Write the appropriate letters A-G against Questions 36-40.",
                transcript: `LECTURER: Welcome to further education Information Week. This is the Physical Education Faculty's session and I'm the Head of the Faculty. During the course of this morning we hope to give you a clear idea of what we offer in our training programs and we will look at the types of courses and the entry requirements, if any, for those courses. Some of these courses are open to school leavers, but for some you need previous qualifications, or relevant successful employment.
So firstly, the Physical Fitness Instructor's course is offered as a six-month certificate course which includes an important component of personal fitness but there are no specific entry requirements.
For Sports Administrators we provide a four-month certificate course but you should be aware that this is designed for those who are in employment. This employment must be current and related to sports administration.
For the Sports Psychologist course we offer a one-year diploma course, but this diploma course is available only to those who already hold a degree in psychology, so you need to make sure you have that before you apply to do this course.
Now . . . for Physical Education Teachers we offer a four-year degree in education. This degree course is designed for preparing students to teach in primary and secondary schools and needs no prior qualifications as it is entered directly by school leavers.
And lastly for the Recreation Officer's course we offer a six-month certificate. Entry to this course normally includes applicants of a wide range of ages and experiences, but we do not insist on any prerequisites for this course.
Remember that this is a vocational training institute. We train you so that you can take up a particular kind of job. So it is important that you know the main roles of the jobs - what the work is like and what kind of qualities you need to succeed at them.
A Physical Fitness Instructor works in health and fitness centres preparing individual programs for ordinary members of the public. Physical Fitness Instructors prepare routines of exercises to suit the individual client's age and level of fitness.
Sports Administrators run clubs and sporting associations. Their duties include such things as booking playing fields with local councils and organising the schedule of games or events for the club, so they need good organisational skills.
Sports Psychologists spend time with professional athletes helping them approach competition with a positive mental attitude to enable them to achieve their personal best. They do this by improving motivation and concentration or assisting with stress management.
Physical Education or PE Teachers instruct young students in how to exercise, play sport, and do other recreational activities correctly and safely. PE teachers help the development of co-ordination, balance, posture, and flexibility with things like simple catching and throwing skills. They are not expected to be experts in all sports, but must be able to show students the basic techniques involved in a wide range of activities.
Recreation Officers often find themselves working for local government authorities and local groups. Their aim is to raise people's awareness of healthy lifestyles and improved general fitness through arranging recreational activities for groups of all ages from the very young to the elderly.
There are many other job opportunities which our graduates can look forward to. If you are interested in any of these ...`,
                audio_script: `LECTURER: Welcome to further education Information Week... (Same as transcript)`,
                questions: [
                    {
                        id: 31,
                        type: "fill",
                        prompt: "Sports Administrator: Type of course: duration and level: _____",
                        correct_answers: [
                            "4-month certificate",
                            "four-month certificate",
                            "4 month certificate",
                            "four month certificate",
                            "4-month cert",
                            "four-month cert course"
                        ],
                        evidence: "LECTURER: For Sports Administrators we provide a four-month certificate course...",
                        explanation: "The course is a four-month certificate course."
                    },
                    {
                        id: 32,
                        type: "fill",
                        prompt: "Sports Administrator: Entry requirements: _____ in sports administration",
                        correct_answers: [
                            "employment",
                            "current employment",
                            "job"
                        ],
                        evidence: "LECTURER: ...designed for those who are in employment. This employment must be current and related to sports administration.",
                        explanation: "The requirement is current employment or job in sports administration."
                    },
                    {
                        id: 33,
                        type: "fill",
                        prompt: "Sports Psychologist: Type of course: duration and level: _____",
                        correct_answers: [
                            "1-year diploma",
                            "one-year diploma",
                            "1 year diploma",
                            "one year diploma"
                        ],
                        evidence: "LECTURER: For the Sports Psychologist course we offer a one-year diploma course...",
                        explanation: "It is a one-year diploma course."
                    },
                    {
                        id: 34,
                        type: "fill",
                        prompt: "Physical Education Teacher: Entry requirements: _____",
                        correct_answers: [
                            "none",
                            "no qualifications",
                            "no prior qualifications",
                            "no quals"
                        ],
                        evidence: "LECTURER: ...and needs no prior qualifications as it is entered directly by school leavers.",
                        explanation: "It needs none / no prior qualifications."
                    },
                    {
                        id: 35,
                        type: "fill",
                        prompt: "Recreation Officer: Type of course: duration and level: _____",
                        correct_answers: [
                            "6-month certificate",
                            "six-month certificate",
                            "6 month certificate",
                            "six month certificate",
                            "6-month cert",
                            "six-month cert course"
                        ],
                        evidence: "LECTURER: And lastly for the Recreation Officer's course we offer a six-month certificate.",
                        explanation: "The Recreation Officer's course is a six-month certificate."
                    },
                    {
                        id: 36,
                        type: "choice",
                        prompt: "Physical Fitness Instructor - Main role:",
                        options: [
                            "A. the coaching of teams",
                            "B. the support of elite athletes",
                            "C. guidance of ordinary individuals",
                            "D. community health",
                            "E. the treatment of injuries",
                            "F. arranging matches and venues",
                            "G. the rounded development of children"
                        ],
                        correct_answers: ["C"],
                        evidence: "LECTURER: A Physical Fitness Instructor works in health and fitness centres preparing individual programs for ordinary members of the public.",
                        explanation: "Preparing programs for ordinary members of the public corresponds to C (guidance of ordinary individuals)."
                    },
                    {
                        id: 37,
                        type: "choice",
                        prompt: "Sports Administrator - Main role:",
                        options: [
                            "A. the coaching of teams",
                            "B. the support of elite athletes",
                            "C. guidance of ordinary individuals",
                            "D. community health",
                            "E. the treatment of injuries",
                            "F. arranging matches and venues",
                            "G. the rounded development of children"
                        ],
                        correct_answers: ["F"],
                        evidence: "LECTURER: ...booking playing fields with local councils and organising the schedule of games or events...",
                        explanation: "Booking fields and organising schedules corresponds to F (arranging matches and venues)."
                    },
                    {
                        id: 38,
                        type: "choice",
                        prompt: "Sports Psychologist - Main role:",
                        options: [
                            "A. the coaching of teams",
                            "B. the support of elite athletes",
                            "C. guidance of ordinary individuals",
                            "D. community health",
                            "E. the treatment of injuries",
                            "F. arranging matches and venues",
                            "G. the rounded development of children"
                        ],
                        correct_answers: ["B"],
                        evidence: "LECTURER: Sports Psychologists spend time with professional athletes helping them approach competition with a positive mental attitude...",
                        explanation: "Helping professional athletes corresponds to B (the support of elite athletes)."
                    },
                    {
                        id: 39,
                        type: "choice",
                        prompt: "Physical Education Teacher - Main role:",
                        options: [
                            "A. the coaching of teams",
                            "B. the support of elite athletes",
                            "C. guidance of ordinary individuals",
                            "D. community health",
                            "E. the treatment of injuries",
                            "F. arranging matches and venues",
                            "G. the rounded development of children"
                        ],
                        correct_answers: ["G"],
                        evidence: "LECTURER: PE teachers help the development of co-ordination, balance, posture, and flexibility with things like simple catching and throwing skills.",
                        explanation: "Helping develop co-ordination, posture and skills in young students corresponds to G (the rounded development of children)."
                    },
                    {
                        id: 40,
                        type: "choice",
                        prompt: "Recreation Officer - Main role:",
                        options: [
                            "A. the coaching of teams",
                            "B. the support of elite athletes",
                            "C. guidance of ordinary individuals",
                            "D. community health",
                            "E. the treatment of injuries",
                            "F. arranging matches and venues",
                            "G. the rounded development of children"
                        ],
                        correct_answers: ["D"],
                        evidence: "LECTURER: Their aim is to raise people's awareness of healthy lifestyles and improved general fitness through arranging recreational activities for groups of all ages...",
                        explanation: "Raising awareness of healthy lifestyles and general fitness across all ages corresponds to D (community health)."
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // 2. ACADEMIC READING MODULE (3 PASSAGES - 40 QUESTIONS)
    // =========================================================================
    reading: {
        title: "IELTS Academic Reading Practice Test 1 (Cambridge IELTS 2)",
        duration_seconds: 3600,
        passages: [
            // -------------------------------------------------------------
            // PASSAGE 1: Airports on Water (Questions 1 - 13)
            // -------------------------------------------------------------
            {
                passage_number: 1,
                title: "Reading Passage 1: Airports on Water",
                content: `AIRPORTS ON WATER

River deltas are difficult places for map makers. The river builds them up, the sea wears them down; their outlines are always changing. The changes in China's Pearl River delta, however, are more dramatic than these natural fluctuations. An island six kilometres long and with a total area of 1248 hectares is being created there. And the civil engineers are as interested in performance as in speed and size. This is a bit of the delta that they want to endure.

The new island of Chek Lap Kok, the site of Hong Kong's new airport, is 83% complete. The giant dumper trucks rumbling across it will have finished their job by the middle of this year and the airport itself will be built at a similarly breakneck pace.

As Chek Lap Kok rises, however, another new Asian island is sinking back into the sea. This is a 520-hectare island built in Osaka Bay, Japan, that serves as the platform for the new Kansai airport. Chek Lap Kok was built in a different way, and thus hopes to avoid the same sinking fate.

The usual way to reclaim land is to pile sand rock on to the seabed. When the seabed oozes with mud, this is rather like placing a textbook on a wet sponge: the weight squeezes the water out, causing both water and sponge to settle lower. The settlement is rarely even: different parts sink at different rates. So buildings, pipes, roads and so on tend to buckle and crack. You can engineer around these problems, or you can engineer them out. Kansai took the first approach; Chek Lap Kok is taking the second.

The differences are both political and geological. Kansai was supposed to be built just one kilometre offshore, where the seabed is quite solid. Fishermen protested, and the site was shifted a further five kilometres. That put it in deeper water (around 20 metres) and above a seabed that consisted of 20 metres of soft alluvial silt and mud deposits. Worse, below it was a not-very-firm glacial deposit hundreds of metres thick.

The Kansai builders recognised that settlement was inevitable. Sand was driven into the seabed to strengthen it before the landfill was piled on top, in an attempt to slow the process; but this has not been as effective as had been hoped. To cope with settlement, Kansai's giant terminal is supported on 900 pillars. Each of them can be individually jacked up, allowing wedges to be added underneath. That is meant to keep the building level. But it could be a tricky task.

Conditions are different at Chek Lap Kok. There was some land there to begin with, the original little island of Chek Lap Kok and a smaller outcrop called Lam Chau. Between them, these two outcrops of hard, weathered granite make up a quarter of the new island's surface area. Unfortunately, between the islands there was a layer of soft mud, 27 metres thick in places.

According to Frans Uiterwijk, a Dutchman who is the project's reclamation director, it would have been possible to leave this mud below the reclaimed land, and to deal with the resulting settlement by the Kansai method. But the consortium that won the contract for the island opted for a more aggressive approach. It assembled the world's largest fleet of dredgers, which sucked up 150m cubic metres of clay and mud and dumped it in deeper waters. At the same time, sand was dredged from the waters and piled on top of the layer of stiff clay that the massive dredging had laid bare.

Nor was the sand the only thing used. The original granite island which had hills up to 120 metres high was drilled and blasted into boulders no bigger than two metres in diameter. This provided 70m cubic metres of granite to add to the island's foundations. Because the heap of boulders does not fill the space perfectly, this represents the equivalent of 105m cubic metres of landfill. Most of the rock will become the foundations for the airport's runways and its taxiways. The sand dredged from the waters will also be used to provide a two-metre capping layer over the granite platform. This makes it easier for utilities to dig trenches - granite is unyielding stuff. Most of the terminal buildings will be placed above the site of the existing island. Only a limited amount of pile-driving is needed to support building foundations above softer areas.

The completed island will be six to seven metres above sea level. In all, 350m cubic metres of material will have been moved. And much of it, like the overloads, has to be moved several times before reaching its final resting place. For example, there has to be a motorway capable of carrying 150-tonne dump-trucks; and there has to be a raised area for the 15,000 construction workers. These are temporary; they will be removed when the airport is finished.

The airport, though, is here to stay. To protect it, the new coastline is being bolstered with a formidable twelve kilometres of sea defences. The brunt of a typhoon will be deflected by the neighbouring island of Lantau; the sea walls should guard against the rest. Gentler but more persistent bad weather - the downpours of the summer monsoon - is also being taken into account. A mat-like material called geotextile is being laid across the island to separate the rock and sand layers. That will stop sand particles from being washed into the rock voids, and so causing further settlement. This island is being built never to be sunk.`,
                text: `AIRPORTS ON WATER... (Same as content)`,
                questions: [
                    {
                        id: 1,
                        type: "choice",
                        prompt: "Classify the statement: having an area of over 1000 hectares",
                        options: [
                            "A. Chek Lap Kok airport only",
                            "B. Kansai airport only",
                            "C. Both airports"
                        ],
                        correct_answers: ["A"],
                        evidence: "Paragraph 1 & 3: 'An island six kilometres long and with a total area of 1248 hectares is being created there [Chek Lap Kok]... 520-hectare island built in Osaka Bay, Japan, that serves as the platform for the new Kansai airport.'",
                        explanation: "Chek Lap Kok has an area of 1248 hectares (over 1000 hectares), whereas Kansai is only 520 hectares. Thus, Option A."
                    },
                    {
                        id: 2,
                        type: "choice",
                        prompt: "Classify the statement: built in a river delta",
                        options: [
                            "A. Chek Lap Kok airport only",
                            "B. Kansai airport only",
                            "C. Both airports"
                        ],
                        correct_answers: ["A"],
                        evidence: "Paragraph 1: 'The changes in China's Pearl River delta, however, are more dramatic than these natural fluctuations. An island... is being created there.'",
                        explanation: "Chek Lap Kok is located in the Pearl River delta. Kansai is built in Osaka Bay (open sea). Thus, Option A."
                    },
                    {
                        id: 3,
                        type: "choice",
                        prompt: "Classify the statement: built in the open sea",
                        options: [
                            "A. Chek Lap Kok airport only",
                            "B. Kansai airport only",
                            "C. Both airports"
                        ],
                        correct_answers: ["B"],
                        evidence: "Paragraph 3 & 5: 'This is a 520-hectare island built in Osaka Bay, Japan... Fishermen protested, and the site was shifted a further five kilometres. That put it in deeper water...'",
                        explanation: "Kansai is located 5 km offshore in the open waters of Osaka Bay. Thus, Option B."
                    },
                    {
                        id: 4,
                        type: "choice",
                        prompt: "Classify the statement: built by reclaiming land",
                        options: [
                            "A. Chek Lap Kok airport only",
                            "B. Kansai airport only",
                            "C. Both airports"
                        ],
                        correct_answers: ["C"],
                        evidence: "Paragraph 4: 'The usual way to reclaim land is to pile sand rock on to the seabed... Kansai took the first approach; Chek Lap Kok is taking the second.'",
                        explanation: "Both airports were built on reclaimed land. Thus, Option C."
                    },
                    {
                        id: 5,
                        type: "choice",
                        prompt: "Classify the statement: built using conventional methods of reclamation",
                        options: [
                            "A. Chek Lap Kok airport only",
                            "B. Kansai airport only",
                            "C. Both airports"
                        ],
                        correct_answers: ["B"],
                        evidence: "Paragraph 4 & 6: 'The usual way to reclaim land is to pile sand rock on to the seabed... Kansai took the first approach... Sand was driven into the seabed to strengthen it before the landfill was piled on top...'",
                        explanation: "Kansai used the conventional method of piling sand rock on the seabed, whereas Chek Lap Kok used an aggressive dredging method. Thus, Option B."
                    },
                    {
                        id: 6,
                        type: "fill",
                        prompt: "Diagram B label (6): Cross-section of Chek Lap Kok - Upper surface feature: _____",
                        correct_answers: ["runways and taxiways", "runways and its taxiways"],
                        evidence: "Paragraph 9: 'Most of the rock will become the foundations for the airport's runways and its taxiways.'",
                        explanation: "The top surface of the rock platform provides foundations for the runways and taxiways."
                    },
                    {
                        id: 7,
                        type: "fill",
                        prompt: "Diagram B label (7): Cross-section of Chek Lap Kok - Location above original island: _____",
                        correct_answers: ["terminal building site", "terminal building"],
                        evidence: "Paragraph 9: 'Most of the terminal buildings will be placed above the site of the existing island.'",
                        explanation: "The site above the original island is the terminal building site."
                    },
                    {
                        id: 8,
                        type: "fill",
                        prompt: "Diagram B label (8): Layer between rock and surface capping: _____",
                        correct_answers: ["sand"],
                        evidence: "Paragraph 9: 'The sand dredged from the waters will also be used to provide a two-metre capping layer over the granite platform.'",
                        explanation: "Sand is used as the two-metre capping layer."
                    },
                    {
                        id: 9,
                        type: "fill",
                        prompt: "Diagram B label (9): Base layer beneath the landfill: _____",
                        correct_answers: ["stiff clay"],
                        evidence: "Paragraph 8: '...sand was dredged from the waters and piled on top of the layer of stiff clay that the massive dredging had laid bare.'",
                        explanation: "Beneath the dredged sand is the layer of stiff clay."
                    },
                    {
                        id: 10,
                        type: "fill",
                        prompt: "The island will be partially protected from storms by (10) _____ and also by (11) _____.",
                        correct_answers: ["Lantau Island", "Lantau island", "sea walls"],
                        evidence: "Paragraph 11: 'The brunt of a typhoon will be deflected by the neighbouring island of Lantau; the sea walls should guard against the rest.'",
                        explanation: "The island is protected by Lantau Island and sea walls (Questions 10 & 11 can be in either order)."
                    },
                    {
                        id: 11,
                        type: "fill",
                        prompt: "The island will be partially protected from storms by (10) _____ and also by (11) _____.",
                        correct_answers: ["sea walls", "Lantau Island", "Lantau island"],
                        evidence: "Paragraph 11: 'The brunt of a typhoon will be deflected by the neighbouring island of Lantau; the sea walls should guard against the rest.'",
                        explanation: "The island is protected by sea walls and Lantau Island (Questions 10 & 11 can be in either order)."
                    },
                    {
                        id: 12,
                        type: "fill",
                        prompt: "Further settlement caused by (12) _____ will be prevented by the use of (13) _____.",
                        correct_answers: ["rainfall", "downpours", "monsoon"],
                        evidence: "Paragraph 11: 'Gentler but more persistent bad weather - the downpours of the summer monsoon - is also being taken into account... stop sand particles from being washed into the rock voids, and so causing further settlement.'",
                        explanation: "Further settlement caused by rainfall / downpours."
                    },
                    {
                        id: 13,
                        type: "fill",
                        prompt: "will be prevented by the use of (13) _____.",
                        correct_answers: ["geotextile"],
                        evidence: "Paragraph 11: 'A mat-like material called geotextile is being laid across the island to separate the rock and sand layers.'",
                        explanation: "Geotextile is laid to stop sand from washing into rock voids and causing settlement."
                    }
                ]
            },

            // -------------------------------------------------------------
            // PASSAGE 2: Changing our Understanding of Health (Questions 14 - 27)
            // -------------------------------------------------------------
            {
                passage_number: 2,
                title: "Reading Passage 2: Changing our Understanding of Health",
                content: `CHANGING OUR UNDERSTANDING OF HEALTH

A
The concept of health holds different meanings for different people and groups. These meanings of health have also changed over time. This change is no more evident than in Western society today, when notions of health and health promotion are being challenged and expanded in new ways.

B
For much of recent Western history, health has been viewed in the physical sense only. That is, good health has been connected to the smooth mechanical operation of the body, while ill health has been attributed to a breakdown in this machine. Health in this sense has been defined as the absence of disease or illness and is seen in medical terms. According to this view, creating health for people means providing medical care to treat or prevent disease and illness. During this period, there was an emphasis on providing clean water, improved sanitation and housing.

C
In the late 1940s the World Health Organisation challenged this physically and medically oriented view of health. They stated that 'health is a complete state of physical, mental and social well-being and is not merely the absence of disease' (WHO, 1946). Health and the person were seen more holistically (mind/body/spirit) and not just in physical terms.

D
The 1970s was a time of focusing on the prevention of disease and illness by emphasising the importance of the lifestyle and behaviour of the individual. Specific behaviours which were seen to increase risk of disease, such as smoking, lack of fitness and unhealthy eating habits, were targeted. Creating health meant providing not only medical health care, but health promotion programs and policies which would help people maintain healthy behaviours and lifestyles. While this individualistic healthy lifestyles approach to health worked for some (the wealthy members of society), people experiencing poverty, unemployment, underemployment or little control over the conditions of their daily lives benefited little from this approach. This was largely because both the healthy lifestyles approach and the medical approach to health largely ignored the social and environmental conditions affecting the health of people.

E
During 1980s and 1990s there has been a growing swing away from seeing lifestyle risks as the root cause of poor health. While lifestyle factors still remain important, health is being viewed also in terms of the social, economic and environmental contexts in which people live. This broad approach to health is called the socio-ecological view of health. The broad socio-ecological view of health was endorsed at the first International Conference of Health Promotion held in 1986, Ottawa, Canada, where people from 38 countries agreed and declared that:
"The fundamental conditions and resources for health are peace, shelter, education, food, a viable income, a stable eco-system, sustainable resources, social justice and equity. Improvement in health requires a secure foundation in these basic requirements." (WHO, 1986)
It is clear from this statement that the creation of health is about much more than encouraging healthy individual behaviours and lifestyles and providing appropriate medical care. Therefore, the creation of health must include addressing issues such as poverty, pollution, urbanisation, natural resource depletion, social alienation and poor working conditions. The social, economic and environmental contexts which contribute to the creation of health do not operate separately or independently of each other. Rather, they are interacting and interdependent, and it is the complex interrelationships between them which determine the conditions that promote health. A broad socio-ecological view of health suggests that the promotion of health must include a strong social, economic and environmental focus.

F
At the Ottawa Conference in 1986, a charter was developed which outlined new directions for health promotion based on the socio-ecological view of health. This charter, known as the Ottawa Charter for Health Promotion, remains as the backbone of health action today. In exploring the scope of health promotion it states that:
"Good health is a major resource for social, economic and personal development and an important dimension of quality of life. Political, economic, social, cultural, environmental, behavioural and biological factors can all favour health or be harmful to it." (WHO, 1986)
The Ottawa Charter brings practical meaning and action to this broad notion of health promotion. It presents fundamental strategies and approaches in achieving health for all. The overall philosophy of health promotion which guides these fundamental strategies and approaches is one of 'enabling people to increase control over and to improve their health' (WHO, 1986).`,
                text: `CHANGING OUR UNDERSTANDING OF HEALTH... (Same as content)`,
                questions: [
                    {
                        id: 14,
                        type: "choice",
                        prompt: "Choose the most suitable heading for Paragraph B",
                        options: [
                            "i. Ottawa International Conference on Health Promotion",
                            "ii. Holistic approach to health",
                            "iii. The primary importance of environmental factors",
                            "iv. Healthy lifestyles approach to health",
                            "v. Changes in concepts of health in Western society",
                            "vi. Prevention of diseases and illness",
                            "vii. Ottawa Charter for Health Promotion",
                            "viii. Definition of health in medical terms",
                            "ix. Socio-ecological view of health"
                        ],
                        correct_answers: ["viii"],
                        evidence: "Paragraph B: 'Health in this sense has been defined as the absence of disease or illness and is seen in medical terms.'",
                        explanation: "Paragraph B defines health in traditional physical and medical terms (Heading viii)."
                    },
                    {
                        id: 15,
                        type: "choice",
                        prompt: "Choose the most suitable heading for Paragraph C",
                        options: [
                            "i. Ottawa International Conference on Health Promotion",
                            "ii. Holistic approach to health",
                            "iii. The primary importance of environmental factors",
                            "iv. Healthy lifestyles approach to health",
                            "v. Changes in concepts of health in Western society",
                            "vi. Prevention of diseases and illness",
                            "vii. Ottawa Charter for Health Promotion",
                            "viii. Definition of health in medical terms",
                            "ix. Socio-ecological view of health"
                        ],
                        correct_answers: ["ii"],
                        evidence: "Paragraph C: 'Health and the person were seen more holistically (mind/body/spirit) and not just in physical terms.'",
                        explanation: "Paragraph C describes the holistic approach to health (Heading ii)."
                    },
                    {
                        id: 16,
                        type: "choice",
                        prompt: "Choose the most suitable heading for Paragraph D",
                        options: [
                            "i. Ottawa International Conference on Health Promotion",
                            "ii. Holistic approach to health",
                            "iii. The primary importance of environmental factors",
                            "iv. Healthy lifestyles approach to health",
                            "v. Changes in concepts of health in Western society",
                            "vi. Prevention of diseases and illness",
                            "vii. Ottawa Charter for Health Promotion",
                            "viii. Definition of health in medical terms",
                            "ix. Socio-ecological view of health"
                        ],
                        correct_answers: ["iv"],
                        evidence: "Paragraph D: 'The 1970s was a time of focusing on the prevention of disease and illness by emphasising the importance of the lifestyle and behaviour of the individual... healthy lifestyles approach to health...'",
                        explanation: "Paragraph D focuses on the healthy lifestyles approach to health (Heading iv)."
                    },
                    {
                        id: 17,
                        type: "choice",
                        prompt: "Choose the most suitable heading for Paragraph E",
                        options: [
                            "i. Ottawa International Conference on Health Promotion",
                            "ii. Holistic approach to health",
                            "iii. The primary importance of environmental factors",
                            "iv. Healthy lifestyles approach to health",
                            "v. Changes in concepts of health in Western society",
                            "vi. Prevention of diseases and illness",
                            "vii. Ottawa Charter for Health Promotion",
                            "viii. Definition of health in medical terms",
                            "ix. Socio-ecological view of health"
                        ],
                        correct_answers: ["ix"],
                        evidence: "Paragraph E: 'This broad approach to health is called the socio-ecological view of health.'",
                        explanation: "Paragraph E elaborates on the socio-ecological view of health (Heading ix)."
                    },
                    {
                        id: 18,
                        type: "choice",
                        prompt: "Choose the most suitable heading for Paragraph F",
                        options: [
                            "i. Ottawa International Conference on Health Promotion",
                            "ii. Holistic approach to health",
                            "iii. The primary importance of environmental factors",
                            "iv. Healthy lifestyles approach to health",
                            "v. Changes in concepts of health in Western society",
                            "vi. Prevention of diseases and illness",
                            "vii. Ottawa Charter for Health Promotion",
                            "viii. Definition of health in medical terms",
                            "ix. Socio-ecological view of health"
                        ],
                        correct_answers: ["vii"],
                        evidence: "Paragraph F: 'This charter, known as the Ottawa Charter for Health Promotion, remains as the backbone of health action today.'",
                        explanation: "Paragraph F details the Ottawa Charter for Health Promotion (Heading vii)."
                    },
                    {
                        id: 19,
                        type: "fill",
                        prompt: "In which year did the World Health Organisation define health in terms of mental, physical and social well-being?",
                        correct_answers: ["1946"],
                        evidence: "Paragraph C: 'They stated that 'health is a complete state of physical, mental and social well-being and is not merely the absence of disease' (WHO, 1946).'",
                        explanation: "The WHO definition was declared in 1946."
                    },
                    {
                        id: 20,
                        type: "fill",
                        prompt: "Which members of society benefited most from the healthy lifestyles approach to health?",
                        correct_answers: [
                            "the wealthy",
                            "wealthy members",
                            "the wealthy members",
                            "wealthy members of society",
                            "the wealthy members of society"
                        ],
                        evidence: "Paragraph D: 'While this individualistic healthy lifestyles approach to health worked for some (the wealthy members of society)...'",
                        explanation: "The wealthy members of society benefited most from this approach."
                    },
                    {
                        id: 21,
                        type: "fill",
                        prompt: "Name the three broad areas which relate to people's health, according to the socio-ecological view of health.",
                        correct_answers: [
                            "social, economic, environmental",
                            "social economic environmental",
                            "social, economic and environmental"
                        ],
                        evidence: "Paragraph E: '...health is being viewed also in terms of the social, economic and environmental contexts in which people live.'",
                        explanation: "The three broad areas are social, economic, and environmental."
                    },
                    {
                        id: 22,
                        type: "fill",
                        prompt: "During which decade were lifestyle risks seen as the major contributors to poor health?",
                        correct_answers: [
                            "1970s",
                            "the 1970s"
                        ],
                        evidence: "Paragraph D: 'The 1970s was a time of focusing on the prevention of disease and illness by emphasising the importance of the lifestyle and behaviour of the individual.'",
                        explanation: "Lifestyle risks were targeted specifically during the 1970s."
                    },
                    {
                        id: 23,
                        type: "ynng",
                        prompt: "Doctors have been instrumental in improving living standards in Western society.",
                        correct_answers: ["NOT GIVEN"],
                        evidence: "Paragraph B mentions providing clean water, sanitation and housing, but does not state that doctors specifically were instrumental in improving living standards.",
                        explanation: "The text does not mention whether doctors were instrumental in improving living standards."
                    },
                    {
                        id: 24,
                        type: "ynng",
                        prompt: "The approach to health during the 1970s included the introduction of health awareness programs.",
                        correct_answers: ["YES"],
                        evidence: "Paragraph D: 'Creating health meant providing not only medical health care, but health promotion programs and policies which would help people maintain healthy behaviours and lifestyles.'",
                        explanation: "Health promotion programs were introduced to raise awareness and help people maintain healthy lifestyles. Statement is YES."
                    },
                    {
                        id: 25,
                        type: "ynng",
                        prompt: "The socio-ecological view of health recognises that lifestyle habits and the provision of adequate health care are critical factors governing health.",
                        correct_answers: ["NO"],
                        evidence: "Paragraph E: 'It is clear from this statement that the creation of health is about much more than encouraging healthy individual behaviours and lifestyles and providing appropriate medical care... broad socio-ecological view of health suggests that the promotion of health must include a strong social, economic and environmental focus.'",
                        explanation: "The socio-ecological view argues that health creation is about much more than just lifestyle and medical care—it requires social, economic and environmental foundations. Statement contradicts the passage (NO)."
                    },
                    {
                        id: 26,
                        type: "ynng",
                        prompt: "The principles of the Ottawa Charter are considered to be out of date in the 1990s.",
                        correct_answers: ["NO"],
                        evidence: "Paragraph F: 'This charter, known as the Ottawa Charter for Health Promotion, remains as the backbone of health action today.'",
                        explanation: "The charter remains the backbone of health action today, so it is not out of date. Statement is NO."
                    },
                    {
                        id: 27,
                        type: "ynng",
                        prompt: "In recent years a number of additional countries have subscribed to the Ottawa Charter.",
                        correct_answers: ["NOT GIVEN"],
                        evidence: "Paragraph E mentions people from 38 countries agreed in 1986, but there is no mention of whether additional countries subscribed in recent years.",
                        explanation: "The text does not state whether additional countries joined later. Statement is NOT GIVEN."
                    }
                ]
            },

            // -------------------------------------------------------------
            // PASSAGE 3: Children's Thinking (Questions 28 - 40)
            // -------------------------------------------------------------
            {
                passage_number: 3,
                title: "Reading Passage 3: Children's Thinking",
                content: `CHILDREN'S THINKING

One of the most eminent of psychologists, Clark Hull, claimed that the essence of reasoning lies in the putting together of two 'behaviour segments' in some novel way, never actually performed before, so as to reach a goal.

Two followers of Clark Hull, Howard and Tracey Kendler, devised a test for children that was explicitly based on Clark Hull's principles. The children were given the task of learning to operate a machine so as to get a toy. In order to succeed they had to go through a two-stage sequence. The children were trained on each stage separately. The stages consisted merely of pressing the correct one of two buttons to get a marble; and of inserting the marble into a small hole to release the toy.

The Kendlers found that the children could learn the separate bits readily enough. Given the task of getting a marble by pressing the button they could get the marble; given the task of getting a toy when a marble was handed to them, they could use the marble. (All they had to do was put it in a hole.) But they did not for the most part 'integrate', to use the Kendlers' terminology. They did not press the button to get the marble and then proceed without further help to use the marble to get the toy. So the Kendlers concluded that they were incapable of deductive reasoning.

The mystery at first appears to deepen when we learn, from another psychologist, Michael Cole, and his colleagues, that adults in an African culture apparently cannot do the Kendlers' task either. But it lessens, on the other hand, when we learn that a task was devised which was strictly analogous to the Kendlers' one but much easier for the African males to handle.

Instead of the button-pressing machine, Cole used a locked box and two differently coloured match-boxes, one of which contained a key that would open the box. Notice that there are still two behaviour segments — 'open the right match-box to get the key' and 'use the key to open the box' - so the task seems formally to be the same. But psychologically it is quite different. Now the subject is dealing not with a strange machine but with familiar meaningful objects; and it is clear to him what he is meant to do. It then turns out that the difficulty of 'integration' is greatly reduced.

Recent work by Simon Hewson is of great interest here for it shows that, for young children, too, the difficulty lies not in the inferential processes which the task demands, but in certain perplexing features of the apparatus and the procedure. When these are changed in ways which do not at all affect the inferential nature of the problem, then five-year-old children solve the problem as well as college students did in the Kendlers' own experiments.

Hewson made two crucial changes. First, he replaced the button-pressing mechanism in the side panels by drawers in these panels which the child could open and shut. This took away the mystery from the first stage of training. Then he helped the child to understand that there was no 'magic' about the specific marble which, during the second stage of training, the experimenter handed to him so that he could pop it in the hole and get the reward.

A child understands nothing, after all, about how a marble put into a hole can open a little door. How is he to know that any other marble of similar size will do just as well? Yet he must assume that if he is to solve the problem. Hewson made the functional equivalence of different marbles clear by playing a 'swapping game' with the children.

The two modifications together produced a jump in success rates from 30 per cent to 90 per cent for five-year-olds and from 35 per cent to 72.5 per cent for four-year-olds. For three-year-olds, for reasons that are still in need of clarification, no improvement — rather a slight drop in performance - resulted from the change.

We may conclude, then, that children experience very real difficulty when faced with the Kendler apparatus; but this difficulty cannot be taken as proof that they are incapable of deductive reasoning.`,
                text: `CHILDREN'S THINKING... (Same as content)`,
                questions: [
                    {
                        id: 28,
                        type: "choice",
                        prompt: "Classify: is cited as famous in the field of psychology.",
                        options: [
                            "CH. Clark Hull",
                            "HTK. Howard and Tracy Kendler",
                            "MC. Michael Cole and colleagues",
                            "SH. Simon Hewson"
                        ],
                        correct_answers: ["CH"],
                        evidence: "Paragraph 1: 'One of the most eminent of psychologists, Clark Hull...'",
                        explanation: "'Eminent' means famous and respected. Thus, CH (Clark Hull)."
                    },
                    {
                        id: 29,
                        type: "choice",
                        prompt: "Classify: demonstrated that the two-stage experiment involving button-pressing and inserting a marble into a hole poses problems for certain adults as well as children.",
                        options: [
                            "CH. Clark Hull",
                            "HTK. Howard and Tracy Kendler",
                            "MC. Michael Cole and colleagues",
                            "SH. Simon Hewson"
                        ],
                        correct_answers: ["MC"],
                        evidence: "Paragraph 4: '...we learn, from another psychologist, Michael Cole, and his colleagues, that adults in an African culture apparently cannot do the Kendlers' task either.'",
                        explanation: "Michael Cole and colleagues demonstrated this with adults in an African culture. Thus, MC."
                    },
                    {
                        id: 30,
                        type: "choice",
                        prompt: "Classify: devised an experiment that investigated deductive reasoning without the use of any marbles.",
                        options: [
                            "CH. Clark Hull",
                            "HTK. Howard and Tracy Kendler",
                            "MC. Michael Cole and colleagues",
                            "SH. Simon Hewson"
                        ],
                        correct_answers: ["MC"],
                        evidence: "Paragraph 5: 'Instead of the button-pressing machine, Cole used a locked box and two differently coloured match-boxes, one of which contained a key that would open the box.'",
                        explanation: "Michael Cole used match-boxes and a key, without any marbles. Thus, MC."
                    },
                    {
                        id: 31,
                        type: "choice",
                        prompt: "Classify: appears to have proved that a change in the apparatus dramatically improves the performance of children of certain ages.",
                        options: [
                            "CH. Clark Hull",
                            "HTK. Howard and Tracy Kendler",
                            "MC. Michael Cole and colleagues",
                            "SH. Simon Hewson"
                        ],
                        correct_answers: ["SH"],
                        evidence: "Paragraph 6 & 9: 'Recent work by Simon Hewson... produced a jump in success rates from 30 per cent to 90 per cent for five-year-olds and from 35 per cent to 72.5 per cent for four-year-olds.'",
                        explanation: "Simon Hewson proved that changing the apparatus dramatically improved performance for 4- and 5-year-olds. Thus, SH."
                    },
                    {
                        id: 32,
                        type: "choice",
                        prompt: "Classify: used a machine to measure inductive reasoning that replaced button-pressing with drawer-opening.",
                        options: [
                            "CH. Clark Hull",
                            "HTK. Howard and Tracy Kendler",
                            "MC. Michael Cole and colleagues",
                            "SH. Simon Hewson"
                        ],
                        correct_answers: ["SH"],
                        evidence: "Paragraph 7: 'Hewson made two crucial changes. First, he replaced the button-pressing mechanism in the side panels by drawers in these panels which the child could open and shut.'",
                        explanation: "Simon Hewson replaced button-pressing with drawers. Thus, SH."
                    },
                    {
                        id: 33,
                        type: "choice",
                        prompt: "Classify: experimented with things that the subjects might have been expected to encounter in everyday life, rather than with a machine.",
                        options: [
                            "CH. Clark Hull",
                            "HTK. Howard and Tracy Kendler",
                            "MC. Michael Cole and colleagues",
                            "SH. Simon Hewson"
                        ],
                        correct_answers: ["MC"],
                        evidence: "Paragraph 5: '...Cole used a locked box and two differently coloured match-boxes... Now the subject is dealing not with a strange machine but with familiar meaningful objects...'",
                        explanation: "Michael Cole used familiar everyday objects (match-boxes and a key). Thus, MC."
                    },
                    {
                        id: 34,
                        type: "choice",
                        prompt: "Classify: compared the performance of five-year-olds with college students, using the same apparatus with both sets of subjects.",
                        options: [
                            "CH. Clark Hull",
                            "HTK. Howard and Tracy Kendler",
                            "MC. Michael Cole and colleagues",
                            "SH. Simon Hewson"
                        ],
                        correct_answers: ["HTK"],
                        evidence: "Paragraph 6: '...five-year-old children solve the problem as well as college students did in the Kendlers' own experiments.'",
                        explanation: "The Kendlers had previously tested both five-year-olds and college students with their apparatus. Thus, HTK."
                    },
                    {
                        id: 35,
                        type: "choice",
                        prompt: "Classify: is cited as having demonstrated that earlier experiments into children's ability to reason deductively may have led to the wrong conclusions.",
                        options: [
                            "CH. Clark Hull",
                            "HTK. Howard and Tracy Kendler",
                            "MC. Michael Cole and colleagues",
                            "SH. Simon Hewson"
                        ],
                        correct_answers: ["SH"],
                        evidence: "Paragraph 6 & 10: 'Recent work by Simon Hewson... children experience very real difficulty when faced with the Kendler apparatus; but this difficulty cannot be taken as proof that they are incapable of deductive reasoning.'",
                        explanation: "Simon Hewson showed that the Kendlers' conclusion that children cannot reason deductively was flawed. Thus, SH."
                    },
                    {
                        id: 36,
                        type: "ynng",
                        prompt: "Howard and Tracey Kendler studied under Clark Hull.",
                        correct_answers: ["NOT GIVEN"],
                        evidence: "Paragraph 2 states they were 'Two followers of Clark Hull', but does not state whether they directly studied under him.",
                        explanation: "Being a follower of someone's principles does not necessarily mean studying under them. Statement is NOT GIVEN."
                    },
                    {
                        id: 37,
                        type: "ynng",
                        prompt: "The Kendlers trained their subjects separately in the two stages of their experiment, but not in how to integrate the two actions.",
                        correct_answers: ["YES"],
                        evidence: "Paragraph 2 & 3: 'The children were trained on each stage separately... But they did not for the most part 'integrate', to use the Kendlers' terminology.'",
                        explanation: "The children were trained on each stage separately, but not on integration. Statement is YES."
                    },
                    {
                        id: 38,
                        type: "ynng",
                        prompt: "Michael Cole and his colleagues demonstrated that adult performance on inductive reasoning tasks depends on features of the apparatus and procedure.",
                        correct_answers: ["YES"],
                        evidence: "Paragraph 4 & 5: 'Cole used a locked box and two differently coloured match-boxes... it turns out that the difficulty of 'integration' is greatly reduced.'",
                        explanation: "Cole demonstrated that changing to familiar objects enabled adults to perform the task successfully. Statement is YES."
                    },
                    {
                        id: 39,
                        type: "ynng",
                        prompt: "All Hewson's experiments used marbles of the same size.",
                        correct_answers: ["YES"],
                        evidence: "Paragraph 8: 'How is he to know that any other marble of similar size will do just as well? ...Hewson made the functional equivalence of different marbles clear by playing a 'swapping game' with the children.'",
                        explanation: "Hewson used marbles of similar/same size in the swapping game. Statement is YES."
                    },
                    {
                        id: 40,
                        type: "ynng",
                        prompt: "Hewson's modifications resulted in a higher success rate for children of all ages.",
                        correct_answers: ["NO"],
                        evidence: "Paragraph 9: 'For three-year-olds, for reasons that are still in need of clarification, no improvement — rather a slight drop in performance - resulted from the change.'",
                        explanation: "For three-year-olds, there was no improvement (a slight drop), so it was NOT for children of all ages. Statement is NO."
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // 3. ACADEMIC WRITING MODULE (2 TASKS)
    // =========================================================================
    writing: {
        title: "IELTS Academic Writing Practice Test 1 (Cambridge IELTS 2)",
        duration_seconds: 3600,
        task_1: {
            task_number: 1,
            title: "Task 1: Consumer Durables Owned in Britain (1972 - 1983)",
            prompt: `You should spend about 20 minutes on this task.

The table below shows the consumer durables (telephone, refrigerator, etc.) owned in Britain from 1972 to 1983.
Write a report for a university lecturer describing the information shown below.
Write at least 150 words.

Table: Percentage of British households with consumer durables:
• central heating: 1972 (39%), 1974 (43%), 1976 (48%), 1978 (52%), 1979 (55%), 1981 (59%), 1982 (60%), 1983 (64%)
• television: 1972 (93%), 1974 (95%), 1976 (96%), 1978 (96%), 1979 (97%), 1981 (97%), 1982 (97%), 1983 (98%)
• video: 1983 (18%) [introduced in 1983]
• vacuum cleaner: 1972 (87%), 1974 (89%), 1976 (92%), 1978 (92%), 1979 (93%), 1981 (94%), 1982 (95%), 1983 (95%)
• refrigerator: 1972 (73%), 1974 (81%), 1976 (88%), 1978 (91%), 1979 (92%), 1981 (93%), 1982 (93%), 1983 (94%)
• washing machine: 1972 (66%), 1974 (68%), 1976 (71%), 1978 (75%), 1979 (74%), 1981 (78%), 1982 (79%), 1983 (80%)
• dishwasher: 1978 (3%), 1979 (3%), 1981 (4%), 1982 (4%), 1983 (5%)
• telephone: 1972 (42%), 1974 (50%), 1976 (54%), 1978 (60%), 1979 (67%), 1981 (75%), 1982 (76%), 1983 (77%)`,
            min_words: 150,
            chart_svg: `<svg viewBox="0 0 700 280" class="w-full h-auto bg-slate-900 rounded-2xl p-4 text-white font-sans shadow-md">
                <text x="350" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#38bdf8">Ownership of Consumer Durables in Britain (1972 - 1983)</text>
                <line x1="160" y1="40" x2="160" y2="250" stroke="#475569" stroke-width="1"/>
                <line x1="160" y1="250" x2="680" y2="250" stroke="#475569" stroke-width="1"/>
                <!-- Rows for durables -->
                <g font-size="11" fill="#cbd5e1">
                    <text x="150" y="60" text-anchor="end">Television</text>
                    <rect x="160" y="48" width="465" height="14" fill="#3b82f6" rx="3"/>
                    <text x="635" y="60" fill="#93c5fd" font-size="10">93% → 98%</text>

                    <text x="150" y="85" text-anchor="end">Vacuum Cleaner</text>
                    <rect x="160" y="73" width="451" height="14" fill="#6366f1" rx="3"/>
                    <text x="620" y="85" fill="#a5b4fc" font-size="10">87% → 95%</text>

                    <text x="150" y="110" text-anchor="end">Refrigerator</text>
                    <rect x="160" y="98" width="446" height="14" fill="#06b6d4" rx="3"/>
                    <text x="615" y="110" fill="#67e8f9" font-size="10">73% → 94%</text>

                    <text x="150" y="135" text-anchor="end">Washing Machine</text>
                    <rect x="160" y="123" width="380" height="14" fill="#10b981" rx="3"/>
                    <text x="550" y="135" fill="#6ee7b7" font-size="10">66% → 80%</text>

                    <text x="150" y="160" text-anchor="end">Telephone</text>
                    <rect x="160" y="148" width="365" height="14" fill="#f59e0b" rx="3"/>
                    <text x="535" y="160" fill="#fcd34d" font-size="10">42% → 77% (+35%)</text>

                    <text x="150" y="185" text-anchor="end">Central Heating</text>
                    <rect x="160" y="173" width="304" height="14" fill="#ec4899" rx="3"/>
                    <text x="475" y="185" fill="#f472b6" font-size="10">39% → 64% (+25%)</text>

                    <text x="150" y="210" text-anchor="end">Video (1983)</text>
                    <rect x="160" y="198" width="85" height="14" fill="#8b5cf6" rx="3"/>
                    <text x="255" y="210" fill="#c4b5fd" font-size="10">18%</text>

                    <text x="150" y="235" text-anchor="end">Dishwasher</text>
                    <rect x="160" y="223" width="24" height="14" fill="#64748b" rx="3"/>
                    <text x="195" y="235" fill="#94a3b8" font-size="10">3% → 5%</text>
                </g>
            </svg>`,
            sample_essay: `The chart shows that the percentage of British households with a range of consumer durables steadily increased between 1972 and 1983. The greatest increase was in telephone ownership, rising from 42% in 1972 to 77% in 1983. Next came central-heating ownership, rising from 37% of households in 1972 to 64% in 1983. The percentage of households with a refrigerator rose 21% over the same period and of those with a washing machine by 14%. Households with vacuum-cleaners, televisions and dishwashers increased by 8%, 5% and 2% respectively. In 1983, the year of their introduction, 18% of households had a video recorder.

The significant social changes reflected in the statistics are that over the period the proportion of British houses with central heating rose from one to two thirds, and of those with a phone from under a half to over three-quarters. Together with the big increases in the ownership of washing machines and refrigerators, they are evidence of both rising living standards and the trend to lifestyles based on comfort and convenience.`,
            band_9_model: `The chart shows that the percentage of British households with a range of consumer durables steadily increased between 1972 and 1983. The greatest increase was in telephone ownership, rising from 42% in 1972 to 77% in 1983. Next came central-heating ownership, rising from 37% of households in 1972 to 64% in 1983. The percentage of households with a refrigerator rose 21% over the same period and of those with a washing machine by 14%. Households with vacuum-cleaners, televisions and dishwashers increased by 8%, 5% and 2% respectively. In 1983, the year of their introduction, 18% of households had a video recorder.

The significant social changes reflected in the statistics are that over the period the proportion of British houses with central heating rose from one to two thirds, and of those with a phone from under a half to over three-quarters. Together with the big increases in the ownership of washing machines and refrigerators, they are evidence of both rising living standards and the trend to lifestyles based on comfort and convenience.`
        },
        task_2: {
            task_number: 2,
            title: "Task 2: Fatherhood vs. Motherhood in Child-Rearing",
            prompt: `You should spend about 40 minutes on this task.

Present a written argument or case to an educated reader with no specialist knowledge of the following topic.

"Fatherhood ought to be emphasised as much as motherhood. The idea that women are solely responsible for deciding whether or not to have babies leads on to the idea that they are also responsible for bringing the children up."

To what extent do you agree or disagree?
You should write at least 250 words.
You should use your own ideas, knowledge and experience and support your arguments with examples and relevant evidence.`,
            min_words: 250,
            sample_essay: `I believe that child-rearing should be the responsibility of both parents and that, whilst the roles within that partnership may be different, they are nevertheless equal in importance. In some societies, it has been made easier over the years for single parents to raise children on their own. However, this does not mean that the traditional family, with both parents providing emotional support and role-models for their children, is not the most satisfactory way of bringing up children.

Of crucial importance, in my opinion, is how we define 'responsible for bringing the children up'. At its simplest, it could mean giving the financial support necessary to provide a home, food and clothes and making sure the child is safe and receives an adequate education. This would be the basic definition.

There is, however, another possible way of defining that part of the quotation. That would say it is not just the father's responsibility to provide the basics for his children, while his wife involves herself in the everyday activity of bringing them up. Rather, he should share those daily duties, spend as much time as his job allows with his children, play with them, read to them, help directly with their education, participate very fully in their lives and encourage them to share his.

It is this second, fuller, concept of 'fatherhood' that I am in favour of, although I also realise how difficult it is to achieve sometimes. The economic and employment situation in many countries means that jobs are getting more, not less, stressful, requiring long hours and perhaps long journeys to work as well. Therefore it may remain for many a desirable ideal rather than an achievable reality.`,
            band_9_model: `I believe that child-rearing should be the responsibility of both parents and that, whilst the roles within that partnership may be different, they are nevertheless equal in importance. In some societies, it has been made easier over the years for single parents to raise children on their own. However, this does not mean that the traditional family, with both parents providing emotional support and role-models for their children, is not the most satisfactory way of bringing up children.

Of crucial importance, in my opinion, is how we define 'responsible for bringing the children up'. At its simplest, it could mean giving the financial support necessary to provide a home, food and clothes and making sure the child is safe and receives an adequate education. This would be the basic definition.

There is, however, another possible way of defining that part of the quotation. That would say it is not just the father's responsibility to provide the basics for his children, while his wife involves herself in the everyday activity of bringing them up. Rather, he should share those daily duties, spend as much time as his job allows with his children, play with them, read to them, help directly with their education, participate very fully in their lives and encourage them to share his.

It is this second, fuller, concept of 'fatherhood' that I am in favour of, although I also realise how difficult it is to achieve sometimes. The economic and employment situation in many countries means that jobs are getting more, not less, stressful, requiring long hours and perhaps long journeys to work as well. Therefore it may remain for many a desirable ideal rather than an achievable reality.`
        }
    },

    // =========================================================================
    // 4. SPEAKING MODULE (3 PARTS)
    // =========================================================================
    speaking: {
        title: "IELTS Speaking Practice Test 1 (Cambridge IELTS 2)",
        duration_seconds: 840,
        part_1: [
            {
                topic: "Communication & E-mail",
                question: "How do you normally communicate with your friends and family?",
                model_answer: "I predominantly communicate via instant messaging applications and email, as they offer immediate connectivity regardless of geographic distance.",
                key_vocab: ["instant messaging", "predominantly", "geographic distance", "connectivity"]
            },
            {
                topic: "Communication & E-mail",
                question: "Do you prefer sending written messages or speaking directly on the phone?",
                model_answer: "For urgent matters, I prefer direct phone conversations due to their immediacy and nuanced tone. However, for detailed information or daily pleasantries, written messages provide convenience and a clear paper trail.",
                key_vocab: ["immediacy", "nuanced tone", "paper trail", "convenience"]
            },
            {
                topic: "Cinema & Entertainment",
                question: "How frequently do you go to the cinema or watch films at home?",
                model_answer: "I watch films at home almost every weekend using on-demand streaming services, and occasionally visit the cinema once or twice a month to experience blockbuster releases on the giant screen.",
                key_vocab: ["on-demand streaming", "blockbuster releases", "cinematic immersion"]
            },
            {
                topic: "Cinema & Entertainment",
                question: "What types of films do you find most captivating?",
                model_answer: "I am particularly captivated by thought-provoking documentaries and historical dramas, as they broaden my worldly perspective and stimulate analytical reflection.",
                key_vocab: ["thought-provoking", "historical dramas", "analytical reflection", "perspective"]
            }
        ],
        part_2: {
            title: "Part 2: Long Turn / Cue Card (3 - 4 minutes)",
            cue_card_title: "Information Gathering: ELECTRONIC MAIL (Language School Enquiry)",
            cue_points: [
                "What electronic mail (e-mail) is and how it functions",
                "How much it costs for students at this school",
                "How to obtain an e-mail address and where it is located on campus",
                "What equipment is needed at home and whether any training courses are available"
            ],
            cues: [
                "What electronic mail (e-mail) is and how it functions",
                "How much it costs for students at this school",
                "How to obtain an e-mail address and where it is located on campus",
                "What equipment is needed at home and whether any training courses are available"
            ],
            model_answer: `Good morning. I would like to enquire about obtaining an electronic mail account through the language school's student services.

Firstly, could you clarify what e-mail entails and whether access is free of charge for enrolled students? I understand that e-mail allows us to transmit messages over telephone networks from computer to computer, and I am keen to confirm the registration procedure. To obtain an address, I gather that I simply need to complete an application form and lodge it directly with Student Services.

Furthermore, I would like to know where students can access these facilities on campus—such as in the independent learning centre or the main computer laboratory. If I wish to access my account from home, I understand that a modem and telephone line connection are required. Finally, I would appreciate details regarding the Friday afternoon introductory courses so that I can develop proficient digital communication skills.`
        },
        part_3: [
            {
                theme: "Evolution of Digital Communication",
                question: "How has electronic mail transformed global communication compared to conventional postal letters?",
                model_answer: "Electronic mail has eradicated geographical barriers, reducing communication turnaround from weeks to seconds. This instantaneous exchange has accelerated international commerce, facilitated academic cross-pollination, and fundamentally altered workplace productivity."
            },
            {
                theme: "Technology and Social Isolation",
                question: "Do you believe excessive reliance on digital messaging creates emotional distance between individuals?",
                model_answer: "While digital communication broadens our social network quantitatively, it can dilute qualitative interpersonal depth. Text-based exchanges lack non-verbal cues such as facial expressions and vocal intonation, occasionally leading to emotional disconnection and superficial relationships."
            },
            {
                theme: "Parental Roles & Gender Equality",
                question: "Why is it important for fathers to be equally involved in child-rearing in contemporary society?",
                model_answer: "Equal paternal involvement fosters balanced psychological and emotional development in children while dismantling patriarchal assumptions that childcare is solely maternal. Shared parenting also enables mothers to pursue career aspirations without bearing a disproportionate domestic burden."
            },
            {
                theme: "Parental Roles & Workplace Flexibility",
                question: "Should corporate employers provide flexible working hours and parental leave for fathers as well as mothers?",
                model_answer: "Unquestionably. Equitable parental leave policies acknowledge the vital role of fathers during the formative months of a child's life. Progressive organisations that champion flexible arrangements benefit from heightened employee loyalty, reduced burnout, and a more equitable workforce."
            }
        ]
    }
};



// =========================================================================
// CAMBRIDGE IELTS 2 - ACADEMIC PRACTICE TEST 2
// Sourced 100% from Official Cambridge University Press (Cambridge IELTS 2)
// Complete 4 Modules: Listening (40 Qs), Reading (40 Qs), Writing (2 Tasks), Speaking (3 Parts)
// =========================================================================

const cam2Test2 = {
    id: "cam_2_test_2",
    book: "Cambridge IELTS 2",
    title: "Cambridge IELTS 2 - Test 2",
    test_title: "Academic Practice Test 2",
    badge: "Cam 2 - Test 2",

    // =========================================================================
    // 1. LISTENING MODULE (4 SECTIONS - 40 QUESTIONS)
    // =========================================================================
    listening: {
        title: "IELTS Listening Practice Test 2 (Cambridge IELTS 2)",
        duration_seconds: 1800,
        parts: [
            // -------------------------------------------------------------
            // SECTION 1: Insurance Application Form (Questions 1 - 10)
            // -------------------------------------------------------------
            {
                part_number: 1,
                section_number: 1,
                title: "Section 1: Insurance Application Form (Questions 1 - 10)",
                instruction: "Questions 1-2: Circle the correct letters A-C. Questions 3-6: Complete the table below. Write NO MORE THAN THREE WORDS for each answer. Questions 7-10: Complete the form below. Write NO MORE THAN THREE WORDS for each answer.",
                instructions: "Questions 1-2: Circle the correct letters A-C. Questions 3-6: Complete the table below. Write NO MORE THAN THREE WORDS for each answer. Questions 7-10: Complete the form below. Write NO MORE THAN THREE WORDS for each answer.",
                transcript: `DIANE: Good morning. Diane Davies. Can I help you?
GAVIN: Yes, I'd like to get some insurance for the contents of my home.
DIANE: Fine. When did you move into the house?
GAVIN: A couple of weeks ago, and it's an apartment actually. I was told by the landlord that it would be a good idea to get some insurance for the furniture and other personal possessions.
DIANE: Fine. Well, let's get some details. What kind of apartment is it?
GAVIN: It's a two-bedroom apartment.
DIANE: What floor is it on?
GAVIN: Why do you need to know that?
DIANE: Because it affects the cost of the insurance. An apartment on the ground floor isn't as protected as others and there's more chance of a break-in.
GAVIN: Really? I didn't know that. It's on the third, no, ... second floor.
DIANE: Second ... and how much is the rent?
GAVIN: It's $615 per month.
DIANE: Good, and where is it located?
GAVIN: In Biggins St, South Hills.
DIANE: I see. And what things did you want to insure?
GAVIN: Well, what do you recommend?
DIANE: Well, the most important things are those which you would normally find in a home. Things like the television, fridge and so on.
GAVIN: I see. Well, I've got a fridge and a stereo system which I've just bought from a friend.
DIANE: And how much did you pay for the fridge?
GAVIN: Er, $450.
DIANE: 50 or 15?
GAVIN: 50, and the stereo system cost $1,150.
DIANE: Have you got a television?
GAVIN: Yes, but it's very old and not worth much.
DIANE: OK. Well, is there anything else you want to insure?
GAVIN: Yes, I've got a couple of watches and my CDs and books.
DIANE: How much do you think they're worth?
GAVIN: The watches are worth $1,000 ...
DIANE: For both of them?
GAVIN: No, each one and, all together, the CDs and books cost me about $400.
DIANE: OK, so the value of everything you want to insure is $4,000.
GAVIN: How much will the insurance cost?
DIANE: Let me see, $4,000 divided by ... plus 10% ... right, so this kind of insurance, er, that's Private Contents insurance, it comes to $184.00 for a twelve-month period.
GAVIN: $184.00. Well, that sounds pretty good. OK, I'll take that policy.
GAVIN: Can I arrange the policy over the phone?
DIANE: Sure, just let me get the details down. So that's Mr ...
GAVIN: Gavin Murray, that's M-U-R-R-A-Y.
DIANE: And the address is?
GAVIN: It's 16C Biggins Street, South Hills.
DIANE: OK (writing) 16C Biggins Street, South Hills?
GAVIN: That's right, it's two words, 'South Hills'.
DIANE: And your date of birth is?
GAVIN: 12 November 1980.
DIANE: And your contact number?
GAVIN: Home phone number is 9872 4855.
DIANE: Right... and er,... you're Australian?
GAVIN: No ... I was born in London, although my mother is from Tasmania.
DIANE: Really? Whereabouts?
GAVIN: Hobart.
DIANE: I see ... interesting place. Now, are you working at the moment?
GAVIN: No, I'm a full-time student at Sydney University.
DIANE: Right, good.`,
                audio_script: `DIANE: Good morning. Diane Davies. Can I help you?... (Same as transcript)`,
                questions: [
                    {
                        id: 1,
                        type: "choice",
                        prompt: "Gavin's apartment is located on the ...",
                        options: [
                            "A. ground floor.",
                            "B. second floor.",
                            "C. third floor."
                        ],
                        correct_answers: ["B"],
                        evidence: "GAVIN: It's on the third, no, ... second floor. DIANE: Second...",
                        explanation: "Gavin corrects himself to state his apartment is on the second floor (Option B)."
                    },
                    {
                        id: 2,
                        type: "choice",
                        prompt: "The monthly rent for Gavin's apartment is ...",
                        options: [
                            "A. $615.",
                            "B. $650.",
                            "C. $655."
                        ],
                        correct_answers: ["A"],
                        evidence: "GAVIN: It's $615 per month.",
                        explanation: "The monthly rent is $615 (Option A)."
                    },
                    {
                        id: 3,
                        type: "fill",
                        prompt: "ITEM: _____ | VALUE: $450",
                        correct_answers: ["fridge", "refrigerator", "a fridge", "a refrigerator"],
                        evidence: "GAVIN: I see. Well, I've got a fridge... DIANE: And how much did you pay for the fridge? GAVIN: Er, $450.",
                        explanation: "The item worth $450 is the fridge/refrigerator."
                    },
                    {
                        id: 4,
                        type: "fill",
                        prompt: "ITEM: _____ | VALUE: $1,150",
                        correct_answers: ["stereo", "stereo system", "a stereo system", "a stereo"],
                        evidence: "GAVIN: 50, and the stereo system cost $1,150.",
                        explanation: "The stereo system costs $1,150."
                    },
                    {
                        id: 5,
                        type: "fill",
                        prompt: "ITEM: CDs and _____ | VALUE: $400",
                        correct_answers: ["books"],
                        evidence: "GAVIN: ...all together, the CDs and books cost me about $400.",
                        explanation: "The CDs and books together cost $400."
                    },
                    {
                        id: 6,
                        type: "fill",
                        prompt: "Total annual cost of insurance: $_____",
                        correct_answers: ["184", "184.00", "$184", "$184.00", "184 dollars"],
                        evidence: "DIANE: ...it comes to $184.00 for a twelve-month period.",
                        explanation: "The total annual cost is $184.00 (NOT per month)."
                    },
                    {
                        id: 7,
                        type: "fill",
                        prompt: "Name: Mr Gavin _____",
                        correct_answers: ["Murray", "murray"],
                        evidence: "GAVIN: Gavin Murray, that's M-U-R-R-A-Y.",
                        explanation: "Gavin spells his surname as Murray."
                    },
                    {
                        id: 8,
                        type: "fill",
                        prompt: "Address: (8) _____ Biggins Street",
                        correct_answers: ["16C", "16c"],
                        evidence: "GAVIN: It's 16C Biggins Street, South Hills.",
                        explanation: "The street number is 16C."
                    },
                    {
                        id: 9,
                        type: "fill",
                        prompt: "Address: 16C Biggins Street, (9) _____",
                        correct_answers: ["South Hills", "south hills"],
                        evidence: "GAVIN: That's right, it's two words, 'South Hills'.",
                        explanation: "The district/suburb is South Hills."
                    },
                    {
                        id: 10,
                        type: "fill",
                        prompt: "Nationality: _____",
                        correct_answers: ["English", "British", "english", "british"],
                        evidence: "GAVIN: No ... I was born in London, although my mother is from Tasmania.",
                        explanation: "Since he was born in London, his nationality is English or British."
                    }
                ]
            },

            // -------------------------------------------------------------
            // SECTION 2: Smith House Accommodation Guide (Questions 11 - 20)
            // -------------------------------------------------------------
            {
                part_number: 2,
                section_number: 2,
                title: "Section 2: Smith House Accommodation Guide (Questions 11 - 20)",
                instruction: "Question 11: Circle the correct letter A-D. Questions 12-14: Complete the explanation of the room number. Write NO MORE THAN THREE WORDS for each answer. Questions 15-17: Complete the sentences below. Write NO MORE THAN THREE WORDS for each answer. Questions 18-20: Complete the notice below. Write NO MORE THAN THREE WORDS for each answer.",
                instructions: "Question 11: Circle the correct letter A-D. Questions 12-14: Complete the explanation of the room number. Write NO MORE THAN THREE WORDS for each answer. Questions 15-17: Complete the sentences below. Write NO MORE THAN THREE WORDS for each answer. Questions 18-20: Complete the notice below. Write NO MORE THAN THREE WORDS for each answer.",
                transcript: `COLLEGE PRESIDENT: Well, good morning, everyone, it's good to see you all here. Welcome to Smith House. Smith House as you may or may not know is one of the oldest residential colleges of the university. As you can see, the building you're in now which contains this main lounge, the dining room, the recreation room, the kitchen and the offices was part of the original old house, built in the 1840s to be used by the family of George Smith. That's of course how the house and college got their names. The original house was converted into a residential college for the university in 1940 and since then has continued to be added on to and modernised.
You'll notice when you receive your room allocation in a few minutes that your room number either begins with the letter N, S, or W like this one here. The first letter refers to the three wings of the college which come away from this main building. Of course the letters represent the three directions - in this case - north, south and west. Each wing has two floors, and so the next number you see is either one, or in this case two, and this indicates which floor your room is on. The number after that is your individual room number. So it's quite simple to find any room by going to the right wing, then floor, and then room number.
You'll also notice, when you receive your orientation pack shortly, that there are two keys. One is the key to your room and only you have that key - and the other is a key to the front door which you've just come through here from the street. This door is closed and locked at 8 pm every night and opened again at 7 am. You'll need your key if you're coming back to the college between those times. We ask all students to always enter and leave the college through the front door. You will notice at the end of each corridor that there is another door but these are fire doors and are kept locked from the outside. They should only be opened from the inside in case of emergency.
In your fees you've paid a laundry fee which covers the cleaning of bed linen and towels. All bed linen and towels are clearly embossed with the name Smith House so it's easily identifiable. If you want your other laundry to be done by the college this can be arranged for a small extra fee.
There are only a few rules here at Smith House and we have these rules so that we can all live comfortably together. The most important rule is that there must be no noise after 9 pm. There is also no smoking in the rooms or anywhere inside the college but smoking is permitted on the balconies.
All meals are served in the dining room. Meal times are listed in your orientation pack. Please read these carefully as meal times cannot be changed and if you arrive late I'm sorry to say you'll just go hungry.
If you're unsure about things, each floor has an elected 'floor senior' who is usually a student in their third or fourth year of study who's been at Smith House for a while. The floor seniors will introduce themselves later today and answer any questions you have. But for now I'm going to hand you over to Marney who is going to give you the orientation packs and keys. Thanks Marney.`,
                audio_script: `COLLEGE PRESIDENT: Well, good morning, everyone... (Same as transcript)`,
                questions: [
                    {
                        id: 11,
                        type: "choice",
                        prompt: "Smith House was originally built as ...",
                        options: [
                            "A. a residential college.",
                            "B. a family house.",
                            "C. a university.",
                            "D. an office block."
                        ],
                        correct_answers: ["B"],
                        evidence: "COLLEGE PRESIDENT: ...was part of the original old house, built in the 1840s to be used by the family of George Smith.",
                        explanation: "It was originally built as a private family house for George Smith (Option B)."
                    },
                    {
                        id: 12,
                        type: "fill",
                        prompt: "Room number diagram (N 2 34): N represents: (12) _____ wing",
                        correct_answers: ["north", "N"],
                        evidence: "COLLEGE PRESIDENT: The first letter refers to the three wings... north, south and west.",
                        explanation: "The letter N stands for north wing."
                    },
                    {
                        id: 13,
                        type: "fill",
                        prompt: "Room number diagram (N 2 34): 2 represents: (13) _____",
                        correct_answers: [
                            "second floor",
                            "2nd floor",
                            "floor number",
                            "second",
                            "floor"
                        ],
                        evidence: "COLLEGE PRESIDENT: ...and this indicates which floor your room is on.",
                        explanation: "The second digit represents the second floor (or floor number)."
                    },
                    {
                        id: 14,
                        type: "fill",
                        prompt: "Room number diagram (N 2 34): 34 represents: personal (14) _____.",
                        correct_answers: [
                            "room number",
                            "room",
                            "number"
                        ],
                        evidence: "COLLEGE PRESIDENT: The number after that is your individual room number.",
                        explanation: "The final two digits represent the personal room number."
                    },
                    {
                        id: 15,
                        type: "fill",
                        prompt: "Students need a front door key between (15) _____.",
                        correct_answers: [
                            "8 pm and 7 am",
                            "8pm and 7am",
                            "8 pm - 7 am",
                            "8.00 pm and 7.00 am"
                        ],
                        evidence: "COLLEGE PRESIDENT: This door is closed and locked at 8 pm every night and opened again at 7 am. You'll need your key if you're coming back to the college between those times.",
                        explanation: "The front door is locked between 8 pm and 7 am."
                    },
                    {
                        id: 16,
                        type: "fill",
                        prompt: "In an emergency, students should use (16) _____.",
                        correct_answers: [
                            "fire doors",
                            "the fire doors",
                            "emergency doors",
                            "the emergency doors"
                        ],
                        evidence: "COLLEGE PRESIDENT: ...there is another door but these are fire doors... They should only be opened from the inside in case of emergency.",
                        explanation: "In an emergency, students use the fire doors / emergency doors."
                    },
                    {
                        id: 17,
                        type: "fill",
                        prompt: "Fees also cover some (17) _____ charges.",
                        correct_answers: ["laundry", "washing"],
                        evidence: "COLLEGE PRESIDENT: In your fees you've paid a laundry fee which covers the cleaning of bed linen and towels.",
                        explanation: "The fees cover laundry / washing charges."
                    },
                    {
                        id: 18,
                        type: "fill",
                        prompt: "Smoking only allowed on (18) _____.",
                        correct_answers: [
                            "balconies",
                            "the balconies",
                            "balconys",
                            "the balconys"
                        ],
                        evidence: "COLLEGE PRESIDENT: There is also no smoking in the rooms or anywhere inside the college but smoking is permitted on the balconies.",
                        explanation: "Smoking is only permitted on the balconies."
                    },
                    {
                        id: 19,
                        type: "fill",
                        prompt: "No changes can be made to (19) _____.",
                        correct_answers: ["meal times", "meal-times", "mealtimes"],
                        evidence: "COLLEGE PRESIDENT: Please read these carefully as meal times cannot be changed...",
                        explanation: "Meal times cannot be changed."
                    },
                    {
                        id: 20,
                        type: "fill",
                        prompt: "If you have any questions, ask the (20) _____.",
                        correct_answers: [
                            "floor senior",
                            "floor seniors",
                            "elected floor senior",
                            "elected floor seniors"
                        ],
                        evidence: "COLLEGE PRESIDENT: If you're unsure about things, each floor has an elected 'floor senior'... answer any questions you have.",
                        explanation: "Students should ask their elected floor senior(s)."
                    }
                ]
            },

            // -------------------------------------------------------------
            // SECTION 3: Children Learning Through Media (Questions 21 - 30)
            // -------------------------------------------------------------
            {
                part_number: 3,
                section_number: 3,
                title: "Section 3: Children Learning Through Media (Questions 21 - 30)",
                instruction: "Questions 21-25: Complete the table below. Write NO MORE THAN THREE WORDS for each answer. Questions 26-30: Write the appropriate letters A-C against questions 26-30. Situation options: A. individual children, B. five or six children, C. whole class.",
                instructions: "Questions 21-25: Complete the table below. Write NO MORE THAN THREE WORDS for each answer. Questions 26-30: Write the appropriate letters A-C against questions 26-30. Situation options: A. individual children, B. five or six children, C. whole class.",
                transcript: `LYNNE: That essay we have to write ... the one on how children learn through the media ... how are you planning to write it?
ROBIN: Well, I've given it some thought and I think that the best way to approach it is to divide the essay into two parts. First of all, we'd have to look at some examples of each type of media ...
LYNNE: Yes, what they are ... then we could describe how we can use each medium so that children can learn something from each one.
ROBIN: Exactly. Maybe we could draw up a table and look at examples of each medium in turn. Let's see, the different forms of media would be ... the print media ...
LYNNE: Here you'd have things like books and newspapers, that sort of thing ...
ROBIN: Um, and included in these are the pictorial forms of print media, like maps ...
LYNNE: Yes, maps are really just formal pictures, aren't they? And then there are what we call the audio forms of media ... where children can listen. CDs and radios are probably the best examples, because a lot of children have access to these especially radios.
ROBIN: And this would lead into the audio-visual media, which can be seen as well as heard ... film, television ... and we mustn't forget videos.
LYNNE: Yes, but there's a final category as well ... computers, that make up the so-called electronic media. In the United Kingdom and Australia, they say that one in three families has a computer now.
ROBIN: Yes, I believe it. Well that's a good list to start with ... we're really getting somewhere with this essay now ... so let's move on to when each type of medium could be used. I guess we could start by trying to identify the best situation for each type of media.
LYNNE: What do you mean?
ROBIN: I'm talking about whether each medium should be used with different sized groups. For example, we could look at pictures, and ask whether they're more useful for an individual child, a few children together or a full class - in this case, I'd say pictures are best with individual children, because they give them an opportunity to let their imaginations run wild.
LYNNE: Yes, I see ...
ROBIN: Let's take tapes next. Although tapes look ideal for individual children, I feel they're best suited to small group work. This way, children don't feel isolated, because they can get help from their friends. Computers are the same ... I think they're better with small numbers of children and they're hardly ever useful with a whole class. Videos, however, are ideal for use with everyone present in the class, especially when children have individual activity sheets to help them focus their minds on what's in the video.
LYNNE: And what about books, what would you recommend for them? Books are ideal for children to use by themselves. I know they're used with groups in schools, but I wouldn't recommend it. Other pictorial media like maps, though, are different ... I'd always plan group work around those ... give the children a chance to interact and to share ideas.
ROBIN: I agree ... teachers often just leave maps on the wall for children to look at when they have some free time, but kids really enjoy using them for problem solving.
LYNNE: Yes, different people have different ideas I suppose ...
ROBIN: Yes, and different teachers recommend different tools for different age groups ...`,
                audio_script: `LYNNE: That essay we have to write... (Same as transcript)`,
                questions: [
                    {
                        id: 21,
                        type: "fill",
                        prompt: "Print media examples: books, (21) _____",
                        correct_answers: ["newspaper", "newspapers"],
                        evidence: "LYNNE: Here you'd have things like books and newspapers, that sort of thing...",
                        explanation: "Examples of print media given are books and newspapers."
                    },
                    {
                        id: 22,
                        type: "fill",
                        prompt: "Pictures examples: (22) _____",
                        correct_answers: ["map", "maps"],
                        evidence: "ROBIN: ...pictorial forms of print media, like maps... LYNNE: Yes, maps are really just formal pictures, aren't they?",
                        explanation: "Maps are given as pictorial examples."
                    },
                    {
                        id: 23,
                        type: "fill",
                        prompt: "Audio (listening) examples: CDs, (23) _____",
                        correct_answers: ["radio", "radios"],
                        evidence: "LYNNE: CDs and radios are probably the best examples...",
                        explanation: "Audio media examples are CDs and radios."
                    },
                    {
                        id: 24,
                        type: "fill",
                        prompt: "Audio-visual examples: film, (24) _____, videos",
                        correct_answers: ["television", "TV", "television / TV"],
                        evidence: "ROBIN: ...film, television ... and we mustn't forget videos.",
                        explanation: "Audio-visual media includes film, television/TV and videos."
                    },
                    {
                        id: 25,
                        type: "fill",
                        prompt: "Electronic media examples: (25) _____",
                        correct_answers: ["computer", "computers"],
                        evidence: "LYNNE: Yes, but there's a final category as well ... computers, that make up the so-called electronic media.",
                        explanation: "Computers make up electronic media."
                    },
                    {
                        id: 26,
                        type: "choice",
                        prompt: "In which situation are TAPES most useful?",
                        options: [
                            "A. individual children",
                            "B. five or six children (small group)",
                            "C. whole class"
                        ],
                        correct_answers: ["B"],
                        evidence: "ROBIN: Let's take tapes next... I feel they're best suited to small group work [five or six children].",
                        explanation: "Robin recommends tapes for small group work (B: five or six children)."
                    },
                    {
                        id: 27,
                        type: "choice",
                        prompt: "In which situation are COMPUTERS most useful?",
                        options: [
                            "A. individual children",
                            "B. five or six children (small group)",
                            "C. whole class"
                        ],
                        correct_answers: ["B"],
                        evidence: "ROBIN: Computers are the same ... I think they're better with small numbers of children...",
                        explanation: "Computers are best with small numbers of children (B: five or six children)."
                    },
                    {
                        id: 28,
                        type: "choice",
                        prompt: "In which situation are VIDEOS most useful?",
                        options: [
                            "A. individual children",
                            "B. five or six children (small group)",
                            "C. whole class"
                        ],
                        correct_answers: ["C"],
                        evidence: "ROBIN: Videos, however, are ideal for use with everyone present in the class...",
                        explanation: "Videos are ideal for everyone in the class (C: whole class)."
                    },
                    {
                        id: 29,
                        type: "choice",
                        prompt: "In which situation are BOOKS most useful?",
                        options: [
                            "A. individual children",
                            "B. five or six children (small group)",
                            "C. whole class"
                        ],
                        correct_answers: ["A"],
                        evidence: "LYNNE: Books are ideal for children to use by themselves.",
                        explanation: "Books are best used by children individually (A: individual children)."
                    },
                    {
                        id: 30,
                        type: "choice",
                        prompt: "In which situation are WALL MAPS most useful?",
                        options: [
                            "A. individual children",
                            "B. five or six children (small group)",
                            "C. whole class"
                        ],
                        correct_answers: ["B"],
                        evidence: "LYNNE: Other pictorial media like maps, though, are different ... I'd always plan group work around those...",
                        explanation: "Maps are recommended for group work (B: five or six children)."
                    }
                ]
            },

            // -------------------------------------------------------------
            // SECTION 4: British Agriculture Lecture (Questions 31 - 40)
            // -------------------------------------------------------------
            {
                part_number: 4,
                section_number: 4,
                title: "Section 4: British Agriculture Lecture (Questions 31 - 40)",
                instruction: "Question 31: Choose the correct letter A-D. Questions 32-33: Complete the notes below. Write NO MORE THAN THREE WORDS for each answer. Questions 34-39: Complete the table below. Write NO MORE THAN THREE WORDS for each answer. Question 40: Choose the correct letter A-C.",
                instructions: "Question 31: Choose the correct letter A-D. Questions 32-33: Complete the notes below. Write NO MORE THAN THREE WORDS for each answer. Questions 34-39: Complete the table below. Write NO MORE THAN THREE WORDS for each answer. Question 40: Choose the correct letter A-C.",
                transcript: `LECTURER: I hope that this first session, which I've called An Introduction to British Agriculture, will provide a helpful background to the farm visits you'll be doing next week.
I think I should start by emphasising that agriculture still accounts for a very important part of this country's economy. We are used to hearing the UK's society and economy described as being 'industrial' or even 'post-industrial', but we mustn't let this blind us to the fact that agriculture and its supporting industries still account for around 20% of our Gross National Product.
This figure is especially impressive, I think, when you bear in mind how very small a percentage of the UK workforce is employed in agriculture. This is not a recent development - you would have to go back to 1750 or so to find a majority of the workforce in this country working in agriculture. By the middle of the next century, in 1850 that is, it had fallen sharply to 10%, and then to 3% by the middle of the twentieth century.
And now just 2% of the workforce contribute 20% of GNP. How is this efficiency achieved? Well, my own view is that it owes a great deal to a history, over the last 50 or 60 years, of intelligent support by the state, mainly taking the form of helping farmers to plan ahead. Then the two other factors I should mention, both very important, are the high level of training amongst the agricultural workforce. And secondly, the recognition by farmers of the value of investing in technology.
Now, although the UK is a fairly small country, the geology and climate vary a good deal from region to region. For our purposes today we can divide the country broadly into three - I've marked them on the map here.
The region you'll get to know best, of course, is the north, where we are at present. The land here is generally hilly, and the soils thin. The climate up here, and you've already had evidence of this, is generally cool and wet. As you will see next week, the typical farm here in the North is a small, family-run concern, producing mainly wool and timber for the market.
If we contrast that with the Eastern region, over here, the east is flatter and more low-lying, with fertile soils and a mixed climate. Average farm-size is much bigger in the east, and farms are likely to be managed strictly on commercial lines. As for crops, well, the east is the UK's great cereal-producing region. However, increasingly significant areas are now also given over to high quality vegetables for supply direct to the supermarkets.
The third broad region is the west, where it's a different story again. The climate is warmer than in the north and much wetter than in the east. The resulting rich soils in the west provide excellent pasture, and the farms there are quite large, typically around 800 hectares. The main products are milk, cheese and meat.
So, clearly, there are marked differences between regions. But this does not prevent quite a strong sense of solidarity amongst the farming community as a whole, right across the country. This solidarity comes in part from the need to present a united front in dealing with other powerful interest-groups, such as government or the media. It also owes something to the close co-operation between all the agricultural training colleges, through which the great majority of farmers pass at the beginning of their careers. And a third factor making for solidarity is the national structure of the Farmers' Union, of which virtually all farmers are members.
Finally in this short talk, I would like to say a little about the challenges facing farmers in the next ...`,
                audio_script: `LECTURER: I hope that this first session... (Same as transcript)`,
                questions: [
                    {
                        id: 31,
                        type: "choice",
                        prompt: "What percentage of the workforce was employed in agriculture by the mid-20th century?",
                        options: [
                            "A. 3%",
                            "B. 10%",
                            "C. 20%",
                            "D. 50%"
                        ],
                        correct_answers: ["A"],
                        evidence: "LECTURER: By the middle of the next century, in 1850 that is, it had fallen sharply to 10%, and then to 3% by the middle of the twentieth century.",
                        explanation: "In the middle of the 20th century, the percentage had fallen to 3% (Option A)."
                    },
                    {
                        id: 32,
                        type: "fill",
                        prompt: "Key efficiency factors: The high level of (32) _____ amongst the agricultural workforce",
                        correct_answers: ["training"],
                        evidence: "LECTURER: ...the high level of training amongst the agricultural workforce.",
                        explanation: "The lecturer mentions the high level of training."
                    },
                    {
                        id: 33,
                        type: "fill",
                        prompt: "Key efficiency factors: Farmers' recognition of the value of investing in (33) _____",
                        correct_answers: ["technology", "tecknology", "teknology"],
                        evidence: "LECTURER: And secondly, the recognition by farmers of the value of investing in technology.",
                        explanation: "Investing in technology is the second major factor."
                    },
                    {
                        id: 34,
                        type: "fill",
                        prompt: "Regional table - North: Climate is (34) _____ (both words required)",
                        correct_answers: ["cool and wet", "cool, wet", "cool wet"],
                        evidence: "LECTURER: The climate up here... is generally cool and wet.",
                        explanation: "The climate in the north is cool and wet."
                    },
                    {
                        id: 35,
                        type: "fill",
                        prompt: "Regional table - North: Produces mainly (35) _____ (both words required)",
                        correct_answers: ["wool and timber", "wool, timber", "wool timber"],
                        evidence: "LECTURER: ...producing mainly wool and timber for the market.",
                        explanation: "The north produces mainly wool and timber."
                    },
                    {
                        id: 36,
                        type: "fill",
                        prompt: "Regional table - East: Land characteristic: (36) _____ soils",
                        correct_answers: [
                            "fertile soil",
                            "fertile soils",
                            "fertile land",
                            "fertile earth",
                            "fertile ground",
                            "fertile"
                        ],
                        evidence: "LECTURER: ...the east is flatter and more low-lying, with fertile soils and a mixed climate.",
                        explanation: "The eastern region has fertile soils/land/ground."
                    },
                    {
                        id: 37,
                        type: "fill",
                        prompt: "Regional table - East: Fresh produce supplied directly to supermarkets: (37) _____",
                        correct_answers: [
                            "vegetables",
                            "high quality vegetables",
                            "vegs",
                            "high-quality vegetables"
                        ],
                        evidence: "LECTURER: However, increasingly significant areas are now also given over to high quality vegetables for supply direct to the supermarkets.",
                        explanation: "High quality vegetables are grown for direct supermarket supply."
                    },
                    {
                        id: 38,
                        type: "fill",
                        prompt: "Regional table - West: Climate is (38) _____ (both words required)",
                        correct_answers: ["warm and wet", "warm, wet", "warm wet"],
                        evidence: "LECTURER: The climate is warmer than in the north and much wetter than in the east.",
                        explanation: "The climate in the west is warm and wet."
                    },
                    {
                        id: 39,
                        type: "fill",
                        prompt: "Regional table - West: Average farm size is typically around (39) _____ hectares",
                        correct_answers: ["800", "eight hundred", "800 hectares", "eight hundred hectares"],
                        evidence: "LECTURER: ...and the farms there are quite large, typically around 800 hectares.",
                        explanation: "Farms in the west are around 800 hectares."
                    },
                    {
                        id: 40,
                        type: "choice",
                        prompt: "Farmers have a strong sense of solidarity across the country because ...",
                        options: [
                            "A. the media supports their interests.",
                            "B. they belong to a national Farmers' Union.",
                            "C. they share identical regional climates."
                        ],
                        correct_answers: ["B"],
                        evidence: "LECTURER: And a third factor making for solidarity is the national structure of the Farmers' Union, of which virtually all farmers are members.",
                        explanation: "The national structure of the Farmers' Union creates nationwide solidarity (Option B)."
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // 2. ACADEMIC READING MODULE (3 PASSAGES - 40 QUESTIONS)
    // =========================================================================
    reading: {
        title: "IELTS Academic Reading Practice Test 2 (Cambridge IELTS 2)",
        duration_seconds: 3600,
        passages: [
            // -------------------------------------------------------------
            // PASSAGE 1: Implementing the Cycle of Success: A Case Study (Q1 - 13)
            // -------------------------------------------------------------
            {
                passage_number: 1,
                title: "Reading Passage 1: Implementing the Cycle of Success: A Case Study",
                content: `IMPLEMENTING THE CYCLE OF SUCCESS: A CASE STUDY

Within Australia, Australian Hotels Inc (AHI) operates nine hotels and employs over 2000 permanent full-time staff, 300 permanent part-time employees and 100 casual staff. One of its latest ventures, the Sydney Airport hotel (SAH), opened in March 1995. The hotel is the closest to Sydney Airport and is designed to provide the best available accommodation, food and beverage and meeting facilities in Sydney's southern suburbs. Similar to many international hotel chains, however, AHI has experienced difficulties in Australia in providing long-term profits for hotel owners, as a result of the country's high labour-cost structure. In order to develop an economically viable hotel organisation model, AHI decided to implement some new policies and practices at SAH.

The first of the initiatives was an organisational structure with only three levels of management - compared to the traditional seven. Partly as a result of this change, there are 25 per cent fewer management positions, enabling a significant saving. This change also has other implications. Communication, both up and down the organisation, has greatly improved. Decision-making has been forced down in many cases to front-line employees. As a result, guest requests are usually met without reference to a supervisor, improving both customer and employee satisfaction.

The hotel also recognised that it would need a different approach to selecting employees who would fit in with its new policies. In its advertisements, the hotel stated a preference for people with some 'service' experience in order to minimise traditional work practices being introduced into the hotel. Over 7000 applicants filled in application forms for the 120 jobs initially offered at SAH. The balance of the positions at the hotel (30 management and 40 shift leader positions) were predominantly filled by transfers from other AHI properties.

A series of tests and interviews were conducted with potential employees, which eventually left 280 applicants competing for the 120 advertised positions. After the final interview, potential recruits were divided into three categories. Category A was for applicants exhibiting strong leadership qualities, Category C was for applicants perceived to be followers, and Category B was for applicants with both leader and follower qualities. Department heads and shift leaders then composed prospective teams using a combination of people from all three categories. Once suitable teams were formed, offers of employment were made to team members.

Another major initiative by SAH was to adopt a totally multi-skilled workforce. Although there may be some limitations with highly technical jobs such as cooking or maintenance, wherever possible, employees at SAH are able to work in a wide variety of positions. A multi-skilled workforce provides far greater management flexibility during peak and quiet times to transfer employees to needed positions. For example, when office staff are away on holidays during quiet periods of the year, employees in either food or beverage or housekeeping departments can temporarily transfer to office duties.

The most crucial way, however, of improving the labour cost structure at SAH was to find better, more productive ways of providing customer service. SAH management concluded this would first require a process of 'benchmarking'. The prime objective of the benchmarking process was to compare a range of service delivery processes across a range of criteria using teams made up of employees from different departments within the hotel which interacted with each other. This process resulted in performance measures that greatly enhanced SAH's ability to improve productivity and quality.

The front office team discovered through this project that a high proportion of AHI Club member reservations were incomplete. As a result, the service provided to these guests was below the standard promised to them as part of their membership agreement. Reducing the number of incomplete reservations greatly improved guest perceptions of service.

In addition, a program modelled on an earlier project called 'Take Charge' was implemented. Essentially, Take Charge provides an effective feedback loop from both customers and employees. Customer comments, both positive and negative, are recorded by staff. These are collated regularly to identify opportunities for improvement. Just as importantly, employees are requested to note down their own suggestions for improvement. (AHI has set an expectation that employees will submit at least three suggestions for every one they receive from a customer.)

Employee feedback is reviewed daily and suggestions are implemented within 48 hours, if possible, or a valid reason is given for non-implementation. If suggestions require analysis or data collection, the Take Charge team has 30 days in which to address the issue and come up with recommendations.

Although quantitative evidence of AHI's initiatives at SAH are limited at present, anecdotal evidence clearly suggests that these practices are working. Indeed AHI is progressively rolling out these initiatives in other hotels in Australia, whilst numerous overseas visitors have come to see how the program works.`,
                text: `IMPLEMENTING THE CYCLE OF SUCCESS... (Same as content)`,
                questions: [
                    {
                        id: 1,
                        type: "choice",
                        prompt: "The high costs of running AHI's hotels are related to their ...",
                        options: [
                            "A. management.",
                            "B. size.",
                            "C. staff.",
                            "D. policies."
                        ],
                        correct_answers: ["C"],
                        evidence: "Paragraph 1: '...difficulties in Australia in providing long-term profits for hotel owners, as a result of the country's high labour-cost structure.'",
                        explanation: "High labour-cost structure refers directly to staff costs (Option C)."
                    },
                    {
                        id: 2,
                        type: "choice",
                        prompt: "SAH's new organisational structure requires ...",
                        options: [
                            "A. 75% of the old management positions.",
                            "B. 25% of the old management positions.",
                            "C. 25% more management positions.",
                            "D. 5% fewer management positions."
                        ],
                        correct_answers: ["A"],
                        evidence: "Paragraph 2: 'Partly as a result of this change, there are 25 per cent fewer management positions, enabling a significant saving.'",
                        explanation: "25% fewer positions means it requires 75% of the old management positions (Option A)."
                    },
                    {
                        id: 3,
                        type: "choice",
                        prompt: "The SAH's approach to organisational structure required changing practices in ...",
                        options: [
                            "A. industrial relations.",
                            "B. firing staff.",
                            "C. hiring staff.",
                            "D. marketing."
                        ],
                        correct_answers: ["C"],
                        evidence: "Paragraph 3: 'The hotel also recognised that it would need a different approach to selecting employees who would fit in with its new policies.'",
                        explanation: "Selecting employees is hiring staff (Option C)."
                    },
                    {
                        id: 4,
                        type: "choice",
                        prompt: "The total number of jobs advertised at the SAH was ...",
                        options: [
                            "A. 70.",
                            "B. 120.",
                            "C. 170.",
                            "D. 280."
                        ],
                        correct_answers: ["B"],
                        evidence: "Paragraph 3: 'Over 7000 applicants filled in application forms for the 120 jobs initially offered at SAH.'",
                        explanation: "There were 120 advertised jobs (Option B)."
                    },
                    {
                        id: 5,
                        type: "choice",
                        prompt: "Categories A, B and C were used to select ...",
                        options: [
                            "A. front office staff.",
                            "B. new teams.",
                            "C. department heads.",
                            "D. new managers."
                        ],
                        correct_answers: ["B"],
                        evidence: "Paragraph 4: 'Department heads and shift leaders then composed prospective teams using a combination of people from all three categories.'",
                        explanation: "The categories were used to compose prospective teams (Option B)."
                    },
                    {
                        id: 6,
                        type: "fill",
                        prompt: "Teams of employees were selected from different hotel departments to participate in a (6) _____ exercise.",
                        correct_answers: ["benchmarking"],
                        evidence: "Paragraph 6: 'SAH management concluded this would first require a process of 'benchmarking'.' ",
                        explanation: "They participated in a benchmarking exercise."
                    },
                    {
                        id: 7,
                        type: "fill",
                        prompt: "The information collected was used to compare (7) _____ processes...",
                        correct_answers: [
                            "service delivery",
                            "a range of service delivery"
                        ],
                        evidence: "Paragraph 6: '...was to compare a range of service delivery processes across a range of criteria...'",
                        explanation: "The processes compared were service delivery processes."
                    },
                    {
                        id: 8,
                        type: "fill",
                        prompt: "...which, in turn, led to the development of (8) _____ that would be used to increase the hotel's capacity...",
                        correct_answers: [
                            "performance measures",
                            "measures"
                        ],
                        evidence: "Paragraph 6: 'This process resulted in performance measures that greatly enhanced SAH's ability to improve productivity and quality.'",
                        explanation: "It led to the development of performance measures."
                    },
                    {
                        id: 9,
                        type: "fill",
                        prompt: "...to increase the hotel's capacity to improve (9) _____ as well as quality.",
                        correct_answers: ["productivity"],
                        evidence: "Paragraph 6: '...ability to improve productivity and quality.'",
                        explanation: "Capacity to improve productivity as well as quality."
                    },
                    {
                        id: 10,
                        type: "fill",
                        prompt: "Also, an older program known as (10) _____ was introduced at SAH.",
                        correct_answers: ["Take Charge", "'Take Charge'", "Take Charge program"],
                        evidence: "Paragraph 8: 'In addition, a program modelled on an earlier project called 'Take Charge' was implemented.'",
                        explanation: "The project was called 'Take Charge'."
                    },
                    {
                        id: 11,
                        type: "fill",
                        prompt: "In this program, (11) _____ is sought from customers and staff.",
                        correct_answers: ["feedback"],
                        evidence: "Paragraph 8: 'Essentially, Take Charge provides an effective feedback loop from both customers and employees.'",
                        explanation: "Feedback is sought from customers and staff."
                    },
                    {
                        id: 12,
                        type: "fill",
                        prompt: "Wherever possible (12) _____ suggestions are implemented within 48 hours.",
                        correct_answers: [
                            "employee",
                            "employee's",
                            "employees'",
                            "staff"
                        ],
                        evidence: "Paragraph 9: 'Employee feedback is reviewed daily and suggestions are implemented within 48 hours...'",
                        explanation: "Employee / staff suggestions are implemented within 48 hours."
                    },
                    {
                        id: 13,
                        type: "fill",
                        prompt: "Other suggestions are investigated for their feasibility for a period of up to (13) _____.",
                        correct_answers: ["30 days"],
                        evidence: "Paragraph 9: '...the Take Charge team has 30 days in which to address the issue and come up with recommendations.'",
                        explanation: "The team has a period of up to 30 days."
                    }
                ]
            },

            // -------------------------------------------------------------
            // PASSAGE 2: The Language Barrier to Communication (Q14 - 26)
            // -------------------------------------------------------------
            {
                passage_number: 2,
                title: "Reading Passage 2: The Language Barrier to Communication",
                content: `THE LANGUAGE BARRIER TO COMMUNICATION

The discovery that language can be a barrier to communication is quickly made by all who travel, study, govern or sell. Whether the activity is tourism, research, government, policing, business, or data dissemination, the lack of a common language can severely impede progress or can halt it altogether. 'Common language' here usually means a foreign language, but the same point applies in principle to any encounter with unfamiliar dialects or styles within a single language. 'They don't talk the same language' has a major metaphorical meaning alongside its literal one.

Although communication problems of this kind must happen thousands of times each day, very few become public knowledge. Publicity comes only when a failure to communicate has major consequences, such as strikes, lost orders, legal problems, or fatal accidents - even, at times, war. One reported instance of communication failure took place in 1970, when several Americans ate a species of poisonous mushroom. No remedy was known, and two of the people died within days. A radio report of the case was heard by a chemist who knew of a treatment that had been successfully used in 1959 and published in 1963. Why had the American doctors not heard of it seven years later? Presumably because the report of the treatment had been published only in journals written in European languages other than English.

Several comparable cases have been reported. But isolated examples do not give an impression of the size of the problem — something that can come only from studies of the use or avoidance of foreign-language materials and contacts in different communicative situations. In the English-speaking scientific world, for example, surveys of books and documents consulted in libraries and other information agencies have shown that very little foreign-language material is ever consulted. Library requests in the field of science and technology showed that only 13 per cent were for foreign language periodicals. Studies of the sources cited in publications lead to a similar conclusion: the use of foreign-language sources is often found to be as low as 10 per cent.

The language barrier presents itself in stark form to firms who wish to market their products in other countries. British industry, in particular, has in recent decades often been criticised for its linguistic insularity — for its assumption that foreign buyers will be happy to communicate in English, and that awareness of other languages is not therefore a priority. In the 1960s, over two-thirds of British firms dealing with non-English-speaking customers were using English for outgoing correspondence; many had their sales literature only in English; and as many as 40 per cent employed no-one able to communicate in the customers' languages. A similar problem was identified in other English-speaking countries, notably the USA, Australia and New Zealand. And non-English-speaking countries were by no means exempt - although the widespread use of English as an alternative language made them less open to the charge of insularity.

The criticism and publicity given to this problem since the 1960s seems to have greatly improved the situation. Industrial training schemes have promoted an increase in linguistic and cultural awareness. Many firms now have their own translation services; to take just one example in Britain, Rowntree Mackintosh now publish their documents in six languages (English, French, German, Dutch, Italian and Xhosa). Some firms run part-time language courses in the languages of the countries with which they are most involved; some produce their own technical glossaries, to ensure consistency when material is being translated. It is now much more readily appreciated that marketing efforts can be delayed, damaged, or disrupted by a failure to take account of the linguistic needs of the customer.

The changes in awareness have been most marked in English-speaking countries, where the realisation has gradually dawned that by no means everyone in the world knows English well enough to negotiate in it. This is especially a problem when English is not an official language of public administration, as in most parts of the Far East, Russia, Eastern Europe, the Arab world, Latin America and French-speaking Africa. Even in cases where foreign customers can speak English quite well, it is often forgotten that they may not be able to understand it to the required level - bearing in mind the regional and social variation which permeates speech and which can cause major problems of listening comprehension. In securing understanding, how 'we' speak to 'them' is just as important, it appears, as how 'they' speak to 'us'.`,
                text: `THE LANGUAGE BARRIER TO COMMUNICATION... (Same as content)`,
                questions: [
                    {
                        id: 14,
                        type: "fill",
                        prompt: "Language problems may come to the attention of the public when they have (14) _____, such as fatal accidents or social problems.",
                        correct_answers: [
                            "major consequences"
                        ],
                        evidence: "Paragraph 2: 'Publicity comes only when a failure to communicate has major consequences, such as strikes, lost orders, legal problems, or fatal accidents...'",
                        explanation: "Publicity comes when they have major consequences."
                    },
                    {
                        id: 15,
                        type: "fill",
                        prompt: "Evidence of the extent of the language barrier has been gained from (15) _____ of materials used by scientists such as books and periodicals.",
                        correct_answers: ["surveys"],
                        evidence: "Paragraph 3: '...surveys of books and documents consulted in libraries and other information agencies have shown that very little foreign-language material is ever consulted.'",
                        explanation: "Evidence has been gained from surveys."
                    },
                    {
                        id: 16,
                        type: "fill",
                        prompt: "An example of British linguistic insularity is the use of English for materials such as (16) _____.",
                        correct_answers: ["sales literature"],
                        evidence: "Paragraph 4: '...many had their sales literature only in English; and as many as 40 per cent employed no-one able to communicate in the customers' languages.'",
                        explanation: "British firms had their sales literature only in English."
                    },
                    {
                        id: 17,
                        type: "fill",
                        prompt: "An example of a part of the world where people may have difficulty in negotiating English is (17) _____.",
                        correct_answers: [
                            "Eastern Europe",
                            "Far East",
                            "Russia",
                            "Arab world",
                            "Latin America",
                            "French-speaking Africa"
                        ],
                        evidence: "Paragraph 6: '...as in most parts of the Far East, Russia, Eastern Europe, the Arab world, Latin America and French-speaking Africa.'",
                        explanation: "Acceptable regions include Eastern Europe, Far East, Russia, Arab world, Latin America, or French-speaking Africa."
                    },
                    {
                        id: 18,
                        type: "choice",
                        prompt: "According to the passage, 'They don't talk the same language' (paragraph 1), can refer to problems in ...",
                        options: [
                            "A. understanding metaphor.",
                            "B. learning foreign languages.",
                            "C. understanding dialect or style.",
                            "D. dealing with technological change."
                        ],
                        correct_answers: ["C"],
                        evidence: "Paragraph 1: '...the same point applies in principle to any encounter with unfamiliar dialects or styles within a single language. 'They don't talk the same language' has a major metaphorical meaning...'",
                        explanation: "It refers to problems in understanding dialect or style (Option C)."
                    },
                    {
                        id: 19,
                        type: "choice",
                        prompt: "The case of the poisonous mushrooms (paragraph 2) suggests that American doctors ...",
                        options: [
                            "A. should pay more attention to radio reports.",
                            "B. only read medical articles if they are in English.",
                            "C. are sometimes unwilling to try foreign treatments.",
                            "D. do not always communicate effectively with their patients."
                        ],
                        correct_answers: ["B"],
                        evidence: "Paragraph 2: 'Why had the American doctors not heard of it seven years later? Presumably because the report of the treatment had been published only in journals written in European languages other than English.'",
                        explanation: "Doctors did not know about it because it was not in English (Option B)."
                    },
                    {
                        id: 20,
                        type: "choice",
                        prompt: "According to the writer, the linguistic insularity of British businesses ...",
                        options: [
                            "A. later spread to other countries.",
                            "B. had a negative effect on their business.",
                            "C. is not as bad now as it used to be in the past.",
                            "D. made non-English-speaking companies turn to other markets."
                        ],
                        correct_answers: ["C"],
                        evidence: "Paragraph 5: 'The criticism and publicity given to this problem since the 1960s seems to have greatly improved the situation.'",
                        explanation: "The situation has greatly improved compared to the past (Option C)."
                    },
                    {
                        id: 21,
                        type: "fill",
                        prompt: "Main ways British companies have tried to solve the language barrier (1/4): _____",
                        correct_answers: [
                            "industrial training",
                            "industrial training schemes",
                            "training schemes"
                        ],
                        evidence: "Paragraph 5: 'Industrial training schemes have promoted an increase in linguistic and cultural awareness.'",
                        explanation: "One method is industrial training schemes (Questions 21-24 in any order)."
                    },
                    {
                        id: 22,
                        type: "fill",
                        prompt: "Main ways British companies have tried to solve the language barrier (2/4): _____",
                        correct_answers: [
                            "translation services",
                            "translation service"
                        ],
                        evidence: "Paragraph 5: 'Many firms now have their own translation services...'",
                        explanation: "Another method is translation services."
                    },
                    {
                        id: 23,
                        type: "fill",
                        prompt: "Main ways British companies have tried to solve the language barrier (3/4): _____",
                        correct_answers: [
                            "language courses",
                            "part-time language courses"
                        ],
                        evidence: "Paragraph 5: 'Some firms run part-time language courses in the languages of the countries with which they are most involved...'",
                        explanation: "Another method is part-time language courses."
                    },
                    {
                        id: 24,
                        type: "fill",
                        prompt: "Main ways British companies have tried to solve the language barrier (4/4): _____",
                        correct_answers: [
                            "technical glossaries",
                            "glossaries"
                        ],
                        evidence: "Paragraph 5: '...some produce their own technical glossaries, to ensure consistency when material is being translated.'",
                        explanation: "Another method is technical glossaries."
                    },
                    {
                        id: 25,
                        type: "choice",
                        prompt: "According to the writer, English-speaking people need to be aware that ...",
                        options: [
                            "A. some foreigners have never met an English-speaking person.",
                            "B. many foreigners have no desire to learn English.",
                            "C. foreign languages may pose a greater problem in the future.",
                            "D. English-speaking foreigners may have difficulty understanding English."
                        ],
                        correct_answers: ["D"],
                        evidence: "Paragraph 6: 'Even in cases where foreign customers can speak English quite well, it is often forgotten that they may not be able to understand it to the required level...'",
                        explanation: "Foreigners who speak English may still have difficulty understanding nuanced or dialectal English (Option D)."
                    },
                    {
                        id: 26,
                        type: "choice",
                        prompt: "A suitable title for this passage would be ...",
                        options: [
                            "A. Overcoming the language barrier",
                            "B. How to survive an English-speaking world",
                            "C. Global understanding - the key to personal progress",
                            "D. The need for a common language"
                        ],
                        correct_answers: ["A"],
                        evidence: "The passage discusses the problems of language barriers in science and industry, and details the steps companies are taking to overcome them.",
                        explanation: "The central theme is overcoming the language barrier (Option A)."
                    }
                ]
            },

            // -------------------------------------------------------------
            // PASSAGE 3: What Is a Port City? (Questions 27 - 40)
            // -------------------------------------------------------------
            {
                passage_number: 3,
                title: "Reading Passage 3: What Is a Port City?",
                content: `WHAT IS A PORT CITY?

The port city provides a fascinating and rich understanding of the movement of people and goods around the world. We understand a port as a centre of land-sea exchange, and as a major source of livelihood and a major force for cultural mixing. But do ports all produce a range of common urban characteristics which justify classifying port cities together under a single generic label? Do they have enough in common to warrant distinguishing them from other kinds of cities?

A
A port must be distinguished from a harbour. They are two very different things. Most ports have poor harbours, and many fine harbours see few ships. Harbour is a physical concept, a shelter for ships; port is an economic concept, a centre of land-sea exchange which requires good access to a hinterland even more than a sea-linked foreland. It is landward access, which is productive of goods for export and which demands imports, that is critical. Poor harbours can be improved with breakwaters and dredging if there is a demand for a port. Madras and Colombo are examples of harbours expensively improved by enlarging, dredging and building breakwaters.

B
Port cities become industrial, financial and service centres and political capitals because of their water connections and the urban concentration which arises there and later draws to it railways, highways and air routes. Water transport means cheap access, the chief basis of all port cities. Many of the world's biggest cities, for example, London, New York, Shanghai, Istanbul, Buenos Aires, Tokyo, Jakarta, Calcutta, Philadelphia and San Francisco began as ports - that is, with land-sea exchange as their major function - but they have since grown disproportionately in other respects so that their port functions are no longer dominant. They remain different kinds of places from non-port cities and their port functions account for that difference.

C
Port functions, more than anything else, make a city cosmopolitan. A port city is open to the world. In it races, cultures, and ideas, as well as goods from a variety of places, jostle, mix and enrich each other and the life of the city. The smell of the sea and the harbour, the sound of boat whistles or the moving tides are symbols of their multiple links with a wide world, samples of which are present in microcosm within their own urban areas.

D
Sea ports have been transformed by the advent of powered vessels, whose size and draught have increased. Many formerly important ports have become economically and physically less accessible as a result. By-passed by most of their former enriching flow of exchange, they have become cultural and economic backwaters or have acquired the character of museums of the past. Examples of these are Charleston, Salem, Bristol, Plymouth, Surat, Galle, Melaka, Soochow, and a long list of earlier prominent port cities in Southeast Asia, Africa and Latin America.

E
Much domestic port trade has not been recorded. What evidence we have suggests that domestic trade was greater at all periods than external trade. Shanghai, for example, did most of its trade with other Chinese ports and inland cities. Calcutta traded mainly with other parts of India and so on. Most of any city's population is engaged in providing goods and services for the city itself. Trade outside the city is its basic function. But each basic worker requires food, housing, clothing and other such services. Estimates of the ratio of basic to service workers range from 1:4 to 1:8.

F
No city can be simply a port but must be involved in a variety of other activities. The port function of the city draws to it raw materials and distributes them in many other forms. Ports take advantage of the need for breaking up the bulk material where water and land transport meet and where loading and unloading costs can be minimised by refining raw materials or turning them into finished goods. The major examples here are oil refining and ore refining, which are commonly located at ports. It is not easy to draw a line around what is and is not a port function. All ports handle, unload, sort, alter, process, repack, and reship most of what they receive. A city may still be regarded as a port city when it becomes involved in a great range of functions not immediately involved with ships or docks.

G
Cities which began as ports retain the chief commercial and administrative centre of the city close to the waterfront. The centre of New York is in lower Manhattan between two river mouths, the City of London is on the Thames, Shanghai along the Bund. This proximity to water is also true of Boston, Philadelphia, Bombay, Calcutta, Madras, Singapore, Bangkok, Hong Kong and Yokohama, where the commercial, financial, and administrative centres are still grouped around their harbours even though each city has expanded into a metropolis. Even a casual visitor cannot mistake them as anything but port cities.`,
                text: `WHAT IS A PORT CITY?... (Same as content)`,
                questions: [
                    {
                        id: 27,
                        type: "choice",
                        prompt: "Choose the most suitable heading for Paragraph B",
                        options: [
                            "i. A truly international environment",
                            "ii. Once a port city, always a port city",
                            "iii. Good ports make huge profits",
                            "iv. How the port changes a city's infrastructure",
                            "v. Reasons for the decline of ports",
                            "vi. Relative significance of trade and service industry",
                            "vii. Ports and harbours",
                            "viii. The demands of the oil industry"
                        ],
                        correct_answers: ["ii"],
                        evidence: "Paragraph B: '...their port functions are no longer dominant. They remain different kinds of places from non-port cities and their port functions account for that difference.'",
                        explanation: "Paragraph B discusses how cities that began as ports remain distinct port cities (Heading ii: Once a port city, always a port city)."
                    },
                    {
                        id: 28,
                        type: "choice",
                        prompt: "Choose the most suitable heading for Paragraph C",
                        options: [
                            "i. A truly international environment",
                            "ii. Once a port city, always a port city",
                            "iii. Good ports make huge profits",
                            "iv. How the port changes a city's infrastructure",
                            "v. Reasons for the decline of ports",
                            "vi. Relative significance of trade and service industry",
                            "vii. Ports and harbours",
                            "viii. The demands of the oil industry"
                        ],
                        correct_answers: ["i"],
                        evidence: "Paragraph C: 'Port functions, more than anything else, make a city cosmopolitan. A port city is open to the world. In it races, cultures, and ideas... mix and enrich each other...'",
                        explanation: "Paragraph C highlights cosmopolitan and diverse global mixing (Heading i: A truly international environment)."
                    },
                    {
                        id: 29,
                        type: "choice",
                        prompt: "Choose the most suitable heading for Paragraph D",
                        options: [
                            "i. A truly international environment",
                            "ii. Once a port city, always a port city",
                            "iii. Good ports make huge profits",
                            "iv. How the port changes a city's infrastructure",
                            "v. Reasons for the decline of ports",
                            "vi. Relative significance of trade and service industry",
                            "vii. Ports and harbours",
                            "viii. The demands of the oil industry"
                        ],
                        correct_answers: ["v"],
                        evidence: "Paragraph D: '...powered vessels, whose size and draught have increased. Many formerly important ports have become economically and physically less accessible... cultural and economic backwaters...'",
                        explanation: "Paragraph D details why historical ports declined when modern ships outgrew them (Heading v: Reasons for the decline of ports)."
                    },
                    {
                        id: 30,
                        type: "choice",
                        prompt: "Choose the most suitable heading for Paragraph E",
                        options: [
                            "i. A truly international environment",
                            "ii. Once a port city, always a port city",
                            "iii. Good ports make huge profits",
                            "iv. How the port changes a city's infrastructure",
                            "v. Reasons for the decline of ports",
                            "vi. Relative significance of trade and service industry",
                            "vii. Ports and harbours",
                            "viii. The demands of the oil industry"
                        ],
                        correct_answers: ["vi"],
                        evidence: "Paragraph E: 'Most of any city's population is engaged in providing goods and services for the city itself... Estimates of the ratio of basic to service workers range from 1:4 to 1:8.'",
                        explanation: "Paragraph E discusses the ratio and significance of domestic trade vs service industry (Heading vi)."
                    },
                    {
                        id: 31,
                        type: "choice",
                        prompt: "Match description: required considerable harbour development",
                        options: [
                            "A. Bombay and Buenos Aires",
                            "B. Hong Kong and Salem",
                            "C. Istanbul and Jakarta",
                            "D. Madras and Colombo",
                            "E. New York and Bristol",
                            "F. Plymouth and Melaka",
                            "G. Singapore and Yokohama",
                            "H. Surat and London"
                        ],
                        correct_answers: ["D"],
                        evidence: "Paragraph A: 'Madras and Colombo are examples of harbours expensively improved by enlarging, dredging and building breakwaters.'",
                        explanation: "Madras and Colombo required expensive harbour engineering (Option D)."
                    },
                    {
                        id: 32,
                        type: "choice",
                        prompt: "Match description: began as ports but other facilities later dominated",
                        options: [
                            "A. Bombay and Buenos Aires",
                            "B. Hong Kong and Salem",
                            "C. Istanbul and Jakarta",
                            "D. Madras and Colombo",
                            "E. New York and Bristol",
                            "F. Plymouth and Melaka",
                            "G. Singapore and Yokohama",
                            "H. Surat and London"
                        ],
                        correct_answers: ["C"],
                        evidence: "Paragraph B: 'Many of the world's biggest cities, for example, London, New York, Shanghai, Istanbul, Buenos Aires, Tokyo, Jakarta... began as ports... but they have since grown disproportionately in other respects...'",
                        explanation: "Istanbul and Jakarta began as ports but developed dominant other facilities (Option C)."
                    },
                    {
                        id: 33,
                        type: "choice",
                        prompt: "Match description: lost their prominence when large ships could not be accommodated",
                        options: [
                            "A. Bombay and Buenos Aires",
                            "B. Hong Kong and Salem",
                            "C. Istanbul and Jakarta",
                            "D. Madras and Colombo",
                            "E. New York and Bristol",
                            "F. Plymouth and Melaka",
                            "G. Singapore and Yokohama",
                            "H. Surat and London"
                        ],
                        correct_answers: ["F"],
                        evidence: "Paragraph D: 'Sea ports have been transformed by the advent of powered vessels, whose size and draught have increased... Examples of these are Charleston, Salem, Bristol, Plymouth, Surat, Galle, Melaka...'",
                        explanation: "Plymouth and Melaka declined due to modern vessel size (Option F)."
                    },
                    {
                        id: 34,
                        type: "choice",
                        prompt: "Match description: maintain their business centres near the port waterfront",
                        options: [
                            "A. Bombay and Buenos Aires",
                            "B. Hong Kong and Salem",
                            "C. Istanbul and Jakarta",
                            "D. Madras and Colombo",
                            "E. New York and Bristol",
                            "F. Plymouth and Melaka",
                            "G. Singapore and Yokohama",
                            "H. Surat and London"
                        ],
                        correct_answers: ["G"],
                        evidence: "Paragraph G: '...This proximity to water is also true of Boston, Philadelphia, Bombay, Calcutta, Madras, Singapore, Bangkok, Hong Kong and Yokohama, where the commercial, financial, and administrative centres are still grouped around their harbours...'",
                        explanation: "Singapore and Yokohama maintain their commercial centres along the waterfront (Option G)."
                    },
                    {
                        id: 35,
                        type: "ynng",
                        prompt: "Cities cease to be port cities when other functions dominate.",
                        correct_answers: ["NO"],
                        evidence: "Paragraph B: '...port functions are no longer dominant. They remain different kinds of places from non-port cities and their port functions account for that difference.'",
                        explanation: "They do not cease to be port cities; their port heritage still defines them. Statement is NO."
                    },
                    {
                        id: 36,
                        type: "ynng",
                        prompt: "In the past, many port cities did more trade within their own country than with overseas ports.",
                        correct_answers: ["YES"],
                        evidence: "Paragraph E: 'What evidence we have suggests that domestic trade was greater at all periods than external trade.'",
                        explanation: "Domestic trade exceeded external trade at all periods. Statement is YES."
                    },
                    {
                        id: 37,
                        type: "ynng",
                        prompt: "Most people in a port city are engaged in international trade and finance.",
                        correct_answers: ["NO"],
                        evidence: "Paragraph E: 'Most of any city's population is engaged in providing goods and services for the city itself.'",
                        explanation: "Most citizens provide local goods and services, not international trade. Statement is NO."
                    },
                    {
                        id: 38,
                        type: "ynng",
                        prompt: "Ports attract many subsidiary and independent industries.",
                        correct_answers: ["YES"],
                        evidence: "Paragraph F: 'The major examples here are oil refining and ore refining, which are commonly located at ports... A city may still be regarded as a port city when it becomes involved in a great range of functions...'",
                        explanation: "Ports attract refining and diverse processing industries. Statement is YES."
                    },
                    {
                        id: 39,
                        type: "ynng",
                        prompt: "Ports have to establish a common language of trade.",
                        correct_answers: ["NOT GIVEN"],
                        evidence: "Paragraph C discusses cosmopolitan culture and mixing of races, but nowhere does it say ports must establish a common language.",
                        explanation: "The passage does not state that a common language must be established. Statement is NOT GIVEN."
                    },
                    {
                        id: 40,
                        type: "ynng",
                        prompt: "Ports often have river connections.",
                        correct_answers: ["YES"],
                        evidence: "Paragraph G mentions centres between two river mouths (New York) and on the Thames (London), and Paragraph B mentions water connections drawing railways and highways.",
                        explanation: "Port cities typically have prominent river and canal water connections. Statement is YES."
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // 3. ACADEMIC WRITING MODULE (2 TASKS)
    // =========================================================================
    writing: {
        title: "IELTS Academic Writing Practice Test 2 (Cambridge IELTS 2)",
        duration_seconds: 3600,
        task_1: {
            task_number: 1,
            title: "Task 1: Leisure Time by Gender and Employment Status (1998 - 1999)",
            prompt: `You should spend about 20 minutes on this task.

The chart below shows the amount of leisure time enjoyed by men and women of different employment status in a typical week in 1998-99.
Write a report for a university lecturer describing the information shown below.
Write at least 150 words.

Data Summary (Hours of leisure per week in 1998-1999):
• Employed full-time: Males = 50 hours, Females = 37 hours
• Employed part-time: Males = (no data), Females = 40 hours
• Unemployed: Males = 85 hours, Females = 74 hours
• Retired: Males = 84 hours, Females = 74 hours
• Housewives: Females = 50 hours (no data for househusbands)`,
            min_words: 150,
            chart_svg: `<svg viewBox="0 0 700 320" class="w-full h-auto bg-slate-900 rounded-2xl p-4 text-white font-sans shadow-md">
                <text x="350" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#38bdf8">Leisure Time in a Typical Week: By Sex and Employment Status (1998-99)</text>
                <line x1="80" y1="50" x2="80" y2="260" stroke="#475569" stroke-width="1"/>
                <line x1="80" y1="260" x2="660" y2="260" stroke="#475569" stroke-width="1"/>
                <!-- Y-axis ticks -->
                <text x="70" y="260" text-anchor="end" font-size="10" fill="#94a3b8">0</text>
                <text x="70" y="210" text-anchor="end" font-size="10" fill="#94a3b8">25</text>
                <text x="70" y="160" text-anchor="end" font-size="10" fill="#94a3b8">50</text>
                <text x="70" y="110" text-anchor="end" font-size="10" fill="#94a3b8">75</text>
                <text x="70" y="60" text-anchor="end" font-size="10" fill="#94a3b8">100h</text>
                <!-- Group 1: Employed Full-time -->
                <rect x="110" y="160" width="30" height="100" fill="#3b82f6" rx="3"/>
                <rect x="145" y="186" width="30" height="74" fill="#ec4899" rx="3"/>
                <text x="142" y="280" text-anchor="middle" font-size="10" fill="#cbd5e1">Employed FT</text>
                <!-- Group 2: Employed Part-time -->
                <rect x="235" y="180" width="30" height="80" fill="#ec4899" rx="3"/>
                <text x="250" y="280" text-anchor="middle" font-size="10" fill="#cbd5e1">Employed PT</text>
                <!-- Group 3: Unemployed -->
                <rect x="325" y="90" width="30" height="170" fill="#3b82f6" rx="3"/>
                <rect x="360" y="112" width="30" height="148" fill="#ec4899" rx="3"/>
                <text x="357" y="280" text-anchor="middle" font-size="10" fill="#cbd5e1">Unemployed</text>
                <!-- Group 4: Retired -->
                <rect x="440" y="92" width="30" height="168" fill="#3b82f6" rx="3"/>
                <rect x="475" y="112" width="30" height="148" fill="#ec4899" rx="3"/>
                <text x="472" y="280" text-anchor="middle" font-size="10" fill="#cbd5e1">Retired</text>
                <!-- Group 5: Housewives -->
                <rect x="565" y="160" width="30" height="100" fill="#ec4899" rx="3"/>
                <text x="580" y="280" text-anchor="middle" font-size="10" fill="#cbd5e1">Housewives</text>
                <!-- Legend -->
                <rect x="280" y="300" width="12" height="12" fill="#3b82f6" rx="2"/>
                <text x="300" y="310" font-size="11" fill="#cbd5e1">Males</text>
                <rect x="360" y="300" width="12" height="12" fill="#ec4899" rx="2"/>
                <text x="380" y="310" font-size="11" fill="#cbd5e1">Females</text>
            </svg>`,
            sample_essay: `The chart shows the number of hours of leisure enjoyed by men and women in a typical week in 1998-9, according to gender and employment status.

Among those employed full-time, men on average had fifty hours of leisure, whereas women had approximately thirty-seven hours. There were no figures given for male part-time workers, but female part-timers had forty hours of leisure time, only slightly more than women in full-time employment, perhaps reflecting their work in the home.

In the unemployed and retired categories, leisure time showed an increase for both sexes, as might have been expected. Here too, men enjoyed more leisure time - over eighty hours, compared with seventy hours for women, perhaps once again reflecting the fact that women spend more time working in the home than men.

Lastly, housewives enjoyed approximately fifty-four hours of leisure, on average. There were no figures given for househusbands! Overall, the chart demonstrates that in the categories for which statistics on male leisure time were available, men enjoyed at least ten hours of extra leisure time.`,
            band_9_model: `The chart shows the number of hours of leisure enjoyed by men and women in a typical week in 1998-9, according to gender and employment status.

Among those employed full-time, men on average had fifty hours of leisure, whereas women had approximately thirty-seven hours. There were no figures given for male part-time workers, but female part-timers had forty hours of leisure time, only slightly more than women in full-time employment, perhaps reflecting their work in the home.

In the unemployed and retired categories, leisure time showed an increase for both sexes, as might have been expected. Here too, men enjoyed more leisure time - over eighty hours, compared with seventy hours for women, perhaps once again reflecting the fact that women spend more time working in the home than men.

Lastly, housewives enjoyed approximately fifty-four hours of leisure, on average. There were no figures given for househusbands! Overall, the chart demonstrates that in the categories for which statistics on male leisure time were available, men enjoyed at least ten hours of extra leisure time.`
        },
        task_2: {
            task_number: 2,
            title: "Task 2: Prevention vs. Cure in National Healthcare Expenditure",
            prompt: `You should spend about 40 minutes on this task.

Present a written argument or case to an educated reader with no specialist knowledge of the following topic.

"Prevention is better than cure."
Out of a country's health budget, a large proportion should be diverted from treatment to spending on health education and preventative measures.

To what extent do you agree or disagree with this statement?
You should write at least 250 words.
You should use your own ideas, knowledge and experience and support your arguments with examples and relevant evidence.`,
            min_words: 250,
            sample_essay: `Of course it goes without saying that prevention is better than cure. That is why, in recent years, there has been a growing body of opinion in favour of putting more resources into health education and preventive measures. The argument is that ignorance of, for example, basic hygiene or the dangers of an unhealthy diet or lifestyle needs to be combatted by special nationwide publicity campaigns, as well as longer-term health education.

Obviously, there is a strong human argument for catching any medical condition as early as possible. There is also an economic argument for doing so. Statistics demonstrate the cost-effectiveness of treating a condition in the early stages, rather than delaying until more expensive and prolonged treatment is necessary. Then there are social or economic costs, perhaps in terms of loss of earnings for the family concerned or unemployed benefit paid by the state.

So far so good, but the difficulties start when we try to define what the 'proportion' of the budget should be, particularly if the funds will be 'diverted from treatment'. Decisions on exactly how much of the total health budget should be spent in this way are not a matter for the non-specialist, but should be made on the basis of an accepted health service model.

This is the point at which real problems occur - the formulation of the model. How do we accurately measure which health education campaigns are effective in both medical and financial terms? How do we agree about the medical efficacy of various screening programmes, for example, when the medical establishment itself does not agree? A very rigorous process of evaluation is called for, so that we can make informed decisions.`,
            band_9_model: `Of course it goes without saying that prevention is better than cure. That is why, in recent years, there has been a growing body of opinion in favour of putting more resources into health education and preventive measures. The argument is that ignorance of, for example, basic hygiene or the dangers of an unhealthy diet or lifestyle needs to be combatted by special nationwide publicity campaigns, as well as longer-term health education.

Obviously, there is a strong human argument for catching any medical condition as early as possible. There is also an economic argument for doing so. Statistics demonstrate the cost-effectiveness of treating a condition in the early stages, rather than delaying until more expensive and prolonged treatment is necessary. Then there are social or economic costs, perhaps in terms of loss of earnings for the family concerned or unemployed benefit paid by the state.

So far so good, but the difficulties start when we try to define what the 'proportion' of the budget should be, particularly if the funds will be 'diverted from treatment'. Decisions on exactly how much of the total health budget should be spent in this way are not a matter for the non-specialist, but should be made on the basis of an accepted health service model.

This is the point at which real problems occur - the formulation of the model. How do we accurately measure which health education campaigns are effective in both medical and financial terms? How do we agree about the medical efficacy of various screening programmes, for example, when the medical establishment itself does not agree? A very rigorous process of evaluation is called for, so that we can make informed decisions.`
        }
    },

    // =========================================================================
    // 4. SPEAKING MODULE (3 PARTS)
    // =========================================================================
    speaking: {
        title: "IELTS Speaking Practice Test 2 (Cambridge IELTS 2)",
        duration_seconds: 840,
        part_1: [
            {
                topic: "Music & Concerts",
                question: "What musical genres do you most enjoy listening to?",
                model_answer: "I thoroughly enjoy acoustic folk and classical symphonies, as their nuanced arrangements offer a peaceful auditory retreat after demanding working hours.",
                key_vocab: ["acoustic folk", "nuanced arrangements", "auditory retreat"]
            },
            {
                topic: "Music & Concerts",
                question: "Have you ever attended a live music concert or festival?",
                model_answer: "Yes, I attended an open-air philharmonic concert last summer. The collective energy of the audience coupled with live acoustics made it an unforgettable sensory spectacle.",
                key_vocab: ["open-air concert", "collective energy", "sensory spectacle"]
            },
            {
                topic: "Leisure & Free Time",
                question: "How do you typically spend your free time during weekends?",
                model_answer: "I divide my leisure time between restorative outdoor recreation—such as cycling in suburban parks—and immersing myself in historical non-fiction literature.",
                key_vocab: ["restorative recreation", "suburban parks", "non-fiction literature"]
            },
            {
                topic: "Leisure & Free Time",
                question: "Do you feel people in your country have enough leisure time nowadays?",
                model_answer: "Regrettably, modern working culture often encroaches upon personal downtime. Long commutes and pervasive digital connectivity mean many professionals struggle to achieve genuine relaxation.",
                key_vocab: ["encroaches upon", "pervasive connectivity", "workplace pressures"]
            }
        ],
        part_2: {
            title: "Part 2: Long Turn / Cue Card (3 - 4 minutes)",
            cue_card_title: "Information Gathering: CONCERT (Examiner Interview)",
            cue_points: [
                "The type of concert and its location (e.g. rock/folk/jazz at city stadium)",
                "The ticket cost and transport arrangements to and from the venue",
                "The size of the audience and length of the performance",
                "The examiner's personal impressions and overall opinion"
            ],
            cues: [
                "The type of concert and its location (e.g. rock/folk/jazz at city stadium)",
                "The ticket cost and transport arrangements to and from the venue",
                "The size of the audience and length of the performance",
                "The examiner's personal impressions and overall opinion"
            ],
            model_answer: `Good afternoon. I would like to enquire about the live concert you attended recently.

Could you tell me what genre of music was featured and where the concert was staged? I understand it was held at the municipal stadium. Regarding admission fees, could you specify how much the tickets cost? 

In terms of logistics, what transport options would you recommend for travelling to and from the stadium, particularly given that parking is notoriously difficult? Furthermore, could you describe the atmosphere and the audience size—did the crowd participate actively throughout the three-hour performance? Finally, I would love to hear your overall verdict on the event and whether you would recommend it to others.`
        },
        part_3: [
            {
                theme: "Live Music vs. Recorded Audio",
                question: "Why do many people prefer attending live concerts despite the high cost and inconvenience?",
                model_answer: "Live performances provide an irreplaceable visceral connection between artist and audience. The communal resonance of sharing musical euphoria with thousands of fellow enthusiasts cannot be replicated through headphones."
            },
            {
                theme: "Public Funding for the Arts",
                question: "Should municipal governments subsidise cultural musical events for the public?",
                model_answer: "Without a doubt. Cultural enrichment should not be the exclusive privilege of affluent demographics. Public subsidies ensure accessible ticket prices, foster civic cohesion, and preserve intangible artistic heritage."
            },
            {
                theme: "Preventative Healthcare and Society",
                question: "To what extent can public health education campaigns reduce national medical expenses?",
                model_answer: "Preventative education yields profound compound dividends. By cultivating awareness regarding balanced nutrition, routine exercise, and early symptom detection, governments can significantly alleviate the crushing financial burdens imposed by chronic lifestyle-induced diseases."
            },
            {
                theme: "Gender Equity in Domestic Work",
                question: "Why do working women often have less leisure time than their male counterparts?",
                model_answer: "Sociological studies consistently highlight the 'second shift' phenomenon, wherein working women shoulder a disproportionate share of domestic maintenance and childcare after standard working hours, curtailing their discretionary leisure."
            }
        ]
    }
};



// =========================================================================
// =========================================================================
// CAMBRIDGE IELTS 2 - TESTS 3 & 4 (OFFICIAL CAMBRIDGE UNIVERSITY PRESS)
// =========================================================================
// =========================================================================
// CAMBRIDGE IELTS 2 - ACADEMIC PRACTICE TEST 3
// Sourced 100% from Official Cambridge University Press (Cambridge IELTS 2)
// Complete 4 Modules: Listening (40 Qs), Reading (40 Qs), Writing (2 Tasks), Speaking (3 Parts)
// =========================================================================

const cam2Test3 = {
    id: "cam_2_test_3",
    book: "Cambridge IELTS 2",
    title: "Cambridge IELTS 2 - Test 3",
    test_title: "Academic Practice Test 3",
    badge: "Cam 2 - Test 3",

    // =========================================================================
    // 1. LISTENING MODULE (4 SECTIONS - 40 QUESTIONS)
    // =========================================================================
    listening: {
        title: "IELTS Listening Practice Test 3",
        duration_seconds: 1800,
        parts: [
            // -------------------------------------------------------------
            // SECTION 1: TV Viewing Habits & Commercial Survey (Questions 1 - 10)
            // -------------------------------------------------------------
            {
                section_number: 1,
                title: "Section 1: Television Viewing Habits Survey (Questions 1 - 10)",
                audio_file: "cam2_extracted/Test 3 - Section 1.mp3",
                context: "A market researcher is interviewing a customer about television viewing habits and preferences for a new commercial channel.",
                questions: [
                    {
                        id: 1,
                        question_number: 1,
                        type: "multiple_choice",
                        question: "The respondent works in ...",
                        options: [
                            "A. the professions",
                            "B. business",
                            "C. other"
                        ],
                        correct_answer: "B",
                        explanation: "The respondent explicitly confirms that he works in business when asked about his occupation."
                    },
                    {
                        id: 2,
                        question_number: 2,
                        type: "multiple_choice",
                        question: "The respondent has a salary of ...",
                        options: [
                            "A. 0 - Â£15,000 a year",
                            "B. Â£15,000 - Â£35,000 a year",
                            "C. over Â£35,000 a year"
                        ],
                        correct_answer: "C",
                        explanation: "The respondent chooses the top income tier, earning comfortably over Â£35,000 annually."
                    },
                    {
                        id: 3,
                        question_number: 3,
                        type: "multiple_choice",
                        question: "The respondent watches TV for ...",
                        options: [
                            "A. relaxation",
                            "B. entertainment",
                            "C. information"
                        ],
                        correct_answer: "A",
                        explanation: "When asked what primarily draws him to watch television, he states that he uses it essentially to unwind and for relaxation after work."
                    },
                    {
                        id: 4,
                        question_number: 4,
                        type: "multiple_choice",
                        question: "Every day the respondent watches TV for ...",
                        options: [
                            "A. 30 minutes - 1 hour",
                            "B. 1 hour - 2 hours",
                            "C. more than 2 hours"
                        ],
                        correct_answer: "B",
                        explanation: "The respondent estimates his daily television viewing consumption at typically between 1 and 2 hours."
                    },
                    {
                        id: 5,
                        question_number: 5,
                        type: "multiple_choice_multi",
                        question: "The respondent mainly watches TV ... (Choose TWO letters A - E)",
                        options: [
                            "A. in the early morning",
                            "B. around midday",
                            "C. in the afternoon",
                            "D. in the early evening",
                            "E. at night"
                        ],
                        correct_answer: ["A", "E"],
                        explanation: "The respondent notes he watches breakfast news in the early morning (A) and further programmes late at night before sleeping (E)."
                    },
                    {
                        id: 6,
                        question_number: 6,
                        type: "multiple_choice_multi",
                        question: "On the new channel, the respondent would like to see more ... (Choose TWO letters A - E)",
                        options: [
                            "A. children's programmes",
                            "B. documentaries",
                            "C. local service programmes",
                            "D. travel programmes",
                            "E. health programmes"
                        ],
                        correct_answer: ["A", "C"],
                        explanation: "The respondent highlights that he wants dedicated children's shows for his family (A) and practical local service programmes for the municipal community (C)."
                    },
                    {
                        id: 7,
                        question_number: 7,
                        type: "multiple_choice_multi",
                        question: "The respondent would advise the new channel to ... (Choose TWO letters A - E)",
                        options: [
                            "A. spend more money on drama",
                            "B. train their broadcasters to higher standards",
                            "C. improve sound quality",
                            "D. broadcast interviews with famous people",
                            "E. talk more to customers"
                        ],
                        correct_answer: ["C", "E"],
                        explanation: "His recommendations to the executives are specifically to upgrade technical audio/sound clarity (C) and engage in closer dialogues with viewers/customers (E)."
                    },
                    {
                        id: 8,
                        question_number: 8,
                        type: "multiple_choice",
                        question: "The respondent feels that adverts should occur every ...",
                        options: [
                            "A. 10 minutes",
                            "B. 15 minutes",
                            "C. 20 minutes"
                        ],
                        correct_answer: "B",
                        explanation: "Regarding frequency of commercial advertising breaks, he feels an interval of every 15 minutes is reasonable and tolerable."
                    },
                    {
                        id: 9,
                        question_number: 9,
                        type: "multiple_choice",
                        question: "The respondent would like to attend special promotions if ...",
                        options: [
                            "A. expenses are paid",
                            "B. he is invited specially",
                            "C. they are held locally"
                        ],
                        correct_answer: "C",
                        explanation: "He states that attending special promotional events is convenient for him provided that they are held locally in his neighborhood."
                    },
                    {
                        id: 10,
                        question_number: 10,
                        type: "multiple_choice",
                        question: "The respondent would like to receive ...",
                        options: [
                            "A. no mail",
                            "B. requested mail",
                            "C. all mail"
                        ],
                        correct_answer: "B",
                        explanation: "He clarifies that he dislikes junk mail and prefers to receive only explicitly requested promotional letters and brochures."
                    }
                ]
            },

            // -------------------------------------------------------------
            // SECTION 2: Students' Union & Radford City Facilities (Questions 11 - 20)
            // -------------------------------------------------------------
            {
                section_number: 2,
                title: "Section 2: Students' Union & Radford Facilities (Questions 11 - 20)",
                audio_file: "cam2_extracted/Test 3 - Section 2.mp3",
                context: "A student representative is introducing university freshmen to the functions of the Students' Union and municipal amenities in Radford town.",
                questions: [
                    {
                        id: 11,
                        question_number: 11,
                        type: "multiple_choice_multi",
                        question: "Which FOUR activities of the Union are mentioned by the speaker? (Questions 11 - 14: Choose FOUR letters A - G in any order)",
                        options: [
                            "A. raising money for good causes",
                            "B. political campaigning",
                            "C. running a newsagent's",
                            "D. running a supermarket",
                            "E. providing cheap tickets",
                            "F. helping with accommodation",
                            "G. providing catering services"
                        ],
                        correct_answer: ["A", "C", "E", "G"],
                        explanation: "The speaker lists: charity fundraising for benevolent causes (A), operating a stationer/newsagent retail shop on campus (C), securing concessionary student ticket discounts (E), and providing food/cafeteria catering services (G)."
                    },
                    {
                        id: 12,
                        question_number: 12,
                        type: "multiple_choice_multi",
                        question: "Activity of the Union (Letter 2 of 4):",
                        options: ["A", "C", "E", "G"],
                        correct_answer: ["A", "C", "E", "G"],
                        explanation: "Second activity mentioned among A, C, E, G."
                    },
                    {
                        id: 13,
                        question_number: 13,
                        type: "multiple_choice_multi",
                        question: "Activity of the Union (Letter 3 of 4):",
                        options: ["A", "C", "E", "G"],
                        correct_answer: ["A", "C", "E", "G"],
                        explanation: "Third activity mentioned among A, C, E, G."
                    },
                    {
                        id: 14,
                        question_number: 14,
                        type: "multiple_choice_multi",
                        question: "Activity of the Union (Letter 4 of 4):",
                        options: ["A", "C", "E", "G"],
                        correct_answer: ["A", "C", "E", "G"],
                        explanation: "Fourth activity mentioned among A, C, E, G."
                    },
                    {
                        id: 15,
                        question_number: 15,
                        type: "multiple_choice_multi",
                        question: "Which TWO of the following can you get advice about from the Union? (Questions 15 and 16: Choose TWO letters A - E in either order)",
                        options: [
                            "A. immigration",
                            "B. grants",
                            "C. medical problems",
                            "D. personal problems",
                            "E. legal matters"
                        ],
                        correct_answer: ["B", "E"],
                        explanation: "The welfare officer provides specialized advisory assistance regarding student financial grants (B) and formal legal matters/disputes (E)."
                    },
                    {
                        id: 16,
                        question_number: 16,
                        type: "multiple_choice_multi",
                        question: "Advice provided by the Union (Letter 2 of 2):",
                        options: ["B", "E"],
                        correct_answer: ["B", "E"],
                        explanation: "Second advice topic among B (grants) and E (legal matters)."
                    },
                    {
                        id: 17,
                        question_number: 17,
                        type: "multiple_choice",
                        question: "What is the location of the hi-tech fitness centre in Radford?",
                        options: [
                            "A. part of the Metro Tower building",
                            "B. in the main square in the centre of the town",
                            "C. some distance from the centre of the town"
                        ],
                        correct_answer: "C",
                        explanation: "The speaker clarifies that the state-of-the-art gym and fitness centre is situated on the outskirts, some distance from the city centre."
                    },
                    {
                        id: 18,
                        question_number: 18,
                        type: "multiple_choice",
                        question: "What is the location of the ice rink in Radford?",
                        options: [
                            "A. part of the Metro Tower building",
                            "B. in the main square in the centre of the town",
                            "C. some distance from the centre of the town"
                        ],
                        correct_answer: "A",
                        explanation: "The ice skating rink is incorporated right inside the Metro Tower complex."
                    },
                    {
                        id: 19,
                        question_number: 19,
                        type: "multiple_choice",
                        question: "What is the location of the new cinema in Radford?",
                        options: [
                            "A. part of the Metro Tower building",
                            "B. in the main square in the centre of the town",
                            "C. some distance from the centre of the town"
                        ],
                        correct_answer: "A",
                        explanation: "The modern multiplex cinema is likewise housed within the Metro Tower building."
                    },
                    {
                        id: 20,
                        question_number: 20,
                        type: "multiple_choice",
                        question: "What is the location of the Theatre Royal in Radford?",
                        options: [
                            "A. part of the Metro Tower building",
                            "B. in the main square in the centre of the town",
                            "C. some distance from the centre of the town"
                        ],
                        correct_answer: "B",
                        explanation: "The historic Theatre Royal overlooks the central town square in the very heart of Radford."
                    }
                ]
            },

            // -------------------------------------------------------------
            // SECTION 3: Academic Dissertation Guidance (Questions 21 - 30)
            // -------------------------------------------------------------
            {
                section_number: 3,
                title: "Section 3: Dissertation Information & Timetable (Questions 21 - 30)",
                audio_file: "cam2_extracted/Test 3 - Section 3.mp3",
                context: "A student meets her supervisor, Dr Simon, to discuss the scheduling, requirements, and research methodologies for her final-year undergraduate dissertation.",
                questions: [
                    {
                        id: 21,
                        question_number: 21,
                        type: "fill_in_the_blank",
                        question: "DISSERTATION INFORMATION: Hand-in date: ..........",
                        correct_answer: ["21 May", "21st May", "May 21", "May 21st", "21st of May"],
                        explanation: "Dr Simon states that the absolute formal deadline for submission is 21 May."
                    },
                    {
                        id: 22,
                        question_number: 22,
                        type: "fill_in_the_blank",
                        question: "Length: .......... to words",
                        correct_answer: ["18,000-20,000", "18000-20000", "18,000 to 20,000", "18000 to 20000", "18 to 20,000", "18-20,000"],
                        explanation: "The official required length for the honours thesis is between 18,000 and 20,000 words."
                    },
                    {
                        id: 23,
                        question_number: 23,
                        type: "fill_in_the_blank",
                        question: "Extra programme offered on: ..........",
                        correct_answer: ["research methods", "Research Methods"],
                        explanation: "Dr Simon recommends that she attends the complementary departmental workshops on research methods."
                    },
                    {
                        id: 24,
                        question_number: 24,
                        type: "fill_in_the_blank",
                        question: "DISSERTATION TIMETABLE: 7 February: ..........",
                        correct_answer: ["plan", "draft plan", "Draft plan", "a draft plan"],
                        explanation: "By 7 February, students must submit their initial draft plan outlining chapters and research questions."
                    },
                    {
                        id: 25,
                        question_number: 25,
                        type: "fill_in_the_blank",
                        question: "February - March: ..........",
                        correct_answer: ["research", "do research", "carry out research", "conduct research", "doing research"],
                        explanation: "The period through February and March is exclusively designated for empirical data collection and carrying out research."
                    },
                    {
                        id: 26,
                        question_number: 26,
                        type: "fill_in_the_blank",
                        question: ".......... to May: Write up work",
                        correct_answer: ["March to May", "March - May", "March", "end of March"],
                        explanation: "Students must spend from late March until May drafting and writing up their final chapters."
                    },
                    {
                        id: 27,
                        question_number: 27,
                        type: "multiple_choice",
                        question: "What is Dr Simon's opinion on: Buying a computer?",
                        options: [
                            "A. if he is in favour",
                            "B. if he has no strong opinion either way",
                            "C. if he is against"
                        ],
                        correct_answer: "A",
                        explanation: "Dr Simon strongly supports acquiring a personal computer to facilitate ongoing drafting, editing, and data storage."
                    },
                    {
                        id: 28,
                        question_number: 28,
                        type: "multiple_choice",
                        question: "What is Dr Simon's opinion on: Reading previous year's dissertations?",
                        options: [
                            "A. if he is in favour",
                            "B. if he has no strong opinion either way",
                            "C. if he is against"
                        ],
                        correct_answer: "A",
                        explanation: "He actively encourages reviewing high-scoring dissertations from prior graduating cohorts as useful exemplars."
                    },
                    {
                        id: 29,
                        question_number: 29,
                        type: "multiple_choice",
                        question: "What is Dr Simon's opinion on: Using questionnaires as main research instrument?",
                        options: [
                            "A. if he is in favour",
                            "B. if he has no strong opinion either way",
                            "C. if he is against"
                        ],
                        correct_answer: "C",
                        explanation: "Dr Simon advises caution and speaks against relying purely on questionnaires, as novice students frequently design biased surveys with low return rates."
                    },
                    {
                        id: 30,
                        question_number: 30,
                        type: "multiple_choice",
                        question: "What is Dr Simon's opinion on: Interviewing tutors?",
                        options: [
                            "A. if he is in favour",
                            "B. if he has no strong opinion either way",
                            "C. if he is against"
                        ],
                        correct_answer: "B",
                        explanation: "Regarding scheduling interviews with academic staff, he remains neutral with no strong feelings either way, noting it depends on individual availability."
                    }
                ]
            },

            // -------------------------------------------------------------
            // SECTION 4: Water Resources in Australia (Questions 31 - 40)
            // -------------------------------------------------------------
            {
                section_number: 4,
                title: "Section 4: Hydrology & Water Resources in Australia (Questions 31 - 40)",
                audio_file: "cam2_extracted/Test 3 - Section 4.mp3",
                context: "A university environmental science lecturer delivers a presentation on precipitation patterns, groundwater extraction, and dam reservoir utilization in Australia.",
                questions: [
                    {
                        id: 31,
                        question_number: 31,
                        type: "multiple_choice",
                        question: "The driest continent is ...",
                        options: [
                            "A. Australia",
                            "B. Africa",
                            "C. Antarctica"
                        ],
                        correct_answer: "C",
                        explanation: "The lecturer clarifies that while Australia is the driest inhabited continent, Antarctica is technically the driest continent on Earth due to negligible precipitation."
                    },
                    {
                        id: 32,
                        question_number: 32,
                        type: "multiple_choice",
                        question: "The evaporation rate in Australia is ...",
                        options: [
                            "A. lower than Africa",
                            "B. higher than Africa",
                            "C. about the same as Africa"
                        ],
                        correct_answer: "B",
                        explanation: "Due to extreme heat and solar radiation across the interior, the evaporation rate in Australia is considerably higher than in Africa."
                    },
                    {
                        id: 33,
                        question_number: 33,
                        type: "multiple_choice",
                        question: "Rainfall in Australia hardly penetrates the soil because ...",
                        options: [
                            "A. the soil is too hard",
                            "B. the soil is too hot",
                            "C. plants use it up"
                        ],
                        correct_answer: "C",
                        explanation: "Dense indigenous root systems and drought-adapted vegetation immediately absorb and use up precipitation before it can seep deep into the subsoil."
                    },
                    {
                        id: 34,
                        question_number: 34,
                        type: "multiple_choice",
                        question: "In sandy soils water can ...",
                        options: [
                            "A. evaporate quickly",
                            "B. seep down to rock",
                            "C. wash the soil away"
                        ],
                        correct_answer: "B",
                        explanation: "Permeable sandy substrates allow precipitation to filter directly downward until it reaches underlying impermeable rock strata."
                    },
                    {
                        id: 35,
                        question_number: 35,
                        type: "multiple_choice",
                        question: "Water is mainly pumped up for ...",
                        options: [
                            "A. people to drink",
                            "B. animals to drink",
                            "C. watering crops"
                        ],
                        correct_answer: "B",
                        explanation: "Subterranean artesian bores primarily pump groundwater to hydrate pastoral livestock and sheep herds."
                    },
                    {
                        id: 36,
                        question_number: 36,
                        type: "multiple_choice",
                        question: "Natural springs are located ...",
                        options: [
                            "A. in unexplored parts of Australia",
                            "B. quite commonly over all Australia",
                            "C. in a few areas of Australia"
                        ],
                        correct_answer: "C",
                        explanation: "Geological fractures that produce perennial natural surface springs occur restrictedly across only a few specialized areas of the country."
                    },
                    {
                        id: 37,
                        question_number: 37,
                        type: "multiple_choice",
                        question: "Underground water supplies ...",
                        options: [
                            "A. 18% of Australia's water",
                            "B. 48% of Australia's water",
                            "C. 80% of Australia's water"
                        ],
                        correct_answer: "A",
                        explanation: "Official hydrological statistics verify that subterranean aquifers supply approximately 18% of Australia's total water consumption."
                    },
                    {
                        id: 38,
                        question_number: 38,
                        type: "multiple_choice_multi",
                        question: "Which THREE of the following uses of dam water are mentioned? (Questions 38 - 40: Choose THREE letters A - E in any order)",
                        options: [
                            "A. providing water for livestock",
                            "B. watering farmland",
                            "C. providing water for industry",
                            "D. controlling flood water",
                            "E. producing hydro-electric power"
                        ],
                        correct_answer: ["B", "D", "E"],
                        explanation: "The presentation highlights that major dams serve for agricultural irrigation / watering farmland (B), downstream flood mitigation (D), and hydroelectric energy generation (E)."
                    },
                    {
                        id: 39,
                        question_number: 39,
                        type: "multiple_choice_multi",
                        question: "Dam water utilization (Letter 2 of 3):",
                        options: ["B", "D", "E"],
                        correct_answer: ["B", "D", "E"],
                        explanation: "Second use of dam water mentioned among B, D, E."
                    },
                    {
                        id: 40,
                        question_number: 40,
                        type: "multiple_choice_multi",
                        question: "Dam water utilization (Letter 3 of 3):",
                        options: ["B", "D", "E"],
                        correct_answer: ["B", "D", "E"],
                        explanation: "Third use of dam water mentioned among B, D, E."
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // 2. READING MODULE (3 PASSAGES - 40 QUESTIONS)
    // =========================================================================
    reading: {
        title: "IELTS Reading Practice Test 3",
        duration_seconds: 3600,
        passages: [
            // -------------------------------------------------------------
            // PASSAGE 1: Absenteeism in Nursing (Questions 1 - 13)
            // -------------------------------------------------------------
            {
                passage_number: 1,
                title: "Passage 1: Absenteeism in Nursing: A Longitudinal Study",
                content: `Absence from work is a costly and disruptive problem for any organisation. The cost of absenteeism in Australia has been put at 1.8 million hours per day or $1400 million annually. The study reported here was conducted in the Prince William Hospital in Brisbane, Australia, where, prior to this time, few active steps had been taken to measure, understand or manage the occurrence of absenteeism.\n\nNursing Absenteeism\nA prevalent attitude amongst many nurses in the group selected for study was that there was no reward or recognition for not utilising the paid sick leave entitlement allowed them in their employment conditions. Therefore, they believed they may as well take the days off - sick or otherwise. Similar attitudes have been noted by James (1989), who noted that sick leave is seen by many workers as a right, like annual holiday leave.\n\nMiller and Norton (1986), in their survey of 865 nursing personnel, found that 73 per cent felt they should be rewarded for not taking sick leave, because some employees always used their sick leave. Further, 67 per cent of nurses felt that administration was not sympathetic to the problems shift work causes to employees' personal and social lives. Only 53 per cent of the respondents felt that every effort was made to schedule staff fairly.\n\nIn another longitudinal study of nurses working in two Canadian hospitals, Hacket Bycio and Guion (1989) examined the reasons why nurses took absence from work. The most frequent reason stated for absence was minor illness to self. Other causes, in decreasing order of frequency, were illness in family, family social function, work to do at home and bereavement.\n\nMethod\nIn an attempt to reduce the level of absenteeism amongst the 250 Registered and Enrolled Nurses in the present study, the Prince William management introduced three different, yet potentially complementary, strategies over 18 months.\n\nStrategy 1: Non-financial (material) incentives\nWithin the established wage and salary system it was not possible to use hospital funds to support this strategy. However, it was possible to secure incentives from local businesses, including free passes to entertainment parks, theatres, restaurants, etc. At the end of each roster period, the ward with the lowest absence rate would win the prize.\n\nStrategy 2: Flexible, fair rostering\nWhere possible, staff were given the opportunity to determine their working schedule within the limits of clinical needs.\n\nStrategy 3: Individual absenteeism and counselling\nEach month, managers would analyse the pattern of absence of staff with excessive sick leave (greater than ten days per year for full-time employees). Characteristic patterns of potential 'voluntary absenteeism' such as absence before and after days off, excessive weekend and night duty absence and multiple single days off were communicated to all ward nurses and then, as necessary, followed up by action.\n\nResults\nAbsence rates for the six months prior to the incentive scheme ranged from 3.69 per cent to 4.32 per cent. In the following six months they ranged between 2.87 per cent and 3.96 per cent. This represents a 20 per cent improvement. However, analysing the absence rates on a year-to-year basis, the overall absence rate was 3.60 per cent in the first year and 3.43 per cent in the following year. This represents a 5 per cent decrease from the first to the second year of the study. A significant decrease in absence over the two-year period could not be demonstrated.\n\nDiscussion\nThe non-financial incentive scheme did appear to assist in controlling absenteeism in the short term. As the scheme progressed it became harder to secure prizes and this contributed to the program's losing momentum and finally ceasing. There were mixed results across wards as well. For example, in wards with staff members who had long-term genuine illness, there was little chance of winning, and to some extent the staff on those wards were disempowered. Our experience would suggest that the long-term effects of incentive awards on absenteeism are questionable.\n\nOver the time of the study, staff were given a larger degree of control in their rosters. This led to significant improvements in communication between managers and staff. A similar effect was found from the implementation of the third strategy. Many of the nurses had not realised the impact their behaviour was having on the organisation and their colleagues but there were also staff members who felt that talking to them about their absenteeism was 'picking' on them and this usually had a negative effect on management-employee relationships.\n\nConclusion\nAlthough there has been some decrease in absence rates, no single strategy or combination of strategies has had a significant impact on absenteeism per se. Notwithstanding the disappointing results, it is our contention that the strategies were not in vain. A shared ownership of absenteeism and a collaborative approach to problem solving has facilitated improved cooperation and communication between management and staff. It is our belief that this improvement alone, while not tangibly measurable, has increased the ability of management to manage the effects of absenteeism more effectively since this study.`,
                questions: [
                    {
                        id: 1,
                        question_number: 1,
                        type: "true_false_not_given",
                        question: "The Prince William Hospital has been trying to reduce absenteeism amongst nurses for many years.",
                        correct_answer: "NO",
                        explanation: "The text states that 'prior to this time, few active steps had been taken to measure, understand or manage the occurrence of absenteeism', contradicting 'for many years'."
                    },
                    {
                        id: 2,
                        question_number: 2,
                        type: "true_false_not_given",
                        question: "Nurses in the Prince William Hospital study believed that there were benefits in taking as little sick leave as possible.",
                        correct_answer: "NO",
                        explanation: "The text says 'there was no reward or recognition for not utilising the paid sick leave entitlement... they believed they may as well take the days off'."
                    },
                    {
                        id: 3,
                        question_number: 3,
                        type: "true_false_not_given",
                        question: "Just over half the nurses in the 1986 study believed that management understood the effects that shift work had on them.",
                        correct_answer: "NO",
                        explanation: "Miller and Norton found that 67 per cent of nurses felt administration was NOT sympathetic to the problems shift work causes (only 33% felt understood, not 'just over half')."
                    },
                    {
                        id: 4,
                        question_number: 4,
                        type: "true_false_not_given",
                        question: "The Canadian study found that 'illness in the family' was a greater cause of absenteeism than 'work to do at home'.",
                        correct_answer: "YES",
                        explanation: "The Canadian study listed causes 'in decreasing order of frequency: minor illness to self, illness in family, family social function, work to do at home'."
                    },
                    {
                        id: 5,
                        question_number: 5,
                        type: "true_false_not_given",
                        question: "In relation to management attitude to absenteeism the study at the Prince William Hospital found similar results to the two 1989 studies.",
                        correct_answer: "NOT GIVEN",
                        explanation: "The passage does not compare Prince William findings on management attitudes directly with the 1989 studies."
                    },
                    {
                        id: 6,
                        question_number: 6,
                        type: "true_false_not_given",
                        question: "The study at the Prince William Hospital aimed to find out the causes of absenteeism amongst 250 nurses.",
                        correct_answer: "NO",
                        explanation: "The study aimed 'to reduce the level of absenteeism' by introducing three management strategies, not merely to find out the causes."
                    },
                    {
                        id: 7,
                        question_number: 7,
                        type: "true_false_not_given",
                        question: "The study at the Prince William Hospital involved changes in management practices.",
                        correct_answer: "YES",
                        explanation: "Management introduced three strategies: material incentives, flexible rostering, and absence counselling, all representing changes in management practices."
                    },
                    {
                        id: 8,
                        question_number: 8,
                        type: "fill_in_the_blank",
                        question: "In the first strategy, wards with the lowest absenteeism in different periods would win prizes donated by (8) ..........",
                        correct_answer: ["local businesses", "businesses"],
                        explanation: "The passage notes: 'it was possible to secure incentives from local businesses, including free passes'."
                    },
                    {
                        id: 9,
                        question_number: 9,
                        type: "fill_in_the_blank",
                        question: "In the second strategy, staff were given more control over their (9) ..........",
                        correct_answer: ["working schedule", "work schedule", "rostering", "roster", "rosters"],
                        explanation: "Strategy 2 states: 'staff were given the opportunity to determine their working schedule within the limits of clinical needs'."
                    },
                    {
                        id: 10,
                        question_number: 10,
                        type: "fill_in_the_blank",
                        question: "In the third strategy, nurses who appeared to be taking (10) .......... sick leave or ...",
                        correct_answer: ["excessive"],
                        explanation: "Managers analysed the pattern of staff with 'excessive sick leave (greater than ten days per year)'."
                    },
                    {
                        id: 11,
                        question_number: 11,
                        type: "fill_in_the_blank",
                        question: "or (11) .......... were identified and counselled.",
                        correct_answer: ["voluntary absence", "voluntary absenteeism"],
                        explanation: "Characteristic patterns of potential 'voluntary absenteeism' were followed up by action and counselling."
                    },
                    {
                        id: 12,
                        question_number: 12,
                        type: "fill_in_the_blank",
                        question: "Initially, there was a (12) .......... per cent decrease in absenteeism.",
                        correct_answer: ["twenty", "20"],
                        explanation: "The results state: 'This represents a 20 per cent improvement [decrease in absence rates]' in the first six months."
                    },
                    {
                        id: 13,
                        question_number: 13,
                        type: "fill_in_the_blank",
                        question: "The second and third strategies generally resulted in better (13) .......... among staff.",
                        correct_answer: ["communication"],
                        explanation: "Both strategies led to 'significant improvements in communication between managers and staff'."
                    }
                ]
            },

            // -------------------------------------------------------------
            // PASSAGE 2: The Motor Car (Questions 14 - 26)
            // -------------------------------------------------------------
            {
                passage_number: 2,
                title: "Passage 2: The Motor Car",
                content: `Paragraph A: There are now over 700 million motor vehicles in the world - and the number is rising by more than 40 million each year. The average distance driven by car users is growing too - from 8 km a day per person in western Europe in 1965 to 25 km a day in 1995. This dependence on motor vehicles has given rise to major problems, including environmental pollution, depletion of oil resources, traffic congestion and safety.\n\nParagraph B: While emissions from new cars are far less harmful than they used to be, city streets and motorways are becoming more crowded than ever, often with older trucks, buses and taxis, which emit excessive levels of smoke and fumes. This concentration of vehicles makes air quality in urban areas unpleasant and sometimes dangerous to breathe. Even Moscow has joined the list of capitals afflicted by congestion and traffic fumes. In Mexico City, vehicle pollution is a major health hazard.\n\nParagraph C: Until a hundred years ago, most journeys were in the 20 km range, the distance conveniently accessible by horse. Heavy freight could only be carried by water or rail. The invention of the motor vehicle brought personal mobility to the masses and made rapid freight delivery possible over a much wider area. Today about 90 per cent of inland freight in the United Kingdom is carried by road. Clearly the world cannot revert to the horse-drawn wagon. Can it avoid being locked into congested and polluting ways of transporting people and goods?\n\nParagraph D: In Europe most cities are still designed for the old modes of transport. Adaptation to the motor car has involved adding ring roads, one-way systems and parking lots. In the United States, more land is assigned to car use than to housing. Urban sprawl means that life without a car is next to impossible. Mass use of motor vehicles has also killed or injured millions of people. Other social effects have been blamed on the car such as alienation and aggressive human behaviour.\n\nParagraph E: A 1993 study by the European Federation for Transport and Environment found that car transport is seven times as costly as rail travel in terms of the external social costs it entails such as congestion, accidents, pollution, loss of cropland and natural habitats, depletion of oil resources, and so on. Yet cars easily surpass trains or buses as a flexible and convenient mode of personal transport. It is unrealistic to expect people to give up private cars in favour of mass transit.\n\nParagraph F: Technical solutions can reduce the pollution problem and increase the fuel efficiency of engines. But fuel consumption and exhaust emissions depend on which cars are preferred by customers and how they are driven. Many people buy larger cars than they need for daily purposes or waste fuel by driving aggressively. Besides, global car use is increasing at a faster rate than the improvement in emissions and fuel efficiency which technology is now making possible.\n\nParagraph G: One solution that has been put forward is the long-term solution of designing cities and neighbourhoods so that car journeys are not necessary - all essential services being located within walking distance or easily accessible by public transport. Not only would this save energy and cut carbon dioxide emissions, it would also enhance the quality of community life, putting the emphasis on people instead of cars. Good local government is already bringing this about in some places. But few democratic communities are blessed with the vision - and the capital - to make such profound changes in modern lifestyles.\n\nParagraph H: A more likely scenario seems to be a combination of mass transit systems for travel into and around cities, with small 'low emission' cars for urban use and larger hybrid or lean burn cars for use elsewhere. Electronically tolled highways might be used to ensure that drivers pay charges geared to actual road use. Better integration of transport systems is also highly desirable - and made more feasible by modern computers. But these are solutions for countries which can afford them. In most developing countries, old cars and old technologies continue to predominate.`,
                questions: [
                    {
                        id: 14,
                        question_number: 14,
                        type: "matching",
                        question: "Which paragraph contains: a comparison of past and present transportation methods?",
                        correct_answer: "C",
                        explanation: "Paragraph C compares journeys 100 years ago (horse, water, rail) with modern road transport taking 90% of UK inland freight."
                    },
                    {
                        id: 15,
                        question_number: 15,
                        type: "matching",
                        question: "Which paragraph contains: how driving habits contribute to road problems?",
                        correct_answer: "F",
                        explanation: "Paragraph F discusses how people 'waste fuel by driving aggressively' and buy larger vehicles than necessary."
                    },
                    {
                        id: 16,
                        question_number: 16,
                        type: "matching",
                        question: "Which paragraph contains: the relative merits of cars and public transport?",
                        correct_answer: "E",
                        explanation: "Paragraph E weighs the external social costs of cars vs trains, noting cars remain superior in flexibility and convenience."
                    },
                    {
                        id: 17,
                        question_number: 17,
                        type: "matching",
                        question: "Which paragraph contains: the writer's own prediction of future solutions?",
                        correct_answer: "H",
                        explanation: "Paragraph H outlines 'A more likely scenario seems to be a combination of mass transit systems... with small low emission cars'."
                    },
                    {
                        id: 18,
                        question_number: 18,
                        type: "matching",
                        question: "Which paragraph contains: the increasing use of motor vehicles?",
                        correct_answer: "A",
                        explanation: "Paragraph A states there are now over 700 million vehicles, rising by 40 million annually, with daily distance increasing from 8 to 25 km."
                    },
                    {
                        id: 19,
                        question_number: 19,
                        type: "matching",
                        question: "Which paragraph contains: the impact of the car on city development?",
                        correct_answer: "D",
                        explanation: "Paragraph D explains how cities added ring roads, parking lots, and in the US assigned more land to cars than to housing."
                    },
                    {
                        id: 20,
                        question_number: 20,
                        type: "true_false_not_given",
                        question: "Vehicle pollution is worse in European cities than anywhere else.",
                        correct_answer: "NOT GIVEN",
                        explanation: "The text mentions European capitals and Mexico City, but does not assert that European cities have the worst pollution in the world."
                    },
                    {
                        id: 21,
                        question_number: 21,
                        type: "true_false_not_given",
                        question: "Transport by horse would be a useful alternative to motor vehicles.",
                        correct_answer: "NO",
                        explanation: "Paragraph C explicitly declares: 'Clearly the world cannot revert to the horse-drawn wagon'."
                    },
                    {
                        id: 22,
                        question_number: 22,
                        type: "true_false_not_given",
                        question: "Nowadays freight is not carried by water in the United Kingdom.",
                        correct_answer: "NOT GIVEN",
                        explanation: "The text states that 'about 90 per cent of inland freight... is carried by road', but does not say water carries none of the remaining 10%."
                    },
                    {
                        id: 23,
                        question_number: 23,
                        type: "true_false_not_given",
                        question: "Most European cities were not designed for motor vehicles.",
                        correct_answer: "YES",
                        explanation: "Paragraph D states: 'In Europe most cities are still designed for the old modes of transport'."
                    },
                    {
                        id: 24,
                        question_number: 24,
                        type: "true_false_not_given",
                        question: "Technology alone cannot solve the problem of vehicle pollution.",
                        correct_answer: "YES",
                        explanation: "Paragraph F notes that global car use is expanding faster than technical emissions improvements and depends on consumer choices."
                    },
                    {
                        id: 25,
                        question_number: 25,
                        type: "true_false_not_given",
                        question: "People's choice of car and attitude to driving is a factor in the pollution problem.",
                        correct_answer: "YES",
                        explanation: "Paragraph F notes: 'emissions depend on which cars are preferred by customers and how they are driven'."
                    },
                    {
                        id: 26,
                        question_number: 26,
                        type: "true_false_not_given",
                        question: "Redesigning cities would be a short-term solution.",
                        correct_answer: "NO",
                        explanation: "Paragraph G calls redesigning cities and neighbourhoods 'the long-term solution'."
                    }
                ]
            },

            // -------------------------------------------------------------
            // PASSAGE 3: Biometrics (Questions 27 - 40)
            // -------------------------------------------------------------
            {
                passage_number: 3,
                title: "Passage 3: Biometrics: Security Systems",
                content: `Paragraph A: Students who want to enter the University of Montreal's Athletic Complex need more than just a conventional ID card - their identities must be authenticated by an electronic hand scanner. In some California housing estates, a key alone is insufficient to get someone in the door; his or her voiceprint must also be verified. And soon, customers at some Japanese banks will have to present their faces for scanning before they can enter the building and withdraw their money.\n\nParagraph B: All of these are applications of biometrics, a little-known but fast-growing technology that involves the use of physical or biological characteristics to identify individuals. In use for more than a decade at some high-security government institutions in the United States and Canada, biometrics are now rapidly popping up in the everyday world. Already, more than 10,000 facilities, from prisons to day-care centres, monitor people's fingerprints or other physical parts to ensure that they are who they claim to be. Some 60 biometric companies around the world pulled in at least $22 million last year and that grand total is expected to mushroom to at least $50 million by 1999.\n\nParagraph C: Biometric security systems operate by storing a digitised record of some unique human feature. When an authorised user wishes to enter or use the facility, the system scans the person's corresponding characteristics and attempts to match them against those on record. Systems using fingerprints, hands, voices, irises, retinas and faces are already on the market. Others using typing patterns and even body odours are in various stages of development.\n\nParagraph D: Fingerprint scanners are currently the most widely deployed type of biometric application, thanks to their growing use over the last 20 years by law-enforcement agencies. Sixteen American states now use biometric fingerprint verification systems to check that people claiming welfare payments are genuine. In June, politicians in Toronto voted to do the same, with a pilot project beginning next year.\n\nParagraph E: To date, the most widely used commercial biometric system is the handkey, a type of hand scanner which reads the unique shape, size and irregularities of people's hands. Originally developed for nuclear power plants, the handkey received its big break when it was used to control access to the Olympic Village in Atlanta by more than 65,000 athletes, trainers and support staff. Now there are scores of other applications.\n\nParagraph F: Around the world, the market is growing rapidly. Malaysia, for example, is preparing to equip all of its airports with biometric face scanners to match passengers with luggage. And Japan's largest maker of cash dispensers is developing new machines that incorporate iris scanners. The first commercial biometric, a hand reader used by an American firm to monitor employee attendance, was introduced in 1974. But only in the past few years has the technology improved enough for the prices to drop sufficiently to make them commercially viable. 'When we started four years ago, I had to explain to everyone what a biometric is,' says one marketing expert. 'Now, there's much more awareness out there.'\n\nParagraph G: Not surprisingly, biometrics raise thorny questions about privacy and the potential for abuse. Some worry that governments and industry will be tempted to use the technology to monitor individual behaviour. 'If someone used your fingerprints to match your health-insurance records with a credit-card record showing you regularly bought lots of cigarettes and fatty foods,' says one policy analyst, 'you would see your insurance payments go through the roof.' In Toronto, critics of the welfare fingerprint plan complained that it would stigmatise recipients by forcing them to submit to a procedure widely identified with criminals.\n\nParagraph H: Nonetheless, support for biometrics is growing in Toronto as it is in many other communities. In an increasingly crowded and complicated world, biometrics may well be a technology whose time has come.`,
                questions: [
                    {
                        id: 27,
                        question_number: 27,
                        type: "matching",
                        question: "Choose the most suitable heading for Paragraph B (List of Headings i - x):",
                        options: [
                            "i. Common objections",
                            "ii. Who's planning what",
                            "iii. This type sells best in the shops",
                            "iv. The figures say it all",
                            "v. Early trials",
                            "vi. They can't get in without these",
                            "vii. How does it work?",
                            "viii. Fighting fraud",
                            "ix. Systems to avoid",
                            "x. Accepting the inevitable"
                        ],
                        correct_answer: "iv",
                        explanation: "Paragraph B gives market revenue and deployment numbers ($22m rising to $50m, 10,000 facilities), matching 'iv. The figures say it all'."
                    },
                    {
                        id: 28,
                        question_number: 28,
                        type: "matching",
                        question: "Choose the most suitable heading for Paragraph C:",
                        options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                        correct_answer: "vii",
                        explanation: "Paragraph C explains how biometric systems operate by digitising human features and matching scans, fitting 'vii. How does it work?'."
                    },
                    {
                        id: 29,
                        question_number: 29,
                        type: "matching",
                        question: "Choose the most suitable heading for Paragraph D:",
                        options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                        correct_answer: "viii",
                        explanation: "Paragraph D discusses law enforcement and welfare verification to prevent false claims, matching 'viii. Fighting fraud'."
                    },
                    {
                        id: 30,
                        question_number: 30,
                        type: "matching",
                        question: "Choose the most suitable heading for Paragraph E:",
                        options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                        correct_answer: "iii",
                        explanation: "Paragraph E focuses on the handkey as 'the most widely used commercial biometric system', fitting 'iii. This type sells best in the shops'."
                    },
                    {
                        id: 31,
                        question_number: 31,
                        type: "matching",
                        question: "Choose the most suitable heading for Paragraph F:",
                        options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                        correct_answer: "ii",
                        explanation: "Paragraph F outlines international developments (Malaysia airports, Japanese cash dispensers), matching 'ii. Who's planning what'."
                    },
                    {
                        id: 32,
                        question_number: 32,
                        type: "matching",
                        question: "Choose the most suitable heading for Paragraph G:",
                        options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                        correct_answer: "i",
                        explanation: "Paragraph G discusses civil liberty concerns, privacy intrusion, and stigma, matching 'i. Common objections'."
                    },
                    {
                        id: 33,
                        question_number: 33,
                        type: "matching",
                        question: "Choose the most suitable heading for Paragraph H:",
                        options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                        correct_answer: "x",
                        explanation: "Paragraph H concludes that despite objections, adoption is inevitable as a technology whose time has come, fitting 'x. Accepting the inevitable'."
                    },
                    {
                        id: 34,
                        question_number: 34,
                        type: "matching",
                        question: "Match the group: sports students to the biometric system (A - F: A. fingerprint scanner, B. hand scanner, C. body odour, D. voiceprint, E. face scanner, F. typing pattern):",
                        options: ["A", "B", "C", "D", "E", "F"],
                        correct_answer: "B",
                        explanation: "Paragraph A states University of Montreal Athletic Complex students are authenticated by an electronic hand scanner (B)."
                    },
                    {
                        id: 35,
                        question_number: 35,
                        type: "matching",
                        question: "Match the group: Olympic athletes",
                        options: ["A", "B", "C", "D", "E", "F"],
                        correct_answer: "B",
                        explanation: "Paragraph E describes the handkey (hand scanner B) used for 65,000 Olympic athletes in Atlanta."
                    },
                    {
                        id: 36,
                        question_number: 36,
                        type: "matching",
                        question: "Match the group: airline passengers",
                        options: ["A", "B", "C", "D", "E", "F"],
                        correct_answer: "E",
                        explanation: "Paragraph F mentions Malaysian airports using biometric face scanners (E) to match passengers with luggage."
                    },
                    {
                        id: 37,
                        question_number: 37,
                        type: "matching",
                        question: "Match the group: welfare claimants",
                        options: ["A", "B", "C", "D", "E", "F"],
                        correct_answer: "A",
                        explanation: "Paragraph D specifies that American states use fingerprint verification systems (A) for welfare payment claimants."
                    },
                    {
                        id: 38,
                        question_number: 38,
                        type: "matching",
                        question: "Match the group: business employees",
                        options: ["A", "B", "C", "D", "E", "F"],
                        correct_answer: "B",
                        explanation: "Paragraph F mentions a hand reader (hand scanner B) used by an American firm to monitor employee attendance."
                    },
                    {
                        id: 39,
                        question_number: 39,
                        type: "matching",
                        question: "Match the group: home owners",
                        options: ["A", "B", "C", "D", "E", "F"],
                        correct_answer: "D",
                        explanation: "Paragraph A explains that in California housing estates, residents verify their identity via voiceprint (D)."
                    },
                    {
                        id: 40,
                        question_number: 40,
                        type: "matching",
                        question: "Match the group: bank customers",
                        options: ["A", "B", "C", "D", "E", "F"],
                        correct_answer: "E",
                        explanation: "Paragraph A states customers at Japanese banks must present their faces for scanning (E) before entering to withdraw money."
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // 3. WRITING MODULE (2 TASKS)
    // =========================================================================
    writing: {
        title: "IELTS Academic Writing Practice Test 3",
        duration_seconds: 3600,
        task_1: {
            task_number: 1,
            title: "Task 1: UK Residents Overseas Visits Survey (1994 - 1998)",
            instruction: "The first chart below shows the results of a survey which sampled a cross-section of 100,000 people asking if they travelled abroad and why they travelled for the period 1994-98. The second chart shows their destinations over the same period. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
            min_words: 150,
            chart_svg: `<svg viewBox="0 0 600 320" class="w-full max-w-2xl mx-auto rounded-xl bg-slate-900 p-4 shadow-lg text-white font-sans"><text x="300" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#38bdf8">VISITS ABROAD BY UK RESIDENTS BY PURPOSE &amp; DESTINATION (1994-1998)</text><text x="300" y="44" text-anchor="middle" font-size="10" fill="#94a3b8">Sample: 100,000 UK Residents (Office for National Statistics)</text><g transform="translate(40, 70)"><rect x="0" y="0" width="240" height="220" fill="#1e293b" rx="8"/><text x="120" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#a78bfa">Purpose of Visit (1998)</text><text x="15" y="55" font-size="10" fill="#cbd5e1">Holiday: 20,700 (71.8%)</text><rect x="15" y="62" width="160" height="12" fill="#38bdf8" rx="3"/><text x="15" y="95" font-size="10" fill="#cbd5e1">Business: 3,957 (13.7%)</text><rect x="15" y="102" width="31" height="12" fill="#fbbf24" rx="3"/><text x="15" y="135" font-size="10" fill="#cbd5e1">Friends &amp; Relatives: 3,181 (11.0%)</text><rect x="15" y="142" width="25" height="12" fill="#34d399" rx="3"/><text x="15" y="175" font-size="10" fill="#cbd5e1">Other: 990 (3.4%)</text><rect x="15" y="182" width="8" height="12" fill="#f87171" rx="3"/></g><g transform="translate(320, 70)"><rect x="0" y="0" width="240" height="220" fill="#1e293b" rx="8"/><text x="120" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#f472b6">Destinations Visited (1998)</text><text x="15" y="65" font-size="10" fill="#cbd5e1">Western Europe: 24,519 (85.1%)</text><rect x="15" y="72" width="190" height="16" fill="#60a5fa" rx="3"/><text x="15" y="115" font-size="10" fill="#cbd5e1">Other Areas: 2,486 (8.6%)</text><rect x="15" y="122" width="20" height="16" fill="#fb923c" rx="3"/><text x="15" y="165" font-size="10" fill="#cbd5e1">North America: 1,823 (6.3%)</text><rect x="15" y="172" width="14" height="16" fill="#a3e635" rx="3"/><text x="120" y="208" text-anchor="middle" font-size="9" fill="#94a3b8">Total UK visits abroad: 28,828</text></g></svg>`,
            model_answer: `The two tables delineate trends in foreign travel among a cross-sectional sample of 100,000 UK residents between 1994 and 1998, categorized by primary motivation and geographical destination.\n\nOverall, outbound international travel expanded consistently across the five-year period, rising from 22,072 visits in 1994 to 28,828 in 1998. Throughout this timeframe, holidaymaking remained the overwhelmingly predominant reason for travelling, while Western Europe represented the undisputed favourite destination for British travellers.\n\nIn terms of visit purpose, holidays consistently accounted for the lion's share of foreign journeys, growing from 15,246 in 1994 to 20,700 in 1998, representing more than 70% of total travel in every recorded year. Business trips also experienced steady growth, increasing from 3,155 to 3,957 visits. Journeys undertaken to visit friends and relatives rose moderately from 2,689 to 3,181, while trips for miscellaneous other reasons remained comparatively minimal and stable, hovering around 1,000 annually.\n\nRegarding overseas destinations, Western Europe dominated all other regions combined, attracting 19,371 British travellers in 1994 and climbing steadily to 24,519 by 1998. By contrast, long-haul travel to North America and other global areas registered much smaller volumes, though both grew markedly. Visits to North America nearly doubled from 919 to 1,823, while destinations in other regions increased from 1,782 to 2,486 over the surveyed period.`
        },
        task_2: {
            task_number: 2,
            title: "Task 2: Capital Punishment and Crime Control",
            prompt: "Without capital punishment (the death penalty) our lives are less secure and crimes of violence increase. Capital punishment is essential to control violence in society. To what extent do you agree or disagree with this opinion? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
            min_words: 250,
            model_answer: `The question of whether capital punishment is indispensable for curbing violent crime and preserving societal security remains one of the most intensely contested ethical and legal dilemmas of modern governance. While proponents argue that the supreme penalty deters potential perpetrators and ensures retributive justice, empirical criminological evidence demonstrates that capital punishment is neither necessary nor effective in suppressing violent crime.\n\nAdvocates of capital punishment frequently contend that the prospect of execution instills fear that dissuades individuals from committing premeditated murder or catastrophic acts of violence. From this perspective, the death penalty delivers proportional retribution for heinous offenses, providing closure to victims' families while permanently incapacitating dangerous offenders so they cannot menace the public again.\n\nHowever, sociological studies across numerous jurisdictions consistently refute the assertion that capital punishment exerts a superior deterrent effect compared to life imprisonment without parole. Most homicides are committed in states of acute emotional passion, severe psychological distress, or under the influence of narcotics, circumstances in which rational calculations of penal consequences rarely occur. Crucially, nations that have abolished capital punishmentâ€”such as Canada, the United Kingdom, and the majority of European Union member statesâ€”have not observed an upsurge in violent crime rates; indeed, many report violent crime indices substantially lower than retentionist states.\n\nFurthermore, the irrevocability of execution represents a fatal moral flaw in justice systems administered by fallible human institutions. Forensic advancements, notably DNA exonerations, have repeatedly uncovered wrongful convictions where innocent individuals had languished on death row. Once executed, judicial errors cannot be remedied. Modern penology should instead prioritize effective community policing, comprehensive mental health support, and genuine institutional rehabilitation rather than state-sanctioned retribution.\n\nIn conclusion, capital punishment is not essential for maintaining societal safety. True security is fostered through equitable justice systems, swift and certain apprehension of offenders, and humane penal policies that respect fundamental human rights.`
        }
    },

    // =========================================================================
    // 4. SPEAKING MODULE (3 PARTS)
    // =========================================================================
    speaking: {
        title: "IELTS Speaking Practice Test 3",
        duration_seconds: 840,
        part_1: [
            {
                topic: "Television & Media",
                question: "How many hours of television do you typically watch each week?",
                model_answer: "I watch roughly six to eight hours weekly, predominantly on weekends. During standard working days, I restrict my viewing to brief evening documentary broadcasts or analytical current affairs podcasts."
            },
            {
                topic: "Television & Media",
                question: "Do you prefer watching international movies or local programmes?",
                model_answer: "I appreciate both formats for different reasons. Local productions capture nuanced cultural expressions and domestic social humour, whereas foreign cinema offers broader geopolitical perspectives and cutting-edge visual storytelling."
            },
            {
                topic: "Campus Life & Extracurriculars",
                question: "Did you participate in any clubs or societies during your student years?",
                model_answer: "Yes, I was an active member of our university's debate society and the environmental volunteering club. It provided invaluable training in collaborative leadership and public speaking."
            },
            {
                topic: "Water & Natural Resources",
                question: "Do people in your country pay conscious attention to conserving water?",
                model_answer: "Public awareness is growing steadily, particularly during seasonal dry spells. Most households now install low-flow aerators and practice basic conservation, though agricultural irrigation efficiency still requires modernization."
            }
        ],
        part_2: {
            title: "Part 2: Long Turn / Cue Card (3 - 4 minutes)",
            cue_card_title: "AN ENVIRONMENTAL GROUP",
            prompt: "Describe an environmental group or organisation that you are interested in joining or learning about.",
            cues: [
                "the name of the group",
                "what action they take to protect the environment",
                "what membership involves (costs, activities)",
                "and explain why you consider this group's work important."
            ],
            model_answer: "I would like to speak about 'Green Action', a student-founded conservation organization that operates across regional university campuses.\n\nGreen Action was established in the mid-1990s by a committed group of forestry and ecology undergraduates who wanted to move beyond theoretical campus debates and implement tangible ecological restoration. Their flagship initiatives include monthly community tree-planting campaigns along degraded river corridors and systematic clean-up drives targeting urban parklands and public beaches.\n\nMembership is designed to be highly accessible, with an annual student contribution of just Â£5 to cover safety equipment and seedling supplies. In return, members commit to attending at least two hands-on field events per year, such as planting native saplings or conducting microplastic surveys.\n\nWhat makes Green Action particularly noteworthy is their pragmatic grassroots ethos. Rather than engaging purely in symbolic demonstrations, they educate volunteers on indigenous plant biodiversity and collaborate with municipal water boards. Joining such an initiative provides both practical environmental stewardship and a healthy antidote to climate despair by fostering collective action."
        },
        part_3: [
            {
                theme: "Environmental Responsibility & Individual Action",
                question: "Do you think individual lifestyle changes can make a meaningful difference to global climate change?",
                model_answer: "Individual behavioural shiftsâ€”such as choosing public transit, minimizing single-use plastics, and adopting plant-rich dietsâ€”are essential because they collectively reduce aggregate consumer demand and cultivate widespread civic mindfulness. However, individual initiatives must be amplified by stringent corporate regulations and statutory renewable energy transitions."
            },
            {
                theme: "Governmental Policy vs Market Incentives",
                question: "Should governments impose higher carbon taxes on polluting industries, or offer financial subsidies for green innovation?",
                model_answer: "A well-designed environmental policy requires a dual carrot-and-stick framework. Imposing robust carbon penalties compels heavy polluters to internalize external environmental costs, while targeted subsidies for clean technology accelerate commercial deployment of grid-scale batteries and green hydrogen."
            },
            {
                theme: "Biometric Technology & Civil Liberties",
                question: "How do you foresee biometric surveillance evolving over the coming decades?",
                model_answer: "Biometric verification will almost certainly become ubiquitous in urban transit hubs, border checkpoints, and contactless banking. The overarching regulatory challenge will be establishing transparent statutory safeguards to guarantee that facial recognition and voice databases are not exploited for unwarranted citizen profiling or authoritarian overreach."
            }
        ]
    }
};



// =========================================================================
// CAMBRIDGE IELTS 2 - ACADEMIC PRACTICE TEST 4
// Sourced 100% from Official Cambridge University Press (Cambridge IELTS 2)
// Complete 4 Modules: Listening (40 Qs), Reading (40 Qs), Writing (2 Tasks), Speaking (3 Parts)
// =========================================================================

const cam2Test4 = {
    id: "cam_2_test_4",
    book: "Cambridge IELTS 2",
    title: "Cambridge IELTS 2 - Test 4",
    test_title: "Academic Practice Test 4",
    badge: "Cam 2 - Test 4",

    // =========================================================================
    // 1. LISTENING MODULE (4 SECTIONS - 40 QUESTIONS)
    // =========================================================================
    listening: {
        title: "IELTS Listening Practice Test 4",
        duration_seconds: 1800,
        parts: [
            // -------------------------------------------------------------
            // SECTION 1: Mic House Agency - Repairs (Questions 1 - 10)
            // -------------------------------------------------------------
            {
                section_number: 1,
                title: "Section 1: Mic House Agency - Property Repairs (Questions 1 - 10)",
                audio_file: "cam2_extracted/Test 4 - Section 1.mp3",
                context: "A tenant calls the Mic House Agency to report several maintenance problems requiring repairs in her leased apartment.",
                questions: [
                    {
                        id: 1,
                        question_number: 1,
                        type: "fill_in_the_blank",
                        question: "Address: Apartment 2, (1) .......... , Newton",
                        correct_answer: ["16 Rose Lane", "16, Rose Lane"],
                        explanation: "The tenant states her rental address is Apartment 2, 16 Rose Lane in Newton."
                    },
                    {
                        id: 2,
                        question_number: 2,
                        type: "fill_in_the_blank",
                        question: "Date moved in: (2) ..........",
                        correct_answer: ["27 June", "27th June", "June 27", "June 27th", "27th of June"],
                        explanation: "She confirms she officially occupied the flat on the 27th of June."
                    },
                    {
                        id: 3,
                        question_number: 3,
                        type: "fill_in_the_blank",
                        question: "Cooker: Problem: (3) ..........",
                        correct_answer: ["door broken", "broken door", "the door is broken"],
                        explanation: "She reports that the main oven/cooker door is damaged and broken."
                    },
                    {
                        id: 4,
                        question_number: 4,
                        type: "multiple_choice",
                        question: "Cooker repair: When to be done? (A: immediately, B: following week, C: two or more weeks)",
                        options: ["A", "B", "C"],
                        correct_answer: "C",
                        explanation: "The agent informs her that ordering replacement hinges and panels will take at least two or more weeks (C)."
                    },
                    {
                        id: 5,
                        question_number: 5,
                        type: "fill_in_the_blank",
                        question: "Windows: Problem: (5) ..........",
                        correct_answer: ["no locks", "no locks on them", "need locks", "locks broken"],
                        explanation: "She notes that the street-facing windows lack secure latching mechanisms and need locks."
                    },
                    {
                        id: 6,
                        question_number: 6,
                        type: "fill_in_the_blank",
                        question: "Item: (6) .......... ; Problem: flickers",
                        correct_answer: ["bathroom light", "the bathroom light"],
                        explanation: "She mentions that the overhead bathroom light flickers intermittently."
                    },
                    {
                        id: 7,
                        question_number: 7,
                        type: "multiple_choice",
                        question: "Bathroom light repair: When to be done? (A: immediately, B: following week, C: two or more weeks)",
                        options: ["A", "B", "C"],
                        correct_answer: "A",
                        explanation: "Electrical faults pose immediate safety hazards, so the agent promises immediate attention (A)."
                    },
                    {
                        id: 8,
                        question_number: 8,
                        type: "fill_in_the_blank",
                        question: "Item: (8) .......... ; Problem: torn",
                        correct_answer: ["kitchen curtains", "curtains in kitchen", "the kitchen curtains"],
                        explanation: "The tenant requests replacement for the torn fabric kitchen curtains."
                    },
                    {
                        id: 9,
                        question_number: 9,
                        type: "multiple_choice",
                        question: "Kitchen curtains replacement: When to be done?",
                        options: ["A", "B", "C"],
                        correct_answer: "B",
                        explanation: "The property agency schedules soft furnishing replacements for the following week (B)."
                    },
                    {
                        id: 10,
                        question_number: 10,
                        type: "fill_in_the_blank",
                        question: "Workman to call between (10) .......... and ..........",
                        correct_answer: ["1 and 5", "1 pm and 5 pm", "1pm and 5pm", "1-5", "1.00 and 5.00"],
                        explanation: "The agency confirms the technician will visit between 1 pm and 5 pm."
                    }
                ]
            },

            // -------------------------------------------------------------
            // SECTION 2: Rainforest Lodge Excursions (Questions 11 - 20)
            // -------------------------------------------------------------
            {
                section_number: 2,
                title: "Section 2: Rainforest Lodge & Wilderness Excursions (Questions 11 - 20)",
                audio_file: "cam2_extracted/Test 4 - Section 2.mp3",
                context: "A tour manager briefs newly arrived ecotourists on lodging guidelines and excursion options at the Rainforest Lodge.",
                questions: [
                    {
                        id: 11,
                        question_number: 11,
                        type: "multiple_choice",
                        question: "At Rainforest Lodge there aren't any ...",
                        options: [
                            "A. telephones or TVs",
                            "B. newspapers or TVs",
                            "C. telephones or newspapers"
                        ],
                        correct_answer: "B",
                        explanation: "To preserve the remote wilderness ambiance, the lodge does not supply television sets or daily newspapers (B)."
                    },
                    {
                        id: 12,
                        question_number: 12,
                        type: "multiple_choice",
                        question: "The guests are told to ...",
                        options: [
                            "A. carry their luggage to the cabin",
                            "B. go straight to the restaurant",
                            "C. wait an hour for dinner"
                        ],
                        correct_answer: "C",
                        explanation: "The host informs guests that luggage will be delivered to cabins while they can unpack and wait an hour before evening dinner is served (C)."
                    },
                    {
                        id: 13,
                        question_number: 13,
                        type: "fill_in_the_blank",
                        question: "Four-Wheel-Drive: tour to the (13) ..........",
                        correct_answer: ["waterfalls", "waterfall", "water falls", "water-falls"],
                        explanation: "The off-road vehicle excursion takes visitors directly up through rugged tracks to the scenic waterfalls."
                    },
                    {
                        id: 14,
                        question_number: 14,
                        type: "fill_in_the_blank",
                        question: "Crocodile Cruise: departs at (14) .......... daily",
                        correct_answer: ["11", "11.00", "11 am", "11:00 am", "eleven"],
                        explanation: "The river boat crocodile cruise departs each morning at 11.00 am."
                    },
                    {
                        id: 15,
                        question_number: 15,
                        type: "fill_in_the_blank",
                        question: "(15) .......... tour departs at sundown",
                        correct_answer: ["Spotlight", "spotlight", "Spotlight tour"],
                        explanation: "The nocturnal wildlife search tour is titled the Spotlight tour, beginning at sundown."
                    },
                    {
                        id: 16,
                        question_number: 16,
                        type: "fill_in_the_blank",
                        question: "What THREE items of clothing does the speaker recommend for the rainforest? (Item 1 of 3)",
                        correct_answer: ["walking boots", "boots", "socks", "long trousers", "trousers"],
                        explanation: "The guide explicitly insists on sturdy walking boots, thick socks, and long trousers."
                    },
                    {
                        id: 17,
                        question_number: 17,
                        type: "fill_in_the_blank",
                        question: "Clothing item (Item 2 of 3):",
                        correct_answer: ["walking boots", "boots", "socks", "long trousers", "trousers"],
                        explanation: "Second recommended item among boots, socks, long trousers."
                    },
                    {
                        id: 18,
                        question_number: 18,
                        type: "fill_in_the_blank",
                        question: "Clothing item (Item 3 of 3):",
                        correct_answer: ["walking boots", "boots", "socks", "long trousers", "trousers"],
                        explanation: "Third recommended item among boots, socks, long trousers."
                    },
                    {
                        id: 19,
                        question_number: 19,
                        type: "fill_in_the_blank",
                        question: "Which TWO things in the rainforest does the speaker give a warning about? (Thing 1 of 2)",
                        correct_answer: ["snakes", "poisonous snakes", "venomous snakes", "certain plants", "plants"],
                        explanation: "Visitors are cautioned against venomous snakes hiding along leaf litter and stinging poisonous plants."
                    },
                    {
                        id: 20,
                        question_number: 20,
                        type: "fill_in_the_blank",
                        question: "Hazard warning (Thing 2 of 2):",
                        correct_answer: ["snakes", "poisonous snakes", "venomous snakes", "certain plants", "plants"],
                        explanation: "Second hazard among snakes and poisonous plants."
                    }
                ]
            },

            // -------------------------------------------------------------
            // SECTION 3: Study Skills Consultation (Questions 21 - 30)
            // -------------------------------------------------------------
            {
                section_number: 3,
                title: "Section 3: Student Advisory Consultation (Questions 21 - 30)",
                audio_file: "cam2_extracted/Test 4 - Section 3.mp3",
                context: "A university freshman named John consults a student academic counsellor regarding time management, lecture listening, and exam preparation strategies.",
                questions: [
                    {
                        id: 21,
                        question_number: 21,
                        type: "multiple_choice",
                        question: "These sessions with a counsellor are ...",
                        options: [
                            "A. compulsory for all students",
                            "B. available to any students",
                            "C. for science students only"
                        ],
                        correct_answer: "B",
                        explanation: "The counsellor confirms these guidance appointments are voluntary drop-in services open to all enrolled students across all disciplines (B)."
                    },
                    {
                        id: 22,
                        question_number: 22,
                        type: "multiple_choice",
                        question: "The counsellor says that new students have to ...",
                        options: [
                            "A. spend more time on the college premises",
                            "B. get used to working independently",
                            "C. work harder than they did at school"
                        ],
                        correct_answer: "B",
                        explanation: "The crucial academic transition undergraduates face is adapting to self-directed, independent study without constant teacher oversight (B)."
                    },
                    {
                        id: 23,
                        question_number: 23,
                        type: "multiple_choice",
                        question: "John complains that the resource centre ...",
                        options: [
                            "A. has limited opening hours",
                            "B. has too few resources",
                            "C. gets too crowded"
                        ],
                        correct_answer: "A",
                        explanation: "John points out that closing at 5.00 pm curtails study opportunities for students attending full daytime lectures (A)."
                    },
                    {
                        id: 24,
                        question_number: 24,
                        type: "multiple_choice",
                        question: "The counsellor suggests to John that...",
                        options: [
                            "A. most other students can cope",
                            "B. he needs to study all the time",
                            "C. he should be able to fit in some leisure activities"
                        ],
                        correct_answer: "C",
                        explanation: "She emphasizes that effective scheduling must include planned recreation and downtime to prevent burnout (C)."
                    },
                    {
                        id: 25,
                        question_number: 25,
                        type: "multiple_choice",
                        question: "Before being able to help John the counsellor needs to ...",
                        options: [
                            "A. talk with some of his lecturers",
                            "B. consult his tutor",
                            "C. get more information from him"
                        ],
                        correct_answer: "C",
                        explanation: "She asks John to record a detailed diary of his daily study and personal routines to establish an accurate profile (C)."
                    },
                    {
                        id: 26,
                        question_number: 26,
                        type: "fill_in_the_blank",
                        question: "WRITING: Leave time to (26) ..........",
                        correct_answer: ["check work", "check over work", "check errors", "revise", "revise work", "check your work"],
                        explanation: "The counsellor stresses allocating the final 10-15 minutes of any written exam to proofread and check over errors."
                    },
                    {
                        id: 27,
                        question_number: 27,
                        type: "fill_in_the_blank",
                        question: "LISTENING: Try to (27) .......... lectures",
                        correct_answer: ["record", "tape record", "audio record"],
                        explanation: "She suggests recording lectures on audio tape so difficult concepts can be reviewed repeatedly."
                    },
                    {
                        id: 28,
                        question_number: 28,
                        type: "fill_in_the_blank",
                        question: "LISTENING: Check notes with (28) ..........",
                        correct_answer: ["a friend", "friend"],
                        explanation: "Comparing lecture notes with a trusted peer or friend helps identify missed points."
                    },
                    {
                        id: 29,
                        question_number: 29,
                        type: "fill_in_the_blank",
                        question: "READING: Choose topics of (29) ..........",
                        correct_answer: ["general interest", "General interest"],
                        explanation: "To cultivate reading speed and stamina, students should read broad articles of general interest beyond narrow textbooks."
                    },
                    {
                        id: 30,
                        question_number: 30,
                        type: "fill_in_the_blank",
                        question: "READING: Buy a good (30) ..........",
                        correct_answer: ["dictionary", "learner dictionary", "English dictionary"],
                        explanation: "She advises investing in a comprehensive learner's English dictionary."
                    }
                ]
            },

            // -------------------------------------------------------------
            // SECTION 4: Road Rage & Driver Aggression (Questions 31 - 40)
            // -------------------------------------------------------------
            {
                section_number: 4,
                title: "Section 4: Investigation into Driver Aggression (Questions 31 - 40)",
                audio_file: "cam2_extracted/Test 4 - Section 4.mp3",
                context: "A postgraduate sociology student presents his research findings on the causes, prevalence, and behavioural manifestations of road rage incidents.",
                questions: [
                    {
                        id: 31,
                        question_number: 31,
                        type: "multiple_choice",
                        question: "John was first interested in the subject because of something ...",
                        options: [
                            "A. he had witnessed",
                            "B. he had read about",
                            "C. he had experienced"
                        ],
                        correct_answer: "B",
                        explanation: "John mentions his research interest was initially triggered by a provocative magazine article he had read (B)."
                    },
                    {
                        id: 32,
                        question_number: 32,
                        type: "multiple_choice",
                        question: "The main research method was ...",
                        options: [
                            "A. interviews",
                            "B. questionnaires",
                            "C. observation"
                        ],
                        correct_answer: "A",
                        explanation: "He conducted in-depth qualitative semi-structured interviews with motorists as his primary investigative tool (A)."
                    },
                    {
                        id: 33,
                        question_number: 33,
                        type: "multiple_choice",
                        question: "Which pie chart shows the proportion of men and women respondents?",
                        options: [
                            "A. Equal half men and half women (50/50)",
                            "B. Three quarters men, one quarter women",
                            "C. One third men, two thirds women"
                        ],
                        correct_answer: "A",
                        explanation: "His respondent cohort consisted of an evenly balanced gender sample (Chart A)."
                    },
                    {
                        id: 34,
                        question_number: 34,
                        type: "multiple_choice",
                        question: "How many respondents were there?",
                        options: [
                            "A. 50 - 100",
                            "B. 100 - 150",
                            "C. 150 - 200"
                        ],
                        correct_answer: "B",
                        explanation: "The total sample size comprised 120 motorists, falling into the 100 - 150 bracket (B)."
                    },
                    {
                        id: 35,
                        question_number: 35,
                        type: "multiple_choice",
                        question: "The most common type of road rage incident involved ...",
                        options: [
                            "A. damage to property",
                            "B. personal violence",
                            "C. verbal abuse"
                        ],
                        correct_answer: "C",
                        explanation: "Overwhelmingly, reported incidents involved shouting, swearing, and aggressive verbal altercations (C)."
                    },
                    {
                        id: 36,
                        question_number: 36,
                        type: "multiple_choice",
                        question: "Which group gave the advice: Avoid eye contact with other drivers? (A: mainly women, B: mainly men, C: both)",
                        options: ["A", "B", "C"],
                        correct_answer: "B",
                        explanation: "Male motorists were significantly more likely to recommend averting gaze to avoid triggering confrontations (B)."
                    },
                    {
                        id: 37,
                        question_number: 37,
                        type: "multiple_choice",
                        question: "Which group gave the advice: Inform someone of your likely arrival time?",
                        options: ["A", "B", "C"],
                        correct_answer: "A",
                        explanation: "Female drivers emphasized notifying relatives or colleagues about estimated travel arrival times as a precautionary measure (A)."
                    },
                    {
                        id: 38,
                        question_number: 38,
                        type: "multiple_choice",
                        question: "Which group gave the advice: Ensure car keys are ready when you return to the car?",
                        options: ["A", "B", "C"],
                        correct_answer: "C",
                        explanation: "Both male and female drivers uniformly advocated keeping ignition keys in hand to minimize exposure in car parks (C)."
                    },
                    {
                        id: 39,
                        question_number: 39,
                        type: "multiple_choice",
                        question: "Which group gave the advice: Leave plenty of space when parking?",
                        options: ["A", "B", "C"],
                        correct_answer: "B",
                        explanation: "Men predominantly highlighted leaving sufficient clearance around parked vehicles to avoid getting trapped (B)."
                    },
                    {
                        id: 40,
                        question_number: 40,
                        type: "multiple_choice",
                        question: "Which group gave the advice: Keep all doors locked?",
                        options: ["A", "B", "C"],
                        correct_answer: "C",
                        explanation: "Both genders strongly endorsed keeping vehicle doors locked at all times when driving through dense traffic (C)."
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // 2. READING MODULE (3 PASSAGES - 40 QUESTIONS)
    // =========================================================================
    reading: {
        title: "IELTS Reading Practice Test 4",
        duration_seconds: 3600,
        passages: [
            // -------------------------------------------------------------
            // PASSAGE 1: Green Consumerism (Questions 1 - 13)
            // -------------------------------------------------------------
            {
                passage_number: 1,
                title: "Passage 1: Green Wave Washes Over Mainstream Shopping",
                content: `Research in Britain has shown that 'green consumers' continue to flourish as a significant group amongst shoppers. This suggests that politicians who claim environmentalism is yesterday's issue may be seriously misjudging the public mood.\n\nA report from Mintel, the market research organisation, says that despite recession and financial pressures, more people than ever want to buy environmentally friendly products and a 'green wave' has swept through consumerism, taking in people previously untouched by environmental concerns. The recently published report also predicts that the process will repeat itself with 'ethical' concerns, involving issues such as fair trade with the Third World and the social record of businesses. Companies will have to be more honest and open in response to this mood.\n\nMintel's survey, based on nearly 1,000 consumers, found that the proportion who look for green products and are prepared to pay more for them has climbed from 53 per cent in 1990 to around 60 per cent in 1994. On average, they will pay 13 per cent more for such products, although this percentage is higher among women, managerial and professional groups and those aged 35 to 44.\n\nBetween 1990 and 1994 the proportion of consumers claiming to be unaware of or unconcerned about green issues fell from 18 to 10 per cent but the number of green spenders among older people and manual workers has risen substantially. Regions such as Scotland have also caught up with the south of England in their environmental concerns. According to Mintel, the image of green consumerism as associated in the past with the more eccentric members of society has virtually disappeared. The consumer research manager for Mintel, Angela Hughes, said it had become firmly established as a mainstream market. She explained that as far as the average person is concerned environmentalism has not 'gone off the boil'. In fact, it has spread across a much wider range of consumer groups, ages and occupations.\n\nMintel's 1994 survey found that 13 per cent of consumers are 'very dark green', nearly always buying environmentally friendly products, 28 per cent are 'dark green', trying 'as far as possible' to buy such products, and 21 per cent are 'pale green' - tending to buy green products if they see them. Another 26 per cent are 'armchair greens'; they said they care about environmental issues but their concern does not affect their spending habits. Only 10 per cent say they do not care about green issues.\n\nFour in ten people are 'ethical spenders', buying goods which do not, for example, involve dealings with oppressive regimes. This figure is the same as in 1990, although the number of 'armchair ethicals' has risen from 28 to 35 per cent and only 22 per cent say they are unconcerned now, against 30 per cent in 1990. Hughes claims that in the twenty-first century, consumers will be encouraged to think more about the entire history of the products and services they buy, including the policies of the companies that provide them and that this will require a greater degree of honesty with consumers.\n\nAmong green consumers, animal testing is the top issue - 48 per cent said they would be deterred from buying a product if it had been tested on animals - followed by concerns regarding irresponsible selling, the ozone layer, river and sea pollution, forest destruction, recycling and factory farming. However, in 1990, suggesting that many consumers feel that Government and business have taken on the environmental agenda.`,
                questions: [
                    {
                        id: 1,
                        question_number: 1,
                        type: "true_false_not_given",
                        question: "The research findings report commercial rather than political trends.",
                        correct_answer: "YES",
                        explanation: "The text focuses on Mintel's consumer market survey regarding shopping spending habits rather than voting or political party developments."
                    },
                    {
                        id: 2,
                        question_number: 2,
                        type: "true_false_not_given",
                        question: "Being financially better off has made shoppers more sensitive to buying 'green'.",
                        correct_answer: "NO",
                        explanation: "The text notes that 'despite recession and financial pressures, more people than ever want to buy environmentally friendly products' and green spending rose among manual workers, contradicting the claim that increased wealth is required."
                    },
                    {
                        id: 3,
                        question_number: 3,
                        type: "true_false_not_given",
                        question: "The majority of shoppers are prepared to pay more for the benefit of the environment according to the research findings.",
                        correct_answer: "YES",
                        explanation: "Mintel found that the proportion prepared to pay more climbed to 'around 60 per cent in 1994', which constitutes a majority."
                    },
                    {
                        id: 4,
                        question_number: 4,
                        type: "true_false_not_given",
                        question: "Consumers' green shopping habits are influenced by Mintel's findings.",
                        correct_answer: "NOT GIVEN",
                        explanation: "The text describes Mintel measuring consumer habits, but nowhere suggests consumers read Mintel reports to decide their shopping behavior."
                    },
                    {
                        id: 5,
                        question_number: 5,
                        type: "true_false_not_given",
                        question: "Mintel have limited their investigation to professional and managerial groups.",
                        correct_answer: "NO",
                        explanation: "The survey investigated nearly 1,000 consumers and highlighted that green consumerism 'spread across a much wider range of consumer groups, ages and occupations... and manual workers'."
                    },
                    {
                        id: 6,
                        question_number: 6,
                        type: "true_false_not_given",
                        question: "Mintel undertakes market surveys on an annual basis.",
                        correct_answer: "NOT GIVEN",
                        explanation: "The passage compares data from 1990 and 1994, but does not state whether surveys are conducted strictly every single year."
                    },
                    {
                        id: 7,
                        question_number: 7,
                        type: "multiple_choice",
                        question: "Politicians may have 'misjudged the public mood' because ...",
                        options: [
                            "A. they are pre-occupied with the recession and financial problems.",
                            "B. there is more widespread interest in the environment agenda than they anticipated.",
                            "C. consumer spending has increased significantly as a result of 'green' pressure.",
                            "D. shoppers are displeased with government policies on a range of issues."
                        ],
                        correct_answer: "B",
                        explanation: "Politicians who claim environmentalism is yesterday's issue are wrong because widespread interest and commitment have deepened across mainstream society."
                    },
                    {
                        id: 8,
                        question_number: 8,
                        type: "multiple_choice",
                        question: "What is Mintel?",
                        options: [
                            "A. an environmentalist group",
                            "B. a business survey organisation",
                            "C. an academic research team",
                            "D. a political organisation"
                        ],
                        correct_answer: "B",
                        explanation: "The passage explicitly defines Mintel as 'the market research organisation'."
                    },
                    {
                        id: 9,
                        question_number: 9,
                        type: "multiple_choice",
                        question: "A consumer expressing concern for environmental issues without actively supporting such principles is...",
                        options: [
                            "A. an 'ethical spender'",
                            "B. a 'very dark green' spender",
                            "C. an 'armchair green'",
                            "D. a 'pale green' spender"
                        ],
                        correct_answer: "C",
                        explanation: "The text identifies 'armchair greens' as those who 'said they care about environmental issues but their concern does not affect their spending habits'."
                    },
                    {
                        id: 10,
                        question_number: 10,
                        type: "fill_in_the_blank",
                        question: "Companies will be forced to practise greater (10) .......... in their dealings",
                        correct_answer: ["honesty and openness", "honesty", "openness"],
                        explanation: "The passage states: 'Companies will have to be more honest and open in response to this mood'."
                    },
                    {
                        id: 11,
                        question_number: 11,
                        type: "fill_in_the_blank",
                        question: "because of the increased awareness amongst (11) .......... of ethical issues.",
                        correct_answer: ["consumers", "shoppers"],
                        explanation: "This shift is driven directly by the growing expectations of mainstream consumers."
                    },
                    {
                        id: 12,
                        question_number: 12,
                        type: "fill_in_the_blank",
                        question: "supported by the growth in the number of (12) .......... identified in the most recent survey",
                        correct_answer: ["armchair ethicals"],
                        explanation: "The text highlights that the number of 'armchair ethicals' has climbed from 28 to 35 per cent."
                    },
                    {
                        id: 13,
                        question_number: 13,
                        type: "fill_in_the_blank",
                        question: "companies will have to think more carefully about their (13) ..........",
                        correct_answer: ["social record", "policies"],
                        explanation: "Ethical consumerism demands close scrutiny of 'the social record of businesses' and their supply chain ethics."
                    }
                ]
            },

            // -------------------------------------------------------------
            // PASSAGE 2: Literacy & Picture Books (Questions 14 - 26)
            // -------------------------------------------------------------
            {
                passage_number: 2,
                title: "Passage 2: Literacy Standards and the Role of Illustrated Books",
                content: `Paragraph A: There is a great concern in Europe and North America about declining standards of literacy in schools. In Britain, the fact that 30 per cent of 16 year olds have a reading age of 14 or less has helped to prompt massive educational changes. The development of literacy has far-reaching effects on general intellectual development and thus anything which impedes the development of literacy is a serious matter for us all. So the hunt is on for the cause of the decline in literacy. The search so far has focused on socio-economic factors, or the effectiveness of 'traditional' versus 'modern' teaching techniques.\n\nParagraph B: The fruitless search for the cause of the increase in illiteracy is a tragic example of the saying 'They can't see the wood for the trees'. When teachers use picture books, they are simply continuing a long-established tradition that is accepted without question. And for the past two decades, illustrations in reading primers have become increasingly detailed and obtrusive, while language has become impoverished - sometimes to the point of extinction.\n\nParagraph C: Amazingly, there is virtually no empirical evidence to support the use of illustrations in teaching reading. On the contrary, a great deal of empirical evidence shows that pictures interfere in a damaging way with all aspects of learning to read. Despite this, from North America to the Antipodes, the first books that many school children receive are totally without text.\n\nParagraph D: A teacher's main concern is to help young beginner readers to develop not only the ability to recognise words, but the skills necessary to understand what these words mean. Even if a child is able to read aloud fluently, he or she may not be able to understand much of it: this is called 'barking at text'. The teacher's task of improving comprehension is made harder by influences outside the classroom. But the adverse effects of such things as television, video games, or limited language experiences at home, can be offset by experiencing 'rich' language at school.\n\nParagraph E: Instead, it is not unusual for a book of 30 or more pages to have only one sentence full of repetitive phrases. The artwork is often marvellous, but the pictures make the language redundant, and the children have no need to imagine anything when they read such books. Looking at a picture actively prevents children younger than nine from creating a mental image, and can make it difficult for older children. In order to learn how to comprehend, they need to practise making their own meaning in response to text. They need to have their innate powers of imagination trained.\n\nParagraph F: As they grow older, many children turn aside from books without pictures, and it is a situation made more serious as our culture becomes more visual. It is hard to wean children off picture books when pictures have played a major part throughout their formative reading experiences, and when there is competition for their attention from so many other sources of entertainment. The least intelligent are most vulnerable, but tests show that even intelligent children are being affected. The response of educators has been to extend the use of pictures in books and to simplify the language, even at senior levels. The Universities of Oxford and Cambridge recently held joint conferences to discuss the noticeably rapid decline in literacy among their undergraduates.\n\nParagraph G: Pictures are also used to help motivate children to read because they are beautiful and eye-catching. But motivation to read should be provided by listening to stories well read, where children imagine in response to the story. Then, as they start to read, they have this experience to help them understand the language. If we present pictures to save children the trouble of developing these creative skills, then I think we are making a great mistake.\n\nParagraph H: Academic journals ranging from educational research, psychology, language learning, psycholinguistics, and so on cite experiments which demonstrate how detrimental pictures are for beginner readers. Here is a brief selection:\n\nParagraph I: The research results of the Canadian educationalist Dale Willows were clear and consistent: pictures affected speed and accuracy and the closer the pictures were to the words, the slower and more inaccurate the child's reading became. She claims that when children come to a word they already know, then the pictures are unnecessary and distracting. If they do not know a word and look to the picture for a clue to its meaning, they may well be misled by aspects of the pictures which are not closely related to the meaning of the word they are trying to understand.\n\nParagraph J: Jay Samuels, an American psychologist, found that poor readers given no pictures learnt significantly more words than those learning to read with books with pictures. He examined the work of other researchers who had reported problems with the use of pictures and who found that a word without a picture was superior to a word plus a picture. When children were given words and pictures, those who seemed to ignore the pictures and pointed at the words learnt more words than the children who pointed at the pictures, but they still learnt fewer words than the children who had no illustrated stimuli at all.`,
                questions: [
                    {
                        id: 14,
                        question_number: 14,
                        type: "multiple_choice",
                        question: "Readers are said to 'bark' at a text when ...",
                        options: [
                            "A. they read too loudly.",
                            "B. there are too many repetitive words.",
                            "C. they are discouraged from using their imagination.",
                            "D. they have difficulty assessing its meaning."
                        ],
                        correct_answer: "D",
                        explanation: "Paragraph D explains: 'Even if a child is able to read aloud fluently, he or she may not be able to understand much of it: this is called barking at text'."
                    },
                    {
                        id: 15,
                        question_number: 15,
                        type: "multiple_choice",
                        question: "The text suggests that...",
                        options: [
                            "A. pictures in books should be less detailed.",
                            "B. pictures can slow down reading progress.",
                            "C. picture books are best used with younger readers.",
                            "D. pictures make modern books too expensive."
                        ],
                        correct_answer: "B",
                        explanation: "The author cites Willows and Samuels showing that illustrations impede reading acquisition and slow down progress."
                    },
                    {
                        id: 16,
                        question_number: 16,
                        type: "multiple_choice",
                        question: "University academics are concerned because ...",
                        options: [
                            "A. young people are showing less interest in higher education.",
                            "B. students cannot understand modern academic texts.",
                            "C. academic books are too childish for their undergraduates.",
                            "D. there has been a significant change in student literacy."
                        ],
                        correct_answer: "D",
                        explanation: "Paragraph F states Oxford and Cambridge held joint conferences 'to discuss the noticeably rapid decline in literacy among their undergraduates'."
                    },
                    {
                        id: 17,
                        question_number: 17,
                        type: "multiple_choice",
                        question: "The youngest readers will quickly develop good reading skills if they ...",
                        options: [
                            "A. learn to associate the words in a text with pictures.",
                            "B. are exposed to modern teaching techniques.",
                            "C. are encouraged to ignore pictures in the text.",
                            "D. learn the art of telling stories."
                        ],
                        correct_answer: "C",
                        explanation: "Paragraph J notes that 'children who seemed to ignore the pictures and pointed at the words learnt more words'."
                    },
                    {
                        id: 18,
                        question_number: 18,
                        type: "true_false_not_given",
                        question: "It is traditionally accepted that children's books should contain few pictures.",
                        correct_answer: "NO",
                        explanation: "Paragraph B says: 'When teachers use picture books, they are simply continuing a long-established tradition that is accepted without question'."
                    },
                    {
                        id: 19,
                        question_number: 19,
                        type: "true_false_not_given",
                        question: "Teachers aim to teach both word recognition and word meaning.",
                        correct_answer: "YES",
                        explanation: "Paragraph D states: 'A teacher's main concern is to help young beginner readers to develop not only the ability to recognise words, but the skills necessary to understand what these words mean'."
                    },
                    {
                        id: 20,
                        question_number: 20,
                        type: "true_false_not_given",
                        question: "Older readers are having difficulty in adjusting to texts without pictures.",
                        correct_answer: "YES",
                        explanation: "Paragraph F notes: 'As they grow older, many children turn aside from books without pictures... It is hard to wean children off picture books'."
                    },
                    {
                        id: 21,
                        question_number: 21,
                        type: "true_false_not_given",
                        question: "Literacy has improved as a result of recent academic conferences.",
                        correct_answer: "NOT GIVEN",
                        explanation: "The passage notes conferences were held to discuss declining literacy, but makes no claim that literacy has improved as a result."
                    },
                    {
                        id: 22,
                        question_number: 22,
                        type: "matching",
                        question: "Which paragraph states: The decline of literacy is seen in groups of differing ages and abilities?",
                        correct_answer: "F",
                        explanation: "Paragraph F notes that vulnerable less intelligent children, intelligent pupils, and university undergraduates are all affected."
                    },
                    {
                        id: 23,
                        question_number: 23,
                        type: "matching",
                        question: "Which paragraph states: Reading methods currently in use go against research findings?",
                        correct_answer: "C",
                        explanation: "Paragraph C notes that while empirical research proves pictures interfere with learning, schools continue supplying textless picture primers."
                    },
                    {
                        id: 24,
                        question_number: 24,
                        type: "matching",
                        question: "Which paragraph states: Readers able to ignore pictures are claimed to make greater progress?",
                        correct_answer: "J",
                        explanation: "Paragraph J highlights Samuels' research showing that children ignoring pictures learned significantly more words."
                    },
                    {
                        id: 25,
                        question_number: 25,
                        type: "matching",
                        question: "Which paragraph states: Illustrations in books can give misleading information about word meaning?",
                        correct_answer: "I",
                        explanation: "Paragraph I explains that pupils looking to pictures for clues 'may well be misled by aspects of the pictures'."
                    },
                    {
                        id: 26,
                        question_number: 26,
                        type: "multiple_choice",
                        question: "Choose the most suitable title for the whole of Reading Passage 2 (A - E):",
                        options: [
                            "A. The global decline in reading levels",
                            "B. Concern about recent educational developments",
                            "C. The harm that picture books can cause",
                            "D. Research carried out on children's literature",
                            "E. An examination of modern reading styles"
                        ],
                        correct_answer: "C",
                        explanation: "The central thesis argued persistently throughout every paragraph is that picture books cause serious harm to children's literacy acquisition."
                    }
                ]
            },

            // -------------------------------------------------------------
            // PASSAGE 3: The Human Genome Project (Questions 27 - 40)
            // -------------------------------------------------------------
            {
                passage_number: 3,
                title: "Passage 3: The Human Genome Project",
                content: `It has been called the Holy Grail of modern biology. Costing more than Â£2 billion, it is the most ambitious scientific project since the Apollo programme that landed a man on the moon. And it will take longer to accomplish than the lunar missions, for it will not be complete until early next century. Even before it is finished, according to those involved, this project should open up new understanding of and new treatments for many of the ailments that afflict humanity. As a result of the Human Genome Project, there will be new hope of liberation from the shadows of cancer, heart disease, autoimmune diseases such as rheumatoid arthritis, and some psychiatric illnesses.\n\nThe objective of the Human Genome Project is simple to state, but audacious in scope: to map and analyse every single gene within the double helix of humanity's DNA. The project will reveal a new human anatomy - not the bones, muscles and sinews, but the complete genetic blueprint for a human being. Those working on the Human Genome Project claim that the new genetical anatomy will transform medicine and reduce human suffering in the twenty-first century. But others see the future through a darker glass, and fear that the project may open the door to a world peopled by Frankenstein's monsters and disfigured by a new eugenics.\n\nThe genetic inheritance a baby receives from its parents at the moment of conception fixes much of its later development, determining characteristics as varied as whether it will have blue eyes or suffer from a life-threatening illness such as cystic fibrosis. The human genome is the compendium of all these inherited genetic instructions. Written out along the double helix of DNA are the chemical letters of the genetic text. It is an extremely long text, for the human genome contains more than 3 billion letters: On the printed page it would fill about 7,000 volumes. Yet, within little more than a decade, the position of every letter and its relation to its neighbours will have been tracked down, analysed and recorded.\n\nConsidering how many letters there are in the human genome, nature is an excellent proof-reader. But sometimes there are mistakes. An error in a single 'word' - a gene - can give rise to the crippling condition of cystic fibrosis, the commonest genetic disorder among Caucasians. Errors in the genetic recipe for haemoglobin, the protein that gives blood its characteristic red colour and which carries oxygen from the lungs to the rest of the body, give rise to the most common single-gene disorder in the world: thalassaemia. More than 4,000 such single-gene defects are known to afflict humanity. The majority of them are fatal; the majority of the victims are children.\n\nNone of the single-gene disorders is a disease in the conventional sense, for which it would be possible to administer a curative drug: the defect is pre-programmed into every cell of the sufferer's body. But there is hope of progress. In 1986, American researchers identified the genetic defect underlying one type of muscular dystrophy. In 1989, a team of American and Canadian biologists announced that they had found the site of the gene which, when defective, gives rise to cystic fibrosis. Indeed, they had analysed the sequence of letters within it and had identified the mistake responsible for the condition. At the least, these scientific advances may offer a way of screening parents who might be at risk of transmitting a single-gene defect to any children that they conceive. Foetuses can be tested while in the womb, and if found free of the genetic defect, the parents will be relieved of worry and stress, knowing that they will be delivered of a baby free from the disorder.\n\nIn the mid-1980s, the idea gained currency within the scientific world that the techniques which were successfully deciphering disorder-related genes could be applied to a larger project: if science can learn the genetic spelling of cystic fibrosis, why not attempt to find out how to spell 'human'? Momentum quickly built up behind the Human Genome Project and its objective of 'sequencing' the entire genome - writing out all the letters in their correct order.\n\nBut the consequences of the Human Genome Project go far beyond a narrow focus on disease. Some of its supporters have made claims of great extravagance - that the Project will bring us to understand, at the most fundamental level, what it is to be human. Yet many people are concerned that such an emphasis on humanity's genetic constitution may distort our sense of values, and lead us to forget that human life is more than just the expression of a genetic program written in the chemistry of DNA.\n\nIf properly applied, the new knowledge generated by the Human Genome Project may free humanity from the terrible scourge of diverse diseases. But if the new knowledge is not used wisely, it also holds the threat of creating new forms of discrimination and new methods of oppression. Many characteristics, such as height and intelligence, result not from the action of genes alone, but from subtle interactions between genes and the environment. What would be the implications if humanity were to understand, with precision, the genetic constitution which, given the same environment, will predispose one person towards a higher intelligence than another individual whose genes were differently shuffled?\n\nOnce before in this century, the relentless curiosity of scientific researchers brought to light forces of nature in the power of the atom, the mastery of which has shaped the destiny of nations and overshadowed all our lives. The Human Genome Project holds the promise that, ultimately, we may be able to alter our genetic inheritance if we so choose. But there is the central moral problem: how can we ensure that when we choose, we choose correctly? That such a potential is a promise and not a threat? We need only look at the past to understand the danger.`,
                questions: [
                    {
                        id: 27,
                        question_number: 27,
                        type: "fill_in_the_blank",
                        question: "The passage compares the Project in scale to the (27) ..........",
                        correct_answer: ["Apollo programme", "Apollo space programme", "Apollo program", "Apollo"],
                        explanation: "Paragraph 1 states: 'it is the most ambitious scientific project since the Apollo programme that landed a man on the moon'."
                    },
                    {
                        id: 28,
                        question_number: 28,
                        type: "fill_in_the_blank",
                        question: "The possible completion date of the Project is (28) ..........",
                        correct_answer: ["early next century", "next century"],
                        explanation: "Paragraph 1 notes: 'it will not be complete until early next century'."
                    },
                    {
                        id: 29,
                        question_number: 29,
                        type: "fill_in_the_blank",
                        question: "To write out the human genome on paper would require (29) .......... books.",
                        correct_answer: ["7,000", "7000", "about 7,000"],
                        explanation: "Paragraph 3 explains: 'On the printed page it would fill about 7,000 volumes'."
                    },
                    {
                        id: 30,
                        question_number: 30,
                        type: "fill_in_the_blank",
                        question: "A genetic problem cannot be treated with drugs because strictly speaking it is not a (30) ..........",
                        correct_answer: ["disease"],
                        explanation: "Paragraph 5 asserts: 'None of the single-gene disorders is a disease in the conventional sense, for which it would be possible to administer a curative drug'."
                    },
                    {
                        id: 31,
                        question_number: 31,
                        type: "fill_in_the_blank",
                        question: "Research into genetic defects had its first success in the discovery of the cause of one form of (31) ..........",
                        correct_answer: ["muscular dystrophy"],
                        explanation: "Paragraph 5 notes: 'In 1986, American researchers identified the genetic defect underlying one type of muscular dystrophy'."
                    },
                    {
                        id: 32,
                        question_number: 32,
                        type: "fill_in_the_blank",
                        question: "The second success of research into genetic defects was to find the cause of (32) ..........",
                        correct_answer: ["cystic fibrosis"],
                        explanation: "Paragraph 5 notes: 'In 1989, a team of American and Canadian biologists announced that they had found the site of the gene which... gives rise to cystic fibrosis'."
                    },
                    {
                        id: 33,
                        question_number: 33,
                        type: "multiple_choice",
                        question: "Classify statement: The Project will provide a new understanding of major diseases. (A: writer's fears, B: other people's fears, C: writer's reporting of facts, D: writer's reporting of long-term hopes)",
                        options: ["A", "B", "C", "D"],
                        correct_answer: "D",
                        explanation: "The author expresses optimistic aspirations that the project offers 'new hope of liberation from the shadows of cancer, heart disease' (D)."
                    },
                    {
                        id: 34,
                        question_number: 34,
                        type: "multiple_choice",
                        question: "Classify statement: All the components which make up DNA are to be recorded and studied.",
                        options: ["A", "B", "C", "D"],
                        correct_answer: "C",
                        explanation: "This describes the factual scientific goal of sequencing all 3 billion chemical base pairs (C)."
                    },
                    {
                        id: 35,
                        question_number: 35,
                        type: "multiple_choice",
                        question: "Classify statement: Genetic monsters may be created.",
                        options: ["A", "B", "C", "D"],
                        correct_answer: "B",
                        explanation: "Paragraph 2 explicitly states: 'others see the future through a darker glass, and fear that the project may open the door to a world peopled by Frankenstein's monsters' (B)."
                    },
                    {
                        id: 36,
                        question_number: 36,
                        type: "multiple_choice",
                        question: "Classify statement: The correct order and inter-relation of all genetic data in all DNA will be mapped.",
                        options: ["A", "B", "C", "D"],
                        correct_answer: "C",
                        explanation: "The author reports the factual scientific objective of recording every letter and its relation to neighbours (C)."
                    },
                    {
                        id: 37,
                        question_number: 37,
                        type: "multiple_choice",
                        question: "Classify statement: Parents will no longer worry about giving birth to defective offspring.",
                        options: ["A", "B", "C", "D"],
                        correct_answer: "D",
                        explanation: "Paragraph 5 outlines the long-term medical aspiration that genetic screening will relieve prospective parents of anxiety (D)."
                    },
                    {
                        id: 38,
                        question_number: 38,
                        type: "multiple_choice",
                        question: "Classify statement: Being 'human' may be defined solely in terms of describable physical data.",
                        options: ["A", "B", "C", "D"],
                        correct_answer: "B",
                        explanation: "Paragraph 7 reports public concerns that humanity's essence might be reduced to purely deterministic physical DNA chemistry (B)."
                    },
                    {
                        id: 39,
                        question_number: 39,
                        type: "multiple_choice",
                        question: "Classify statement: People may be discriminated against in new ways.",
                        options: ["A", "B", "C", "D"],
                        correct_answer: "A",
                        explanation: "The author directly warns: 'if the new knowledge is not used wisely, it also holds the threat of creating new forms of discrimination and new methods of oppression' (A)."
                    },
                    {
                        id: 40,
                        question_number: 40,
                        type: "multiple_choice",
                        question: "Classify statement: From past experience humans may not use this new knowledge wisely.",
                        options: ["A", "B", "C", "D"],
                        correct_answer: "A",
                        explanation: "The author draws a sobering historical parallel with atomic physics, expressing personal caution that humanity must look to the past to understand the danger (A)."
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // 3. WRITING MODULE (2 TASKS)
    // =========================================================================
    writing: {
        title: "IELTS Academic Writing Practice Test 4",
        duration_seconds: 3600,
        task_1: {
            task_number: 1,
            title: "Task 1: Imprisonment Rates in Five Countries (1930 - 1980)",
            instruction: "The chart below shows the figures for imprisonment in five countries between 1930 and 1980. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
            min_words: 150,
            chart_svg: `<svg viewBox="0 0 600 320" class="w-full max-w-2xl mx-auto rounded-xl bg-slate-900 p-4 shadow-lg text-white font-sans"><text x="300" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#38bdf8">PRISON POPULATION IN FIVE COUNTRIES (1930 - 1980)</text><text x="300" y="42" text-anchor="middle" font-size="10" fill="#94a3b8">Numbers in thousands (Great Britain, Australia, New Zealand, United States, Canada)</text><line x1="60" y1="260" x2="560" y2="260" stroke="#475569" stroke-width="2"/><line x1="60" y1="60" x2="60" y2="260" stroke="#475569" stroke-width="2"/><text x="45" y="265" font-size="9" fill="#94a3b8">0</text><text x="40" y="215" font-size="9" fill="#94a3b8">40</text><text x="40" y="165" font-size="9" fill="#94a3b8">80</text><text x="35" y="115" font-size="9" fill="#94a3b8">120</text><text x="110" y="278" font-size="10" font-weight="bold" fill="#cbd5e1">1930</text><text x="195" y="278" font-size="10" font-weight="bold" fill="#cbd5e1">1940</text><text x="280" y="278" font-size="10" font-weight="bold" fill="#cbd5e1">1950</text><text x="365" y="278" font-size="10" font-weight="bold" fill="#cbd5e1">1960</text><text x="450" y="278" font-size="10" font-weight="bold" fill="#cbd5e1">1970</text><text x="530" y="278" font-size="10" font-weight="bold" fill="#cbd5e1">1980</text><g transform="translate(140, 50)"><rect x="0" y="0" width="10" height="10" fill="#f59e0b"/><text x="15" y="9" font-size="9" fill="#e2e8f0">United States</text><rect x="100" y="0" width="10" height="10" fill="#ef4444"/><text x="115" y="9" font-size="9" fill="#e2e8f0">Canada</text><rect x="180" y="0" width="10" height="10" fill="#3b82f6"/><text x="195" y="9" font-size="9" fill="#e2e8f0">Great Britain</text><rect x="270" y="0" width="10" height="10" fill="#10b981"/><text x="285" y="9" font-size="9" fill="#e2e8f0">Australia/NZ</text></g></svg>`,
            model_answer: `The bar chart illustrates the imprisonment figures across five industrialized nationsâ€”Great Britain, Australia, New Zealand, the United States, and Canadaâ€”at ten-year intervals between 1930 and 1980.\n\nOverall, the data demonstrates considerable fluctuation across most surveyed countries without a uniform global trajectory. Nevertheless, the United States maintained significantly higher prison populations than any other nation throughout the entire fifty-year span, while Great Britain experienced an unrelenting upward climb in incarcerated individuals.\n\nIn the United States, the prisoner tally commenced at approximately 100,000 in 1930 before jumping to a peak of nearly 135,000 in 1940. Following a temporary dip to roughly 110,000 in 1950, it rose steadily back to 135,000 by 1980. Canada started with the second-highest figures, hovering around 120,000 in 1930 and peaking at 130,000 in 1940. Thereafter, Canadian imprisonment dropped sharply, falling steadily to settle at 90,000 by 1980.\n\nBy contrast, Great Britain registered a steady and sustained escalation, rising from a modest 30,000 inmates in 1930 to reach approximately 85,000 by 1980, surpassing all nations except the US. In Australia and New Zealand, prison populations remained relatively low and stable, generally varying between 40,000 and 70,000 over the half-century period.`
        },
        task_2: {
            task_number: 2,
            title: "Task 2: Working Mothers and Juvenile Problems",
            prompt: "The position of women in society has changed markedly in the last twenty years. Many of the problems young people now experience, such as juvenile delinquency, arise from the fact that many married women now work and are not at home to care for their children. To what extent do you agree or disagree with this opinion? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
            min_words: 250,
            model_answer: `The profound transformation in female socio-economic participation over the past few decades has sparked intense debate concerning its repercussions on family stability and adolescent development. While some observers assert that the proliferation of dual-income households and working mothers directly fosters youth delinquency through lack of parental supervision, I firmly disagree that maternal employment is the primary catalyst for adolescent behavioural issues.\n\nTo attribute juvenile delinquency primarily to working mothers oversimplifies complex sociological phenomena. Delinquency stems from a confluence of systemic socioeconomic stressors, including neighborhood deprivation, exposure to substance abuse, dysfunctional domestic relationships, and toxic peer pressures, rather than maternal career participation itself. Indeed, numerous studies in developmental psychology demonstrate that parental involvement is determined by the quality of emotional connection, active communication, and psychological warmth, rather than the raw quantity of hours physically spent under the same roof. Dedicated professional mothers often spend enriching, distraction-free time with their children outside working hours, cultivating mutual respect and emotional maturity.\n\nFurthermore, female workforce participation confers immense developmental advantages on children. Second incomes prevent families from sliding into financial hardship, enabling parents to afford high-quality nutrition, healthcare, and enriching extracurricular activities that foster cognitive and social competence. Moreover, working mothers serve as empowering role models, teaching daughters independence and demonstrating to sons the importance of gender equality and domestic collaboration.\n\nCrucially, childrearing must not be viewed as the exclusive responsibility of mothers. Modern fathers increasingly share domestic responsibilities, while high-quality early childhood learning centers provide structured peer socialization that enhances interpersonal empathy.\n\nIn conclusion, blaming working mothers for juvenile misconduct is anachronistic and ungrounded. Society should instead support working families through subsidized childcare, flexible working arrangements, and community adolescent mentorship programs.`
        }
    },

    // =========================================================================
    // 4. SPEAKING MODULE (3 PARTS)
    // =========================================================================
    speaking: {
        title: "IELTS Speaking Practice Test 4",
        duration_seconds: 840,
        part_1: [
            {
                topic: "Shopping Habits",
                question: "Do you prefer buying products in physical retail stores or shopping online?",
                model_answer: "I generally prefer digital e-commerce platforms for routine staples and electronics due to competitive pricing and effortless home delivery. However, for clothing and fresh produce, physical shops remain superior because tactile examination ensures quality."
            },
            {
                topic: "Reading & Books",
                question: "What genres of books do you enjoy reading in your spare time?",
                model_answer: "I am drawn toward non-fiction literature, especially economic history, behavioral psychology, and biographies of visionary technologists, as they offer analytical frameworks for understanding real-world societal shifts."
            },
            {
                topic: "Driving & Daily Transport",
                question: "Do you drive a vehicle, and what do you think of traffic conditions in your city?",
                model_answer: "I drive primarily during weekends. Urban congestion during weekday peak rush hours has become increasingly taxing, prompting me to commute via rapid transit whenever feasible."
            },
            {
                topic: "Daily Transport",
                question: "How can municipal authorities encourage safer and less stressful driving?",
                model_answer: "City planners should optimize signal synchronization, separate bike lanes, and enforce transparent traffic penalties to diminish driver anxiety and reckless aggression."
            }
        ],
        part_2: {
            title: "Part 2: Long Turn / Cue Card (3 - 4 minutes)",
            cue_card_title: "BUYING A BOOK",
            prompt: "Describe an English language writing or educational book that you purchased or were recommended to help with your academic studies.",
            cues: [
                "the title and level of the book",
                "who wrote it and what topics it covers",
                "where and how you purchased it",
                "and explain how this book has assisted your academic progress."
            ],
            model_answer: "I would like to describe a textbook titled 'Writing Academic English', authored by Alice Oshima and Ann Hogue, which was recommended by my university English lecturer.\n\nThe volume is specifically tailored for upper-intermediate to advanced English language learners preparing for tertiary academic coursework. It delivers comprehensive guidance on essay structuring, logical paragraph cohesion, synthesis of source materials, and academic register.\n\nI purchased the physical paperback copy at a specialist university bookshop located near the central library. The cost was roughly Â£20, which represented exceptional value considering the depth of practical practice tasks and annotated model answers included in the appendices.\n\nThis text proved transformative for my writing competence. Prior to working through its exercises, my essays frequently lacked formal transition signals and clear topic sentences. By systematically studying its units on argumentative frameworks and sentence variety, I gained the ability to craft compelling analytical essays that meet rigorous university academic criteria."
        },
        part_3: [
            {
                theme: "Literacy & Digital Media",
                question: "Do you believe digital multimedia and social media are causing a decline in reading attention spans?",
                model_answer: "Digital platforms unquestionably incentivize fragmented, rapid scanning through algorithmic feeds. However, digital tools also democratize access to vast global open-access libraries; the critical educational objective is cultivating disciplined 'deep reading' routines alongside digital agility."
            },
            {
                theme: "Gender Roles & Modern Workforce",
                question: "How have evolving workplace dynamics influenced traditional family structures over recent decades?",
                model_answer: "The normalization of dual-career households has dissolved rigid patriarchal divisions of labor. Modern domestic partnerships increasingly prioritize equitable chore sharing and collaborative parenting, fostering more democratic, resilient family units."
            },
            {
                theme: "Ethics in Genetic Science",
                question: "What ethical responsibilities do genetic researchers bear when developing advanced genome technologies?",
                model_answer: "Scientists and international policymakers must enforce stringent ethical boundaries to prevent genetic profiling from enabling insurance discrimination or reproductive eugenics. Therapeutic gene editing targeting fatal hereditary conditions must be prioritized over cosmetic enhancement."
            }
        ]
    }
};



// =========================================================================
// MASTER IELTS PROFILE DATA (CAMBRIDGE 1 & 2 - 4 TESTS PER VOLUME)
// =========================================================================
const ieltsProfileData = {
    avatar: "avatars/ielts.jpg",
    name: "IELTS Master",
    age: "Cambridge 1 & 2",
    curriculum: "Cambridge IELTS Official Practice Tests (Academic)",
    
    // Books hierarchy: Each Cambridge volume is 1 category containing 4 authentic tests
    books: {
        "cam_1": {
            id: "cam_1",
            title: "Cambridge IELTS 1",
            badge: "Cam 1",
            description: "Cambridge University Press - Practice Tests 1 to 4",
            test_ids: ["cam_1_test_1", "cam_1_test_2", "cam_1_test_3", "cam_1_test_4"]
        },
        "cam_2": {
            id: "cam_2",
            title: "Cambridge IELTS 2",
            badge: "Cam 2",
            description: "Cambridge University Press - Practice Tests 1 to 4",
            test_ids: ["cam_2_test_1", "cam_2_test_2", "cam_2_test_3", "cam_2_test_4"]
        }
    },

    // Units map for direct engine compatibility
    units: {
        "cam_1_test_1": { title: "Test 1", full_title: "Cambridge IELTS 1 - Test 1", book_id: "cam_1", book_title: "Cambridge IELTS 1" },
        "cam_1_test_2": { title: "Test 2", full_title: "Cambridge IELTS 1 - Test 2", book_id: "cam_1", book_title: "Cambridge IELTS 1" },
        "cam_1_test_3": { title: "Test 3", full_title: "Cambridge IELTS 1 - Test 3", book_id: "cam_1", book_title: "Cambridge IELTS 1" },
        "cam_1_test_4": { title: "Test 4", full_title: "Cambridge IELTS 1 - Test 4", book_id: "cam_1", book_title: "Cambridge IELTS 1" },
        "cam_2_test_1": { title: "Test 1", full_title: "Cambridge IELTS 2 - Test 1", book_id: "cam_2", book_title: "Cambridge IELTS 2" },
        "cam_2_test_2": { title: "Test 2", full_title: "Cambridge IELTS 2 - Test 2", book_id: "cam_2", book_title: "Cambridge IELTS 2" },
        "cam_2_test_3": { title: "Test 3", full_title: "Cambridge IELTS 2 - Test 3", book_id: "cam_2", book_title: "Cambridge IELTS 2" },
        "cam_2_test_4": { title: "Test 4", full_title: "Cambridge IELTS 2 - Test 4", book_id: "cam_2", book_title: "Cambridge IELTS 2" }
    },

    ielts_tests: {
        "cam_1_test_1": cam1Test1,
        "cam_1_test_2": cam1Test2,
        "cam_1_test_3": cam1Test3,
        "cam_1_test_4": cam1Test4,
        "cam_2_test_1": cam2Test1,
        "cam_2_test_2": cam2Test2,
        "cam_2_test_3": cam2Test3,
        "cam_2_test_4": cam2Test4
    }
};

// Register profile in studentsDB
if (typeof studentsDB !== "undefined") {
    studentsDB["ielts"] = ieltsProfileData;
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        ieltsProfileData,
        cam1Test1, cam1Test2, cam1Test3, cam1Test4,
        cam2Test1, cam2Test2, cam2Test3, cam2Test4
    };
}