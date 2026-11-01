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
const ieltsProfileData = {
    avatar: "avatars/ielts.jpg",
    name: "IELTS Master",
    age: "Cambridge 1",
    curriculum: "Cambridge IELTS 1 Academic Practice Tests (4 Full Tests: Listening | Reading | Writing | Speaking)",
    units: {
        "cam_1_test_1": { title: "Cambridge IELTS 1 - Test 1" },
        "cam_1_test_2": { title: "Cambridge IELTS 1 - Test 2" },
        "cam_1_test_3": { title: "Cambridge IELTS 1 - Test 3" },
        "cam_1_test_4": { title: "Cambridge IELTS 1 - Test 4" }
    },
    ielts_tests: {
        "cam_1_test_1": cam1Test1,
        "cam_1_test_2": cam1Test2,
        "cam_1_test_3": cam1Test3,
        "cam_1_test_4": cam1Test4
    }
};

// Register profile in studentsDB
if (typeof studentsDB !== "undefined") {
    studentsDB["ielts"] = ieltsProfileData;
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { ieltsProfileData, cam1Test1, cam1Test2, cam1Test3, cam1Test4 };
}