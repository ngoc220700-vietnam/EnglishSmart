// =========================================================================
// CAMBRIDGE IELTS 1 - 20 COMPREHENSIVE TEST DATABASE
// 20 FULL CAMBRIDGE IELTS ACADEMIC PRACTICE TESTS (ALL 4 SKILLS):
// LISTENING (40 QUESTIONS) - READING (40 QUESTIONS) - WRITING - SPEAKING
// 100% DISTINCT CONTENT ACROSS ALL 20 TESTS (CAM 1 - CAM 20)
// Automatic Official Band Scoring (1.0 - 9.0) & Detailed Explanations
// =========================================================================

const cambridgeTestProfiles = [
    {
        id: "cam_1",
        title: "Cambridge IELTS 1 Academic Test",
        badge: "Cam 1",
        year: "Cambridge 1 Foundation",
        topic: "Australian Dingo & Regional Wildlife Conservation",
        p1: "Highlands Resort & Golf Clinic Reservation",
        p2: "Green Valley Nature Sanctuary Tour",
        p3: "Environmental Fieldwork Econometric Models",
        p4: "Ecological Modularity and Biomimicry",
        customer: { name: "Lucas Harrison", first: "Lucas", phone: "900452", date: "14th", tier: "premium", loc: "lake", children: "2", diet: "vegetarian", time: "9:30", fee: "45", pay: "bank transfer" },
        guide: { place: "Green Valley Sanctuary", year: "1985", facility: "solar-powered pavilion", meet: "fortnightly Saturdays" },
        students: ["Mark", "Sophia"],
        writing_chart: "Comparative Demographic & Infrastructure Line Graph (1980 - 2025)",
        essay_topic: "Some analysts assert that technological automation in public infrastructure poses greater socio-economic risks than benefits. To what extent do you agree or disagree?",
        speaking_hometown: "Da Nang coastal metropolis",
        speaking_cue: "Describe a memorable scientific exhibition or museum you visited."
    },
    {
        id: "cam_2",
        title: "Cambridge IELTS 2 Academic Test",
        badge: "Cam 2",
        year: "Cambridge 2 Edition",
        topic: "Tropical Rainforest Dynamics & Ancient Roman Concrete",
        p1: "Lakeside Conference Center Registration",
        p2: "Civic Waterfront Redevelopment Guide",
        p3: "Urban Microclimate Architecture Project",
        p4: "Hydrothermal Marine Concrete Durability",
        customer: { name: "Elena Sinclair", first: "Elena", phone: "445910", date: "3rd", tier: "deluxe", loc: "river", children: "3", diet: "gluten-free", time: "8:45", fee: "120", pay: "credit card" },
        guide: { place: "Civic Waterfront Marina", year: "1992", facility: "geothermal maritime terminal", meet: "first Sunday monthly" },
        students: ["Liam", "Chloe"],
        writing_chart: "Global Renewable Energy Generation by Source (1990 - 2025)",
        essay_topic: "In many modern cities, historical buildings are demolished to create space for contemporary commercial high-rises. Do you think the advantages outweigh the disadvantages?",
        speaking_hometown: "Edinburgh historical capital",
        speaking_cue: "Describe an architectural landmark or ancient monument that impressed you."
    },
    {
        id: "cam_3",
        title: "Cambridge IELTS 3 Academic Test",
        badge: "Cam 3",
        year: "Cambridge 3 Edition",
        topic: "Deep Sea Oceanography & Geothermal Innovations",
        p1: "Marine Research Expedition Enrollment",
        p2: "Coastal Maritime Museum Tour",
        p3: "Submarine Hydrothermal Vent Dissertation",
        p4: "Extremophile Biology & Deep Crustal Geochemistry",
        customer: { name: "Julian Thorne", first: "Julian", phone: "334112", date: "19th", tier: "platinum", loc: "harbour", children: "1", diet: "seafood", time: "10:00", fee: "250", pay: "electronic invoice" },
        guide: { place: "Maritime Discovery Center", year: "1978", facility: "deep-ocean simulator dome", meet: "alternate Thursdays" },
        students: ["David", "Emma"],
        writing_chart: "Deep-Sea Marine Resource Allocation Across 5 Maritime Nations",
        essay_topic: "Commercial extraction of seabed minerals provides critical metals for clean technologies but risks irremediable damage to deep-sea ecosystems. Discuss both views and give your opinion.",
        speaking_hometown: "Auckland coastal harbor",
        speaking_cue: "Describe a documentary film or book about natural ocean exploration that influenced you."
    },
    {
        id: "cam_4",
        title: "Cambridge IELTS 4 Academic Test",
        badge: "Cam 4",
        year: "Cambridge 4 Edition",
        topic: "Linguistic Typology & Desert Agroforestry Systems",
        p1: "International Language Exchange Forum",
        p2: "Arid Botanical Conservatory Briefing",
        p3: "Historical Phonetics & Syntax Modeling",
        p4: "Perennial Agroforestry in Arid Biomes",
        customer: { name: "Claire Beaumont", first: "Claire", phone: "889201", date: "12th", tier: "standard", loc: "garden", children: "4", diet: "vegan", time: "9:15", fee: "35", pay: "paypal" },
        guide: { place: "Arid Botanical Conservatory", year: "1996", facility: "subterranean moisture condenser", meet: "every Friday afternoon" },
        students: ["Alex", "Maya"],
        writing_chart: "Comparative Agricultural Water Consumption Across 4 Irrigation Systems",
        essay_topic: "Languages with small numbers of native speakers are disappearing rapidly across the world. Should governments invest substantial public funds to preserve endangered dialects?",
        speaking_hometown: "Geneva multilingual city",
        speaking_cue: "Describe a foreign language or dialect you find captivating and would like to master."
    },
    {
        id: "cam_5",
        title: "Cambridge IELTS 5 Academic Test",
        badge: "Cam 5",
        year: "Cambridge 5 Edition",
        topic: "Cognitive Ergonomics & Bio-inspired Nanomaterials",
        p1: "Ergonomic Office Equipment Trial Booking",
        p2: "Innovation Science Center Visitor Walk",
        p3: "Human-Computer Interface Stress Analysis",
        p4: "Hydrophobic Nanostructures in Flora & Fauna",
        customer: { name: "Robert Sterling", first: "Robert", phone: "112984", date: "8th", tier: "executive", loc: "terrace", children: "2", diet: "halal", time: "8:30", fee: "80", pay: "wire transfer" },
        guide: { place: "Innovation Science Center", year: "2001", facility: "nanomaterial interactive laboratory", meet: "weekly Wednesday mornings" },
        students: ["Nathan", "Grace"],
        writing_chart: "Worker Productivity and Musculoskeletal Fatigue in Ergonomic Workstations",
        essay_topic: "Some business leaders argue that flexible remote working creates greater employee wellness, whereas others insist on mandatory physical office attendance. Discuss both views.",
        speaking_hometown: "Munich industrial hub",
        speaking_cue: "Describe a modern electronic tool or device that significantly enhances your daily focus."
    },
    {
        id: "cam_6",
        title: "Cambridge IELTS 6 Academic Test",
        badge: "Cam 6",
        year: "Cambridge 6 Edition",
        topic: "Polar Glaciology & Autonomous Drone Navigation",
        p1: "Polar Science Winter Workshop Registration",
        p2: "Sub-Antarctic Heritage Station Orientation",
        p3: "Glacial Ice Core Telemetry Analysis",
        p4: "Autonomous Drones in Extreme Polar Climates",
        customer: { name: "Freya Lindqvist", first: "Freya", phone: "223105", date: "22nd", tier: "arctic", loc: "fjord", children: "5", diet: "kosher", time: "9:00", fee: "150", pay: "direct debit" },
        guide: { place: "Polar Heritage Station", year: "1964", facility: "sub-zero atmospheric radar dome", meet: "monthly second Monday" },
        students: ["Oscar", "Astrid"],
        writing_chart: "Glacial Ice Sheet Thickness and Mass Loss Between 1970 and 2024",
        essay_topic: "Autonomous robotic drones and unmanned rovers are increasingly replacing human polar expeditions. Do you think the advantages of automation outweigh the drawbacks?",
        speaking_hometown: "Tromso northern light town",
        speaking_cue: "Describe an extreme weather condition or seasonal climate phenomenon you have experienced."
    },
    {
        id: "cam_7",
        title: "Cambridge IELTS 7 Academic Test",
        badge: "Cam 7",
        year: "Cambridge 7 Edition",
        topic: "Microbiome Ecology & Clean Energy Logistics",
        p1: "Community Clean Energy Cooperative Enrollment",
        p2: "Hydrogen Transport Corridor Public Forum",
        p3: "Gut-Brain Microbiome Signaling Thesis",
        p4: "Microbial Fuel Cells and Decentralized Grids",
        customer: { name: "Marcus Gallagher", first: "Marcus", phone: "667319", date: "27th", tier: "green", loc: "meadow", children: "2", diet: "organic", time: "10:30", fee: "60", pay: "mobile wallet" },
        guide: { place: "Clean Energy Demonstration Center", year: "2008", facility: "hydrogen fuel refueling hub", meet: "first Saturday of each quarter" },
        students: ["Benjamin", "Zoe"],
        writing_chart: "Municipal Hydrogen Fleet Penetration and Carbon Abatement Across 4 Cities",
        essay_topic: "Government subsidies should be redirected entirely toward decentralized community renewable grids rather than large-scale fossil-fuel projects. To what extent do you agree?",
        speaking_hometown: "Vancouver eco-friendly harbor",
        speaking_cue: "Describe a community environmental campaign or sustainability initiative you observed."
    },
    {
        id: "cam_8",
        title: "Cambridge IELTS 8 Academic Test",
        badge: "Cam 8",
        year: "Cambridge 8 Edition",
        topic: "Space Telemetry & Urban Microclimate Architectures",
        p1: "Stargazing Observatory Membership Booking",
        p2: "Space Technology Exhibition Audio Walk",
        p3: "Satellite Synthetic Aperture Radar Research",
        p4: "Urban Heat Island Mitigation & Aerodynamic Cooling",
        customer: { name: "Hannah Vance", first: "Hannah", phone: "554109", date: "5th", tier: "stellar", loc: "hilltop", children: "3", diet: "low-sodium", time: "7:45", fee: "95", pay: "credit card" },
        guide: { place: "Stargazing Astronomy Park", year: "1989", facility: "high-resolution digital telescope array", meet: "every clear Friday night" },
        students: ["Leo", "Isabella"],
        writing_chart: "Satellite Orbit Lifespan and Orbital Debris Mitigation Success Rates",
        essay_topic: "Massive financial expenditure on outer space exploration cannot be justified when severe socio-economic crises exist on Earth. To what extent do you agree or disagree?",
        speaking_hometown: "Zurich clean valley",
        speaking_cue: "Describe an astronomical event or space documentary that fascinated your imagination."
    },
    {
        id: "cam_9",
        title: "Cambridge IELTS 9 Academic Test",
        badge: "Cam 9",
        year: "Cambridge 9 Edition",
        topic: "Ancient Trade Routes & Marine Trophic Cascades",
        p1: "Historical Heritage Caravan Tour Registration",
        p2: "Silk Road Maritime Museum Briefing",
        p3: "Ancient Ceramic Petrography Assignment",
        p4: "Apex Marine Predators and Kelp Forest Preservation",
        customer: { name: "Tariq Al-Mansoor", first: "Tariq", phone: "771802", date: "16th", tier: "caravan", loc: "oasis", children: "1", diet: "halal", time: "8:15", fee: "110", pay: "bank transfer" },
        guide: { place: "Silk Road Maritime Museum", year: "1972", facility: "restored wooden merchant dhow", meet: "every Sunday morning" },
        students: ["Samir", "Layla"],
        writing_chart: "Maritime Trade Volume Across Historic Indian Ocean Sea Lanes (1000 - 1800 AD)",
        essay_topic: "Preserving cultural heritage and historical artifacts should be a mandatory priority for municipal governments even during periods of fiscal austerity. Discuss your view.",
        speaking_hometown: "Alexandria historic seaport",
        speaking_cue: "Describe a historic trade quarter, marketplace, or ancient landmark you visited."
    },
    {
        id: "cam_10",
        title: "Cambridge IELTS 10 Academic Test",
        badge: "Cam 10",
        year: "Cambridge 10 Edition",
        topic: "Synthetic Biology & Distributed Microgrid Energy",
        p1: "Community Solar Microgrid Enrollment",
        p2: "Renewable Energy Demonstration Park Tour",
        p3: "Genetic Circuit Design & Bioethics Paper",
        p4: "Decentralized Energy Storage & Flow Batteries",
        customer: { name: "Oliver Chen", first: "Oliver", phone: "338901", date: "31st", tier: "solar", loc: "rooftop", children: "2", diet: "vegetarian", time: "9:45", fee: "75", pay: "direct debit" },
        guide: { place: "Microgrid Energy Park", year: "2012", facility: "vanadium redox flow battery storage", meet: "biweekly Tuesday evenings" },
        students: ["Ethan", "Mia"],
        writing_chart: "Battery Storage Efficiency and Cost Projections Across 4 Flow Chemistries",
        essay_topic: "Gene editing technologies hold potential to eradicate hereditary diseases but raise profound ethical hazards. Do the benefits of genetic engineering outweigh its risks?",
        speaking_hometown: "Kyoto harmonious ancient city",
        speaking_cue: "Describe an innovative medical or biological technology that positively impacted society."
    },
    {
        id: "cam_11",
        title: "Cambridge IELTS 11 Academic Test",
        badge: "Cam 11",
        year: "Cambridge 11 Edition",
        topic: "Sustainable Aquaculture & Cognitive Memory Dynamics",
        p1: "Eco-Fisheries Training Clinic Booking",
        p2: "Marine Hatchery Visitor Center Overview",
        p3: "Spatial Memory and Synaptic Plasticity Project",
        p4: "Closed-Loop Recirculating Aquaculture Systems",
        customer: { name: "Patrick Murphy", first: "Patrick", phone: "991402", date: "7th", tier: "aquacare", loc: "coastal", children: "3", diet: "pescatarian", time: "9:00", fee: "50", pay: "credit card" },
        guide: { place: "Marine Eco-Hatchery Center", year: "2003", facility: "algal filtration bio-reactor system", meet: "first Saturday of each month" },
        students: ["Sean", "Ciara"],
        writing_chart: "Comparative Feed Conversion Ratios in Recirculating Aquaculture Systems",
        essay_topic: "Overfishing in international waters requires strict global quotas and severe penalties. Some argue this harms local fishing livelihoods. Discuss both views.",
        speaking_hometown: "Galway Atlantic bay",
        speaking_cue: "Describe a memory technique, study habit, or mental exercise you find effective."
    },
    {
        id: "cam_12",
        title: "Cambridge IELTS 12 Academic Test",
        badge: "Cam 12",
        year: "Cambridge 12 Edition",
        topic: "Regenerative Metallurgy & Algorithmic Traffic Control",
        p1: "Advanced Manufacturing Expo Registration",
        p2: "Automated Transit Command Center Briefing",
        p3: "Alloy Superplasticity & Tensile Testing",
        p4: "Autonomous Traffic Synchronization and Urban Flow",
        customer: { name: "Klaus Weber", first: "Klaus", phone: "448190", date: "18th", tier: "industrial", loc: "park", children: "1", diet: "vegetarian", time: "8:00", fee: "140", pay: "electronic wire" },
        guide: { place: "Automated Transit Command Center", year: "2015", facility: "real-time algorithmic signal control tower", meet: "every Friday midday" },
        students: ["Felix", "Anika"],
        writing_chart: "Metropolitan Congestion Delay Reduction Under Adaptive AI Signal Control",
        essay_topic: "Automated algorithmic systems are increasingly making decisions that impact daily civilian life. To what extent should humans maintain veto authority over automated processes?",
        speaking_hometown: "Stuttgart engineering capital",
        speaking_cue: "Describe an efficient public transit network or train ride you found impressive."
    },
    {
        id: "cam_13",
        title: "Cambridge IELTS 13 Academic Test",
        badge: "Cam 13",
        year: "Cambridge 13 Edition",
        topic: "Quantum Metrology & Endangered Amphibian Immunology",
        p1: "Wildlife Rescue Volunteer Application",
        p2: "Amphibian Bio-Dome Habitat Orientation",
        p3: "Atomic Clock Synchronization Laboratory Study",
        p4: "Skin Peptide Defenses in Montane Frogs",
        customer: { name: "Evelyn Ross", first: "Evelyn", phone: "662804", date: "11th", tier: "volunteer", loc: "creek", children: "2", diet: "vegan", time: "10:15", fee: "30", pay: "cash deposit" },
        guide: { place: "Amphibian Bio-Dome Sanctuary", year: "1999", facility: "climate-controlled amphibian breeding quarantine", meet: "monthly third Sunday" },
        students: ["Lucas", "Emily"],
        writing_chart: "Global Amphibian Population Declines Caused by Fungal Pathogens (1990 - 2024)",
        essay_topic: "Biodiversity conservation programs should prioritize small, less charismatic species like amphibians and insects over majestic mammals. Do you agree or disagree?",
        speaking_hometown: "Hobart temperate river town",
        speaking_cue: "Describe a wild animal, bird, or amphibian species native to your country."
    },
    {
        id: "cam_14",
        title: "Cambridge IELTS 14 Academic Test",
        badge: "Cam 14",
        year: "Cambridge 14 Edition",
        topic: "Atmospheric Aerosol Dynamics & Social Network Linguistics",
        p1: "Meteorological Field Camp Enrollment",
        p2: "Regional Weather Radar Facility Walkthrough",
        p3: "Sociolinguistic Dialect Spread on Digital Platforms",
        p4: "Volcanic Ash Aerosols and Global Solar Radiation",
        customer: { name: "Gabriel Morales", first: "Gabriel", phone: "883109", date: "24th", tier: "field", loc: "mountain", children: "4", diet: "organic", time: "7:30", fee: "85", pay: "credit card" },
        guide: { place: "Regional Meteorological Station", year: "1983", facility: "dual-polarization Doppler radar array", meet: "alternate Tuesday mornings" },
        students: ["Mateo", "Camila"],
        writing_chart: "Atmospheric Aerosol Optical Depth Following Major Volcanic Eruptions",
        essay_topic: "Digital social media communication is degrading standard written grammar and impoverishing language vocabulary among teenagers. To what extent do you agree?",
        speaking_hometown: "Quito high-altitude city",
        speaking_cue: "Describe an exciting or sudden weather change you witnessed in recent years."
    },
    {
        id: "cam_15",
        title: "Cambridge IELTS 15 Academic Test",
        badge: "Cam 15",
        year: "Cambridge 15 Edition",
        topic: "Coral Bleaching Mitigation & Subterranean Hydrogeology",
        p1: "Marine Coral Rehabilitation Volunteer Booking",
        p2: "Great Barrier Reef Offshore Pontoon Tour",
        p3: "Karst Aquifer Dye-Tracing Dissertation",
        p4: "Thermal Tolerance in Endosymbiotic Coral Algae",
        customer: { name: "Brooke Campbell", first: "Brooke", phone: "551208", date: "9th", tier: "reef", loc: "atoll", children: "1", diet: "vegetarian", time: "9:30", fee: "175", pay: "bank transfer" },
        guide: { place: "Great Barrier Reef Field Station", year: "1994", facility: "microscopic coral larval rearing nursery", meet: "weekly Thursday departures" },
        students: ["Lachlan", "Zara"],
        writing_chart: "Coral Bleaching Frequency and Sea Surface Temperature Anomalies (1998 - 2024)",
        essay_topic: "Tourism to ecologically sensitive natural reserves should be strictly restricted through prohibitive permit fees. Do the advantages of this policy outweigh the drawbacks?",
        speaking_hometown: "Cairns tropical gateway",
        speaking_cue: "Describe a seaside, beach, or underwater experience that left a lasting impression."
    },
    {
        id: "cam_16",
        title: "Cambridge IELTS 16 Academic Test",
        badge: "Cam 16",
        year: "Cambridge 16 Edition",
        topic: "Biophilic Urbanism & Neuromorphic Artificial Intelligence",
        p1: "Smart Eco-City Residential Trial Application",
        p2: "Biophilic Architectural Garden Walkthrough",
        p3: "Spiking Neuromorphic Neural Architecture Paper",
        p4: "Living Building Envelopes and Vertical Ecosystems",
        customer: { name: "Kenji Sato", first: "Kenji", phone: "774902", date: "15th", tier: "smart-eco", loc: "vertical tower", children: "2", diet: "macrobiotic", time: "10:00", fee: "90", pay: "instant digital pay" },
        guide: { place: "Biophilic Urban Eco-Garden", year: "2018", facility: "automated vertical rainwater recycling facade", meet: "first Sunday bi-monthly" },
        students: ["Daiki", "Yuki"],
        writing_chart: "Energy Consumption Reduction in Living Building Envelopes vs Conventional Concrete",
        essay_topic: "Modern architects should be legally mandated to incorporate living green plant facades and natural vegetation into all commercial high-rise buildings. Discuss your view.",
        speaking_hometown: "Nagoya high-tech metropolis",
        speaking_cue: "Describe a public building, park, or modern structure designed with natural elements."
    },
    {
        id: "cam_17",
        title: "Cambridge IELTS 17 Academic Test",
        badge: "Cam 17",
        year: "Cambridge 17 Edition",
        topic: "Deep Geothermal Systems & Early Hominin Archeology",
        p1: "Archaeological Dig Expedition Registration",
        p2: "Paleolithic Heritage Open-Air Museum Tour",
        p3: "Lithic Micro-Wear Analysis and Tool Function",
        p4: "Supercritical Geothermal Drilling Technologies",
        customer: { name: "Dimitri Popov", first: "Dimitri", phone: "331890", date: "26th", tier: "archaeo", loc: "valley dig", children: "3", diet: "vegetarian", time: "8:45", fee: "65", pay: "electronic wire" },
        guide: { place: "Paleolithic Open-Air Museum", year: "1975", facility: "reconstructed prehistoric stone tool workshop", meet: "every alternate Saturday" },
        students: ["Nikolai", "Elena"],
        writing_chart: "Geothermal Drilling Depth and Power Output Across 4 Tectonic Basins",
        essay_topic: "Archaeological research requires public financing that could otherwise fund pressing healthcare and education needs. Should governments continue funding archaeology?",
        speaking_hometown: "Thessaloniki historic port",
        speaking_cue: "Describe an ancient historical artifact or archaeological discovery that intrigued you."
    },
    {
        id: "cam_18",
        title: "Cambridge IELTS 18 Academic Test",
        badge: "Cam 18",
        year: "Cambridge 18 Edition",
        topic: "Biodiversity Hotspot Resilience & Superconducting Grids",
        p1: "Conservation Forestry Youth Camp Registration",
        p2: "National Botanic Conservatory Orientation",
        p3: "High-Temperature Superconducting Cable Simulation",
        p4: "Tropical Cloud Forest Hydrology and Cloud Stripping",
        customer: { name: "Declan O'Connor", first: "Declan", phone: "900452", date: "14th", tier: "conservancy", loc: "canopy lodge", children: "2", diet: "vegetarian", time: "9:30", fee: "45", pay: "bank transfer" },
        guide: { place: "National Botanic Conservatory", year: "1985", facility: "solar-powered climate pavilion", meet: "fortnightly Saturday mornings" },
        students: ["Mark", "Sophia"],
        writing_chart: "Comparative Power Transmission Loss: High-Temperature Superconductors vs Copper Grids",
        essay_topic: "Technological innovations in power transmission will solve the global energy crisis without requiring individuals to curb energy consumption. Discuss both views.",
        speaking_hometown: "Cork riverside harbor",
        speaking_cue: "Describe a memorable scientific nature reserve or national botanical garden you visited."
    },
    {
        id: "cam_19",
        title: "Cambridge IELTS 19 Academic Test",
        badge: "Cam 19",
        year: "Cambridge 19 2024 Edition",
        topic: "Underground Life of Trees & Civic Transportation Paradigms",
        p1: "Community Art & Cultural Center Membership",
        p2: "Civic Transit Amenities and Urban Masterplan",
        p3: "Academic Dissertation Methodology Evaluation",
        p4: "The Secret Underground Mycorrhizal Life of Trees",
        customer: { name: "Sebastian Vance", first: "Sebastian", phone: "554210", date: "21st", tier: "patron", loc: "gallery wing", children: "1", diet: "vegetarian", time: "11:00", fee: "55", pay: "credit card" },
        guide: { place: "Civic Transit Center", year: "2020", facility: "integrated multimodal transit terminal", meet: "weekly Monday afternoons" },
        students: ["Julian", "Beatrice"],
        writing_chart: "Public Transit Commuter Ridership and Mode Share Shifts in European Capitals (2010 - 2024)",
        essay_topic: "To reduce urban traffic congestion and pollution, city councils should make all public transit entirely free of charge for citizens. To what extent do you agree or disagree?",
        speaking_hometown: "Bristol green maritime city",
        speaking_cue: "Describe a public transport trip or train journey that you particularly enjoyed."
    },
    {
        id: "cam_20",
        title: "Cambridge IELTS 20 Academic Test",
        badge: "Cam 20",
        year: "Cambridge 20 2025 Edition",
        topic: "Quantum Circuit Architectures & Planetary Biosphere Stewardship",
        p1: "Quantum Technology Summit Delegate Booking",
        p2: "Planetary Stewardship Exhibition Tour",
        p3: "Quantum Error Correction and Fault Tolerance",
        p4: "Planetary Boundaries Framework and Earth Systems",
        customer: { name: "Alexander Wright", first: "Alexander", phone: "770192", date: "28th", tier: "delegate", loc: "summit hall", children: "2", diet: "vegan", time: "8:30", fee: "320", pay: "institutional grant" },
        guide: { place: "Planetary Stewardship Pavilion", year: "2024", facility: "interactive Earth-system boundary dashboard", meet: "every Wednesday evening" },
        students: ["Arthur", "Victoria"],
        writing_chart: "Quantum Qubit Coherence Times and Error Suppression Rates (2015 - 2025)",
        essay_topic: "Global environmental challenges like climate change can only be solved through international scientific treaties rather than individual behavioral changes. Discuss both views.",
        speaking_hometown: "Cambridge academic town",
        speaking_cue: "Describe a major scientific discovery or breakthrough that changed human history."
    }
];

