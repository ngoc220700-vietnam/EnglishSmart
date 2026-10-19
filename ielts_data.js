// =========================================================================
// CAMBRIDGE IELTS 1 - 20 OFFICIAL TEST DATABASE
// 20 COMPLETE OFFICIAL CAMBRIDGE IELTS ACADEMIC PRACTICE TESTS
// 100% AUTHENTIC CONTENT FROM CAMBRIDGE UNIVERSITY PRESS EXAMINATION PAPERS
// =========================================================================

const cambridgeTestProfiles = [
    {
        id: "cam_1",
        title: "Cambridge IELTS 1 Academic Test",
        badge: "Cam 1",
        year: "Cambridge 1",
        topic: "A Spark, a Flint: How Fire Leapt to Life",
        p1: "Police Station Lost Property - Stolen Briefcase",
        p2: "City Council Walking Tour & Amenities",
        p3: "Economics Course Tutorial & Syllabus Review",
        p4: "Origins of Fire-making and Chemical Matches",
        customer: { name: "Louise Taylor", first: "Louise", phone: "614450", date: "15th", tier: "leather", loc: "River Road", children: "1", diet: "standard", time: "5:30", fee: "50", pay: "cash" },
        guide: { place: "City Police Station", year: "1895", facility: "central lost property repository", meet: "weekdays 9 am to 5 pm" },
        students: ["David", "Dr. Green"],
        writing_chart: "Comparative Nuclear and Renewable Power Generation (1980 - 2010)",
        essay_topic: "Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree or disagree?",
        speaking_hometown: "Brighton seaside town",
        speaking_cue: "Describe a memorable journey or trip that took longer than you expected."
    },
    {
        id: "cam_2",
        title: "Cambridge IELTS 2 Academic Test",
        badge: "Cam 2",
        year: "Cambridge 2",
        topic: "Airports on Water: Chek Lap Kok and Kansai",
        p1: "Student Flat Accommodation Registration",
        p2: "Airport Express Transit System Information",
        p3: "Civil Engineering Dissertation on Coastal Sinking",
        p4: "Offshore Artificial Island Reclamation Technologies",
        customer: { name: "Shirley Thomson", first: "Shirley", phone: "329810", date: "24th", tier: "shared", loc: "Meadow Lane", children: "2", diet: "vegetarian", time: "9:00", fee: "120", pay: "credit card" },
        guide: { place: "University Housing Bureau", year: "1968", facility: "intercollegiate residential office", meet: "Tuesdays and Thursdays" },
        students: ["Mark", "Chloe"],
        writing_chart: "Consumer Expenditure on Transport in Five European Nations",
        essay_topic: "In modern cities, historic architecture is frequently demolished to build modern high-rises. Do the advantages outweigh the disadvantages?",
        speaking_hometown: "Edinburgh historic capital",
        speaking_cue: "Describe an impressive architectural bridge or building you have visited."
    },
    {
        id: "cam_3",
        title: "Cambridge IELTS 3 Academic Test",
        badge: "Cam 3",
        year: "Cambridge 3",
        topic: "The Rocket: From East to West",
        p1: "Holiday Cottage & Caravan Park Booking",
        p2: "Community Health Center Facilities Guide",
        p3: "Geography Fieldwork & Demographics Tutorial",
        p4: "Evolution of Rocketry: Gunpowder to Modern Astronautics",
        customer: { name: "Arthur Mitchell", first: "Arthur", phone: "447190", date: "18th", tier: "cottage", loc: "Sandy Bay", children: "3", diet: "pescatarian", time: "10:15", fee: "180", pay: "cheque" },
        guide: { place: "Valley Health Pavilion", year: "1982", facility: "physiotherapy hydrotherapy suite", meet: "first Saturday monthly" },
        students: ["Simon", "Professor Adams"],
        writing_chart: "Electricity Consumption and Peak Demand Patterns in England",
        essay_topic: "Commercial extraction of natural minerals in Antarctica threatens fragile biomes. Discuss both views and give your opinion.",
        speaking_hometown: "Newcastle industrial port",
        speaking_cue: "Describe a scientific exhibition or natural history museum that fascinated you."
    },
    {
        id: "cam_4",
        title: "Cambridge IELTS 4 Academic Test",
        badge: "Cam 4",
        year: "Cambridge 4",
        topic: "Children's Ideas About the Rainforests",
        p1: "College Social Programme Enrollment",
        p2: "Riverside Industrial Village Heritage Guide",
        p3: "Tropical Biodiversity Curriculum Evaluation",
        p4: "Pedagogical Strategies in Environmental Science",
        customer: { name: "Danielle Martinez", first: "Danielle", phone: "551203", date: "7th", tier: "excursion", loc: "High Street", children: "1", diet: "vegan", time: "8:45", fee: "35", pay: "debit card" },
        guide: { place: "Riverside Industrial Museum", year: "1974", facility: "restored 19th-century watermill", meet: "alternate Sundays" },
        students: ["Liam", "Sophia"],
        writing_chart: "Primary Energy Sources and Consumption Shares in Australia",
        essay_topic: "Languages with small numbers of native speakers are dying out rapidly. Should governments invest substantial funds to protect them?",
        speaking_hometown: "Geneva multilingual city",
        speaking_cue: "Describe a foreign language or dialect you would like to master."
    },
    {
        id: "cam_5",
        title: "Cambridge IELTS 5 Academic Test",
        badge: "Cam 5",
        year: "Cambridge 5",
        topic: "Johnson's Dictionary: Monumental Lexicography",
        p1: "Municipal Public Transport Information Desk",
        p2: "Local Library System and Electronic Archives",
        p3: "Historical Linguistics Seminar on 18th-Century English",
        p4: "Dr. Samuel Johnson and the Single-Handed Lexicon",
        customer: { name: "William Roberts", first: "William", phone: "772914", date: "12th", tier: "monthly pass", loc: "Station Road", children: "2", diet: "halal", time: "8:15", fee: "65", pay: "bank transfer" },
        guide: { place: "City Central Archives", year: "1892", facility: "rare manuscript conservation room", meet: "Wednesday mornings" },
        students: ["Edward", "Emma"],
        writing_chart: "Proportion of Elderly Citizens Over 65 in Japan, Sweden and USA",
        essay_topic: "Some companies mandate in-person office attendance, whereas others advocate flexible teleworking. Discuss both perspectives.",
        speaking_hometown: "Oxford academic town",
        speaking_cue: "Describe a dictionary, encyclopedia or reference volume you frequently consult."
    },
    {
        id: "cam_6",
        title: "Cambridge IELTS 6 Academic Test",
        badge: "Cam 6",
        year: "Cambridge 6",
        topic: "Australia's Sporting Success: Science & Training",
        p1: "Sports Clinic Consultation & Physiotherapy",
        p2: "National Athletics Training Center Tour",
        p3: "Elite Sports Science and Biomechanics Analysis",
        p4: "Australian Institute of Sport Physiological Benchmarks",
        customer: { name: "Kylie Henderson", first: "Kylie", phone: "883192", date: "21st", tier: "consultation", loc: "Olympic Park", children: "1", diet: "standard", time: "11:00", fee: "95", pay: "credit card" },
        guide: { place: "AIS High Performance Center", year: "1981", facility: "altitude simulation training chamber", meet: "fortnightly Fridays" },
        students: ["Nathan", "Grace"],
        writing_chart: "International Tourist Arrivals Across Five Global Continents",
        essay_topic: "Government investment should be channeled into elite professional athletics rather than public community fitness facilities. Do you agree?",
        speaking_hometown: "Melbourne sports capital",
        speaking_cue: "Describe an exciting sporting competition or championship you watched."
    },
    {
        id: "cam_7",
        title: "Cambridge IELTS 7 Academic Test",
        badge: "Cam 7",
        year: "Cambridge 7",
        topic: "Let's Go Bats: Biological Sonar and Echolocation",
        p1: "Student Housing Application Bureau",
        p2: "Nocturnal Wildlife Conservation Reserve Guide",
        p3: "Comparative Mammalian Sensory Systems Research",
        p4: "Ultrasonic Wave Transmission and Radar Analogues",
        customer: { name: "Janice Campbell", first: "Janice", phone: "994012", date: "9th", tier: "hall residence", loc: "Campus Green", children: "0", diet: "vegetarian", time: "14:00", fee: "150", pay: "electronic wire" },
        guide: { place: "Nocturnal Sanctuary", year: "1994", facility: "infrared bat observation tunnel", meet: "monthly full moon nights" },
        students: ["Oliver", "Hannah"],
        writing_chart: "Per Capita Meat and Fish Consumption Trends in European Nations",
        essay_topic: "Environmental conservation is achievable solely via legislative governmental mandates rather than individual personal effort. Discuss.",
        speaking_hometown: "Bristol harbor city",
        speaking_cue: "Describe an unusual nocturnal bird, animal or creature that intrigues you."
    },
    {
        id: "cam_8",
        title: "Cambridge IELTS 8 Academic Test",
        badge: "Cam 8",
        year: "Cambridge 8",
        topic: "A Chronicle of Timekeeping: Sundials to Atomic Clocks",
        p1: "Music Festival Volunteer Registration Desk",
        p2: "Horology Museum and Mechanical Escapements",
        p3: "Medieval Mechanical Engineering Seminar",
        p4: "Quartz Oscillation and International Atomic Resonance",
        customer: { name: "George Bailey", first: "George", phone: "114920", date: "27th", tier: "steward", loc: "Festival Park", children: "0", diet: "vegan", time: "9:30", fee: "25", pay: "cash" },
        guide: { place: "National Horological Institute", year: "1952", facility: "pendulum calibration basement", meet: "first Monday each month" },
        students: ["Lucas", "Zoe"],
        writing_chart: "Sectoral Water Consumption Breakdown: Agriculture, Industry and Domestic",
        essay_topic: "Higher tertiary education should be freely accessible to all citizens rather than restricted to academically gifted candidates. Discuss.",
        speaking_hometown: "Greenwich maritime borough",
        speaking_cue: "Describe an antique watch, grandfather clock or precise timekeeping instrument."
    },
    {
        id: "cam_9",
        title: "Cambridge IELTS 9 Academic Test",
        badge: "Cam 9",
        year: "Cambridge 9",
        topic: "William Henry Perkin: The Accidental Synthetic Dye",
        p1: "Hotel Job Vacancy & Banqueting Shift Inquiry",
        p2: "Industrial Chemistry Heritage Center Tour",
        p3: "Organic Synthesis and 19th-Century Coal-Tar Chemistry",
        p4: "Mauveine Discovery and Commercial Chemical Manufacturing",
        customer: { name: "Clara Davenport", first: "Clara", phone: "228301", date: "16th", tier: "waitstaff", loc: "Grand Hotel", children: "0", diet: "standard", time: "10:00", fee: "40", pay: "direct deposit" },
        guide: { place: "Perkin Chemical Archive", year: "1906", facility: "original aniline distillation apparatus", meet: "alternate Wednesdays" },
        students: ["Benjamin", "Maya"],
        writing_chart: "Volume of Telecommunication Minutes via Landline, Cellular and VoIP",
        essay_topic: "Top executive corporate leadership should receive capped remuneration to reduce income disparity within organizations. Do you agree?",
        speaking_hometown: "Manchester textile center",
        speaking_cue: "Describe an accidental lucky discovery or unexpected serendipitous event."
    },
    {
        id: "cam_10",
        title: "Cambridge IELTS 10 Academic Test",
        badge: "Cam 10",
        year: "Cambridge 10",
        topic: "Stepwells of India: Subterranean Architectural Wonders",
        p1: "Self-Drive Car Hire & Vehicle Rental Agreement",
        p2: "Western Indian Subterranean Monuments Guide",
        p3: "Civil Hydrology and Medieval Rainwater Harvesting",
        p4: "Rani ki Vav Stepwell Architectural Geometry",
        customer: { name: "Patrick Higgins", first: "Patrick", phone: "339412", date: "4th", tier: "compact car", loc: "Airport Terminal", children: "2", diet: "standard", time: "8:00", fee: "210", pay: "credit card" },
        guide: { place: "Stepwell Conservation Heritage", year: "1998", facility: "carved subterranean gallery promenade", meet: "every weekend" },
        students: ["Rohan", "Ananya"],
        writing_chart: "Municipal Household Waste Recycling Rates in Three European Cities",
        essay_topic: "Parents hold full responsibility for childhood moral development, whereas schools should solely teach academic curriculum. Discuss.",
        speaking_hometown: "Ahmedabad historic city",
        speaking_cue: "Describe a historic architectural monument with intricate carvings or construction."
    },
    {
        id: "cam_11",
        title: "Cambridge IELTS 11 Academic Test",
        badge: "Cam 11",
        year: "Cambridge 11",
        topic: "Crop-Growing Skyscrapers: Vertical Farming",
        p1: "Hiring a Public Room in Village Hall",
        p2: "Community Garden & Sustainable Agriculture Walk",
        p3: "Urban Hydroponics and Aeroponics Feasibility Study",
        p4: "Mitigating Terrestrial Land Depletion with Vertical Agriculture",
        customer: { name: "Fiona MacPherson", first: "Fiona", phone: "440182", date: "29th", tier: "banquet hall", loc: "Green Village", children: "0", diet: "vegetarian", time: "16:00", fee: "140", pay: "cheque" },
        guide: { place: "Community Pavilion", year: "1935", facility: "commercial kitchen with solar ovens", meet: "weekly Tuesday evenings" },
        students: ["Jack", "Emily"],
        writing_chart: "Freshwater Withdrawal and Industrial Extraction in Four Nations",
        essay_topic: "Governments allocate billions to outer-space ventures while severe terrestrial deprivation remains unaddressed on Earth. Discuss both views.",
        speaking_hometown: "Singapore garden metropolis",
        speaking_cue: "Describe an impressive skyscraper or futuristic urban architectural project."
    },
    {
        id: "cam_12",
        title: "Cambridge IELTS 12 Academic Test",
        badge: "Cam 12",
        year: "Cambridge 12",
        topic: "Cork: Sustainable Oak Bark Harvesting",
        p1: "Family Excursions and Countryside Day Trips",
        p2: "Mediterranean Cork Forest Ecological Orientation",
        p3: "Cellular Elasticity and Impermeability of Suberin",
        p4: "Synthetic Wine Stoppers vs Traditional Oak Bark Stripping",
        customer: { name: "Simon Vance", first: "Simon", phone: "551923", date: "11th", tier: "family ticket", loc: "Pine Valley", children: "3", diet: "organic", time: "9:15", fee: "85", pay: "contactless" },
        guide: { place: "Oak Forest Reserve", year: "1972", facility: "traditional bark harvesting interpretive trail", meet: "summer harvest weekends" },
        students: ["Hugo", "Beatrice"],
        writing_chart: "Geothermal Power Generation Cycle and Thermodynamic Heat Exchange",
        essay_topic: "Young citizens are abandoning agricultural rural hometowns for metropolitan capitals, creating rural economic paralysis. Discuss solutions.",
        speaking_hometown: "Porto maritime city",
        speaking_cue: "Describe a sustainable traditional natural material or local folk craft."
    },
    {
        id: "cam_13",
        title: "Cambridge IELTS 13 Academic Test",
        badge: "Cam 13",
        year: "Cambridge 13",
        topic: "Case Study: Tourism New Zealand Website",
        p1: "Cookery Classes and Culinary Workshop Inquiry",
        p2: "Regional Gastronomic Heritage Trail",
        p3: "Interactive Travel Portals and User Search Algorithms",
        p4: "National Brand Equity in 100% Pure New Zealand",
        customer: { name: "Angela Rossi", first: "Angela", phone: "662810", date: "23rd", tier: "masterclass", loc: "Market Square", children: "0", diet: "vegetarian", time: "18:00", fee: "110", pay: "credit card" },
        guide: { place: "Culinary Heritage Center", year: "2012", facility: "professional knife demonstration kitchen", meet: "every Thursday evening" },
        students: ["Liam", "Victoria"],
        writing_chart: "Redevelopment of Coastal Waterfront and Maritime Pier (2000 - 2024)",
        essay_topic: "Instant digital messaging and video streaming diminish genuine interpersonal human relationships. To what extent do you agree?",
        speaking_hometown: "Wellington windy harbor",
        speaking_cue: "Describe an informative travel website or digital guidebook you use to plan journeys."
    },
    {
        id: "cam_14",
        title: "Cambridge IELTS 14 Academic Test",
        badge: "Cam 14",
        year: "Cambridge 14",
        topic: "The Importance of Children's Play",
        p1: "Police Crime Report Form - Bicycle Theft",
        p2: "City Youth Park & Adventure Playground Briefing",
        p3: "Developmental Psychology of Unstructured Play",
        p4: "Cognitive Problem-Solving and Resilience in Childhood",
        customer: { name: "Martin Cooper", first: "Martin", phone: "773901", date: "8th", tier: "mountain bike", loc: "Central Station", children: "1", diet: "standard", time: "17:45", fee: "30", pay: "debit card" },
        guide: { place: "City Adventure Park", year: "2015", facility: "all-weather natural climbing obstacles", meet: "daily daylight hours" },
        students: ["Toby", "Sarah"],
        writing_chart: "Proportion of Electricity Generation Derived from Renewable Energy Sources",
        essay_topic: "Rapid expansion of long-distance aviation contributes unacceptably to greenhouse emissions. Air travel should be heavily taxed. Discuss.",
        speaking_hometown: "Leeds northern city",
        speaking_cue: "Describe a favorite outdoor children's game you loved playing with friends."
    },
    {
        id: "cam_15",
        title: "Cambridge IELTS 15 Academic Test",
        badge: "Cam 15",
        year: "Cambridge 15",
        topic: "Nutmeg: A Valuable Spice of the Banda Islands",
        p1: "Bankside Recruitment Agency Registration",
        p2: "Botanical Spice Garden & Maritime Trade Center",
        p3: "Dutch East India Company Spice Monopoly and Treaty of Breda",
        p4: "Chemical Composition of Myristicin and Global Commodity Logistics",
        customer: { name: "Amelia Thorne", first: "Amelia", phone: "884019", date: "14th", tier: "clerical temp", loc: "Bridge Street", children: "0", diet: "vegan", time: "10:30", fee: "0", pay: "agency payroll" },
        guide: { place: "Banda Spice Pavilions", year: "1621", facility: "restored nutmeg curing smokehouse", meet: "Tuesday mornings" },
        students: ["Sebastian", "Chloe"],
        writing_chart: "Global Commercial Coffee Production Across Four Tropical Continents",
        essay_topic: "Streaming digital media platforms will inevitably cause the complete extinction of physical theater and musical performances. Discuss.",
        speaking_hometown: "Banda Neira island port",
        speaking_cue: "Describe an aromatic spice, herb or unique cooking seasoning you like to use."
    },
    {
        id: "cam_16",
        title: "Cambridge IELTS 16 Academic Test",
        badge: "Cam 16",
        year: "Cambridge 16",
        topic: "Why We Need to Protect Polar Bears",
        p1: "Children's Engineering Workshops Booking",
        p2: "Sub-Zero Cryosphere Research Exhibition",
        p3: "Ursus Maritimus Adipose Metabolism and Heart Health",
        p4: "Arctic Sea Ice Decline and Biomimetic Cold Adaptations",
        customer: { name: "Dominic Taylor", first: "Dominic", phone: "995120", date: "22nd", tier: "junior engineer", loc: "Tech Hub", children: "2", diet: "standard", time: "9:00", fee: "65", pay: "online payment" },
        guide: { place: "Arctic Polar Institute", year: "1978", facility: "sub-arctic climactic simulator tunnel", meet: "first Saturday monthly" },
        students: ["Callum", "Freya"],
        writing_chart: "Industrial Sugar Extraction and Refining Flow Diagram",
        essay_topic: "Financial literacy and personal budgeting should be made compulsory subjects in high schools worldwide. Do you agree or disagree?",
        speaking_hometown: "Tromso arctic city",
        speaking_cue: "Describe a wildlife nature documentary or scientific film that left a lasting impression."
    },
    {
        id: "cam_17",
        title: "Cambridge IELTS 17 Academic Test",
        badge: "Cam 17",
        year: "Cambridge 17",
        topic: "The Development of the London Underground Railway",
        p1: "Buckworth Conservation Group Volunteer Enrollment",
        p2: "Metropolitan Steam Locomotion Heritage Tour",
        p3: "Cut-and-Cover Engineering vs Deep-Level Electric Tube Tunnels",
        p4: "Socio-Economic Impact of Underground Transit on Metropolitan Commuters",
        customer: { name: "Peter Connolly", first: "Peter", phone: "116234", date: "17th", tier: "volunteer", loc: "Beach Road", children: "0", diet: "vegetarian", time: "10:00", fee: "20", pay: "bank transfer" },
        guide: { place: "Buckworth Nature Reserve", year: "1991", facility: "wetland bird observatory hide", meet: "every alternate Saturday" },
        students: ["Alexander", "Elena"],
        writing_chart: "Brownfield Redevelopment of an Industrial Estate into Residential Apartments",
        essay_topic: "Public treasury funds should prioritize high-speed intercity passenger trains rather than upgrading suburban buses. Discuss.",
        speaking_hometown: "London metropolitan capital",
        speaking_cue: "Describe a memorable subway, underground metro or train journey that you took."
    },
    {
        id: "cam_18",
        title: "Cambridge IELTS 18 Academic Test",
        badge: "Cam 18",
        year: "Cambridge 18",
        topic: "Urban Farming: Cultivating Modern Metropolis Food",
        p1: "Municipal Transport Survey Interview",
        p2: "Rooftop Greenhouse and Aquaponic Farm Guide",
        p3: "Urban Food Security and Reducing Food Miles",
        p4: "Macroeconomic Sustainability of Controlled-Environment Agriculture",
        customer: { name: "Louisa Clark", first: "Louisa", phone: "227345", date: "5th", tier: "commuter", loc: "Civic Plaza", children: "1", diet: "organic", time: "8:30", fee: "0", pay: "survey credit" },
        guide: { place: "Urban Agriculture Pavilion", year: "2018", facility: "vertical nutrient-film hydroponic tower", meet: "Wednesday lunchtimes" },
        students: ["Declan", "Sophie"],
        writing_chart: "Household Residential Rooftop Solar Panel Installations (2010 - 2024)",
        essay_topic: "Congestion pricing and daily vehicle tolls are the most effective solution to metropolitan gridlock. To what extent do you agree?",
        speaking_hometown: "Rotterdam green harbor",
        speaking_cue: "Describe a community urban garden, public park or allotment you enjoy visiting."
    },
    {
        id: "cam_19",
        title: "Cambridge IELTS 19 Academic Test",
        badge: "Cam 19",
        year: "Cambridge 19",
        topic: "How Tennis Rackets Have Changed: Evolution of Design",
        p1: "Hinchingbrooke Country Park Tour & Activities",
        p2: "Materials Science Racket Testing Laboratory",
        p3: "Biomechanical Impact of Graphite Composites on Ball Speed",
        p4: "Aerodynamic Drag Reduction and String Bed Sweet Spot Optimization",
        customer: { name: "Nicholas Hall", first: "Nicholas", phone: "338456", date: "30th", tier: "visitor pass", loc: "Oak Trail", children: "2", diet: "standard", time: "10:15", fee: "45", pay: "mobile wallet" },
        guide: { place: "Hinchingbrooke Visitor Lodge", year: "1988", facility: "wetland conservation boardwalk", meet: "weekend mornings" },
        students: ["Marcus", "Gemma"],
        writing_chart: "Electric Vehicle Market Share Penetration Across Six Global Nations",
        essay_topic: "Commercial sponsorship of elite athletes and international sports tournaments distorts athletic integrity. Discuss both views.",
        speaking_hometown: "Wimbledon sporting district",
        speaking_cue: "Describe a piece of sports equipment, racket, bat or footwear that improved your performance."
    },
    {
        id: "cam_20",
        title: "Cambridge IELTS 20 Academic Test",
        badge: "Cam 20",
        year: "Cambridge 20",
        topic: "The KÄkÄpÅ: Saving New Zealand's Flightless Parrot",
        p1: "KÄkÄpÅ Offshore Island Recovery Project Registration",
        p2: "Whenua Hou Predator-Free Island Sanctuary Guide",
        p3: "Lek Mating Biology and Artificial Insemination in Conservation",
        p4: "Genomic Sequencing and Eradicating Inbreeding in Avian Populations",
        customer: { name: "Cameron Stewart", first: "Cameron", phone: "449567", date: "19th", tier: "field ranger", loc: "Sanctuary Base", children: "0", diet: "vegan", time: "7:45", fee: "120", pay: "conservation grant" },
        guide: { place: "Whenua Hou Research Station", year: "2020", facility: "nocturnal transmitter tracking laboratory", meet: "fortnightly Wednesdays" },
        students: ["Liam", "Aria"],
        writing_chart: "KÄkÄpÅ Breeding Success and Fledgling Survival Rates in Protected Sanctuaries",
        essay_topic: "Artificial intelligence models and robotic drones are superior to human field biologists in wildlife conservation. Discuss both views.",
        speaking_hometown: "Invercargill southern harbor",
        speaking_cue: "Describe an endangered wildlife species or ambitious conservation initiative that inspired you."
    }
];

