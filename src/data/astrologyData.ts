import { AstrologerService, CityLocality, Testimonial, RashiInfo, FaqItem } from '../types';

export const ASTROLOGER_PROFILE = {
  name: 'Acharya Ganesh',
  fullName: 'Acharya Ganesh',
  tagline: 'जो सही राह दिखाए',
  designation: 'Vedic Jyotish Acharya & Vastu Expert',
  qualification: 'Gold Medalist Vedic Astrologer & Vastu Acharya',
  experienceYears: 25,
  consultationsDone: '25,000+',
  accuracyRate: '98.6%',
  phone: '+91 73000-04325',
  phone2: '+91 73000-04326',
  whatsappNumber: '917300004325',
  email: 'contact@acharyaganesh.com',
  rating: 4.9,
  reviewCount: 1850,
  mainChambers: [
    {
      name: 'Indirapuram Main Chamber',
      address: 'Suite 204, 2nd Floor, Aditya Mega City, Vaibhav Khand, Indirapuram, Ghaziabad, UP - 201014',
      nearbyMetro: 'Vaishali Metro Station (8 mins) & Electronic City Metro (10 mins)',
      timings: 'Monday - Saturday: 10:00 AM – 7:30 PM (Sunday by Appointment)',
      phone: '+91 73000-04325',
    },
    {
      name: 'Raj Nagar Consultation Office',
      address: 'Shop 14, Ground Floor, RDC Commercial Complex, Raj Nagar, Ghaziabad, UP - 201002',
      nearbyMetro: 'Shaheed Sthal (New Bus Adda) Metro & Ghaziabad RRTS Station',
      timings: 'Tuesday, Thursday & Saturday: 3:00 PM – 8:30 PM',
      phone: '+91 73000-04326',
    }
  ]
};

