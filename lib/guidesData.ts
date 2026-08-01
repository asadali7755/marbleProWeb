// Content hub (/blog) — buyer-question guides. Server-safe, single source of truth.
// Each guide is written to answer a real search query and link to money pages.

export interface GuideSection { h2: string; body: string[]; }
export interface GuideFaq { q: string; a: string; }
export interface GuideLink { label: string; href: string; }

export interface Guide {
  slug: string;
  title: string;        // <title> tag
  h1: string;
  description: string;  // meta description
  keywords: string;
  date: string;         // ISO published/updated date
  readMins: number;
  category: string;
  excerpt: string;      // hub card text
  intro: string;
  image?: string;        // optional featured image path (e.g. /images/services/...)
  sections: GuideSection[];
  faqs: GuideFaq[];
  related: GuideLink[];
}

import generatedGuides from './generated-blog-posts.json'

const handWrittenGuides: Guide[] = [
  {
    slug: 'marble-polishing-cost-dubai',
    title: 'How Much Does Marble Polishing Cost in Dubai? (2026 Price Guide) | MarblePro',
    h1: 'How Much Does Marble Polishing Cost in Dubai?',
    description: 'A clear 2026 guide to marble polishing prices in Dubai & UAE — what affects the cost per square metre, what is included, and how to get an accurate fixed quote.',
    keywords: 'marble polishing cost dubai, marble polishing price uae, marble floor polishing cost, how much does marble polishing cost',
    date: '2026-06-13', readMins: 6, category: 'Pricing',
    excerpt: 'What marble polishing really costs in Dubai in 2026 — the factors that move the price, what should be included, and how to avoid surprise charges.',
    intro: 'The honest answer is: it depends. Marble polishing in Dubai is priced by the square metre, and the rate changes with the condition of your stone, the finish you want and the size of the job. This guide breaks down exactly what you are paying for so you can compare quotes fairly and avoid hidden charges.',
    sections: [
      { h2: 'What affects the price of marble polishing?', body: [
        'Five things move a marble polishing quote up or down: the <strong>area size</strong> (larger floors cost less per m²), the <strong>current condition</strong> (deep scratches, etching and lippage need more grinding), the <strong>type of stone</strong> (delicate stones like onyx and Calacatta need finer, slower work), the <strong>finish</strong> (a basic buff vs full diamond polishing with Italian crystallization), and <strong>access</strong> (furniture, occupied homes and high floors add time).',
        'This is why a trustworthy company always does a free on-site inspection before quoting — a fair price cannot be given by phone alone.',
      ]},
      { h2: 'Typical price ranges in Dubai (indicative)', body: [
        'As a rough guide for 2026, standard marble floor polishing in Dubai tends to fall in the lower-to-mid range per square metre, while full restoration (crack filling, lippage grinding, etch reversal) and premium stones sit higher. Crystallization and sealing are usually priced as an add-on or included in a premium package.',
        'Treat any fixed online price with caution — a 30 m² etched bathroom and a 300 m² villa floor in good condition are completely different jobs. The only accurate number is a written quote after inspection.',
      ]},
      { h2: 'What should be included in the price?', body: [
        'A complete marble polishing quote should cover: diamond grinding and honing through the full grit sequence, edge and corner work by hand, a dust-free wet process, furniture protection, a final crystallization/seal where quoted, and a written gloss guarantee. Ask whether sealing is included or extra, and whether there is any call-out or minimum charge.',
      ]},
      { h2: 'How to avoid overpaying', body: [
        'Get at least two on-site quotes, make sure they cover the same scope, and be wary of prices that look far below the market — they often skip crystallization or use wax coatings that wear off in weeks. A fixed-price written quote with a gloss guarantee protects you from surprise charges on the day.',
      ]},
    ],
    faqs: [
      { q: 'Is marble polishing cheaper than replacing the floor?', a: 'Far cheaper. Professional polishing and restoration typically costs a fraction of removing and re-laying marble, and properly restored marble holds its shine for years.' },
      { q: 'Do you charge for the quote?', a: 'No. MarblePro provides a free on-site inspection and a transparent fixed-price quote with no obligation.' },
      { q: 'Does the price change once you start?', a: 'No. Our written quote is fixed for the agreed scope — there are no hidden or surprise charges.' },
    ],
    related: [
      { label: 'Marble Polishing Dubai', href: '/services/marble-polishing-dubai' },
      { label: 'Marble Floor Restoration', href: '/services/marble-floor-restoration' },
      { label: 'Get a free quote', href: '/contact' },
    ],
  },
  {
    slug: 'how-to-remove-yellow-stains-from-marble',
    title: 'How to Remove Yellow Stains from Marble Floors (Dubai Guide) | MarblePro',
    h1: 'How to Remove Yellow Stains from Marble Floors',
    description: 'Why marble turns yellow and how professionals remove it. A practical Dubai guide to safe yellow-stain removal — and why bleach and acid make it worse.',
    keywords: 'how to remove yellow stains from marble, yellow marble floor dubai, marble discolouration, yellow stain removing uae',
    date: '2026-06-13', readMins: 5, category: 'Stain Removal',
    excerpt: 'Why marble yellows in UAE homes, why DIY bleach makes it worse, and how professional poultice treatment draws the stain out for good.',
    intro: 'Yellowing is one of the most common marble problems in UAE homes — and one of the most misunderstood. The stain usually sits deep inside the stone, so surface cleaning does nothing and harsh chemicals only set it deeper. Here is what actually causes it and how it is properly removed.',
    sections: [
      { h2: 'Why does marble turn yellow?', body: [
        'There are four common causes: <strong>iron oxidation</strong> (natural iron in the stone rusting over time), <strong>trapped moisture</strong> from below the tile, <strong>wax and sealer build-up</strong> that ages and yellows, and <strong>improper cleaning chemicals</strong> that react with the marble. Each cause needs a different treatment — which is why diagnosis comes first.',
      ]},
      { h2: 'Why bleach and acid make it worse', body: [
        'It is tempting to reach for bleach, vinegar or a strong acid cleaner. Don\'t. Acids etch and dull marble permanently, and bleach can drive organic stains deeper while leaving the yellowing untouched. Most "set-in" yellow stains we see were made harder to remove by DIY attempts.',
      ]},
      { h2: 'How professionals remove yellow stains', body: [
        'The professional method is a <strong>poultice</strong> — a paste matched to the stain type that is applied over the area and left for 24–48 hours. As it dries it draws the pigment up and out of the stone\'s pores, rather than bleaching it on the surface. Deep or old stains may need two cycles.',
        'Once the stain is lifted, the area is re-polished so the treated patch blends perfectly with the surrounding floor — you would never know it was there.',
      ]},
      { h2: 'Can every yellow stain be removed?', body: [
        'Most can be dramatically improved or fully removed. Iron-oxidation staining deep in the slab is the hardest case, but even then a colour-matched restoration can make it disappear visually. A quick inspection tells you exactly what is achievable before any work begins.',
      ]},
    ],
    faqs: [
      { q: 'Can I remove yellow marble stains myself?', a: 'Light surface marks sometimes lift with a pH-neutral stone cleaner, but deep yellowing needs a stain-specific poultice. Avoid bleach and acid — they usually make it permanent.' },
      { q: 'How long does professional stain removal take?', a: 'The poultice is left to draw the stain for 24–48 hours, then the area is re-polished. Stubborn stains may need a second cycle.' },
      { q: 'Will the treated spot match the rest of the floor?', a: 'Yes — we re-polish after treatment so the area blends seamlessly with the surrounding marble.' },
    ],
    related: [
      { label: 'Yellow Stain Removing', href: '/services/yellow-stain-removing' },
      { label: 'Marble Floor Restoration', href: '/services/marble-floor-restoration' },
      { label: 'Book an inspection', href: '/contact' },
    ],
  },
  {
    slug: 'marble-vs-granite-uae-homes',
    title: 'Marble vs Granite: Which Is Better for UAE Homes? | MarblePro',
    h1: 'Marble vs Granite: Which Is Better for UAE Homes?',
    description: 'Marble or granite for your Dubai villa? A clear comparison of looks, durability, maintenance and polishing for the UAE climate — and how to care for each.',
    keywords: 'marble vs granite, granite or marble dubai, best stone for uae homes, marble granite comparison',
    date: '2026-06-13', readMins: 6, category: 'Stone Guide',
    excerpt: 'Looks, durability, maintenance and cost — an honest marble vs granite comparison for UAE villas and kitchens, plus how each is polished.',
    intro: 'Marble and granite are the two most popular natural stones in UAE homes, and they behave very differently. One is prized for its luxurious veining, the other for its toughness. Here is how they compare on the things that actually matter — and what each needs to stay looking its best.',
    sections: [
      { h2: 'Looks', body: [
        'Marble offers soft, flowing veins and a warm, luxurious depth — it is the classic choice for villa floors, feature walls and bathrooms. Granite has a speckled, crystalline pattern and comes in darker, harder-wearing tones, which makes it popular for kitchen counters and high-traffic commercial floors.',
      ]},
      { h2: 'Durability & maintenance', body: [
        'Granite is harder and more resistant to scratches, heat and acids, so it copes well with kitchens and busy areas. Marble is softer and more porous — it can etch from citrus or harsh cleaners and dull faster under desert sand and foot traffic. Neither is "better" outright; it depends on where it goes and how it is maintained.',
        'In the UAE climate, both benefit from periodic professional polishing and a breathable sealer to handle heat, humidity and fine sand.',
      ]},
      { h2: 'Polishing differences', body: [
        'The two stones need different techniques. Marble responds to a diamond grit sequence finished with Italian crystallization for a deep mirror gloss. Granite is far harder and needs industrial-grade diamond discs — generic pads simply skid on it, which is why many cleaning companies avoid granite altogether.',
      ]},
      { h2: 'Which should you choose?', body: [
        'For a luxurious villa floor, bathroom or feature wall where looks lead, marble is hard to beat. For a busy kitchen counter or a commercial floor that must take punishment, granite is the safer pick. Many UAE homes use both — and we polish and maintain either to the same gloss standard.',
      ]},
    ],
    faqs: [
      { q: 'Is granite more durable than marble?', a: 'Yes — granite is harder and more resistant to scratches, heat and acids, which is why it suits kitchens and high-traffic areas. Marble is softer and needs a little more care.' },
      { q: 'Does marble scratch easily in UAE homes?', a: 'Marble is softer than granite and can dull or etch from sand, citrus and harsh cleaners. Periodic professional polishing keeps it looking new.' },
      { q: 'Can you polish both marble and granite?', a: 'Yes. We polish marble, granite, terrazzo, quartz and Corian — each with the correct technique for that material.' },
    ],
    related: [
      { label: 'Marble Polishing Dubai', href: '/services/marble-polishing-dubai' },
      { label: 'Granite Polishing', href: '/services/granite-polishing' },
      { label: 'Get a free quote', href: '/contact' },
    ],
  },
  {
    slug: 'how-often-polish-marble-floors-dubai',
    title: 'How Often Should You Polish Marble Floors in Dubai? | MarblePro',
    h1: 'How Often Should You Polish Marble Floors in Dubai?',
    description: 'How often marble floors need professional polishing in the UAE — for villas, apartments and commercial spaces — plus simple care tips to make the shine last.',
    keywords: 'how often polish marble floors, marble maintenance dubai, marble floor care uae, marble polishing frequency',
    date: '2026-06-13', readMins: 5, category: 'Maintenance',
    excerpt: 'How often villas, apartments and commercial floors actually need polishing in the UAE — and the daily habits that make the gloss last longer.',
    intro: 'There is no single answer — it depends on foot traffic, the type of stone and how the floor is cleaned day to day. But there are clear rules of thumb for UAE properties, where desert sand is the biggest enemy of a glossy marble floor.',
    sections: [
      { h2: 'Recommended polishing frequency', body: [
        'As a guide: <strong>residential villas</strong> usually need professional marble polishing every <strong>1–2 years</strong>; <strong>high-traffic commercial spaces</strong> such as hotel lobbies and showrooms benefit from a refresh every <strong>6 months</strong>; and <strong>low-traffic areas</strong> like guest rooms can go longer. Crystallized floors hold their gloss noticeably longer than waxed ones.',
      ]},
      { h2: 'Why UAE floors dull faster', body: [
        'Fine desert sand acts like sandpaper underfoot, micro-scratching marble every day. Add strong sunlight, hard water and the occasional harsh cleaner, and a floor that looked perfect a year ago can look tired. This is normal — and completely reversible with polishing.',
      ]},
      { h2: 'How to make the shine last longer', body: [
        'Place mats at entrances to catch sand, dust-mop regularly, wipe spills quickly (especially citrus, coffee and wine), and only ever use a <strong>pH-neutral stone cleaner</strong> — never vinegar, bleach or acidic products. A breathable impregnating sealer adds a layer of protection against stains and moisture.',
      ]},
      { h2: 'Signs it is time to re-polish', body: [
        'Book a polish when you notice loss of reflection, visible foot-traffic paths, dull or cloudy patches, or light scratches catching the light. Catching it early means a lighter, cheaper refresh rather than a full restoration later.',
      ]},
    ],
    faqs: [
      { q: 'How often should villa marble floors be polished?', a: 'Most UAE villas benefit from professional polishing every 1–2 years; high-traffic and commercial floors may need it every 6 months.' },
      { q: 'What is the best way to clean marble at home?', a: 'Dust-mop regularly and clean with a pH-neutral stone cleaner only. Avoid vinegar, bleach and acidic products, which etch and dull marble.' },
      { q: 'Does crystallization make the shine last longer?', a: 'Yes — Italian crystallization creates a hardened, chemically-bonded finish that holds its gloss far longer than wax coatings.' },
    ],
    related: [
      { label: 'Marble Polishing Dubai', href: '/services/marble-polishing-dubai' },
      { label: 'Crystallization & Sealing', href: '/services/crystallization-sealing' },
      { label: 'Get a free quote', href: '/contact' },
    ],
  },
  {
    slug: 'marble-polishing-vs-crystallization',
    title: 'Marble Polishing vs Crystallization: What\'s the Difference? | MarblePro',
    h1: 'Marble Polishing vs Crystallization: What\'s the Difference?',
    description: 'Marble polishing and crystallization are not the same thing. A clear explanation of how each works, when you need which, and why crystallization makes the shine last.',
    keywords: 'marble polishing vs crystallization, what is marble crystallization, marble crystallization dubai, difference polishing crystallization',
    date: '2026-06-13', readMins: 5, category: 'Process',
    excerpt: 'Polishing and crystallization are often confused but do different jobs. Here is what each one is, when you need it, and why the combination lasts longest.',
    intro: 'People often use "polishing" and "crystallization" to mean the same thing — but they are two separate steps. In short: polishing physically restores the surface, and crystallization chemically hardens and protects it. The best, longest-lasting results use both, in order.',
    sections: [
      { h2: 'What is marble polishing?', body: [
        'Polishing is a <strong>mechanical</strong> process. Diamond abrasives are worked across the marble through a sequence of grits (from coarse to very fine, typically 50 up to 3000), removing scratches, etch marks and dullness and gradually bringing the surface up to a smooth, reflective finish. It physically reshapes the top layer of the stone.',
      ]},
      { h2: 'What is crystallization?', body: [
        'Crystallization is a <strong>chemical</strong> process applied after polishing. A crystallizing compound reacts with the calcium in the marble under a buffing pad, forming a thin, hardened, highly reflective layer that is chemically bonded into the stone — not sitting on top like a wax or coating. This is what gives that deep, mirror-like gloss and makes the finish far more durable.',
      ]},
      { h2: 'Polishing vs crystallization — the key difference', body: [
        'Polishing <em>restores</em> the marble; crystallization <em>protects and intensifies</em> it. Polishing alone will look great but dull faster under foot traffic. Crystallization on un-restored marble cannot fix scratches or etching. That is why a quality job does both: grind and polish first, then crystallize and seal.',
      ]},
      { h2: 'Why not just use wax?', body: [
        'Cheap wax or acrylic coatings can fake a shine for a few weeks, then wear off in patches and trap dirt. Genuine Italian crystallization is a chemical bond, not a film — it is slip-resistant, holds its gloss for years, and does not yellow. If a quote is unusually cheap, ask whether they are crystallizing or just waxing.',
      ]},
    ],
    faqs: [
      { q: 'Do I need both polishing and crystallization?', a: 'For the best, longest-lasting result, yes. Polishing restores the surface; crystallization hardens and protects it. Crystallization cannot fix scratches, and polishing alone dulls faster.' },
      { q: 'How long does crystallization last?', a: 'Professionally crystallized marble holds its gloss for years with normal care — far longer than wax coatings, which wear off in weeks.' },
      { q: 'Is crystallization slippery?', a: 'No — done correctly it is slip-resistant underfoot despite the mirror finish.' },
    ],
    related: [
      { label: 'Crystallization & Sealing', href: '/services/crystallization-sealing' },
      { label: 'Marble Polishing Dubai', href: '/services/marble-polishing-dubai' },
      { label: 'Get a free quote', href: '/contact' },
    ],
  },
  {
    slug: 'how-to-care-for-marble-floors-uae',
    title: 'How to Care for Marble Floors in the UAE Climate | MarblePro',
    h1: 'How to Care for Marble Floors in the UAE Climate',
    description: 'Practical marble floor care for Dubai and the UAE — the right cleaner, what to avoid, dealing with sand, sun and hard water, and a simple maintenance routine.',
    keywords: 'marble floor care uae, how to clean marble dubai, marble maintenance, ph neutral cleaner marble',
    date: '2026-06-13', readMins: 6, category: 'Maintenance',
    excerpt: 'Sand, sun and hard water are tough on marble. A simple, UAE-specific routine to keep your floors glossy and avoid the mistakes that dull or etch them.',
    intro: 'Marble is a stunning but sensitive stone, and the UAE climate is demanding — fine desert sand, strong sun and hard water all work against it. The good news: a simple daily-and-weekly routine keeps marble looking new and dramatically extends the time between professional polishes.',
    sections: [
      { h2: 'The single most important rule', body: [
        'Only ever clean marble with a <strong>pH-neutral stone cleaner</strong>. Never use vinegar, lemon, bleach or general acidic/abrasive cleaners — they etch the surface and leave permanent dull spots. This one habit prevents most of the marble damage we are called to repair.',
      ]},
      { h2: 'Deal with sand — your floor\'s biggest enemy', body: [
        'In the UAE, fine sand is constantly tracked indoors and acts like sandpaper underfoot, micro-scratching marble every day. Place quality mats at every entrance, dust-mop daily with a soft microfibre mop, and encourage a shoes-off habit where practical.',
      ]},
      { h2: 'Spills, sun and hard water', body: [
        'Wipe spills immediately — especially coffee, wine, citrus and oils, which stain and etch fast. In sunny rooms, rotate rugs and furniture occasionally so the floor ages evenly. For hard-water marks in bathrooms, use a stone-safe cleaner and dry surfaces after use rather than letting deposits build up.',
      ]},
      { h2: 'A simple maintenance routine', body: [
        '<strong>Daily:</strong> dust-mop and wipe spills. <strong>Weekly:</strong> damp-mop with a pH-neutral cleaner. <strong>Yearly (or 6 months for busy areas):</strong> professional polish and re-seal. A breathable impregnating sealer adds an extra layer of protection against stains and moisture between visits.',
      ]},
    ],
    faqs: [
      { q: 'What is the best cleaner for marble floors?', a: 'A pH-neutral stone cleaner only. Avoid vinegar, lemon, bleach and abrasive or acidic products — they etch and dull marble permanently.' },
      { q: 'How do I protect marble from sand scratches?', a: 'Use entrance mats, dust-mop daily with microfibre, and keep grit off the floor. Periodic professional polishing reverses the fine scratching sand causes.' },
      { q: 'Should marble floors be sealed?', a: 'Yes — a breathable impregnating sealer helps block stains and moisture, especially useful in the UAE climate. Re-seal during your regular polishing visit.' },
    ],
    related: [
      { label: 'Marble Polishing Dubai', href: '/services/marble-polishing-dubai' },
      { label: 'Crystallization & Sealing', href: '/services/crystallization-sealing' },
      { label: 'Get a free quote', href: '/contact' },
    ],
  },
  {
    slug: 'travertine-vs-marble',
    title: 'Travertine vs Marble: Care & Polishing Differences | MarblePro',
    h1: 'Travertine vs Marble: What\'s the Difference?',
    description: 'Travertine and marble look similar but behave differently. How to tell them apart, how care and polishing differ, and what each needs in the UAE.',
    keywords: 'travertine vs marble, difference travertine marble, travertine polishing dubai, is travertine marble',
    date: '2026-06-13', readMins: 5, category: 'Stone Guide',
    excerpt: 'Travertine and marble are often confused. How to tell them apart, why travertine needs void-filling, and how polishing differs for each.',
    intro: 'Travertine and marble are both natural stones and can look similar, but they are not the same — and they need different care. The biggest practical difference is that travertine has natural holes that must be filled before polishing. Here is how to tell them apart and what each needs.',
    sections: [
      { h2: 'Are travertine and marble the same?', body: [
        'No. Both form from calcium carbonate, but travertine is a type of limestone formed around mineral springs, while marble is metamorphic (formed under heat and pressure). The easiest visual giveaway: travertine has small natural <strong>holes and voids</strong> and a warm, banded look; marble has flowing veins and a denser, glossier surface.',
      ]},
      { h2: 'Why travertine needs void-filling', body: [
        'Those natural holes are travertine\'s defining feature — and its weak point. Before polishing, every void should be filled with colour-matched epoxy; otherwise the surface pits, traps dirt and cannot reach a flat, high gloss. Many generic companies skip this step, which is why poorly-done travertine looks rough soon after.',
      ]},
      { h2: 'How polishing differs', body: [
        'Marble polishes to a deep mirror gloss relatively easily. Travertine needs the extra void-filling and lippage-grinding stage first, then a finer finish and a breathable sealer rated for UAE heat. Both finish beautifully — travertine just takes an extra, specialist step.',
      ]},
      { h2: 'Which is better for UAE homes?', body: [
        'Travertine suits warm, natural, Mediterranean-style interiors and outdoor areas like pool surrounds (with the right sealer). Marble suits a more luxurious, high-gloss look. Both perform well when properly maintained — the choice is mostly about the look you want.',
      ]},
    ],
    faqs: [
      { q: 'Is travertine a type of marble?', a: 'No. Travertine is a form of limestone with natural holes; marble is a denser metamorphic stone with veins. They need different polishing techniques.' },
      { q: 'Does travertine need to be filled before polishing?', a: 'Yes — its natural voids should be filled with colour-matched epoxy before polishing, or the surface pits and cannot reach a smooth, high gloss.' },
      { q: 'Can you polish travertine to a shine like marble?', a: 'Yes. With proper void-filling, grinding and sealing, travertine reaches a beautiful high-gloss finish.' },
    ],
    related: [
      { label: 'Travertine Polishing Dubai', href: '/services/travertine-polishing-dubai' },
      { label: 'Marble Polishing Dubai', href: '/services/marble-polishing-dubai' },
      { label: 'Get a free quote', href: '/contact' },
    ],
  },
  {
    slug: 'signs-marble-floor-needs-restoration',
    title: '7 Signs Your Marble Floor Needs Professional Restoration | MarblePro',
    h1: '7 Signs Your Marble Floor Needs Professional Restoration',
    description: 'How to know when your marble floor needs more than cleaning. Seven clear signs — dullness, etching, cracks, yellowing, lippage — and what restoration fixes.',
    keywords: 'marble restoration signs, when to restore marble floor, dull etched cracked marble, marble floor restoration dubai',
    date: '2026-06-13', readMins: 5, category: 'Restoration',
    excerpt: 'Not sure if your marble just needs cleaning or full restoration? Seven clear signs to look for — and why catching them early saves money.',
    intro: 'Marble does not fail overnight — it declines gradually, so many owners do not notice until it looks badly worn. Catching the signs early means a lighter, cheaper refresh instead of a full restoration later. Here are seven clear signals that your floor needs professional attention.',
    sections: [
      { h2: 'The 7 warning signs', body: [
        '<strong>1. Loss of reflection</strong> — the floor no longer mirrors light the way it used to. <strong>2. Traffic paths</strong> — visibly duller lanes where people walk most. <strong>3. Etch marks</strong> — dull, cloudy spots from spills like citrus, coffee or cleaners. <strong>4. Scratches</strong> that catch the light across the surface. <strong>5. Yellowing or discolouration</strong> spreading across tiles. <strong>6. Cracks or chips</strong> in the stone or along edges. <strong>7. Lippage</strong> — uneven tiles you can feel underfoot or that catch a heel.',
      ]},
      { h2: 'Cleaning vs restoration — what\'s the difference?', body: [
        'Cleaning removes dirt from the surface. Restoration fixes the stone itself — grinding out scratches and lippage, filling cracks, reversing etching and yellowing, then re-polishing and sealing. If your floor is clean but still looks dull, damaged or uneven, it needs restoration, not more cleaning.',
      ]},
      { h2: 'Why act early', body: [
        'Light dullness can be corrected with a quick polish. Left for years, the same floor may need full grinding, crack filling and stain treatment — more time and cost. A free inspection tells you exactly where your floor stands and the lightest fix that will work.',
      ]},
    ],
    faqs: [
      { q: 'How do I know if my marble needs restoration or just cleaning?', a: 'If the floor is clean but still looks dull, etched, scratched, yellowed, cracked or uneven, it needs restoration — cleaning only removes surface dirt, not damage to the stone.' },
      { q: 'Can badly damaged marble be saved?', a: 'Usually yes. Cracks, deep scratches, etching, yellowing and lippage can almost always be restored without replacing the floor.' },
      { q: 'Is restoration cheaper than replacing marble?', a: 'Far cheaper — restoration costs a fraction of removing and re-laying marble, and the result can look better than new.' },
    ],
    related: [
      { label: 'Marble Floor Restoration', href: '/services/marble-floor-restoration' },
      { label: 'Yellow Stain Removing', href: '/services/yellow-stain-removing' },
      { label: 'Book an inspection', href: '/contact' },
    ],
  },
];

export const GUIDES: Guide[] = [
  ...handWrittenGuides,
  ...(generatedGuides as Guide[]),
]

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
