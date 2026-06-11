// Shared emirate content — single source of truth for the /locations hub page
// AND the dedicated /locations/[slug] pages. Server-safe (no 'use client').

export interface Location {
  slug: string; name: string; ar: string; h1: string; eyebrow: string;
  intro: string; body: string[]; areas: string[];
  stats: { l: string; v: string }[];
}

export const LOCATIONS: Location[] = [
  { slug:'dubai', name:'Dubai', ar:'دبي', h1:'Best Marble Polishing Company in Dubai — Villas, Towers & Showrooms', eyebrow:'01 — Best Marble Polishing Company Dubai',
    intro:'MarblePro is the best marble polishing company in Dubai — where we deliver more marble polishing jobs than anywhere else in the UAE. From Palm Jumeirah villas to DIFC offices, our diamond-grade Italian marble polishing and crystallization Dubai is the trusted finish for the city\'s most discerning properties.',
    body:['We provide affordable marble floor polishing services UAE-wide, with our full range available in Dubai: terrazzo floor polishing, commercial granite polishing services Dubai, quartz polishing, Corian countertop polishing and scratch repair Dubai, kitchen top polishing and sealing, professional yellow stain removing, and full deep scratch removal and marble crack filling Dubai.','Emergency residential marble floor restoration services Dubai are available same-day. Most central locations are reached within 90 minutes. We work Mon–Sun, 8 am to 10 pm.'],
    areas:['Palm Jumeirah','Emirates Hills','Downtown','DIFC','Marina','JBR','Business Bay','Al Barsha','Jumeirah','Mirdif','Arabian Ranches','Damac Hills'],
    stats:[{l:'Response time',v:'Within 30 min'},{l:'Avg job size',v:'240 m² villa'},{l:'Crew count',v:'5 teams active'},{l:'Top service',v:'Marble polishing'}]},
  { slug:'abu-dhabi', name:'Abu Dhabi', ar:'أبوظبي', h1:'Marble Polishing Abu Dhabi — Capital-Grade Stone Care', eyebrow:'02 — Marble Polishing Abu Dhabi',
    intro:'Abu Dhabi homes and offices set the bar for the rest of the country — and quartz polishing and stain protection Abu Dhabi is one of our most-requested specialty services. Whether you\'re in a Saadiyat villa, a Corniche tower or a Yas Island showroom, our crew is on the road weekly.',
    body:['All MarblePro services are available in Abu Dhabi: marble polishing, marble floor restoration services, terrazzo polishing, granite polishing, quartz polishing, Corian countertop polishing, kitchen top polishing and yellow stain removing. We run weekly Abu Dhabi routes — bookings are typically scheduled within 48 hours.','We also offer dedicated villa marble floor crystallization services Abu Dhabi for new build hand-overs and post-renovation gloss restoration. Free on-site inspection across the emirate, with overnight and weekend slots for commercial clients.'],
    areas:['Saadiyat Island','Yas Island','Al Reem Island','Khalifa City','Mussafah','Corniche','Al Raha Beach','Al Bateen','Al Mushrif'],
    stats:[{l:'Response time',v:'Within 2 hours'},{l:'Avg job size',v:'180 m² floor'},{l:'Routing',v:'Weekly crew'},{l:'Top service',v:'Quartz polishing'}]},
  { slug:'sharjah', name:'Sharjah', ar:'الشارقة', h1:'Terrazzo Polishing & Restoration Contractors UAE — Sharjah Specialist', eyebrow:'03 — Sharjah Stone Care',
    intro:'Sharjah is home to some of the UAE\'s most beautiful heritage terrazzo and marble — and as specialist terrazzo polishing and restoration contractors UAE businesses trust, we bring out aggregate detail hidden under decades of foot traffic.',
    body:['As a multi-type floor polishing company UAE, we handle all stone types across Sharjah: marble polishing, terrazzo floor polishing, commercial granite polishing services, quartz polishing and stain protection, Corian countertop polishing and scratch repair, kitchen top polishing and sealing, and professional yellow stain removing for natural stone UAE.','Many older Sharjah buildings combine marble, terrazzo and granite in a single floor plan — we handle all three in one visit, with the right machinery for each stone type.'],
    areas:['Al Khan','Al Majaz','Al Nahda','Al Qasimia','Al Taawun','Muwaileh','Al Mamzar','University City','Al Yarmook'],
    stats:[{l:'Response time',v:'Within 1 hour'},{l:'Avg job size',v:'120 m² mixed'},{l:'Specialty',v:'Terrazzo restoration'},{l:'Top service',v:'Terrazzo polishing'}]},
  { slug:'ajman', name:'Ajman', ar:'عجمان', h1:'Floor Polishing & Restoration Ajman', eyebrow:'04 — Ajman Coastal Service',
    intro:"Ajman's coastal villas and beachfront apartments face a unique challenge — salt air and humidity dull stone faster than inland properties. Our marble polishing and crystallization service in Ajman uses sealants specifically rated for coastal conditions.",
    body:['All MarblePro services are available in Ajman: marble polishing, floor polishing, marble floor restoration services, countertop polishing, terrazzo polishing, granite polishing, quartz polishing, Corian countertop polishing and yellow stain removing. Coastal properties get our marine-grade impregnating sealer free of charge as a standard upgrade.','Free on-site inspection and quotation across all of Ajman. Booking lead time is typically 3–5 days as part of our scheduled northern emirates route.'],
    areas:['Al Nuaimiya','Al Rashidiya','Al Hamidiya','Al Rumailah','Al Jurf','Ajman Corniche','Helio','Al Zorah'],
    stats:[{l:'Response time',v:'Within 1 hour'},{l:'Avg job size',v:'150 m² coastal'},{l:'Specialty',v:'Marine-grade sealing'},{l:'Top service',v:'Floor polishing'}]},
  { slug:'ras-al-khaimah', name:'Ras Al Khaimah', ar:'رأس الخيمة', h1:'Marble Polishing Ras Al Khaimah — Mountain & Coastal Villas', eyebrow:'05 — RAK Restoration',
    intro:'Ras Al Khaimah villas span everything from beachfront to mountain retreats — and we service all of them. Our marble floor restoration services in RAK handle the unique wear patterns of holiday homes that sit empty for months at a time.',
    body:['Our complete service catalogue is available in Ras Al Khaimah: marble polishing, terrazzo polishing, granite polishing, quartz polishing, Corian countertop polishing, kitchen top polishing, yellow stain removing and full marble floor restoration services. We schedule weekly RAK routes so booking lead time is rarely more than a week.','Hotels and resorts across Jebel Jais and Al Marjan Island work with us for ongoing maintenance contracts — overnight scheduling, no guest disruption, predictable budget.'],
    areas:['Al Hamra Village','Mina Al Arab','Jebel Jais','Al Marjan Island','Khuzam','Al Nakheel','Al Mairid','Al Dhait'],
    stats:[{l:'Response time',v:'4–5 hours'},{l:'Avg job size',v:'200 m² villa'},{l:'Specialty',v:'Holiday-home revival'},{l:'Top service',v:'Marble restoration'}]},
  { slug:'umm-al-quwain', name:'Umm Al Quwain', ar:'أم القيوين', h1:'Marble & Floor Polishing Umm Al Quwain', eyebrow:'06 — UAQ Service',
    intro:"Umm Al Quwain's mix of heritage homes and modern lagoon-side villas needs gentle, traditional polishing technique. Our floor polishing service in UAQ is run from the same northern emirates route as Ajman and Ras Al Khaimah.",
    body:['All MarblePro services available in Umm Al Quwain: marble polishing, marble floor polishing, floor restoration services, terrazzo polishing, granite polishing, quartz polishing, Corian countertop polishing, kitchen top polishing and yellow stain removing. Free site visit and quotation, no minimum job size.','We combine UAQ visits with Ajman and RAK to keep travel costs out of your quote — that\'s why our pricing for the northern emirates matches our Dubai pricing for the same scope.'],
    areas:['Old Town UAQ','Al Salamah','Al Aaminah','Al Maidan','UAQ Marina','Al Riqqah'],
    stats:[{l:'Response time',v:'Same day'},{l:'Avg job size',v:'130 m²'},{l:'Specialty',v:'Heritage-safe technique'},{l:'Top service',v:'Floor polishing'}]},
  { slug:'fujairah', name:'Fujairah', ar:'الفجيرة', h1:'Marble Polishing Fujairah — East Coast Specialist', eyebrow:'07 — Fujairah Service',
    intro:"Fujairah's east-coast hotels, resorts and mountain villas need stone care that handles humidity, salt and sand. Our crew makes regular runs to Fujairah from our Dubai base to deliver the full MarblePro service range.",
    body:['Every MarblePro service is available in Fujairah: marble polishing, marble floor polishing, floor restoration services, terrazzo polishing, granite polishing, quartz polishing, Corian countertop polishing, kitchen top polishing and yellow stain removing. Resorts on the Indian Ocean side benefit from our coastal-grade impregnating sealer as standard.','Hotels and large residences typically book 10–14 days ahead. Smaller residential jobs can usually be combined into our regular Fujairah route within a week or two.'],
    areas:['Dibba','Al Faseel','Al Ghurfa','Sakamkam','Madhab','Al Bidiyah','Khor Fakkan','Fujairah City'],
    stats:[{l:'Response time',v:'Same day'},{l:'Avg job size',v:'300 m² resort'},{l:'Specialty',v:'Coastal-grade seal'},{l:'Top service',v:'Hotel maintenance'}]},
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