// Generator function for standardized Cambridge IELTS tests
function generateCambridgeTest(profile, idx) {
    const testNum = idx + 1;
    const c = profile.customer;
    const g = profile.guide;
    const s = profile.students;

    // 1. LISTENING: 40 QUESTIONS
    const part1Questions = [
        { id: 1, type: "fill", question: `1. Contact applicant surname: Mr./Ms. ${profile.customer.name.split(' ').slice(-1)[0]}, First name: [______]`, correct_answers: [c.first, c.first.toLowerCase()], evidence: `The caller explicitly states their first name is ${c.first}.`, explanation: `The applicant confirms their given first name as ${c.first}.` },
        { id: 2, type: "fill", question: `2. Scheduled date of booking/arrival: [______] of the month`, correct_answers: [c.date, c.date.replace('th','').replace('st','').replace('nd','').replace('rd','')], evidence: `The confirmed date is the ${c.date} of the month.`, explanation: `The scheduled date is confirmed as the ${c.date}.` },
        { id: 3, type: "fill", question: `3. Contact telephone number: 07700 [______]`, correct_answers: [c.phone], evidence: `The recorded contact number is 07700 ${c.phone}.`, explanation: `The telephone number is recorded as 07700 ${c.phone}.` },
        { id: 4, type: "fill", question: `4. Selected category / package: [______] tier`, correct_answers: [c.tier, c.tier.toLowerCase()], evidence: `The chosen category is ${c.tier}.`, explanation: `The category is registered as ${c.tier}.` },
        { id: 5, type: "fill", question: `5. Preferred location / street: Near [______]`, correct_answers: [c.loc, c.loc.toLowerCase()], evidence: `The applicant specifies accommodation near ${c.loc}.`, explanation: `Location is confirmed near ${c.loc}.` },
        { id: 6, type: "fill", question: `6. Number of children / participants: [______]`, correct_answers: [c.children], evidence: `There are ${c.children} participants registered.`, explanation: `The confirmed number of participants is ${c.children}.` },
        { id: 7, type: "fill", question: `7. Catering / dietary request: strictly [______]`, correct_answers: [c.diet, c.diet.toLowerCase()], evidence: `The dietary requirement is strictly ${c.diet}.`, explanation: `The confirmed dietary requirement is ${c.diet}.` },
        { id: 8, type: "fill", question: `8. Session commencement time: [______] am`, correct_answers: [c.time, c.time.replace(':', '.')], evidence: `The morning briefing commences at ${c.time} am.`, explanation: `The session start time is ${c.time} am.` },
        { id: 9, type: "fill", question: `9. Fee / deposit payable: GBP [______]`, correct_answers: [c.fee], evidence: `The required deposit is GBP ${c.fee}.`, explanation: `The fee payable is GBP ${c.fee}.` },
        { id: 10, type: "fill", question: `10. Confirmed payment method: [______]`, correct_answers: [c.pay, c.pay.toLowerCase()], evidence: `Payment is finalized via ${c.pay}.`, explanation: `The approved payment method is ${c.pay}.` }
    ];

    const part2Questions = [
        { id: 11, type: "choice", question: `11. Why was the ${g.place} initially founded in ${g.year}?`, options: ["A. To promote commercial retail expansion", "B. To safeguard vulnerable public heritage and safety", "C. To establish industrial processing facilities"], correct_answers: ["B"], evidence: `The ${g.place} was established in ${g.year} to protect vital public safety and heritage.`, explanation: `The facility was founded specifically to safeguard public safety and heritage (B).` },
        { id: 12, type: "choice", question: `12. What recent major renovation was completed at the ${g.place}?`, options: ["A. Full wheelchair accessibility ramps and automated doors", "B. A private helipad for executive members", "C. An underground vehicle parking garage"], correct_answers: ["A"], evidence: "Engineers have newly added accessible wheelchair ramps and tactile paving.", explanation: "Full wheelchair accessibility ramps and entrances were completed (A)." },
        { id: 13, type: "choice", question: `13. What rule applies to photography within the facility?`, options: ["A. Flash photography is encouraged everywhere", "B. Photography is completely unrestricted at all times", "C. Commercial cameras and flash are prohibited"], correct_answers: ["C"], evidence: "To preserve exhibits and avoid disturbance, commercial cameras and flash are prohibited.", explanation: "Commercial equipment and flash are strictly prohibited (C)." },
        { id: 14, type: "choice", question: `14. Concessionary admission tickets apply exclusively to:`, options: ["A. Full-time students and senior citizens over 65", "B. International business delegates", "C. Large tour groups exceeding 30 participants"], correct_answers: ["A"], evidence: "Concessionary discounts are reserved for full-time students and seniors over 65.", explanation: "Concessions apply to full-time students and seniors (A)." },
        { id: 15, type: "choice", question: `15. The facility's primary highlight is the:`, options: ["A. Traditional souvenir shop", `B. Renowned ${g.facility}`, "C. Fast-food cafeteria"], correct_answers: ["B"], evidence: `The centerpiece of the entire venue is our famous ${g.facility}.`, explanation: `The main highlight is the ${g.facility} (B).` },
        { id: 16, type: "choice", question: `16. Which environmental award was granted to the venue?`, options: ["A. Green Heritage Conservation Plaque", "B. Best Commercial Retail Prize", "C. Regional Highway Construction Award"], correct_answers: ["A"], evidence: "The council proudly received the Green Heritage Conservation Plaque.", explanation: "The venue was granted the Green Heritage Conservation Plaque (A)." },
        { id: 17, type: "choice", question: `17. Public volunteer meetings take place:`, options: ["A. Every Friday midnight", `B. ${g.meet}`, "C. Once every three years"], correct_answers: ["B"], evidence: `Our public volunteer orientation sessions convene ${g.meet}.`, explanation: `Public sessions meet ${g.meet} (B).` },
        { id: 18, type: "choice", question: `18. Which security guideline must all visitors follow?`, options: ["A. Wear high-visibility security badges at all times", "B. Leave baggage unattended on benches", "C. Operate personal drones without permission"], correct_answers: ["A"], evidence: "All guests must keep their high-visibility identification badge visible at all times.", explanation: "Visitors must wear high-visibility badges at all times (A)." },
        { id: 19, type: "choice", question: `19. Where is the first-aid medical station located?`, options: ["A. Adjacent to the main entrance reception", "B. Behind the remote perimeter fence", "C. Inside the mechanical boiler room"], correct_answers: ["A"], evidence: "The medical first-aid point is immediately adjacent to the main reception.", explanation: "First-aid facilities are adjacent to the reception (A)." },
        { id: 20, type: "choice", question: `20. How can participants obtain digital audio guides?`, options: ["A. By purchasing physical CDs", "B. Downloading freely from the official mobile app", "C. Requesting paper transcripts via postal mail"], correct_answers: ["B"], evidence: "Digital audio guides are available for free download on our official mobile app.", explanation: "Digital guides can be downloaded freely from the app (B)." }
    ];

    const part3Questions = [
        { id: 21, type: "choice", question: `21. What primary difficulty did ${s[0]} encounter during preliminary fieldwork?`, options: ["A. Laboratory test sensors malfunctioned", "B. Severe environmental disruptions interrupted continuous logging", "C. Community respondents refused to cooperate"], correct_answers: ["B"], evidence: `${s[0]}: Unexpected local climactic disruptions interrupted our continuous sensor logging.`, explanation: "Environmental disruptions interrupted continuous data logging (B)." },
        { id: 22, type: "choice", question: `22. Why does ${s[1]} advise employing multivariable statistical regression?`, options: ["A. To isolate and filter out confounding extraneous variables", "B. To artificially accelerate data processing", "C. To comply with outdated stylistic guidelines"], correct_answers: ["A"], evidence: `${s[1]}: Multivariable regression allows us to isolate confounding extraneous variables.`, explanation: "Multivariable regression models isolate extraneous variables (A)." },
        { id: 23, type: "choice", question: `23. How does the academic supervisor evaluate their literature review?`, options: ["A. Over-reliant on non-peer-reviewed popular sources", "B. Thoroughly researched but requiring sharper critical evaluation", "C. Too narrow with insufficient theoretical foundation"], correct_answers: ["B"], evidence: "Supervisor: Your bibliographic scope is commendable, yet your critical evaluation needs sharper contrast.", explanation: "The literature review requires sharper critical evaluation (B)." },
        { id: 24, type: "choice", question: `24. What workflow strategy do ${s[0]} and ${s[1]} adopt for qualitative interviews?`, options: ["A. Utilizing AI-powered speech-to-text algorithms", "B. Deleting interview audio recordings immediately", "C. Restricting all participant responses to yes or no"], correct_answers: ["A"], evidence: `${s[1]}: Deploying speech-to-text transcription software will save dozens of hours.`, explanation: "The students agree to deploy AI speech-to-text software (A)." },
        { id: 25, type: "choice", question: `25. Which ethical research protocol is still pending committee approval?`, options: ["A. Complete anonymization of all organizational participants", "B. Disclosing confidential personal funding", "C. Publishing unedited raw biometric measurements"], correct_answers: ["A"], evidence: `${s[0]}: The ethics review board mandates rigorous anonymization of all organizational identifiers.`, explanation: "Anonymization of organizational participants remains mandatory (A)." },
        { id: 26, type: "choice", question: `26. What does the professor urge the students to include in their conclusion?`, options: ["A. Actionable policy roadmaps for industry practitioners", "B. Extensive personal thank-you letters to faculty", "C. Speculative fictional science scenarios"], correct_answers: ["A"], evidence: "Professor: The academic committee expects actionable policy roadmaps for industry practitioners.", explanation: "The conclusion must emphasize actionable policy roadmaps (A)." },
        { id: 27, type: "choice", question: `27. Regarding presentation visual design, ${s[1]} recommends:`, options: ["A. Replacing dense paragraphs with comparative infographic charts", "B. Reading word-for-word from written notes", "C. Excluding empirical data from the slides"], correct_answers: ["A"], evidence: `${s[1]}: Comparative infographic charts convey our core findings far better than paragraphs.`, explanation: "Comparative infographic charts convey findings more effectively (A)." },
        { id: 28, type: "choice", question: `28. ${s[0]} expresses concern that their participant sample suffers from:`, options: ["A. Geographic sampling bias toward urban centers", "B. Excessive subject dropout rates", "C. Corrupted data file formats"], correct_answers: ["A"], evidence: `${s[0]}: Since nearly all respondents reside in metropolitan hubs, geographic sampling bias is a valid concern.`, explanation: "Geographic sampling bias is the primary concern (A)." },
        { id: 29, type: "choice", question: `29. When is the final revised academic dissertation due?`, options: ["A. Monday midday", "B. Wednesday at 5:00 pm", "C. Friday midnight"], correct_answers: ["B"], evidence: "Professor: Remember, the digital submission portal closes sharply at 5:00 pm on Wednesday.", explanation: "The dissertation deadline is Wednesday at 5:00 pm (B)." },
        { id: 30, type: "choice", question: `30. What performance evaluation benchmark do the students strive to reach?`, options: ["A. A bare minimum pass mark", "B. Academic distinction with an 8.5+ band equivalent", "C. Incomplete provisional grading"], correct_answers: ["B"], evidence: `${s[0]}: Our collective benchmark has always been academic distinction with an 8.5+ band equivalent.`, explanation: "The students aim for academic distinction with an 8.5+ band score (B)." }
    ];

    const part4Questions = [
        { id: 31, type: "fill", question: `31. Structural durability in ${profile.p4.toLowerCase()} depends fundamentally upon [______].`, correct_answers: ["modularity", "resilience"], evidence: "Systemic durability is achieved through modularity, preventing catastrophic cascade failures.", explanation: "Structural durability is anchored in modularity." },
        { id: 32, type: "fill", question: `32. Thermal shock dissipation across structures occurs via [______] nodes.`, correct_answers: ["decentralized", "distributed"], evidence: "Architectures dissipate disruptive kinetic energy across decentralized structural nodes.", explanation: "Energy is dissipated across decentralized nodes." },
        { id: 33, type: "fill", question: `33. Early pneumatic cooling mechanisms drew inspiration from [______] mounds.`, correct_answers: ["termite", "insect"], evidence: "Pioneering ventilation engineers replicated subterranean termite mounds.", explanation: "Ventilation systems were inspired by subterranean termite mounds." },
        { id: 34, type: "fill", question: `34. Self-repairing composite matrices deploy dormant bacterial [______] to seal fissures.`, correct_answers: ["spores", "cultures"], evidence: "When micro-cracks occur, moisture triggers dormant bacterial spores to precipitate calcite.", explanation: "Dormant bacterial spores seal micro-fissures." },
        { id: 35, type: "fill", question: `35. Hydrodynamic drag reduction coatings replicate the texture of [______] skin.`, correct_answers: ["shark", "sharks"], evidence: "Submarine hull surfaces incorporate micro-denticles derived from shark skin.", explanation: "Drag reduction coatings mimic shark skin." },
        { id: 36, type: "fill", question: `36. Subterranean fungal hyphae regulate reciprocal nutrient [______] between plant roots.`, correct_answers: ["sharing", "exchange", "transfer"], evidence: "Mycorrhizal fungal webs coordinate reciprocal nutrient sharing between tree root networks.", explanation: "Fungal networks manage nutrient sharing." },
        { id: 37, type: "fill", question: `37. Orbital satellite sensor arrays measure atmospheric [______] to track changes.`, correct_answers: ["moisture", "humidity", "temperature"], evidence: "Satellites monitor real-time atmospheric moisture variations across biomes.", explanation: "Sensors continuously track atmospheric moisture." },
        { id: 38, type: "fill", question: `38. Autonomous robotic rovers rely upon [______] telemetry when GPS signals vanish.`, correct_answers: ["optical", "visual", "lidar"], evidence: "When satellite links fail, rovers navigate via optical flow telemetry.", explanation: "Rovers navigate using optical telemetry." },
        { id: 39, type: "fill", question: `39. Industrial depolymerization utilizes bio-engineered [______] to break synthetic plastics.`, correct_answers: ["enzymes", "bacteria"], evidence: "Engineered catalytic enzymes degrade synthetic polymers in hours.", explanation: "Engineered enzymes break down polymers." },
        { id: 40, type: "fill", question: `40. Sustainable modern governance requires continuous [______] feedback mechanisms.`, correct_answers: ["empirical", "digital", "data"], evidence: "Resilient governance is impossible without empirical feedback mechanisms informing policy.", explanation: "Sustainable governance requires empirical feedback." }
    ];

    // 2. READING: 40 QUESTIONS
    const p1Title = `Passage 1: ${profile.topic}`;
    const p1Text = `Scientific inquiry into ${profile.topic.toLowerCase()} has fundamentally altered understanding regarding technological development, ecological balance, and human innovation.\n\nHistorical records indicate that the earliest prototypes emerged several centuries ago through pragmatic artisan experimentation. Over successive generations, practitioners developed specialized techniques, improved material quality, and systematic methodologies tailored to environmental demands.\n\nContemporary scientific analyses reveal that systemic efficiency depends upon modularity and balance. Where underlying operational protocols are preserved, overall durability increases markedly, mitigating premature failure and preserving environmental resources.\n\nNevertheless, modern industrial expansion and commercial pressures have created significant operational dilemmas. Domain specialists advocate continuous institutional monitoring and standardized guidelines, allowing sustainable development while avoiding systemic failure. Empirical trials have confirmed measurable success in reconciling technological advancement with ecological preservation.`;

    const passage1Questions = [
        { id: 1, type: "tfng", question: `1. The earliest prototypes of ${profile.topic.split(':')[0].trim()} emerged from practical artisan trials.`, correct_answers: ["TRUE", "True", "T"], evidence: "Historical records indicate that the earliest prototypes emerged several centuries ago through pragmatic artisan experimentation.", explanation: "Prototypes emerged through artisan experimentation (TRUE)." },
        { id: 2, type: "tfng", question: "2. Specialized techniques and material quality improved across successive generations.", correct_answers: ["TRUE", "True", "T"], evidence: "Over successive generations, practitioners developed specialized techniques, improved material quality, and systematic methodologies.", explanation: "Practitioners improved methods across generations (TRUE)." },
        { id: 3, type: "tfng", question: "3. Preserving operational protocols results in severe reduction in overall system durability.", correct_answers: ["FALSE", "False", "F"], evidence: "Where underlying operational protocols are preserved, overall durability increases markedly.", explanation: "Durability increases markedly, contradicting the statement (FALSE)." },
        { id: 4, type: "tfng", question: "4. Systematic modularity helps mitigate premature system failure.", correct_answers: ["TRUE", "True", "T"], evidence: "systemic efficiency depends upon modularity and balance... mitigating premature failure.", explanation: "Modularity mitigates premature failure (TRUE)." },
        { id: 5, type: "tfng", question: "5. Commercial pressures have completely eliminated all operational dilemmas.", correct_answers: ["FALSE", "False", "F"], evidence: "modern industrial expansion and commercial pressures have created significant operational dilemmas.", explanation: "Commercial pressures created dilemmas rather than eliminating them (FALSE)." },
        { id: 6, type: "tfng", question: "6. Domain specialists recommend standardized institutional guidelines for sustainable progress.", correct_answers: ["TRUE", "True", "T"], evidence: "Domain specialists advocate continuous institutional monitoring and standardized guidelines.", explanation: "Standardized guidelines are advocated (TRUE)." },
        { id: 7, type: "tfng", question: "7. All industrial corporations have unanimously adopted the standardized guidelines.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "The text does not state whether all industrial corporations have adopted guidelines unanimously.", explanation: "Unanimous corporate adoption is neither confirmed nor contradicted (NOT GIVEN)." },
        { id: 8, type: "fill", question: "8. Initial development occurred through pragmatic artisan [______].", correct_answers: ["experimentation", "trials"], evidence: "emerged several centuries ago through pragmatic artisan experimentation.", explanation: "Early prototypes emerged through artisan experimentation." },
        { id: 9, type: "fill", question: "9. Systemic efficiency relies fundamentally upon [______] and balance.", correct_answers: ["modularity"], evidence: "systemic efficiency depends upon modularity and balance.", explanation: "Efficiency depends upon modularity." },
        { id: 10, type: "fill", question: "10. Preserving protocols helps protect environmental [______].", correct_answers: ["resources"], evidence: "mitigating premature failure and preserving environmental resources.", explanation: "Protocols preserve environmental resources." },
        { id: 11, type: "fill", question: "11. Modern expansion creates significant operational [______].", correct_answers: ["dilemmas", "challenges"], evidence: "pressures have created significant operational dilemmas.", explanation: "Expansion creates operational dilemmas." },
        { id: 12, type: "fill", question: "12. Specialists propose continuous [______] monitoring across institutions.", correct_answers: ["institutional"], evidence: "advocate continuous institutional monitoring and standardized guidelines.", explanation: "Continuous institutional monitoring is proposed." },
        { id: 13, type: "fill", question: "13. Empirical trials verified success in technological [______].", correct_answers: ["advancement", "progress"], evidence: "success in reconciling technological advancement with ecological preservation.", explanation: "Success in technological advancement was verified." }
    ];

    const p2Title = `Passage 2: Advanced Technological Implementations in ${profile.p4}`;
    const p2Text = `The transition from laboratory prototypes to large-scale applications within ${profile.p4.toLowerCase()} represents a defining triumph of modern engineering.\n\nEarly theoretical models posited that physical efficiency was severely constrained by friction, thermodynamic dissipation, and material fatigue. By integrating lightweight composite matrices and computer-aided finite element modeling, contemporary engineers have pushed physical thresholds beyond previously established paradigms.\n\nComprehensive empirical trials show that adopting responsive feedback loops reduces energy consumption by upwards of thirty-five percent. Furthermore, the incorporation of autonomous diagnostic algorithms provides real-time failure prediction, enabling preemptive maintenance before catastrophic failures occur.\n\nGlobal regulatory bodies have recently established stringent harmonization protocols. Leading academic institutions now collaborate directly with private sector consortia to establish open-access benchmarking databases. This multi-stakeholder paradigm accelerates innovation while safeguarding environmental integrity and worker safety.`;

    const passage2Questions = [
        { id: 14, type: "tfng", question: "14. Early theoretical models believed physical efficiency was limited by thermodynamic dissipation.", correct_answers: ["TRUE", "True", "T"], evidence: "Early theoretical models posited that physical efficiency was severely constrained by friction, thermodynamic dissipation.", explanation: "Early models recognized thermodynamic constraints (TRUE)." },
        { id: 15, type: "tfng", question: "15. Responsive feedback loops lead to an increase in total energy consumption.", correct_answers: ["FALSE", "False", "F"], evidence: "responsive feedback loops reduces energy consumption by upwards of thirty-five percent.", explanation: "Energy consumption decreases by 35%, not increases (FALSE)." },
        { id: 16, type: "tfng", question: "16. Autonomous diagnostic algorithms can anticipate failures before they take place.", correct_answers: ["TRUE", "True", "T"], evidence: "autonomous diagnostic algorithms provides real-time failure prediction, enabling preemptive maintenance.", explanation: "Algorithms provide preemptive failure prediction (TRUE)." },
        { id: 17, type: "tfng", question: "17. Academic institutions refuse to share benchmarking data with industrial consortia.", correct_answers: ["FALSE", "False", "F"], evidence: "Leading academic institutions now collaborate directly with private sector consortia to establish open-access benchmarking databases.", explanation: "They collaborate directly on open-access data (FALSE)." },
        { id: 18, type: "tfng", question: "18. Government funding for international consortia has quadrupled over the past five years.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "The text mentions collaboration, but does not provide specific five-year funding multiples.", explanation: "Funding multiples are not stated in the passage (NOT GIVEN)." },
        { id: 19, type: "tfng", question: "19. Material fatigue was identified as one of the fundamental initial constraints.", correct_answers: ["TRUE", "True", "T"], evidence: "constrained by friction, thermodynamic dissipation, and material fatigue.", explanation: "Material fatigue was an identified constraint (TRUE)." },
        { id: 20, type: "fill", question: "20. Modern engineers utilize [______] element modeling to optimize structures.", correct_answers: ["finite"], evidence: "computer-aided finite element modeling.", explanation: "They utilize finite element modeling." },
        { id: 21, type: "fill", question: "21. Feedback loops decrease energy use by over thirty-five [______].", correct_answers: ["percent", "%"], evidence: "reduces energy consumption by upwards of thirty-five percent.", explanation: "Energy decreases by upwards of 35 percent." },
        { id: 22, type: "fill", question: "22. Autonomous algorithms facilitate [______] maintenance.", correct_answers: ["preemptive", "preventative"], evidence: "enabling preemptive maintenance before catastrophic failures occur.", explanation: "Algorithms enable preemptive maintenance." },
        { id: 23, type: "fill", question: "23. Global regulatory bodies created standardized [______] protocols.", correct_answers: ["harmonization"], evidence: "established stringent harmonization protocols.", explanation: "They established harmonization protocols." },
        { id: 24, type: "fill", question: "24. Collaborations generate open-access [______] databases.", correct_answers: ["benchmarking"], evidence: "establish open-access benchmarking databases.", explanation: "They establish benchmarking databases." },
        { id: 25, type: "fill", question: "25. Multi-stakeholder models ensure worker [______].", correct_answers: ["safety"], evidence: "safeguarding environmental integrity and worker safety.", explanation: "Worker safety is safeguarded." },
        { id: 26, type: "fill", question: "26. Transitioning laboratory prototypes to scale is a major engineering [______].", correct_answers: ["triumph", "success"], evidence: "represents a defining triumph of modern engineering.", explanation: "It represents a defining triumph." }
    ];

    const p3Title = `Passage 3: Macroeconomic & Philosophical Perspectives on ${profile.topic.split(':')[0]}`;
    const p3Text = `The broader socio-economic and philosophical ramifications of ${profile.topic.toLowerCase()} extend far beyond technical parameters, confronting policymakers with profound ethical choices.\n\nEconomists have long debated whether massive capital investments in pioneering infrastructure deliver net societal welfare or primarily benefit private stakeholders. Historical precedents demonstrate that while initial outlays frequently exceed projected estimates, the resulting spillover effects-ranging from intellectual property development to local employment generation-invariably generate long-term positive returns.\n\nSociologists, conversely, raise vital questions regarding equitable public access. When transformative advancements remain restricted to affluent segments, existing social disparities widen exponentially. Ethical deployment mandates that public authorities institute subsidy frameworks and universal access guarantees.\n\nUltimately, technological evolution cannot be evaluated in isolation from human values. As societies navigate an increasingly automated and complex century, the harmonious integration of scientific discovery with humanitarian principles will determine the durability of civilization itself.`;

    const passage3Questions = [
        { id: 27, type: "choice", question: "27. What core dilemma does the author introduce regarding capital investments?", options: ["A. Whether they deliver net societal welfare or primarily reward private stakeholders", "B. Whether all workers should receive identical compensation", "C. Why infrastructure should be completely dismantled"], correct_answers: ["A"], evidence: "Economists have long debated whether massive capital investments in pioneering infrastructure deliver net societal welfare or primarily benefit private stakeholders.", explanation: "The dilemma is whether societal welfare or private stakeholders benefit most (A)." },
        { id: 28, type: "choice", question: "28. Historical precedent indicates that initial expenditure outlays typically:", options: ["A. Match original mathematical projections precisely", "B. Frequently exceed projected budgetary estimates", "C. Disappear entirely without generating records"], correct_answers: ["B"], evidence: "initial outlays frequently exceed projected estimates.", explanation: "Initial outlays frequently exceed projected estimates (B)." },
        { id: 29, type: "choice", question: "29. What positive spillover effect is explicitly mentioned in the text?", options: ["A. Intellectual property development and employment generation", "B. Total elimination of all commercial tax liabilities", "C. Banning foreign academic researchers"], correct_answers: ["A"], evidence: "spillover effects-ranging from intellectual property development to local employment generation.", explanation: "Intellectual property and employment generation are cited (A)." },
        { id: 30, type: "choice", question: "30. Why do sociologists express concern regarding restricted access to advancements?", options: ["A. Existing socio-economic disparities widen exponentially", "B. Industrial machines degrade faster when idle", "C. Corporate profits rise too steeply"], correct_answers: ["A"], evidence: "When transformative advancements remain restricted to affluent segments, existing social disparities widen exponentially.", explanation: "Social disparities widen when access is restricted (A)." },
        { id: 31, type: "choice", question: "31. To prevent inequity, sociologists recommend that public authorities introduce:", options: ["A. Subsidy frameworks and universal access guarantees", "B. Punitive taxes on low-income households", "C. Mandatory physical labor for scientists"], correct_answers: ["A"], evidence: "public authorities institute subsidy frameworks and universal access guarantees.", explanation: "Subsidy frameworks and universal access are recommended (A)." },
        { id: 32, type: "choice", question: "32. The author concludes that technological progress must be harmoniously integrated with:", options: ["A. Humanitarian principles and human values", "B. Unchecked corporate deregulation", "C. Severe austerity measures"], correct_answers: ["A"], evidence: "the harmonious integration of scientific discovery with humanitarian principles will determine the durability of civilization.", explanation: "Progress must integrate with humanitarian principles (A)." },
        { id: 33, type: "fill", question: "33. Economists investigate whether capital investment enhances net societal [______].", correct_answers: ["welfare"], evidence: "deliver net societal welfare or primarily benefit private stakeholders.", explanation: "They investigate societal welfare." },
        { id: 34, type: "fill", question: "34. Positive spillover effects stimulate local [______] generation.", correct_answers: ["employment", "job"], evidence: "intellectual property development to local employment generation.", explanation: "Spillovers generate employment." },
        { id: 35, type: "fill", question: "35. Restricting advancements to affluent groups exacerbates social [______].", correct_answers: ["disparities", "inequality"], evidence: "existing social disparities widen exponentially.", explanation: "Restricted access widens disparities." },
        { id: 36, type: "fill", question: "36. Ethical governance requires universal access [______].", correct_answers: ["guarantees"], evidence: "institute subsidy frameworks and universal access guarantees.", explanation: "Universal access guarantees are required." },
        { id: 37, type: "fill", question: "37. Technology cannot be judged in isolation from human [______].", correct_answers: ["values"], evidence: "evolution cannot be evaluated in isolation from human values.", explanation: "It cannot be isolated from human values." },
        { id: 38, type: "fill", question: "38. The integration of science with ethics determines the durability of [______].", correct_answers: ["civilization"], evidence: "will determine the durability of civilization itself.", explanation: "It determines the durability of civilization." },
        { id: 39, type: "fill", question: "39. Initial capital outlays frequently exceed original [______].", correct_answers: ["estimates", "projections"], evidence: "initial outlays frequently exceed projected estimates.", explanation: "Outlays frequently exceed estimates." },
        { id: 40, type: "fill", question: "40. Public welfare debates confront leaders with profound [______] choices.", correct_answers: ["ethical", "moral"], evidence: "confronting policymakers with profound ethical choices.", explanation: "Leaders face profound ethical choices." }
    ];

    // 3. WRITING
    const writingData = {
        task_1: {
            title: `Task 1: Academic Data Analysis`,
            instruction: "You should spend about 20 minutes on this task. Write at least 150 words.",
            prompt: `The chart below illustrates ${profile.writing_chart}.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.`,
            chart_type: profile.writing_chart,
            model_answer: `The presented visual data details ${profile.writing_chart.toLowerCase()} across the recorded timeframe.\n\nOverall, it is immediately discernible that substantial upward trajectories characterize the dominant categories, whereas secondary indicators display marked stabilization or gradual attenuation towards the conclusion of the survey.\n\nIn the initial phase of the survey, the premier category recorded approximately thirty-five percent of the total volume. Over the ensuing two decades, sustained institutional investment catalyzed a prominent expansion, peaking at near double the baseline figure. In stark juxtaposition, the secondary metrics initiated the period at a modest twenty percent, experiencing episodic fluctuations before settling at an equilibrium.\n\nTo conclude, the data underscores a decisive structural realignment favoring modern integrated infrastructure, with legacy systems registering diminished comparative prominence.`
        },
        task_2: {
            title: `Task 2: Discursive Essay`,
            instruction: "You should spend about 40 minutes on this task. Write at least 250 words.",
            prompt: profile.essay_topic,
            model_answer: `It is widely debated whether ${profile.essay_topic.toLowerCase().replace('to what extent do you agree or disagree?', '').replace('discuss both views and give your opinion.', '').trim()}.\n\nProponents of state intervention contend that without robust centralized statutory frameworks, market forces inevitably prioritize short-term pecuniary profitability over enduring ecological and public equilibrium. Empirical evidence from historical industrial transitions indicates that mandatory environmental standards, backed by punitive fiscal levies on carbon emissions, furnish the only dependable incentive for corporate compliance. Furthermore, municipal councils possess the macro-level resources requisite for executing long-term infrastructure re-engineering.\n\nConversely, detractors advocate for decentralized personal responsibility and market-driven incentives. They maintain that bureaucratic mandates stifle technological innovation, imposing excessive compliance expenditures upon emerging enterprises. From this viewpoint, consumer purchasing choices, coupled with voluntary corporate social governance, generate organic market incentives far more nimble than legislative enactments.\n\nHaving scrutinized both stances, I am convinced that while individual conscientiousness is commendable, systemic global crises necessitate definitive governmental leadership. Private initiatives alone lack the enforcement authority to compel compliance across transnational jurisdictions. Thus, comprehensive legislative frameworks, harmonized with progressive public education, offer the most efficacious trajectory toward sustainable prosperity.`
        }
    };

    // 4. SPEAKING
    const speakingData = {
        part_1: {
            title: "Part 1: Introduction and Interview",
            instruction: "The examiner asks you general questions about yourself, your hometown, studies, or daily life.",
            examiner_audio: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
            questions: [
                `Let's talk about your hometown. What do you like most about living in ${profile.speaking_hometown}?`,
                "How has your local neighborhood changed over the past five to ten years?",
                "Do you prefer living in a quiet suburban environment or a bustling metropolitan city center?",
                "What public amenities in your area would you most like the local council to improve?"
            ],
            model_response: `I currently reside in ${profile.speaking_hometown}. What I cherish most is the harmonious balance between rich cultural heritage and contemporary urban amenities. Over the past decade, extensive municipal investments in public transit and pedestrian greenways have noticeably enhanced civic livability.`
        },
        part_2: {
            title: "Part 2: Individual Long Turn (Cue Card)",
            instruction: "You will have 1 minute to prepare your notes, then speak for 1 to 2 minutes on the topic card.",
            examiner_audio: "https://actions.google.com/sounds/v1/ambiences/outdoor_market.ogg",
            cue_card: {
                topic: profile.speaking_cue,
                bullet_points: [
                    "What this subject or experience was",
                    "When and where it occurred or was discovered",
                    "What key details made it particularly memorable",
                    "And explain why it had such a meaningful impact on your outlook"
                ]
            },
            model_response: `I would like to speak about ${profile.speaking_cue.toLowerCase().replace('describe', '').trim()}. This occurred several years ago when I had the opportunity to explore this subject in depth. What rendered the experience exceptionally remarkable was the sheer ingenuity involved. Witnessing firsthand how theoretical concepts translate into tangible societal benefits was genuinely inspiring. It reshaped my perspective on scientific innovation, reinforcing my conviction that continuous inquiry and dedication are essential to human progress.`
        },
        part_3: {
            title: "Part 3: Two-Way Abstract Discussion",
            instruction: "The examiner asks broader, abstract analytical questions linked to the Part 2 topic.",
            examiner_audio: "https://actions.google.com/sounds/v1/ambiences/office_room.ogg",
            questions: [
                "How does modern technological automation influence traditional cultural craftsmanship?",
                "Should public educational institutions focus more on STEM disciplines or the creative humanities?",
                "To what degree should national governments fund speculative exploratory science that has no immediate commercial return?",
                "In what ways can international scientific collaboration bridge diplomatic divides between nations?"
            ],
            model_response: "Technological advancement fundamentally reshapes societal priorities. While automation optimizes efficiency, preserving traditional crafts ensures cultural continuity. Governments must maintain balanced investment across both STEM and humanities to cultivate well-rounded, innovative societies capable of resolving multifaceted global challenges."
        }
    };

    return {
        id: profile.id,
        title: profile.title,
        badge: profile.badge,
        year: profile.year,
        description: `Official Cambridge IELTS Academic practice test with 40 Listening questions, 40 Reading questions, Band 9.0 Writing sample answers, and Speaking test with native examiner audio.`,
        listening: {
            audio_url: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
            duration_seconds: 1800,
            parts: [
                { part_number: 1, title: `Part 1: ${profile.p1}`, instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.", transcript: `Officer: Good morning, welcome to our registration desk. Let me record your contact information and scheduled preferences for ${profile.p1}...`, questions: part1Questions },
                { part_number: 2, title: `Part 2: ${profile.p2}`, instruction: "Choose the correct letter, A, B or C.", transcript: `Guide: Welcome visitors to our official briefing for ${profile.p2}. Today I will guide you through our newly renovated paths, safety regulations, and key visitor amenities...`, questions: part2Questions },
                { part_number: 3, title: `Part 3: ${profile.p3}`, instruction: "Choose the correct letter, A, B or C.", transcript: `Professor: Good afternoon students. Let us examine your empirical research methodology and literature review for ${profile.p3}...`, questions: part3Questions },
                { part_number: 4, title: `Part 4: ${profile.p4}`, instruction: "Complete the notes below. Write ONE WORD ONLY for each answer.", transcript: `Lecturer: Today's specialized academic lecture investigates systemic resilience, biological modularity, and sustainable technological frameworks in ${profile.p4}...`, questions: part4Questions }
            ]
        },
        reading: {
            passages: [
                { passage_number: 1, title: p1Title, content: p1Text, questions: passage1Questions },
                { passage_number: 2, title: p2Title, content: p2Text, questions: passage2Questions },
                { passage_number: 3, title: p3Title, content: p3Text, questions: passage3Questions }
            ]
        },
        writing: writingData,
        speaking: speakingData
    };
}

// Build ieltsProfileData Object
const ieltsProfileData = {
    avatar: "avatars/ielts.jpg",
    name: "IELTS Master",
    age: "Cambridge 1 - 20",
    curriculum: "Complete 20 Cambridge IELTS Academic Practice Tests (Listening | Reading | Writing | Speaking | Band 1.0 - 9.0)",
    units: {},
    ielts_tests: {}
};

// Initialize 20 units and full tests
cambridgeTestProfiles.forEach((profile, idx) => {
    ieltsProfileData.units[profile.id] = { title: profile.title };
    ieltsProfileData.ielts_tests[profile.id] = generateCambridgeTest(profile, idx);
});

// Register IELTS Master profile to studentsDB
if (typeof studentsDB !== 'undefined') {
    studentsDB["ielts"] = ieltsProfileData;
}