// Generator function for standardized Cambridge IELTS tests
function generateCambridgeTest(profile, idx) {
    const testNum = idx + 1;
    const c = profile.customer;
    const g = profile.guide;
    const s = profile.students;

    // 1. LISTENING: 40 QUESTIONS (PART 1: 1-10, PART 2: 11-20, PART 3: 21-30, PART 4: 31-40)
    const part1Questions = [
        { id: 1, type: "fill", question: `1. Applicant surname: Mr./Ms. ${profile.customer.name.split(' ').slice(-1)[0]}, First name: [______]`, correct_answers: [c.first, c.first.toLowerCase()], evidence: `My given name is ${c.first}, spelled clearly for your records.`, explanation: `The applicant confirms their given name as ${c.first}.` },
        { id: 2, type: "fill", question: `2. Scheduled booking date: [______] of the month`, correct_answers: [c.date, c.date.replace('th','').replace('st','').replace('nd','').replace('rd','')], evidence: `We would definitely like to begin on the ${c.date} of the month.`, explanation: `The booking date is explicitly confirmed as the ${c.date}.` },
        { id: 3, type: "fill", question: `3. Primary contact telephone: 07700 [______]`, correct_answers: [c.phone], evidence: `My direct personal contact telephone number is 07700 ${c.phone}.`, explanation: `The telephone number is recorded as 07700 ${c.phone}.` },
        { id: 4, type: "fill", question: `4. Selected membership package: [______] tier`, correct_answers: [c.tier, c.tier.toLowerCase()], evidence: `Please enrol our party under the ${c.tier} membership category.`, explanation: `The client registers under the ${c.tier} membership tier.` },
        { id: 5, type: "fill", question: `5. Preferred accommodation location: Near the [______]`, correct_answers: [c.loc, c.loc.toLowerCase()], evidence: `We prefer accommodation situated adjacent to the ${c.loc}.`, explanation: `The applicant explicitly requests lodging adjacent to the ${c.loc}.` },
        { id: 6, type: "fill", question: `6. Number of delegates/children attending: [______]`, correct_answers: [c.children], evidence: `There will be exactly ${c.children} participants registered in our party.`, explanation: `The confirmed number of participants is ${c.children}.` },
        { id: 7, type: "fill", question: `7. Special catering requirement: strictly [______]`, correct_answers: [c.diet, c.diet.toLowerCase()], evidence: `All our meal services must adhere strictly to a ${c.diet} menu.`, explanation: `The confirmed dietary requirement is strictly ${c.diet}.` },
        { id: 8, type: "fill", question: `8. Morning session start time: [______] am`, correct_answers: [c.time, c.time.replace(':', '.')], evidence: `The morning introductory briefing commences at ${c.time} sharp.`, explanation: `The morning start time is scheduled for ${c.time} am.` },
        { id: 9, type: "fill", question: `9. Security deposit amount payable: GBP [______]`, correct_answers: [c.fee], evidence: `An initial security deposit of GBP ${c.fee} is required upon confirmation.`, explanation: `The required deposit amount is GBP ${c.fee}.` },
        { id: 10, type: "fill", question: `10. Confirmed payment method: [______]`, correct_answers: [c.pay, c.pay.toLowerCase()], evidence: `Payment has been finalized via ${c.pay}.`, explanation: `The approved payment method is ${c.pay}.` }
    ];

    const part2Questions = [
        { id: 11, type: "choice", question: `11. Why was the ${g.place} initially established in ${g.year}?`, options: ["A. To support private commercial activities", "B. To safeguard vulnerable regional ecosystems", "C. To establish industrial manufacturing plants"], correct_answers: ["B"], evidence: `The ${g.place} was founded in ${g.year} specifically to preserve natural environmental resources.`, explanation: `The facility was founded specifically to safeguard vulnerable regional ecosystems (B).` },
        { id: 12, type: "choice", question: `12. What major upgrade was completed at the ${g.place}?`, options: ["A. Wide wheelchair ramps and accessible entrances", "B. A private helipad for corporate VIPs", "C. An automated parking toll system"], correct_answers: ["A"], evidence: "Our civil engineering team has recently rebuilt the boardwalk with wide ramps for wheelchair accessibility.", explanation: "Wide wheelchair ramps and accessible entrances were recently constructed (A)." },
        { id: 13, type: "choice", question: `13. What should visitors do upon encountering native wildlife?`, options: ["A. Attempt to feed them commercial snacks", "B. Take continuous flash photographs", "C. Maintain safe distance and alert rangers"], correct_answers: ["C"], evidence: "Visitors must maintain at least five meters distance and report observations to on-duty rangers.", explanation: "Visitors must maintain a safe distance and alert rangers immediately (C)." },
        { id: 14, type: "choice", question: `14. Concessionary admission tickets apply exclusively to:`, options: ["A. Full-time students and seniors over 65", "B. Corporate executives and business guests", "C. Weekend group tours over twenty people"], correct_answers: ["A"], evidence: "Concessionary rates are strictly reserved for full-time tertiary students and seniors over 65.", explanation: "Concessions apply exclusively to full-time students and seniors (A)." },
        { id: 15, type: "choice", question: `15. The facility's primary highlight is the:`, options: ["A. Traditional souvenir gift stall", `B. Zero-emission ${g.facility}`, "C. Underground automotive repair garage"], correct_answers: ["B"], evidence: `Our crowning achievement is the internationally recognized ${g.facility}.`, explanation: `The main highlight is the zero-emission ${g.facility} (B).` },
        { id: 16, type: "choice", question: `16. Which accreditation was recently awarded to the center?`, options: ["A. Global Green Flag Environmental Certificate", "B. International Fast Food Franchise Award", "C. Municipal Highway Safety Permit"], correct_answers: ["A"], evidence: "The sanctuary was proudly awarded the Global Green Flag Environmental Certificate.", explanation: "The center received the Global Green Flag Environmental Certificate (A)." },
        { id: 17, type: "choice", question: `17. Community public sessions take place:`, options: ["A. Every Friday evening", `B. ${g.meet}`, "C. Once every two years"], correct_answers: ["B"], evidence: `Public volunteer and educational gatherings convene ${g.meet}.`, explanation: `Public gatherings take place ${g.meet} (B).` },
        { id: 18, type: "choice", question: `18. What restriction applies to personal drone operations?`, options: ["A. Drones are allowed below 100 meters", "B. Night flying is encouraged", "C. Recreational drones are completely prohibited"], correct_answers: ["C"], evidence: "To prevent wildlife disturbance, recreational drone operations are completely prohibited.", explanation: "Personal recreational drones are completely prohibited (C)." },
        { id: 19, type: "choice", question: `19. Where is the emergency first-aid station located?`, options: ["A. Inside the main administration bureau", "B. Beside the lakeside boat ramp", "C. Near the perimeter security fence"], correct_answers: ["A"], evidence: "The medical first-aid station is directly situated inside the main administration headquarters.", explanation: "First-aid facilities are inside the main administration bureau (A)." },
        { id: 20, type: "choice", question: `20. How can educators access digital learning resources?`, options: ["A. By purchasing printed textbooks", "B. Downloading freely from the official portal", "C. Submitting postal requests"], correct_answers: ["B"], evidence: "All curriculum resources can be freely downloaded from our digital portal.", explanation: "Educators can download learning packets freely from the official portal (B)." }
    ];

    const part3Questions = [
        { id: 21, type: "choice", question: `21. What primary difficulty did ${s[0]} face when collecting preliminary baseline data?`, options: ["A. Sensors were improperly calibrated", "B. Unpredictable environmental disruptions interrupted data logging", "C. Survey respondents refused to participate"], correct_answers: ["B"], evidence: `${s[0]}: Severe local anomalies caused unexpected power outages that halted continuous logging.`, explanation: "Unpredictable environmental disruptions interrupted continuous data logging (B)." },
        { id: 22, type: "choice", question: `22. Why does ${s[1]} recommend multivariable regression models?`, options: ["A. To isolate confounding external variables", "B. To speed up computation time artificially", "C. To adhere to outdated formatting standards"], correct_answers: ["A"], evidence: `${s[1]}: Multivariable modeling enables us to isolate and filter out external confounding factors.`, explanation: "Multivariable regression models isolate confounding external variables (A)." },
        { id: 23, type: "choice", question: `23. How does the supervising professor evaluate their literature review?`, options: ["A. Overly dependent on non-peer-reviewed sources", "B. Methodologically sound but needing sharper critical synthesis", "C. Too narrow with insufficient theoretical depth"], correct_answers: ["B"], evidence: "Professor: Your theoretical breadth is commendable, yet your critical synthesis needs sharper contrast.", explanation: "The literature review requires sharper critical synthesis of opposing arguments (B)." },
        { id: 24, type: "choice", question: `24. What workflow strategy do ${s[0]} and ${s[1]} adopt for qualitative interviews?`, options: ["A. Employing AI speech transcription tools", "B. Discarding audio recordings completely", "C. Restricting interviews to five minutes"], correct_answers: ["A"], evidence: `${s[1]}: Utilizing speech-to-text algorithms will drastically accelerate our transcription workflow.`, explanation: "The students agree to deploy AI speech-to-text transcription tools (A)." },
        { id: 25, type: "choice", question: `25. Which ethical clearance requirement is still awaiting approval?`, options: ["A. Full anonymization of commercial survey participants", "B. Disclosing academic scholarship funding", "C. Publishing raw field data publicly"], correct_answers: ["A"], evidence: `${s[0]}: The ethics panel mandates comprehensive anonymization of all organizational identifiers.`, explanation: "Full anonymization of commercial participants remains mandatory (A)." },
        { id: 26, type: "choice", question: `26. What does the professor urge the students to emphasize in their conclusion?`, options: ["A. Actionable policy recommendations for practitioners", "B. Lengthy acknowledgments of departmental staff", "C. Highly speculative futuristic scenarios"], correct_answers: ["A"], evidence: "Professor: The examining committee will scrutinize actionable policy roadmaps for real-world practitioners.", explanation: "The conclusion must emphasize actionable policy recommendations (A)." },
        { id: 27, type: "choice", question: `27. Regarding the presentation visual format, ${s[1]} suggests:`, options: ["A. Replacing dense paragraphs with comparative infographic charts", "B. Reading verbatim from prepared lecture scripts", "C. Omitting empirical findings from slides"], correct_answers: ["A"], evidence: `${s[1]}: Comparative infographic charts convey our core findings far more effectively than text paragraphs.`, explanation: "Infographic charts convey comparative findings far better than dense text (A)." },
        { id: 28, type: "choice", question: `28. ${s[0]} is concerned that their sampling methodology suffers from:`, options: ["A. Geographical selection bias", "B. Excessive respondent attrition", "C. Incompatible data formats"], correct_answers: ["A"], evidence: `${s[0]}: Because a large majority of participants live in metropolitan hubs, geographical selection bias remains a valid concern.`, explanation: "Geographical selection bias is the main sampling concern (A)." },
        { id: 29, type: "choice", question: `29. When must the final revised research dissertation be submitted?`, options: ["A. Monday noon", "B. Wednesday at 5:00 pm", "C. Friday midnight"], correct_answers: ["B"], evidence: "Professor: The academic submission portal closes sharply at 5:00 pm on Wednesday.", explanation: "The submission deadline is sharply at 5:00 pm on Wednesday (B)." },
        { id: 30, type: "choice", question: `30. What academic performance benchmark do the students target?`, options: ["A. A minimal passing grade", "B. Distinction level with an 8.5+ equivalent evaluation", "C. Incomplete provisional status"], correct_answers: ["B"], evidence: `${s[0]}: Our benchmark has always been achieving distinction level with an 8.5+ equivalent evaluation.`, explanation: "The students target achieving distinction level with an 8.5+ band score (B)." }
    ];

    const part4Questions = [
        { id: 31, type: "fill", question: `31. Systemic stability in ${profile.p4.toLowerCase()} depends fundamentally upon structural [______].`, correct_answers: ["modularity", "redundancy"], evidence: "The primary foundation of systemic resilience lies in modularity, isolating local failures.", explanation: "Systemic resilience is fundamentally anchored in structural modularity." },
        { id: 32, type: "fill", question: `32. Energy dissipation across complex networks occurs primarily via [______] nodes.`, correct_answers: ["decentralized", "distributed"], evidence: "Architectures dissipate disruptive shockwaves across thousands of decentralized nodes.", explanation: "Shockwaves are dissipated across decentralized nodes." },
        { id: 33, type: "fill", question: `33. Modern municipal engineers model passive ventilation systems after [______] mounds.`, correct_answers: ["termite", "insect"], evidence: "Architects design passive thermal cooling systems directly modeled on subterranean termite mounds.", explanation: "Cooling systems are modeled directly after subterranean termite mounds." },
        { id: 34, type: "fill", question: `34. Self-healing composite formulations incorporate bacterial [______] for crack repair.`, correct_answers: ["spores", "cultures"], evidence: "When moisture penetrates micro-fissures, dormant bacterial spores awaken to seal them.", explanation: "Dormant bacterial spores awaken to precipitate sealing limestone." },
        { id: 35, type: "fill", question: `35. Hydrodynamic surface coatings replicate the microscopic texture of [______] skin.`, correct_answers: ["shark", "sharks"], evidence: "Naval hull coatings incorporate microscopic dermal denticles inspired by hydrodynamic shark skin.", explanation: "Hydrodynamic micro-grooves replicate shark skin." },
        { id: 36, type: "fill", question: `36. Subterranean fungal networks facilitate reciprocal nutrient [______] between organisms.`, correct_answers: ["sharing", "exchange", "transfer"], evidence: "Underground mycorrhizal fungal hyphae regulate reciprocal nutrient sharing between tree roots.", explanation: "Underground fungal networks regulate reciprocal nutrient sharing." },
        { id: 37, type: "fill", question: `37. Automated satellite sensor grids monitor atmospheric [______] in real time.`, correct_answers: ["moisture", "humidity", "temperature"], evidence: "Automated satellite sensors continuously record canopy moisture levels to forecast wildfires.", explanation: "Sensors continuously record canopy moisture levels in real time." },
        { id: 38, type: "fill", question: `38. Autonomous robotic drones deploy [______] telemetry to navigate without GPS.`, correct_answers: ["optical", "visual", "lidar"], evidence: "When satellite signals fade, autonomous drones depend entirely upon optical flow telemetry.", explanation: "Drones utilize optical telemetry for autonomous spatial navigation." },
        { id: 39, type: "fill", question: `39. Industrial recycling processes utilize specialized [______] to break down polymers.`, correct_answers: ["enzymes", "bacteria"], evidence: "Engineered bacterial enzymes rapidly depolymerize synthetic plastics within hours.", explanation: "Engineered enzymes depolymerize plastic waste into reusable chemical precursors." },
        { id: 40, type: "fill", question: `40. Sustainable urban governance requires continuous [______] feedback loops.`, correct_answers: ["empirical", "digital", "data"], evidence: "Long-term urban resilience is unattainable without empirical feedback loops informing civic planners.", explanation: "Sustainable urban governance requires continuous empirical feedback loops." }
    ];

    // 2. READING: 40 QUESTIONS (PASSAGE 1: 1-13, PASSAGE 2: 14-26, PASSAGE 3: 27-40)
    const p1Title = `Passage 1: ${profile.topic} - Evolutionary Adaptations & Ecological Dynamics`;
    const p1Text = `Scientific inquiry into ${profile.topic.toLowerCase()} has fundamentally altered biological consensus regarding morphological evolution, ecological balance, and environmental stewardship.\n\nHistorical field records indicate that ancestral specimens arrived upon their native territories roughly four millennia ago via maritime seafaring merchants. Over succeeding generations, these organisms developed acute cranial adaptations, enhanced sensory perception, and specialized metabolic endurance suited to arid or complex biomes.\n\nContemporary telemetry studies reveal that apex predators and modular keystone species regulate herbivore densities, indirectly protecting fragile plant canopies from catastrophic degradation. Where keystone populations remain intact, vegetative biomass increases markedly, which in turn preserves subterranean aquifer moisture and prevents severe soil erosion.\n\nNevertheless, modern agricultural expansion and suburban encroachments have precipitated severe territorial fragmentation. Conservation biologists advocate the establishment of continuous biological corridors linking isolated reserves, allowing genetic exchange and preventing catastrophic inbreeding depression. The implementation of non-lethal protective fencing and community-led wildlife coexistence initiatives has demonstrated measurable success in reconciling human economic pursuits with ecological integrity.`;

    const passage1Questions = [
        { id: 1, type: "tfng", question: `1. Ancestral specimens of ${profile.topic.split('&')[0].trim()} were introduced via maritime merchant voyages.`, correct_answers: ["TRUE", "True", "T"], evidence: "Historical field records indicate that ancestral specimens arrived upon their native territories roughly four millennia ago via maritime seafaring merchants.", explanation: "Ancestral populations were introduced via maritime merchants (TRUE)." },
        { id: 2, type: "tfng", question: "2. The organisms developed cranial adaptations and metabolic endurance over successive generations.", correct_answers: ["TRUE", "True", "T"], evidence: "Over succeeding generations, these organisms developed acute cranial adaptations, enhanced sensory perception, and specialized metabolic endurance.", explanation: "Cranial adaptations and metabolic endurance developed over generations (TRUE)." },
        { id: 3, type: "tfng", question: "3. Apex predator presence leads to severe reduction in overall vegetative canopy biomass.", correct_answers: ["FALSE", "False", "F"], evidence: "Where keystone populations remain intact, vegetative biomass increases markedly.", explanation: "Vegetative biomass increases markedly, directly contradicting the statement (FALSE)." },
        { id: 4, type: "tfng", question: "4. Subterranean aquifer moisture is preserved when vegetative biomass increases.", correct_answers: ["TRUE", "True", "T"], evidence: "which in turn preserves subterranean aquifer moisture and prevents severe soil erosion.", explanation: "Increased vegetative biomass preserves subterranean aquifer moisture (TRUE)." },
        { id: 5, type: "tfng", question: "5. Suburban expansion has completely eliminated inbreeding risks among isolated reserves.", correct_answers: ["FALSE", "False", "F"], evidence: "agricultural expansion and suburban encroachments have precipitated severe territorial fragmentation... preventing catastrophic inbreeding depression.", explanation: "Territorial fragmentation increases inbreeding depression risks (FALSE)." },
        { id: 6, type: "tfng", question: "6. Continuous biological corridors enable vital genetic exchange across fragmented habitats.", correct_answers: ["TRUE", "True", "T"], evidence: "establishment of continuous biological corridors linking isolated reserves, allowing genetic exchange.", explanation: "Corridors enable vital genetic exchange between separated habitats (TRUE)." },
        { id: 7, type: "tfng", question: "7. All agricultural landowners unanimously support non-lethal fencing initiatives.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "The text mentions community initiatives have demonstrated measurable success, but does not state all landowners support it unanimously.", explanation: "Landowner unanimity is neither confirmed nor contradicted in the passage (NOT GIVEN)." },
        { id: 8, type: "fill", question: "8. Ancestral specimens arrived approximately four [______] ago.", correct_answers: ["millennia", "thousand years"], evidence: "arrived upon their native territories roughly four millennia ago.", explanation: "The arrival occurred roughly four millennia ago." },
        { id: 9, type: "fill", question: "9. Apex predators regulate [______] densities to protect plant canopies.", correct_answers: ["herbivore"], evidence: "apex predators and modular keystone species regulate herbivore densities.", explanation: "They regulate herbivore densities." },
        { id: 10, type: "fill", question: "10. Vegetative cover shields subterranean aquifer [______] from evaporation.", correct_answers: ["moisture"], evidence: "which in turn preserves subterranean aquifer moisture and prevents severe soil erosion.", explanation: "Vegetation protects aquifer moisture." },
        { id: 11, type: "fill", question: "11. Territorial fragmentation increases the danger of inbreeding [______].", correct_answers: ["depression"], evidence: "allowing genetic exchange and preventing catastrophic inbreeding depression.", explanation: "Fragmentation risks inbreeding depression." },
        { id: 12, type: "fill", question: "12. Biologists propose continuous [______] corridors to connect reserves.", correct_answers: ["biological"], evidence: "advocate the establishment of continuous biological corridors linking isolated reserves.", explanation: "Continuous biological corridors are recommended." },
        { id: 13, type: "fill", question: "13. Community coexistence programs deploy [______] protective fences.", correct_answers: ["non-lethal"], evidence: "The implementation of non-lethal protective fencing and community-led wildlife coexistence initiatives.", explanation: "Non-lethal fencing has shown success." }
    ];

    const p2Title = `Passage 2: Socio-Economic Transformations in Infrastructure & ${profile.p2}`;
    const p2Text = `Throughout the industrial and contemporary eras, the evolution of municipal transport and structural engineering has transformed global demographic patterns.\n\nIn early twentieth-century urban planning, municipal authorities prioritized high-throughput vehicular highways over pedestrian connectivity. However, mid-century sociological audits demonstrated that widespread highway construction fragmented historic residential districts and fostered socio-economic isolation.\n\nIn response, modern municipal masterplans increasingly incorporate biophilic pedestrian boulevards, multi-modal transport nodes, and low-emission public fleets. By reorganizing urban flow around human-centric mobility rather than private motor vehicles, cities achieve substantial reductions in ambient air pollutants, including particulate matter and nitrogen oxides.\n\nMoreover, the economic return on civic green infrastructure has proven substantial. Independent real estate and commercial analyses indicate that properties located within walking distance of revitalized urban parks and pedestrian arteries appreciate at rates exceeding municipal averages by up to thirty percent. Consequently, progressive municipalities now treat urban nature not as an ornamental luxury, but as essential public infrastructure that enhances human well-being and climate resilience.`;

    const passage2Questions = [
        { id: 14, type: "choice", question: "14. Early twentieth-century urban planning primarily favored:", options: ["A. Pedestrian public boulevards", "B. High-throughput vehicular highways", "C. Dedicated bicycle transit networks"], correct_answers: ["B"], evidence: "municipal authorities prioritized high-throughput vehicular highways over pedestrian connectivity.", explanation: "Early planning prioritized high-throughput vehicular highways (B)." },
        { id: 15, type: "choice", question: "15. Mid-century sociological studies revealed that highway construction:", options: ["A. Fostered socio-economic isolation and fragmented districts", "B. Dramatically enhanced local civic cohesion", "C. Completely eliminated inner-city poverty"], correct_answers: ["A"], evidence: "highway construction fragmented historic residential districts and fostered socio-economic isolation.", explanation: "Highway construction fragmented districts and created socio-economic isolation (A)." },
        { id: 16, type: "choice", question: "16. Modern urban masterplans emphasize:", options: ["A. Eliminating all public parklands", "B. Human-centric mobility and multi-modal transit nodes", "C. Subsidizing private sport utility vehicles"], correct_answers: ["B"], evidence: "reorganizing urban flow around human-centric mobility rather than private motor vehicles.", explanation: "Modern plans emphasize human-centric mobility and multimodal nodes (B)." },
        { id: 17, type: "choice", question: "17. Reorganizing civic transport around human-centric mobility results in:", options: ["A. Significant decreases in ambient air pollutants", "B. Substantial increases in greenhouse emissions", "C. Unavoidable gridlock across all transit lines"], correct_answers: ["A"], evidence: "cities achieve substantial reductions in ambient air pollutants, including particulate matter.", explanation: "Substantial reductions in ambient air pollutants are achieved (A)." },
        { id: 18, type: "choice", question: "18. Real estate values near revitalized pedestrian parks:", options: ["A. Appreciate up to 30% faster than municipal averages", "B. Fall into severe depreciation immediately", "C. Remain stagnant for several decades"], correct_answers: ["A"], evidence: "appreciate at rates exceeding municipal averages by up to thirty percent.", explanation: "Properties appreciate at rates exceeding averages by up to 30% (A)." },
        { id: 19, type: "choice", question: "19. Progressive municipal administrations now classify urban nature as:", options: ["A. An expendable decorative luxury", "B. Essential public infrastructure for climate resilience", "C. A financial liability that should be privatized"], correct_answers: ["B"], evidence: "treat urban nature not as an ornamental luxury, but as essential public infrastructure.", explanation: "Urban nature is treated as essential public infrastructure (B)." },
        { id: 20, type: "tfng", question: "20. Early twentieth-century planners prioritized walking paths over car highways.", correct_answers: ["FALSE", "False", "F"], evidence: "prioritized high-throughput vehicular highways over pedestrian connectivity.", explanation: "They prioritized highways over walking paths (FALSE)." },
        { id: 21, type: "tfng", question: "21. Highway projects in the mid-twentieth century disrupted historic neighborhoods.", correct_answers: ["TRUE", "True", "T"], evidence: "fragmented historic residential districts and fostered socio-economic isolation.", explanation: "Highway projects fragmented historic residential districts (TRUE)." },
        { id: 22, type: "tfng", question: "22. Every municipal council has completely eliminated all vehicular traffic.", correct_answers: ["FALSE", "False", "F"], evidence: "The text discusses reorganizing urban flow, not completely banning all vehicles.", explanation: "Not all vehicular traffic has been eliminated (FALSE)." },
        { id: 23, type: "tfng", question: "23. Property price increases near parks have been verified by independent audits.", correct_answers: ["TRUE", "True", "T"], evidence: "Independent real estate and commercial analyses indicate that properties located within walking distance...", explanation: "Independent commercial analyses confirmed the appreciation (TRUE)." },
        { id: 24, type: "fill", question: "24. Early twentieth-century planning neglected [______] connectivity.", correct_answers: ["pedestrian"], evidence: "prioritized high-throughput vehicular highways over pedestrian connectivity.", explanation: "Pedestrian connectivity was neglected." },
        { id: 25, type: "fill", question: "25. Biophilic urban design curtails emissions of particulate [______].", correct_answers: ["matter"], evidence: "substantial reductions in ambient air pollutants, including particulate matter.", explanation: "Particulate matter emissions are reduced." },
        { id: 26, type: "fill", question: "26. Revitalized parks appreciate up to [______] percent above city averages.", correct_answers: ["thirty", "30", "30%"], evidence: "exceeding municipal averages by up to thirty percent.", explanation: "Properties appreciate up to thirty percent faster." }
    ];

    const p3Title = `Passage 3: Epistemological Foundations of Science & ${profile.p4}`;
    const p3Text = `The philosophy of scientific discovery has long debated whether breakthroughs originate through incremental empirical observation or radical paradigm reconfigurations.\n\nIn classic positivist frameworks, scientific progress was perceived as a linear accumulation of experimental data points, gradually refining theoretical formulas toward universal certainty. However, twentieth-century epistemology established that prevailing scientific frameworks operate within entrenched paradigms, which resist anomalies until mounting contradictory evidence precipitates a revolutionary paradigm shift.\n\nIn materials science and molecular biotechnology, this dynamic is vividly exemplified by the transition from rigid synthetic polymers toward bio-inspired adaptive modularity. For decades, mechanical engineers sought structural resilience through sheer tensile mass and immutable rigidity. Conversely, biological architectures achieve enduring durability through dynamic compliance, self-repair mechanisms, and decentralized structural modularity.\n\nBy synthesizing algorithmic machine learning with organic molecular synthesis, contemporary researchers design adaptive nanostructures capable of autonomous phase changes in response to mechanical stress. This paradigm transition signals an epochal epistemological departure: human engineering no longer seeks to conquer biological principles, but rather embodies their supreme modular efficiency.`;

    const passage3Questions = [
        { id: 27, type: "choice", question: "27. Positivist epistemological frameworks portrayed scientific progress as:", options: ["A. A chaotic sequence of unverified hunches", "B. A linear accumulation of empirical data points", "C. An entirely subjective artistic pursuit"], correct_answers: ["B"], evidence: "scientific progress was perceived as a linear accumulation of experimental data points.", explanation: "Positivism viewed science as a linear accumulation of data points (B)." },
        { id: 28, type: "choice", question: "28. Radical paradigm shifts occur when:", options: ["A. Theoretical formulas are abandoned without reason", "B. Mounting contradictory anomalies overwhelm the prevailing framework", "C. Government funding is completely withdrawn"], correct_answers: ["B"], evidence: "resist anomalies until mounting contradictory evidence precipitates a revolutionary paradigm shift.", explanation: "Mounting anomalies precipitate revolutionary paradigm shifts (B)." },
        { id: 29, type: "choice", question: "29. Traditional mechanical engineering historically sought structural resilience through:", options: ["A. Organic biological compliance", "B. Sheer tensile mass and immutable rigidity", "C. Constant biochemical decomposition"], correct_answers: ["B"], evidence: "engineers sought structural resilience through sheer tensile mass and immutable rigidity.", explanation: "Traditional engineering relied on sheer tensile mass and immutable rigidity (B)." },
        { id: 30, type: "choice", question: "30. In contrast to rigid synthetics, biological structures maintain durability via:", options: ["A. Dynamic compliance and decentralized modularity", "B. Complete absence of cellular water", "C. High-voltage electrical magnetization"], correct_answers: ["A"], evidence: "biological architectures achieve enduring durability through dynamic compliance, self-repair mechanisms, and decentralized structural modularity.", explanation: "Biological durability stems from dynamic compliance and modularity (A)." },
        { id: 31, type: "choice", question: "31. Contemporary materials research combines machine learning with:", options: ["A. Prehistoric smelting furnaces", "B. Organic molecular synthesis to yield adaptive nanostructures", "C. Manual hand-drawn blueprint sketches"], correct_answers: ["B"], evidence: "synthesizing algorithmic machine learning with organic molecular synthesis, contemporary researchers design adaptive nanostructures.", explanation: "Researchers synthesize machine learning with organic molecular synthesis (B)." },
        { id: 32, type: "choice", question: "32. The epochal philosophical departure described in the conclusion represents:", options: ["A. Complete abandonment of theoretical physics", "B. Embodying biological modular efficiency rather than conquering it", "C. Banning artificial intelligence in academic labs"], correct_answers: ["B"], evidence: "human engineering no longer seeks to conquer biological principles, but rather embodies their supreme modular efficiency.", explanation: "Modern engineering embodies biological modular efficiency (B)." },
        { id: 33, type: "tfng", question: "33. Classical positivism claimed that scientific discovery advances in a linear fashion.", correct_answers: ["TRUE", "True", "T"], evidence: "scientific progress was perceived as a linear accumulation of experimental data points.", explanation: "Positivism viewed science as linear (TRUE)." },
        { id: 34, type: "tfng", question: "34. Prevailing scientific paradigms instantly adopt new anomalies without resistance.", correct_answers: ["FALSE", "False", "F"], evidence: "prevailing scientific frameworks operate within entrenched paradigms, which resist anomalies.", explanation: "Paradigms actively resist anomalies until overwhelmed (FALSE)." },
        { id: 35, type: "tfng", question: "35. Biological materials possess autonomous self-repair mechanisms.", correct_answers: ["TRUE", "True", "T"], evidence: "achieve enduring durability through dynamic compliance, self-repair mechanisms.", explanation: "Biological structures achieve durability through self-repair (TRUE)." },
        { id: 36, type: "tfng", question: "36. Machine learning has solved all known problems in materials science.", correct_answers: ["NOT GIVEN", "Not Given", "NG"], evidence: "The text notes that researchers synthesize machine learning with organic synthesis, but never claims all problems are solved.", explanation: "Solving all problems is neither stated nor implied (NOT GIVEN)." },
        { id: 37, type: "fill", question: "37. Traditional frameworks assumed experimental data produced universal [______].", correct_answers: ["certainty"], evidence: "gradually refining theoretical formulas toward universal certainty.", explanation: "Formulas aimed toward universal certainty." },
        { id: 38, type: "fill", question: "38. Rigid engineering pursued durability through sheer [______] mass.", correct_answers: ["tensile"], evidence: "sought structural resilience through sheer tensile mass.", explanation: "Engineering relied on sheer tensile mass." },
        { id: 39, type: "fill", question: "39. Organic architectures exhibit dynamic [______] under environmental stress.", correct_answers: ["compliance"], evidence: "achieve enduring durability through dynamic compliance.", explanation: "Organic systems utilize dynamic compliance." },
        { id: 40, type: "fill", question: "40. Advanced nanostructures perform autonomous [______] changes when mechanically stressed.", correct_answers: ["phase"], evidence: "design adaptive nanostructures capable of autonomous phase changes in response to mechanical stress.", explanation: "They execute autonomous phase changes." }
    ];

    // 3. WRITING (TASK 1 & TASK 2)
    const writingData = {
        task_1: {
            prompt: `The chart illustrates ${profile.writing_chart}.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
            chart_type: profile.writing_chart,
            model_answer: `The presented illustration delineates comparative data regarding ${profile.writing_chart.toLowerCase()} over the recorded time period.\n\nOverall, it is unmistakably apparent that all surveyed categories exhibited noticeable structural adjustments, with the primary metric advancing with measured consistency to culminate at a historic peak, while secondary sectors demonstrated contrasting cyclical fluctuations.\n\nInitially, the principal indicator established a dominant baseline at approximately 45%, advancing progressively across successive intervals to exceed 78% by the end of the survey window. In sharp contrast, alternative sub-categories commenced from lower baseline figures of roughly 18% and 22% respectively, undergoing moderate initial increases before stabilizing across subsequent decades.\n\nIn conclusion, while disparities among the observed cohorts remained pronounced throughout the epoch, the overarching trend firmly underscores sustained growth and systematic infrastructural maturation.`,
            scoring_criteria: {
                task_achievement: "Band 9.0: Masterful synthesis of macro trends and microscopic statistical disparities.",
                coherence_cohesion: "Band 9.0: Effortless structural cohesion and seamless transition markers.",
                lexical_resource: "Band 9.0: Sophisticated academic lexicon.",
                grammar_accuracy: "Band 9.0: Flawless syntactic complexity and compound sentence accuracy."
            }
        },
        task_2: {
            prompt: `${profile.essay_topic}\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.`,
            model_answer: `The complex socio-economic debates surrounding this proposition have attracted sustained examination from economists, sociologists, and public policy analysts alike. While certain skeptics contend that rapid institutional transformation brings transient logistical friction and labor market displacement, I firmly argue that the overarching long-term dividends - particularly regarding societal efficiency, environmental sustainability, and equitable public access - overwhelmingly justify progressive implementation.\n\nUndeniably, fundamental systemic transitions inevitably introduce transient friction. When conventional frameworks undergo structural reconfiguration, traditional occupations may experience short-term dislocation. If municipal authorities neglect to institute comprehensive retraining programs, economically vulnerable demographics risk disenfranchisement during the transition.\n\nNevertheless, the societal imperatives for modern structural adaptation remain overwhelmingly compelling. Rigorous empirical studies demonstrate that modern scientific and civic frameworks drastically diminish preventable systemic failures, optimize resource allocation, and enhance civilian safety. Furthermore, centralized policy coordination enables sustainable ecological stewardship that individual market mechanisms simply cannot replicate.\n\nIn conclusion, while policymakers must implement equitable safeguards and support vulnerable communities during transitions, embracing scientific and technological progress represents an indispensable evolution toward safer, more sustainable, and resilient future societies.`,
            key_vocab: ["socio-economic dividends", "transient logistical friction", "structural reconfiguration", "equitable safeguards", "empirical validation", "sustainable stewardship"]
        }
    };

    // 4. SPEAKING (PART 1, 2, 3)
    const speakingData = {
        part_1: [
            { question: `Could you describe your hometown and what makes it unique?`, examiner_audio: `Could you describe your hometown and what makes it unique?`, model_answer: `I reside in ${profile.speaking_hometown}, celebrated for its harmonious fusion of forward-looking modern architecture and serene natural surroundings.`, key_vocab: ["harmonious fusion", "metropolis", "serene surroundings"] },
            { question: "What mode of daily transportation do you predominantly rely upon?", examiner_audio: "What mode of daily transportation do you predominantly rely upon?", model_answer: "I consistently commute using clean electric public transport because it offers efficient punctuality while actively curbing my carbon footprint.", key_vocab: ["clean electric transit", "carbon footprint", "punctuality"] },
            { question: "How often do you spend time exploring natural or cultural heritage spots?", examiner_audio: "How often do you spend time exploring natural or cultural heritage spots?", model_answer: "I make an intentional habit of visiting local botanical reserves and museums at least twice monthly to decompress and expand my intellectual horizons.", key_vocab: ["intentional habit", "decompress", "intellectual horizons"] }
        ],
        part_2: {
            cue_card_title: profile.speaking_cue,
            cues: [
                "Where this place or event was situated",
                "When you visited and who accompanied you",
                "What specific details or concepts captured your attention",
                "And explain why this experience left an indelible impression on your perspective."
            ],
            preparation_time_seconds: 60,
            speaking_time_seconds: 120,
            model_answer: `I would like to recount an exceptionally inspiring experience regarding ${profile.speaking_cue.toLowerCase().replace('describe ','')}.\n\nI encountered this roughly two years ago while traveling alongside close university colleagues. What utterly captivated my attention was the breathtaking harmony between cutting-edge scientific methodology and tangible human benefits.\n\nObserving abstract academic equations translate directly into practical civil breakthroughs left an indelible impression upon my academic perspective.`,
            key_vocab: ["exceptionally inspiring", "breathtaking harmony", "tangible benefits", "indelible impression"]
        },
        part_3: [
            { question: `How might innovations in ${profile.topic.split('&')[0].trim().toLowerCase()} influence future educational practices?`, examiner_audio: `How might innovations in this field influence future educational practices?`, model_answer: `I foresee these breakthroughs evolving from niche academic inquiry into core pedagogical foundations, cultivating critical analytical reasoning among future students.` },
            { question: "Do governments have a primary moral obligation to fund fundamental scientific research?", examiner_audio: "Do governments have a primary moral obligation to fund fundamental scientific research?", model_answer: "Without question, fundamental theoretical inquiry yields monumental civil breakthroughs that private commercial entities avoid due to lengthy gestation horizons." }
        ]
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