export const GHAZIABAD_LOCALITIES: CityLocality[] = [
  {
    id: 'indirapuram',
    name: 'Indirapuram',
    pincode: '201014',
    zone: 'Trans-Hindon',
    landmark: 'Near Shipra Mall & Aditya Mega City',
    consultationModes: ['In-Person Clinic', 'Home Vastu Visit', 'Video Consultation', 'Audio Call'],
    travelTimeFromChamber: '0 mins (Main Chamber located here)',
    description: 'Premier residential hub of Ghaziabad with hundreds of families consulting weekly for career transitions, IT abroad yoga, and high-rise apartment Vastu corrections.',
    clientsServed: 4850,
    avgRating: 4.9,
    popularServices: ['High-Rise Flat Vastu', 'Career & Job Switch Astrological Timing', 'Kundli Milan for Working Couples']
  },
  {
    id: 'vaishali',
    name: 'Vaishali',
    pincode: '201010',
    zone: 'Trans-Hindon',
    landmark: 'Sectors 1 to 9, Near Vaishali Metro & Mahagun Metro Mall',
    consultationModes: ['In-Person Clinic', 'Video Call', 'Home Vastu'],
    travelTimeFromChamber: '8 - 12 mins via CISF Road',
    description: 'High concentration of corporate professionals and traders seeking business growth planetary charts and auspicious child birth time (Muhurat).',
    clientsServed: 3620,
    avgRating: 4.9,
    popularServices: ['Kundli Milan', 'Business Horoscope & Partnership Compatibility', 'Kaal Sarp Dosh Nivarana']
  },
  {
    id: 'raj-nagar-extension',
    name: 'Raj Nagar Extension',
    pincode: '201017',
    zone: 'North Ghaziabad',
    landmark: 'Near Hindon Elevated Road & DPS Raj Nagar Ext.',
    consultationModes: ['In-Person Clinic', 'Home Vastu Visit', 'Online Call'],
    travelTimeFromChamber: '15 mins via Hindon Elevated Road',
    description: 'Rapidly growing residential sector. Frequent consultations for Griha Pravesh muhurat, newly bought flat energies, and child education yogas.',
    clientsServed: 2980,
    avgRating: 4.8,
    popularServices: ['New Home Griha Pravesh Muhurat', 'Child Higher Studies & Competitive Exams Yoga', 'Sade Sati Remedy']
  },
  {
    id: 'vasundhara',
    name: 'Vasundhara',
    pincode: '201012',
    zone: 'Trans-Hindon',
    landmark: 'Sectors 1 to 19, Near Mewar Institute & Olive County',
    consultationModes: ['In-Person Clinic', 'Video Call', 'WhatsApp Horoscope'],
    travelTimeFromChamber: '7 - 10 mins',
    description: 'Established community relying on traditional Parashari Vedic astrology for matrimonial harmony, health remedies, and gemstone verification.',
    clientsServed: 2450,
    avgRating: 4.9,
    popularServices: ['Matrimonial Dispute Remedies', 'Original Certified Gemstone Prescription', 'Panchang & Choghadiya Muhurat']
  },
  {
    id: 'crossings-republik',
    name: 'Crossings Republik',
    pincode: '201016',
    zone: 'NH-24 Corridor',
    landmark: 'Near ABES Engineering College & Mahagun Mascot',
    consultationModes: ['In-Person Clinic', 'Video Call', 'Vastu Visit'],
    travelTimeFromChamber: '12 mins via Delhi-Meerut Expressway',
    description: 'Diverse cosmopolitan township seeking practical astrological guidance without superstition for fast career progression and debt clearance.',
    clientsServed: 2120,
    avgRating: 4.8,
    popularServices: ['Job Stability & Promotion Guidance', 'Financial Debt & Rahu Dasha Remedies', 'Pre-Marital Background Match']
  },
  {
    id: 'raj-nagar-rdc',
    name: 'Raj Nagar (RDC & Main)',
    pincode: '201002',
    zone: 'Central Ghaziabad',
    landmark: 'RDC Commercial Hub & Old Raj Nagar',
    consultationModes: ['In-Person Branch Chamber', 'Commercial Vastu Visit', 'Video Consultation'],
    travelTimeFromChamber: 'Branch Chamber at RDC',
    description: 'Prominent industrial and commercial neighborhood with established business families consulting for business expansion, court case remedies, and property investments.',
    clientsServed: 3100,
    avgRating: 4.9,
    popularServices: ['Commercial Office & Factory Vastu', 'Court Case & Legal Victory Astro Yogas', 'Ancestral Property & Gold Investment Chart']
  },
  {
    id: 'kaushambi',
    name: 'Kaushambi',
    pincode: '201010',
    zone: 'Delhi-UP Border',
    landmark: 'Near Kaushambi Metro Station & Pacific Mall',
    consultationModes: ['In-Person Clinic', 'Video Call', 'Phone Consultation'],
    travelTimeFromChamber: '10 mins via Anand Vihar link',
    description: 'Bordering East Delhi, catering to doctors, lawyers, and civil service aspirants for Kundli analysis and Sade Sati protection remedies.',
    clientsServed: 1840,
    avgRating: 4.9,
    popularServices: ['Government Job & UPSC Planetary Combinations', 'Health & Chronic Disease Vedic Astrological Diagnosis', 'Rudraksha Recommendation']
  },
  {
    id: 'kavi-nagar-shastri-nagar',
    name: 'Kavi Nagar & Shastri Nagar',
    pincode: '201002',
    zone: 'Central Ghaziabad',
    landmark: 'Near Diamond Palace & Shastri Nagar Central Park',
    consultationModes: ['In-Person Clinic', 'Online Call', 'Puja Booking'],
    travelTimeFromChamber: '15 mins',
    description: 'Tradition-rich neighborhood with deep reverence for accurate birth chart reading, Navagraha Shanti puja, and ancestral pitra dosha nivarana.',
    clientsServed: 1650,
    avgRating: 4.8,
    popularServices: ['Pitra Dosh & Manglik Dosh Shanti Puja', 'Family Peace & Relationship Healing', 'Child Naming (Naamkaran) by Nakshatra']
  }
];

