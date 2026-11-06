// Shared emirate content — single source of truth for the /locations hub page
// AND the dedicated /locations/[slug] pages. Server-safe (no 'use client').

export interface Location {
  slug: string; name: string; ar: string; h1: string; eyebrow: string;
  intro: string; body: string[]; areas: string[];
  stats: { l: string; v: string }[];
}

export const LOCATIONS: Location[] = [
  { slug:'dubai', name:'Dubai', ar:'دبي', h1:'Marble Polishing Company in Dubai — Villas, Towers & Showrooms', eyebrow:'01 — Marble Polishing Company Dubai',
    intro:'MarblePro is a marble polishing company in Dubai, open 24/7 for villas, towers and showrooms. From Palm Jumeirah villas to DIFC offices, our diamond-grade Italian marble polishing and crystallization brings Dubai floors back to a deep, lasting shine.',
    body:['Every MarblePro service is available in Dubai: marble floor polishing, terrazzo and granite polishing, quartz and Corian countertop polishing, kitchen top polishing and sealing, yellow stain removal, and scratch and crack repair.','For urgent marble floor restoration in Dubai, we reply within 30 minutes and give you the earliest visit time on our schedule. We are available 24 hours, 7 days a week.'],
    areas:['Palm Jumeirah','Emirates Hills','Downtown','DIFC','Marina','JBR','Business Bay','Al Barsha','Jumeirah','Mirdif','Arabian Ranches','Damac Hills','Dubai Hills','JVC'],
    stats:[{l:'Response time',v:'Within 30 min'},{l:'Site inspection',v:'Free'},{l:'Visit time',v:'Agreed with you'},{l:'Top service',v:'Marble polishing'},{l:'Starting price',v:'From AED 70 / m²'}]},
  { slug:'abu-dhabi', name:'Abu Dhabi', ar:'أبوظبي', h1:'Marble Polishing Abu Dhabi — Capital-Grade Stone Care', eyebrow:'02 — Marble Polishing Abu Dhabi',
    intro:'MarblePro offers marble polishing in Abu Dhabi for villas, apartments, offices and showrooms. Whether you\'re in a Saadiyat villa, a Corniche tower or a Yas Island showroom, our team can reach you, and quartz polishing and stain protection are among our most requested jobs here.',
    body:['Every MarblePro service is available in Abu Dhabi: marble and floor polishing, marble floor restoration, terrazzo, granite and quartz polishing, Corian and kitchen top polishing, and yellow stain removal. When you contact us, we check our schedule and tell you when our team can come.','We also crystallize marble floors in Abu Dhabi villas, for new-build handovers and after renovation work. Free on-site inspection across the emirate, with overnight and weekend slots for commercial clients.'],
    areas:['Saadiyat Island','Yas Island','Al Reem Island','Khalifa City','Mussafah','Corniche','Al Raha Beach','Al Bateen','Al Mushrif'],
    stats:[{l:'Response time',v:'Within 30 min'},{l:'Site inspection',v:'Free'},{l:'Visit time',v:'Agreed with you'},{l:'Top service',v:'Quartz polishing'},{l:'Starting price',v:'From AED 70 / m²'}]},
  { slug:'sharjah', name:'Sharjah', ar:'الشارقة', h1:'Marble Polishing Sharjah — Marble & Heritage Terrazzo Specialist', eyebrow:'03 — Sharjah Stone Care',
    intro:'Our office is in Sharjah, so marble polishing in Sharjah is home ground for MarblePro. The emirate also has some of the UAE\'s most beautiful heritage terrazzo, and we bring out the stone chips hidden under decades of foot traffic.',
    body:['Every MarblePro service is available in Sharjah: marble and floor polishing, marble floor restoration, terrazzo, granite and quartz polishing, Corian and kitchen top polishing, and yellow stain removal.','Many older Sharjah buildings combine marble, terrazzo and granite in a single floor plan — we handle all three in one visit, with the right machinery for each stone type.'],
    areas:['Al Khan','Al Majaz','Al Nahda','Al Qasimia','Al Taawun','Muwaileh','Al Mamzar','University City','Al Yarmook'],
    stats:[{l:'Response time',v:'Within 30 min'},{l:'Site inspection',v:'Free'},{l:'Specialty',v:'Terrazzo restoration'},{l:'Top service',v:'Terrazzo polishing'},{l:'Starting price',v:'From AED 40 / m²'}]},
  { slug:'ajman', name:'Ajman', ar:'عجمان', h1:'Marble Polishing Ajman — Coastal Villas & Apartments', eyebrow:'04 — Ajman Coastal Service',
    intro:"Marble polishing in Ajman has one extra challenge: salt air and humidity dull stone in coastal villas and beachfront apartments faster than inland. Our polishing and crystallization in Ajman uses sealers suited to coastal homes.",
    body:['Every MarblePro service is available in Ajman: marble and floor polishing, marble floor restoration, terrazzo, granite and quartz polishing, Corian and kitchen top polishing, and yellow stain removal.','Free on-site inspection and quotation across all of Ajman. When you contact us, we give you a visit time based on our schedule.'],
    areas:['Al Nuaimiya','Al Rashidiya','Al Hamidiya','Al Rumailah','Al Jurf','Ajman Corniche','Helio','Al Zorah'],
    stats:[{l:'Response time',v:'Within 30 min'},{l:'Site inspection',v:'Free'},{l:'Specialty',v:'Coastal homes'},{l:'Top service',v:'Marble polishing'}]},
  { slug:'ras-al-khaimah', name:'Ras Al Khaimah', ar:'رأس الخيمة', h1:'Marble Polishing Ras Al Khaimah — Mountain & Coastal Villas', eyebrow:'05 — RAK Restoration',
    intro:'We offer marble polishing in Ras Al Khaimah for villas from the beachfront to the mountains. Our restoration work in RAK also handles the wear of holiday homes that sit empty for months at a time.',
    body:['Every MarblePro service is available in Ras Al Khaimah: marble and floor polishing, marble floor restoration, terrazzo, granite and quartz polishing, Corian and kitchen top polishing, and yellow stain removal. Our team works across the UAE, and we confirm your visit time when you contact us.','For hotels and resorts, we can plan overnight work so guests are not disturbed.'],
    areas:['Al Hamra Village','Mina Al Arab','Jebel Jais','Al Marjan Island','Khuzam','Al Nakheel','Al Mairid','Al Dhait'],
    stats:[{l:'Response time',v:'Within 30 min'},{l:'Site inspection',v:'Free'},{l:'Specialty',v:'Holiday-home revival'},{l:'Top service',v:'Marble restoration'}]},
  { slug:'umm-al-quwain', name:'Umm Al Quwain', ar:'أم القيوين', h1:'Marble Polishing Umm Al Quwain — Heritage Homes & Lagoon Villas', eyebrow:'06 — UAQ Service',
    intro:"Marble polishing in Umm Al Quwain covers a mix of heritage homes and modern lagoon-side villas, and older stone needs a gentle approach. We work in UAQ alongside Ajman and Ras Al Khaimah.",
    body:['Every MarblePro service is available in Umm Al Quwain: marble and floor polishing, marble floor restoration, terrazzo, granite and quartz polishing, Corian and kitchen top polishing, and yellow stain removal. Free site visit and quotation.','We agree your visit time when you contact us, based on our schedule.'],
    areas:['Old Town UAQ','Al Salamah','Al Aaminah','Al Maidan','UAQ Marina','Al Riqqah'],
    stats:[{l:'Response time',v:'Within 30 min'},{l:'Site inspection',v:'Free'},{l:'Specialty',v:'Heritage-safe technique'},{l:'Top service',v:'Marble polishing'}]},
  { slug:'fujairah', name:'Fujairah', ar:'الفجيرة', h1:'Marble Polishing Fujairah — East Coast Specialist', eyebrow:'07 — Fujairah Service',
    intro:"We offer marble polishing in Fujairah for east-coast hotels, resorts and mountain villas, where stone has to handle humidity, salt and sand. Our team works across the UAE and brings the full MarblePro range to Fujairah.",
    body:['Every MarblePro service is available in Fujairah: marble and floor polishing, marble floor restoration, terrazzo, granite and quartz polishing, Corian and kitchen top polishing, and yellow stain removal.','Hotels, large residences and smaller homes all get a visit time based on our schedule when they contact us.'],
    areas:['Dibba','Al Faseel','Al Ghurfa','Sakamkam','Madhab','Al Bidiyah','Khor Fakkan','Fujairah City'],
    stats:[{l:'Response time',v:'Within 30 min'},{l:'Site inspection',v:'Free'},{l:'Specialty',v:'Coastal homes'},{l:'Top service',v:'Marble polishing'}]},
  { slug:'dibba', name:'Dibba', ar:'دبا', h1:'Marble Polishing Dibba — East Coast, Two Emirates', eyebrow:'East Coast Town — Fujairah & Sharjah',
    intro:"We offer marble polishing in Dibba on both sides of the town, Dibba Al-Fujairah and Dibba Al-Hisn, which belong to Fujairah and Sharjah. Villas and holiday homes here face the same humidity, salt and sand as the rest of the east coast.",
    body:['Every MarblePro service is available in Dibba: marble and floor polishing, marble floor restoration, terrazzo, granite and quartz polishing, Corian and kitchen top polishing, and yellow stain removal.','We confirm your visit time when you contact us, based on our schedule.'],
    areas:['Dibba Al-Fujairah','Dibba Al-Hisn','Dibba Port','Al Aqah'],
    stats:[{l:'Response time',v:'Within 30 min'},{l:'Site inspection',v:'Free'},{l:'Specialty',v:'Coastal homes'},{l:'Top service',v:'Marble polishing'}]},
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

/** Banner alt text. The photos are examples of our work, not jobs in that city. */
export const locationBannerAlt = (slug: string, name: string) =>
  slug === 'dibba'
    ? 'Government building in Dibba, UAE, where MarblePro offers marble polishing'
    : `Marble polishing company in ${name}: an example of a polished marble floor by MarblePro`;
