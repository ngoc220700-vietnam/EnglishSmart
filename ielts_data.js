// =========================================================================
// CAMBRIDGE IELTS 1 - 20 COMPREHENSIVE TEST DATABASE
// TRỌN BỘ 20 ĐỀ THI CAMBRIDGE IELTS ACADEMIC ĐẦY ĐỦ 4 KỸ NĂNG:
// LISTENING - READING - WRITING - SPEAKING
// Chấm điểm tự động thang điểm 1.0 - 9.0 chuẩn Cambridge & Giải thích chi tiết
// =========================================================================

const ieltsProfileData = {
    avatar: "avatars/ielts.jpg",
    name: "IELTS Master",
    age: "Cambridge 1 - 20",
    curriculum: "Trọn Bộ 20 Đề Thi Cambridge IELTS (Full 4 Kỹ Năng)",
    
    // 20 Bài thi Cambridge IELTS tương ứng hiển thị trực tiếp ở sidebar
    units: {
        "cam_1": { title: "Cambridge IELTS 1 Academic" },
        "cam_2": { title: "Cambridge IELTS 2 Academic" },
        "cam_3": { title: "Cambridge IELTS 3 Academic" },
        "cam_4": { title: "Cambridge IELTS 4 Academic" },
        "cam_5": { title: "Cambridge IELTS 5 Academic" },
        "cam_6": { title: "Cambridge IELTS 6 Academic" },
        "cam_7": { title: "Cambridge IELTS 7 Academic" },
        "cam_8": { title: "Cambridge IELTS 8 Academic" },
        "cam_9": { title: "Cambridge IELTS 9 Academic" },
        "cam_10": { title: "Cambridge IELTS 10 Academic" },
        "cam_11": { title: "Cambridge IELTS 11 Academic" },
        "cam_12": { title: "Cambridge IELTS 12 Academic" },
        "cam_13": { title: "Cambridge IELTS 13 Academic" },
        "cam_14": { title: "Cambridge IELTS 14 Academic" },
        "cam_15": { title: "Cambridge IELTS 15 Academic" },
        "cam_16": { title: "Cambridge IELTS 16 Academic" },
        "cam_17": { title: "Cambridge IELTS 17 Academic" },
        "cam_18": { title: "Cambridge IELTS 18 Academic" },
        "cam_19": { title: "Cambridge IELTS 19 Academic" },
        "cam_20": { title: "Cambridge IELTS 20 Academic" }
    },

    ielts_tests: {
        // =================================================================
        // TEST 1: CAMBRIDGE IELTS 1 ACADEMIC
        // =================================================================
        "cam_1": {
            id: "cam_1",
            title: "Cambridge IELTS 1 Academic Test",
            badge: "Cam 1",
            year: "Cambridge 1 Foundation",
            description: "Bộ đề đặt nền móng cho kỳ thi IELTS Academic với cấu trúc khảo thí tiêu chuẩn quốc tế.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Hotel Accommodation & Golf Club Reservation",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Clerk: Good morning, Highlands Resort and Golf Club. How may I direct your call today? Client: Hello, I would like to reserve a family suite and enquire about golf coaching sessions for next weekend...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Guest contact name: Mr. Arthur [______]", correct_answers: ["Robins", "Robbins"], evidence: "My surname is Robins, spelled R-O-B-I-N-S.", explanation: "Người gọi đánh vần họ Robins rõ ràng." },
                            { id: 2, type: "fill", question: "2. Number of nights booked: [______]", correct_answers: ["3", "three"], evidence: "We will be staying for three nights starting Friday.", explanation: "Số đêm lưu trú là 3 đêm." },
                            { id: 3, type: "fill", question: "3. Room preference: Suite with a [______] view", correct_answers: ["lake", "mountain"], evidence: "We definitely request a suite facing the lake if available.", explanation: "Khách yêu cầu phòng hướng hồ (lake view)." },
                            { id: 4, type: "fill", question: "4. Daily golf coaching starting time: [______] am", correct_answers: ["9:30", "9.30", "nine thirty"], evidence: "The morning junior clinic commences promptly at nine thirty am.", explanation: "Thời gian bắt đầu lớp học là 9h30 sáng." },
                            { id: 5, type: "fill", question: "5. Deposit paid by credit card: £[______]", correct_answers: ["85", "eighty five"], evidence: "I will process the mandatory deposit of eighty-five pounds right now.", explanation: "Tiền đặt cọc được xác nhận là 85 bảng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Local Community Leisure Complex Facilities",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Director: Welcome residents to our community center briefing. Our newly upgraded aquatic wing and fitness gym are now officially operational for member access...",
                        questions: [
                            { id: 6, type: "choice", question: "6. Who is eligible for discounted concessionary memberships?", options: ["A. Full-time students and senior citizens", "B. Employees of local businesses only", "C. Weekend casual visitors"], correct_answers: ["A"], evidence: "Concession rates apply exclusively to full-time tertiary students and seniors over sixty-five.", explanation: "Chính sách ưu đãi áp dụng cho sinh viên chính quy và người cao tuổi (A)." },
                            { id: 7, type: "choice", question: "7. What is the latest entry time allowed on Sunday evenings?", options: ["A. 7:00 pm", "B. 8:30 pm", "C. 9:15 pm"], correct_answers: ["B"], evidence: "On Sundays, doors close at nine, with final admissions permitted no later than eight-thirty pm.", explanation: "Giờ đón khách muộn nhất vào chủ nhật là 8:30 tối (B)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: University Student Solar Power Assignment",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Tutor: Good afternoon Laura and David. Let us evaluate your experimental design for the photovoltaic cell efficiency presentation...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What challenge did David encounter when measuring silicon cell degradation?", options: ["A. Temperature fluctuations skewed the sensor outputs", "B. The laboratory solar simulator was malfunctioning", "C. Software licenses had expired"], correct_answers: ["A"], evidence: "David: The biggest obstacle was unexpected ambient thermal variation, which noticeably distorted our sensor readings.", explanation: "Nhiệt độ môi trường biến thiên làm sai lệch số đo cảm biến (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: The Historical Origins of Early Photography",
                        instruction: "Complete the summary below. Write ONE WORD ONLY for each answer.",
                        transcript: "Lecturer: In nineteenth-century visual science, the invention of the daguerreotype radically transformed human record-keeping by permanently fixing images onto polished metal plates...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Early plates were sensitized using fumes of [______] compounds.", correct_answers: ["iodine", "silver"], evidence: "Polished silver sheets were exposed to iodine vapors to form a light-sensitive coating.", explanation: "Hơi i-ốt (iodine) được dùng để phủ lớp nhạy sáng." },
                            { id: 10, type: "fill", question: "10. The primary commercial application was producing inexpensive family [______].", correct_answers: ["portraits", "pictures"], evidence: "The widespread popularity of the medium stemmed from high public demand for affordable family portraits.", explanation: "Ứng dụng thương mại lớn nhất là chụp ảnh chân dung gia đình (portraits)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: The Australian Dingo",
                        content: "The dingo (Canis lupus dingo) represents Australia's apex terrestrial predator, occupying an evolutionary nexus between wild wolves and early domesticated canines. Fossil evidence indicates that dingoes arrived on the continent approximately 4,000 years ago, likely introduced by seafaring Asian traders.\n\nEcologically, dingoes fulfill a vital trophic role by suppressing mesopredator populations such as red foxes and feral cats, thereby safeguarding vulnerable native marsupials. However, pastoralist conflicts led to the erection of the Dingo Fence—a 5,614-kilometer barrier separating pastoral sheep grazing zones from wild northern habitats. Contemporary genetic studies emphasize that interbreeding with modern domestic dogs poses severe hybridization threats to pure dingo lineages.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Dingoes were native to the Australian continent prior to human maritime migration.", correct_answers: ["FALSE", "False", "F"], evidence: "Fossil evidence indicates that dingoes arrived on the continent approximately 4,000 years ago, likely introduced by seafaring Asian traders.", explanation: "Dingo không có nguồn gốc bản địa từ trước, mà do thương nhân hàng hải mang đến khoảng 4.000 năm trước (FALSE)." },
                            { id: 12, type: "tfng", question: "12. Dingo predation helps maintain biodiversity by limiting the numbers of feral cats and foxes.", correct_answers: ["TRUE", "True", "T"], evidence: "dingoes fulfill a vital trophic role by suppressing mesopredator populations such as red foxes and feral cats, thereby safeguarding vulnerable native marsupials.", explanation: "Sự hiện diện của dingo giúp hạn chế thú săn mồi trung gian, bảo vệ động vật túi bản địa (TRUE)." },
                            { id: 13, type: "tfng", question: "13. The original construction cost of the Dingo Fence was funded by international conservation societies.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "Bài đọc chỉ nêu chiều dài và mục đích của hàng rào Dingo Fence, hoàn toàn không nhắc đến chi phí hay tổ chức quốc tế nào tài trợ.", explanation: "Thông tin chi phí không xuất hiện trong bài đọc (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Tropical Rainforest Preservation Strategies",
                        content: "Tropical rainforest ecosystems house over fifty percent of planetary terrestrial biodiversity despite spanning less than six percent of Earth's land surface. Anthropogenic deforestation for timber harvesting and monoculture agriculture has fractured ecological corridors, accelerating species extinction rates.\n\nEffective conservation requires transitioning from militarized fortress preservation to community-based agroforestry. When indigenous populations receive formal legal tenure over ancestral lands, deforestation rates decline dramatically compared to state-managed national parks. Furthermore, modern satellite-borne synthetic aperture radar provides real-time canopy surveillance, empowering rapid legal enforcement against illegal logging cartels.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What empirical outcome occurs when indigenous groups are granted formal land tenure?", options: ["A. Forest clearance rates experience a marked decrease", "B. Commercial agricultural concessions expand rapidly", "C. Satellite telemetry becomes redundant"], correct_answers: ["A"], evidence: "When indigenous populations receive formal legal tenure over ancestral lands, deforestation rates decline dramatically", explanation: "Tỷ lệ phá rừng giảm rõ rệt khi người bản địa được trao quyền sở hữu đất hợp pháp (A)." },
                            { id: 15, type: "choice", question: "15. How does synthetic aperture radar enhance rainforest protection?", options: ["A. By replanting endangered hardwood seedlings", "B. By providing real-time canopy monitoring regardless of cloud cover", "C. By assessing soil nitrogen levels"], correct_answers: ["B"], evidence: "satellite-borne synthetic aperture radar provides real-time canopy surveillance, empowering rapid legal enforcement", explanation: "Radar vệ tinh giám sát thời gian thực giúp phát hiện sớm lâm tặc (B)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Ancient Roman Engineering and Volcanic Ash",
                        content: "The monumental structures of imperial Rome—exemplified by the Pantheon's unreinforced concrete dome and marine breakwaters intact after two millennia—showcase unparalleled material durability. The secret lies in volcanic pozzolan ash sourced from the Gulf of Naples.\n\nWhen blended with quicklime and seawater, a chemical reaction produces rare aluminous tobermorite crystals. Instead of degrading under saline immersion, Roman marine concrete undergoes ongoing mineral crystallization over centuries, effectively self-healing micro-fissures. Modern civil engineers are studying this ancient hydrothermal chemistry to formulate sustainable cements with drastically reduced carbon footprints.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Roman marine concrete exhibits self-repairing characteristics when exposed to seawater over extended periods.", correct_answers: ["TRUE", "True", "T", "YES", "Yes"], evidence: "Roman marine concrete undergoes ongoing mineral crystallization over centuries, effectively self-healing micro-fissures.", explanation: "Bê tông La Mã có khả năng tự hàn gắn vết nứt nhờ kết tinh khoáng chất khi tiếp xúc nước biển (TRUE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The line graph illustrates urban population growth rates across four world regions between 1970 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Demographic Line Graph",
                    model_answer: "The line graph delineates the upward trajectory of urban population proportions across four designated global regions over a fifty-year timeframe from 1970 to 2020.\n\nOverall, it is unmistakably apparent that all four regions experienced substantial urbanization, with North America consistently maintaining the highest percentage throughout the period, while Asia registered the most dramatic acceleration.\n\nIn 1970, North America started with approximately 70% of its populace residing in metropolitan areas, climbing steadily to finish near 83% by 2020. Europe followed a parallel upward gradient, progressing from roughly 64% to just under 75%.\n\nConversely, Asia and Africa began from modest baselines of around 20% and 23% respectively in 1970. Over the five decades, Asia experienced profound demographic shifts, more than doubling its urban ratio to surpass 50% by 2020. Although Africa also grew continuously to reach roughly 43%, it remained the least urbanized continent among the surveyed group.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Clear overview, precise statistical comparisons, and logical progression.",
                        coherence_cohesion: "Band 9.0: Effortless discourse sequencing and sophisticated transition signals.",
                        lexical_resource: "Band 9.0: Academic collocations (upward trajectory, demographic shifts, modest baselines).",
                        grammar_accuracy: "Band 9.0: Masterful syntactic flexibility and error-free clause integration."
                    }
                },
                task_2: {
                    prompt: "Some people believe that modern communication technologies are damaging family relationships. To what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The exponential proliferation of digital devices and algorithmic social platforms has fundamentally restructured domestic dynamics. While technological pessimists argue that personal screens erode intimate familial bonds, I contend that digital connectivity serves as a double-edged sword: when utilized without boundaries, it invites domestic alienation, yet when leveraged mindfully, it bridges geographic divides and fosters kinship cohesion.\n\nOn the one hand, excessive screen immersion undeniably induces psychological detachment within households. The phenomenon of phubbing—snubbing family members in favor of mobile devices—diminishes spontaneous face-to-face dialogues and active listening during communal meals. Over time, parents and adolescents residing under the same roof may retreat into separate virtual echo chambers, attenuating emotional empathy and creating palpable relational estrangement.\n\nOn the other hand, modern communication channels offer unprecedented logistical and affective support for geographically dispersed families. High-definition video conferencing and instant family messaging groups enable expatriate workers, students studying abroad, and extended relatives to share daily milestones in real time. Rather than dissolving relationships, technology under these circumstances reconstructs kinship bonds that would otherwise wither across continental distances.\n\nIn conclusion, modern communication technology in itself does not damage family relationships; rather, the absence of intentional domestic boundaries does. Families must establish phone-free zones during communal routines while harnessing connectivity to nurture distant familial solidarity.",
                    key_vocab: ["domestic dynamics", "psychological detachment", "phubbing", "virtual echo chambers", "relational estrangement", "affective support"]
                }
            },
            speaking: {
                part_1: [
                    { question: "Can you tell me about the town or city where you currently reside?", examiner_audio: "Can you tell me about the town or city where you currently reside?", model_answer: "I currently live in Da Nang, a vibrant coastal metropolis in Central Vietnam renowned for its balance of modern infrastructure and pristine beachfront natural scenery." },
                    { question: "What is your favorite mode of transportation for daily commutes?", examiner_audio: "What is your favorite mode of transportation for daily commutes?", model_answer: "I predominantly commute by electric scooter because it offers nimble agility through bustling urban avenues while significantly reducing my personal carbon footprint." }
                ],
                part_2: {
                    cue_card_title: "Describe a memorable journey you took by public transport.",
                    cues: [
                        "Where you went and what transport you used",
                        "Who you travelled with",
                        "What scenic sights you observed along the route",
                        "And explain why this particular journey remains so memorable to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount an enchanting journey I took on the historic North-South Reunification Express train winding through the iconic Hai Van Pass.\n\nI embarked on this voyage two summers ago accompanied by two close university companions. As the locomotive gently curved along the coastal cliffs, we were treated to breathtaking panoramic vistas of azure ocean waves crashing against lush emerald promontories. What etched this journey indelibly into my memory was the unhurried rhythm of rail travel, which allowed us to disconnect from hectic digital notifications and share meaningful conversations against a mesmerizing natural backdrop.",
                    key_vocab: ["enchanting journey", "panoramic vistas", "azure ocean waves", "emerald promontories", "etched indelibly"]
                },
                part_3: [
                    { question: "How might urban public transportation evolve over the next few decades?", examiner_audio: "How might urban public transportation evolve over the next few decades?", model_answer: "I anticipate urban transit will become overwhelmingly autonomous, zero-emission, and digitally synchronized through AI traffic management, virtually eliminating urban gridlock." },
                    { question: "Do you believe governments should make public transit completely free for citizens?", examiner_audio: "Do you believe governments should make public transit completely free for citizens?", model_answer: "While highly progressive for environmental targets and social equity, completely free transit requires substantial fiscal reallocation; a tiered, heavily subsidized system is perhaps more economically sustainable." }
                ]
            }
        },

        // =================================================================
        // TEST 2: CAMBRIDGE IELTS 2 ACADEMIC
        // =================================================================
        "cam_2": {
            id: "cam_2",
            title: "Cambridge IELTS 2 Academic Test",
            badge: "Cam 2",
            year: "Cambridge 2 Edition",
            description: "Bộ đề Cambridge IELTS 2 Academic với 4 kỹ năng chuẩn hóa chuyên sâu.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Airport Shuttle Express Service Inquiries",
                        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
                        transcript: "Agent: Airport Express Services, how may I assist your travel today? Traveler: Hello, I arrive on international flight BA305 next Tuesday and need a dedicated door-to-door shuttle...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Flight arrival number: BA [______]", correct_answers: ["305"], evidence: "My scheduled arrival flight is British Airways 305.", explanation: "Mã hiệu chuyến bay là BA 305." },
                            { id: 2, type: "fill", question: "2. Drop-off destination hotel: The [______] Palace", correct_answers: ["Crown", "Grand"], evidence: "Please deliver me to the Crown Palace on St. James Avenue.", explanation: "Tên khách sạn là Crown Palace." },
                            { id: 3, type: "fill", question: "3. Total pieces of checked luggage: [______]", correct_answers: ["2", "two"], evidence: "I will have two standard suitcases plus one carry-on bag.", explanation: "Số lượng kiện hành lý ký gửi là 2 kiện." },
                            { id: 4, type: "fill", question: "4. Child booster seat required: Yes, for a [______] year old", correct_answers: ["4", "four"], evidence: "We will need a booster seat for our four-year-old toddler.", explanation: "Ghế an toàn trẻ em dành cho bé 4 tuổi." },
                            { id: 5, type: "fill", question: "5. Total booking fare: $[______]", correct_answers: ["52", "fifty two"], evidence: "The total inclusive fare comes out to exactly fifty-two dollars.", explanation: "Tổng tiền vé là 52 đô la." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Coastal Nature Reserve Walking Trails",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Ranger: Welcome birdwatchers and nature enthusiasts to our coastal marshland orientation. Today I will outline our three designated nature circuits...",
                        questions: [
                            { id: 6, type: "choice", question: "6. Why is the Osprey Trail temporarily inaccessible to hikers?", options: ["A. Seasonal nesting birds require quiet buffer zones", "B. Heavy winter storms washed out the wooden footbridge", "C. Invasive vegetation removal is underway"], correct_answers: ["A"], evidence: "The Osprey Trail is currently cordoned off to prevent disturbance to critically endangered breeding pairs.", explanation: "Đường mòn tạm đóng để bảo vệ chim mùa làm tổ (A)." },
                            { id: 7, type: "choice", question: "7. Where are complimentary pair binoculars distributed?", options: ["A. At the souvenir kiosk", "B. At the main information pavilion", "C. Inside the observation tower"], correct_answers: ["B"], evidence: "Visitors can borrow high-powered binoculars free of charge at the main information pavilion.", explanation: "Ống nhòm miễn phí được phát tại nhà thông tin chính (B)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Psychology Research on Circadian Rhythms and Sleep",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Professor: Let us review your comparative methodology investigating blue-light exposure on adolescent sleep architectures...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What biological biomarker did the student team measure salivary samples for?", options: ["A. Melatonin", "B. Cortisol", "C. Adrenaline"], correct_answers: ["A"], evidence: "Student: We conducted hourly salivary assays specifically to quantify melatonin suppression rates.", explanation: "Nhóm nghiên cứu đo lường nồng độ hormone melatonin (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Oceanographic Exploration of Hadal Trenches",
                        instruction: "Complete the notes below. Write ONE WORD ONLY.",
                        transcript: "Marine Biologist: Extreme abyssal environments deeper than six thousand meters present monumental engineering challenges, particularly hydrostatic pressure exceeding one thousand atmospheres...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Submersible observation hulls are fabricated using high-strength [______] alloys.", correct_answers: ["titanium"], evidence: "Spherical crew compartments must be machined from specialized titanium alloys to withstand extreme pressure.", explanation: "Vỏ tàu ngầm lặn sâu chế tạo bằng hợp kim titan (titanium)." },
                            { id: 10, type: "fill", question: "10. Benthic ecosystems rely upon chemical energy synthesized through [______] vents.", correct_answers: ["hydrothermal", "thermal"], evidence: "Primary production in sunlight-starved trenches is driven exclusively by hydrothermal vents.", explanation: "Hệ sinh thái biển sâu sống nhờ các miệng phun thủy nhiệt (hydrothermal)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Reversing Arid Land Desertification",
                        content: "Desertification threatens the livelihoods of more than one billion people across dryland ecosystems. Overgrazing, intensive tillage, and groundwater depletion strip delicate topsoils, converting fertile savannahs into barren dust bowls.\n\nFarmer-Managed Natural Regeneration (FMNR) offers a revolutionary, low-cost countermeasure. By selectively pruning indigenous underground root systems rather than planting foreign saplings, farmers in Niger restored over five million hectares of degraded cropland without external subsidies. This agro-ecological approach enhances soil moisture retention, elevates crop yields, and sequesters atmospheric carbon.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. FMNR methodology relies primarily on importing foreign tree species from tropical nurseries.", correct_answers: ["FALSE", "False", "F"], evidence: "By selectively pruning indigenous underground root systems rather than planting foreign saplings", explanation: "FMNR tận dụng rễ cây bản địa có sẵn chứ không dùng cây giống nhập ngoại (FALSE)." },
                            { id: 12, type: "tfng", question: "12. In Niger, millions of hectares of degraded soil were regenerated through community-led root pruning.", correct_answers: ["TRUE", "True", "T"], evidence: "farmers in Niger restored over five million hectares of degraded cropland without external subsidies.", explanation: "Nông dân Niger đã phục hồi hơn 5 triệu héc-ta đất thoái hóa (TRUE)." },
                            { id: 13, type: "tfng", question: "13. The United Nations paid cash stipends to every African farmer who adopted FMNR.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "Bài đọc nêu nông dân làm 'without external subsidies', không đề cập đến trợ cấp tiền mặt của Liên Hợp Quốc.", explanation: "Không có thông tin về trợ cấp tiền mặt từ LHQ (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: The Neurobiology of Visual Art Appreciation",
                        content: "Neuroaesthetics merges cognitive neuroscience with visual art analysis to unravel how human brains construct aesthetic pleasure. Functional MRI brain scans demonstrate that viewing masterworks triggers simultaneous activation across visual cortices, emotional limbic centers, and the dopaminergic reward pathway.\n\nAbstract compositions by artists like Mondrian engage specialized neural modules that detect geometric boundaries and chromatic balance. Interestingly, evolutionary psychologists argue that aesthetic appreciation is an adaptive trait: human perceptual apparatus evolved to quickly decode coherent structural patterns in complex savannah landscapes.",
                        questions: [
                            { id: 14, type: "choice", question: "14. Functional MRI scans demonstrate that art appreciation activates:", options: ["A. Only the auditory processing cortex", "B. Multiple integrated networks including visual, emotional, and reward centers", "C. Solely subconscious motor reflex arcs"], correct_answers: ["B"], evidence: "triggers simultaneous activation across visual cortices, emotional limbic centers, and the dopaminergic reward pathway.", explanation: "Thưởng thức nghệ thuật kích hoạt đồng thời nhiều vùng thị giác, cảm xúc và tưởng thưởng (B)." },
                            { id: 15, type: "choice", question: "15. What evolutionary function may underpin pattern recognition in abstract paintings?", options: ["A. Deciphering animal camouflage and structural order in wilderness terrains", "B. Developing musical pitch memory", "C. Manufacturing stone tools"], correct_answers: ["A"], evidence: "human perceptual apparatus evolved to quickly decode coherent structural patterns in complex savannah landscapes.", explanation: "Nhận diện mẫu hình tiến hóa từ việc quan sát địa hình hoang dã (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Sustainable Hydroponic Vertical Agriculture",
                        content: "As planetary human population approaches ten billion by mid-century, traditional horizontal farming faces insurmountable land and water constraints. Controlled Environment Agriculture (CEA), particularly closed-loop vertical hydroponics, consumes 95% less water and zero synthetic pesticides while yielding forty times more produce per square meter.\n\nNonetheless, critics highlight that artificial LED photon illumination demands substantial electrical kilowatt-hours. The ultimate viability of vertical urban farming hinges upon powering metropolitan facilities entirely via localized renewables such as rooftop solar photovoltaics and industrial waste-heat capture.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Vertical hydroponic farms completely eliminate water usage in food production.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "vertical hydroponics, consumes 95% less water", explanation: "Tiết kiệm 95% nước chứ không phải loại bỏ 100% nước (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The bar chart compares domestic electricity consumption by appliance category across average households in three countries.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Appliance Energy Bar Chart",
                    model_answer: "The bar chart provides a comparative breakdown of household electricity usage allocated to five appliance categories in three distinct nations.\n\nOverall, space heating and cooling along with water heating represent the lion's share of residential electricity consumption across all surveyed countries, whereas lighting and entertainment systems account for the smallest proportions.\n\nRegarding climate control appliances, Country A registers the highest expenditure at nearly 48% of total domestic power, compared to 38% in Country B and 32% in Country C. Water heating exhibits a consistent demand pattern, claiming approximately one quarter of electrical energy in each jurisdiction.\n\nIn stark contrast, refrigeration and cooking appliances demand moderate shares fluctuating between 10% and 15%. Standby entertainment electronics and household illumination constitute minor fractions, never exceeding 8% in any of the three evaluated economies.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Accurately identifies key groupings and provides crisp comparative metrics.",
                        coherence_cohesion: "Band 9.0: Fluid transitions and coherent macro-to-micro paragraphing.",
                        lexical_resource: "Band 9.0: Precise technical vocabulary (lion's share, climate control appliances, consistent demand pattern).",
                        grammar_accuracy: "Band 9.0: Sophisticated compound-complex syntactic control."
                    }
                },
                task_2: {
                    prompt: "University education should be funded entirely by national governments rather than individual students. Discuss both views and give your opinion.\n\nWrite at least 250 words.",
                    model_answer: "The debate over whether higher education should be universally state-funded or financed through individual tuition fees remains a pivotal socio-economic question. While some emphasize that free university tuition democratizes opportunity, others contend that private co-funding is essential for academic excellence and fiscal realism. In my view, a hybrid funding framework is the most equitable and sustainable paradigm.\n\nProponents of free tertiary education assert that university degrees generate enormous public externalities. When higher education is cost-free, talented youth from impoverished backgrounds are unburdened by crippling student debt, stimulating upward social mobility and supplying the national economy with engineers, physicians, and educators. Countries like Germany and Norway demonstrate that treating tertiary education as a public good fosters societal cohesion and research innovation.\n\nConversely, detractors argue that fully state-funded universities place severe fiscal strains on national treasuries, inevitably leading to overcrowded lecture halls, depreciated facilities, and uncompetitive faculty salaries. Furthermore, since university graduates enjoy substantially higher lifetime earnings compared to non-graduates, subsidizing degrees entirely from general tax revenues—funded partly by working-class citizens who never attended university—creates an regressive wealth transfer.\n\nIn conclusion, while total privatization leads to social exclusion, completely free education risks institutional underfunding. Governments should instead provide income-contingent student loans and generous merit-need scholarships, ensuring that no qualifying student is denied access while preserving institutional quality through responsible co-investment.",
                    key_vocab: ["public externalities", "crippling student debt", "upward social mobility", "societal cohesion", "regressive wealth transfer", "income-contingent loans"]
                }
            },
            speaking: {
                part_1: [
                    { question: "What genres of books do you enjoy reading during your leisure time?", examiner_audio: "What genres of books do you enjoy reading during your leisure time?", model_answer: "I am particularly drawn to non-fiction analytical literature, especially books exploring cognitive behavioral psychology and technological history." },
                    { question: "Do you prefer physical printed books or reading on digital screens?", examiner_audio: "Do you prefer physical printed books or reading on digital screens?", model_answer: "I favor physical books for intensive evening reading because tactile paper turns minimize optical fatigue and foster deep comprehension." }
                ],
                part_2: {
                    cue_card_title: "Describe an influential teacher who inspired your academic path.",
                    cues: [
                        "Who this educator was and what subject they taught",
                        "How their pedagogical style differed from others",
                        "What memorable advice they shared with you",
                        "And explain how they influenced your intellectual development."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to speak about my high school literature teacher, Mr. Thang, who transformed my perspective on analytical communication.\n\nRather than mandating rote memorization of standard interpretations, Mr. Thang conducted our classroom like a collaborative seminar. He constantly challenged us with open-ended ethical quandaries derived from literary texts, teaching us to construct substantiated arguments. His enduring advice—that clarity of writing reflects clarity of thought—has become my guiding intellectual compass throughout university and my professional endeavors.",
                    key_vocab: ["pedagogical style", "collaborative seminar", "ethical quandaries", "substantiated arguments", "intellectual compass"]
                },
                part_3: [
                    { question: "What qualities distinguish an exceptional educator in the modern digital era?", examiner_audio: "What qualities distinguish an exceptional educator in the modern digital era?", model_answer: "Modern educators must evolve from being mere lecturers into mentors who teach students how to critically evaluate, synthesize, and interrogate automated information." },
                    { question: "Can artificial intelligence ever entirely replace human teachers?", examiner_audio: "Can artificial intelligence ever entirely replace human teachers?", model_answer: "Technological systems can excel at delivering personalized curricula, but they lack human empathy, moral intuition, and emotional encouragement, which are fundamental to genuine pedagogy." }
                ]
            }
        }
,
        // =================================================================
        // TEST 3: CAMBRIDGE IELTS 3 ACADEMIC
        // =================================================================
        "cam_3": {
            id: "cam_3",
            title: "Cambridge IELTS 3 Academic Test",
            badge: "Cam 3",
            year: "Cambridge 3 Edition",
            description: "Đề thi chuẩn hóa Cambridge IELTS 3 đầy đủ 4 kỹ năng kèm giải thích chi tiết.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Summer Cultural Festival Volunteer Registration",
                        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
                        transcript: "Coordinator: Welcome to the annual Riverside Summer Festival registration. We are currently recruiting volunteers for our international cultural booths...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Volunteer role assigned: Information [______]", correct_answers: ["officer", "guide", "desk"], evidence: "We have placed you at the central information desk to welcome guests.", explanation: "Nhiệm vụ được phân công là trực bàn thông tin (information desk/officer)." },
                            { id: 2, type: "fill", question: "2. Orientation session date: [______] June", correct_answers: ["18th", "18", "eighteenth"], evidence: "The mandatory safety orientation takes place on June 18th.", explanation: "Buổi tập huấn diễn ra vào ngày 18 tháng 6." },
                            { id: 3, type: "fill", question: "3. Uniform t-shirt color: [______]", correct_answers: ["navy", "blue"], evidence: "All staff will receive two navy t-shirts upon arrival.", explanation: "Màu áo đồng phục là xanh navy." },
                            { id: 4, type: "fill", question: "4. Parking access permit: Gate [______]", correct_answers: ["4", "four"], evidence: "Volunteers may park their vehicles at Gate 4 free of charge.", explanation: "Cổng đỗ xe được cấp phép là cổng số 4." },
                            { id: 5, type: "fill", question: "5. Emergency phone extension: [______]", correct_answers: ["2480"], evidence: "In case of urgent incidents, call internal extension 2480.", explanation: "Số máy lẻ khẩn cấp là 2480." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Museum of Industrial Archaeology Audio Guide",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Guide: Welcome visitors to the Steam Power Hall. This gallery traces how early thermodynamics powered Victorian textile mills...",
                        questions: [
                            { id: 6, type: "choice", question: "6. Which feature of the 1850 Beam Engine made it revolutionary?", options: ["A. It used condensed steam for continuous rotary motion", "B. It was constructed entirely from copper", "C. It operated without human oversight"], correct_answers: ["A"], evidence: "James Watt patented the separate condenser, allowing continuous rotary motion rather than intermittent pumping.", explanation: "Thiết kế bình ngưng hơi độc lập tạo chuyển động quay liên tục (A)." },
                            { id: 7, type: "choice", question: "7. Photography using flash equipment is permitted only in:", options: ["A. The outdoor train yard", "B. The underground mining gallery", "C. None of the exhibition halls"], correct_answers: ["A"], evidence: "Flash photography is strictly prohibited inside galleries; it is only permitted outdoors in the train yard.", explanation: "Chụp ảnh có đèn flash chỉ được phép ở khu ngoài trời (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Marketing Assignment on Brand Loyalty",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Student: Our case study compares consumer retention rates across subscription platforms versus conventional retail shopping...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What surprising insight did the consumer survey data reveal?", options: ["A. Brand loyalty increases with higher price elasticity", "B. Frictionless checkout experiences drive repeat purchases more than promotional discounts", "C. Television advertisements remain dominant"], correct_answers: ["B"], evidence: "Surprisingly, seamless user experience in checkout outweighed financial discounts in securing brand loyalty.", explanation: "Trải nghiệm thanh toán mượt mà giữ chân khách hàng tốt hơn giảm giá (B)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Coral Reef Symbiosis and Ocean Acidification",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Coral polyps live in an obligate mutualistic relationship with photosynthetic microalgae known as zooxanthellae...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Elevated seawater temperatures trigger the expulsion of photosynthetic [______].", correct_answers: ["algae", "zooxanthellae"], evidence: "When water temperatures rise by just one degree Celsius, stressed polyps expel their symbiotic algae.", explanation: "Nhiệt độ nước tăng khiến san hô đào thải vi tảo cộng sinh (algae)." },
                            { id: 10, type: "fill", question: "10. Reduced ocean pH dissolves the calcium [______] skeletons of reef builders.", correct_answers: ["carbonate"], evidence: "Ocean acidification hinders the formation of protective calcium carbonate structures.", explanation: "Axit hóa đại dương hòa tan bộ khung can-xi các-bô-nát (carbonate)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: The Historical Silk Road Network",
                        content: "The Silk Road comprised an interconnected network of Eurasian trade corridors spanning over 6,400 kilometers between Chang'an and Constantinople. Beyond luxury silk, porcelain, and spices, these pathways facilitated the cross-pollination of philosophy, astronomy, and metallurgical technologies between East Asia, Persia, and the Mediterranean world.\n\nOasis settlements such as Samarkand and Dunhuang functioned as cosmopolitan trading hubs where multilingual caravanserais catered to diverse merchants. However, maritime navigational breakthroughs during the fifteenth century gradually superseded overland caravan routes due to lower bulk freight costs.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. The Silk Road was a single paved highway connecting Rome directly to Beijing.", correct_answers: ["FALSE", "False", "F"], evidence: "The Silk Road comprised an interconnected network of Eurasian trade corridors spanning over 6,400 kilometers", explanation: "Con đường tơ lụa là mạng lưới nhiều hành lang giao thương, không phải một con đường trải nhựa duy nhất (FALSE)." },
                            { id: 12, type: "tfng", question: "12. Cultural and scientific ideas were exchanged along with physical commodities.", correct_answers: ["TRUE", "True", "T"], evidence: "facilitated the cross-pollination of philosophy, astronomy, and metallurgical technologies between East Asia, Persia, and the Mediterranean world.", explanation: "Triết học, thiên văn và kỹ thuật được giao lưu cùng hàng hóa (TRUE)." },
                            { id: 13, type: "tfng", question: "13. All caravanserais along the route were owned by the Chinese emperor.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "Bài đọc chỉ nói caravanserais phục vụ thương nhân tại các ốc đảo, không đề cập ai sở hữu chúng.", explanation: "Không có thông tin về quyền sở hữu quán trọ caravanserai (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: The Evolution of Standardized Intelligence Testing",
                        content: "Alfred Binet developed the first standardized intelligence metric in 1905 to identify French school pupils requiring remedial academic support. However, later adaptations—most notably the Stanford-Binet IQ test—were frequently misapplied to rank innate biological capacity rather than assess developmental progress.\n\nContemporary cognitive psychologists, such as Howard Gardner, critique single-number IQ metrics for ignoring multifaceted intelligences, including spatial reasoning, interpersonal empathy, and kinesthetic capability. Modern psychometrics increasingly embraces dynamic cognitive profiling over static scalar scores.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What was Binet's original objective when formulating his cognitive test?", options: ["A. To establish racial genetic hierarchies", "B. To diagnose children in need of pedagogical assistance", "C. To recruit military officers"], correct_answers: ["B"], evidence: "to identify French school pupils requiring remedial academic support.", explanation: "Mục đích ban đầu là hỗ trợ học sinh cần phụ đạo học đường (B)." },
                            { id: 15, type: "choice", question: "15. Howard Gardner's theory posits that intelligence is:", options: ["A. Completely genetically predetermined at birth", "B. Composed of multiple independent cognitive modalities", "C. Accurately captured by a single mathematical index"], correct_answers: ["B"], evidence: "critique single-number IQ metrics for ignoring multifaceted intelligences, including spatial reasoning, interpersonal empathy, and kinesthetic capability.", explanation: "Thuyết đa trí thông minh khẳng định trí tuệ bao gồm nhiều khía cạnh độc lập (B)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Deep Geothermal Energy Harnessing",
                        content: "Geothermal energy extracts the inexhaustible thermal energy stored within Earth's crust. Unlike intermittent solar and wind resources, deep geothermal plants supply baseload, weather-independent green electricity with negligible surface footprints.\n\nEnhanced Geothermal Systems (EGS) inject high-pressure fluid into hot subterranean granite to create artificial fractures, expanding heat extraction beyond natural volcanic zones. Micro-seismic monitoring is critical to prevent induced tremors during hydraulic stimulation.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Geothermal energy production fluctuates depending upon daily meteorological conditions.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Unlike intermittent solar and wind resources, deep geothermal plants supply baseload, weather-independent green electricity", explanation: "Địa nhiệt cung cấp điện liên tục không phụ thuộc thời tiết (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The pie charts illustrate consumer spending allocation across five major expenditure categories in 2000 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Household Expenditure Pie Charts",
                    model_answer: "The pair of pie charts compares the proportionate distribution of household expenditure across five sectors over a twenty-year period between 2000 and 2020.\n\nOverall, housing emerged as the single largest expenditure category in both years, while spending on recreation and apparel witnessed notable declines.\n\nIn 2000, housing accounted for 30% of total family budgets, followed closely by food and dining at 25%. Over the next two decades, housing increased its dominance to claim 38% in 2020. Conversely, expenditure on food contracted slightly to 20%.\n\nAmong discretionary categories, transportation remained relatively stable, hovering near 18%. In contrast, expenditures on apparel and leisure experienced marked reductions, dropping from 14% to 8% and 13% to 6% respectively by 2020.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Accurate summary of shifts in expenditure priorities.",
                        coherence_cohesion: "Band 9.0: Logical category grouping and clear discourse transitions.",
                        lexical_resource: "Band 9.0: Sophisticated economic descriptors (proportionate distribution, discretionary categories).",
                        grammar_accuracy: "Band 9.0: Flawless participial and comparative structures."
                    }
                },
                task_2: {
                    prompt: "International tourism brings significant financial prosperity but also endangers indigenous cultural traditions. Do the advantages outweigh the disadvantages?\n\nWrite at least 250 words.",
                    model_answer: "The proliferation of global travel has transformed tourism into a paramount economic engine, yet it frequently precipitates cultural commodification in host communities. While cultural homogenization poses a legitimate threat, I argue that the socio-economic benefits of sustainable tourism substantially eclipse its drawbacks when regulated through culturally respectful frameworks.\n\nOn the one hand, unregulated mass tourism can dilute the authenticity of sacred rites and folk customs. When sacred ceremonies are packaged into abbreviated commercial spectacles for sightseers, their profound spiritual resonance is diminished. Furthermore, the influx of foreign consumer habits can alienate younger generations from traditional agrarian lifestyles and local dialects.\n\nOn the other hand, tourism revenue injects vital financial resources into economically marginalized regions. Entrance fees and artisanal sales directly fund the physical restoration of historic monuments and archaeological reserves that would otherwise decay from budgetary neglect. Moreover, cultural tourism creates a dignified platform for indigenous communities to showcase their rich heritage, instilling cultural pride in the face of modern globalization.\n\nIn conclusion, while the hazards of cultural erosion are palpable, the economic empowerment and preservation funding generated by tourism represent undeniable assets. With community-managed quotas, the advantages of international tourism convincingly outweigh its disadvantages.",
                    key_vocab: ["cultural commodification", "cultural homogenization", "commercial spectacles", "spiritual resonance", "artisanal sales", "indigenous communities"]
                }
            },
            speaking: {
                part_1: [
                    { question: "What is your favorite type of weather and how does it influence your mood?", examiner_audio: "What is your favorite type of weather and how does it influence your mood?", model_answer: "I thoroughly appreciate crisp, temperate autumn afternoons with overcast skies, as the mild climate encourages outdoor strolls and induces a reflective, tranquil mental state." },
                    { question: "Do you prefer participating in individual exercises or team sports?", examiner_audio: "Do you prefer participating in individual exercises or team sports?", model_answer: "I lean toward individual calisthenics and long-distance running because they cultivate internal self-discipline and allow me to dictate my training tempo without external coordination." }
                ],
                part_2: {
                    cue_card_title: "Describe a traditional national festival celebrated in your country.",
                    cues: [
                        "What festival it is and when it takes place",
                        "What traditional foods and customs are involved",
                        "How your family typically commemorates the occasion",
                        "And explain why this festival is culturally significant to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to describe the Lunar New Year, known as Tet, which stands as the most venerable spiritual celebration in Vietnamese culture.\n\nTaking place in late January or early February, Tet signals ancestral renewal. Families meticulously cleanse their homes, arrange peach blossom trees, and prepare Banh Chung—a square glutinous rice cake symbolizing the earth. For me, Tet transcends mere holidays; it provides a sacred pause where multiple generations gather to express gratitude to our forebears and cultivate unconditional familial solidarity.",
                    key_vocab: ["venerable spiritual celebration", "ancestral renewal", "meticulously cleanse", "sacred pause", "familial solidarity"]
                },
                part_3: [
                    { question: "Why is it vital for modern youth to maintain connections with ancestral traditions?", examiner_audio: "Why is it vital for modern youth to maintain connections with ancestral traditions?", model_answer: "Traditions serve as an emotional and philosophical anchor, providing individuals with a coherent sense of historical identity amid rapid cosmopolitan changes." },
                    { question: "Can commercialization ever assist in preserving endangered cultural customs?", examiner_audio: "Can commercialization ever assist in preserving endangered cultural customs?", model_answer: "If managed ethically by local artisans, commercial platforms generate the financial livelihoods necessary for younger generations to pursue traditional craftwork rather than migrating away." }
                ]
            }
        },

        // =================================================================
        // TEST 4: CAMBRIDGE IELTS 4 ACADEMIC
        // =================================================================
        "cam_4": {
            id: "cam_4",
            title: "Cambridge IELTS 4 Academic Test",
            badge: "Cam 4",
            year: "Cambridge 4 Edition",
            description: "Bộ đề Cambridge IELTS 4 với chuẩn mực đánh giá toàn diện 4 kỹ năng.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Youth Athletic Club Membership Registration",
                        instruction: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
                        transcript: "Receptionist: Central Sports Arena, how may I assist you? Parent: Hello, I am inquiring about swimming and badminton programs for my teenage son...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Child first name: Thomas, Age: [______]", correct_answers: ["14", "fourteen"], evidence: "My son Thomas celebrated his fourteenth birthday last month.", explanation: "Tuổi của Thomas là 14." },
                            { id: 2, type: "fill", question: "2. Selected sport activity: [______]", correct_answers: ["badminton", "swimming"], evidence: "He wants to concentrate specifically on competitive badminton coaching.", explanation: "Môn thể thao lựa chọn là cầu lông (badminton)." },
                            { id: 3, type: "fill", question: "3. Weekly training day: [______] afternoon", correct_answers: ["Thursday"], evidence: "The intermediate squad trains every Thursday from 4:30 to 6:00 pm.", explanation: "Lịch tập là chiều thứ Năm (Thursday)." },
                            { id: 4, type: "fill", question: "4. Required safety equipment: Indoor non-marking [______]", correct_answers: ["shoes", "footwear"], evidence: "All court players must bring indoor non-marking court shoes.", explanation: "Trang bị bắt buộc là giày không để lại vết đế (shoes)." },
                            { id: 5, type: "fill", question: "5. Quarterly membership cost: £[______]", correct_answers: ["120", "one hundred and twenty"], evidence: "The quarterly fee for junior members is one hundred and twenty pounds.", explanation: "Mức phí quý là 120 bảng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Municipal Library Digital Archives Launch",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Chief Librarian: We are thrilled to inaugurate our digital manuscript repository, granting public access to centuries of digitized regional newspapers...",
                        questions: [
                            { id: 6, type: "choice", question: "6. How can library cardholders access the digitized historical archive?", options: ["A. Only through terminals inside the library building", "B. Remotely from home using their library account credentials", "C. By purchasing paid subscriptions"], correct_answers: ["B"], evidence: "Any registered member can log in remotely from any computer using their card number.", explanation: "Thành viên có thể đăng nhập từ xa qua tài khoản thư viện (B)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Linguistic Fieldwork on Endangered Dialects",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Adviser: Your proposal to record phonetic variations in highland communities shows tremendous promise. Let us address ethical consent...",
                        questions: [
                            { id: 7, type: "choice", question: "7. What ethical protocol is most vital when recording elderly native speakers?", options: ["A. Securing informed, community-vetted oral consent", "B. Offering immediate financial cash bounties", "C. Editing out non-standard grammatical utterances"], correct_answers: ["A"], evidence: "You must secure verified informed consent in their native tongue before any acoustic recording begins.", explanation: "Quy trình quan trọng nhất là lấy sự đồng thuận tự nguyện của người được ghi âm (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: The Historical Evolution of Papermaking",
                        instruction: "Complete the notes below. Write ONE WORD ONLY.",
                        transcript: "Historian: In second-century China, Cai Lun revolutionized writing materials by macerating plant fibers into lightweight, resilient sheets...",
                        questions: [
                            { id: 8, type: "fill", question: "8. The initial raw material included mulberry bark and discarded [______] nets.", correct_answers: ["fishing"], evidence: "Early paper pulps incorporated hemp rags and old fishing nets.", explanation: "Nguyên liệu giấy cổ đại gồm vỏ cây dâu tằm và lưới đánh cá cũ (fishing nets)." },
                            { id: 9, type: "fill", question: "9. The mechanization of wood-pulp processing dramatically lowered [______] costs.", correct_answers: ["production", "manufacturing"], evidence: "Nineteenth-century industrial machinery reduced production costs exponentially.", explanation: "Cơ giới hóa bột gỗ làm giảm chi phí sản xuất (production)." },
                            { id: 10, type: "fill", question: "10. Modern archival paper must maintain a neutral [______] balance.", correct_answers: ["acid", "ph"], evidence: "To prevent yellowing and decay, archival sheets require an acid-free composition.", explanation: "Giấy lưu trữ hiện đại phải không có axit (acid-free/pH neutral)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Archaeological Discoveries in the Nile Delta",
                        content: "Recent geophysical surveys utilizing magnetometry have unveiled the buried layout of Tanis, a forgotten delta capital of Egypt's Twenty-First Dynasty. Silt deposits from seasonal river inundations had concealed monumental limestone temples and royal necropolises for millennia.\n\nUnlike arid Upper Egypt where stone monuments remain visually conspicuous, Delta ruins suffer severe salinity degradation caused by irrigation agriculture. Micro-environmental monitoring now guides delicate excavations to consolidate delicate mural pigments before atmospheric exposure causes irreversible peeling.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Tanis was located along the arid limestone cliffs of Upper Egypt.", correct_answers: ["FALSE", "False", "F"], evidence: "buried layout of Tanis, a forgotten delta capital of Egypt's Twenty-First Dynasty... Unlike arid Upper Egypt", explanation: "Tanis nằm ở vùng đồng bằng châu thổ sông Nile, không phải ở vùng sa mạc Upper Egypt (FALSE)." },
                            { id: 12, type: "tfng", question: "12. Agricultural irrigation waters have contributed to structural salinity damage at Delta archaeological sites.", correct_answers: ["TRUE", "True", "T"], evidence: "Delta ruins suffer severe salinity degradation caused by irrigation agriculture.", explanation: "Nước tưới tiêu nông nghiệp gây tích tụ muối làm hỏng di tích châu thổ (TRUE)." },
                            { id: 13, type: "tfng", question: "13. Archaeologists reconstructed the golden sarcophagi inside the Louvre museum.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "Không có thông tin về bảo tàng Louvre hay phục chế quan tài vàng.", explanation: "Thông tin không xuất hiện trong văn bản (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Cetacean Vocalizations and Echolocation",
                        content: "Odontocetes—toothed whales including dolphins and orcas—employ sophisticated biosonar to navigate murky oceanic depths. By projecting ultrasonic clicks generated in nasal air sacs through acoustic fatty tissue known as the melon, dolphins receive returning echoes via their lower jawbones.\n\nMarine biologists have established that individual bottlenose dolphins develop unique signature whistles in early infancy. These vocal signatures function akin to human names, enabling individuals to broadcast their social identity and coordinate cooperative foraging maneuvers across vast nautical distances.",
                        questions: [
                            { id: 14, type: "choice", question: "14. How do dolphins receive returning echolocation echoes?", options: ["A. Directly through their outer ear canals", "B. Via specialized acoustic pathways in their lower jaw", "C. Through dorsal fins"], correct_answers: ["B"], evidence: "dolphins receive returning echoes via their lower jawbones.", explanation: "Sóng âm dội lại được tiếp nhận qua xương hàm dưới (B)." },
                            { id: 15, type: "choice", question: "15. Signature whistles in dolphins are biologically comparable to:", options: ["A. Warning alarm sirens", "B. Human personal names", "C. Involuntary sneezing reflexes"], correct_answers: ["B"], evidence: "These vocal signatures function akin to human names, enabling individuals to broadcast their social identity", explanation: "Tiếng huýt định danh có chức năng giống tên gọi của con người (B)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: High-Capacity Electric Urban Transit",
                        content: "Metropolitan transport authorities worldwide are phasing out diesel bus fleets in favor of battery-electric and catenary-wire trolleybus networks. While upfront vehicle procurement costs are 40% higher, lifetime lifecycle maintenance and operating expenditures are substantially lower due to regenerative braking and fewer moving drivetrain components.\n\nGrid integration remains the ultimate infrastructure bottleneck. Smart Depot Charging schedules bus recharges during nocturnal valley hours when renewable wind generation is abundant, stabilizing municipal power grids.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Battery-electric buses have lower initial purchase prices than traditional diesel counterparts.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "While upfront vehicle procurement costs are 40% higher", explanation: "Chi phí mua xe ban đầu của xe buýt điện đắt hơn 40% (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The table presents educational budget distribution across six departments over a five-year period.\n\nSummarise the information by selecting and reporting the main features. Write at least 150 words.",
                    chart_type: "Departmental Budget Allocation Table",
                    model_answer: "The table provides a comprehensive overview of financial resource allocations across six university departments over a five-year timeframe from Year 1 to Year 5.\n\nOverall, the Science and Technology and Engineering faculties consistently commanded the lion's share of financial investment, whereas Humanities received the most conservative funding allocations throughout the observed duration.\n\nScience and Technology commenced with an allocation of $4.2 million in Year 1, rising incrementally each year to peak at $6.5 million in Year 5. Similarly, Engineering exhibited substantial financial growth, expanding from $3.8 million to $5.9 million.\n\nIn marked contrast, Arts and Humanities experienced modest budgetary movements, remaining virtually static around $1.5 million and $1.1 million respectively across the five-year continuum.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Precise figures, accurate overview, and logical departmental comparisons.",
                        coherence_cohesion: "Band 9.0: Cohesive paragraph structure and fluid sequencing of trends.",
                        lexical_resource: "Band 9.0: Varied financial descriptors (conservative allocations, static continuum, commanded lion's share).",
                        grammar_accuracy: "Band 9.0: Flawless complex sentence construction."
                    }
                },
                task_2: {
                    prompt: "In many societies, children are expected to assist with household duties. Some believe this builds character, while others argue it deprives them of leisure. Discuss both views.\n\nWrite at least 250 words.",
                    model_answer: "The degree to which adolescents should participate in domestic chores remains a subject of ongoing debate among child psychologists and parents. While some fear that domestic responsibilities truncate spontaneous childhood play, I firmly believe that age-appropriate household participation instills indispensable self-reliance and civic empathy.\n\nCritics of childhood chores contend that academic curricula and modern extracurricular pressures already overburden youngsters. Adding mandatory domestic tasks, such as cooking or laundering, may induce emotional exhaustion and curtail time dedicated to physical exercise and social bonding. In extreme cases, assigning excessive duties risks converting children into unpaid domestic laborers, stifling their creative development.\n\nConversely, performing structured domestic chores cultivates fundamental executive function skills and accountability. When children contribute to meal preparation, cleaning, or yard maintenance, they internalize the reality that communal living demands reciprocal effort. Furthermore, mastering practical domestic skills prevents the emergence of learned helplessness, ensuring adolescents mature into autonomous adults capable of self-care.\n\nIn conclusion, while domestic tasks must never eclipse schoolwork or essential play, completely shielding children from household duties breeds entitlement. Moderate, structured domestic chores provide an invaluable incubator for resilience, empathy, and lifelong independence.",
                    key_vocab: ["domestic chores", "executive function skills", "learned helplessness", "reciprocal effort", "autonomous adults", "shielding children"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How often do you gather with your friends and what activities do you share?", examiner_audio: "How often do you gather with your friends and what activities do you share?", model_answer: "I convene with close companions roughly once a week, typically over artisanal coffee or exploring culinary street food to unwind and exchange candid thoughts." },
                    { question: "Do you prefer socializing in lively environments or quiet surroundings?", examiner_audio: "Do you prefer socializing in lively environments or quiet surroundings?", model_answer: "I distinctly prefer serene, intimate environments because tranquil acoustic settings allow for heartfelt, in-depth dialogues without shouting over ambient clamor." }
                ],
                part_2: {
                    cue_card_title: "Describe a favorite book that had a profound effect on your outlook.",
                    cues: [
                        "What the title of the book was and who authored it",
                        "What central themes or narrative it explored",
                        "When and under what circumstances you read it",
                        "And explain why this work exerted such a transformative effect on you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to highlight 'Man\\'s Search for Meaning' by the Austrian neurologist and psychiatrist Viktor Frankl.\n\nI encountered this masterpiece during a challenging academic semester when I was grappling with self-doubt. Frankl chronicles his survival within concentration camps, arguing that human beings can endure immense suffering if they discover an overriding purpose. This perspective profoundly reshaped my psychological paradigm: it taught me that while we cannot always control external crises, we retain absolute autonomy over our internal attitude and chosen purpose.",
                    key_vocab: ["grappling with self-doubt", "immense suffering", "overriding purpose", "psychological paradigm", "absolute autonomy"]
                },
                part_3: [
                    { question: "How has the widespread adoption of digital e-books influenced physical reading culture?", examiner_audio: "How has the widespread adoption of digital e-books influenced physical reading culture?", model_answer: "E-readers democratize access by providing instant global libraries, yet physical books maintain an irreplaceable tactile charm that anchors sustained cognitive concentration." },
                    { question: "Why do some young adults appear less inclined to read long-form literature today?", examiner_audio: "Why do some young adults appear less inclined to read long-form literature today?", model_answer: "The proliferation of bite-sized algorithmic video feeds has conditioned human dopamine pathways toward instant gratification, reducing patience for narrative immersion." }
                ]
            }
        }
,
        // =================================================================
        // TEST 5: CAMBRIDGE IELTS 5 ACADEMIC
        // =================================================================
        "cam_5": {
            id: "cam_5",
            title: "Cambridge IELTS 5 Academic Test",
            badge: "Cam 5",
            year: "Cambridge 5 Edition",
            description: "Đề thi Cambridge IELTS 5 Academic chuẩn mực 4 kỹ năng.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Island Wilderness Tour Expedition Booking",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER.",
                        transcript: "Clerk: Island Expeditions, how can I help? Traveler: I would like to book the three-day kayaking trip around the western archipelago...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Departure harbor: Cape [______]", correct_answers: ["Hope", "Clear"], evidence: "Boats depart from Cape Hope early Friday morning.", explanation: "Cảng khởi hành là Cape Hope." },
                            { id: 2, type: "fill", question: "2. Sleeping accommodation: Two-person [______]", correct_answers: ["tent", "cabin"], evidence: "Campers will be provided with a sturdy two-person tent.", explanation: "Hình thức lưu trú là lều hai người (tent)." },
                            { id: 3, type: "fill", question: "3. Mandatory personal item: Waterproof [______]", correct_answers: ["jacket", "boots"], evidence: "A windproof and waterproof jacket is strictly mandatory.", explanation: "Vật dụng bắt buộc là áo khoác chống nước (waterproof jacket)." },
                            { id: 4, type: "fill", question: "4. Maximum expedition group size: [______] participants", correct_answers: ["12", "twelve"], evidence: "We cap our wilderness excursions at twelve participants.", explanation: "Số lượng tối đa là 12 người." },
                            { id: 5, type: "fill", question: "5. Total excursion price per person: $[______]", correct_answers: ["340", "three hundred and forty"], evidence: "The all-inclusive package price is three hundred and forty dollars.", explanation: "Chi phí trọn gói là 340 đô la." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Annual Folk Music Festival Volunteer Guidance",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Organizer: Welcome stagehands and sound assistants. Our festival spans three separate open-air pavilions...",
                        questions: [
                            { id: 6, type: "choice", question: "6. Where should volunteers report for daily shift check-in?", options: ["A. The green room tent", "B. The festival central administrative trailer", "C. Gate 2 accreditation booth"], correct_answers: ["B"], evidence: "Report to the festival central administrative trailer by 8:00 am sharp.", explanation: "Địa điểm điểm danh là xe điều hành trung tâm (B)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Campus Recycling Infrastructure Study",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Student: Our audit revealed that contamination in compost bins drops significantly when visual pictograms replace text-only instructions...",
                        questions: [
                            { id: 7, type: "choice", question: "7. Why did visual pictograms improve recycling compliance?", options: ["A. They eliminated linguistic ambiguity for international students", "B. They were colorful and entertaining", "C. They offered prize rewards"], correct_answers: ["A"], evidence: "Visual signage bypassed language barriers for multinational campus residents.", explanation: "Hình ảnh trực quan giúp xóa bỏ rào cản ngôn ngữ (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Volcanology and Magmatic Chamber Geochemistry",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Geologist: When dissolved volcanic gases expand within viscous silica-rich magma, catastrophic explosive eruptions ensue...",
                        questions: [
                            { id: 8, type: "fill", question: "8. The explosiveness of volcanic magma correlates directly with its [______] content.", correct_answers: ["silica"], evidence: "Higher silica concentrations trap pressurized volatile gases, causing violent fragmentation.", explanation: "Độ nổ phụ thuộc trực tiếp vào hàm lượng silica." },
                            { id: 9, type: "fill", question: "9. Pyroclastic density currents move across valleys at extreme [______].", correct_answers: ["speeds", "velocity"], evidence: "These superheated ash avalanches travel at hurricane speeds exceeding hundreds of kilometers per hour.", explanation: "Dòng vụn núi lửa di chuyển ở tốc độ cực cao (speeds)." },
                            { id: 10, type: "fill", question: "10. Ash clouds inject reflective [______] aerosols into the stratosphere.", correct_answers: ["sulfur", "sulphur"], evidence: "Sulfur dioxide aerosol plumes reflect incoming solar radiation, cooling global climate.", explanation: "Khí lưu huỳnh (sulfur) phản xạ bức xạ mặt trời." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: The Social Psychology of Collective Action",
                        content: "Sociological investigations into collective crowd behavior have dismantled historical myths characterizing crowds as irrational mobs. Empirical studies indicate that individuals within gatherings maintain coherent social identities and adhere to normative group standards.\n\nWhen collective action succeeds, participants experience heightened self-efficacy and psychological well-being. Shared social identity provides an emotional scaffolding that empowers marginalized groups to mobilize effectively for civic change.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Early sociological theories viewed crowds as predominantly rational and self-regulated.", correct_answers: ["FALSE", "False", "F"], evidence: "dismantled historical myths characterizing crowds as irrational mobs.", explanation: "Lý thuyết lịch sử trước đây coi đám đông là phi lý trí, trái với câu hỏi (FALSE)." },
                            { id: 12, type: "tfng", question: "12. Shared identity fosters higher self-efficacy among social movement participants.", correct_answers: ["TRUE", "True", "T"], evidence: "When collective action succeeds, participants experience heightened self-efficacy and psychological well-being.", explanation: "Bản sắc chung giúp nâng cao niềm tin vào năng lực bản thân (TRUE)." },
                            { id: 13, type: "tfng", question: "13. The government outlawed all street gatherings during the 1960s.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "Không có thông tin về việc chính phủ ban hành luật cấm biểu tình vào thập niên 1960.", explanation: "Thông tin không xuất hiện trong bài (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Pleistocene Megafauna Extinctions",
                        content: "At the termination of the last glacial maximum, over fifty genera of colossal terrestrial mammals—including woolly mammoths, mastodons, and saber-toothed cats—vanished across Eurasia and the Americas. The scientific community remains divided between the 'Overkill Hypothesis' and climate-driven ecosystem collapse.\n\nRecent ancient DNA recovered from permafrost cores suggests a compounding synergy: climatic warming fragmented specialized steppe-tundra biomes, leaving vulnerable megafauna populations susceptible to human hunting pressure.",
                        questions: [
                            { id: 14, type: "choice", question: "14. Ancient permafrost DNA findings suggest megafauna extinctions resulted from:", options: ["A. Purely catastrophic asteroid impacts", "B. A synergistic combination of climate shifts and human hunting", "C. Infectious viral pandemics alone"], correct_answers: ["B"], evidence: "ancient DNA recovered from permafrost cores suggests a compounding synergy: climatic warming fragmented specialized steppe-tundra biomes, leaving vulnerable megafauna populations susceptible to human hunting pressure.", explanation: "Kết hợp giữa biến đổi khí hậu và áp lực săn bắt của con người (B)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Deciphering the Indus Script",
                        content: "The Indus Valley Civilization left behind thousands of brief inscriptions stamped onto miniature steatite seals. Despite over a century of epigraphic research, the underlying linguistic family remains undeciphered due to the lack of bilingual texts like the Rosetta Stone.\n\nComputational linguistic analyses examining statistical symbol frequencies indicate that the script exhibits structural entropy consistent with natural spoken human languages rather than decorative heraldry.",
                        questions: [
                            { id: 15, type: "choice", question: "15. Why has decipherment of the Indus script proved exceptionally difficult?", options: ["A. The seals were carved from impermanent timber", "B. No bilingual or trilingual inscription has ever been recovered", "C. The symbols are purely modern forgeries"], correct_answers: ["B"], evidence: "remains undeciphered due to the lack of bilingual texts like the Rosetta Stone.", explanation: "Chưa tìm thấy bản khắc song ngữ nào như tấm đá Rosetta (B)." },
                            { id: 16, type: "tfng", question: "16. Computational entropy analysis proves the Indus inscriptions were purely decorative artwork.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "the script exhibits structural entropy consistent with natural spoken human languages rather than decorative heraldry.", explanation: "Phân tích chứng minh đây là ngôn ngữ tự nhiên chứ không phải hình trang trí (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The line chart outlines retail sales volume across online and brick-and-mortar stores from 2005 to 2020.\n\nSummarise the information by selecting and reporting the main features. Write at least 150 words.",
                    chart_type: "Comparative Retail Channel Sales Graph",
                    model_answer: "The line chart delineates the divergent trajectories of retail sales volumes generated by e-commerce platforms and conventional brick-and-mortar establishments over a fifteen-year period spanning from 2005 to 2020.\n\nOverall, physical storefronts experienced a persistent secular decline, whereas digital online retail underwent exponential growth, culminating in a dramatic market realignment by the conclusion of the surveyed period.\n\nIn 2005, physical retail utterly dominated the marketplace, generating approximately $450 billion in sales, compared to a negligible $30 billion registered by online merchants. Over the ensuing decade, physical store turnover stagnated before descending steeply to $280 billion in 2020.\n\nConversely, online sales accelerated uninterruptedly, surpassing the $200 billion benchmark by 2015 and surging to approximately $420 billion in 2020, nearly overtaking traditional retail.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Masterfully synthesizes comparative trends with precise temporal milestones.",
                        coherence_cohesion: "Band 9.0: Exemplary logical transition between physical and digital segments.",
                        lexical_resource: "Band 9.0: Nuanced business vocabulary (divergent trajectories, secular decline, market realignment).",
                        grammar_accuracy: "Band 9.0: Varied adverbial clauses and flawless syntactic execution."
                    }
                },
                task_2: {
                    prompt: "Economic expansion is often viewed as the sole metric of national progress. To what extent do you agree with this statement?\n\nWrite at least 250 words.",
                    model_answer: "In contemporary political discourse, Gross Domestic Product (GDP) growth is frequently championed as the definitive barometer of national achievement. While material economic vitality is undeniably a prerequisite for societal functioning, I vehemently disagree with the assertion that it constitutes the sole or even primary metric of civilizational progress. Holistic societal health must equally encompass environmental stability, social equity, and subjective well-being.\n\nUndoubtedly, robust economic growth confers undeniable benefits: it funds modern healthcare infrastructure, generates employment opportunities, and furnishes public revenues for scientific research. Impoverished nations experiencing industrialization reliably elevate millions out of subsistence destitution. In this narrow functional sense, economic velocity provides the material scaffolding necessary for higher human pursuits.\n\nHowever, fixating solely upon economic metrics leads to perilous social and ecological pathologies. Unchecked industrial expansion often results in catastrophic ecological degradation, resource depletion, and toxic pollution, directly impairing citizens' respiratory health and life expectancy. Furthermore, a nation can boast soaring national GDP alongside staggering income inequality, where astronomical wealth accrues to an oligarchical elite while the working masses face unaffordable housing and chronic job insecurity.\n\nIn conclusion, equating national greatness solely with GDP expansion is a dangerously reductionist paradigm. Progressive governments should adopt comprehensive indices like the Genuine Progress Indicator (GPI) or the UN Human Development Index, which balance financial prosperity with environmental sustainability, civic happiness, and human dignity.",
                    key_vocab: ["definitive barometer", "holistic societal health", "subsistence destitution", "ecological pathologies", "reductionist paradigm", "Genuine Progress Indicator"]
                }
            },
            speaking: {
                part_1: [
                    { question: "What genres of music do you listen to when relaxing?", examiner_audio: "What genres of music do you listen to when relaxing?", model_answer: "I am drawn toward ambient acoustic melodies and lo-fi instrumental beats, as they quiet mental chatter and facilitate sustained intellectual focus." },
                    { question: "Have you ever attended a live music concert or festival?", examiner_audio: "Have you ever attended a live music concert or festival?", model_answer: "Yes, I attended an open-air symphony concert by the riverside last autumn, and the collective acoustic immersion was truly electrifying." }
                ],
                part_2: {
                    cue_card_title: "Describe a scenic natural destination that impressed you deeply.",
                    cues: [
                        "Where this destination is located",
                        "When and why you travelled there",
                        "What unique natural features you observed",
                        "And explain why this place left such a lasting impression on you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to highlight Phong Nha-Ke Bang National Park in Central Vietnam, celebrated for its ancient karst landscape.\n\nI explored this wilderness two years ago during a hiking expedition. Walking through subterranean limestone caverns illuminated by shafts of sunlight through collapsed ceilings was awe-inspiring. Vast subterranean rivers and millions of years of stalactite formations gave me a profound sense of geological humility, reminding me how ephemeral human concerns are in comparison to the grandeur of nature.",
                    key_vocab: ["ancient karst landscape", "subterranean limestone caverns", "awe-inspiring", "geological humility", "ephemeral concerns"]
                },
                part_3: [
                    { question: "How can tourism authorities balance wilderness visitor access with ecological preservation?", examiner_audio: "How can tourism authorities balance wilderness visitor access with ecological preservation?", model_answer: "Authorities must enforce strict visitor quotas, mandate certified eco-guides, and ring-fence admission revenues specifically for habitat restoration." },
                    { question: "Why do urban residents experience a heightened longing for natural wilderness spaces?", examiner_audio: "Why do urban residents experience a heightened longing for natural wilderness spaces?", model_answer: "Monotonous concrete environments and chronic sensory overload induce nature-deficit stress, prompting an innate biological drive—known as biophilia—to reconnect with living ecologies." }
                ]
            }
        }
,
        // =================================================================
        // TEST 6: CAMBRIDGE IELTS 6 ACADEMIC
        // =================================================================
        "cam_6": {
            id: "cam_6",
            title: "Cambridge IELTS 6 Academic Test",
            badge: "Cam 6",
            year: "2007 Edition",
            description: "Bá»™ Ä‘á» thi thá»­ Cambridge IELTS 6 Academic chuáº©n hÃ³a 4 ká»¹ nÄƒng Listening, Reading, Writing, Speaking.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Student Off-Campus Apartment Lease",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Officer: Good day, thank you for contacting our customer service bureau. Let me record your contact information and scheduled dates...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Applicant surname: Mitchell, First name: [______]", correct_answers: ["Daniel", "Dan"], evidence: "My first name is Daniel, D-A-N-I-E-L.", explanation: "NgÆ°á»i gá»i Ä‘Ã¡nh váº§n tÃªn Daniel rÃµ rÃ ng trong Ä‘oáº¡n ghi Ã¢m." },
                            { id: 2, type: "fill", question: "2. Scheduled date: [______] November", correct_answers: ["12th", "12", "twelfth"], evidence: "I would like to confirm my arrival on the 12th of November.", explanation: "NgÃ y Ä‘Æ°á»£c xÃ¡c nháº­n lÃ  ngÃ y 12 thÃ¡ng 11." },
                            { id: 3, type: "fill", question: "3. Contact mobile telephone: 07890 [______]", correct_answers: ["445120", "445 120"], evidence: "You can reach me directly on 07890 445120.", explanation: "Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Æ°á»£c Ä‘á»c tÃ¡ch báº¡ch tá»«ng cá»¥m ba chá»¯ sá»‘." },
                            { id: 4, type: "fill", question: "4. Preferred package tier: [______] membership", correct_answers: ["gold", "premium"], evidence: "I wish to enroll in the gold membership tier.", explanation: "GÃ³i Ä‘Äƒng kÃ½ Ä‘Æ°á»£c chá»n lÃ  gÃ³i Gold." },
                            { id: 5, type: "fill", question: "5. Advance deposit required: Â£[______]", correct_answers: ["60", "sixty"], evidence: "The required upfront security deposit is sixty pounds.", explanation: "Má»©c tiá»n cá»c quy Ä‘á»‹nh lÃ  60 báº£ng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Civic Amenities and Urban Modernization",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Speaker: Welcome citizens to our local redevelopment consultation. Our focus today is balancing heritage preservation with modern infrastructure...",
                        questions: [
                            { id: 6, type: "choice", question: "6. What is the overarching priority of the municipal masterplan?", options: ["A. Expanding commercial skyscraper districts", "B. Enhancing pedestrian accessibility and green spaces", "C. Constructing underground highways"], correct_answers: ["B"], evidence: "Our paramount objective is cultivating human-scale pedestrian avenues bordered by native tree canopies.", explanation: "Æ¯u tiÃªn hÃ ng Ä‘áº§u lÃ  cáº£i thiá»‡n Ä‘Æ°á»ng Ä‘i bá»™ vÃ  máº£ng xanh (B)." },
                            { id: 7, type: "choice", question: "7. When will public feedback surveys officially close?", options: ["A. At the end of next month", "B. In two weeks", "C. By Friday midnight"], correct_answers: ["A"], evidence: "Residents are invited to submit digital feedback until the final day of next month.", explanation: "Háº¡n chÃ³t Ä‘Ã³ng kháº£o sÃ¡t lÃ  cuá»‘i thÃ¡ng sau (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Academic Dissertation Research Evaluation",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Advisor: Your empirical methodology is robust, yet your theoretical framework requires deeper integration of macroeconomic variables...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What recommendation did the faculty advisor offer regarding sample bias?", options: ["A. Collect qualitative interviews across diverse demographic sectors", "B. Narrow the study strictly to undergraduate students", "C. Discard all outlier data points"], correct_answers: ["A"], evidence: "To neutralize regional bias, broaden your qualitative interviews across diverse demographic strata.", explanation: "GiÃ¡o viÃªn hÆ°á»›ng dáº«n khuyÃªn má»Ÿ rá»™ng phá»ng váº¥n Ä‘a dáº¡ng Ä‘á»‘i tÆ°á»£ng (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Technological Paradigms in Modern Applied Science",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Systemic resilience in complex technological architectures depends upon modularity, fault tolerance, and continuous algorithmic auditing...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Core operational resilience is achieved through structural [______].", correct_answers: ["modularity"], evidence: "The primary foundation of failure prevention is structural modularity across subsystems.", explanation: "TÃ­nh kiÃªn cÆ°á»ng cá»‘t lÃµi Ä‘áº¡t Ä‘Æ°á»£c nhá» cáº¥u trÃºc mÃ´-Ä‘un hÃ³a (modularity)." },
                            { id: 10, type: "fill", question: "10. Systems require ongoing algorithmic [______] to verify reliability.", correct_answers: ["auditing", "audits"], evidence: "Engineers mandate continuous algorithmic auditing to prevent catastrophic drift.", explanation: "Há»‡ thá»‘ng Ä‘Ã²i há»i viá»‡c kiá»ƒm toÃ¡n thuáº­t toÃ¡n liÃªn tá»¥c (auditing)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Human Memory Storage Mechanisms",
                        content: "Biological and technological adaptations reflect sophisticated systemic responses to environmental pressures.\\n\\nEmpirical research across ecological and sociological disciplines reveals that resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes. When centralized dependencies are mitigated, entire networks withstand acute shocks with minimal systemic degradation. Contemporary scientists apply these organic principles to design climate-resilient cities and fault-tolerant digital architectures.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Resilient systemic structures distribute operational loads across decentralized nodes.", correct_answers: ["TRUE", "True", "T"], evidence: "resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes.", explanation: "Kháº³ng Ä‘á»‹nh trong cÃ¢u há»i trÃ¹ng khá»›p 100% vá»›i ná»™i dung bÃ i Ä‘á»c (TRUE)." },
                            { id: 12, type: "tfng", question: "12. Centralized systems have proven mathematically immune to environmental disruptions.", correct_answers: ["FALSE", "False", "F"], evidence: "When centralized dependencies are mitigated, entire networks withstand acute shocks", explanation: "Há»‡ thá»‘ng táº­p trung dá»… bá»‹ tá»•n thÆ°Æ¡ng, bÃ i Ä‘á»c nÃªu cáº§n giáº£m phá»¥ thuá»™c táº­p trung (FALSE)." },
                            { id: 13, type: "tfng", question: "13. International treaties mandate the global adoption of these biological designs.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "BÃ i Ä‘á»c chá»‰ nháº¯c cÃ¡c nhÃ  khoa há»c Ã¡p dá»¥ng nguyÃªn lÃ½ nÃ y, khÃ´ng Ä‘á» cáº­p Ä‘áº¿n hiá»‡p Æ°á»›c quá»‘c táº¿ nÃ o.", explanation: "ThÃ´ng tin vá» hiá»‡p Æ°á»›c quá»‘c táº¿ khÃ´ng cÃ³ trong bÃ i (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Socio-Economic Transformations in Modern Infrastructure",
                        content: "Urban infrastructure investments shape economic productivity and social mobility across generations.\\n\\nComparative studies demonstrate that high-capacity transit links catalyze commercial vibrancy around transport hubs while curbing suburban sprawling. However, municipal planners must integrate equitable zoning policies to protect existing residents against gentrification-driven displacement.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What primary economic benefit stems from high-capacity transit investments?", options: ["A. Lowering fuel taxes for private vehicles", "B. Stimulating commercial vitality around interconnected hubs", "C. Reducing domestic construction standards"], correct_answers: ["B"], evidence: "catalyze commercial vibrancy around transport hubs while curbing suburban sprawling.", explanation: "ThÃºc Ä‘áº©y sá»± sÃ´i Ä‘á»™ng thÆ°Æ¡ng máº¡i quanh cÃ¡c Ä‘áº§u má»‘i giao thÃ´ng (B)." },
                            { id: 15, type: "choice", question: "15. Why are equitable zoning policies necessary according to municipal planners?", options: ["A. To prevent speculative inflation from displacing established communities", "B. To mandate uniform architectural facades", "C. To outlaw commercial enterprise"], correct_answers: ["A"], evidence: "to protect existing residents against gentrification-driven displacement.", explanation: "Báº£o vá»‡ ngÆ°á»i dÃ¢n khá»i nguy cÆ¡ bá»‹ Ä‘áº©y khá»i nÆ¡i á»Ÿ do phÃ¢n hÃ³a giÃ¡ báº¥t Ä‘á»™ng sáº£n (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Epistemological Foundations of Scientific Discovery",
                        content: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.\\n\\nWhen anomalous experimental findings breach the explanatory confines of established orthodoxy, innovative theoretical models emerge to reconcile contradictory evidence. This philosophical dynamic underscores that scientific truths are continuously refined through rigorous empirical skepticism.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Major scientific breakthroughs occur exclusively through smooth, linear data accumulation.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.", explanation: "CÃ¡ch máº¡ng khoa há»c diá»…n ra qua sá»± chuyá»ƒn dá»‹ch há»‡ hÃ¬nh Ä‘á»™t phÃ¡ chá»© khÃ´ng tuyáº¿n tÃ­nh (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The chart illustrates Telecommunications Market Share Distribution.\\n\\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Analytical Graphic",
                    model_answer: "The visual illustration delineates the comparative dynamics of the examined sectors over a defined temporal continuum.\\n\\nOverall, a pronounced upward tendency is discernible across the dominant categories, whereas secondary indices exhibited moderate stability or minor contractions. Notably, the foremost sector widened its comparative advantage over the entire timeframe.\\n\\nIn the initial phase, recorded figures stood at relatively equitable baseline levels. However, structural shifts soon propelled the primary metric toward unprecedented highs, culminating in a dominant market posture by the conclusion of the survey horizon.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Rigorous identification of macro trends and accurate comparative reporting.",
                        coherence_cohesion: "Band 9.0: Flawless cohesion and effortless discourse transitions.",
                        lexical_resource: "Band 9.0: Academic register with precise economic terminology.",
                        grammar_accuracy: "Band 9.0: Sophisticated syntactic range without grammatical imperfections."
                    }
                },
                task_2: {
                    prompt: "Global Plastic Packaging Ban and Environmental Protection\\n\\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The contemporary discourse regarding this socio-economic issue has polarized opinions among policy analysts, industry stakeholders, and the general public.\\n\\nOn the one hand, proponents argue that sweeping institutional regulation is indispensable for safeguarding long-term public welfare. In the absence of binding legislative mandates, short-term commercial imperatives frequently compromise public health, ecological equilibrium, and social equity. Regulatory frameworks establish universal ethical guardrails that incentivize innovation while penalizing exploitative practices.\\n\\nOn the other hand, skeptics caution that excessive intervention can stifle entrepreneurial agility, induce capital flight, and create bureaucratic inefficiencies. They maintain that voluntary market mechanisms, technological ingenuity, and consumer advocacy provide more adaptable pathways toward sustainable outcomes.\\n\\nIn conclusion, having scrutinized both perspectives, I maintain that targeted, evidence-based regulation combined with transparent market incentives yields the most pragmatic and enduring benefits for modern civil society.",
                    key_vocab: ["binding legislative mandates", "ecological equilibrium", "entrepreneurial agility", "bureaucratic inefficiencies", "evidence-based regulation"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How do technological advancements influence your personal productivity?", examiner_audio: "How do technological advancements influence your personal productivity?", model_answer: "Technological tools streamline my administrative workflows through cloud synchronization, freeing mental bandwidth for creative and analytical problem-solving." },
                    { question: "Do you prefer working in collaborative groups or independently?", examiner_audio: "Do you prefer working in collaborative groups or independently?", model_answer: "I appreciate a balanced hybrid: collaborative brainstorming generates diverse insights, whereas solitary focus is essential for meticulous execution." }
                ],
                part_2: {
                    cue_card_title: "Describe a significant achievement you accomplished through sustained discipline.",
                    cues: [
                        "What the achievement was and when you accomplished it",
                        "What obstacles you encountered during the journey",
                        "What strategies helped you persevere",
                        "And explain why this accomplishment remains personally meaningful to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount the rigorous process of preparing for my advanced bilingual certification examination last year.\\n\\nBalancing professional commitments with demanding evening study sessions presented substantial cognitive fatigue. To prevail, I structured my preparation into non-negotiable morning blocks, tracking daily incremental milestones rather than fixating on distant outcomes. Achieving high honors reinforced my conviction that relentless incremental consistency inevitably overcomes transient moments of self-doubt.",
                    key_vocab: ["demanding commitments", "cognitive fatigue", "incremental consistency", "transient moments", "unwavering conviction"]
                },
                part_3: [
                    { question: "Why do some individuals struggle to maintain long-term personal resolutions?", examiner_audio: "Why do some individuals struggle to maintain long-term personal resolutions?", model_answer: "Many set unrealistic, perfectionist benchmarks without constructing daily operational habits, resulting in acute burnout whenever initial motivation wanes." },
                    { question: "What role should public educational institutions play in nurturing mental resilience?", examiner_audio: "What role should public educational institutions play in nurturing mental resilience?", model_answer: "Schools must integrate emotional intelligence, stress management, and deliberate failure debriefings into curricula alongside conventional academic subjects." }
                ]
            }
        }
,
        // =================================================================
        // TEST 7: CAMBRIDGE IELTS 7 ACADEMIC
        // =================================================================
        "cam_7": {
            id: "cam_7",
            title: "Cambridge IELTS 7 Academic Test",
            badge: "Cam 7",
            year: "2009 Edition",
            description: "Bá»™ Ä‘á» thi thá»­ Cambridge IELTS 7 Academic chuáº©n hÃ³a 4 ká»¹ nÄƒng Listening, Reading, Writing, Speaking.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Part-Time Campus Employment Office",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Officer: Good day, thank you for contacting our customer service bureau. Let me record your contact information and scheduled dates...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Applicant surname: Mitchell, First name: [______]", correct_answers: ["Daniel", "Dan"], evidence: "My first name is Daniel, D-A-N-I-E-L.", explanation: "NgÆ°á»i gá»i Ä‘Ã¡nh váº§n tÃªn Daniel rÃµ rÃ ng trong Ä‘oáº¡n ghi Ã¢m." },
                            { id: 2, type: "fill", question: "2. Scheduled date: [______] November", correct_answers: ["12th", "12", "twelfth"], evidence: "I would like to confirm my arrival on the 12th of November.", explanation: "NgÃ y Ä‘Æ°á»£c xÃ¡c nháº­n lÃ  ngÃ y 12 thÃ¡ng 11." },
                            { id: 3, type: "fill", question: "3. Contact mobile telephone: 07890 [______]", correct_answers: ["445120", "445 120"], evidence: "You can reach me directly on 07890 445120.", explanation: "Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Æ°á»£c Ä‘á»c tÃ¡ch báº¡ch tá»«ng cá»¥m ba chá»¯ sá»‘." },
                            { id: 4, type: "fill", question: "4. Preferred package tier: [______] membership", correct_answers: ["gold", "premium"], evidence: "I wish to enroll in the gold membership tier.", explanation: "GÃ³i Ä‘Äƒng kÃ½ Ä‘Æ°á»£c chá»n lÃ  gÃ³i Gold." },
                            { id: 5, type: "fill", question: "5. Advance deposit required: Â£[______]", correct_answers: ["60", "sixty"], evidence: "The required upfront security deposit is sixty pounds.", explanation: "Má»©c tiá»n cá»c quy Ä‘á»‹nh lÃ  60 báº£ng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Civic Amenities and Urban Modernization",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Speaker: Welcome citizens to our local redevelopment consultation. Our focus today is balancing heritage preservation with modern infrastructure...",
                        questions: [
                            { id: 6, type: "choice", question: "6. What is the overarching priority of the municipal masterplan?", options: ["A. Expanding commercial skyscraper districts", "B. Enhancing pedestrian accessibility and green spaces", "C. Constructing underground highways"], correct_answers: ["B"], evidence: "Our paramount objective is cultivating human-scale pedestrian avenues bordered by native tree canopies.", explanation: "Æ¯u tiÃªn hÃ ng Ä‘áº§u lÃ  cáº£i thiá»‡n Ä‘Æ°á»ng Ä‘i bá»™ vÃ  máº£ng xanh (B)." },
                            { id: 7, type: "choice", question: "7. When will public feedback surveys officially close?", options: ["A. At the end of next month", "B. In two weeks", "C. By Friday midnight"], correct_answers: ["A"], evidence: "Residents are invited to submit digital feedback until the final day of next month.", explanation: "Háº¡n chÃ³t Ä‘Ã³ng kháº£o sÃ¡t lÃ  cuá»‘i thÃ¡ng sau (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Academic Dissertation Research Evaluation",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Advisor: Your empirical methodology is robust, yet your theoretical framework requires deeper integration of macroeconomic variables...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What recommendation did the faculty advisor offer regarding sample bias?", options: ["A. Collect qualitative interviews across diverse demographic sectors", "B. Narrow the study strictly to undergraduate students", "C. Discard all outlier data points"], correct_answers: ["A"], evidence: "To neutralize regional bias, broaden your qualitative interviews across diverse demographic strata.", explanation: "GiÃ¡o viÃªn hÆ°á»›ng dáº«n khuyÃªn má»Ÿ rá»™ng phá»ng váº¥n Ä‘a dáº¡ng Ä‘á»‘i tÆ°á»£ng (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Technological Paradigms in Modern Applied Science",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Systemic resilience in complex technological architectures depends upon modularity, fault tolerance, and continuous algorithmic auditing...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Core operational resilience is achieved through structural [______].", correct_answers: ["modularity"], evidence: "The primary foundation of failure prevention is structural modularity across subsystems.", explanation: "TÃ­nh kiÃªn cÆ°á»ng cá»‘t lÃµi Ä‘áº¡t Ä‘Æ°á»£c nhá» cáº¥u trÃºc mÃ´-Ä‘un hÃ³a (modularity)." },
                            { id: 10, type: "fill", question: "10. Systems require ongoing algorithmic [______] to verify reliability.", correct_answers: ["auditing", "audits"], evidence: "Engineers mandate continuous algorithmic auditing to prevent catastrophic drift.", explanation: "Há»‡ thá»‘ng Ä‘Ã²i há»i viá»‡c kiá»ƒm toÃ¡n thuáº­t toÃ¡n liÃªn tá»¥c (auditing)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Offshore Wind Turbine Technology",
                        content: "Biological and technological adaptations reflect sophisticated systemic responses to environmental pressures.\\n\\nEmpirical research across ecological and sociological disciplines reveals that resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes. When centralized dependencies are mitigated, entire networks withstand acute shocks with minimal systemic degradation. Contemporary scientists apply these organic principles to design climate-resilient cities and fault-tolerant digital architectures.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Resilient systemic structures distribute operational loads across decentralized nodes.", correct_answers: ["TRUE", "True", "T"], evidence: "resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes.", explanation: "Kháº³ng Ä‘á»‹nh trong cÃ¢u há»i trÃ¹ng khá»›p 100% vá»›i ná»™i dung bÃ i Ä‘á»c (TRUE)." },
                            { id: 12, type: "tfng", question: "12. Centralized systems have proven mathematically immune to environmental disruptions.", correct_answers: ["FALSE", "False", "F"], evidence: "When centralized dependencies are mitigated, entire networks withstand acute shocks", explanation: "Há»‡ thá»‘ng táº­p trung dá»… bá»‹ tá»•n thÆ°Æ¡ng, bÃ i Ä‘á»c nÃªu cáº§n giáº£m phá»¥ thuá»™c táº­p trung (FALSE)." },
                            { id: 13, type: "tfng", question: "13. International treaties mandate the global adoption of these biological designs.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "BÃ i Ä‘á»c chá»‰ nháº¯c cÃ¡c nhÃ  khoa há»c Ã¡p dá»¥ng nguyÃªn lÃ½ nÃ y, khÃ´ng Ä‘á» cáº­p Ä‘áº¿n hiá»‡p Æ°á»›c quá»‘c táº¿ nÃ o.", explanation: "ThÃ´ng tin vá» hiá»‡p Æ°á»›c quá»‘c táº¿ khÃ´ng cÃ³ trong bÃ i (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Socio-Economic Transformations in Modern Infrastructure",
                        content: "Urban infrastructure investments shape economic productivity and social mobility across generations.\\n\\nComparative studies demonstrate that high-capacity transit links catalyze commercial vibrancy around transport hubs while curbing suburban sprawling. However, municipal planners must integrate equitable zoning policies to protect existing residents against gentrification-driven displacement.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What primary economic benefit stems from high-capacity transit investments?", options: ["A. Lowering fuel taxes for private vehicles", "B. Stimulating commercial vitality around interconnected hubs", "C. Reducing domestic construction standards"], correct_answers: ["B"], evidence: "catalyze commercial vibrancy around transport hubs while curbing suburban sprawling.", explanation: "ThÃºc Ä‘áº©y sá»± sÃ´i Ä‘á»™ng thÆ°Æ¡ng máº¡i quanh cÃ¡c Ä‘áº§u má»‘i giao thÃ´ng (B)." },
                            { id: 15, type: "choice", question: "15. Why are equitable zoning policies necessary according to municipal planners?", options: ["A. To prevent speculative inflation from displacing established communities", "B. To mandate uniform architectural facades", "C. To outlaw commercial enterprise"], correct_answers: ["A"], evidence: "to protect existing residents against gentrification-driven displacement.", explanation: "Báº£o vá»‡ ngÆ°á»i dÃ¢n khá»i nguy cÆ¡ bá»‹ Ä‘áº©y khá»i nÆ¡i á»Ÿ do phÃ¢n hÃ³a giÃ¡ báº¥t Ä‘á»™ng sáº£n (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Epistemological Foundations of Scientific Discovery",
                        content: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.\\n\\nWhen anomalous experimental findings breach the explanatory confines of established orthodoxy, innovative theoretical models emerge to reconcile contradictory evidence. This philosophical dynamic underscores that scientific truths are continuously refined through rigorous empirical skepticism.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Major scientific breakthroughs occur exclusively through smooth, linear data accumulation.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.", explanation: "CÃ¡ch máº¡ng khoa há»c diá»…n ra qua sá»± chuyá»ƒn dá»‹ch há»‡ hÃ¬nh Ä‘á»™t phÃ¡ chá»© khÃ´ng tuyáº¿n tÃ­nh (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The chart illustrates Agricultural Import and Export Figures.\\n\\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Analytical Graphic",
                    model_answer: "The visual illustration delineates the comparative dynamics of the examined sectors over a defined temporal continuum.\\n\\nOverall, a pronounced upward tendency is discernible across the dominant categories, whereas secondary indices exhibited moderate stability or minor contractions. Notably, the foremost sector widened its comparative advantage over the entire timeframe.\\n\\nIn the initial phase, recorded figures stood at relatively equitable baseline levels. However, structural shifts soon propelled the primary metric toward unprecedented highs, culminating in a dominant market posture by the conclusion of the survey horizon.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Rigorous identification of macro trends and accurate comparative reporting.",
                        coherence_cohesion: "Band 9.0: Flawless cohesion and effortless discourse transitions.",
                        lexical_resource: "Band 9.0: Academic register with precise economic terminology.",
                        grammar_accuracy: "Band 9.0: Sophisticated syntactic range without grammatical imperfections."
                    }
                },
                task_2: {
                    prompt: "Free Public Transportation in Megacities\\n\\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The contemporary discourse regarding this socio-economic issue has polarized opinions among policy analysts, industry stakeholders, and the general public.\\n\\nOn the one hand, proponents argue that sweeping institutional regulation is indispensable for safeguarding long-term public welfare. In the absence of binding legislative mandates, short-term commercial imperatives frequently compromise public health, ecological equilibrium, and social equity. Regulatory frameworks establish universal ethical guardrails that incentivize innovation while penalizing exploitative practices.\\n\\nOn the other hand, skeptics caution that excessive intervention can stifle entrepreneurial agility, induce capital flight, and create bureaucratic inefficiencies. They maintain that voluntary market mechanisms, technological ingenuity, and consumer advocacy provide more adaptable pathways toward sustainable outcomes.\\n\\nIn conclusion, having scrutinized both perspectives, I maintain that targeted, evidence-based regulation combined with transparent market incentives yields the most pragmatic and enduring benefits for modern civil society.",
                    key_vocab: ["binding legislative mandates", "ecological equilibrium", "entrepreneurial agility", "bureaucratic inefficiencies", "evidence-based regulation"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How do technological advancements influence your personal productivity?", examiner_audio: "How do technological advancements influence your personal productivity?", model_answer: "Technological tools streamline my administrative workflows through cloud synchronization, freeing mental bandwidth for creative and analytical problem-solving." },
                    { question: "Do you prefer working in collaborative groups or independently?", examiner_audio: "Do you prefer working in collaborative groups or independently?", model_answer: "I appreciate a balanced hybrid: collaborative brainstorming generates diverse insights, whereas solitary focus is essential for meticulous execution." }
                ],
                part_2: {
                    cue_card_title: "Describe a significant achievement you accomplished through sustained discipline.",
                    cues: [
                        "What the achievement was and when you accomplished it",
                        "What obstacles you encountered during the journey",
                        "What strategies helped you persevere",
                        "And explain why this accomplishment remains personally meaningful to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount the rigorous process of preparing for my advanced bilingual certification examination last year.\\n\\nBalancing professional commitments with demanding evening study sessions presented substantial cognitive fatigue. To prevail, I structured my preparation into non-negotiable morning blocks, tracking daily incremental milestones rather than fixating on distant outcomes. Achieving high honors reinforced my conviction that relentless incremental consistency inevitably overcomes transient moments of self-doubt.",
                    key_vocab: ["demanding commitments", "cognitive fatigue", "incremental consistency", "transient moments", "unwavering conviction"]
                },
                part_3: [
                    { question: "Why do some individuals struggle to maintain long-term personal resolutions?", examiner_audio: "Why do some individuals struggle to maintain long-term personal resolutions?", model_answer: "Many set unrealistic, perfectionist benchmarks without constructing daily operational habits, resulting in acute burnout whenever initial motivation wanes." },
                    { question: "What role should public educational institutions play in nurturing mental resilience?", examiner_audio: "What role should public educational institutions play in nurturing mental resilience?", model_answer: "Schools must integrate emotional intelligence, stress management, and deliberate failure debriefings into curricula alongside conventional academic subjects." }
                ]
            }
        }
,
        // =================================================================
        // TEST 8: CAMBRIDGE IELTS 8 ACADEMIC
        // =================================================================
        "cam_8": {
            id: "cam_8",
            title: "Cambridge IELTS 8 Academic Test",
            badge: "Cam 8",
            year: "2011 Edition",
            description: "Bá»™ Ä‘á» thi thá»­ Cambridge IELTS 8 Academic chuáº©n hÃ³a 4 ká»¹ nÄƒng Listening, Reading, Writing, Speaking.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: International Linguistics Conference Booking",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Officer: Good day, thank you for contacting our customer service bureau. Let me record your contact information and scheduled dates...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Applicant surname: Mitchell, First name: [______]", correct_answers: ["Daniel", "Dan"], evidence: "My first name is Daniel, D-A-N-I-E-L.", explanation: "NgÆ°á»i gá»i Ä‘Ã¡nh váº§n tÃªn Daniel rÃµ rÃ ng trong Ä‘oáº¡n ghi Ã¢m." },
                            { id: 2, type: "fill", question: "2. Scheduled date: [______] November", correct_answers: ["12th", "12", "twelfth"], evidence: "I would like to confirm my arrival on the 12th of November.", explanation: "NgÃ y Ä‘Æ°á»£c xÃ¡c nháº­n lÃ  ngÃ y 12 thÃ¡ng 11." },
                            { id: 3, type: "fill", question: "3. Contact mobile telephone: 07890 [______]", correct_answers: ["445120", "445 120"], evidence: "You can reach me directly on 07890 445120.", explanation: "Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Æ°á»£c Ä‘á»c tÃ¡ch báº¡ch tá»«ng cá»¥m ba chá»¯ sá»‘." },
                            { id: 4, type: "fill", question: "4. Preferred package tier: [______] membership", correct_answers: ["gold", "premium"], evidence: "I wish to enroll in the gold membership tier.", explanation: "GÃ³i Ä‘Äƒng kÃ½ Ä‘Æ°á»£c chá»n lÃ  gÃ³i Gold." },
                            { id: 5, type: "fill", question: "5. Advance deposit required: Â£[______]", correct_answers: ["60", "sixty"], evidence: "The required upfront security deposit is sixty pounds.", explanation: "Má»©c tiá»n cá»c quy Ä‘á»‹nh lÃ  60 báº£ng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Civic Amenities and Urban Modernization",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Speaker: Welcome citizens to our local redevelopment consultation. Our focus today is balancing heritage preservation with modern infrastructure...",
                        questions: [
                            { id: 6, type: "choice", question: "6. What is the overarching priority of the municipal masterplan?", options: ["A. Expanding commercial skyscraper districts", "B. Enhancing pedestrian accessibility and green spaces", "C. Constructing underground highways"], correct_answers: ["B"], evidence: "Our paramount objective is cultivating human-scale pedestrian avenues bordered by native tree canopies.", explanation: "Æ¯u tiÃªn hÃ ng Ä‘áº§u lÃ  cáº£i thiá»‡n Ä‘Æ°á»ng Ä‘i bá»™ vÃ  máº£ng xanh (B)." },
                            { id: 7, type: "choice", question: "7. When will public feedback surveys officially close?", options: ["A. At the end of next month", "B. In two weeks", "C. By Friday midnight"], correct_answers: ["A"], evidence: "Residents are invited to submit digital feedback until the final day of next month.", explanation: "Háº¡n chÃ³t Ä‘Ã³ng kháº£o sÃ¡t lÃ  cuá»‘i thÃ¡ng sau (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Academic Dissertation Research Evaluation",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Advisor: Your empirical methodology is robust, yet your theoretical framework requires deeper integration of macroeconomic variables...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What recommendation did the faculty advisor offer regarding sample bias?", options: ["A. Collect qualitative interviews across diverse demographic sectors", "B. Narrow the study strictly to undergraduate students", "C. Discard all outlier data points"], correct_answers: ["A"], evidence: "To neutralize regional bias, broaden your qualitative interviews across diverse demographic strata.", explanation: "GiÃ¡o viÃªn hÆ°á»›ng dáº«n khuyÃªn má»Ÿ rá»™ng phá»ng váº¥n Ä‘a dáº¡ng Ä‘á»‘i tÆ°á»£ng (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Technological Paradigms in Modern Applied Science",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Systemic resilience in complex technological architectures depends upon modularity, fault tolerance, and continuous algorithmic auditing...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Core operational resilience is achieved through structural [______].", correct_answers: ["modularity"], evidence: "The primary foundation of failure prevention is structural modularity across subsystems.", explanation: "TÃ­nh kiÃªn cÆ°á»ng cá»‘t lÃµi Ä‘áº¡t Ä‘Æ°á»£c nhá» cáº¥u trÃºc mÃ´-Ä‘un hÃ³a (modularity)." },
                            { id: 10, type: "fill", question: "10. Systems require ongoing algorithmic [______] to verify reliability.", correct_answers: ["auditing", "audits"], evidence: "Engineers mandate continuous algorithmic auditing to prevent catastrophic drift.", explanation: "Há»‡ thá»‘ng Ä‘Ã²i há»i viá»‡c kiá»ƒm toÃ¡n thuáº­t toÃ¡n liÃªn tá»¥c (auditing)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Ethnobotany and Herbal Pharmacology",
                        content: "Biological and technological adaptations reflect sophisticated systemic responses to environmental pressures.\\n\\nEmpirical research across ecological and sociological disciplines reveals that resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes. When centralized dependencies are mitigated, entire networks withstand acute shocks with minimal systemic degradation. Contemporary scientists apply these organic principles to design climate-resilient cities and fault-tolerant digital architectures.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Resilient systemic structures distribute operational loads across decentralized nodes.", correct_answers: ["TRUE", "True", "T"], evidence: "resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes.", explanation: "Kháº³ng Ä‘á»‹nh trong cÃ¢u há»i trÃ¹ng khá»›p 100% vá»›i ná»™i dung bÃ i Ä‘á»c (TRUE)." },
                            { id: 12, type: "tfng", question: "12. Centralized systems have proven mathematically immune to environmental disruptions.", correct_answers: ["FALSE", "False", "F"], evidence: "When centralized dependencies are mitigated, entire networks withstand acute shocks", explanation: "Há»‡ thá»‘ng táº­p trung dá»… bá»‹ tá»•n thÆ°Æ¡ng, bÃ i Ä‘á»c nÃªu cáº§n giáº£m phá»¥ thuá»™c táº­p trung (FALSE)." },
                            { id: 13, type: "tfng", question: "13. International treaties mandate the global adoption of these biological designs.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "BÃ i Ä‘á»c chá»‰ nháº¯c cÃ¡c nhÃ  khoa há»c Ã¡p dá»¥ng nguyÃªn lÃ½ nÃ y, khÃ´ng Ä‘á» cáº­p Ä‘áº¿n hiá»‡p Æ°á»›c quá»‘c táº¿ nÃ o.", explanation: "ThÃ´ng tin vá» hiá»‡p Æ°á»›c quá»‘c táº¿ khÃ´ng cÃ³ trong bÃ i (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Socio-Economic Transformations in Modern Infrastructure",
                        content: "Urban infrastructure investments shape economic productivity and social mobility across generations.\\n\\nComparative studies demonstrate that high-capacity transit links catalyze commercial vibrancy around transport hubs while curbing suburban sprawling. However, municipal planners must integrate equitable zoning policies to protect existing residents against gentrification-driven displacement.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What primary economic benefit stems from high-capacity transit investments?", options: ["A. Lowering fuel taxes for private vehicles", "B. Stimulating commercial vitality around interconnected hubs", "C. Reducing domestic construction standards"], correct_answers: ["B"], evidence: "catalyze commercial vibrancy around transport hubs while curbing suburban sprawling.", explanation: "ThÃºc Ä‘áº©y sá»± sÃ´i Ä‘á»™ng thÆ°Æ¡ng máº¡i quanh cÃ¡c Ä‘áº§u má»‘i giao thÃ´ng (B)." },
                            { id: 15, type: "choice", question: "15. Why are equitable zoning policies necessary according to municipal planners?", options: ["A. To prevent speculative inflation from displacing established communities", "B. To mandate uniform architectural facades", "C. To outlaw commercial enterprise"], correct_answers: ["A"], evidence: "to protect existing residents against gentrification-driven displacement.", explanation: "Báº£o vá»‡ ngÆ°á»i dÃ¢n khá»i nguy cÆ¡ bá»‹ Ä‘áº©y khá»i nÆ¡i á»Ÿ do phÃ¢n hÃ³a giÃ¡ báº¥t Ä‘á»™ng sáº£n (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Epistemological Foundations of Scientific Discovery",
                        content: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.\\n\\nWhen anomalous experimental findings breach the explanatory confines of established orthodoxy, innovative theoretical models emerge to reconcile contradictory evidence. This philosophical dynamic underscores that scientific truths are continuously refined through rigorous empirical skepticism.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Major scientific breakthroughs occur exclusively through smooth, linear data accumulation.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.", explanation: "CÃ¡ch máº¡ng khoa há»c diá»…n ra qua sá»± chuyá»ƒn dá»‹ch há»‡ hÃ¬nh Ä‘á»™t phÃ¡ chá»© khÃ´ng tuyáº¿n tÃ­nh (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The chart illustrates Household Food Expenditure Patterns.\\n\\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Analytical Graphic",
                    model_answer: "The visual illustration delineates the comparative dynamics of the examined sectors over a defined temporal continuum.\\n\\nOverall, a pronounced upward tendency is discernible across the dominant categories, whereas secondary indices exhibited moderate stability or minor contractions. Notably, the foremost sector widened its comparative advantage over the entire timeframe.\\n\\nIn the initial phase, recorded figures stood at relatively equitable baseline levels. However, structural shifts soon propelled the primary metric toward unprecedented highs, culminating in a dominant market posture by the conclusion of the survey horizon.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Rigorous identification of macro trends and accurate comparative reporting.",
                        coherence_cohesion: "Band 9.0: Flawless cohesion and effortless discourse transitions.",
                        lexical_resource: "Band 9.0: Academic register with precise economic terminology.",
                        grammar_accuracy: "Band 9.0: Sophisticated syntactic range without grammatical imperfections."
                    }
                },
                task_2: {
                    prompt: "Telecommuting and Remote Workplace Productivity\\n\\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The contemporary discourse regarding this socio-economic issue has polarized opinions among policy analysts, industry stakeholders, and the general public.\\n\\nOn the one hand, proponents argue that sweeping institutional regulation is indispensable for safeguarding long-term public welfare. In the absence of binding legislative mandates, short-term commercial imperatives frequently compromise public health, ecological equilibrium, and social equity. Regulatory frameworks establish universal ethical guardrails that incentivize innovation while penalizing exploitative practices.\\n\\nOn the other hand, skeptics caution that excessive intervention can stifle entrepreneurial agility, induce capital flight, and create bureaucratic inefficiencies. They maintain that voluntary market mechanisms, technological ingenuity, and consumer advocacy provide more adaptable pathways toward sustainable outcomes.\\n\\nIn conclusion, having scrutinized both perspectives, I maintain that targeted, evidence-based regulation combined with transparent market incentives yields the most pragmatic and enduring benefits for modern civil society.",
                    key_vocab: ["binding legislative mandates", "ecological equilibrium", "entrepreneurial agility", "bureaucratic inefficiencies", "evidence-based regulation"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How do technological advancements influence your personal productivity?", examiner_audio: "How do technological advancements influence your personal productivity?", model_answer: "Technological tools streamline my administrative workflows through cloud synchronization, freeing mental bandwidth for creative and analytical problem-solving." },
                    { question: "Do you prefer working in collaborative groups or independently?", examiner_audio: "Do you prefer working in collaborative groups or independently?", model_answer: "I appreciate a balanced hybrid: collaborative brainstorming generates diverse insights, whereas solitary focus is essential for meticulous execution." }
                ],
                part_2: {
                    cue_card_title: "Describe a significant achievement you accomplished through sustained discipline.",
                    cues: [
                        "What the achievement was and when you accomplished it",
                        "What obstacles you encountered during the journey",
                        "What strategies helped you persevere",
                        "And explain why this accomplishment remains personally meaningful to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount the rigorous process of preparing for my advanced bilingual certification examination last year.\\n\\nBalancing professional commitments with demanding evening study sessions presented substantial cognitive fatigue. To prevail, I structured my preparation into non-negotiable morning blocks, tracking daily incremental milestones rather than fixating on distant outcomes. Achieving high honors reinforced my conviction that relentless incremental consistency inevitably overcomes transient moments of self-doubt.",
                    key_vocab: ["demanding commitments", "cognitive fatigue", "incremental consistency", "transient moments", "unwavering conviction"]
                },
                part_3: [
                    { question: "Why do some individuals struggle to maintain long-term personal resolutions?", examiner_audio: "Why do some individuals struggle to maintain long-term personal resolutions?", model_answer: "Many set unrealistic, perfectionist benchmarks without constructing daily operational habits, resulting in acute burnout whenever initial motivation wanes." },
                    { question: "What role should public educational institutions play in nurturing mental resilience?", examiner_audio: "What role should public educational institutions play in nurturing mental resilience?", model_answer: "Schools must integrate emotional intelligence, stress management, and deliberate failure debriefings into curricula alongside conventional academic subjects." }
                ]
            }
        }
,
        // =================================================================
        // TEST 9: CAMBRIDGE IELTS 9 ACADEMIC
        // =================================================================
        "cam_9": {
            id: "cam_9",
            title: "Cambridge IELTS 9 Academic Test",
            badge: "Cam 9",
            year: "2013 Edition",
            description: "Bá»™ Ä‘á» thi thá»­ Cambridge IELTS 9 Academic chuáº©n hÃ³a 4 ká»¹ nÄƒng Listening, Reading, Writing, Speaking.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Coastal Lifeguard Volunteer Program",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Officer: Good day, thank you for contacting our customer service bureau. Let me record your contact information and scheduled dates...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Applicant surname: Mitchell, First name: [______]", correct_answers: ["Daniel", "Dan"], evidence: "My first name is Daniel, D-A-N-I-E-L.", explanation: "NgÆ°á»i gá»i Ä‘Ã¡nh váº§n tÃªn Daniel rÃµ rÃ ng trong Ä‘oáº¡n ghi Ã¢m." },
                            { id: 2, type: "fill", question: "2. Scheduled date: [______] November", correct_answers: ["12th", "12", "twelfth"], evidence: "I would like to confirm my arrival on the 12th of November.", explanation: "NgÃ y Ä‘Æ°á»£c xÃ¡c nháº­n lÃ  ngÃ y 12 thÃ¡ng 11." },
                            { id: 3, type: "fill", question: "3. Contact mobile telephone: 07890 [______]", correct_answers: ["445120", "445 120"], evidence: "You can reach me directly on 07890 445120.", explanation: "Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Æ°á»£c Ä‘á»c tÃ¡ch báº¡ch tá»«ng cá»¥m ba chá»¯ sá»‘." },
                            { id: 4, type: "fill", question: "4. Preferred package tier: [______] membership", correct_answers: ["gold", "premium"], evidence: "I wish to enroll in the gold membership tier.", explanation: "GÃ³i Ä‘Äƒng kÃ½ Ä‘Æ°á»£c chá»n lÃ  gÃ³i Gold." },
                            { id: 5, type: "fill", question: "5. Advance deposit required: Â£[______]", correct_answers: ["60", "sixty"], evidence: "The required upfront security deposit is sixty pounds.", explanation: "Má»©c tiá»n cá»c quy Ä‘á»‹nh lÃ  60 báº£ng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Civic Amenities and Urban Modernization",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Speaker: Welcome citizens to our local redevelopment consultation. Our focus today is balancing heritage preservation with modern infrastructure...",
                        questions: [
                            { id: 6, type: "choice", question: "6. What is the overarching priority of the municipal masterplan?", options: ["A. Expanding commercial skyscraper districts", "B. Enhancing pedestrian accessibility and green spaces", "C. Constructing underground highways"], correct_answers: ["B"], evidence: "Our paramount objective is cultivating human-scale pedestrian avenues bordered by native tree canopies.", explanation: "Æ¯u tiÃªn hÃ ng Ä‘áº§u lÃ  cáº£i thiá»‡n Ä‘Æ°á»ng Ä‘i bá»™ vÃ  máº£ng xanh (B)." },
                            { id: 7, type: "choice", question: "7. When will public feedback surveys officially close?", options: ["A. At the end of next month", "B. In two weeks", "C. By Friday midnight"], correct_answers: ["A"], evidence: "Residents are invited to submit digital feedback until the final day of next month.", explanation: "Háº¡n chÃ³t Ä‘Ã³ng kháº£o sÃ¡t lÃ  cuá»‘i thÃ¡ng sau (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Academic Dissertation Research Evaluation",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Advisor: Your empirical methodology is robust, yet your theoretical framework requires deeper integration of macroeconomic variables...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What recommendation did the faculty advisor offer regarding sample bias?", options: ["A. Collect qualitative interviews across diverse demographic sectors", "B. Narrow the study strictly to undergraduate students", "C. Discard all outlier data points"], correct_answers: ["A"], evidence: "To neutralize regional bias, broaden your qualitative interviews across diverse demographic strata.", explanation: "GiÃ¡o viÃªn hÆ°á»›ng dáº«n khuyÃªn má»Ÿ rá»™ng phá»ng váº¥n Ä‘a dáº¡ng Ä‘á»‘i tÆ°á»£ng (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Technological Paradigms in Modern Applied Science",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Systemic resilience in complex technological architectures depends upon modularity, fault tolerance, and continuous algorithmic auditing...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Core operational resilience is achieved through structural [______].", correct_answers: ["modularity"], evidence: "The primary foundation of failure prevention is structural modularity across subsystems.", explanation: "TÃ­nh kiÃªn cÆ°á»ng cá»‘t lÃµi Ä‘áº¡t Ä‘Æ°á»£c nhá» cáº¥u trÃºc mÃ´-Ä‘un hÃ³a (modularity)." },
                            { id: 10, type: "fill", question: "10. Systems require ongoing algorithmic [______] to verify reliability.", correct_answers: ["auditing", "audits"], evidence: "Engineers mandate continuous algorithmic auditing to prevent catastrophic drift.", explanation: "Há»‡ thá»‘ng Ä‘Ã²i há»i viá»‡c kiá»ƒm toÃ¡n thuáº­t toÃ¡n liÃªn tá»¥c (auditing)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Origins of Modern Monetary Systems",
                        content: "Biological and technological adaptations reflect sophisticated systemic responses to environmental pressures.\\n\\nEmpirical research across ecological and sociological disciplines reveals that resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes. When centralized dependencies are mitigated, entire networks withstand acute shocks with minimal systemic degradation. Contemporary scientists apply these organic principles to design climate-resilient cities and fault-tolerant digital architectures.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Resilient systemic structures distribute operational loads across decentralized nodes.", correct_answers: ["TRUE", "True", "T"], evidence: "resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes.", explanation: "Kháº³ng Ä‘á»‹nh trong cÃ¢u há»i trÃ¹ng khá»›p 100% vá»›i ná»™i dung bÃ i Ä‘á»c (TRUE)." },
                            { id: 12, type: "tfng", question: "12. Centralized systems have proven mathematically immune to environmental disruptions.", correct_answers: ["FALSE", "False", "F"], evidence: "When centralized dependencies are mitigated, entire networks withstand acute shocks", explanation: "Há»‡ thá»‘ng táº­p trung dá»… bá»‹ tá»•n thÆ°Æ¡ng, bÃ i Ä‘á»c nÃªu cáº§n giáº£m phá»¥ thuá»™c táº­p trung (FALSE)." },
                            { id: 13, type: "tfng", question: "13. International treaties mandate the global adoption of these biological designs.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "BÃ i Ä‘á»c chá»‰ nháº¯c cÃ¡c nhÃ  khoa há»c Ã¡p dá»¥ng nguyÃªn lÃ½ nÃ y, khÃ´ng Ä‘á» cáº­p Ä‘áº¿n hiá»‡p Æ°á»›c quá»‘c táº¿ nÃ o.", explanation: "ThÃ´ng tin vá» hiá»‡p Æ°á»›c quá»‘c táº¿ khÃ´ng cÃ³ trong bÃ i (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Socio-Economic Transformations in Modern Infrastructure",
                        content: "Urban infrastructure investments shape economic productivity and social mobility across generations.\\n\\nComparative studies demonstrate that high-capacity transit links catalyze commercial vibrancy around transport hubs while curbing suburban sprawling. However, municipal planners must integrate equitable zoning policies to protect existing residents against gentrification-driven displacement.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What primary economic benefit stems from high-capacity transit investments?", options: ["A. Lowering fuel taxes for private vehicles", "B. Stimulating commercial vitality around interconnected hubs", "C. Reducing domestic construction standards"], correct_answers: ["B"], evidence: "catalyze commercial vibrancy around transport hubs while curbing suburban sprawling.", explanation: "ThÃºc Ä‘áº©y sá»± sÃ´i Ä‘á»™ng thÆ°Æ¡ng máº¡i quanh cÃ¡c Ä‘áº§u má»‘i giao thÃ´ng (B)." },
                            { id: 15, type: "choice", question: "15. Why are equitable zoning policies necessary according to municipal planners?", options: ["A. To prevent speculative inflation from displacing established communities", "B. To mandate uniform architectural facades", "C. To outlaw commercial enterprise"], correct_answers: ["A"], evidence: "to protect existing residents against gentrification-driven displacement.", explanation: "Báº£o vá»‡ ngÆ°á»i dÃ¢n khá»i nguy cÆ¡ bá»‹ Ä‘áº©y khá»i nÆ¡i á»Ÿ do phÃ¢n hÃ³a giÃ¡ báº¥t Ä‘á»™ng sáº£n (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Epistemological Foundations of Scientific Discovery",
                        content: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.\\n\\nWhen anomalous experimental findings breach the explanatory confines of established orthodoxy, innovative theoretical models emerge to reconcile contradictory evidence. This philosophical dynamic underscores that scientific truths are continuously refined through rigorous empirical skepticism.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Major scientific breakthroughs occur exclusively through smooth, linear data accumulation.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.", explanation: "CÃ¡ch máº¡ng khoa há»c diá»…n ra qua sá»± chuyá»ƒn dá»‹ch há»‡ hÃ¬nh Ä‘á»™t phÃ¡ chá»© khÃ´ng tuyáº¿n tÃ­nh (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The chart illustrates Workforce Distribution by Economic Sector.\\n\\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Analytical Graphic",
                    model_answer: "The visual illustration delineates the comparative dynamics of the examined sectors over a defined temporal continuum.\\n\\nOverall, a pronounced upward tendency is discernible across the dominant categories, whereas secondary indices exhibited moderate stability or minor contractions. Notably, the foremost sector widened its comparative advantage over the entire timeframe.\\n\\nIn the initial phase, recorded figures stood at relatively equitable baseline levels. However, structural shifts soon propelled the primary metric toward unprecedented highs, culminating in a dominant market posture by the conclusion of the survey horizon.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Rigorous identification of macro trends and accurate comparative reporting.",
                        coherence_cohesion: "Band 9.0: Flawless cohesion and effortless discourse transitions.",
                        lexical_resource: "Band 9.0: Academic register with precise economic terminology.",
                        grammar_accuracy: "Band 9.0: Sophisticated syntactic range without grammatical imperfections."
                    }
                },
                task_2: {
                    prompt: "Mandatory Corporate Social Responsibility Laws\\n\\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The contemporary discourse regarding this socio-economic issue has polarized opinions among policy analysts, industry stakeholders, and the general public.\\n\\nOn the one hand, proponents argue that sweeping institutional regulation is indispensable for safeguarding long-term public welfare. In the absence of binding legislative mandates, short-term commercial imperatives frequently compromise public health, ecological equilibrium, and social equity. Regulatory frameworks establish universal ethical guardrails that incentivize innovation while penalizing exploitative practices.\\n\\nOn the other hand, skeptics caution that excessive intervention can stifle entrepreneurial agility, induce capital flight, and create bureaucratic inefficiencies. They maintain that voluntary market mechanisms, technological ingenuity, and consumer advocacy provide more adaptable pathways toward sustainable outcomes.\\n\\nIn conclusion, having scrutinized both perspectives, I maintain that targeted, evidence-based regulation combined with transparent market incentives yields the most pragmatic and enduring benefits for modern civil society.",
                    key_vocab: ["binding legislative mandates", "ecological equilibrium", "entrepreneurial agility", "bureaucratic inefficiencies", "evidence-based regulation"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How do technological advancements influence your personal productivity?", examiner_audio: "How do technological advancements influence your personal productivity?", model_answer: "Technological tools streamline my administrative workflows through cloud synchronization, freeing mental bandwidth for creative and analytical problem-solving." },
                    { question: "Do you prefer working in collaborative groups or independently?", examiner_audio: "Do you prefer working in collaborative groups or independently?", model_answer: "I appreciate a balanced hybrid: collaborative brainstorming generates diverse insights, whereas solitary focus is essential for meticulous execution." }
                ],
                part_2: {
                    cue_card_title: "Describe a significant achievement you accomplished through sustained discipline.",
                    cues: [
                        "What the achievement was and when you accomplished it",
                        "What obstacles you encountered during the journey",
                        "What strategies helped you persevere",
                        "And explain why this accomplishment remains personally meaningful to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount the rigorous process of preparing for my advanced bilingual certification examination last year.\\n\\nBalancing professional commitments with demanding evening study sessions presented substantial cognitive fatigue. To prevail, I structured my preparation into non-negotiable morning blocks, tracking daily incremental milestones rather than fixating on distant outcomes. Achieving high honors reinforced my conviction that relentless incremental consistency inevitably overcomes transient moments of self-doubt.",
                    key_vocab: ["demanding commitments", "cognitive fatigue", "incremental consistency", "transient moments", "unwavering conviction"]
                },
                part_3: [
                    { question: "Why do some individuals struggle to maintain long-term personal resolutions?", examiner_audio: "Why do some individuals struggle to maintain long-term personal resolutions?", model_answer: "Many set unrealistic, perfectionist benchmarks without constructing daily operational habits, resulting in acute burnout whenever initial motivation wanes." },
                    { question: "What role should public educational institutions play in nurturing mental resilience?", examiner_audio: "What role should public educational institutions play in nurturing mental resilience?", model_answer: "Schools must integrate emotional intelligence, stress management, and deliberate failure debriefings into curricula alongside conventional academic subjects." }
                ]
            }
        }
,
        // =================================================================
        // TEST 10: CAMBRIDGE IELTS 10 ACADEMIC
        // =================================================================
        "cam_10": {
            id: "cam_10",
            title: "Cambridge IELTS 10 Academic Test",
            badge: "Cam 10",
            year: "2015 Edition",
            description: "Bá»™ Ä‘á» thi thá»­ Cambridge IELTS 10 Academic chuáº©n hÃ³a 4 ká»¹ nÄƒng Listening, Reading, Writing, Speaking.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Trans-Continental Rail Journey Planning",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Officer: Good day, thank you for contacting our customer service bureau. Let me record your contact information and scheduled dates...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Applicant surname: Mitchell, First name: [______]", correct_answers: ["Daniel", "Dan"], evidence: "My first name is Daniel, D-A-N-I-E-L.", explanation: "NgÆ°á»i gá»i Ä‘Ã¡nh váº§n tÃªn Daniel rÃµ rÃ ng trong Ä‘oáº¡n ghi Ã¢m." },
                            { id: 2, type: "fill", question: "2. Scheduled date: [______] November", correct_answers: ["12th", "12", "twelfth"], evidence: "I would like to confirm my arrival on the 12th of November.", explanation: "NgÃ y Ä‘Æ°á»£c xÃ¡c nháº­n lÃ  ngÃ y 12 thÃ¡ng 11." },
                            { id: 3, type: "fill", question: "3. Contact mobile telephone: 07890 [______]", correct_answers: ["445120", "445 120"], evidence: "You can reach me directly on 07890 445120.", explanation: "Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Æ°á»£c Ä‘á»c tÃ¡ch báº¡ch tá»«ng cá»¥m ba chá»¯ sá»‘." },
                            { id: 4, type: "fill", question: "4. Preferred package tier: [______] membership", correct_answers: ["gold", "premium"], evidence: "I wish to enroll in the gold membership tier.", explanation: "GÃ³i Ä‘Äƒng kÃ½ Ä‘Æ°á»£c chá»n lÃ  gÃ³i Gold." },
                            { id: 5, type: "fill", question: "5. Advance deposit required: Â£[______]", correct_answers: ["60", "sixty"], evidence: "The required upfront security deposit is sixty pounds.", explanation: "Má»©c tiá»n cá»c quy Ä‘á»‹nh lÃ  60 báº£ng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Civic Amenities and Urban Modernization",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Speaker: Welcome citizens to our local redevelopment consultation. Our focus today is balancing heritage preservation with modern infrastructure...",
                        questions: [
                            { id: 6, type: "choice", question: "6. What is the overarching priority of the municipal masterplan?", options: ["A. Expanding commercial skyscraper districts", "B. Enhancing pedestrian accessibility and green spaces", "C. Constructing underground highways"], correct_answers: ["B"], evidence: "Our paramount objective is cultivating human-scale pedestrian avenues bordered by native tree canopies.", explanation: "Æ¯u tiÃªn hÃ ng Ä‘áº§u lÃ  cáº£i thiá»‡n Ä‘Æ°á»ng Ä‘i bá»™ vÃ  máº£ng xanh (B)." },
                            { id: 7, type: "choice", question: "7. When will public feedback surveys officially close?", options: ["A. At the end of next month", "B. In two weeks", "C. By Friday midnight"], correct_answers: ["A"], evidence: "Residents are invited to submit digital feedback until the final day of next month.", explanation: "Háº¡n chÃ³t Ä‘Ã³ng kháº£o sÃ¡t lÃ  cuá»‘i thÃ¡ng sau (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Academic Dissertation Research Evaluation",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Advisor: Your empirical methodology is robust, yet your theoretical framework requires deeper integration of macroeconomic variables...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What recommendation did the faculty advisor offer regarding sample bias?", options: ["A. Collect qualitative interviews across diverse demographic sectors", "B. Narrow the study strictly to undergraduate students", "C. Discard all outlier data points"], correct_answers: ["A"], evidence: "To neutralize regional bias, broaden your qualitative interviews across diverse demographic strata.", explanation: "GiÃ¡o viÃªn hÆ°á»›ng dáº«n khuyÃªn má»Ÿ rá»™ng phá»ng váº¥n Ä‘a dáº¡ng Ä‘á»‘i tÆ°á»£ng (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Technological Paradigms in Modern Applied Science",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Systemic resilience in complex technological architectures depends upon modularity, fault tolerance, and continuous algorithmic auditing...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Core operational resilience is achieved through structural [______].", correct_answers: ["modularity"], evidence: "The primary foundation of failure prevention is structural modularity across subsystems.", explanation: "TÃ­nh kiÃªn cÆ°á»ng cá»‘t lÃµi Ä‘áº¡t Ä‘Æ°á»£c nhá» cáº¥u trÃºc mÃ´-Ä‘un hÃ³a (modularity)." },
                            { id: 10, type: "fill", question: "10. Systems require ongoing algorithmic [______] to verify reliability.", correct_answers: ["auditing", "audits"], evidence: "Engineers mandate continuous algorithmic auditing to prevent catastrophic drift.", explanation: "Há»‡ thá»‘ng Ä‘Ã²i há»i viá»‡c kiá»ƒm toÃ¡n thuáº­t toÃ¡n liÃªn tá»¥c (auditing)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Urban Heat Island Mitigation",
                        content: "Biological and technological adaptations reflect sophisticated systemic responses to environmental pressures.\\n\\nEmpirical research across ecological and sociological disciplines reveals that resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes. When centralized dependencies are mitigated, entire networks withstand acute shocks with minimal systemic degradation. Contemporary scientists apply these organic principles to design climate-resilient cities and fault-tolerant digital architectures.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Resilient systemic structures distribute operational loads across decentralized nodes.", correct_answers: ["TRUE", "True", "T"], evidence: "resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes.", explanation: "Kháº³ng Ä‘á»‹nh trong cÃ¢u há»i trÃ¹ng khá»›p 100% vá»›i ná»™i dung bÃ i Ä‘á»c (TRUE)." },
                            { id: 12, type: "tfng", question: "12. Centralized systems have proven mathematically immune to environmental disruptions.", correct_answers: ["FALSE", "False", "F"], evidence: "When centralized dependencies are mitigated, entire networks withstand acute shocks", explanation: "Há»‡ thá»‘ng táº­p trung dá»… bá»‹ tá»•n thÆ°Æ¡ng, bÃ i Ä‘á»c nÃªu cáº§n giáº£m phá»¥ thuá»™c táº­p trung (FALSE)." },
                            { id: 13, type: "tfng", question: "13. International treaties mandate the global adoption of these biological designs.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "BÃ i Ä‘á»c chá»‰ nháº¯c cÃ¡c nhÃ  khoa há»c Ã¡p dá»¥ng nguyÃªn lÃ½ nÃ y, khÃ´ng Ä‘á» cáº­p Ä‘áº¿n hiá»‡p Æ°á»›c quá»‘c táº¿ nÃ o.", explanation: "ThÃ´ng tin vá» hiá»‡p Æ°á»›c quá»‘c táº¿ khÃ´ng cÃ³ trong bÃ i (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Socio-Economic Transformations in Modern Infrastructure",
                        content: "Urban infrastructure investments shape economic productivity and social mobility across generations.\\n\\nComparative studies demonstrate that high-capacity transit links catalyze commercial vibrancy around transport hubs while curbing suburban sprawling. However, municipal planners must integrate equitable zoning policies to protect existing residents against gentrification-driven displacement.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What primary economic benefit stems from high-capacity transit investments?", options: ["A. Lowering fuel taxes for private vehicles", "B. Stimulating commercial vitality around interconnected hubs", "C. Reducing domestic construction standards"], correct_answers: ["B"], evidence: "catalyze commercial vibrancy around transport hubs while curbing suburban sprawling.", explanation: "ThÃºc Ä‘áº©y sá»± sÃ´i Ä‘á»™ng thÆ°Æ¡ng máº¡i quanh cÃ¡c Ä‘áº§u má»‘i giao thÃ´ng (B)." },
                            { id: 15, type: "choice", question: "15. Why are equitable zoning policies necessary according to municipal planners?", options: ["A. To prevent speculative inflation from displacing established communities", "B. To mandate uniform architectural facades", "C. To outlaw commercial enterprise"], correct_answers: ["A"], evidence: "to protect existing residents against gentrification-driven displacement.", explanation: "Báº£o vá»‡ ngÆ°á»i dÃ¢n khá»i nguy cÆ¡ bá»‹ Ä‘áº©y khá»i nÆ¡i á»Ÿ do phÃ¢n hÃ³a giÃ¡ báº¥t Ä‘á»™ng sáº£n (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Epistemological Foundations of Scientific Discovery",
                        content: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.\\n\\nWhen anomalous experimental findings breach the explanatory confines of established orthodoxy, innovative theoretical models emerge to reconcile contradictory evidence. This philosophical dynamic underscores that scientific truths are continuously refined through rigorous empirical skepticism.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Major scientific breakthroughs occur exclusively through smooth, linear data accumulation.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.", explanation: "CÃ¡ch máº¡ng khoa há»c diá»…n ra qua sá»± chuyá»ƒn dá»‹ch há»‡ hÃ¬nh Ä‘á»™t phÃ¡ chá»© khÃ´ng tuyáº¿n tÃ­nh (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The chart illustrates International Tourism Arrivals Comparison.\\n\\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Analytical Graphic",
                    model_answer: "The visual illustration delineates the comparative dynamics of the examined sectors over a defined temporal continuum.\\n\\nOverall, a pronounced upward tendency is discernible across the dominant categories, whereas secondary indices exhibited moderate stability or minor contractions. Notably, the foremost sector widened its comparative advantage over the entire timeframe.\\n\\nIn the initial phase, recorded figures stood at relatively equitable baseline levels. However, structural shifts soon propelled the primary metric toward unprecedented highs, culminating in a dominant market posture by the conclusion of the survey horizon.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Rigorous identification of macro trends and accurate comparative reporting.",
                        coherence_cohesion: "Band 9.0: Flawless cohesion and effortless discourse transitions.",
                        lexical_resource: "Band 9.0: Academic register with precise economic terminology.",
                        grammar_accuracy: "Band 9.0: Sophisticated syntactic range without grammatical imperfections."
                    }
                },
                task_2: {
                    prompt: "Grassroots Community Sports vs Elite Athletics\\n\\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The contemporary discourse regarding this socio-economic issue has polarized opinions among policy analysts, industry stakeholders, and the general public.\\n\\nOn the one hand, proponents argue that sweeping institutional regulation is indispensable for safeguarding long-term public welfare. In the absence of binding legislative mandates, short-term commercial imperatives frequently compromise public health, ecological equilibrium, and social equity. Regulatory frameworks establish universal ethical guardrails that incentivize innovation while penalizing exploitative practices.\\n\\nOn the other hand, skeptics caution that excessive intervention can stifle entrepreneurial agility, induce capital flight, and create bureaucratic inefficiencies. They maintain that voluntary market mechanisms, technological ingenuity, and consumer advocacy provide more adaptable pathways toward sustainable outcomes.\\n\\nIn conclusion, having scrutinized both perspectives, I maintain that targeted, evidence-based regulation combined with transparent market incentives yields the most pragmatic and enduring benefits for modern civil society.",
                    key_vocab: ["binding legislative mandates", "ecological equilibrium", "entrepreneurial agility", "bureaucratic inefficiencies", "evidence-based regulation"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How do technological advancements influence your personal productivity?", examiner_audio: "How do technological advancements influence your personal productivity?", model_answer: "Technological tools streamline my administrative workflows through cloud synchronization, freeing mental bandwidth for creative and analytical problem-solving." },
                    { question: "Do you prefer working in collaborative groups or independently?", examiner_audio: "Do you prefer working in collaborative groups or independently?", model_answer: "I appreciate a balanced hybrid: collaborative brainstorming generates diverse insights, whereas solitary focus is essential for meticulous execution." }
                ],
                part_2: {
                    cue_card_title: "Describe a significant achievement you accomplished through sustained discipline.",
                    cues: [
                        "What the achievement was and when you accomplished it",
                        "What obstacles you encountered during the journey",
                        "What strategies helped you persevere",
                        "And explain why this accomplishment remains personally meaningful to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount the rigorous process of preparing for my advanced bilingual certification examination last year.\\n\\nBalancing professional commitments with demanding evening study sessions presented substantial cognitive fatigue. To prevail, I structured my preparation into non-negotiable morning blocks, tracking daily incremental milestones rather than fixating on distant outcomes. Achieving high honors reinforced my conviction that relentless incremental consistency inevitably overcomes transient moments of self-doubt.",
                    key_vocab: ["demanding commitments", "cognitive fatigue", "incremental consistency", "transient moments", "unwavering conviction"]
                },
                part_3: [
                    { question: "Why do some individuals struggle to maintain long-term personal resolutions?", examiner_audio: "Why do some individuals struggle to maintain long-term personal resolutions?", model_answer: "Many set unrealistic, perfectionist benchmarks without constructing daily operational habits, resulting in acute burnout whenever initial motivation wanes." },
                    { question: "What role should public educational institutions play in nurturing mental resilience?", examiner_audio: "What role should public educational institutions play in nurturing mental resilience?", model_answer: "Schools must integrate emotional intelligence, stress management, and deliberate failure debriefings into curricula alongside conventional academic subjects." }
                ]
            }
        }
,
        // =================================================================
        // TEST 11: CAMBRIDGE IELTS 11 ACADEMIC
        // =================================================================
        "cam_11": {
            id: "cam_11",
            title: "Cambridge IELTS 11 Academic Test",
            badge: "Cam 11",
            year: "2016 Edition",
            description: "Bá»™ Ä‘á» thi thá»­ Cambridge IELTS 11 Academic chuáº©n hÃ³a 4 ká»¹ nÄƒng Listening, Reading, Writing, Speaking.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Campervan Rental Expedition Logistics",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Officer: Good day, thank you for contacting our customer service bureau. Let me record your contact information and scheduled dates...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Applicant surname: Mitchell, First name: [______]", correct_answers: ["Daniel", "Dan"], evidence: "My first name is Daniel, D-A-N-I-E-L.", explanation: "NgÆ°á»i gá»i Ä‘Ã¡nh váº§n tÃªn Daniel rÃµ rÃ ng trong Ä‘oáº¡n ghi Ã¢m." },
                            { id: 2, type: "fill", question: "2. Scheduled date: [______] November", correct_answers: ["12th", "12", "twelfth"], evidence: "I would like to confirm my arrival on the 12th of November.", explanation: "NgÃ y Ä‘Æ°á»£c xÃ¡c nháº­n lÃ  ngÃ y 12 thÃ¡ng 11." },
                            { id: 3, type: "fill", question: "3. Contact mobile telephone: 07890 [______]", correct_answers: ["445120", "445 120"], evidence: "You can reach me directly on 07890 445120.", explanation: "Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Æ°á»£c Ä‘á»c tÃ¡ch báº¡ch tá»«ng cá»¥m ba chá»¯ sá»‘." },
                            { id: 4, type: "fill", question: "4. Preferred package tier: [______] membership", correct_answers: ["gold", "premium"], evidence: "I wish to enroll in the gold membership tier.", explanation: "GÃ³i Ä‘Äƒng kÃ½ Ä‘Æ°á»£c chá»n lÃ  gÃ³i Gold." },
                            { id: 5, type: "fill", question: "5. Advance deposit required: Â£[______]", correct_answers: ["60", "sixty"], evidence: "The required upfront security deposit is sixty pounds.", explanation: "Má»©c tiá»n cá»c quy Ä‘á»‹nh lÃ  60 báº£ng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Civic Amenities and Urban Modernization",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Speaker: Welcome citizens to our local redevelopment consultation. Our focus today is balancing heritage preservation with modern infrastructure...",
                        questions: [
                            { id: 6, type: "choice", question: "6. What is the overarching priority of the municipal masterplan?", options: ["A. Expanding commercial skyscraper districts", "B. Enhancing pedestrian accessibility and green spaces", "C. Constructing underground highways"], correct_answers: ["B"], evidence: "Our paramount objective is cultivating human-scale pedestrian avenues bordered by native tree canopies.", explanation: "Æ¯u tiÃªn hÃ ng Ä‘áº§u lÃ  cáº£i thiá»‡n Ä‘Æ°á»ng Ä‘i bá»™ vÃ  máº£ng xanh (B)." },
                            { id: 7, type: "choice", question: "7. When will public feedback surveys officially close?", options: ["A. At the end of next month", "B. In two weeks", "C. By Friday midnight"], correct_answers: ["A"], evidence: "Residents are invited to submit digital feedback until the final day of next month.", explanation: "Háº¡n chÃ³t Ä‘Ã³ng kháº£o sÃ¡t lÃ  cuá»‘i thÃ¡ng sau (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Academic Dissertation Research Evaluation",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Advisor: Your empirical methodology is robust, yet your theoretical framework requires deeper integration of macroeconomic variables...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What recommendation did the faculty advisor offer regarding sample bias?", options: ["A. Collect qualitative interviews across diverse demographic sectors", "B. Narrow the study strictly to undergraduate students", "C. Discard all outlier data points"], correct_answers: ["A"], evidence: "To neutralize regional bias, broaden your qualitative interviews across diverse demographic strata.", explanation: "GiÃ¡o viÃªn hÆ°á»›ng dáº«n khuyÃªn má»Ÿ rá»™ng phá»ng váº¥n Ä‘a dáº¡ng Ä‘á»‘i tÆ°á»£ng (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Technological Paradigms in Modern Applied Science",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Systemic resilience in complex technological architectures depends upon modularity, fault tolerance, and continuous algorithmic auditing...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Core operational resilience is achieved through structural [______].", correct_answers: ["modularity"], evidence: "The primary foundation of failure prevention is structural modularity across subsystems.", explanation: "TÃ­nh kiÃªn cÆ°á»ng cá»‘t lÃµi Ä‘áº¡t Ä‘Æ°á»£c nhá» cáº¥u trÃºc mÃ´-Ä‘un hÃ³a (modularity)." },
                            { id: 10, type: "fill", question: "10. Systems require ongoing algorithmic [______] to verify reliability.", correct_answers: ["auditing", "audits"], evidence: "Engineers mandate continuous algorithmic auditing to prevent catastrophic drift.", explanation: "Há»‡ thá»‘ng Ä‘Ã²i há»i viá»‡c kiá»ƒm toÃ¡n thuáº­t toÃ¡n liÃªn tá»¥c (auditing)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Precision Agriculture and Autonomous Drones",
                        content: "Biological and technological adaptations reflect sophisticated systemic responses to environmental pressures.\\n\\nEmpirical research across ecological and sociological disciplines reveals that resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes. When centralized dependencies are mitigated, entire networks withstand acute shocks with minimal systemic degradation. Contemporary scientists apply these organic principles to design climate-resilient cities and fault-tolerant digital architectures.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Resilient systemic structures distribute operational loads across decentralized nodes.", correct_answers: ["TRUE", "True", "T"], evidence: "resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes.", explanation: "Kháº³ng Ä‘á»‹nh trong cÃ¢u há»i trÃ¹ng khá»›p 100% vá»›i ná»™i dung bÃ i Ä‘á»c (TRUE)." },
                            { id: 12, type: "tfng", question: "12. Centralized systems have proven mathematically immune to environmental disruptions.", correct_answers: ["FALSE", "False", "F"], evidence: "When centralized dependencies are mitigated, entire networks withstand acute shocks", explanation: "Há»‡ thá»‘ng táº­p trung dá»… bá»‹ tá»•n thÆ°Æ¡ng, bÃ i Ä‘á»c nÃªu cáº§n giáº£m phá»¥ thuá»™c táº­p trung (FALSE)." },
                            { id: 13, type: "tfng", question: "13. International treaties mandate the global adoption of these biological designs.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "BÃ i Ä‘á»c chá»‰ nháº¯c cÃ¡c nhÃ  khoa há»c Ã¡p dá»¥ng nguyÃªn lÃ½ nÃ y, khÃ´ng Ä‘á» cáº­p Ä‘áº¿n hiá»‡p Æ°á»›c quá»‘c táº¿ nÃ o.", explanation: "ThÃ´ng tin vá» hiá»‡p Æ°á»›c quá»‘c táº¿ khÃ´ng cÃ³ trong bÃ i (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Socio-Economic Transformations in Modern Infrastructure",
                        content: "Urban infrastructure investments shape economic productivity and social mobility across generations.\\n\\nComparative studies demonstrate that high-capacity transit links catalyze commercial vibrancy around transport hubs while curbing suburban sprawling. However, municipal planners must integrate equitable zoning policies to protect existing residents against gentrification-driven displacement.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What primary economic benefit stems from high-capacity transit investments?", options: ["A. Lowering fuel taxes for private vehicles", "B. Stimulating commercial vitality around interconnected hubs", "C. Reducing domestic construction standards"], correct_answers: ["B"], evidence: "catalyze commercial vibrancy around transport hubs while curbing suburban sprawling.", explanation: "ThÃºc Ä‘áº©y sá»± sÃ´i Ä‘á»™ng thÆ°Æ¡ng máº¡i quanh cÃ¡c Ä‘áº§u má»‘i giao thÃ´ng (B)." },
                            { id: 15, type: "choice", question: "15. Why are equitable zoning policies necessary according to municipal planners?", options: ["A. To prevent speculative inflation from displacing established communities", "B. To mandate uniform architectural facades", "C. To outlaw commercial enterprise"], correct_answers: ["A"], evidence: "to protect existing residents against gentrification-driven displacement.", explanation: "Báº£o vá»‡ ngÆ°á»i dÃ¢n khá»i nguy cÆ¡ bá»‹ Ä‘áº©y khá»i nÆ¡i á»Ÿ do phÃ¢n hÃ³a giÃ¡ báº¥t Ä‘á»™ng sáº£n (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Epistemological Foundations of Scientific Discovery",
                        content: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.\\n\\nWhen anomalous experimental findings breach the explanatory confines of established orthodoxy, innovative theoretical models emerge to reconcile contradictory evidence. This philosophical dynamic underscores that scientific truths are continuously refined through rigorous empirical skepticism.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Major scientific breakthroughs occur exclusively through smooth, linear data accumulation.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.", explanation: "CÃ¡ch máº¡ng khoa há»c diá»…n ra qua sá»± chuyá»ƒn dá»‹ch há»‡ hÃ¬nh Ä‘á»™t phÃ¡ chá»© khÃ´ng tuyáº¿n tÃ­nh (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The chart illustrates Electricity Generation by Energy Source.\\n\\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Analytical Graphic",
                    model_answer: "The visual illustration delineates the comparative dynamics of the examined sectors over a defined temporal continuum.\\n\\nOverall, a pronounced upward tendency is discernible across the dominant categories, whereas secondary indices exhibited moderate stability or minor contractions. Notably, the foremost sector widened its comparative advantage over the entire timeframe.\\n\\nIn the initial phase, recorded figures stood at relatively equitable baseline levels. However, structural shifts soon propelled the primary metric toward unprecedented highs, culminating in a dominant market posture by the conclusion of the survey horizon.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Rigorous identification of macro trends and accurate comparative reporting.",
                        coherence_cohesion: "Band 9.0: Flawless cohesion and effortless discourse transitions.",
                        lexical_resource: "Band 9.0: Academic register with precise economic terminology.",
                        grammar_accuracy: "Band 9.0: Sophisticated syntactic range without grammatical imperfections."
                    }
                },
                task_2: {
                    prompt: "Decentralizing Corporate Headquarters to Provincial Towns\\n\\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The contemporary discourse regarding this socio-economic issue has polarized opinions among policy analysts, industry stakeholders, and the general public.\\n\\nOn the one hand, proponents argue that sweeping institutional regulation is indispensable for safeguarding long-term public welfare. In the absence of binding legislative mandates, short-term commercial imperatives frequently compromise public health, ecological equilibrium, and social equity. Regulatory frameworks establish universal ethical guardrails that incentivize innovation while penalizing exploitative practices.\\n\\nOn the other hand, skeptics caution that excessive intervention can stifle entrepreneurial agility, induce capital flight, and create bureaucratic inefficiencies. They maintain that voluntary market mechanisms, technological ingenuity, and consumer advocacy provide more adaptable pathways toward sustainable outcomes.\\n\\nIn conclusion, having scrutinized both perspectives, I maintain that targeted, evidence-based regulation combined with transparent market incentives yields the most pragmatic and enduring benefits for modern civil society.",
                    key_vocab: ["binding legislative mandates", "ecological equilibrium", "entrepreneurial agility", "bureaucratic inefficiencies", "evidence-based regulation"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How do technological advancements influence your personal productivity?", examiner_audio: "How do technological advancements influence your personal productivity?", model_answer: "Technological tools streamline my administrative workflows through cloud synchronization, freeing mental bandwidth for creative and analytical problem-solving." },
                    { question: "Do you prefer working in collaborative groups or independently?", examiner_audio: "Do you prefer working in collaborative groups or independently?", model_answer: "I appreciate a balanced hybrid: collaborative brainstorming generates diverse insights, whereas solitary focus is essential for meticulous execution." }
                ],
                part_2: {
                    cue_card_title: "Describe a significant achievement you accomplished through sustained discipline.",
                    cues: [
                        "What the achievement was and when you accomplished it",
                        "What obstacles you encountered during the journey",
                        "What strategies helped you persevere",
                        "And explain why this accomplishment remains personally meaningful to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount the rigorous process of preparing for my advanced bilingual certification examination last year.\\n\\nBalancing professional commitments with demanding evening study sessions presented substantial cognitive fatigue. To prevail, I structured my preparation into non-negotiable morning blocks, tracking daily incremental milestones rather than fixating on distant outcomes. Achieving high honors reinforced my conviction that relentless incremental consistency inevitably overcomes transient moments of self-doubt.",
                    key_vocab: ["demanding commitments", "cognitive fatigue", "incremental consistency", "transient moments", "unwavering conviction"]
                },
                part_3: [
                    { question: "Why do some individuals struggle to maintain long-term personal resolutions?", examiner_audio: "Why do some individuals struggle to maintain long-term personal resolutions?", model_answer: "Many set unrealistic, perfectionist benchmarks without constructing daily operational habits, resulting in acute burnout whenever initial motivation wanes." },
                    { question: "What role should public educational institutions play in nurturing mental resilience?", examiner_audio: "What role should public educational institutions play in nurturing mental resilience?", model_answer: "Schools must integrate emotional intelligence, stress management, and deliberate failure debriefings into curricula alongside conventional academic subjects." }
                ]
            }
        }
,
        // =================================================================
        // TEST 12: CAMBRIDGE IELTS 12 ACADEMIC
        // =================================================================
        "cam_12": {
            id: "cam_12",
            title: "Cambridge IELTS 12 Academic Test",
            badge: "Cam 12",
            year: "2017 Edition",
            description: "Bá»™ Ä‘á» thi thá»­ Cambridge IELTS 12 Academic chuáº©n hÃ³a 4 ká»¹ nÄƒng Listening, Reading, Writing, Speaking.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Aquatic Center Membership Subscription",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Officer: Good day, thank you for contacting our customer service bureau. Let me record your contact information and scheduled dates...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Applicant surname: Mitchell, First name: [______]", correct_answers: ["Daniel", "Dan"], evidence: "My first name is Daniel, D-A-N-I-E-L.", explanation: "NgÆ°á»i gá»i Ä‘Ã¡nh váº§n tÃªn Daniel rÃµ rÃ ng trong Ä‘oáº¡n ghi Ã¢m." },
                            { id: 2, type: "fill", question: "2. Scheduled date: [______] November", correct_answers: ["12th", "12", "twelfth"], evidence: "I would like to confirm my arrival on the 12th of November.", explanation: "NgÃ y Ä‘Æ°á»£c xÃ¡c nháº­n lÃ  ngÃ y 12 thÃ¡ng 11." },
                            { id: 3, type: "fill", question: "3. Contact mobile telephone: 07890 [______]", correct_answers: ["445120", "445 120"], evidence: "You can reach me directly on 07890 445120.", explanation: "Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Æ°á»£c Ä‘á»c tÃ¡ch báº¡ch tá»«ng cá»¥m ba chá»¯ sá»‘." },
                            { id: 4, type: "fill", question: "4. Preferred package tier: [______] membership", correct_answers: ["gold", "premium"], evidence: "I wish to enroll in the gold membership tier.", explanation: "GÃ³i Ä‘Äƒng kÃ½ Ä‘Æ°á»£c chá»n lÃ  gÃ³i Gold." },
                            { id: 5, type: "fill", question: "5. Advance deposit required: Â£[______]", correct_answers: ["60", "sixty"], evidence: "The required upfront security deposit is sixty pounds.", explanation: "Má»©c tiá»n cá»c quy Ä‘á»‹nh lÃ  60 báº£ng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Civic Amenities and Urban Modernization",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Speaker: Welcome citizens to our local redevelopment consultation. Our focus today is balancing heritage preservation with modern infrastructure...",
                        questions: [
                            { id: 6, type: "choice", question: "6. What is the overarching priority of the municipal masterplan?", options: ["A. Expanding commercial skyscraper districts", "B. Enhancing pedestrian accessibility and green spaces", "C. Constructing underground highways"], correct_answers: ["B"], evidence: "Our paramount objective is cultivating human-scale pedestrian avenues bordered by native tree canopies.", explanation: "Æ¯u tiÃªn hÃ ng Ä‘áº§u lÃ  cáº£i thiá»‡n Ä‘Æ°á»ng Ä‘i bá»™ vÃ  máº£ng xanh (B)." },
                            { id: 7, type: "choice", question: "7. When will public feedback surveys officially close?", options: ["A. At the end of next month", "B. In two weeks", "C. By Friday midnight"], correct_answers: ["A"], evidence: "Residents are invited to submit digital feedback until the final day of next month.", explanation: "Háº¡n chÃ³t Ä‘Ã³ng kháº£o sÃ¡t lÃ  cuá»‘i thÃ¡ng sau (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Academic Dissertation Research Evaluation",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Advisor: Your empirical methodology is robust, yet your theoretical framework requires deeper integration of macroeconomic variables...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What recommendation did the faculty advisor offer regarding sample bias?", options: ["A. Collect qualitative interviews across diverse demographic sectors", "B. Narrow the study strictly to undergraduate students", "C. Discard all outlier data points"], correct_answers: ["A"], evidence: "To neutralize regional bias, broaden your qualitative interviews across diverse demographic strata.", explanation: "GiÃ¡o viÃªn hÆ°á»›ng dáº«n khuyÃªn má»Ÿ rá»™ng phá»ng váº¥n Ä‘a dáº¡ng Ä‘á»‘i tÆ°á»£ng (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Technological Paradigms in Modern Applied Science",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Systemic resilience in complex technological architectures depends upon modularity, fault tolerance, and continuous algorithmic auditing...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Core operational resilience is achieved through structural [______].", correct_answers: ["modularity"], evidence: "The primary foundation of failure prevention is structural modularity across subsystems.", explanation: "TÃ­nh kiÃªn cÆ°á»ng cá»‘t lÃµi Ä‘áº¡t Ä‘Æ°á»£c nhá» cáº¥u trÃºc mÃ´-Ä‘un hÃ³a (modularity)." },
                            { id: 10, type: "fill", question: "10. Systems require ongoing algorithmic [______] to verify reliability.", correct_answers: ["auditing", "audits"], evidence: "Engineers mandate continuous algorithmic auditing to prevent catastrophic drift.", explanation: "Há»‡ thá»‘ng Ä‘Ã²i há»i viá»‡c kiá»ƒm toÃ¡n thuáº­t toÃ¡n liÃªn tá»¥c (auditing)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Biomimetic Marine Propulsion",
                        content: "Biological and technological adaptations reflect sophisticated systemic responses to environmental pressures.\\n\\nEmpirical research across ecological and sociological disciplines reveals that resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes. When centralized dependencies are mitigated, entire networks withstand acute shocks with minimal systemic degradation. Contemporary scientists apply these organic principles to design climate-resilient cities and fault-tolerant digital architectures.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Resilient systemic structures distribute operational loads across decentralized nodes.", correct_answers: ["TRUE", "True", "T"], evidence: "resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes.", explanation: "Kháº³ng Ä‘á»‹nh trong cÃ¢u há»i trÃ¹ng khá»›p 100% vá»›i ná»™i dung bÃ i Ä‘á»c (TRUE)." },
                            { id: 12, type: "tfng", question: "12. Centralized systems have proven mathematically immune to environmental disruptions.", correct_answers: ["FALSE", "False", "F"], evidence: "When centralized dependencies are mitigated, entire networks withstand acute shocks", explanation: "Há»‡ thá»‘ng táº­p trung dá»… bá»‹ tá»•n thÆ°Æ¡ng, bÃ i Ä‘á»c nÃªu cáº§n giáº£m phá»¥ thuá»™c táº­p trung (FALSE)." },
                            { id: 13, type: "tfng", question: "13. International treaties mandate the global adoption of these biological designs.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "BÃ i Ä‘á»c chá»‰ nháº¯c cÃ¡c nhÃ  khoa há»c Ã¡p dá»¥ng nguyÃªn lÃ½ nÃ y, khÃ´ng Ä‘á» cáº­p Ä‘áº¿n hiá»‡p Æ°á»›c quá»‘c táº¿ nÃ o.", explanation: "ThÃ´ng tin vá» hiá»‡p Æ°á»›c quá»‘c táº¿ khÃ´ng cÃ³ trong bÃ i (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Socio-Economic Transformations in Modern Infrastructure",
                        content: "Urban infrastructure investments shape economic productivity and social mobility across generations.\\n\\nComparative studies demonstrate that high-capacity transit links catalyze commercial vibrancy around transport hubs while curbing suburban sprawling. However, municipal planners must integrate equitable zoning policies to protect existing residents against gentrification-driven displacement.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What primary economic benefit stems from high-capacity transit investments?", options: ["A. Lowering fuel taxes for private vehicles", "B. Stimulating commercial vitality around interconnected hubs", "C. Reducing domestic construction standards"], correct_answers: ["B"], evidence: "catalyze commercial vibrancy around transport hubs while curbing suburban sprawling.", explanation: "ThÃºc Ä‘áº©y sá»± sÃ´i Ä‘á»™ng thÆ°Æ¡ng máº¡i quanh cÃ¡c Ä‘áº§u má»‘i giao thÃ´ng (B)." },
                            { id: 15, type: "choice", question: "15. Why are equitable zoning policies necessary according to municipal planners?", options: ["A. To prevent speculative inflation from displacing established communities", "B. To mandate uniform architectural facades", "C. To outlaw commercial enterprise"], correct_answers: ["A"], evidence: "to protect existing residents against gentrification-driven displacement.", explanation: "Báº£o vá»‡ ngÆ°á»i dÃ¢n khá»i nguy cÆ¡ bá»‹ Ä‘áº©y khá»i nÆ¡i á»Ÿ do phÃ¢n hÃ³a giÃ¡ báº¥t Ä‘á»™ng sáº£n (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Epistemological Foundations of Scientific Discovery",
                        content: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.\\n\\nWhen anomalous experimental findings breach the explanatory confines of established orthodoxy, innovative theoretical models emerge to reconcile contradictory evidence. This philosophical dynamic underscores that scientific truths are continuously refined through rigorous empirical skepticism.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Major scientific breakthroughs occur exclusively through smooth, linear data accumulation.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.", explanation: "CÃ¡ch máº¡ng khoa há»c diá»…n ra qua sá»± chuyá»ƒn dá»‹ch há»‡ hÃ¬nh Ä‘á»™t phÃ¡ chá»© khÃ´ng tuyáº¿n tÃ­nh (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The chart illustrates Electric Vehicle Adoption Across Global Markets.\\n\\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Analytical Graphic",
                    model_answer: "The visual illustration delineates the comparative dynamics of the examined sectors over a defined temporal continuum.\\n\\nOverall, a pronounced upward tendency is discernible across the dominant categories, whereas secondary indices exhibited moderate stability or minor contractions. Notably, the foremost sector widened its comparative advantage over the entire timeframe.\\n\\nIn the initial phase, recorded figures stood at relatively equitable baseline levels. However, structural shifts soon propelled the primary metric toward unprecedented highs, culminating in a dominant market posture by the conclusion of the survey horizon.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Rigorous identification of macro trends and accurate comparative reporting.",
                        coherence_cohesion: "Band 9.0: Flawless cohesion and effortless discourse transitions.",
                        lexical_resource: "Band 9.0: Academic register with precise economic terminology.",
                        grammar_accuracy: "Band 9.0: Sophisticated syntactic range without grammatical imperfections."
                    }
                },
                task_2: {
                    prompt: "Universal Basic Income in the Era of Automation\\n\\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The contemporary discourse regarding this socio-economic issue has polarized opinions among policy analysts, industry stakeholders, and the general public.\\n\\nOn the one hand, proponents argue that sweeping institutional regulation is indispensable for safeguarding long-term public welfare. In the absence of binding legislative mandates, short-term commercial imperatives frequently compromise public health, ecological equilibrium, and social equity. Regulatory frameworks establish universal ethical guardrails that incentivize innovation while penalizing exploitative practices.\\n\\nOn the other hand, skeptics caution that excessive intervention can stifle entrepreneurial agility, induce capital flight, and create bureaucratic inefficiencies. They maintain that voluntary market mechanisms, technological ingenuity, and consumer advocacy provide more adaptable pathways toward sustainable outcomes.\\n\\nIn conclusion, having scrutinized both perspectives, I maintain that targeted, evidence-based regulation combined with transparent market incentives yields the most pragmatic and enduring benefits for modern civil society.",
                    key_vocab: ["binding legislative mandates", "ecological equilibrium", "entrepreneurial agility", "bureaucratic inefficiencies", "evidence-based regulation"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How do technological advancements influence your personal productivity?", examiner_audio: "How do technological advancements influence your personal productivity?", model_answer: "Technological tools streamline my administrative workflows through cloud synchronization, freeing mental bandwidth for creative and analytical problem-solving." },
                    { question: "Do you prefer working in collaborative groups or independently?", examiner_audio: "Do you prefer working in collaborative groups or independently?", model_answer: "I appreciate a balanced hybrid: collaborative brainstorming generates diverse insights, whereas solitary focus is essential for meticulous execution." }
                ],
                part_2: {
                    cue_card_title: "Describe a significant achievement you accomplished through sustained discipline.",
                    cues: [
                        "What the achievement was and when you accomplished it",
                        "What obstacles you encountered during the journey",
                        "What strategies helped you persevere",
                        "And explain why this accomplishment remains personally meaningful to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount the rigorous process of preparing for my advanced bilingual certification examination last year.\\n\\nBalancing professional commitments with demanding evening study sessions presented substantial cognitive fatigue. To prevail, I structured my preparation into non-negotiable morning blocks, tracking daily incremental milestones rather than fixating on distant outcomes. Achieving high honors reinforced my conviction that relentless incremental consistency inevitably overcomes transient moments of self-doubt.",
                    key_vocab: ["demanding commitments", "cognitive fatigue", "incremental consistency", "transient moments", "unwavering conviction"]
                },
                part_3: [
                    { question: "Why do some individuals struggle to maintain long-term personal resolutions?", examiner_audio: "Why do some individuals struggle to maintain long-term personal resolutions?", model_answer: "Many set unrealistic, perfectionist benchmarks without constructing daily operational habits, resulting in acute burnout whenever initial motivation wanes." },
                    { question: "What role should public educational institutions play in nurturing mental resilience?", examiner_audio: "What role should public educational institutions play in nurturing mental resilience?", model_answer: "Schools must integrate emotional intelligence, stress management, and deliberate failure debriefings into curricula alongside conventional academic subjects." }
                ]
            }
        }
,
        // =================================================================
        // TEST 13: CAMBRIDGE IELTS 13 ACADEMIC
        // =================================================================
        "cam_13": {
            id: "cam_13",
            title: "Cambridge IELTS 13 Academic Test",
            badge: "Cam 13",
            year: "2018 Edition",
            description: "Bá»™ Ä‘á» thi thá»­ Cambridge IELTS 13 Academic chuáº©n hÃ³a 4 ká»¹ nÄƒng Listening, Reading, Writing, Speaking.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Express High-Speed Train Ticketing",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Officer: Good day, thank you for contacting our customer service bureau. Let me record your contact information and scheduled dates...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Applicant surname: Mitchell, First name: [______]", correct_answers: ["Daniel", "Dan"], evidence: "My first name is Daniel, D-A-N-I-E-L.", explanation: "NgÆ°á»i gá»i Ä‘Ã¡nh váº§n tÃªn Daniel rÃµ rÃ ng trong Ä‘oáº¡n ghi Ã¢m." },
                            { id: 2, type: "fill", question: "2. Scheduled date: [______] November", correct_answers: ["12th", "12", "twelfth"], evidence: "I would like to confirm my arrival on the 12th of November.", explanation: "NgÃ y Ä‘Æ°á»£c xÃ¡c nháº­n lÃ  ngÃ y 12 thÃ¡ng 11." },
                            { id: 3, type: "fill", question: "3. Contact mobile telephone: 07890 [______]", correct_answers: ["445120", "445 120"], evidence: "You can reach me directly on 07890 445120.", explanation: "Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Æ°á»£c Ä‘á»c tÃ¡ch báº¡ch tá»«ng cá»¥m ba chá»¯ sá»‘." },
                            { id: 4, type: "fill", question: "4. Preferred package tier: [______] membership", correct_answers: ["gold", "premium"], evidence: "I wish to enroll in the gold membership tier.", explanation: "GÃ³i Ä‘Äƒng kÃ½ Ä‘Æ°á»£c chá»n lÃ  gÃ³i Gold." },
                            { id: 5, type: "fill", question: "5. Advance deposit required: Â£[______]", correct_answers: ["60", "sixty"], evidence: "The required upfront security deposit is sixty pounds.", explanation: "Má»©c tiá»n cá»c quy Ä‘á»‹nh lÃ  60 báº£ng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Civic Amenities and Urban Modernization",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Speaker: Welcome citizens to our local redevelopment consultation. Our focus today is balancing heritage preservation with modern infrastructure...",
                        questions: [
                            { id: 6, type: "choice", question: "6. What is the overarching priority of the municipal masterplan?", options: ["A. Expanding commercial skyscraper districts", "B. Enhancing pedestrian accessibility and green spaces", "C. Constructing underground highways"], correct_answers: ["B"], evidence: "Our paramount objective is cultivating human-scale pedestrian avenues bordered by native tree canopies.", explanation: "Æ¯u tiÃªn hÃ ng Ä‘áº§u lÃ  cáº£i thiá»‡n Ä‘Æ°á»ng Ä‘i bá»™ vÃ  máº£ng xanh (B)." },
                            { id: 7, type: "choice", question: "7. When will public feedback surveys officially close?", options: ["A. At the end of next month", "B. In two weeks", "C. By Friday midnight"], correct_answers: ["A"], evidence: "Residents are invited to submit digital feedback until the final day of next month.", explanation: "Háº¡n chÃ³t Ä‘Ã³ng kháº£o sÃ¡t lÃ  cuá»‘i thÃ¡ng sau (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Academic Dissertation Research Evaluation",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Advisor: Your empirical methodology is robust, yet your theoretical framework requires deeper integration of macroeconomic variables...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What recommendation did the faculty advisor offer regarding sample bias?", options: ["A. Collect qualitative interviews across diverse demographic sectors", "B. Narrow the study strictly to undergraduate students", "C. Discard all outlier data points"], correct_answers: ["A"], evidence: "To neutralize regional bias, broaden your qualitative interviews across diverse demographic strata.", explanation: "GiÃ¡o viÃªn hÆ°á»›ng dáº«n khuyÃªn má»Ÿ rá»™ng phá»ng váº¥n Ä‘a dáº¡ng Ä‘á»‘i tÆ°á»£ng (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Technological Paradigms in Modern Applied Science",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Systemic resilience in complex technological architectures depends upon modularity, fault tolerance, and continuous algorithmic auditing...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Core operational resilience is achieved through structural [______].", correct_answers: ["modularity"], evidence: "The primary foundation of failure prevention is structural modularity across subsystems.", explanation: "TÃ­nh kiÃªn cÆ°á»ng cá»‘t lÃµi Ä‘áº¡t Ä‘Æ°á»£c nhá» cáº¥u trÃºc mÃ´-Ä‘un hÃ³a (modularity)." },
                            { id: 10, type: "fill", question: "10. Systems require ongoing algorithmic [______] to verify reliability.", correct_answers: ["auditing", "audits"], evidence: "Engineers mandate continuous algorithmic auditing to prevent catastrophic drift.", explanation: "Há»‡ thá»‘ng Ä‘Ã²i há»i viá»‡c kiá»ƒm toÃ¡n thuáº­t toÃ¡n liÃªn tá»¥c (auditing)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Nanomedicine in Oncology Treatments",
                        content: "Biological and technological adaptations reflect sophisticated systemic responses to environmental pressures.\\n\\nEmpirical research across ecological and sociological disciplines reveals that resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes. When centralized dependencies are mitigated, entire networks withstand acute shocks with minimal systemic degradation. Contemporary scientists apply these organic principles to design climate-resilient cities and fault-tolerant digital architectures.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Resilient systemic structures distribute operational loads across decentralized nodes.", correct_answers: ["TRUE", "True", "T"], evidence: "resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes.", explanation: "Kháº³ng Ä‘á»‹nh trong cÃ¢u há»i trÃ¹ng khá»›p 100% vá»›i ná»™i dung bÃ i Ä‘á»c (TRUE)." },
                            { id: 12, type: "tfng", question: "12. Centralized systems have proven mathematically immune to environmental disruptions.", correct_answers: ["FALSE", "False", "F"], evidence: "When centralized dependencies are mitigated, entire networks withstand acute shocks", explanation: "Há»‡ thá»‘ng táº­p trung dá»… bá»‹ tá»•n thÆ°Æ¡ng, bÃ i Ä‘á»c nÃªu cáº§n giáº£m phá»¥ thuá»™c táº­p trung (FALSE)." },
                            { id: 13, type: "tfng", question: "13. International treaties mandate the global adoption of these biological designs.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "BÃ i Ä‘á»c chá»‰ nháº¯c cÃ¡c nhÃ  khoa há»c Ã¡p dá»¥ng nguyÃªn lÃ½ nÃ y, khÃ´ng Ä‘á» cáº­p Ä‘áº¿n hiá»‡p Æ°á»›c quá»‘c táº¿ nÃ o.", explanation: "ThÃ´ng tin vá» hiá»‡p Æ°á»›c quá»‘c táº¿ khÃ´ng cÃ³ trong bÃ i (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Socio-Economic Transformations in Modern Infrastructure",
                        content: "Urban infrastructure investments shape economic productivity and social mobility across generations.\\n\\nComparative studies demonstrate that high-capacity transit links catalyze commercial vibrancy around transport hubs while curbing suburban sprawling. However, municipal planners must integrate equitable zoning policies to protect existing residents against gentrification-driven displacement.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What primary economic benefit stems from high-capacity transit investments?", options: ["A. Lowering fuel taxes for private vehicles", "B. Stimulating commercial vitality around interconnected hubs", "C. Reducing domestic construction standards"], correct_answers: ["B"], evidence: "catalyze commercial vibrancy around transport hubs while curbing suburban sprawling.", explanation: "ThÃºc Ä‘áº©y sá»± sÃ´i Ä‘á»™ng thÆ°Æ¡ng máº¡i quanh cÃ¡c Ä‘áº§u má»‘i giao thÃ´ng (B)." },
                            { id: 15, type: "choice", question: "15. Why are equitable zoning policies necessary according to municipal planners?", options: ["A. To prevent speculative inflation from displacing established communities", "B. To mandate uniform architectural facades", "C. To outlaw commercial enterprise"], correct_answers: ["A"], evidence: "to protect existing residents against gentrification-driven displacement.", explanation: "Báº£o vá»‡ ngÆ°á»i dÃ¢n khá»i nguy cÆ¡ bá»‹ Ä‘áº©y khá»i nÆ¡i á»Ÿ do phÃ¢n hÃ³a giÃ¡ báº¥t Ä‘á»™ng sáº£n (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Epistemological Foundations of Scientific Discovery",
                        content: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.\\n\\nWhen anomalous experimental findings breach the explanatory confines of established orthodoxy, innovative theoretical models emerge to reconcile contradictory evidence. This philosophical dynamic underscores that scientific truths are continuously refined through rigorous empirical skepticism.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Major scientific breakthroughs occur exclusively through smooth, linear data accumulation.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.", explanation: "CÃ¡ch máº¡ng khoa há»c diá»…n ra qua sá»± chuyá»ƒn dá»‹ch há»‡ hÃ¬nh Ä‘á»™t phÃ¡ chá»© khÃ´ng tuyáº¿n tÃ­nh (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The chart illustrates Adult Literacy and Schooling Enrollment Rates.\\n\\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Analytical Graphic",
                    model_answer: "The visual illustration delineates the comparative dynamics of the examined sectors over a defined temporal continuum.\\n\\nOverall, a pronounced upward tendency is discernible across the dominant categories, whereas secondary indices exhibited moderate stability or minor contractions. Notably, the foremost sector widened its comparative advantage over the entire timeframe.\\n\\nIn the initial phase, recorded figures stood at relatively equitable baseline levels. However, structural shifts soon propelled the primary metric toward unprecedented highs, culminating in a dominant market posture by the conclusion of the survey horizon.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Rigorous identification of macro trends and accurate comparative reporting.",
                        coherence_cohesion: "Band 9.0: Flawless cohesion and effortless discourse transitions.",
                        lexical_resource: "Band 9.0: Academic register with precise economic terminology.",
                        grammar_accuracy: "Band 9.0: Sophisticated syntactic range without grammatical imperfections."
                    }
                },
                task_2: {
                    prompt: "Rural-to-Urban Demographic Migration Trends\\n\\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The contemporary discourse regarding this socio-economic issue has polarized opinions among policy analysts, industry stakeholders, and the general public.\\n\\nOn the one hand, proponents argue that sweeping institutional regulation is indispensable for safeguarding long-term public welfare. In the absence of binding legislative mandates, short-term commercial imperatives frequently compromise public health, ecological equilibrium, and social equity. Regulatory frameworks establish universal ethical guardrails that incentivize innovation while penalizing exploitative practices.\\n\\nOn the other hand, skeptics caution that excessive intervention can stifle entrepreneurial agility, induce capital flight, and create bureaucratic inefficiencies. They maintain that voluntary market mechanisms, technological ingenuity, and consumer advocacy provide more adaptable pathways toward sustainable outcomes.\\n\\nIn conclusion, having scrutinized both perspectives, I maintain that targeted, evidence-based regulation combined with transparent market incentives yields the most pragmatic and enduring benefits for modern civil society.",
                    key_vocab: ["binding legislative mandates", "ecological equilibrium", "entrepreneurial agility", "bureaucratic inefficiencies", "evidence-based regulation"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How do technological advancements influence your personal productivity?", examiner_audio: "How do technological advancements influence your personal productivity?", model_answer: "Technological tools streamline my administrative workflows through cloud synchronization, freeing mental bandwidth for creative and analytical problem-solving." },
                    { question: "Do you prefer working in collaborative groups or independently?", examiner_audio: "Do you prefer working in collaborative groups or independently?", model_answer: "I appreciate a balanced hybrid: collaborative brainstorming generates diverse insights, whereas solitary focus is essential for meticulous execution." }
                ],
                part_2: {
                    cue_card_title: "Describe a significant achievement you accomplished through sustained discipline.",
                    cues: [
                        "What the achievement was and when you accomplished it",
                        "What obstacles you encountered during the journey",
                        "What strategies helped you persevere",
                        "And explain why this accomplishment remains personally meaningful to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount the rigorous process of preparing for my advanced bilingual certification examination last year.\\n\\nBalancing professional commitments with demanding evening study sessions presented substantial cognitive fatigue. To prevail, I structured my preparation into non-negotiable morning blocks, tracking daily incremental milestones rather than fixating on distant outcomes. Achieving high honors reinforced my conviction that relentless incremental consistency inevitably overcomes transient moments of self-doubt.",
                    key_vocab: ["demanding commitments", "cognitive fatigue", "incremental consistency", "transient moments", "unwavering conviction"]
                },
                part_3: [
                    { question: "Why do some individuals struggle to maintain long-term personal resolutions?", examiner_audio: "Why do some individuals struggle to maintain long-term personal resolutions?", model_answer: "Many set unrealistic, perfectionist benchmarks without constructing daily operational habits, resulting in acute burnout whenever initial motivation wanes." },
                    { question: "What role should public educational institutions play in nurturing mental resilience?", examiner_audio: "What role should public educational institutions play in nurturing mental resilience?", model_answer: "Schools must integrate emotional intelligence, stress management, and deliberate failure debriefings into curricula alongside conventional academic subjects." }
                ]
            }
        }
,
        // =================================================================
        // TEST 14: CAMBRIDGE IELTS 14 ACADEMIC
        // =================================================================
        "cam_14": {
            id: "cam_14",
            title: "Cambridge IELTS 14 Academic Test",
            badge: "Cam 14",
            year: "2019 Edition",
            description: "Bá»™ Ä‘á» thi thá»­ Cambridge IELTS 14 Academic chuáº©n hÃ³a 4 ká»¹ nÄƒng Listening, Reading, Writing, Speaking.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Comprehensive Travel Insurance Inquiries",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Officer: Good day, thank you for contacting our customer service bureau. Let me record your contact information and scheduled dates...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Applicant surname: Mitchell, First name: [______]", correct_answers: ["Daniel", "Dan"], evidence: "My first name is Daniel, D-A-N-I-E-L.", explanation: "NgÆ°á»i gá»i Ä‘Ã¡nh váº§n tÃªn Daniel rÃµ rÃ ng trong Ä‘oáº¡n ghi Ã¢m." },
                            { id: 2, type: "fill", question: "2. Scheduled date: [______] November", correct_answers: ["12th", "12", "twelfth"], evidence: "I would like to confirm my arrival on the 12th of November.", explanation: "NgÃ y Ä‘Æ°á»£c xÃ¡c nháº­n lÃ  ngÃ y 12 thÃ¡ng 11." },
                            { id: 3, type: "fill", question: "3. Contact mobile telephone: 07890 [______]", correct_answers: ["445120", "445 120"], evidence: "You can reach me directly on 07890 445120.", explanation: "Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Æ°á»£c Ä‘á»c tÃ¡ch báº¡ch tá»«ng cá»¥m ba chá»¯ sá»‘." },
                            { id: 4, type: "fill", question: "4. Preferred package tier: [______] membership", correct_answers: ["gold", "premium"], evidence: "I wish to enroll in the gold membership tier.", explanation: "GÃ³i Ä‘Äƒng kÃ½ Ä‘Æ°á»£c chá»n lÃ  gÃ³i Gold." },
                            { id: 5, type: "fill", question: "5. Advance deposit required: Â£[______]", correct_answers: ["60", "sixty"], evidence: "The required upfront security deposit is sixty pounds.", explanation: "Má»©c tiá»n cá»c quy Ä‘á»‹nh lÃ  60 báº£ng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Civic Amenities and Urban Modernization",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Speaker: Welcome citizens to our local redevelopment consultation. Our focus today is balancing heritage preservation with modern infrastructure...",
                        questions: [
                            { id: 6, type: "choice", question: "6. What is the overarching priority of the municipal masterplan?", options: ["A. Expanding commercial skyscraper districts", "B. Enhancing pedestrian accessibility and green spaces", "C. Constructing underground highways"], correct_answers: ["B"], evidence: "Our paramount objective is cultivating human-scale pedestrian avenues bordered by native tree canopies.", explanation: "Æ¯u tiÃªn hÃ ng Ä‘áº§u lÃ  cáº£i thiá»‡n Ä‘Æ°á»ng Ä‘i bá»™ vÃ  máº£ng xanh (B)." },
                            { id: 7, type: "choice", question: "7. When will public feedback surveys officially close?", options: ["A. At the end of next month", "B. In two weeks", "C. By Friday midnight"], correct_answers: ["A"], evidence: "Residents are invited to submit digital feedback until the final day of next month.", explanation: "Háº¡n chÃ³t Ä‘Ã³ng kháº£o sÃ¡t lÃ  cuá»‘i thÃ¡ng sau (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Academic Dissertation Research Evaluation",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Advisor: Your empirical methodology is robust, yet your theoretical framework requires deeper integration of macroeconomic variables...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What recommendation did the faculty advisor offer regarding sample bias?", options: ["A. Collect qualitative interviews across diverse demographic sectors", "B. Narrow the study strictly to undergraduate students", "C. Discard all outlier data points"], correct_answers: ["A"], evidence: "To neutralize regional bias, broaden your qualitative interviews across diverse demographic strata.", explanation: "GiÃ¡o viÃªn hÆ°á»›ng dáº«n khuyÃªn má»Ÿ rá»™ng phá»ng váº¥n Ä‘a dáº¡ng Ä‘á»‘i tÆ°á»£ng (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Technological Paradigms in Modern Applied Science",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Systemic resilience in complex technological architectures depends upon modularity, fault tolerance, and continuous algorithmic auditing...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Core operational resilience is achieved through structural [______].", correct_answers: ["modularity"], evidence: "The primary foundation of failure prevention is structural modularity across subsystems.", explanation: "TÃ­nh kiÃªn cÆ°á»ng cá»‘t lÃµi Ä‘áº¡t Ä‘Æ°á»£c nhá» cáº¥u trÃºc mÃ´-Ä‘un hÃ³a (modularity)." },
                            { id: 10, type: "fill", question: "10. Systems require ongoing algorithmic [______] to verify reliability.", correct_answers: ["auditing", "audits"], evidence: "Engineers mandate continuous algorithmic auditing to prevent catastrophic drift.", explanation: "Há»‡ thá»‘ng Ä‘Ã²i há»i viá»‡c kiá»ƒm toÃ¡n thuáº­t toÃ¡n liÃªn tá»¥c (auditing)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Smart City Internet of Things Infrastructure",
                        content: "Biological and technological adaptations reflect sophisticated systemic responses to environmental pressures.\\n\\nEmpirical research across ecological and sociological disciplines reveals that resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes. When centralized dependencies are mitigated, entire networks withstand acute shocks with minimal systemic degradation. Contemporary scientists apply these organic principles to design climate-resilient cities and fault-tolerant digital architectures.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Resilient systemic structures distribute operational loads across decentralized nodes.", correct_answers: ["TRUE", "True", "T"], evidence: "resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes.", explanation: "Kháº³ng Ä‘á»‹nh trong cÃ¢u há»i trÃ¹ng khá»›p 100% vá»›i ná»™i dung bÃ i Ä‘á»c (TRUE)." },
                            { id: 12, type: "tfng", question: "12. Centralized systems have proven mathematically immune to environmental disruptions.", correct_answers: ["FALSE", "False", "F"], evidence: "When centralized dependencies are mitigated, entire networks withstand acute shocks", explanation: "Há»‡ thá»‘ng táº­p trung dá»… bá»‹ tá»•n thÆ°Æ¡ng, bÃ i Ä‘á»c nÃªu cáº§n giáº£m phá»¥ thuá»™c táº­p trung (FALSE)." },
                            { id: 13, type: "tfng", question: "13. International treaties mandate the global adoption of these biological designs.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "BÃ i Ä‘á»c chá»‰ nháº¯c cÃ¡c nhÃ  khoa há»c Ã¡p dá»¥ng nguyÃªn lÃ½ nÃ y, khÃ´ng Ä‘á» cáº­p Ä‘áº¿n hiá»‡p Æ°á»›c quá»‘c táº¿ nÃ o.", explanation: "ThÃ´ng tin vá» hiá»‡p Æ°á»›c quá»‘c táº¿ khÃ´ng cÃ³ trong bÃ i (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Socio-Economic Transformations in Modern Infrastructure",
                        content: "Urban infrastructure investments shape economic productivity and social mobility across generations.\\n\\nComparative studies demonstrate that high-capacity transit links catalyze commercial vibrancy around transport hubs while curbing suburban sprawling. However, municipal planners must integrate equitable zoning policies to protect existing residents against gentrification-driven displacement.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What primary economic benefit stems from high-capacity transit investments?", options: ["A. Lowering fuel taxes for private vehicles", "B. Stimulating commercial vitality around interconnected hubs", "C. Reducing domestic construction standards"], correct_answers: ["B"], evidence: "catalyze commercial vibrancy around transport hubs while curbing suburban sprawling.", explanation: "ThÃºc Ä‘áº©y sá»± sÃ´i Ä‘á»™ng thÆ°Æ¡ng máº¡i quanh cÃ¡c Ä‘áº§u má»‘i giao thÃ´ng (B)." },
                            { id: 15, type: "choice", question: "15. Why are equitable zoning policies necessary according to municipal planners?", options: ["A. To prevent speculative inflation from displacing established communities", "B. To mandate uniform architectural facades", "C. To outlaw commercial enterprise"], correct_answers: ["A"], evidence: "to protect existing residents against gentrification-driven displacement.", explanation: "Báº£o vá»‡ ngÆ°á»i dÃ¢n khá»i nguy cÆ¡ bá»‹ Ä‘áº©y khá»i nÆ¡i á»Ÿ do phÃ¢n hÃ³a giÃ¡ báº¥t Ä‘á»™ng sáº£n (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Epistemological Foundations of Scientific Discovery",
                        content: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.\\n\\nWhen anomalous experimental findings breach the explanatory confines of established orthodoxy, innovative theoretical models emerge to reconcile contradictory evidence. This philosophical dynamic underscores that scientific truths are continuously refined through rigorous empirical skepticism.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Major scientific breakthroughs occur exclusively through smooth, linear data accumulation.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.", explanation: "CÃ¡ch máº¡ng khoa há»c diá»…n ra qua sá»± chuyá»ƒn dá»‹ch há»‡ hÃ¬nh Ä‘á»™t phÃ¡ chá»© khÃ´ng tuyáº¿n tÃ­nh (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The chart illustrates Youth Unemployment and Vocational Training.\\n\\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Analytical Graphic",
                    model_answer: "The visual illustration delineates the comparative dynamics of the examined sectors over a defined temporal continuum.\\n\\nOverall, a pronounced upward tendency is discernible across the dominant categories, whereas secondary indices exhibited moderate stability or minor contractions. Notably, the foremost sector widened its comparative advantage over the entire timeframe.\\n\\nIn the initial phase, recorded figures stood at relatively equitable baseline levels. However, structural shifts soon propelled the primary metric toward unprecedented highs, culminating in a dominant market posture by the conclusion of the survey horizon.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Rigorous identification of macro trends and accurate comparative reporting.",
                        coherence_cohesion: "Band 9.0: Flawless cohesion and effortless discourse transitions.",
                        lexical_resource: "Band 9.0: Academic register with precise economic terminology.",
                        grammar_accuracy: "Band 9.0: Sophisticated syntactic range without grammatical imperfections."
                    }
                },
                task_2: {
                    prompt: "Relevance of History in Solving Contemporary Crises\\n\\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The contemporary discourse regarding this socio-economic issue has polarized opinions among policy analysts, industry stakeholders, and the general public.\\n\\nOn the one hand, proponents argue that sweeping institutional regulation is indispensable for safeguarding long-term public welfare. In the absence of binding legislative mandates, short-term commercial imperatives frequently compromise public health, ecological equilibrium, and social equity. Regulatory frameworks establish universal ethical guardrails that incentivize innovation while penalizing exploitative practices.\\n\\nOn the other hand, skeptics caution that excessive intervention can stifle entrepreneurial agility, induce capital flight, and create bureaucratic inefficiencies. They maintain that voluntary market mechanisms, technological ingenuity, and consumer advocacy provide more adaptable pathways toward sustainable outcomes.\\n\\nIn conclusion, having scrutinized both perspectives, I maintain that targeted, evidence-based regulation combined with transparent market incentives yields the most pragmatic and enduring benefits for modern civil society.",
                    key_vocab: ["binding legislative mandates", "ecological equilibrium", "entrepreneurial agility", "bureaucratic inefficiencies", "evidence-based regulation"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How do technological advancements influence your personal productivity?", examiner_audio: "How do technological advancements influence your personal productivity?", model_answer: "Technological tools streamline my administrative workflows through cloud synchronization, freeing mental bandwidth for creative and analytical problem-solving." },
                    { question: "Do you prefer working in collaborative groups or independently?", examiner_audio: "Do you prefer working in collaborative groups or independently?", model_answer: "I appreciate a balanced hybrid: collaborative brainstorming generates diverse insights, whereas solitary focus is essential for meticulous execution." }
                ],
                part_2: {
                    cue_card_title: "Describe a significant achievement you accomplished through sustained discipline.",
                    cues: [
                        "What the achievement was and when you accomplished it",
                        "What obstacles you encountered during the journey",
                        "What strategies helped you persevere",
                        "And explain why this accomplishment remains personally meaningful to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount the rigorous process of preparing for my advanced bilingual certification examination last year.\\n\\nBalancing professional commitments with demanding evening study sessions presented substantial cognitive fatigue. To prevail, I structured my preparation into non-negotiable morning blocks, tracking daily incremental milestones rather than fixating on distant outcomes. Achieving high honors reinforced my conviction that relentless incremental consistency inevitably overcomes transient moments of self-doubt.",
                    key_vocab: ["demanding commitments", "cognitive fatigue", "incremental consistency", "transient moments", "unwavering conviction"]
                },
                part_3: [
                    { question: "Why do some individuals struggle to maintain long-term personal resolutions?", examiner_audio: "Why do some individuals struggle to maintain long-term personal resolutions?", model_answer: "Many set unrealistic, perfectionist benchmarks without constructing daily operational habits, resulting in acute burnout whenever initial motivation wanes." },
                    { question: "What role should public educational institutions play in nurturing mental resilience?", examiner_audio: "What role should public educational institutions play in nurturing mental resilience?", model_answer: "Schools must integrate emotional intelligence, stress management, and deliberate failure debriefings into curricula alongside conventional academic subjects." }
                ]
            }
        }
,
        // =================================================================
        // TEST 15: CAMBRIDGE IELTS 15 ACADEMIC
        // =================================================================
        "cam_15": {
            id: "cam_15",
            title: "Cambridge IELTS 15 Academic Test",
            badge: "Cam 15",
            year: "2020 Edition",
            description: "Bá»™ Ä‘á» thi thá»­ Cambridge IELTS 15 Academic chuáº©n hÃ³a 4 ká»¹ nÄƒng Listening, Reading, Writing, Speaking.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: International Career Expo Registration",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Officer: Good day, thank you for contacting our customer service bureau. Let me record your contact information and scheduled dates...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Applicant surname: Mitchell, First name: [______]", correct_answers: ["Daniel", "Dan"], evidence: "My first name is Daniel, D-A-N-I-E-L.", explanation: "NgÆ°á»i gá»i Ä‘Ã¡nh váº§n tÃªn Daniel rÃµ rÃ ng trong Ä‘oáº¡n ghi Ã¢m." },
                            { id: 2, type: "fill", question: "2. Scheduled date: [______] November", correct_answers: ["12th", "12", "twelfth"], evidence: "I would like to confirm my arrival on the 12th of November.", explanation: "NgÃ y Ä‘Æ°á»£c xÃ¡c nháº­n lÃ  ngÃ y 12 thÃ¡ng 11." },
                            { id: 3, type: "fill", question: "3. Contact mobile telephone: 07890 [______]", correct_answers: ["445120", "445 120"], evidence: "You can reach me directly on 07890 445120.", explanation: "Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Æ°á»£c Ä‘á»c tÃ¡ch báº¡ch tá»«ng cá»¥m ba chá»¯ sá»‘." },
                            { id: 4, type: "fill", question: "4. Preferred package tier: [______] membership", correct_answers: ["gold", "premium"], evidence: "I wish to enroll in the gold membership tier.", explanation: "GÃ³i Ä‘Äƒng kÃ½ Ä‘Æ°á»£c chá»n lÃ  gÃ³i Gold." },
                            { id: 5, type: "fill", question: "5. Advance deposit required: Â£[______]", correct_answers: ["60", "sixty"], evidence: "The required upfront security deposit is sixty pounds.", explanation: "Má»©c tiá»n cá»c quy Ä‘á»‹nh lÃ  60 báº£ng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Civic Amenities and Urban Modernization",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Speaker: Welcome citizens to our local redevelopment consultation. Our focus today is balancing heritage preservation with modern infrastructure...",
                        questions: [
                            { id: 6, type: "choice", question: "6. What is the overarching priority of the municipal masterplan?", options: ["A. Expanding commercial skyscraper districts", "B. Enhancing pedestrian accessibility and green spaces", "C. Constructing underground highways"], correct_answers: ["B"], evidence: "Our paramount objective is cultivating human-scale pedestrian avenues bordered by native tree canopies.", explanation: "Æ¯u tiÃªn hÃ ng Ä‘áº§u lÃ  cáº£i thiá»‡n Ä‘Æ°á»ng Ä‘i bá»™ vÃ  máº£ng xanh (B)." },
                            { id: 7, type: "choice", question: "7. When will public feedback surveys officially close?", options: ["A. At the end of next month", "B. In two weeks", "C. By Friday midnight"], correct_answers: ["A"], evidence: "Residents are invited to submit digital feedback until the final day of next month.", explanation: "Háº¡n chÃ³t Ä‘Ã³ng kháº£o sÃ¡t lÃ  cuá»‘i thÃ¡ng sau (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Academic Dissertation Research Evaluation",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Advisor: Your empirical methodology is robust, yet your theoretical framework requires deeper integration of macroeconomic variables...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What recommendation did the faculty advisor offer regarding sample bias?", options: ["A. Collect qualitative interviews across diverse demographic sectors", "B. Narrow the study strictly to undergraduate students", "C. Discard all outlier data points"], correct_answers: ["A"], evidence: "To neutralize regional bias, broaden your qualitative interviews across diverse demographic strata.", explanation: "GiÃ¡o viÃªn hÆ°á»›ng dáº«n khuyÃªn má»Ÿ rá»™ng phá»ng váº¥n Ä‘a dáº¡ng Ä‘á»‘i tÆ°á»£ng (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Technological Paradigms in Modern Applied Science",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Systemic resilience in complex technological architectures depends upon modularity, fault tolerance, and continuous algorithmic auditing...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Core operational resilience is achieved through structural [______].", correct_answers: ["modularity"], evidence: "The primary foundation of failure prevention is structural modularity across subsystems.", explanation: "TÃ­nh kiÃªn cÆ°á»ng cá»‘t lÃµi Ä‘áº¡t Ä‘Æ°á»£c nhá» cáº¥u trÃºc mÃ´-Ä‘un hÃ³a (modularity)." },
                            { id: 10, type: "fill", question: "10. Systems require ongoing algorithmic [______] to verify reliability.", correct_answers: ["auditing", "audits"], evidence: "Engineers mandate continuous algorithmic auditing to prevent catastrophic drift.", explanation: "Há»‡ thá»‘ng Ä‘Ã²i há»i viá»‡c kiá»ƒm toÃ¡n thuáº­t toÃ¡n liÃªn tá»¥c (auditing)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Microplastics in Oceanic Food Chains",
                        content: "Biological and technological adaptations reflect sophisticated systemic responses to environmental pressures.\\n\\nEmpirical research across ecological and sociological disciplines reveals that resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes. When centralized dependencies are mitigated, entire networks withstand acute shocks with minimal systemic degradation. Contemporary scientists apply these organic principles to design climate-resilient cities and fault-tolerant digital architectures.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Resilient systemic structures distribute operational loads across decentralized nodes.", correct_answers: ["TRUE", "True", "T"], evidence: "resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes.", explanation: "Kháº³ng Ä‘á»‹nh trong cÃ¢u há»i trÃ¹ng khá»›p 100% vá»›i ná»™i dung bÃ i Ä‘á»c (TRUE)." },
                            { id: 12, type: "tfng", question: "12. Centralized systems have proven mathematically immune to environmental disruptions.", correct_answers: ["FALSE", "False", "F"], evidence: "When centralized dependencies are mitigated, entire networks withstand acute shocks", explanation: "Há»‡ thá»‘ng táº­p trung dá»… bá»‹ tá»•n thÆ°Æ¡ng, bÃ i Ä‘á»c nÃªu cáº§n giáº£m phá»¥ thuá»™c táº­p trung (FALSE)." },
                            { id: 13, type: "tfng", question: "13. International treaties mandate the global adoption of these biological designs.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "BÃ i Ä‘á»c chá»‰ nháº¯c cÃ¡c nhÃ  khoa há»c Ã¡p dá»¥ng nguyÃªn lÃ½ nÃ y, khÃ´ng Ä‘á» cáº­p Ä‘áº¿n hiá»‡p Æ°á»›c quá»‘c táº¿ nÃ o.", explanation: "ThÃ´ng tin vá» hiá»‡p Æ°á»›c quá»‘c táº¿ khÃ´ng cÃ³ trong bÃ i (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Socio-Economic Transformations in Modern Infrastructure",
                        content: "Urban infrastructure investments shape economic productivity and social mobility across generations.\\n\\nComparative studies demonstrate that high-capacity transit links catalyze commercial vibrancy around transport hubs while curbing suburban sprawling. However, municipal planners must integrate equitable zoning policies to protect existing residents against gentrification-driven displacement.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What primary economic benefit stems from high-capacity transit investments?", options: ["A. Lowering fuel taxes for private vehicles", "B. Stimulating commercial vitality around interconnected hubs", "C. Reducing domestic construction standards"], correct_answers: ["B"], evidence: "catalyze commercial vibrancy around transport hubs while curbing suburban sprawling.", explanation: "ThÃºc Ä‘áº©y sá»± sÃ´i Ä‘á»™ng thÆ°Æ¡ng máº¡i quanh cÃ¡c Ä‘áº§u má»‘i giao thÃ´ng (B)." },
                            { id: 15, type: "choice", question: "15. Why are equitable zoning policies necessary according to municipal planners?", options: ["A. To prevent speculative inflation from displacing established communities", "B. To mandate uniform architectural facades", "C. To outlaw commercial enterprise"], correct_answers: ["A"], evidence: "to protect existing residents against gentrification-driven displacement.", explanation: "Báº£o vá»‡ ngÆ°á»i dÃ¢n khá»i nguy cÆ¡ bá»‹ Ä‘áº©y khá»i nÆ¡i á»Ÿ do phÃ¢n hÃ³a giÃ¡ báº¥t Ä‘á»™ng sáº£n (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Epistemological Foundations of Scientific Discovery",
                        content: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.\\n\\nWhen anomalous experimental findings breach the explanatory confines of established orthodoxy, innovative theoretical models emerge to reconcile contradictory evidence. This philosophical dynamic underscores that scientific truths are continuously refined through rigorous empirical skepticism.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Major scientific breakthroughs occur exclusively through smooth, linear data accumulation.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.", explanation: "CÃ¡ch máº¡ng khoa há»c diá»…n ra qua sá»± chuyá»ƒn dá»‹ch há»‡ hÃ¬nh Ä‘á»™t phÃ¡ chá»© khÃ´ng tuyáº¿n tÃ­nh (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The chart illustrates Online Retail Sales vs Traditional Stores.\\n\\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Analytical Graphic",
                    model_answer: "The visual illustration delineates the comparative dynamics of the examined sectors over a defined temporal continuum.\\n\\nOverall, a pronounced upward tendency is discernible across the dominant categories, whereas secondary indices exhibited moderate stability or minor contractions. Notably, the foremost sector widened its comparative advantage over the entire timeframe.\\n\\nIn the initial phase, recorded figures stood at relatively equitable baseline levels. However, structural shifts soon propelled the primary metric toward unprecedented highs, culminating in a dominant market posture by the conclusion of the survey horizon.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Rigorous identification of macro trends and accurate comparative reporting.",
                        coherence_cohesion: "Band 9.0: Flawless cohesion and effortless discourse transitions.",
                        lexical_resource: "Band 9.0: Academic register with precise economic terminology.",
                        grammar_accuracy: "Band 9.0: Sophisticated syntactic range without grammatical imperfections."
                    }
                },
                task_2: {
                    prompt: "Repatriation of Museum Artifacts to Countries of Origin\\n\\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The contemporary discourse regarding this socio-economic issue has polarized opinions among policy analysts, industry stakeholders, and the general public.\\n\\nOn the one hand, proponents argue that sweeping institutional regulation is indispensable for safeguarding long-term public welfare. In the absence of binding legislative mandates, short-term commercial imperatives frequently compromise public health, ecological equilibrium, and social equity. Regulatory frameworks establish universal ethical guardrails that incentivize innovation while penalizing exploitative practices.\\n\\nOn the other hand, skeptics caution that excessive intervention can stifle entrepreneurial agility, induce capital flight, and create bureaucratic inefficiencies. They maintain that voluntary market mechanisms, technological ingenuity, and consumer advocacy provide more adaptable pathways toward sustainable outcomes.\\n\\nIn conclusion, having scrutinized both perspectives, I maintain that targeted, evidence-based regulation combined with transparent market incentives yields the most pragmatic and enduring benefits for modern civil society.",
                    key_vocab: ["binding legislative mandates", "ecological equilibrium", "entrepreneurial agility", "bureaucratic inefficiencies", "evidence-based regulation"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How do technological advancements influence your personal productivity?", examiner_audio: "How do technological advancements influence your personal productivity?", model_answer: "Technological tools streamline my administrative workflows through cloud synchronization, freeing mental bandwidth for creative and analytical problem-solving." },
                    { question: "Do you prefer working in collaborative groups or independently?", examiner_audio: "Do you prefer working in collaborative groups or independently?", model_answer: "I appreciate a balanced hybrid: collaborative brainstorming generates diverse insights, whereas solitary focus is essential for meticulous execution." }
                ],
                part_2: {
                    cue_card_title: "Describe a significant achievement you accomplished through sustained discipline.",
                    cues: [
                        "What the achievement was and when you accomplished it",
                        "What obstacles you encountered during the journey",
                        "What strategies helped you persevere",
                        "And explain why this accomplishment remains personally meaningful to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount the rigorous process of preparing for my advanced bilingual certification examination last year.\\n\\nBalancing professional commitments with demanding evening study sessions presented substantial cognitive fatigue. To prevail, I structured my preparation into non-negotiable morning blocks, tracking daily incremental milestones rather than fixating on distant outcomes. Achieving high honors reinforced my conviction that relentless incremental consistency inevitably overcomes transient moments of self-doubt.",
                    key_vocab: ["demanding commitments", "cognitive fatigue", "incremental consistency", "transient moments", "unwavering conviction"]
                },
                part_3: [
                    { question: "Why do some individuals struggle to maintain long-term personal resolutions?", examiner_audio: "Why do some individuals struggle to maintain long-term personal resolutions?", model_answer: "Many set unrealistic, perfectionist benchmarks without constructing daily operational habits, resulting in acute burnout whenever initial motivation wanes." },
                    { question: "What role should public educational institutions play in nurturing mental resilience?", examiner_audio: "What role should public educational institutions play in nurturing mental resilience?", model_answer: "Schools must integrate emotional intelligence, stress management, and deliberate failure debriefings into curricula alongside conventional academic subjects." }
                ]
            }
        }
,
        // =================================================================
        // TEST 16: CAMBRIDGE IELTS 16 ACADEMIC
        // =================================================================
        "cam_16": {
            id: "cam_16",
            title: "Cambridge IELTS 16 Academic Test",
            badge: "Cam 16",
            year: "2021 Edition",
            description: "Bá»™ Ä‘á» thi thá»­ Cambridge IELTS 16 Academic chuáº©n hÃ³a 4 ká»¹ nÄƒng Listening, Reading, Writing, Speaking.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Eco-Diving Certification Course",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Officer: Good day, thank you for contacting our customer service bureau. Let me record your contact information and scheduled dates...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Applicant surname: Mitchell, First name: [______]", correct_answers: ["Daniel", "Dan"], evidence: "My first name is Daniel, D-A-N-I-E-L.", explanation: "NgÆ°á»i gá»i Ä‘Ã¡nh váº§n tÃªn Daniel rÃµ rÃ ng trong Ä‘oáº¡n ghi Ã¢m." },
                            { id: 2, type: "fill", question: "2. Scheduled date: [______] November", correct_answers: ["12th", "12", "twelfth"], evidence: "I would like to confirm my arrival on the 12th of November.", explanation: "NgÃ y Ä‘Æ°á»£c xÃ¡c nháº­n lÃ  ngÃ y 12 thÃ¡ng 11." },
                            { id: 3, type: "fill", question: "3. Contact mobile telephone: 07890 [______]", correct_answers: ["445120", "445 120"], evidence: "You can reach me directly on 07890 445120.", explanation: "Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Æ°á»£c Ä‘á»c tÃ¡ch báº¡ch tá»«ng cá»¥m ba chá»¯ sá»‘." },
                            { id: 4, type: "fill", question: "4. Preferred package tier: [______] membership", correct_answers: ["gold", "premium"], evidence: "I wish to enroll in the gold membership tier.", explanation: "GÃ³i Ä‘Äƒng kÃ½ Ä‘Æ°á»£c chá»n lÃ  gÃ³i Gold." },
                            { id: 5, type: "fill", question: "5. Advance deposit required: Â£[______]", correct_answers: ["60", "sixty"], evidence: "The required upfront security deposit is sixty pounds.", explanation: "Má»©c tiá»n cá»c quy Ä‘á»‹nh lÃ  60 báº£ng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Civic Amenities and Urban Modernization",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Speaker: Welcome citizens to our local redevelopment consultation. Our focus today is balancing heritage preservation with modern infrastructure...",
                        questions: [
                            { id: 6, type: "choice", question: "6. What is the overarching priority of the municipal masterplan?", options: ["A. Expanding commercial skyscraper districts", "B. Enhancing pedestrian accessibility and green spaces", "C. Constructing underground highways"], correct_answers: ["B"], evidence: "Our paramount objective is cultivating human-scale pedestrian avenues bordered by native tree canopies.", explanation: "Æ¯u tiÃªn hÃ ng Ä‘áº§u lÃ  cáº£i thiá»‡n Ä‘Æ°á»ng Ä‘i bá»™ vÃ  máº£ng xanh (B)." },
                            { id: 7, type: "choice", question: "7. When will public feedback surveys officially close?", options: ["A. At the end of next month", "B. In two weeks", "C. By Friday midnight"], correct_answers: ["A"], evidence: "Residents are invited to submit digital feedback until the final day of next month.", explanation: "Háº¡n chÃ³t Ä‘Ã³ng kháº£o sÃ¡t lÃ  cuá»‘i thÃ¡ng sau (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Academic Dissertation Research Evaluation",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Advisor: Your empirical methodology is robust, yet your theoretical framework requires deeper integration of macroeconomic variables...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What recommendation did the faculty advisor offer regarding sample bias?", options: ["A. Collect qualitative interviews across diverse demographic sectors", "B. Narrow the study strictly to undergraduate students", "C. Discard all outlier data points"], correct_answers: ["A"], evidence: "To neutralize regional bias, broaden your qualitative interviews across diverse demographic strata.", explanation: "GiÃ¡o viÃªn hÆ°á»›ng dáº«n khuyÃªn má»Ÿ rá»™ng phá»ng váº¥n Ä‘a dáº¡ng Ä‘á»‘i tÆ°á»£ng (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Technological Paradigms in Modern Applied Science",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Systemic resilience in complex technological architectures depends upon modularity, fault tolerance, and continuous algorithmic auditing...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Core operational resilience is achieved through structural [______].", correct_answers: ["modularity"], evidence: "The primary foundation of failure prevention is structural modularity across subsystems.", explanation: "TÃ­nh kiÃªn cÆ°á»ng cá»‘t lÃµi Ä‘áº¡t Ä‘Æ°á»£c nhá» cáº¥u trÃºc mÃ´-Ä‘un hÃ³a (modularity)." },
                            { id: 10, type: "fill", question: "10. Systems require ongoing algorithmic [______] to verify reliability.", correct_answers: ["auditing", "audits"], evidence: "Engineers mandate continuous algorithmic auditing to prevent catastrophic drift.", explanation: "Há»‡ thá»‘ng Ä‘Ã²i há»i viá»‡c kiá»ƒm toÃ¡n thuáº­t toÃ¡n liÃªn tá»¥c (auditing)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Alternative Plant-Based Protein Security",
                        content: "Biological and technological adaptations reflect sophisticated systemic responses to environmental pressures.\\n\\nEmpirical research across ecological and sociological disciplines reveals that resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes. When centralized dependencies are mitigated, entire networks withstand acute shocks with minimal systemic degradation. Contemporary scientists apply these organic principles to design climate-resilient cities and fault-tolerant digital architectures.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Resilient systemic structures distribute operational loads across decentralized nodes.", correct_answers: ["TRUE", "True", "T"], evidence: "resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes.", explanation: "Kháº³ng Ä‘á»‹nh trong cÃ¢u há»i trÃ¹ng khá»›p 100% vá»›i ná»™i dung bÃ i Ä‘á»c (TRUE)." },
                            { id: 12, type: "tfng", question: "12. Centralized systems have proven mathematically immune to environmental disruptions.", correct_answers: ["FALSE", "False", "F"], evidence: "When centralized dependencies are mitigated, entire networks withstand acute shocks", explanation: "Há»‡ thá»‘ng táº­p trung dá»… bá»‹ tá»•n thÆ°Æ¡ng, bÃ i Ä‘á»c nÃªu cáº§n giáº£m phá»¥ thuá»™c táº­p trung (FALSE)." },
                            { id: 13, type: "tfng", question: "13. International treaties mandate the global adoption of these biological designs.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "BÃ i Ä‘á»c chá»‰ nháº¯c cÃ¡c nhÃ  khoa há»c Ã¡p dá»¥ng nguyÃªn lÃ½ nÃ y, khÃ´ng Ä‘á» cáº­p Ä‘áº¿n hiá»‡p Æ°á»›c quá»‘c táº¿ nÃ o.", explanation: "ThÃ´ng tin vá» hiá»‡p Æ°á»›c quá»‘c táº¿ khÃ´ng cÃ³ trong bÃ i (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Socio-Economic Transformations in Modern Infrastructure",
                        content: "Urban infrastructure investments shape economic productivity and social mobility across generations.\\n\\nComparative studies demonstrate that high-capacity transit links catalyze commercial vibrancy around transport hubs while curbing suburban sprawling. However, municipal planners must integrate equitable zoning policies to protect existing residents against gentrification-driven displacement.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What primary economic benefit stems from high-capacity transit investments?", options: ["A. Lowering fuel taxes for private vehicles", "B. Stimulating commercial vitality around interconnected hubs", "C. Reducing domestic construction standards"], correct_answers: ["B"], evidence: "catalyze commercial vibrancy around transport hubs while curbing suburban sprawling.", explanation: "ThÃºc Ä‘áº©y sá»± sÃ´i Ä‘á»™ng thÆ°Æ¡ng máº¡i quanh cÃ¡c Ä‘áº§u má»‘i giao thÃ´ng (B)." },
                            { id: 15, type: "choice", question: "15. Why are equitable zoning policies necessary according to municipal planners?", options: ["A. To prevent speculative inflation from displacing established communities", "B. To mandate uniform architectural facades", "C. To outlaw commercial enterprise"], correct_answers: ["A"], evidence: "to protect existing residents against gentrification-driven displacement.", explanation: "Báº£o vá»‡ ngÆ°á»i dÃ¢n khá»i nguy cÆ¡ bá»‹ Ä‘áº©y khá»i nÆ¡i á»Ÿ do phÃ¢n hÃ³a giÃ¡ báº¥t Ä‘á»™ng sáº£n (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Epistemological Foundations of Scientific Discovery",
                        content: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.\\n\\nWhen anomalous experimental findings breach the explanatory confines of established orthodoxy, innovative theoretical models emerge to reconcile contradictory evidence. This philosophical dynamic underscores that scientific truths are continuously refined through rigorous empirical skepticism.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Major scientific breakthroughs occur exclusively through smooth, linear data accumulation.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.", explanation: "CÃ¡ch máº¡ng khoa há»c diá»…n ra qua sá»± chuyá»ƒn dá»‹ch há»‡ hÃ¬nh Ä‘á»™t phÃ¡ chá»© khÃ´ng tuyáº¿n tÃ­nh (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The chart illustrates University Graduation Rates Across Faculties.\\n\\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Analytical Graphic",
                    model_answer: "The visual illustration delineates the comparative dynamics of the examined sectors over a defined temporal continuum.\\n\\nOverall, a pronounced upward tendency is discernible across the dominant categories, whereas secondary indices exhibited moderate stability or minor contractions. Notably, the foremost sector widened its comparative advantage over the entire timeframe.\\n\\nIn the initial phase, recorded figures stood at relatively equitable baseline levels. However, structural shifts soon propelled the primary metric toward unprecedented highs, culminating in a dominant market posture by the conclusion of the survey horizon.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Rigorous identification of macro trends and accurate comparative reporting.",
                        coherence_cohesion: "Band 9.0: Flawless cohesion and effortless discourse transitions.",
                        lexical_resource: "Band 9.0: Academic register with precise economic terminology.",
                        grammar_accuracy: "Band 9.0: Sophisticated syntactic range without grammatical imperfections."
                    }
                },
                task_2: {
                    prompt: "Domestic Poverty Alleviation vs Foreign Aid Budgets\\n\\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The contemporary discourse regarding this socio-economic issue has polarized opinions among policy analysts, industry stakeholders, and the general public.\\n\\nOn the one hand, proponents argue that sweeping institutional regulation is indispensable for safeguarding long-term public welfare. In the absence of binding legislative mandates, short-term commercial imperatives frequently compromise public health, ecological equilibrium, and social equity. Regulatory frameworks establish universal ethical guardrails that incentivize innovation while penalizing exploitative practices.\\n\\nOn the other hand, skeptics caution that excessive intervention can stifle entrepreneurial agility, induce capital flight, and create bureaucratic inefficiencies. They maintain that voluntary market mechanisms, technological ingenuity, and consumer advocacy provide more adaptable pathways toward sustainable outcomes.\\n\\nIn conclusion, having scrutinized both perspectives, I maintain that targeted, evidence-based regulation combined with transparent market incentives yields the most pragmatic and enduring benefits for modern civil society.",
                    key_vocab: ["binding legislative mandates", "ecological equilibrium", "entrepreneurial agility", "bureaucratic inefficiencies", "evidence-based regulation"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How do technological advancements influence your personal productivity?", examiner_audio: "How do technological advancements influence your personal productivity?", model_answer: "Technological tools streamline my administrative workflows through cloud synchronization, freeing mental bandwidth for creative and analytical problem-solving." },
                    { question: "Do you prefer working in collaborative groups or independently?", examiner_audio: "Do you prefer working in collaborative groups or independently?", model_answer: "I appreciate a balanced hybrid: collaborative brainstorming generates diverse insights, whereas solitary focus is essential for meticulous execution." }
                ],
                part_2: {
                    cue_card_title: "Describe a significant achievement you accomplished through sustained discipline.",
                    cues: [
                        "What the achievement was and when you accomplished it",
                        "What obstacles you encountered during the journey",
                        "What strategies helped you persevere",
                        "And explain why this accomplishment remains personally meaningful to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount the rigorous process of preparing for my advanced bilingual certification examination last year.\\n\\nBalancing professional commitments with demanding evening study sessions presented substantial cognitive fatigue. To prevail, I structured my preparation into non-negotiable morning blocks, tracking daily incremental milestones rather than fixating on distant outcomes. Achieving high honors reinforced my conviction that relentless incremental consistency inevitably overcomes transient moments of self-doubt.",
                    key_vocab: ["demanding commitments", "cognitive fatigue", "incremental consistency", "transient moments", "unwavering conviction"]
                },
                part_3: [
                    { question: "Why do some individuals struggle to maintain long-term personal resolutions?", examiner_audio: "Why do some individuals struggle to maintain long-term personal resolutions?", model_answer: "Many set unrealistic, perfectionist benchmarks without constructing daily operational habits, resulting in acute burnout whenever initial motivation wanes." },
                    { question: "What role should public educational institutions play in nurturing mental resilience?", examiner_audio: "What role should public educational institutions play in nurturing mental resilience?", model_answer: "Schools must integrate emotional intelligence, stress management, and deliberate failure debriefings into curricula alongside conventional academic subjects." }
                ]
            }
        }
,
        // =================================================================
        // TEST 17: CAMBRIDGE IELTS 17 ACADEMIC
        // =================================================================
        "cam_17": {
            id: "cam_17",
            title: "Cambridge IELTS 17 Academic Test",
            badge: "Cam 17",
            year: "2022 Edition",
            description: "Bá»™ Ä‘á» thi thá»­ Cambridge IELTS 17 Academic chuáº©n hÃ³a 4 ká»¹ nÄƒng Listening, Reading, Writing, Speaking.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Wildlife Nature Photography Workshop",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Officer: Good day, thank you for contacting our customer service bureau. Let me record your contact information and scheduled dates...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Applicant surname: Mitchell, First name: [______]", correct_answers: ["Daniel", "Dan"], evidence: "My first name is Daniel, D-A-N-I-E-L.", explanation: "NgÆ°á»i gá»i Ä‘Ã¡nh váº§n tÃªn Daniel rÃµ rÃ ng trong Ä‘oáº¡n ghi Ã¢m." },
                            { id: 2, type: "fill", question: "2. Scheduled date: [______] November", correct_answers: ["12th", "12", "twelfth"], evidence: "I would like to confirm my arrival on the 12th of November.", explanation: "NgÃ y Ä‘Æ°á»£c xÃ¡c nháº­n lÃ  ngÃ y 12 thÃ¡ng 11." },
                            { id: 3, type: "fill", question: "3. Contact mobile telephone: 07890 [______]", correct_answers: ["445120", "445 120"], evidence: "You can reach me directly on 07890 445120.", explanation: "Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Æ°á»£c Ä‘á»c tÃ¡ch báº¡ch tá»«ng cá»¥m ba chá»¯ sá»‘." },
                            { id: 4, type: "fill", question: "4. Preferred package tier: [______] membership", correct_answers: ["gold", "premium"], evidence: "I wish to enroll in the gold membership tier.", explanation: "GÃ³i Ä‘Äƒng kÃ½ Ä‘Æ°á»£c chá»n lÃ  gÃ³i Gold." },
                            { id: 5, type: "fill", question: "5. Advance deposit required: Â£[______]", correct_answers: ["60", "sixty"], evidence: "The required upfront security deposit is sixty pounds.", explanation: "Má»©c tiá»n cá»c quy Ä‘á»‹nh lÃ  60 báº£ng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Civic Amenities and Urban Modernization",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Speaker: Welcome citizens to our local redevelopment consultation. Our focus today is balancing heritage preservation with modern infrastructure...",
                        questions: [
                            { id: 6, type: "choice", question: "6. What is the overarching priority of the municipal masterplan?", options: ["A. Expanding commercial skyscraper districts", "B. Enhancing pedestrian accessibility and green spaces", "C. Constructing underground highways"], correct_answers: ["B"], evidence: "Our paramount objective is cultivating human-scale pedestrian avenues bordered by native tree canopies.", explanation: "Æ¯u tiÃªn hÃ ng Ä‘áº§u lÃ  cáº£i thiá»‡n Ä‘Æ°á»ng Ä‘i bá»™ vÃ  máº£ng xanh (B)." },
                            { id: 7, type: "choice", question: "7. When will public feedback surveys officially close?", options: ["A. At the end of next month", "B. In two weeks", "C. By Friday midnight"], correct_answers: ["A"], evidence: "Residents are invited to submit digital feedback until the final day of next month.", explanation: "Háº¡n chÃ³t Ä‘Ã³ng kháº£o sÃ¡t lÃ  cuá»‘i thÃ¡ng sau (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Academic Dissertation Research Evaluation",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Advisor: Your empirical methodology is robust, yet your theoretical framework requires deeper integration of macroeconomic variables...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What recommendation did the faculty advisor offer regarding sample bias?", options: ["A. Collect qualitative interviews across diverse demographic sectors", "B. Narrow the study strictly to undergraduate students", "C. Discard all outlier data points"], correct_answers: ["A"], evidence: "To neutralize regional bias, broaden your qualitative interviews across diverse demographic strata.", explanation: "GiÃ¡o viÃªn hÆ°á»›ng dáº«n khuyÃªn má»Ÿ rá»™ng phá»ng váº¥n Ä‘a dáº¡ng Ä‘á»‘i tÆ°á»£ng (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Technological Paradigms in Modern Applied Science",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Systemic resilience in complex technological architectures depends upon modularity, fault tolerance, and continuous algorithmic auditing...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Core operational resilience is achieved through structural [______].", correct_answers: ["modularity"], evidence: "The primary foundation of failure prevention is structural modularity across subsystems.", explanation: "TÃ­nh kiÃªn cÆ°á»ng cá»‘t lÃµi Ä‘áº¡t Ä‘Æ°á»£c nhá» cáº¥u trÃºc mÃ´-Ä‘un hÃ³a (modularity)." },
                            { id: 10, type: "fill", question: "10. Systems require ongoing algorithmic [______] to verify reliability.", correct_answers: ["auditing", "audits"], evidence: "Engineers mandate continuous algorithmic auditing to prevent catastrophic drift.", explanation: "Há»‡ thá»‘ng Ä‘Ã²i há»i viá»‡c kiá»ƒm toÃ¡n thuáº­t toÃ¡n liÃªn tá»¥c (auditing)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Computer Vision in Autonomous Vehicles",
                        content: "Biological and technological adaptations reflect sophisticated systemic responses to environmental pressures.\\n\\nEmpirical research across ecological and sociological disciplines reveals that resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes. When centralized dependencies are mitigated, entire networks withstand acute shocks with minimal systemic degradation. Contemporary scientists apply these organic principles to design climate-resilient cities and fault-tolerant digital architectures.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Resilient systemic structures distribute operational loads across decentralized nodes.", correct_answers: ["TRUE", "True", "T"], evidence: "resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes.", explanation: "Kháº³ng Ä‘á»‹nh trong cÃ¢u há»i trÃ¹ng khá»›p 100% vá»›i ná»™i dung bÃ i Ä‘á»c (TRUE)." },
                            { id: 12, type: "tfng", question: "12. Centralized systems have proven mathematically immune to environmental disruptions.", correct_answers: ["FALSE", "False", "F"], evidence: "When centralized dependencies are mitigated, entire networks withstand acute shocks", explanation: "Há»‡ thá»‘ng táº­p trung dá»… bá»‹ tá»•n thÆ°Æ¡ng, bÃ i Ä‘á»c nÃªu cáº§n giáº£m phá»¥ thuá»™c táº­p trung (FALSE)." },
                            { id: 13, type: "tfng", question: "13. International treaties mandate the global adoption of these biological designs.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "BÃ i Ä‘á»c chá»‰ nháº¯c cÃ¡c nhÃ  khoa há»c Ã¡p dá»¥ng nguyÃªn lÃ½ nÃ y, khÃ´ng Ä‘á» cáº­p Ä‘áº¿n hiá»‡p Æ°á»›c quá»‘c táº¿ nÃ o.", explanation: "ThÃ´ng tin vá» hiá»‡p Æ°á»›c quá»‘c táº¿ khÃ´ng cÃ³ trong bÃ i (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Socio-Economic Transformations in Modern Infrastructure",
                        content: "Urban infrastructure investments shape economic productivity and social mobility across generations.\\n\\nComparative studies demonstrate that high-capacity transit links catalyze commercial vibrancy around transport hubs while curbing suburban sprawling. However, municipal planners must integrate equitable zoning policies to protect existing residents against gentrification-driven displacement.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What primary economic benefit stems from high-capacity transit investments?", options: ["A. Lowering fuel taxes for private vehicles", "B. Stimulating commercial vitality around interconnected hubs", "C. Reducing domestic construction standards"], correct_answers: ["B"], evidence: "catalyze commercial vibrancy around transport hubs while curbing suburban sprawling.", explanation: "ThÃºc Ä‘áº©y sá»± sÃ´i Ä‘á»™ng thÆ°Æ¡ng máº¡i quanh cÃ¡c Ä‘áº§u má»‘i giao thÃ´ng (B)." },
                            { id: 15, type: "choice", question: "15. Why are equitable zoning policies necessary according to municipal planners?", options: ["A. To prevent speculative inflation from displacing established communities", "B. To mandate uniform architectural facades", "C. To outlaw commercial enterprise"], correct_answers: ["A"], evidence: "to protect existing residents against gentrification-driven displacement.", explanation: "Báº£o vá»‡ ngÆ°á»i dÃ¢n khá»i nguy cÆ¡ bá»‹ Ä‘áº©y khá»i nÆ¡i á»Ÿ do phÃ¢n hÃ³a giÃ¡ báº¥t Ä‘á»™ng sáº£n (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Epistemological Foundations of Scientific Discovery",
                        content: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.\\n\\nWhen anomalous experimental findings breach the explanatory confines of established orthodoxy, innovative theoretical models emerge to reconcile contradictory evidence. This philosophical dynamic underscores that scientific truths are continuously refined through rigorous empirical skepticism.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Major scientific breakthroughs occur exclusively through smooth, linear data accumulation.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.", explanation: "CÃ¡ch máº¡ng khoa há»c diá»…n ra qua sá»± chuyá»ƒn dá»‹ch há»‡ hÃ¬nh Ä‘á»™t phÃ¡ chá»© khÃ´ng tuyáº¿n tÃ­nh (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The chart illustrates Wind and Solar Renewable Output Growth.\\n\\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Analytical Graphic",
                    model_answer: "The visual illustration delineates the comparative dynamics of the examined sectors over a defined temporal continuum.\\n\\nOverall, a pronounced upward tendency is discernible across the dominant categories, whereas secondary indices exhibited moderate stability or minor contractions. Notably, the foremost sector widened its comparative advantage over the entire timeframe.\\n\\nIn the initial phase, recorded figures stood at relatively equitable baseline levels. However, structural shifts soon propelled the primary metric toward unprecedented highs, culminating in a dominant market posture by the conclusion of the survey horizon.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Rigorous identification of macro trends and accurate comparative reporting.",
                        coherence_cohesion: "Band 9.0: Flawless cohesion and effortless discourse transitions.",
                        lexical_resource: "Band 9.0: Academic register with precise economic terminology.",
                        grammar_accuracy: "Band 9.0: Sophisticated syntactic range without grammatical imperfections."
                    }
                },
                task_2: {
                    prompt: "Gender Parity Mandates in University STEM Admissions\\n\\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The contemporary discourse regarding this socio-economic issue has polarized opinions among policy analysts, industry stakeholders, and the general public.\\n\\nOn the one hand, proponents argue that sweeping institutional regulation is indispensable for safeguarding long-term public welfare. In the absence of binding legislative mandates, short-term commercial imperatives frequently compromise public health, ecological equilibrium, and social equity. Regulatory frameworks establish universal ethical guardrails that incentivize innovation while penalizing exploitative practices.\\n\\nOn the other hand, skeptics caution that excessive intervention can stifle entrepreneurial agility, induce capital flight, and create bureaucratic inefficiencies. They maintain that voluntary market mechanisms, technological ingenuity, and consumer advocacy provide more adaptable pathways toward sustainable outcomes.\\n\\nIn conclusion, having scrutinized both perspectives, I maintain that targeted, evidence-based regulation combined with transparent market incentives yields the most pragmatic and enduring benefits for modern civil society.",
                    key_vocab: ["binding legislative mandates", "ecological equilibrium", "entrepreneurial agility", "bureaucratic inefficiencies", "evidence-based regulation"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How do technological advancements influence your personal productivity?", examiner_audio: "How do technological advancements influence your personal productivity?", model_answer: "Technological tools streamline my administrative workflows through cloud synchronization, freeing mental bandwidth for creative and analytical problem-solving." },
                    { question: "Do you prefer working in collaborative groups or independently?", examiner_audio: "Do you prefer working in collaborative groups or independently?", model_answer: "I appreciate a balanced hybrid: collaborative brainstorming generates diverse insights, whereas solitary focus is essential for meticulous execution." }
                ],
                part_2: {
                    cue_card_title: "Describe a significant achievement you accomplished through sustained discipline.",
                    cues: [
                        "What the achievement was and when you accomplished it",
                        "What obstacles you encountered during the journey",
                        "What strategies helped you persevere",
                        "And explain why this accomplishment remains personally meaningful to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount the rigorous process of preparing for my advanced bilingual certification examination last year.\\n\\nBalancing professional commitments with demanding evening study sessions presented substantial cognitive fatigue. To prevail, I structured my preparation into non-negotiable morning blocks, tracking daily incremental milestones rather than fixating on distant outcomes. Achieving high honors reinforced my conviction that relentless incremental consistency inevitably overcomes transient moments of self-doubt.",
                    key_vocab: ["demanding commitments", "cognitive fatigue", "incremental consistency", "transient moments", "unwavering conviction"]
                },
                part_3: [
                    { question: "Why do some individuals struggle to maintain long-term personal resolutions?", examiner_audio: "Why do some individuals struggle to maintain long-term personal resolutions?", model_answer: "Many set unrealistic, perfectionist benchmarks without constructing daily operational habits, resulting in acute burnout whenever initial motivation wanes." },
                    { question: "What role should public educational institutions play in nurturing mental resilience?", examiner_audio: "What role should public educational institutions play in nurturing mental resilience?", model_answer: "Schools must integrate emotional intelligence, stress management, and deliberate failure debriefings into curricula alongside conventional academic subjects." }
                ]
            }
        }
,
        // =================================================================
        // TEST 18: CAMBRIDGE IELTS 18 ACADEMIC
        // =================================================================
        "cam_18": {
            id: "cam_18",
            title: "Cambridge IELTS 18 Academic Test",
            badge: "Cam 18",
            year: "2023 Edition",
            description: "Bá»™ Ä‘á» thi thá»­ Cambridge IELTS 18 Academic chuáº©n hÃ³a 4 ká»¹ nÄƒng Listening, Reading, Writing, Speaking.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Aurora Borealis Viewing Tour",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Officer: Good day, thank you for contacting our customer service bureau. Let me record your contact information and scheduled dates...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Applicant surname: Mitchell, First name: [______]", correct_answers: ["Daniel", "Dan"], evidence: "My first name is Daniel, D-A-N-I-E-L.", explanation: "NgÆ°á»i gá»i Ä‘Ã¡nh váº§n tÃªn Daniel rÃµ rÃ ng trong Ä‘oáº¡n ghi Ã¢m." },
                            { id: 2, type: "fill", question: "2. Scheduled date: [______] November", correct_answers: ["12th", "12", "twelfth"], evidence: "I would like to confirm my arrival on the 12th of November.", explanation: "NgÃ y Ä‘Æ°á»£c xÃ¡c nháº­n lÃ  ngÃ y 12 thÃ¡ng 11." },
                            { id: 3, type: "fill", question: "3. Contact mobile telephone: 07890 [______]", correct_answers: ["445120", "445 120"], evidence: "You can reach me directly on 07890 445120.", explanation: "Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Æ°á»£c Ä‘á»c tÃ¡ch báº¡ch tá»«ng cá»¥m ba chá»¯ sá»‘." },
                            { id: 4, type: "fill", question: "4. Preferred package tier: [______] membership", correct_answers: ["gold", "premium"], evidence: "I wish to enroll in the gold membership tier.", explanation: "GÃ³i Ä‘Äƒng kÃ½ Ä‘Æ°á»£c chá»n lÃ  gÃ³i Gold." },
                            { id: 5, type: "fill", question: "5. Advance deposit required: Â£[______]", correct_answers: ["60", "sixty"], evidence: "The required upfront security deposit is sixty pounds.", explanation: "Má»©c tiá»n cá»c quy Ä‘á»‹nh lÃ  60 báº£ng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Civic Amenities and Urban Modernization",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Speaker: Welcome citizens to our local redevelopment consultation. Our focus today is balancing heritage preservation with modern infrastructure...",
                        questions: [
                            { id: 6, type: "choice", question: "6. What is the overarching priority of the municipal masterplan?", options: ["A. Expanding commercial skyscraper districts", "B. Enhancing pedestrian accessibility and green spaces", "C. Constructing underground highways"], correct_answers: ["B"], evidence: "Our paramount objective is cultivating human-scale pedestrian avenues bordered by native tree canopies.", explanation: "Æ¯u tiÃªn hÃ ng Ä‘áº§u lÃ  cáº£i thiá»‡n Ä‘Æ°á»ng Ä‘i bá»™ vÃ  máº£ng xanh (B)." },
                            { id: 7, type: "choice", question: "7. When will public feedback surveys officially close?", options: ["A. At the end of next month", "B. In two weeks", "C. By Friday midnight"], correct_answers: ["A"], evidence: "Residents are invited to submit digital feedback until the final day of next month.", explanation: "Háº¡n chÃ³t Ä‘Ã³ng kháº£o sÃ¡t lÃ  cuá»‘i thÃ¡ng sau (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Academic Dissertation Research Evaluation",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Advisor: Your empirical methodology is robust, yet your theoretical framework requires deeper integration of macroeconomic variables...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What recommendation did the faculty advisor offer regarding sample bias?", options: ["A. Collect qualitative interviews across diverse demographic sectors", "B. Narrow the study strictly to undergraduate students", "C. Discard all outlier data points"], correct_answers: ["A"], evidence: "To neutralize regional bias, broaden your qualitative interviews across diverse demographic strata.", explanation: "GiÃ¡o viÃªn hÆ°á»›ng dáº«n khuyÃªn má»Ÿ rá»™ng phá»ng váº¥n Ä‘a dáº¡ng Ä‘á»‘i tÆ°á»£ng (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Technological Paradigms in Modern Applied Science",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Systemic resilience in complex technological architectures depends upon modularity, fault tolerance, and continuous algorithmic auditing...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Core operational resilience is achieved through structural [______].", correct_answers: ["modularity"], evidence: "The primary foundation of failure prevention is structural modularity across subsystems.", explanation: "TÃ­nh kiÃªn cÆ°á»ng cá»‘t lÃµi Ä‘áº¡t Ä‘Æ°á»£c nhá» cáº¥u trÃºc mÃ´-Ä‘un hÃ³a (modularity)." },
                            { id: 10, type: "fill", question: "10. Systems require ongoing algorithmic [______] to verify reliability.", correct_answers: ["auditing", "audits"], evidence: "Engineers mandate continuous algorithmic auditing to prevent catastrophic drift.", explanation: "Há»‡ thá»‘ng Ä‘Ã²i há»i viá»‡c kiá»ƒm toÃ¡n thuáº­t toÃ¡n liÃªn tá»¥c (auditing)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Vertical Hydroponics in Dense Metropolises",
                        content: "Biological and technological adaptations reflect sophisticated systemic responses to environmental pressures.\\n\\nEmpirical research across ecological and sociological disciplines reveals that resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes. When centralized dependencies are mitigated, entire networks withstand acute shocks with minimal systemic degradation. Contemporary scientists apply these organic principles to design climate-resilient cities and fault-tolerant digital architectures.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Resilient systemic structures distribute operational loads across decentralized nodes.", correct_answers: ["TRUE", "True", "T"], evidence: "resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes.", explanation: "Kháº³ng Ä‘á»‹nh trong cÃ¢u há»i trÃ¹ng khá»›p 100% vá»›i ná»™i dung bÃ i Ä‘á»c (TRUE)." },
                            { id: 12, type: "tfng", question: "12. Centralized systems have proven mathematically immune to environmental disruptions.", correct_answers: ["FALSE", "False", "F"], evidence: "When centralized dependencies are mitigated, entire networks withstand acute shocks", explanation: "Há»‡ thá»‘ng táº­p trung dá»… bá»‹ tá»•n thÆ°Æ¡ng, bÃ i Ä‘á»c nÃªu cáº§n giáº£m phá»¥ thuá»™c táº­p trung (FALSE)." },
                            { id: 13, type: "tfng", question: "13. International treaties mandate the global adoption of these biological designs.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "BÃ i Ä‘á»c chá»‰ nháº¯c cÃ¡c nhÃ  khoa há»c Ã¡p dá»¥ng nguyÃªn lÃ½ nÃ y, khÃ´ng Ä‘á» cáº­p Ä‘áº¿n hiá»‡p Æ°á»›c quá»‘c táº¿ nÃ o.", explanation: "ThÃ´ng tin vá» hiá»‡p Æ°á»›c quá»‘c táº¿ khÃ´ng cÃ³ trong bÃ i (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Socio-Economic Transformations in Modern Infrastructure",
                        content: "Urban infrastructure investments shape economic productivity and social mobility across generations.\\n\\nComparative studies demonstrate that high-capacity transit links catalyze commercial vibrancy around transport hubs while curbing suburban sprawling. However, municipal planners must integrate equitable zoning policies to protect existing residents against gentrification-driven displacement.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What primary economic benefit stems from high-capacity transit investments?", options: ["A. Lowering fuel taxes for private vehicles", "B. Stimulating commercial vitality around interconnected hubs", "C. Reducing domestic construction standards"], correct_answers: ["B"], evidence: "catalyze commercial vibrancy around transport hubs while curbing suburban sprawling.", explanation: "ThÃºc Ä‘áº©y sá»± sÃ´i Ä‘á»™ng thÆ°Æ¡ng máº¡i quanh cÃ¡c Ä‘áº§u má»‘i giao thÃ´ng (B)." },
                            { id: 15, type: "choice", question: "15. Why are equitable zoning policies necessary according to municipal planners?", options: ["A. To prevent speculative inflation from displacing established communities", "B. To mandate uniform architectural facades", "C. To outlaw commercial enterprise"], correct_answers: ["A"], evidence: "to protect existing residents against gentrification-driven displacement.", explanation: "Báº£o vá»‡ ngÆ°á»i dÃ¢n khá»i nguy cÆ¡ bá»‹ Ä‘áº©y khá»i nÆ¡i á»Ÿ do phÃ¢n hÃ³a giÃ¡ báº¥t Ä‘á»™ng sáº£n (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Epistemological Foundations of Scientific Discovery",
                        content: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.\\n\\nWhen anomalous experimental findings breach the explanatory confines of established orthodoxy, innovative theoretical models emerge to reconcile contradictory evidence. This philosophical dynamic underscores that scientific truths are continuously refined through rigorous empirical skepticism.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Major scientific breakthroughs occur exclusively through smooth, linear data accumulation.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.", explanation: "CÃ¡ch máº¡ng khoa há»c diá»…n ra qua sá»± chuyá»ƒn dá»‹ch há»‡ hÃ¬nh Ä‘á»™t phÃ¡ chá»© khÃ´ng tuyáº¿n tÃ­nh (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The chart illustrates Municipal Water Consumption by Industry.\\n\\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Analytical Graphic",
                    model_answer: "The visual illustration delineates the comparative dynamics of the examined sectors over a defined temporal continuum.\\n\\nOverall, a pronounced upward tendency is discernible across the dominant categories, whereas secondary indices exhibited moderate stability or minor contractions. Notably, the foremost sector widened its comparative advantage over the entire timeframe.\\n\\nIn the initial phase, recorded figures stood at relatively equitable baseline levels. However, structural shifts soon propelled the primary metric toward unprecedented highs, culminating in a dominant market posture by the conclusion of the survey horizon.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Rigorous identification of macro trends and accurate comparative reporting.",
                        coherence_cohesion: "Band 9.0: Flawless cohesion and effortless discourse transitions.",
                        lexical_resource: "Band 9.0: Academic register with precise economic terminology.",
                        grammar_accuracy: "Band 9.0: Sophisticated syntactic range without grammatical imperfections."
                    }
                },
                task_2: {
                    prompt: "Socio-Economic Ramifications of Aging Demographics\\n\\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The contemporary discourse regarding this socio-economic issue has polarized opinions among policy analysts, industry stakeholders, and the general public.\\n\\nOn the one hand, proponents argue that sweeping institutional regulation is indispensable for safeguarding long-term public welfare. In the absence of binding legislative mandates, short-term commercial imperatives frequently compromise public health, ecological equilibrium, and social equity. Regulatory frameworks establish universal ethical guardrails that incentivize innovation while penalizing exploitative practices.\\n\\nOn the other hand, skeptics caution that excessive intervention can stifle entrepreneurial agility, induce capital flight, and create bureaucratic inefficiencies. They maintain that voluntary market mechanisms, technological ingenuity, and consumer advocacy provide more adaptable pathways toward sustainable outcomes.\\n\\nIn conclusion, having scrutinized both perspectives, I maintain that targeted, evidence-based regulation combined with transparent market incentives yields the most pragmatic and enduring benefits for modern civil society.",
                    key_vocab: ["binding legislative mandates", "ecological equilibrium", "entrepreneurial agility", "bureaucratic inefficiencies", "evidence-based regulation"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How do technological advancements influence your personal productivity?", examiner_audio: "How do technological advancements influence your personal productivity?", model_answer: "Technological tools streamline my administrative workflows through cloud synchronization, freeing mental bandwidth for creative and analytical problem-solving." },
                    { question: "Do you prefer working in collaborative groups or independently?", examiner_audio: "Do you prefer working in collaborative groups or independently?", model_answer: "I appreciate a balanced hybrid: collaborative brainstorming generates diverse insights, whereas solitary focus is essential for meticulous execution." }
                ],
                part_2: {
                    cue_card_title: "Describe a significant achievement you accomplished through sustained discipline.",
                    cues: [
                        "What the achievement was and when you accomplished it",
                        "What obstacles you encountered during the journey",
                        "What strategies helped you persevere",
                        "And explain why this accomplishment remains personally meaningful to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount the rigorous process of preparing for my advanced bilingual certification examination last year.\\n\\nBalancing professional commitments with demanding evening study sessions presented substantial cognitive fatigue. To prevail, I structured my preparation into non-negotiable morning blocks, tracking daily incremental milestones rather than fixating on distant outcomes. Achieving high honors reinforced my conviction that relentless incremental consistency inevitably overcomes transient moments of self-doubt.",
                    key_vocab: ["demanding commitments", "cognitive fatigue", "incremental consistency", "transient moments", "unwavering conviction"]
                },
                part_3: [
                    { question: "Why do some individuals struggle to maintain long-term personal resolutions?", examiner_audio: "Why do some individuals struggle to maintain long-term personal resolutions?", model_answer: "Many set unrealistic, perfectionist benchmarks without constructing daily operational habits, resulting in acute burnout whenever initial motivation wanes." },
                    { question: "What role should public educational institutions play in nurturing mental resilience?", examiner_audio: "What role should public educational institutions play in nurturing mental resilience?", model_answer: "Schools must integrate emotional intelligence, stress management, and deliberate failure debriefings into curricula alongside conventional academic subjects." }
                ]
            }
        }
,
        // =================================================================
        // TEST 19: CAMBRIDGE IELTS 19 ACADEMIC
        // =================================================================
        "cam_19": {
            id: "cam_19",
            title: "Cambridge IELTS 19 Academic Test",
            badge: "Cam 19",
            year: "2024 Edition",
            description: "Bá»™ Ä‘á» thi thá»­ Cambridge IELTS 19 Academic chuáº©n hÃ³a 4 ká»¹ nÄƒng Listening, Reading, Writing, Speaking.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Community Art Center Registration",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Officer: Good day, thank you for contacting our customer service bureau. Let me record your contact information and scheduled dates...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Applicant surname: Mitchell, First name: [______]", correct_answers: ["Daniel", "Dan"], evidence: "My first name is Daniel, D-A-N-I-E-L.", explanation: "NgÆ°á»i gá»i Ä‘Ã¡nh váº§n tÃªn Daniel rÃµ rÃ ng trong Ä‘oáº¡n ghi Ã¢m." },
                            { id: 2, type: "fill", question: "2. Scheduled date: [______] November", correct_answers: ["12th", "12", "twelfth"], evidence: "I would like to confirm my arrival on the 12th of November.", explanation: "NgÃ y Ä‘Æ°á»£c xÃ¡c nháº­n lÃ  ngÃ y 12 thÃ¡ng 11." },
                            { id: 3, type: "fill", question: "3. Contact mobile telephone: 07890 [______]", correct_answers: ["445120", "445 120"], evidence: "You can reach me directly on 07890 445120.", explanation: "Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Æ°á»£c Ä‘á»c tÃ¡ch báº¡ch tá»«ng cá»¥m ba chá»¯ sá»‘." },
                            { id: 4, type: "fill", question: "4. Preferred package tier: [______] membership", correct_answers: ["gold", "premium"], evidence: "I wish to enroll in the gold membership tier.", explanation: "GÃ³i Ä‘Äƒng kÃ½ Ä‘Æ°á»£c chá»n lÃ  gÃ³i Gold." },
                            { id: 5, type: "fill", question: "5. Advance deposit required: Â£[______]", correct_answers: ["60", "sixty"], evidence: "The required upfront security deposit is sixty pounds.", explanation: "Má»©c tiá»n cá»c quy Ä‘á»‹nh lÃ  60 báº£ng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Civic Amenities and Urban Modernization",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Speaker: Welcome citizens to our local redevelopment consultation. Our focus today is balancing heritage preservation with modern infrastructure...",
                        questions: [
                            { id: 6, type: "choice", question: "6. What is the overarching priority of the municipal masterplan?", options: ["A. Expanding commercial skyscraper districts", "B. Enhancing pedestrian accessibility and green spaces", "C. Constructing underground highways"], correct_answers: ["B"], evidence: "Our paramount objective is cultivating human-scale pedestrian avenues bordered by native tree canopies.", explanation: "Æ¯u tiÃªn hÃ ng Ä‘áº§u lÃ  cáº£i thiá»‡n Ä‘Æ°á»ng Ä‘i bá»™ vÃ  máº£ng xanh (B)." },
                            { id: 7, type: "choice", question: "7. When will public feedback surveys officially close?", options: ["A. At the end of next month", "B. In two weeks", "C. By Friday midnight"], correct_answers: ["A"], evidence: "Residents are invited to submit digital feedback until the final day of next month.", explanation: "Háº¡n chÃ³t Ä‘Ã³ng kháº£o sÃ¡t lÃ  cuá»‘i thÃ¡ng sau (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Academic Dissertation Research Evaluation",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Advisor: Your empirical methodology is robust, yet your theoretical framework requires deeper integration of macroeconomic variables...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What recommendation did the faculty advisor offer regarding sample bias?", options: ["A. Collect qualitative interviews across diverse demographic sectors", "B. Narrow the study strictly to undergraduate students", "C. Discard all outlier data points"], correct_answers: ["A"], evidence: "To neutralize regional bias, broaden your qualitative interviews across diverse demographic strata.", explanation: "GiÃ¡o viÃªn hÆ°á»›ng dáº«n khuyÃªn má»Ÿ rá»™ng phá»ng váº¥n Ä‘a dáº¡ng Ä‘á»‘i tÆ°á»£ng (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Technological Paradigms in Modern Applied Science",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Systemic resilience in complex technological architectures depends upon modularity, fault tolerance, and continuous algorithmic auditing...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Core operational resilience is achieved through structural [______].", correct_answers: ["modularity"], evidence: "The primary foundation of failure prevention is structural modularity across subsystems.", explanation: "TÃ­nh kiÃªn cÆ°á»ng cá»‘t lÃµi Ä‘áº¡t Ä‘Æ°á»£c nhá» cáº¥u trÃºc mÃ´-Ä‘un hÃ³a (modularity)." },
                            { id: 10, type: "fill", question: "10. Systems require ongoing algorithmic [______] to verify reliability.", correct_answers: ["auditing", "audits"], evidence: "Engineers mandate continuous algorithmic auditing to prevent catastrophic drift.", explanation: "Há»‡ thá»‘ng Ä‘Ã²i há»i viá»‡c kiá»ƒm toÃ¡n thuáº­t toÃ¡n liÃªn tá»¥c (auditing)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: The Secret Underground Life of Trees",
                        content: "Biological and technological adaptations reflect sophisticated systemic responses to environmental pressures.\\n\\nEmpirical research across ecological and sociological disciplines reveals that resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes. When centralized dependencies are mitigated, entire networks withstand acute shocks with minimal systemic degradation. Contemporary scientists apply these organic principles to design climate-resilient cities and fault-tolerant digital architectures.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Resilient systemic structures distribute operational loads across decentralized nodes.", correct_answers: ["TRUE", "True", "T"], evidence: "resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes.", explanation: "Kháº³ng Ä‘á»‹nh trong cÃ¢u há»i trÃ¹ng khá»›p 100% vá»›i ná»™i dung bÃ i Ä‘á»c (TRUE)." },
                            { id: 12, type: "tfng", question: "12. Centralized systems have proven mathematically immune to environmental disruptions.", correct_answers: ["FALSE", "False", "F"], evidence: "When centralized dependencies are mitigated, entire networks withstand acute shocks", explanation: "Há»‡ thá»‘ng táº­p trung dá»… bá»‹ tá»•n thÆ°Æ¡ng, bÃ i Ä‘á»c nÃªu cáº§n giáº£m phá»¥ thuá»™c táº­p trung (FALSE)." },
                            { id: 13, type: "tfng", question: "13. International treaties mandate the global adoption of these biological designs.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "BÃ i Ä‘á»c chá»‰ nháº¯c cÃ¡c nhÃ  khoa há»c Ã¡p dá»¥ng nguyÃªn lÃ½ nÃ y, khÃ´ng Ä‘á» cáº­p Ä‘áº¿n hiá»‡p Æ°á»›c quá»‘c táº¿ nÃ o.", explanation: "ThÃ´ng tin vá» hiá»‡p Æ°á»›c quá»‘c táº¿ khÃ´ng cÃ³ trong bÃ i (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Socio-Economic Transformations in Modern Infrastructure",
                        content: "Urban infrastructure investments shape economic productivity and social mobility across generations.\\n\\nComparative studies demonstrate that high-capacity transit links catalyze commercial vibrancy around transport hubs while curbing suburban sprawling. However, municipal planners must integrate equitable zoning policies to protect existing residents against gentrification-driven displacement.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What primary economic benefit stems from high-capacity transit investments?", options: ["A. Lowering fuel taxes for private vehicles", "B. Stimulating commercial vitality around interconnected hubs", "C. Reducing domestic construction standards"], correct_answers: ["B"], evidence: "catalyze commercial vibrancy around transport hubs while curbing suburban sprawling.", explanation: "ThÃºc Ä‘áº©y sá»± sÃ´i Ä‘á»™ng thÆ°Æ¡ng máº¡i quanh cÃ¡c Ä‘áº§u má»‘i giao thÃ´ng (B)." },
                            { id: 15, type: "choice", question: "15. Why are equitable zoning policies necessary according to municipal planners?", options: ["A. To prevent speculative inflation from displacing established communities", "B. To mandate uniform architectural facades", "C. To outlaw commercial enterprise"], correct_answers: ["A"], evidence: "to protect existing residents against gentrification-driven displacement.", explanation: "Báº£o vá»‡ ngÆ°á»i dÃ¢n khá»i nguy cÆ¡ bá»‹ Ä‘áº©y khá»i nÆ¡i á»Ÿ do phÃ¢n hÃ³a giÃ¡ báº¥t Ä‘á»™ng sáº£n (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Epistemological Foundations of Scientific Discovery",
                        content: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.\\n\\nWhen anomalous experimental findings breach the explanatory confines of established orthodoxy, innovative theoretical models emerge to reconcile contradictory evidence. This philosophical dynamic underscores that scientific truths are continuously refined through rigorous empirical skepticism.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Major scientific breakthroughs occur exclusively through smooth, linear data accumulation.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.", explanation: "CÃ¡ch máº¡ng khoa há»c diá»…n ra qua sá»± chuyá»ƒn dá»‹ch há»‡ hÃ¬nh Ä‘á»™t phÃ¡ chá»© khÃ´ng tuyáº¿n tÃ­nh (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The chart illustrates Renewable Energy Production Shares 2010-2025.\\n\\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Analytical Graphic",
                    model_answer: "The visual illustration delineates the comparative dynamics of the examined sectors over a defined temporal continuum.\\n\\nOverall, a pronounced upward tendency is discernible across the dominant categories, whereas secondary indices exhibited moderate stability or minor contractions. Notably, the foremost sector widened its comparative advantage over the entire timeframe.\\n\\nIn the initial phase, recorded figures stood at relatively equitable baseline levels. However, structural shifts soon propelled the primary metric toward unprecedented highs, culminating in a dominant market posture by the conclusion of the survey horizon.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Rigorous identification of macro trends and accurate comparative reporting.",
                        coherence_cohesion: "Band 9.0: Flawless cohesion and effortless discourse transitions.",
                        lexical_resource: "Band 9.0: Academic register with precise economic terminology.",
                        grammar_accuracy: "Band 9.0: Sophisticated syntactic range without grammatical imperfections."
                    }
                },
                task_2: {
                    prompt: "Practical Employment Skills vs Pure Academic Theory\\n\\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The contemporary discourse regarding this socio-economic issue has polarized opinions among policy analysts, industry stakeholders, and the general public.\\n\\nOn the one hand, proponents argue that sweeping institutional regulation is indispensable for safeguarding long-term public welfare. In the absence of binding legislative mandates, short-term commercial imperatives frequently compromise public health, ecological equilibrium, and social equity. Regulatory frameworks establish universal ethical guardrails that incentivize innovation while penalizing exploitative practices.\\n\\nOn the other hand, skeptics caution that excessive intervention can stifle entrepreneurial agility, induce capital flight, and create bureaucratic inefficiencies. They maintain that voluntary market mechanisms, technological ingenuity, and consumer advocacy provide more adaptable pathways toward sustainable outcomes.\\n\\nIn conclusion, having scrutinized both perspectives, I maintain that targeted, evidence-based regulation combined with transparent market incentives yields the most pragmatic and enduring benefits for modern civil society.",
                    key_vocab: ["binding legislative mandates", "ecological equilibrium", "entrepreneurial agility", "bureaucratic inefficiencies", "evidence-based regulation"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How do technological advancements influence your personal productivity?", examiner_audio: "How do technological advancements influence your personal productivity?", model_answer: "Technological tools streamline my administrative workflows through cloud synchronization, freeing mental bandwidth for creative and analytical problem-solving." },
                    { question: "Do you prefer working in collaborative groups or independently?", examiner_audio: "Do you prefer working in collaborative groups or independently?", model_answer: "I appreciate a balanced hybrid: collaborative brainstorming generates diverse insights, whereas solitary focus is essential for meticulous execution." }
                ],
                part_2: {
                    cue_card_title: "Describe a significant achievement you accomplished through sustained discipline.",
                    cues: [
                        "What the achievement was and when you accomplished it",
                        "What obstacles you encountered during the journey",
                        "What strategies helped you persevere",
                        "And explain why this accomplishment remains personally meaningful to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount the rigorous process of preparing for my advanced bilingual certification examination last year.\\n\\nBalancing professional commitments with demanding evening study sessions presented substantial cognitive fatigue. To prevail, I structured my preparation into non-negotiable morning blocks, tracking daily incremental milestones rather than fixating on distant outcomes. Achieving high honors reinforced my conviction that relentless incremental consistency inevitably overcomes transient moments of self-doubt.",
                    key_vocab: ["demanding commitments", "cognitive fatigue", "incremental consistency", "transient moments", "unwavering conviction"]
                },
                part_3: [
                    { question: "Why do some individuals struggle to maintain long-term personal resolutions?", examiner_audio: "Why do some individuals struggle to maintain long-term personal resolutions?", model_answer: "Many set unrealistic, perfectionist benchmarks without constructing daily operational habits, resulting in acute burnout whenever initial motivation wanes." },
                    { question: "What role should public educational institutions play in nurturing mental resilience?", examiner_audio: "What role should public educational institutions play in nurturing mental resilience?", model_answer: "Schools must integrate emotional intelligence, stress management, and deliberate failure debriefings into curricula alongside conventional academic subjects." }
                ]
            }
        }
,
        // =================================================================
        // TEST 20: CAMBRIDGE IELTS 20 ACADEMIC
        // =================================================================
        "cam_20": {
            id: "cam_20",
            title: "Cambridge IELTS 20 Academic Test",
            badge: "Cam 20",
            year: "2025/2026 Edition",
            description: "Bá»™ Ä‘á» thi thá»­ Cambridge IELTS 20 Academic chuáº©n hÃ³a 4 ká»¹ nÄƒng Listening, Reading, Writing, Speaking.",
            listening: {
                audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
                duration_seconds: 1800,
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Eco-Hotel Reservation & Volunteering",
                        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        transcript: "Officer: Good day, thank you for contacting our customer service bureau. Let me record your contact information and scheduled dates...",
                        questions: [
                            { id: 1, type: "fill", question: "1. Applicant surname: Mitchell, First name: [______]", correct_answers: ["Daniel", "Dan"], evidence: "My first name is Daniel, D-A-N-I-E-L.", explanation: "NgÆ°á»i gá»i Ä‘Ã¡nh váº§n tÃªn Daniel rÃµ rÃ ng trong Ä‘oáº¡n ghi Ã¢m." },
                            { id: 2, type: "fill", question: "2. Scheduled date: [______] November", correct_answers: ["12th", "12", "twelfth"], evidence: "I would like to confirm my arrival on the 12th of November.", explanation: "NgÃ y Ä‘Æ°á»£c xÃ¡c nháº­n lÃ  ngÃ y 12 thÃ¡ng 11." },
                            { id: 3, type: "fill", question: "3. Contact mobile telephone: 07890 [______]", correct_answers: ["445120", "445 120"], evidence: "You can reach me directly on 07890 445120.", explanation: "Sá»‘ Ä‘iá»‡n thoáº¡i Ä‘Æ°á»£c Ä‘á»c tÃ¡ch báº¡ch tá»«ng cá»¥m ba chá»¯ sá»‘." },
                            { id: 4, type: "fill", question: "4. Preferred package tier: [______] membership", correct_answers: ["gold", "premium"], evidence: "I wish to enroll in the gold membership tier.", explanation: "GÃ³i Ä‘Äƒng kÃ½ Ä‘Æ°á»£c chá»n lÃ  gÃ³i Gold." },
                            { id: 5, type: "fill", question: "5. Advance deposit required: Â£[______]", correct_answers: ["60", "sixty"], evidence: "The required upfront security deposit is sixty pounds.", explanation: "Má»©c tiá»n cá»c quy Ä‘á»‹nh lÃ  60 báº£ng." }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Civic Amenities and Urban Modernization",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Speaker: Welcome citizens to our local redevelopment consultation. Our focus today is balancing heritage preservation with modern infrastructure...",
                        questions: [
                            { id: 6, type: "choice", question: "6. What is the overarching priority of the municipal masterplan?", options: ["A. Expanding commercial skyscraper districts", "B. Enhancing pedestrian accessibility and green spaces", "C. Constructing underground highways"], correct_answers: ["B"], evidence: "Our paramount objective is cultivating human-scale pedestrian avenues bordered by native tree canopies.", explanation: "Æ¯u tiÃªn hÃ ng Ä‘áº§u lÃ  cáº£i thiá»‡n Ä‘Æ°á»ng Ä‘i bá»™ vÃ  máº£ng xanh (B)." },
                            { id: 7, type: "choice", question: "7. When will public feedback surveys officially close?", options: ["A. At the end of next month", "B. In two weeks", "C. By Friday midnight"], correct_answers: ["A"], evidence: "Residents are invited to submit digital feedback until the final day of next month.", explanation: "Háº¡n chÃ³t Ä‘Ã³ng kháº£o sÃ¡t lÃ  cuá»‘i thÃ¡ng sau (A)." }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Academic Dissertation Research Evaluation",
                        instruction: "Choose the correct letter, A, B or C.",
                        transcript: "Advisor: Your empirical methodology is robust, yet your theoretical framework requires deeper integration of macroeconomic variables...",
                        questions: [
                            { id: 8, type: "choice", question: "8. What recommendation did the faculty advisor offer regarding sample bias?", options: ["A. Collect qualitative interviews across diverse demographic sectors", "B. Narrow the study strictly to undergraduate students", "C. Discard all outlier data points"], correct_answers: ["A"], evidence: "To neutralize regional bias, broaden your qualitative interviews across diverse demographic strata.", explanation: "GiÃ¡o viÃªn hÆ°á»›ng dáº«n khuyÃªn má»Ÿ rá»™ng phá»ng váº¥n Ä‘a dáº¡ng Ä‘á»‘i tÆ°á»£ng (A)." }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: Technological Paradigms in Modern Applied Science",
                        instruction: "Complete the summary below. Write ONE WORD ONLY.",
                        transcript: "Lecturer: Systemic resilience in complex technological architectures depends upon modularity, fault tolerance, and continuous algorithmic auditing...",
                        questions: [
                            { id: 9, type: "fill", question: "9. Core operational resilience is achieved through structural [______].", correct_answers: ["modularity"], evidence: "The primary foundation of failure prevention is structural modularity across subsystems.", explanation: "TÃ­nh kiÃªn cÆ°á»ng cá»‘t lÃµi Ä‘áº¡t Ä‘Æ°á»£c nhá» cáº¥u trÃºc mÃ´-Ä‘un hÃ³a (modularity)." },
                            { id: 10, type: "fill", question: "10. Systems require ongoing algorithmic [______] to verify reliability.", correct_answers: ["auditing", "audits"], evidence: "Engineers mandate continuous algorithmic auditing to prevent catastrophic drift.", explanation: "Há»‡ thá»‘ng Ä‘Ã²i há»i viá»‡c kiá»ƒm toÃ¡n thuáº­t toÃ¡n liÃªn tá»¥c (auditing)." }
                        ]
                    }
                ]
            },
            reading: {
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: Generative AI and Neuroplastic Memory",
                        content: "Biological and technological adaptations reflect sophisticated systemic responses to environmental pressures.\\n\\nEmpirical research across ecological and sociological disciplines reveals that resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes. When centralized dependencies are mitigated, entire networks withstand acute shocks with minimal systemic degradation. Contemporary scientists apply these organic principles to design climate-resilient cities and fault-tolerant digital architectures.",
                        questions: [
                            { id: 11, type: "tfng", question: "11. Resilient systemic structures distribute operational loads across decentralized nodes.", correct_answers: ["TRUE", "True", "T"], evidence: "resilient structures maintain functional equilibrium by distributing operational loads across decentralized nodes.", explanation: "Kháº³ng Ä‘á»‹nh trong cÃ¢u há»i trÃ¹ng khá»›p 100% vá»›i ná»™i dung bÃ i Ä‘á»c (TRUE)." },
                            { id: 12, type: "tfng", question: "12. Centralized systems have proven mathematically immune to environmental disruptions.", correct_answers: ["FALSE", "False", "F"], evidence: "When centralized dependencies are mitigated, entire networks withstand acute shocks", explanation: "Há»‡ thá»‘ng táº­p trung dá»… bá»‹ tá»•n thÆ°Æ¡ng, bÃ i Ä‘á»c nÃªu cáº§n giáº£m phá»¥ thuá»™c táº­p trung (FALSE)." },
                            { id: 13, type: "tfng", question: "13. International treaties mandate the global adoption of these biological designs.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "BÃ i Ä‘á»c chá»‰ nháº¯c cÃ¡c nhÃ  khoa há»c Ã¡p dá»¥ng nguyÃªn lÃ½ nÃ y, khÃ´ng Ä‘á» cáº­p Ä‘áº¿n hiá»‡p Æ°á»›c quá»‘c táº¿ nÃ o.", explanation: "ThÃ´ng tin vá» hiá»‡p Æ°á»›c quá»‘c táº¿ khÃ´ng cÃ³ trong bÃ i (NOT GIVEN)." }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Socio-Economic Transformations in Modern Infrastructure",
                        content: "Urban infrastructure investments shape economic productivity and social mobility across generations.\\n\\nComparative studies demonstrate that high-capacity transit links catalyze commercial vibrancy around transport hubs while curbing suburban sprawling. However, municipal planners must integrate equitable zoning policies to protect existing residents against gentrification-driven displacement.",
                        questions: [
                            { id: 14, type: "choice", question: "14. What primary economic benefit stems from high-capacity transit investments?", options: ["A. Lowering fuel taxes for private vehicles", "B. Stimulating commercial vitality around interconnected hubs", "C. Reducing domestic construction standards"], correct_answers: ["B"], evidence: "catalyze commercial vibrancy around transport hubs while curbing suburban sprawling.", explanation: "ThÃºc Ä‘áº©y sá»± sÃ´i Ä‘á»™ng thÆ°Æ¡ng máº¡i quanh cÃ¡c Ä‘áº§u má»‘i giao thÃ´ng (B)." },
                            { id: 15, type: "choice", question: "15. Why are equitable zoning policies necessary according to municipal planners?", options: ["A. To prevent speculative inflation from displacing established communities", "B. To mandate uniform architectural facades", "C. To outlaw commercial enterprise"], correct_answers: ["A"], evidence: "to protect existing residents against gentrification-driven displacement.", explanation: "Báº£o vá»‡ ngÆ°á»i dÃ¢n khá»i nguy cÆ¡ bá»‹ Ä‘áº©y khá»i nÆ¡i á»Ÿ do phÃ¢n hÃ³a giÃ¡ báº¥t Ä‘á»™ng sáº£n (A)." }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: Epistemological Foundations of Scientific Discovery",
                        content: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.\\n\\nWhen anomalous experimental findings breach the explanatory confines of established orthodoxy, innovative theoretical models emerge to reconcile contradictory evidence. This philosophical dynamic underscores that scientific truths are continuously refined through rigorous empirical skepticism.",
                        questions: [
                            { id: 16, type: "tfng", question: "16. Major scientific breakthroughs occur exclusively through smooth, linear data accumulation.", correct_answers: ["FALSE", "False", "F", "NO", "No"], evidence: "Scientific revolutions rarely advance via incremental linear accumulation; rather, they unfold through disruptive paradigm shifts.", explanation: "CÃ¡ch máº¡ng khoa há»c diá»…n ra qua sá»± chuyá»ƒn dá»‹ch há»‡ hÃ¬nh Ä‘á»™t phÃ¡ chá»© khÃ´ng tuyáº¿n tÃ­nh (FALSE)." }
                        ]
                    }
                ]
            },
            writing: {
                task_1: {
                    prompt: "The chart illustrates Corporate Artificial Intelligence Adoption.\\n\\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
                    chart_type: "Comparative Analytical Graphic",
                    model_answer: "The visual illustration delineates the comparative dynamics of the examined sectors over a defined temporal continuum.\\n\\nOverall, a pronounced upward tendency is discernible across the dominant categories, whereas secondary indices exhibited moderate stability or minor contractions. Notably, the foremost sector widened its comparative advantage over the entire timeframe.\\n\\nIn the initial phase, recorded figures stood at relatively equitable baseline levels. However, structural shifts soon propelled the primary metric toward unprecedented highs, culminating in a dominant market posture by the conclusion of the survey horizon.",
                    scoring_criteria: {
                        task_achievement: "Band 9.0: Rigorous identification of macro trends and accurate comparative reporting.",
                        coherence_cohesion: "Band 9.0: Flawless cohesion and effortless discourse transitions.",
                        lexical_resource: "Band 9.0: Academic register with precise economic terminology.",
                        grammar_accuracy: "Band 9.0: Sophisticated syntactic range without grammatical imperfections."
                    }
                },
                task_2: {
                    prompt: "Generative AI at Work: Transformative Tool or Perilous Threat\\n\\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
                    model_answer: "The contemporary discourse regarding this socio-economic issue has polarized opinions among policy analysts, industry stakeholders, and the general public.\\n\\nOn the one hand, proponents argue that sweeping institutional regulation is indispensable for safeguarding long-term public welfare. In the absence of binding legislative mandates, short-term commercial imperatives frequently compromise public health, ecological equilibrium, and social equity. Regulatory frameworks establish universal ethical guardrails that incentivize innovation while penalizing exploitative practices.\\n\\nOn the other hand, skeptics caution that excessive intervention can stifle entrepreneurial agility, induce capital flight, and create bureaucratic inefficiencies. They maintain that voluntary market mechanisms, technological ingenuity, and consumer advocacy provide more adaptable pathways toward sustainable outcomes.\\n\\nIn conclusion, having scrutinized both perspectives, I maintain that targeted, evidence-based regulation combined with transparent market incentives yields the most pragmatic and enduring benefits for modern civil society.",
                    key_vocab: ["binding legislative mandates", "ecological equilibrium", "entrepreneurial agility", "bureaucratic inefficiencies", "evidence-based regulation"]
                }
            },
            speaking: {
                part_1: [
                    { question: "How do technological advancements influence your personal productivity?", examiner_audio: "How do technological advancements influence your personal productivity?", model_answer: "Technological tools streamline my administrative workflows through cloud synchronization, freeing mental bandwidth for creative and analytical problem-solving." },
                    { question: "Do you prefer working in collaborative groups or independently?", examiner_audio: "Do you prefer working in collaborative groups or independently?", model_answer: "I appreciate a balanced hybrid: collaborative brainstorming generates diverse insights, whereas solitary focus is essential for meticulous execution." }
                ],
                part_2: {
                    cue_card_title: "Describe a significant achievement you accomplished through sustained discipline.",
                    cues: [
                        "What the achievement was and when you accomplished it",
                        "What obstacles you encountered during the journey",
                        "What strategies helped you persevere",
                        "And explain why this accomplishment remains personally meaningful to you."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to recount the rigorous process of preparing for my advanced bilingual certification examination last year.\\n\\nBalancing professional commitments with demanding evening study sessions presented substantial cognitive fatigue. To prevail, I structured my preparation into non-negotiable morning blocks, tracking daily incremental milestones rather than fixating on distant outcomes. Achieving high honors reinforced my conviction that relentless incremental consistency inevitably overcomes transient moments of self-doubt.",
                    key_vocab: ["demanding commitments", "cognitive fatigue", "incremental consistency", "transient moments", "unwavering conviction"]
                },
                part_3: [
                    { question: "Why do some individuals struggle to maintain long-term personal resolutions?", examiner_audio: "Why do some individuals struggle to maintain long-term personal resolutions?", model_answer: "Many set unrealistic, perfectionist benchmarks without constructing daily operational habits, resulting in acute burnout whenever initial motivation wanes." },
                    { question: "What role should public educational institutions play in nurturing mental resilience?", examiner_audio: "What role should public educational institutions play in nurturing mental resilience?", model_answer: "Schools must integrate emotional intelligence, stress management, and deliberate failure debriefings into curricula alongside conventional academic subjects." }
                ]
            }
        }
    }
};

// GÃ¡n dá»¯ liá»‡u IELTS Master vÃ o studentsDB cá»§a há»‡ sinh thÃ¡i Smart English Class
if (typeof studentsDB !== 'undefined') {
    studentsDB['ielts'] = ieltsProfileData;
}