export const ASTROLOGY_SERVICES: AstrologerService[] = [
  {
    id: 'kundli-reading',
    title: 'Complete Vedic Kundli Analysis',
    hindiTitle: 'सम्पूर्ण जन्म कुंडली विश्लेषण',
    tagline: 'In-depth analysis of 12 houses, planetary placements, and Mahadashas',
    description: 'Full horoscope assessment covering career milestones, health warnings, financial peaks, relationship timeline, and personalized gemstone and mantra remedies.',
    iconName: 'Sparkles',
    benefits: [
      'Detailed study of Lagna, Navamsha (D9) and Dashamsha (D10) charts',
      'Life forecast for the next 5 years with exact dasha timeline',
      'Non-invasive, practical Vedic remedies (no fear-mongering)',
      'Digital Kundli PDF report delivered within 2 hours'
    ],
    duration: '45 - 60 Minutes',
    originalPrice: 2100,
    discountedPrice: 1100,
    badge: 'Most Popular in Ghaziabad',
    popularFor: ['Career Stuck', 'Unknown Stress', 'Future Planning', 'Health Doubts']
  },
  {
    id: 'kundli-milan',
    title: 'Matchmaking & Kundli Milan (Gun Milan + D9)',
    hindiTitle: 'विवाह कुंडली मिलान एवं मांगलिक विचार',
    tagline: 'Scientific 36 Guna Ashtakoot matching plus deep Navamsha compatibility check',
    description: 'Beyond traditional Guna matching — we verify emotional wavelength, longevity (Ayu), financial prosperity post-marriage, and authentic Manglik Dosha cancellation rules.',
    iconName: 'HeartHandshake',
    benefits: [
      '36 Guna Ashtakoot scoring with detailed breakdown',
      'Bhakoot & Nadi Dosha deep analysis with genuine remedies',
      'Mutual planetary friendship and longevity verification',
      'Auspicious Vivah Muhurat calculation included'
    ],
    duration: '45 Minutes',
    originalPrice: 2500,
    discountedPrice: 1350,
    badge: 'Essential for Marriage',
    popularFor: ['Love Marriage', 'Arranged Match', 'Manglik Check', 'Intercaste Union']
  },
  {
    id: 'career-business',
    title: 'Career, Job Switch & Business Astrology',
    hindiTitle: 'नौकरी, व्यापार एवं पदोन्नति मार्गदर्शन',
    tagline: 'Pinpoint the right time for job change, overseas opportunities, and startup success',
    description: 'Analyzes 6th house (jobs), 10th house (status), 11th house (gains) and Rahu-Guru transits to guide you on promotions, govt job exams, foreign travel, or new business partnerships.',
    iconName: 'Briefcase',
    benefits: [
      'Exact high-probability time windows for job offers and appraisal',
      'Govt vs Private sector planetary suitability check',
      'Partnership compatibility and business name numerology',
      'Remedies to overcome workplace office politics and boss friction'
    ],
    duration: '40 Minutes',
    originalPrice: 1800,
    discountedPrice: 999,
    badge: 'High Success Rate',
    popularFor: ['Layoff Fears', 'Foreign Relocation', 'Startup Launch', 'Govt Exam Yogas']
  },
  {
    id: 'vastu-consultation',
    title: 'Residential & High-Rise Flat Vastu',
    hindiTitle: 'आवासीय एवं फ्लैट वास्तु समाधान',
    tagline: 'Non-demolition Vastu balancing tailored for apartments in Indirapuram & Vaishali',
    description: 'Expert on-site or digital floorplan Vastu consultation specifically optimized for multi-story apartments and villas in Ghaziabad without any wall demolition.',
    iconName: 'Home',
    benefits: [
      '16 directional zone energy mapping (North-East, South-West)',
      'Remedies using copper wire, pyramids, color therapy and plants',
      'Main entrance, kitchen, bedroom, and puja room balancing',
      'Special focus on builder flats in Ghaziabad societies'
    ],
    duration: 'Site Visit / 60 Mins Online',
    originalPrice: 5100,
    discountedPrice: 3100,
    badge: 'Zero Demolition',
    popularFor: ['New Flat Griha Pravesh', 'Health Issues at Home', 'Financial Blockages', 'Sleep Disturbances']
  },
  {
    id: 'dosh-nivaran',
    title: 'Sade Sati, Kaal Sarp & Pitra Dosh Remedies',
    hindiTitle: 'शनि साढ़े साती, काल सर्प एवं पितृ दोष निवारण',
    tagline: 'Accurate dosha verification — distinguish between real doshas and myths',
    description: 'Thorough verification of whether you truly have Kaal Sarp or Pitra Dosh. Tailored customized Vedic remedies, japa counts, and dana guidance.',
    iconName: 'ShieldAlert',
    benefits: [
      'Check if Sade Sati is benefic (Rajyoga maker) or testing for your Lagna',
      'Clear myth-busting so you do not fall for expensive rituals',
      'Authentic Hanuman Chalisa, Shani Stotra, and Mahamrityunjaya guidelines',
      'Personalized crystal or metal Yantra energization'
    ],
    duration: '35 Minutes',
    originalPrice: 1500,
    discountedPrice: 850,
    badge: 'Authentic Vedic',
    popularFor: ['Sudden Obstacles', 'Frequent Accidents', 'Mental Anxiety', 'Shani Transit']
  },
  {
    id: 'gemstone-consultation',
    title: 'Certified Gemstone & Rudraksha Prescription',
    hindiTitle: 'सटीक रत्न एवं रुद्राक्ष परामर्श',
    tagline: 'Find your life stone (Bhagyashali Ratna) based on your favorable functional planets',
    description: 'Never wear gemstones solely based on Sun Sign or Moon Sign. We verify your Ascendant (Lagna) lord, 5th lord, and 9th lord to recommend energized 100% natural gemstones.',
    iconName: 'Gem',
    benefits: [
      'Precise calculation of carat weight, metal (Gold/Silver/Panchdhatu)',
      'Auspicious wearing day, tithi, and Prana Pratishtha mantra',
      'Identification of synthetic/treated stones to avoid fraud',
      'Recommendations for 1 to 14 Mukhi authentic Nepali Rudraksha'
    ],
    duration: '30 Minutes',
    originalPrice: 1200,
    discountedPrice: 650,
    badge: '100% Scientific',
    popularFor: ['Luck Enhancement', 'Health Immunity', 'Focus & Wealth', 'Anger Management']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Siddharth & Megha Verma',
    locality: 'Ahinsa Khand 2, Indirapuram',
    rating: 5,
    serviceUsed: 'Kundli Milan & Matchmaking',
    date: '12 Feb 2026',
    comment: 'Other pandits created panic about Nadi Dosh in our horoscopes. Acharya Devendra Shastri explained the shastra exception logically based on our Charan and Nakshatra lords. We got married happily last month. Truly the best and most honest astrologer near Indirapuram.',
    verified: true,
    avatarBg: 'from-amber-600 to-orange-700'
  },
  {
    id: '2',
    clientName: 'Rajesh Agrawal',
    locality: 'Sector 4, Vaishali',
    rating: 5,
    serviceUsed: 'Business Horoscope & Vastu',
    date: '28 Jan 2026',
    comment: 'My manufacturing business was facing sudden cash flow stagnation. Pandit ji visited our unit in Sahibabad Industrial Area and pointed out water element clutter in the South-East corner without asking for any reconstruction. Within 60 days of remedies, delayed payments cleared up.',
    verified: true,
    avatarBg: 'from-blue-600 to-indigo-800'
  },
  {
    id: '3',
    clientName: 'Dr. Ananya Sharma',
    locality: 'Raj Nagar Extension (Near VVIP)',
    rating: 5,
    serviceUsed: 'Career & Higher Studies Astrology',
    date: '19 Jan 2026',
    comment: 'I was confused between continuing private clinical practice or appearing for a specialized fellowship in the UK. Acharya ji pointed out my active Jupiter Mahadasha starting October 2025. I received my visa clearance exactly in the week he predicted!',
    verified: true,
    avatarBg: 'from-emerald-600 to-teal-800'
  },
  {
    id: '4',
    clientName: 'Vipin Tyagi',
    locality: 'RDC, Raj Nagar, Ghaziabad',
    rating: 5,
    serviceUsed: 'Complete Kundli & Sade Sati Guidance',
    date: '04 Jan 2026',
    comment: 'Visited his chamber in RDC Raj Nagar. Very peaceful environment, listened to my problems patiently for 50 minutes without rushing. The remedies he gave were simple daily chants and charity that cost practically nothing.',
    verified: true,
    avatarBg: 'from-purple-600 to-pink-700'
  },
  {
    id: '5',
    clientName: 'Pooja Kashyap',
    locality: 'Crossings Republik (Panchsheel)',
    rating: 5,
    serviceUsed: 'Flat Vastu & Relationship Healing',
    date: '15 Dec 2025',
    comment: 'Booked an online video consultation for our 3BHK flat layout in Crossings. He guided us through color adjustments and mirror relocation. We feel a remarkable sense of calmness and positivity in our home now.',
    verified: true,
    avatarBg: 'from-rose-600 to-amber-700'
  }
];

