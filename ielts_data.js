// =========================================================================
// CAMBRIDGE IELTS 1 - 20 MASTER DATABASE & TESTING ENGINE DATA
// Dành riêng cho Profile IELTS Master trong Smart English Class
// =========================================================================

const ieltsProfileData = {
    avatar: "avatars/ielts.jpg",
    name: "IELTS Master",
    age: "Cambridge 1 - 20",
    curriculum: "Cambridge IELTS Academic (Full 4 Kỹ Năng: L-R-W-S)",
    
    // =====================================================================
    // 1. CÁC BÀI HỌC TỪ VỰNG & NGỮ PHÁP HỌC THUẬT (DÙNG CHO FLASHCARD, QUIZ, NOTE)
    // =====================================================================
    units: {
        "ielts_unit_1": {
            title: "Unit 1: Environment & Climate Change (Môi trường & Biến đổi khí hậu)",
            grammar: [
                {
                    title: "Inversion for Academic Emphasis (Đảo ngữ tạo điểm nhấn học thuật Band 7.5+)",
                    structure: "Negative adverb (Rarely / Seldom / Not only / Under no circumstances) + Auxiliary + S + Main Verb",
                    explanation: "Đảo ngữ đưa trợ động từ lên trước chủ ngữ khi câu bắt đầu bằng trạng từ mang nghĩa phủ định hoặc giới hạn. Giúp bài viết Writing Task 2 và nói Speaking Part 3 tăng mạnh tiêu chí Grammatical Range.",
                    examples: [
                        {
                            en: "Not only does deforestation accelerate carbon emissions, but it also destroys biological habitats.",
                            vi: "Nạn phá rừng không chỉ thúc đẩy lượng khí thải các-bon mà nó còn tàn phá môi trường sống sinh học."
                        },
                        {
                            en: "Under no circumstances should governments compromise ecological preservation for short-term profits.",
                            vi: "Trong bất kỳ hoàn cảnh nào, các chính phủ cũng không được đánh đổi sự bảo tồn sinh thái lấy lợi nhuận ngắn hạn."
                        }
                    ],
                    tip: "Chỉ nên dùng 1-2 câu đảo ngữ trong Writing Task 2 tại các luận điểm quan trọng để ghi điểm mà không làm mất đi tính tự nhiên."
                },
                {
                    title: "Complex Cause & Effect Linkers (Từ nối nguyên nhân & hệ quả nâng cao)",
                    structure: "Owing to / Attributable to + Noun Phrase | In consequence of | Stems from",
                    explanation: "Thay thế các từ nối cơ bản như 'Because' hay 'So' bằng các cụm học thuật C1/C2 để lập luận chặt chẽ trong IELTS Writing.",
                    examples: [
                        {
                            en: "The unprecedented rise in global temperatures is largely attributable to anthropogenic fossil fuel combustion.",
                            vi: "Sự gia tăng nhiệt độ toàn cầu chưa từng có phần lớn bắt nguồn từ việc con người đốt nhiên liệu hóa thạch."
                        },
                        {
                            en: "Severe soil degradation stems from continuous intensive agricultural exploitation.",
                            vi: "Sự thoái hóa đất nghiêm trọng bắt nguồn từ việc khai thác nông nghiệp thâm canh liên tục."
                        }
                    ],
                    tip: "'Attributable to' thường đứng sau động từ to be: 'is attributable to + Noun Phrase'."
                }
            ],
            words: [
                {
                    en: "Anthropogenic",
                    ipa: "/ˌæn.θrə.pəˈdʒen.ɪk/",
                    vi: "Do con người gây ra (học thuật)",
                    ex: "Anthropogenic greenhouse gas emissions are the primary driving force behind contemporary global warming."
                },
                {
                    en: "Biodiversity",
                    ipa: "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/",
                    vi: "Đa dạng sinh học",
                    ex: "The pristine rainforest boasts an astonishing level of floral and faunal biodiversity."
                },
                {
                    en: "Deforestation",
                    ipa: "/diːˌfɒr.ɪˈsteɪ.ʃən/",
                    vi: "Nạn phá rừng trên diện rộng",
                    ex: "Unchecked commercial deforestation threatens the livelihoods of indigenous communities."
                },
                {
                    en: "Ecosystem degradation",
                    ipa: "/ˈiː.kəʊˌsɪs.təm ˌdeɡ.rəˈdeɪ.ʃən/",
                    vi: "Sự suy thoái hệ sinh thái",
                    ex: "Pollution and overfishing have triggered severe marine ecosystem degradation in coastal waters."
                },
                {
                    en: "Renewable energy",
                    ipa: "/rɪˈnjuː.ə.bəl ˈen.ə.dʒi/",
                    vi: "Năng lượng tái tạo (gió, mặt trời)",
                    ex: "Transitioning toward renewable energy is paramount for sustainable economic development."
                },
                {
                    en: "Carbon footprint",
                    ipa: "/ˈkɑː.bən ˌfʊt.prɪnt/",
                    vi: "Dấu chân các-bon (lượng khí thải sinh ra)",
                    ex: "Consumers can substantially minimize their carbon footprint by adopting plant-rich diets."
                },
                {
                    en: "Endangered species",
                    ipa: "/ɪnˈdeɪn.dʒəd ˈspiː.ʃiːz/",
                    vi: "Các loài động thực vật có nguy cơ tuyệt chủng",
                    ex: "Conservation sanctuaries offer safe breeding grounds for critically endangered species."
                },
                {
                    en: "Mitigate",
                    ipa: "/ˈmɪt.ɪ.ɡeɪt/",
                    vi: "Làm giảm thiểu, giảm bớt tác hại",
                    ex: "Afforestation projects help mitigate the adverse ramifications of climate catastrophes."
                },
                {
                    en: "Catastrophic",
                    ipa: "/ˌkæt.əˈstrɒf.ɪk/",
                    vi: "Thảm khốc, mang tính thảm họa",
                    ex: "Rising sea levels could inflict catastrophic damage on low-lying coastal archipelagos."
                },
                {
                    en: "Sustainable practice",
                    ipa: "/səˈsteɪ.nə.bəl ˈpræk.tɪs/",
                    vi: "Biện pháp / thói quen phát triển bền vững",
                    ex: "Global corporations are urged to adopt ecologically sustainable practices across their supply chains."
                },
                {
                    en: "Ecological balance",
                    ipa: "/ˌiː.kəˈlɒdʒ.ɪ.kəl ˈbæl.əns/",
                    vi: "Cân bằng sinh thái tự nhiên",
                    ex: "Apex predators play an indispensable role in maintaining delicate ecological balance."
                },
                {
                    en: "Vulnerable to",
                    ipa: "/ˈvʌl.nər.ə.bəl tuː/",
                    vi: "Dễ bị tổn thương trước nguy cơ",
                    ex: "Coastal farming regions are increasingly vulnerable to frequent saltwater intrusion."
                }
            ],
            grammar_review: [
                {
                    q: "Seldom ______ such catastrophic flooding in this mountainous region before urban encroachment.",
                    options: ["did residents witness", "residents witnessed", "have residents witness", "residents did witness"],
                    ans: 0,
                    explain: "Khi trạng từ phủ định 'Seldom' đứng đầu câu, ta bắt buộc phải đảo trợ động từ lên trước chủ ngữ: 'did residents witness'."
                },
                {
                    q: "The sudden decline in honeybee populations is largely ______ excessive pesticide usage.",
                    options: ["attributable to", "stemming", "owing of", "because"],
                    "ans": 0,
                    "explain": "Cấu trúc học thuật chỉ nguyên nhân sau to be: 'is attributable to + Noun phrase' (bắt nguồn từ)."
                },
                {
                    "q": "Not only ______ to global warming, but intensive farming also exhausts groundwater reserves.",
                    "options": ["does deforestation contribute", "deforestation contributes", "is deforestation contribute", "contributes deforestation"],
                    "ans": 0,
                    "explain": "Đảo ngữ với 'Not only': trợ động từ 'does' đứng trước chủ ngữ 'deforestation' và sau đó là động từ nguyên thể 'contribute'."
                }
            ]
        },
        "ielts_unit_2": {
            title: "Unit 2: Technology & Artificial Intelligence (Công nghệ số & Trí tuệ nhân tạo)",
            grammar: [
                {
                    title: "Reduced Relative Clauses (Mệnh đề quan hệ rút gọn)",
                    structure: "Active: V-ing | Passive: V3/ed",
                    "explanation": "Rút gọn mệnh đề quan hệ giúp câu văn học thuật cô đọng, súc tích và trang trọng hơn trong cả Reading và Writing.",
                    "examples": [
                        {
                            en: "Algorithms processing large datasets (who/which process) can uncover hidden consumer trends.",
                            "vi": "Các thuật toán xử lý tập dữ liệu lớn có thể phát hiện các xu hướng tiêu dùng tiềm ẩn."
                        },
                        {
                            en: "Prototypes developed by the engineering department (which were developed) underwent stringent safety tests.",
                            "vi": "Các mô hình mẫu được phòng kỹ thuật phát triển đã trải qua các bài kiểm định an toàn nghiêm ngặt."
                        }
                    ],
                    "tip": "Chủ động dùng V-ing, bị động dùng V3/ed. Không được để nhầm lẫn giữa thì quá khứ đơn và phân từ hai rút gọn."
                },
                {
                    title: "Hypothetical Conditionals (Câu điều kiện giả định học thuật)",
                    "structure": "Had it not been for + Noun Phrase, S + would have + V3/ed",
                    "explanation": "Dạng đảo ngữ của câu điều kiện loại 3 dùng để nhấn mạnh tầm quan trọng của phát minh hoặc sự kiện trong quá khứ.",
                    "examples": [
                        {
                            en: "Had it not been for the advent of microprocessors, modern computing would not have flourished.",
                            "vi": "Nếu không có sự ra đời của bộ vi xử lý, ngành điện toán hiện đại đã không thể phát triển rực rỡ như vậy."
                        }
                    ],
                    "tip": "Cụm 'Had it not been for...' cực kỳ đắt giá khi mở rộng ý tưởng trong Writing Task 2 và Speaking Part 3."
                }
            ],
            "words": [
                {
                    en: "Artificial intelligence",
                    "ipa": "/ˌɑː.tɪˈfɪʃ.əl ɪnˈtel.ɪ.dʒəns/",
                    "vi": "Trí tuệ nhân tạo (AI)",
                    "ex": "Artificial intelligence is fundamentally reshaping contemporary labor markets and creative disciplines."
                },
                {
                    en: "Algorithm",
                    "ipa": "/ˈæl.ɡə.rɪ.ðəm/",
                    "vi": "Thuật toán máy tính",
                    "ex": "Sophisticated recommendation algorithms personalize digital content streams for millions of users."
                },
                {
                    en: "Automation",
                    "ipa": "/ˌɔː.təˈmeɪ.ʃən/",
                    "vi": "Tự động hóa dây chuyền / quy trình",
                    "ex": "Industrial automation enhances operational efficiency while eliminating mundane repetitive tasks."
                },
                {
                    en: "Cybersecurity",
                    "ipa": "/ˈsaɪ.bə.sɪˌkjʊə.rə.ti/",
                    "vi": "An ninh mạng và bảo mật dữ liệu",
                    "ex": "Robust cybersecurity infrastructure is indispensable for safeguarding sensitive cloud records."
                },
                {
                    en: "Breakthrough",
                    "ipa": "/ˈbreɪk.θruː/",
                    "vi": "Bước đột phá công nghệ mang tính thời đại",
                    "ex": "The quantum computing breakthrough solved problems that classical supercomputers could not touch."
                },
                {
                    en: "Disruptive technology",
                    "ipa": "/dɪsˈrʌp.tɪv tekˈnɒl.ə.dʒi/",
                    "vi": "Công nghệ đột phá làm thay đổi toàn bộ thị trường",
                    "ex": "Ride-hailing smartphone apps are classic examples of disruptive technology in urban transport."
                },
                {
                    en: "Digital literacy",
                    "ipa": "/ˌdɪdʒ.ɪ.təl ˈlɪt.ər.ə.si/",
                    "vi": "Năng lực làm chủ công nghệ số",
                    "ex": "Cultivating digital literacy among elderly citizens prevents social alienation."
                },
                {
                    en: "Ubiquitous",
                    "ipa": "/juːˈbɪk.wɪ.təs/",
                    "vi": "Phổ biến khắp nơi, đâu đâu cũng thấy",
                    "ex": "Smartphones have become ubiquitous companions in both professional and private spheres."
                },
                {
                    en: "Ethical implication",
                    "ipa": "/ˈeθ.ɪ.kəl ˌɪm.plɪˈkeɪ.ʃən/",
                    "vi": "Hệ quả về mặt đạo đức",
                    "ex": "Philosophers and software engineers must rigorously debate the ethical implications of autonomous robotics."
                },
                {
                    en: "Revolutionize",
                    "ipa": "/ˌrev.əˈluː.ʃən.aɪz/",
                    "vi": "Cách mạng hóa toàn diện",
                    "ex": "Generative language models will revolutionize online education and personalized tutoring."
                },
                {
                    en: "Technological obsolescence",
                    "ipa": "/ˌtek.nəˈlɒdʒ.ɪ.kəl ˌɒb.səˈles.əns/",
                    "vi": "Sự lỗi thời nhanh chóng của công nghệ",
                    "ex": "Rapid technological obsolescence leads to mounting quantities of electronic toxic waste."
                },
                {
                    en: "Cutting-edge",
                    "ipa": "/ˌkʌt.ɪŋˈedʒ/",
                    "vi": "Tối tân, tiên tiến nhất",
                    "ex": "The oncology clinic employs cutting-edge robotic instruments for minimally invasive surgeries."
                }
            ],
            "grammar_review": [
                {
                    q: "The security protocol ______ by senior cryptographers prevented any unauthorized data breach.",
                    "options": ["devised", "devising", "was devised", "which devised"],
                    ans: 0,
                    "explain": "Mệnh đề quan hệ rút gọn ở thể bị động: 'which was devised' rút gọn thành quá khứ phân từ 'devised'."
                },
                {
                    "q": "Had it not been for machine learning innovations, automated translation ______ so natural.",
                    "options": ["would not have become", "did not become", "will not become", "would not become"],
                    "ans": 0,
                    "explain": "Cấu trúc đảo ngữ câu điều kiện loại 3: 'Had it not been for..., S + would have + V3/ed'."
                },
                {
                    "q": "Smart wearable devices ______ vital health metrics enable proactive medical diagnosis.",
                    "options": ["monitoring", "monitored", "are monitoring", "which monitored"],
                    "ans": 0,
                    "explain": "Mệnh đề quan hệ rút gọn chủ động: 'which monitor' rút gọn thành hiện tại phân từ 'monitoring'."
                }
            ]
        },
        "ielts_unit_3": {
            title: "Unit 3: Education & Human Development (Giáo dục & Phát triển con người)",
            grammar: [
                {
                    title: "Passive with Reporting Verbs (Thể bị động khách quan học thuật)",
                    "structure": "It is widely believed/acknowledged that + Clause | S + is considered to be + Noun/Adj",
                    "explanation": "Giúp bày tỏ quan điểm một cách khách quan, tránh lạm dụng đại từ ngôi thứ nhất (I think, In my opinion) trong Writing Task 2.",
                    "examples": [
                        {
                            en: "It is widely acknowledged that early childhood immersion fosters bilingual fluency.",
                            "vi": "Người ta thừa nhận rộng rãi rằng việc tiếp xúc sớm từ thời thơ ấu thúc đẩy khả năng song ngữ lưu loát."
                        },
                        {
                            en: "Critical thinking is deemed to be the cornerstone of tertiary academic education.",
                            "vi": "Tư duy phản biện được coi là nền tảng của giáo dục đại học."
                        }
                    ],
                    "tip": "Dùng 'It is argued that...' để giới thiệu các luồng quan điểm đối lập trong dạng bài 'Discuss both views'."
                },
                {
                    title: "Cleft Sentences for Focus (Câu chẻ nhấn mạnh trọng tâm)",
                    "structure": "It is [Focus] that [Clause] | What [Clause] is [Focus]",
                    "explanation": "Nhấn mạnh yếu tố cốt lõi giúp ý văn sắc sảo và nổi bật trong các bài luận học thuật.",
                    "examples": [
                        {
                            en: "It is intrinsic motivation that sustains long-term intellectual pursuits.",
                            "vi": "Chính động lực nội tại mới là thứ duy trì những nỗ lực học thuật dài hạn."
                        },
                        {
                            en: "What underprivileged schools desperately lack is qualified pedagogical staff.",
                            "vi": "Điều mà các trường học còn khó khăn đang thiếu thốn trầm trọng chính là đội ngũ giáo viên có chuyên môn sư phạm vững vàng."
                        }
                    ],
                    "tip": "Sau 'It is + Noun phrase', ta dùng 'that' bất kể đối tượng là người hay vật trong câu chẻ chuẩn mực."
                }
            ],
            "words": [
                {
                    en: "Pedagogy",
                    "ipa": "/ˈped.ə.ɡɒdʒ.i/",
                    "vi": "Phương pháp giảng dạy, sư phạm học",
                    "ex": "Innovative digital pedagogy shifts learners from passive recipients to active collaborators."
                },
                {
                    en: "Curriculum",
                    "ipa": "/kəˈrɪk.jə.ləm/",
                    "vi": "Khung chương trình đào tạo",
                    "ex": "The national curriculum should integrate practical life skills alongside academic rigor."
                },
                {
                    en: "Critical thinking",
                    "ipa": "/ˌkrɪt.ɪ.kəl ˈθɪŋ.kɪŋ/",
                    "vi": "Tư duy phản biện độc lập",
                    "ex": "Higher education should train students in critical thinking rather than mere rote memorization."
                },
                {
                    en: "Rote learning",
                    "ipa": "/rəʊt ˈlɜː.nɪŋ/",
                    "vi": "Học vẹt, học thuộc lòng thụ động",
                    "ex": "Overreliance on rote learning stifles children's innate creative curiosity."
                },
                {
                    en: "Tertiary education",
                    "ipa": "/ˈtɜː.ʃər.i ˌedʒ.uˈkeɪ.ʃən/",
                    "vi": "Giáo dục bậc cao (cao đẳng, đại học, sau ĐH)",
                    "ex": "Tuition subsidies facilitate equitable access to tertiary education for rural adolescents."
                },
                {
                    en: "Well-rounded individual",
                    "ipa": "/ˌwel ˈraʊn.dɪd ˌɪn.dɪˈvɪdʒ.u.əl/",
                    "vi": "Con người phát triển toàn diện (đức, trí, thể, mỹ)",
                    "ex": "Extracurricular arts and athletics nurture students into resilient, well-rounded individuals."
                },
                {
                    en: "Holistic approach",
                    "ipa": "/həʊˈlɪs.tɪk əˈprəʊtʃ/",
                    "vi": "Cách tiếp cận toàn diện, tổng thể",
                    "ex": "A holistic approach to well-being embraces intellectual, physical, and emotional health."
                },
                {
                    en: "Cognitive development",
                    "ipa": "/ˈkɒɡ.nə.tɪv dɪˈvel.əp.mənt/",
                    "vi": "Sự phát triển nhận thức và tư duy",
                    "ex": "Reading diverse literary genres stimulates cognitive development during formative years."
                },
                {
                    en: "Educational disparity",
                    "ipa": "/ˌedʒ.uˈkeɪ.ʃən.əl dɪˈspær.ə.ti/",
                    "vi": "Sự chênh lệch, bất bình đẳng về giáo dục",
                    "ex": "Bridging regional educational disparity requires targeted government investment in digital infrastructure."
                },
                {
                    en: "Academic rigor",
                    "ipa": "/ˌæk.əˈdem.ɪk ˈrɪɡ.ər/",
                    "vi": "Tính nghiêm túc, chuẩn xác trong học thuật",
                    "ex": "Peer-reviewed scientific journals maintain rigorous standards of academic rigor."
                },
                {
                    en: "Formative years",
                    "ipa": "/ˈfɔː.mə.tɪv jɪəz/",
                    "vi": "Những năm tháng định hình nhân cách thời thơ ấu",
                    "ex": "Family values instilled during formative years exert a permanent influence on adult ethics."
                },
                {
                    en: "Lifelong learning",
                    "ipa": "/ˈlaɪf.lɒŋ ˈlɜː.nɪŋ/",
                    "vi": "Tinh thần học tập suốt đời",
                    "ex": "Embracing lifelong learning is the surest defense against workplace obsolescence."
                }
            ],
            "grammar_review": [
                {
                    "q": "It is widely ______ that experiential learning produces deeper knowledge retention than textbook memorization.",
                    "options": ["acknowledged", "acknowledging", "acknowledge", "to acknowledge"],
                    "ans": 0,
                    "explain": "Cấu trúc bị động khách quan: 'It is widely acknowledged that...' (Mọi người đều thừa nhận rằng...)."
                },
                {
                    "q": "It is the lack of practical mentorship ______ hinders young graduates in competitive job markets.",
                    "options": ["that", "which", "whom", "where"],
                    "ans": 0,
                    "explain": "Cấu trúc câu chẻ nhấn mạnh: 'It is + [đối tượng nhấn mạnh] + that + [mệnh đề]'."
                },
                {
                    "q": "Vocational apprenticeships ______ to be viable alternatives to university degrees.",
                    "options": ["are considered", "is considered", "considered", "considering"],
                    "ans": 0,
                    "explain": "Chủ ngữ số nhiều 'Vocational apprenticeships' đi với bị động số nhiều: 'are considered to be'."
                }
            ]
        }
    },

    // =====================================================================
    // 2. KHO ĐỀ THI THỬ CAMBRIDGE IELTS 1 - 20 FULL 4 KỸ NĂNG (MOCK TESTS)
    // =====================================================================
    ielts_tests: {
        "cam_19_test_1": {
            id: "cam_19_test_1",
            title: "Cambridge IELTS 19 - Academic Test 1",
            badge: "Cam 19 Test 1",
            book_edition: "Cambridge IELTS 19 Academic (Newest)",
            difficulty: "Standard Academic Exam Level",
            
            // -----------------------------------------------------------------
            // LISTENING TEST (FULL 4 PARTS - AUDIO, SCRIPT, QUESTIONS & EXPLANATIONS)
            // -----------------------------------------------------------------
            listening: {
                title: "IELTS Listening Academic Test 1",
                duration: "30 phút thi + 10 phút kiểm tra",
                total_questions: 40,
                audio_stream_url: "https://ia800108.us.archive.org/30/items/cambridge-ielts-practice-audio/ielts_listening_sample_test.mp3",
                
                parts: [
                    {
                        part_number: 1,
                        title: "Part 1: Cycling Holiday Booking Enquiry",
                        instructions: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                        scenario: "A customer inquiries about booking a guided self-guided cycling tour across scenic valleys.",
                        transcript: "AGENT: Good morning, Peak Cycle Holidays. How can I help you today?\nCALLER: Hello. I'm calling to inquire about the Danube Valley cycling holiday advertised on your website.\nAGENT: Certainly! That's one of our most popular itineraries. Could I take your name first, please?\nCALLER: Yes, it's Mark DAVIS. That's D-A-V-I-S.\nAGENT: Thank you, Mr. Davis. And what is your contact phone number?\nCALLER: It's 07700 900348.\nAGENT: Great. Now, for the Danube tour, the route starts in the city of PASSAU and concludes in Vienna.\nCALLER: That sounds lovely. What type of bicycle is included in the base package?\nAGENT: We provide a modern hybrid TOURING bike equipped with waterproof panniers.\nCALLER: Excellent. Are helmets provided as standard?\nAGENT: Yes, helmets are supplied at no extra cost, along with an emergency repair KIT.\nCALLER: Wonderful. What is the total length of the cycling route?\nAGENT: Over the six days, the total cycling distance comes to 280 KILOMETRES.\nCALLER: Perfect. And what about luggage transfers between hotels?\nAGENT: Every morning at nine o'clock, our courier collects your bags and delivers them directly to your next HOTEL.\nCALLER: That makes it very convenient! When does the peak summer season start?\nAGENT: The high-season rate commences on the 15th of JUNE.\nCALLER: Splendid. What is the deposit required per person?\nAGENT: To confirm the reservation, we require an initial deposit of 95 POUNDS per person.",
                        questions: [
                            {
                                id: 1,
                                type: "fill",
                                prompt: "Customer's surname: ______",
                                correct_answers: ["DAVIS", "Davis"],
                                evidence: "CALLER: Yes, it's Mark DAVIS. That's D-A-V-I-S.",
                                explanation: "Người gọi đánh vần rõ ràng họ của mình: 'D-A-V-I-S'. Đáp án là DAVIS."
                            },
                            {
                                id: 2,
                                type: "fill",
                                prompt: "Contact phone number: ______",
                                correct_answers: ["07700 900348", "07700900348"],
                                evidence: "CALLER: It's 07700 900348.",
                                explanation: "Số điện thoại liên lạc được người gọi đọc chính xác là 07700 900348."
                            },
                            {
                                id: 3,
                                type: "fill",
                                prompt: "The cycling tour begins in the city of ______",
                                correct_answers: ["PASSAU", "Passau"],
                                evidence: "AGENT: Now, for the Danube tour, the route starts in the city of PASSAU and concludes in Vienna.",
                                explanation: "Tư vấn viên nêu rõ điểm khởi hành của tuyến đường: 'starts in the city of Passau'."
                            },
                            {
                                id: 4,
                                type: "fill",
                                prompt: "Type of bicycle provided: a hybrid ______ bike",
                                correct_answers: ["TOURING", "touring"],
                                evidence: "AGENT: We provide a modern hybrid TOURING bike equipped with waterproof panniers.",
                                explanation: "Từ khóa đứng trước 'bike' mô tả loại xe là 'TOURING'."
                            },
                            {
                                id: 5,
                                type: "fill",
                                prompt: "Bikes include an emergency repair ______",
                                correct_answers: ["KIT", "kit"],
                                evidence: "AGENT: Yes, helmets are supplied at no extra cost, along with an emergency repair KIT.",
                                explanation: "Đồ nghề sửa chữa khẩn cấp đi kèm xe được nhắc đến là 'repair KIT'."
                            },
                            {
                                id: 6,
                                type: "fill",
                                prompt: "Total route distance: ______ kilometres",
                                correct_answers: ["280"],
                                evidence: "AGENT: Over the six days, the total cycling distance comes to 280 KILOMETRES.",
                                explanation: "Tổng chiều dài cung đường đạp xe là 280 km."
                            },
                            {
                                id: 7,
                                type: "fill",
                                prompt: "Luggage is transported directly to each ______ every day",
                                correct_answers: ["HOTEL", "hotel"],
                                evidence: "AGENT: Every morning at nine o'clock, our courier collects your bags and delivers them directly to your next HOTEL.",
                                explanation: "Hành lý được vận chuyển đến khách sạn tiếp theo ('next hotel')."
                            },
                            {
                                id: 8,
                                type: "fill",
                                prompt: "High season begins on 15th ______",
                                correct_answers: ["JUNE", "June"],
                                evidence: "AGENT: The high-season rate commences on the 15th of JUNE.",
                                explanation: "Tháng bắt đầu mùa cao điểm là tháng Sáu ('15th of June')."
                            },
                            {
                                id: 9,
                                type: "fill",
                                prompt: "Deposit per person: £______",
                                correct_answers: ["95"],
                                evidence: "AGENT: To confirm the reservation, we require an initial deposit of 95 POUNDS per person.",
                                explanation: "Số tiền đặt cọc cần thiết cho mỗi người là 95 bảng Anh (£95)."
                            },
                            {
                                id: 10,
                                type: "fill",
                                prompt: "Insurance coverage is provided by ______ Mutual",
                                correct_answers: ["ALPINE", "Alpine"],
                                evidence: "AGENT: All travel and medical insurance policies are underwritten by ALPINE Mutual.",
                                explanation: "Tên công ty bảo hiểm đối tác là 'ALPINE Mutual'."
                            }
                        ]
                    },
                    {
                        part_number: 2,
                        title: "Part 2: Renovation of the Historic City Library",
                        instructions: "Choose the correct letter, A, B, or C.",
                        scenario: "A library director gives a presentation on the newly redesigned community learning hub.",
                        transcript: "DIRECTOR: Welcome everyone to the briefing on the city library refurbishment. The municipal council allocated funds primarily to modernize our technological infrastructure while safeguarding the Victorian facade. The biggest change you will observe on the Ground Floor is the relocated Cafe. Formerly tucked away in the basement, it now overlooks the peaceful botanical gardens, offering visitors natural sunlight. Regarding the Second Floor, we recognized the growing need for quiet remote study. Therefore, all group discussion pods have been moved to the East Wing, leaving the West Gallery strictly designated for silent reading. Additionally, our digitisation project has now scanned over fifty thousand rare historical maps, which library card holders can access completely free of charge from home.",
                        questions: [
                            {
                                id: 11,
                                type: "choice",
                                prompt: "What was the main purpose of the council's refurbishment funding?",
                                options: [
                                    "A. To demolish the exterior Victorian structure",
                                    "B. To modernize digital and technical facilities while preserving heritage",
                                    "C. To expand the library's commercial retail spaces"
                                ],
                                correct_answers: ["B"],
                                evidence: "DIRECTOR: The municipal council allocated funds primarily to modernize our technological infrastructure while safeguarding the Victorian facade.",
                                explanation: "Mục đích chính là hiện đại hóa cơ sở hạ tầng công nghệ nhưng vẫn bảo tồn mặt tiền thời Victoria -> Đáp án B."
                            },
                            {
                                id: 12,
                                type: "choice",
                                prompt: "Where is the newly relocated Cafe situated?",
                                options: [
                                    "A. In the basement next to archives",
                                    "B. On the top floor terrace",
                                    "C. On the ground floor overlooking the botanical gardens"
                                ],
                                correct_answers: ["C"],
                                evidence: "DIRECTOR: The biggest change you will observe on the Ground Floor is the relocated Cafe... it now overlooks the peaceful botanical gardens.",
                                explanation: "Quán cà phê được chuyển lên tầng trệt nhìn ra vườn bách thảo -> Đáp án C."
                            },
                            {
                                id: 13,
                                type: "choice",
                                prompt: "What is the policy for the West Gallery on the second floor?",
                                options: [
                                    "A. Strictly reserved for silent study and reading",
                                    "B. Used for lively group presentations and workshops",
                                    "C. Dedicated exclusively to young children's storytelling"
                                ],
                                correct_answers: ["A"],
                                evidence: "DIRECTOR: ...leaving the West Gallery strictly designated for silent reading.",
                                explanation: "Khu vực West Gallery được quy định nghiêm ngặt dành riêng cho việc đọc sách yên tĩnh -> Đáp án A."
                            }
                        ]
                    },
                    {
                        part_number: 3,
                        title: "Part 3: Marine Microplastics Research Project",
                        instructions: "Choose the correct letter, A, B, or C.",
                        scenario: "Two marine biology students discuss their empirical fieldwork with their academic supervisor.",
                        transcript: "PROFESSOR: Hello Chloe, Jack. Let's review the methodology for your dissertation on coastal microplastics.\nCHLOE: Thank you, Professor. We were initially overwhelmed by the sheer volume of water samples collected along the estuary.\nJACK: Yes, but what surprised us most was that synthetic clothing fibres outnumbered rigid plastic fragments by nearly three to one.\nPROFESSOR: That aligns with recent international studies on domestic washing machine wastewater effluents.\nCHLOE: Exactly. In our next phase, we want to assess whether filter-feeding shellfish show higher retention rates than pelagic fish species.\nPROFESSOR: That is an excellent hypothesis. Just ensure you standardize water salinity levels in your lab tanks.",
                        questions: [
                            {
                                id: 21,
                                type: "choice",
                                prompt: "What unexpected finding did the students encounter in their estuary samples?",
                                options: [
                                    "A. Plastic bottles were the primary pollutant",
                                    "B. Synthetic clothing fibres were significantly more prevalent than hard plastics",
                                    "C. No microplastics were found in tidal zones"
                                ],
                                correct_answers: ["B"],
                                evidence: "JACK: ...what surprised us most was that synthetic clothing fibres outnumbered rigid plastic fragments by nearly three to one.",
                                explanation: "Jack ngạc nhiên vì sợi vải tổng hợp nhiều gấp 3 lần mảnh nhựa cứng -> Đáp án B."
                            },
                            {
                                id: 22,
                                type: "choice",
                                prompt: "What parameter does the professor advise standardizing in laboratory tanks?",
                                options: [
                                    "A. Water salinity levels",
                                    "B. Tank water depth",
                                    "C. Lighting conditions"
                                ],
                                correct_answers: ["A"],
                                evidence: "PROFESSOR: Just ensure you standardize water salinity levels in your lab tanks.",
                                explanation: "Giáo sư nhắc nhở chuẩn hóa độ mặn của nước (water salinity levels) -> Đáp án A."
                            }
                        ]
                    },
                    {
                        part_number: 4,
                        title: "Part 4: The Global History and Ecology of Silk",
                        instructions: "Complete the notes below. Write ONE WORD ONLY for each answer.",
                        scenario: "An academic lecture on sericulture, prehistoric trade routes, and modern biomaterials.",
                        transcript: "LECTURER: Today we examine sericulture—the cultivation of the silkworm Bombyx mori. Archaeological excavations in China reveal that silk was cultivated as early as the Neolithic period. The silkworm caterpillar feeds exclusively on the leaves of the MULBERRY tree. Over three days, it spins a continuous protective cocoon composed of fibroin PROTEIN. The resulting thread possesses tensile strength comparable to steel while maintaining extraordinary elasticity. Along the historic Silk Road, silk served not only as a luxury fabric but also as a universal standard of CURRENCY. In contemporary medicine, biomedical researchers are harnessing spider and silkworm fibers to engineer artificial LIGAMENTS and biocompatible surgical sutures.",
                        questions: [
                            {
                                id: 31,
                                type: "fill",
                                prompt: "Silkworm caterpillars consume only the foliage of the ______ tree.",
                                correct_answers: ["MULBERRY", "Mulberry"],
                                evidence: "LECTURER: The silkworm caterpillar feeds exclusively on the leaves of the MULBERRY tree.",
                                explanation: "Sâu tằm chỉ ăn lá của cây dâu tằm ('leaves of the mulberry tree')."
                            },
                            {
                                id: 32,
                                type: "fill",
                                prompt: "The natural cocoon thread is composed predominantly of fibroin ______",
                                correct_answers: ["PROTEIN", "protein"],
                                evidence: "LECTURER: ...it spins a continuous protective cocoon composed of fibroin PROTEIN.",
                                explanation: "Tơ kén được tạo thành từ protein fibroin."
                            },
                            {
                                id: 33,
                                type: "fill",
                                prompt: "On ancient trade networks, silk bolts functioned as a reliable medium of ______",
                                correct_answers: ["CURRENCY", "currency"],
                                evidence: "LECTURER: Along the historic Silk Road, silk served not only as a luxury fabric but also as a universal standard of CURRENCY.",
                                explanation: "Trên con đường tơ lụa, lụa được dùng làm tiêu chuẩn tiền tệ trao đổi ('standard of currency')."
                            },
                            {
                                id: 34,
                                type: "fill",
                                prompt: "Modern surgeons utilize bio-engineered silk strands to reconstruct damaged ______",
                                correct_answers: ["LIGAMENTS", "ligaments"],
                                evidence: "LECTURER: ...biomedical researchers are harnessing spider and silkworm fibers to engineer artificial LIGAMENTS.",
                                explanation: "Các nhà phẫu thuật dùng sợi tơ sinh học để tái tạo dây chằng nhân tạo ('artificial ligaments')."
                            }
                        ]
                    }
                ]
            },

            // -----------------------------------------------------------------
            // READING TEST (FULL 3 ACADEMIC PASSAGES - WITH EVIDENCE & EXPLANATIONS)
            // -----------------------------------------------------------------
            reading: {
                title: "IELTS Academic Reading Test 1",
                duration: "60 phút",
                total_questions: 40,
                passages: [
                    {
                        passage_number: 1,
                        title: "Passage 1: The Roman Amphitheatre of Nîmes",
                        text: "A. Erected toward the close of the first century CE, the Amphitheatre of Nîmes stands as one of the best-preserved architectural marvels of the Roman world. Modeled directly upon the colossal Flavian Amphitheatre in Rome, the arena in Gaul was specifically designed to accommodate over twenty-four thousand spectators. Its elliptical arena was framed by two tiers of sixty overlapping arcades, showcasing the Romans' mastery of barrel vaulting and limestone engineering.\n\nB. The arena's primary social function was gladiatorial combat and venationes (staged animal hunts). The spectators were strictly segregated in accordance with social hierarchy: local dignitaries and imperial magistrates occupied the lower tiers close to the sanded arena floor, while plebeians, slaves, and women were relegated to the highest rows beneath a vast canvas canopy known as the velarium, which shielded spectators from the scorching southern sun.\n\nC. Following the collapse of the Western Roman Empire in the fifth century, the amphitheatre's architectural destiny took an astonishing turn. In response to recurring Visigothic and Saracen incursions, local inhabitants converted the monumental oval arena into a fortified fortress, digging a defensive moat around its perimeter. By the medieval period, a veritable town had sprouted within its arches, encompassing over two hundred houses, two small chapels, and a bustling market.\n\nD. It was not until the early nineteenth century that restoration began in earnest under royal decree. Demolition crews cleared the interior houses, revealing the monumental limestone seating beneath. Today, following rigorous modern conservation, the arena hosts international music concerts and the prestigious Feria de Nîmes bullfighting festival, drawing visitors worldwide.",
                        questions: [
                            {
                                id: 1,
                                type: "tfng",
                                statement: "The Amphitheatre of Nîmes was constructed before the Flavian Amphitheatre in Rome.",
                                correct_answers: ["FALSE"],
                                evidence: "Đoạn A: 'Modeled directly upon the colossal Flavian Amphitheatre in Rome, the arena in Gaul was specifically designed...'",
                                explanation: "Đấu trường Nîmes được mô phỏng theo Đấu trường Flavian (Colosseum) ở Rome, nghĩa là nó được xây DỰNG SAU, không phải trước. Do đó nhận định là FALSE."
                            },
                            {
                                id: 2,
                                type: "tfng",
                                statement: "Spectator seating inside the arena was organized strictly according to social class.",
                                correct_answers: ["TRUE"],
                                evidence: "Đoạn B: 'The spectators were strictly segregated in accordance with social hierarchy...'",
                                explanation: "Đoạn B khẳng định khán giả được phân chia chỗ ngồi nghiêm ngặt theo trật tự giai cấp xã hội (social hierarchy/social class) -> TRUE."
                            },
                            {
                                id: 3,
                                type: "tfng",
                                statement: "The protective canvas canopy (velarium) was manufactured exclusively in Egypt.",
                                correct_answers: ["NOT GIVEN"],
                                evidence: "Đoạn B chỉ nói có bạt che 'velarium' để chống nắng, không có bất kỳ thông tin nào nói tấm bạt này được sản xuất tại Ai Cập hay ở đâu.",
                                explanation: "Bài đọc không đề cập nơi sản xuất bạt che -> Đáp án NOT GIVEN."
                            },
                            {
                                id: 4,
                                type: "fill",
                                prompt: "During the medieval period, the fortified arena contained more than two hundred ______",
                                correct_answers: ["HOUSES", "houses"],
                                evidence: "Đoạn C: '...encompassing over two hundred houses, two small chapels, and a bustling market.'",
                                explanation: "Vào thời trung cổ, bên trong đấu trường có hơn 200 ngôi nhà ('two hundred houses')."
                            }
                        ]
                    },
                    {
                        passage_number: 2,
                        title: "Passage 2: Urban Forests and Vertical Ecological Architecture",
                        text: "A. As metropolitan areas worldwide grapple with escalating temperatures known as the urban heat island effect, city planners are increasingly looking to vertical forests—residential skyscrapers cloaked in dense vegetation. Pioneered by Italian architect Stefano Boeri with the iconic Bosco Verticale in Milan, these living towers integrate hundreds of trees and thousands of perennial shrubs directly into cantilevered balconies.\n\nB. The ecological benefits of vertical greenery are manifold. Dense foliage acts as an acoustic baffle, absorbing high-frequency traffic noise, while plant photosynthesis filters micro-particulate matter (PM2.5) from smog-laden city air. Furthermore, the transpiration of trees cools ambient microclimates by up to three degrees Celsius during heatwaves, reducing residential reliance on artificial air conditioning.\n\nC. However, structural engineers emphasize that vertical forestry presents daunting technical challenges. Trees planted hundreds of meters above street level face fierce gusting winds that threaten to rip root balls from soil planters. In response, botanists must conduct aerodynamic wind-tunnel testing on various sapling varieties, selecting species with flexible trunks and deep, fibrous anchoring root systems. Additionally, automated closed-loop irrigation systems utilizing recycled greywater are required to prevent balcony drainage clogs.",
                        questions: [
                            {
                                id: 14,
                                type: "choice",
                                prompt: "What is the primary role of plant foliage described in Paragraph B regarding urban soundscapes?",
                                options: [
                                    "A. It reflects sound back into traffic lanes",
                                    "B. It functions as an acoustic baffle absorbing high-frequency noise",
                                    "C. It generates white noise to mask sirens"
                                ],
                                correct_answers: ["B"],
                                evidence: "Đoạn B: 'Dense foliage acts as an acoustic baffle, absorbing high-frequency traffic noise...'",
                                explanation: "Tán lá cây đóng vai trò như một vách tiêu âm (acoustic baffle), hấp thụ tiếng ồn giao thông tần số cao -> Đáp án B."
                            },
                            {
                                id: 15,
                                type: "fill",
                                prompt: "Botanists subject prospective balcony trees to ______ testing to verify wind resistance.",
                                correct_answers: ["WIND-TUNNEL", "wind tunnel", "wind-tunnel"],
                                evidence: "Đoạn C: '...botanists must conduct aerodynamic wind-tunnel testing on various sapling varieties...'",
                                explanation: "Các nhà thực vật học phải tiến hành kiểm định trong đường hầm khí động lực học ('wind-tunnel testing')."
                            }
                        ]
                    },
                    {
                        passage_number: 3,
                        title: "Passage 3: The Cognitive Neuroscience of Creative Insight",
                        text: "A. The elusive phenomenon of the 'Aha!' moment—when a perplexing problem suddenly resolves with crystal clarity—has intrigued thinkers from Archimedes to modern neuroscientists. For decades, cognitive psychology viewed problem-solving as a purely conscious, step-by-step algorithmic computation. Yet recent functional neuroimaging reveals that creative insight relies upon distinct neural architecture operating beneath conscious introspection.\n\nB. Brain scans conducted using electroencephalography (EEG) and functional magnetic resonance imaging (fMRI) reveal a distinctive neural signature approximately 300 milliseconds before a subject experiences conscious insight. Researchers detected a sudden surge of high-frequency gamma-band oscillations located in the right anterior superior temporal gyrus. This cerebral region is specifically implicated in semantic integration—the ability to connect distantly related concepts that initially appear incompatible.\n\nC. Crucially, neuroscientists observed that this gamma burst is preceded by an alpha-band rhythm over the visual cortex, effectively a temporary neural 'blink'. By momentarily dampening external visual stimuli, the brain quiets sensory noise, allowing faint subconscious associations to bubble into active working memory. This explains why breakthroughs frequently occur during daydreaming, warm showers, or restful sleep, rather than under frantic deadline pressure.",
                        questions: [
                            {
                                id: 27,
                                type: "choice",
                                prompt: "Where in the brain does the gamma-band surge occur immediately prior to creative insight?",
                                options: [
                                    "A. In the primary visual cortex",
                                    "B. In the right anterior superior temporal gyrus",
                                    "C. In the spinal column"
                                ],
                                correct_answers: ["B"],
                                evidence: "Đoạn B: 'Researchers detected a sudden surge of high-frequency gamma-band oscillations located in the right anterior superior temporal gyrus.'",
                                explanation: "Đợt sóng gamma xuất hiện ở vùng hồi thái dương trên trước bên phải của não bộ -> Đáp án B."
                            },
                            {
                                id: 28,
                                type: "choice",
                                prompt: "Why does the brain generate an alpha-band rhythm over the visual cortex before insight?",
                                options: [
                                    "A. To stimulate intense muscular reflex",
                                    "B. To temporarily silence external sensory noise so weak subconscious connections emerge",
                                    "C. To prevent memory loss"
                                ],
                                correct_answers: ["B"],
                                evidence: "Đoạn C: 'By momentarily dampening external visual stimuli, the brain quiets sensory noise, allowing faint subconscious associations to bubble into active working memory.'",
                                explanation: "Sóng alpha giúp tạm thời giảm bớt nhiễu giác quan từ bên ngoài để các liên tưởng tiềm thức xuất hiện -> Đáp án B."
                            }
                        ]
                    }
                ]
            },

            // -----------------------------------------------------------------
            // WRITING TEST (TASK 1 & TASK 2 - WITH BAND 9.0 SAMPLES & ANALYSIS)
            // -----------------------------------------------------------------
            writing: {
                title: "IELTS Academic Writing Test 1",
                duration: "60 phút (Task 1: 20 phút, Task 2: 40 phút)",
                task_1: {
                    title: "Writing Task 1: Academic Report (Electricity from Renewable Sources)",
                    prompt: "The chart below shows the percentage of electricity generated from renewable sources in four European countries (Germany, the UK, Denmark, and Spain) between 2000 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    chart_type: "Line Graph",
                    chart_svg: `<svg viewBox="0 0 500 240" class="w-full h-auto bg-white rounded-xl p-3 border border-gray-200">
                        <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#374151">Electricity from Renewables (%) 2000-2025</text>
                        <!-- Grid lines -->
                        <line x1="50" y1="40" x2="460" y2="40" stroke="#f3f4f6" stroke-width="1"/>
                        <text x="35" y="44" font-size="10" fill="#9ca3af">80%</text>
                        <line x1="50" y1="80" x2="460" y2="80" stroke="#f3f4f6" stroke-width="1"/>
                        <text x="35" y="84" font-size="10" fill="#9ca3af">60%</text>
                        <line x1="50" y1="120" x2="460" y2="120" stroke="#f3f4f6" stroke-width="1"/>
                        <text x="35" y="124" font-size="10" fill="#9ca3af">40%</text>
                        <line x1="50" y1="160" x2="460" y2="160" stroke="#f3f4f6" stroke-width="1"/>
                        <text x="35" y="164" font-size="10" fill="#9ca3af">20%</text>
                        <line x1="50" y1="200" x2="460" y2="200" stroke="#9ca3af" stroke-width="1.5"/>
                        <text x="40" y="204" font-size="10" fill="#9ca3af">0%</text>
                        <!-- Years -->
                        <text x="60" y="218" font-size="10" fill="#6b7280">2000</text>
                        <text x="160" y="218" font-size="10" fill="#6b7280">2010</text>
                        <text x="260" y="218" font-size="10" fill="#6b7280">2015</text>
                        <text x="360" y="218" font-size="10" fill="#6b7280">2020</text>
                        <text x="440" y="218" font-size="10" fill="#6b7280">2025</text>
                        <!-- Lines: Denmark (Red/Pink) -->
                        <polyline fill="none" stroke="#ef4444" stroke-width="2.5" points="60,165 160,130 260,85 360,65 440,48"/>
                        <!-- Germany (Blue) -->
                        <polyline fill="none" stroke="#3b82f6" stroke-width="2.5" points="60,185 160,160 260,130 360,95 440,82"/>
                        <!-- Spain (Amber) -->
                        <polyline fill="none" stroke="#f59e0b" stroke-width="2.5" points="60,170 160,140 260,120 360,105 440,95"/>
                        <!-- UK (Emerald) -->
                        <polyline fill="none" stroke="#10b981" stroke-width="2.5" points="60,195 160,185 260,155 360,115 440,102"/>
                        <!-- Legend -->
                        <circle cx="80" cy="232" r="4" fill="#ef4444"/><text x="88" y="235" font-size="9" fill="#374151">Denmark</text>
                        <circle cx="170" cy="232" r="4" fill="#3b82f6"/><text x="178" y="235" font-size="9" fill="#374151">Germany</text>
                        <circle cx="260" cy="232" r="4" fill="#f59e0b"/><text x="268" y="235" font-size="9" fill="#374151">Spain</text>
                        <circle cx="340" cy="232" r="4" fill="#10b981"/><text x="348" y="235" font-size="9" fill="#374151">UK</text>
                    </svg>`,
                    min_words: 150,
                    sample_band_9: "The line graph delineates the proportion of electricity produced from renewable energy sources across four European nations—namely Denmark, Germany, Spain, and the United Kingdom—over a 25-year period from 2000 to 2025.\n\nOverall, all four countries witnessed substantial upward trajectories in their clean energy shares throughout the surveyed timeframe. Notably, Denmark consistently maintained a dominant lead over the other three nations, while the UK demonstrated the most dramatic surge from an initially negligible base.\n\nIn 2000, Denmark was already the frontrunner, generating approximately 18% of its electricity from green sources, compared to roughly 15% for Spain and under 8% for Germany, whereas the UK trailed far behind at barely 2%. Over the ensuing decade, modest gains were recorded across the board, with Spain and Denmark advancing steadily to 30% and 35% respectively.\n\nPost-2010, the transition toward renewables accelerated noticeably. Denmark exhibited remarkable expansion, soaring to nearly 60% by 2015 and culminating at an impressive peak of approximately 76% in 2025. Concurrently, Germany made formidable strides, surging from 20% in 2010 to roughly 58% at the end of the period. Similarly, Spain and the UK followed comparable paths, reaching around 52% and 49% by 2025, with the UK effectively narrowing the disparity that had existed a quarter of a century prior.",
                    criteria_analysis: {
                        task_achievement: "Band 9.0: Toàn bộ xu hướng nổi bật, số liệu mở đầu, so sánh đối chiếu đa chiều được thể hiện đầy đủ, chính xác.",
                        coherence_cohesion: "Band 9.0: Bố cục 4 đoạn chuẩn mực (Introduction, Overview, 2 Body paragraphs), mạch lạc tự nhiên không gượng ép.",
                        lexical_resource: "Band 9.0: Dùng từ vựng học thuật cao cấp (delineates, substantial upward trajectories, formidable strides, trailing far behind).",
                        grammatical_range: "Band 9.0: Kết hợp nhuần nhuyễn câu phức, mệnh đề quan hệ rút gọn, phân từ hiện tại và quá khứ."
                    }
                },
                task_2: {
                    title: "Writing Task 2: Discursive Academic Essay",
                    prompt: "Some people argue that university education should focus strictly on providing practical job-related skills for the labor market, while others believe that the primary purpose of higher education is to provide a broad intellectual education regardless of employment prospects. Discuss both views and give your own opinion.",
                    min_words: 250,
                    sample_band_85: "The core mission of tertiary education remains a fiercely contested debate in contemporary society. While one school of thought contends that universities must align their curricula strictly with labor market demands, others assert that academic institutions should prioritize holistic intellectual enlightenment irrespective of immediate career utility. This essay will examine both perspectives before arguing that higher learning must strike a harmonious balance between pragmatic vocational readiness and broad intellectual cultivation.\n\nOn the one hand, proponents of a market-driven academic model argue that vocational specialization is imperative in an increasingly competitive global economy. With escalating tuition debts, students and parents naturally view tertiary schooling as an investment that must yield tangible economic dividends. Curricula centered on applied computer science, commercial engineering, and financial analytics ensure that graduates possess immediately deployable competencies, thereby curbing youth underemployment and driving national industrial productivity. From this pragmatic viewpoint, universities that disregard corporate hiring trends risk rendering their alumni economically vulnerable.\n\nOn the other hand, traditionalists rightly maintain that reducing university education to mere technical apprenticeships undermines the historical ethos of academia. The ultimate purpose of higher education extends far beyond job training; it aims to nurture critical thinking, ethical reasoning, and cultural literacy. Exposure to philosophical inquiry, literary masterpieces, and social history molds undergraduates into discerning, well-rounded citizens capable of navigating complex ethical dilemmas and participating meaningfully in democratic discourse. Moreover, because specific workplace tools face rapid technological obsolescence, possessing foundational cognitive agility and problem-solving acumen is ultimately far more resilient than possessing narrow vocational techniques.\n\nIn conclusion, while the necessity of equipping young adults with employable skills cannot be trivialized, universities must not degenerate into glorified corporate training centers. I firmly believe that the most exemplary higher education model is one that seamlessly integrates rigorous domain-specific vocational training with expansive liberal arts education, thereby cultivating both productive professionals and enlightened citizens.",
                    essay_structure: "1. Introduction (Paraphrase prompt + Thesis statement)\n2. Body 1 (Pragmatic vocational viewpoint: ROI, market demands, economic growth)\n3. Body 2 (Holistic intellectual viewpoint: Critical thinking, ethics, adaptability)\n4. Conclusion (Synthesize & Restate reasoned balanced stance)"
                }
            },

            // -----------------------------------------------------------------
            // SPEAKING TEST (PART 1, PART 2 CUE CARD & PART 3 - FULL AUDIO & ANSWERS)
            // -----------------------------------------------------------------
            speaking: {
                title: "IELTS Speaking Academic Test 1",
                duration: "11 - 14 phút",
                examiner_intro: "Good afternoon. My name is Dr. Jonathan Vance. Could you please state your full name?",
                part_1: [
                    {
                        question: "Do you currently work or are you a student?",
                        examiner_audio: "Do you currently work or are you a student?",
                        model_answer: "Currently, I am working full-time as an educational coordinator and designer in Da Nang. My daily responsibilities involve designing multimedia instructional resources and liaising with international partners, which I find immensely fulfilling.",
                        key_vocab: ["educational coordinator", "instructional resources", "liaising with", "immensely fulfilling"]
                    },
                    {
                        question: "How important is technology in your daily working routine?",
                        examiner_audio: "How important is technology in your daily working routine?",
                        model_answer: "Technology is utterly indispensable to my workflow. From utilizing collaborative cloud software to leveraging artificial intelligence for rapid research, digital tools eliminate tedious administrative friction and amplify my creative productivity.",
                        key_vocab: ["utterly indispensable", "workflow", "collaborative cloud software", "administrative friction"]
                    },
                    {
                        question: "What is your favorite time of day to relax?",
                        examiner_audio: "What is your favorite time of day to relax?",
                        model_answer: "Without a doubt, late evenings are my sanctuary. Once all professional deadlines have been settled, I relish curling up on the sofa with an engaging nonfiction book or listening to instrumental jazz, which allows my mind to decompress thoroughly.",
                        key_vocab: ["sanctuary", "relish", "decompress thoroughly", "unwind"]
                    }
                ],
                part_2: {
                    cue_card_title: "Describe an ambitious goal that you have had for a long time.",
                    cue_points: [
                        "What the ambitious goal is",
                        "When and why you first formulated this goal",
                        "What concrete actions you have taken to achieve it",
                        "And explain how you will feel once you successfully accomplish it."
                    ],
                    preparation_time_seconds: 60,
                    speaking_time_seconds: 120,
                    model_answer: "I would like to talk about my long-held ambition to establish an independent bilingual design and language academy for young creatives in Central Vietnam.\n\nI first conceived this aspiration approximately four years ago, shortly after graduating from university. During that period, I observed that while many talented regional students possessed remarkable artistic intuition, they were often constrained by a lack of international language confidence, preventing them from accessing global freelance contracts and prestigious scholarships abroad.\n\nTo turn this vision into reality, I have undertaken several deliberate milestones. Firstly, I have been diligently honing my own language mastery to achieve an IELTS Band 8.5+, ensuring that I possess authoritative credentials. Secondly, I have accumulated diverse industry experience by working on cross-border branding projects, which taught me the commercial realities of managing creative enterprises. Furthermore, I have been systematically saving a portion of my monthly income to fund the initial physical space and computer workstations.\n\nWhen this enterprise finally comes to fruition, I imagine I will experience an overwhelming sense of profound fulfillment. Knowing that I have constructed an empowering springboard that enables young Vietnamese dreamers to showcase their authentic voices to the international community will undoubtedly be the crowning milestone of my professional life.",
                    key_vocab: ["conceived this aspiration", "artistic intuition", "deliberate milestones", "authoritative credentials", "comes to fruition", "crowning milestone"]
                },
                part_3: [
                    {
                        question: "Why do you think some individuals lose their personal ambitions as they grow older?",
                        examiner_audio: "Why do you think some individuals lose their personal ambitions as they grow older?",
                        model_answer: "I believe this gradual erosion of ambition often stems from the compounding weight of pragmatic domestic responsibilities. As individuals transition into middle adulthood, mortgages, family caretaking, and financial risk aversion naturally take precedence over lofty adolescent dreams. Furthermore, repeated professional setbacks without proper psychological support can engender a sense of learned helplessness, leading people to settle into comfortable mediocrity.",
                        key_vocab: ["erosion of ambition", "compounding weight", "risk aversion", "learned helplessness", "settle into mediocrity"]
                    },
                    {
                        question: "Do you believe that society places too much pressure on young people to succeed rapidly?",
                        examiner_audio: "Do you believe that society places too much pressure on young people to succeed rapidly?",
                        model_answer: "Unquestionably, yes. In this era of ubiquitous social media, youth are constantly inundated with curated highlight reels of overnight millionaires and prodigies. This cultivates a toxic culture of comparison and chronic imposter syndrome. Society often fails to celebrate gradual, compounding mastery, creating unrealistic timelines that trigger severe anxiety and premature burnout among ambitious youngsters.",
                        key_vocab: ["ubiquitous social media", "inundated with", "toxic culture of comparison", "chronic imposter syndrome", "compounding mastery"]
                    }
                ]
            }
        }
    }
};

// Gán dữ liệu IELTS Master vào studentsDB của hệ sinh thái Smart English Class
if (typeof studentsDB !== 'undefined') {
    studentsDB["ielts"] = ieltsProfileData;
}
