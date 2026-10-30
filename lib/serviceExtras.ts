// Long-form copy for individual /services/[slug] pages. Kept apart from
// servicesData so the /services hub never repeats it. Server-safe.
// Only state what MarblePro can back up: no prices, rankings or invented numbers.

export interface ExtraLink { label: string; href: string; }

export interface ExtraSection {
  eyebrow: string;
  h2: string;
  body?: string[];
  items?: { t: string; d: string }[];
  numbered?: boolean;
  links?: ExtraLink[];
}

export const SERVICE_EXTRAS: Record<string, ExtraSection[]> = {
  'marble-polishing-dubai': [
    {
      eyebrow: 'What it is',
      h2: 'Marble polishing in Dubai: what the job involves',
      body: [
        'Marble polishing is not cleaning, and it is not a coat of wax. The shine on marble comes from the stone itself, so a polishing crew works the surface with diamond abrasives, moving from coarse to fine, until it reflects light evenly again. A wax or topical coating only sits on top and wears away with foot traffic. Polishing changes the surface of the stone.',
        'That matters in Dubai because fine desert sand gets carried indoors on shoes and works like sandpaper on the floor. Add hard water marks and everyday spills, and even good marble turns dull within a few years. Professional marble polishing services in Dubai bring back the original depth and colour of the stone without replacing a single tile.',
      ],
    },
    {
      eyebrow: 'Signs',
      h2: 'When does a marble floor need polishing?',
      items: [
        { t: 'Dull traffic paths', d: 'Hallways, doorways and the space around the sofa look matt while the corners still shine.' },
        { t: 'Fine scratches', d: 'A web of light scratches shows up when sunlight hits the floor at a low angle.' },
        { t: 'Etch marks', d: 'Pale, cloudy spots appear where lemon, vinegar or strong cleaners touched the stone.' },
        { t: 'Uneven tile edges', d: 'You can feel a lip between tiles. This is called lippage, and it needs grinding before polishing.' },
        { t: 'Stairs and lobbies losing shine', d: 'Marble stairs, walls and shared lobbies wear unevenly and can be polished too.' },
        { t: 'Cracks or yellowing', d: 'These need repair or stain treatment first, then polishing.' },
      ],
      links: [
        { label: '7 signs your floor needs restoration', href: '/blog/signs-marble-floor-needs-restoration' },
        { label: 'Marble floor restoration', href: '/services/marble-floor-restoration' },
        { label: 'Yellow stain removing', href: '/services/yellow-stain-removing' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How our marble floor polishing works, step by step',
      numbered: true,
      items: [
        { t: 'Free site visit', d: 'We check the stone type, the damage and the area, then give you a fixed-price quote for that scope.' },
        { t: 'Grinding where needed', d: 'Weighted diamond grinding flattens uneven tiles. Floors without lippage can skip this stage.' },
        { t: 'Honing', d: 'Medium-grit diamond pads remove scratches and traffic paths. We work wet, so no marble dust settles on your home.' },
        { t: 'Polishing', d: 'Finer pads, up to 3000 grit, bring out the clarity and colour of the stone.' },
        { t: 'Italian crystallization', d: 'A crystallization treatment hardens the surface and gives a mirror finish that stands up to foot traffic.' },
        { t: 'Sealing and walk-through', d: 'A breathable sealer helps protect against spills. We then check the finish with you before we leave.' },
      ],
    },
    {
      eyebrow: 'Finish',
      h2: 'Polished, honed or crystallized: which finish do you need?',
      items: [
        { t: 'High-gloss polish', d: 'A mirror-like finish for living rooms, lobbies and showrooms where the stone is the main feature.' },
        { t: 'Honed finish', d: 'A smooth satin look that hides scratches better and can suit busy kitchens and hallways.' },
        { t: 'Crystallization', d: 'Added after polishing to give a harder surface, which suits high-traffic floors and commercial spaces.' },
      ],
      links: [
        { label: 'Polishing vs crystallization explained', href: '/blog/marble-polishing-vs-crystallization' },
        { label: 'Crystallization and sealing', href: '/services/crystallization-sealing' },
      ],
    },
    {
      eyebrow: 'Stone types',
      h2: 'Marble and natural stone we polish',
      body: [
        'Every stone behaves differently, so we choose the pads and treatment after seeing yours. We work on Italian Carrara and Botticino, Crema Marfil, Calacatta, Emperador, onyx, travertine and locally sourced natural stone. Soft or veined marbles need a gentler sequence than a dense stone, and dark marbles show every mark, so the final grits matter more.',
      ],
      links: [
        { label: 'Crema Marfil polishing', href: '/services/crema-marfil-polishing-dubai' },
        { label: 'Calacatta polishing', href: '/services/calacatta-marble-polishing-dubai' },
        { label: 'Emperador polishing', href: '/services/emperador-marble-polishing-dubai' },
        { label: 'Onyx polishing', href: '/services/onyx-marble-polishing-dubai' },
        { label: 'Travertine polishing', href: '/services/travertine-polishing-dubai' },
      ],
    },
    {
      eyebrow: 'Pricing',
      h2: 'How marble polishing is priced in Dubai',
      body: [
        'Marble polishing in Dubai is priced by the square metre, and the rate depends on the job. The main factors are the area size, the condition of the stone, the finish you want and how much access the crew has. A small etched bathroom and a large villa floor in good condition are very different jobs, so we do not quote one flat rate for everything.',
        'The site visit is free and there is no obligation. You get a fixed price for the agreed scope, with no hidden charges. For a rough idea first, send a photo of the floor on WhatsApp.',
      ],
      links: [{ label: 'Full guide: marble polishing cost in Dubai', href: '/blog/marble-polishing-cost-dubai' }],
    },
    {
      eyebrow: 'Dubai coverage',
      h2: 'A marble polishing company for Dubai homes and businesses',
      body: [
        'We polish marble in villas, apartments, offices, hotels and showrooms across Dubai, including Palm Jumeirah, Emirates Hills, Downtown, DIFC, Dubai Marina, JBR, Business Bay, Al Barsha, Jumeirah, Mirdif, Arabian Ranches and Damac Hills. We are available 24 hours, 7 days a week, so offices and shops can book work outside business hours.',
      ],
      links: [{ label: 'Marble polishing company in Dubai', href: '/locations/dubai' }],
    },
    {
      eyebrow: 'Questions',
      h2: 'Marble polishing questions from Dubai customers',
      items: [
        { t: 'Can I stay at home during the work?', d: 'Yes. We use a dust-free wet process, so your home or office stays liveable while we work.' },
        { t: 'Will polishing remove every stain?', d: 'Surface marks usually come out with polishing. Deep stains and yellowing need their own treatment, which we confirm at the site visit.' },
        { t: 'Can you polish just one room?', d: 'Yes. We quote for the area you need. If it joins other rooms, we will show you how the finish will meet the rest of the floor.' },
        { t: 'Is the work guaranteed?', d: 'Yes. Our work comes with a 1-month written guarantee.' },
        { t: 'How do I keep the shine afterwards?', d: 'Use a pH-neutral cleaner, wipe up acidic spills quickly and put mats at the entrances to catch sand.' },
      ],
      links: [{ label: 'How to care for marble in the UAE climate', href: '/blog/how-to-care-for-marble-floors-uae' }],
    },
  ],
};