export const RASHI_DATA: Record<string, RashiInfo> = {
  'Aries (मेष)': {
    name: 'Aries',
    hindiName: 'मेष राशि',
    element: 'Fire (अग्नि)',
    rulingPlanet: 'Mars (मंगल)',
    luckyNumber: 9,
    luckyColor: 'Coral Red / Crimson',
    gemstone: 'Red Coral (मूंगा)',
    currentTransitFocus: 'Jupiter in 2nd house supports financial gains; watch temper in partnerships.',
    advice: 'Chant Hanuman Chalisa on Tuesdays. Ideal day for investment decisions is Tuesday.'
  },
  'Taurus (वृषभ)': {
    name: 'Taurus',
    hindiName: 'वृषभ राशि',
    element: 'Earth (पृथ्वी)',
    rulingPlanet: 'Venus (शुक्र)',
    luckyNumber: 6,
    luckyColor: 'Silvery White / Cream',
    gemstone: 'Opal / Diamond (ओपल / हीरा)',
    currentTransitFocus: 'High creative flow and romantic harmony. Favorable period for vehicle or property purchase.',
    advice: 'Offer white sweets or milk on Fridays. Avoid stubborn arguments at work.'
  },
  'Gemini (मिथुन)': {
    name: 'Gemini',
    hindiName: 'मिथुन राशि',
    element: 'Air (वायु)',
    rulingPlanet: 'Mercury (बुध)',
    luckyNumber: 5,
    luckyColor: 'Emerald Green / Light Teal',
    gemstone: 'Emerald (पन्ना)',
    currentTransitFocus: 'Excellent communicative strength. Favorable for IT, journalism, and sales contracts.',
    advice: 'Feed green grass/spinach to cows on Wednesdays to amplify speech clarity.'
  },
  'Cancer (कर्क)': {
    name: 'Cancer',
    hindiName: 'कर्क राशि',
    element: 'Water (जल)',
    rulingPlanet: 'Moon (चंद्रमा)',
    luckyNumber: 2,
    luckyColor: 'Pearl White / Silver',
    gemstone: 'Natural Pearl (मोती)',
    currentTransitFocus: 'Emotional stability returning. Career elevation and support from mother/elders.',
    advice: 'Practice meditation during full moon (Purnima) and avoid late-night anxiety.'
  },
  'Leo (सिंह)': {
    name: 'Leo',
    hindiName: 'सिंह राशि',
    element: 'Fire (अग्नि)',
    rulingPlanet: 'Sun (सूर्य)',
    luckyNumber: 1,
    luckyColor: 'Golden Amber / Saffron',
    gemstone: 'Ruby (माणिक्य)',
    currentTransitFocus: 'Leadership roles opening up in Ghaziabad and NCR corporate sectors. High social prestige.',
    advice: 'Offer water (Surya Arghya) to the rising Sun daily in a copper vessel.'
  },
  'Virgo (कन्या)': {
    name: 'Virgo',
    hindiName: 'कन्या राशि',
    element: 'Earth (पृथ्वी)',
    rulingPlanet: 'Mercury (बुध)',
    luckyNumber: 5,
    luckyColor: 'Forest Green / Olive',
    gemstone: 'Emerald (पन्ना)',
    currentTransitFocus: 'Analytical projects bring rewards. Keep an eye on digestive health and sleep schedule.',
    advice: 'Chant Vishnu Sahasranama or Budh Beej Mantra for sharp intellect.'
  },
  'Libra (तुला)': {
    name: 'Libra',
    hindiName: 'तुला राशि',
    element: 'Air (वायु)',
    rulingPlanet: 'Venus (शुक्र)',
    luckyNumber: 6,
    luckyColor: 'Pastel Blue / Soft Rose',
    gemstone: 'White Zircon / Opal',
    currentTransitFocus: 'Business partnerships flourishing. Good time for marriage proposals and legal relief.',
    advice: 'Maintain aesthetic balance in your room and respect colleagues on Fridays.'
  },
  'Scorpio (वृश्चिक)': {
    name: 'Scorpio',
    hindiName: 'वृश्चिक राशि',
    element: 'Water (जल)',
    rulingPlanet: 'Mars & Ketu',
    luckyNumber: 9,
    luckyColor: 'Deep Maroon / Rust',
    gemstone: 'Red Coral (मूंगा)',
    currentTransitFocus: 'Intense intuition and transformation. Secret adversaries will retreat.',
    advice: 'Chant Sundarkand on Saturdays and avoid hasty emotional outbursts.'
  },
  'Sagittarius (धनु)': {
    name: 'Sagittarius',
    hindiName: 'धनु राशि',
    element: 'Fire (अग्नि)',
    rulingPlanet: 'Jupiter (बृहस्पति)',
    luckyNumber: 3,
    luckyColor: 'Bright Yellow / Turmeric',
    gemstone: 'Yellow Sapphire (पुखराज)',
    currentTransitFocus: 'Spiritual inclination, long-distance travel, and mentorship blessings.',
    advice: 'Apply saffron/sandalwood tilak on forehead and respect gurus and teachers.'
  },
  'Capricorn (मकर)': {
    name: 'Capricorn',
    hindiName: 'मकर राशि',
    element: 'Earth (पृथ्वी)',
    rulingPlanet: 'Saturn (शनि)',
    luckyNumber: 8,
    luckyColor: 'Navy Blue / Charcoal',
    gemstone: 'Blue Sapphire (नीलम)',
    currentTransitFocus: 'Hard work brings enduring stability. Sade Sati exit brings financial liberation.',
    advice: 'Light a mustard oil lamp under Peepal tree on Saturday evenings.'
  },
  'Aquarius (कुंभ)': {
    name: 'Aquarius',
    hindiName: 'कुंभ राशि',
    element: 'Air (वायु)',
    rulingPlanet: 'Saturn & Rahu',
    luckyNumber: 8,
    luckyColor: 'Electric Blue / Cyan',
    gemstone: 'Blue Sapphire / Amethyst',
    currentTransitFocus: 'Social network expansion, philanthropic work, and breakthroughs in tech/creative ventures.',
    advice: 'Help needy laborers or sanitation workers on Saturdays.'
  },
  'Pisces (मीन)': {
    name: 'Pisces',
    hindiName: 'मीन राशि',
    element: 'Water (जल)',
    rulingPlanet: 'Jupiter (बृहस्पति)',
    luckyNumber: 3,
    luckyColor: 'Golden Yellow / Sea Green',
    gemstone: 'Yellow Sapphire (पुखराज)',
    currentTransitFocus: 'Spiritual upliftment and foreign income opportunities. Practice mindfulness.',
    advice: 'Feed soaked gram dal and jaggery to cows on Thursday mornings.'
  }
};

