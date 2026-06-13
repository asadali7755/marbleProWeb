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
  sections: GuideSection[];
  faqs: GuideFaq[];
  related: GuideLink[];
}

export const GUIDES: Guide[] = [
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
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