export const GHAZIABAD_PANCHANG_DATA = {
  city: 'Ghaziabad, Uttar Pradesh',
  coordinates: '28.6692° N, 77.4538° E',
  tithi: 'Shukla Paksha Trayodashi / Purnima',
  nakshatra: 'Rohini (रहिणी नक्षत्र)',
  yoga: 'Shobhana (शोभन योग)',
  karana: 'Kaulava (कौलव करण)',
  sunrise: '05:58 AM',
  sunset: '06:42 PM',
  moonrise: '05:15 PM',
  rahuKaal: '10:35 AM to 12:10 PM (Inauspicious for new beginnings)',
  abhijitMuhurat: '11:58 AM to 12:48 PM (Most Auspicious for all works)',
  choghadiya: {
    shubh: '12:15 PM – 01:45 PM',
    laabh: '07:30 AM – 09:00 AM',
    amrit: '09:00 AM – 10:30 AM'
  }
};

export const FAQS: FaqItem[] = [
  {
    id: '1',
    category: 'ghaziabad_chamber',
    question: 'Where is Acharya Devendra Shastri’s chamber located in Ghaziabad?',
    answer: 'Acharya ji has two convenient consultation centers in Ghaziabad: 1) Main Chamber at Aditya Mega City, Vaibhav Khand, Indirapuram (easily accessible from Vaishali, Vasundhara, and Noida via CISF road); 2) Branch Chamber at RDC, Raj Nagar (near Shaheed Sthal Metro Station & Hindon Elevated Road). In-person visits require prior appointment booking.'
  },
  {
    id: '2',
    category: 'booking',
    question: 'How do I book a consultation and what is the consultation fee?',
    answer: 'You can book directly through the booking form on this page or message us on WhatsApp (+91 98712 34567). Our consultation fees start from ₹650 for focused queries up to ₹1100 for a comprehensive full Kundli lifetime reading. We offer both In-Person Chamber sessions in Ghaziabad and High-Definition Video/Phone calls for clients worldwide.'
  },
  {
    id: '3',
    category: 'accuracy',
    question: 'What details are required for accurate Kundli and Horoscope reading?',
    answer: 'For a precise Vedic horoscope chart, we require: 1) Exact Date of Birth, 2) Exact Time of Birth (with AM/PM), and 3) Place of Birth (City/District). If you do not have the exact birth time, Acharya ji uses Prashna Kundli (Horary Astrology) and Palmistry/Face Reading principles during chamber visits to answer your questions with high accuracy.'
  },
  {
    id: '4',
    category: 'remedies',
    question: 'Are the astrological remedies expensive or superstitious?',
    answer: 'No. Acharya Devendra Shastri strictly practices pure, classical Parashari Vedic astrology. He does NOT promote fear-based rituals or expensive totke. 95% of his remedies consist of simple Vedic mantras, righteous karmic donations (daan), daily lifestyle adjustments, and authentic certified gemstones only when functionally supportive for your horoscope.'
  },
  {
    id: '5',
    category: 'ghaziabad_chamber',
    question: 'Do you offer on-site Vastu visits for apartments and villas in Ghaziabad?',
    answer: 'Yes! Acharya ji regularly visits residential high-rises and commercial properties across Indirapuram, Vaishali, Raj Nagar Extension, Crossings Republik, and Vasundhara. He specializes in Zero-Demolition Vastu, harmonizing directional energies using elemental corrections, mirrors, colors, and copper energy pyramids without breaking any walls.'
  },
  {
    id: '6',
    category: 'booking',
    question: 'Is my personal information and consultation confidential?',
    answer: '100% Confidential. All birth details, relationship queries, and personal discussions are kept strictly private between you and Acharya ji. We never share or sell any client data.'
  }
];

export const NEARBY_NCR_CITIES = [
  { name: 'Noida', distance: '12 km', popularLocality: 'Sector 62, Sector 18' },
  { name: 'East Delhi', distance: '14 km', popularLocality: 'Anand Vihar, Laxmi Nagar' },
  { name: 'Greater Noida West', distance: '15 km', popularLocality: 'Gaur City, Techzone 4' },
  { name: 'Meerut', distance: '42 km via Expressway', popularLocality: 'Modinagar, Partapur' },
  { name: 'Hapur', distance: '35 km', popularLocality: 'Pilkhuwa, Hapur City' }
];
