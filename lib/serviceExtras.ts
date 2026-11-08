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
        { label: 'Marble cleaning', href: '/services/marble-cleaning-dubai' },
        { label: '7 signs your floor needs restoration', href: '/blog/signs-marble-floor-needs-restoration' },
        { label: 'Marble floor restoration', href: '/services/marble-floor-restoration' },
        { label: 'Yellow stain removal', href: '/services/yellow-stain-removing' },
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
        { label: 'Tile polishing', href: '/services/tile-polishing-dubai' },
        { label: 'Limestone polishing', href: '/services/limestone-polishing-dubai' },
        { label: 'Mosaic floor polishing', href: '/services/mosaic-floor-polishing-dubai' },
      ],
    },
    {
      eyebrow: 'Pricing',
      h2: 'How marble polishing is priced in Dubai',
      body: [
        'Marble polishing in Dubai is priced by area, in square metres or square feet, and the rate depends on the job. The main factors are the area size, the condition of the stone, the finish you want and how much access the crew has. A small etched bathroom and a large villa floor in good condition are very different jobs, so we do not quote one flat rate for everything. Prices start from AED 70 per square metre in Dubai and Abu Dhabi, and from AED 40 per square metre in Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain and Fujairah.',
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
      links: [
        { label: 'Marble polishing company in Dubai', href: '/locations/dubai' },
        { label: 'Floor polishing Dubai', href: '/services/floor-polishing-dubai' },
      ],
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
        { t: 'Can I polish marble myself with polishing powder or a rented machine?', d: 'Polishing powder or paste can lift light dullness on a small area, such as a table top. On a floor, a rented buffing machine without the right diamond pads often leaves swirl marks or an uneven shine, and it cannot remove scratches or etching. For a whole floor, professional marble polishing gives an even result.' },
      ],
      links: [{ label: 'How to care for marble in the UAE climate', href: '/blog/how-to-care-for-marble-floors-uae' }],
    },
  ],
  'marble-scratch-repair-dubai': [
    {
      eyebrow: 'What it is',
      h2: 'Marble repair in Dubai for scratches, cracks and chips',
      body: [
        'A dropped pan, a dragged sofa or a settling building can leave a mark that polishing alone will not remove. Marble repair deals with one problem area, or a few, then blends it back into the floor. It suits damage in one spot, while restoration covers the whole floor.',
        'Marble scratch removal starts with a look at the depth. Light scratches come out with fine diamond pads. Deeper ones need coarser grits first. Cracks and chips are filled with colour-matched epoxy, then levelled and polished so the repair follows the surface of the stone.',
      ],
    },
    {
      eyebrow: 'Damage we repair',
      h2: 'What marble damage can be repaired?',
      items: [
        { t: 'Light scratches', d: 'Fine lines from sand, shoes and pets, removed with fine diamond pads.' },
        { t: 'Deep scratches', d: 'Marks you can feel with a fingernail, cut back with coarser diamonds and then polished.' },
        { t: 'Hairline cracks', d: 'Filled with colour-matched epoxy so the line is much harder to see.' },
        { t: 'Chips and broken edges', d: 'Common at tile edges and stair nosing. Built up with filler, then shaped and polished.' },
        { t: 'Etch marks', d: 'Dull patches from lemon, vinegar or strong cleaners, removed from the surface and re-polished.' },
        { t: 'Countertop damage', d: 'Scratches and chips on marble tops can be repaired too.' },
      ],
      links: [
        { label: 'Marble countertop polishing', href: '/services/marble-countertop-polishing' },
        { label: 'Marble table polishing', href: '/services/marble-table-polishing-dubai' },
        { label: 'Marble floor restoration', href: '/services/marble-floor-restoration' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we repair marble',
      numbered: true,
      items: [
        { t: 'Send a photo', d: 'A clear photo on WhatsApp helps us give you a first opinion.' },
        { t: 'Free site visit', d: 'We check the depth of the damage, the stone and the colour match.' },
        { t: 'Fill and cure', d: 'Cracks and chips are filled, then left to cure before we touch the surface.' },
        { t: 'Level and blend', d: 'Diamond pads bring the repair flush with the stone around it.' },
        { t: 'Polish to match', d: 'We finish the area to match the rest of the floor, then check it with you.' },
      ],
    },
    {
      eyebrow: 'Be honest',
      h2: 'What marble repair can and cannot do',
      body: [
        'Repairs make damage far less visible, but a large crack through heavy veining may still show up close. If an area has been polished on its own, the shine can also look different from a floor that has aged. We show you what to expect at the site visit, and may suggest polishing a wider area so the finish matches.',
        'A tile that is loose or broken right through may not be worth repairing. In that case, we will tell you before you pay for anything.',
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Marble repair questions from Dubai customers',
      items: [
        { t: 'Can you repair one scratch only?', d: 'Yes. We can work on a small area, and we will explain how it will blend with the rest.' },
        { t: 'Do DIY scratch remover kits work?', d: 'They may help with very light marks. Acidic products and rough pads can leave the area looking worse.' },
        { t: 'How much does marble repair cost?', d: 'It depends on the damage and the area. The site visit is free, and you get a fixed price.' },
        { t: 'Is the repair guaranteed?', d: 'Yes. Our work comes with a 1-month written guarantee.' },
      ],
    },
  ],
  'marble-grinding-dubai': [
    {
      eyebrow: 'What it is',
      h2: 'Marble grinding in Dubai: when polishing is not enough',
      body: [
        'Grinding is the heavy first stage of floor work. A weighted machine with coarse diamonds takes the surface down so uneven tiles, deep scratches and worn patches become one flat plane. Honing then smooths that surface, and polishing brings up the shine.',
        'Not every floor needs it. If the tiles are level and the marks are light, we start at a finer grit and save you time and cost. Grinding removes stone, so we only do what the floor needs.',
      ],
    },
    {
      eyebrow: 'When it is needed',
      h2: 'Does your floor need marble grinding?',
      items: [
        { t: 'Lippage', d: 'Tile edges catch your foot or your fingernail.' },
        { t: 'Raised or dirty joints', d: 'The joints sit proud of the tiles or look dark and uneven.' },
        { t: 'Deep scratches', d: 'Marks too deep for honing pads to reach.' },
        { t: 'Patchy old polish', d: 'Years of wax or poor polishing have left an uneven surface.' },
      ],
    },
    {
      eyebrow: 'Stages',
      h2: 'Grinding, honing and polishing: what is the difference?',
      numbered: true,
      items: [
        { t: 'Grinding', d: 'Coarse diamonds flatten the floor and remove the deepest damage.' },
        { t: 'Honing', d: 'Medium grits remove grinding marks and leave a smooth, satin surface.' },
        { t: 'Polishing', d: 'Fine grits, up to 3000, bring back the reflection and colour.' },
        { t: 'Crystallization and sealing', d: 'The last stage hardens and protects the finished surface.' },
      ],
      links: [
        { label: 'Marble polishing Dubai', href: '/services/marble-polishing-dubai' },
        { label: 'Crystallization and sealing', href: '/services/crystallization-sealing' },
      ],
    },
    {
      eyebrow: 'Dust and disruption',
      h2: 'Will grinding fill my home with dust?',
      body: [
        'Dry grinding spreads fine dust through a home, which is why we work wet. Water carries the stone dust into a slurry that the crew removes as they go, so your rooms stay liveable. Grinding machines do make noise, so tell us about your building hours and we will plan around them.',
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Marble grinding questions',
      items: [
        { t: 'Do you grind granite and terrazzo too?', d: 'Yes. Granite and terrazzo floors can also be ground and polished, using machinery suited to each.' },
        { t: 'Is grinding safe for thin marble?', d: 'We check the condition of the floor first, and only grind as much as it needs.' },
        { t: 'How is it priced?', d: 'By area and condition, from AED 70 per square metre in Dubai and Abu Dhabi and AED 40 in the other emirates. The site visit is free, and you receive a fixed price.' },
      ],
      links: [
        { label: 'Granite polishing', href: '/services/granite-polishing' },
        { label: 'Terrazzo polishing', href: '/services/terrazzo-polishing-dubai' },
      ],
    },
  ],
  'commercial-floor-polishing-dubai': [
    {
      eyebrow: 'What it is',
      h2: 'Commercial floor polishing for Dubai businesses',
      body: [
        'Lobbies, corridors and shop floors take far more traffic than a home, and visitors notice dull stone straight away. Commercial floor polishing restores marble, granite and terrazzo across larger areas, with the work planned around your business.',
        'We work in hotels, offices, retail spaces and residential towers. For commercial clients we can schedule overnight and weekend work, and our wet process avoids dust in occupied buildings.',
      ],
    },
    {
      eyebrow: 'Where we work',
      h2: 'Commercial spaces we polish',
      items: [
        { t: 'Hotels', d: 'Lobbies, corridors and shared areas, planned around guests and operations.' },
        { t: 'Offices and towers', d: 'Entrance lobbies, lift areas and common floors.' },
        { t: 'Retail and showrooms', d: 'Shop floors where the stone is part of the first impression.' },
        { t: 'Villa communities', d: 'Shared entrances and clubhouses with natural stone.' },
      ],
    },
    {
      eyebrow: 'How we plan it',
      h2: 'How we keep your business running',
      numbered: true,
      items: [
        { t: 'Site survey', d: 'We visit for free, measure the area and check the stone and its condition.' },
        { t: 'Work plan', d: 'We agree the sections, hours and access with your facilities team.' },
        { t: 'Night or weekend work', d: 'Crews can work outside your busy hours, section by section.' },
        { t: 'Handover', d: 'We review the finished floor with your team before we leave.' },
      ],
    },
    {
      eyebrow: 'Maintenance',
      h2: 'Keeping commercial floors in good condition',
      body: [
        'Busy floors lose their shine faster than homes. High-traffic properties such as hotels and offices may need maintenance every 6 months or so, depending on the traffic and the stone. Entrance mats, a pH-neutral cleaner and quick spill clean-up all help a polished floor last longer.',
      ],
      links: [
        { label: 'Granite polishing', href: '/services/granite-polishing' },
        { label: 'Terrazzo polishing', href: '/services/terrazzo-polishing-dubai' },
        { label: 'Floor polishing Dubai', href: '/services/floor-polishing-dubai' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Commercial floor polishing questions',
      items: [
        { t: 'Can you work at night?', d: 'Yes. Overnight and weekend slots are available for commercial clients.' },
        { t: 'Do you give fixed quotes for large areas?', d: 'Yes. We survey the site first, then give a fixed price for the agreed scope.' },
        { t: 'Do you cover other emirates?', d: 'Yes. We work across all 7 UAE emirates.' },
      ],
    },
  ],
  'crystallization-sealing': [
    {
      eyebrow: 'What it is',
      h2: 'Marble crystallization in Dubai, explained',
      body: [
        'Crystallization is a treatment applied to polished marble. A crystallizing product is worked into the surface with a machine, and it reacts with the stone to create a harder, more reflective top layer. It differs from a wax or acrylic coating, which sits on the surface and wears away.',
        'Sealing does a different job. An impregnating sealer soaks into the stone and helps stop liquids from getting in, while the stone can still breathe. Many floors in Dubai benefit from both, one for the finish and one for protection.',
      ],
    },
    {
      eyebrow: 'Which one',
      h2: 'Crystallization or sealing: what does your stone need?',
      items: [
        { t: 'Crystallization', d: 'Best for marble and other calcium-based stone that needs a harder, high-gloss surface.' },
        { t: 'Impregnating sealer', d: 'Best where spills are the main risk, such as kitchens, bathrooms and dining areas.' },
        { t: 'Both', d: 'A common choice for busy floors in villas, hotels and lobbies.' },
        { t: 'Neither yet', d: 'If the stone is dull or scratched, it needs polishing first. Sealing over damage only locks it in.' },
      ],
      links: [
        { label: 'Polishing vs crystallization guide', href: '/blog/marble-polishing-vs-crystallization' },
        { label: 'Marble polishing Dubai', href: '/services/marble-polishing-dubai' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we crystallize and seal a floor',
      numbered: true,
      items: [
        { t: 'Inspect', d: 'At a free site visit, we check the stone and any old coatings.' },
        { t: 'Clean and prepare', d: 'Old wax and residue must come off, or the treatment will not bond.' },
        { t: 'Polish if needed', d: 'Scratches and dull areas are removed first.' },
        { t: 'Crystallize', d: 'The product is worked in by machine for an even, reflective finish.' },
        { t: 'Seal', d: 'A breathable impregnating sealer is added where the stone needs it.' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Crystallization and sealing questions',
      items: [
        { t: 'Do marble sealers stop all stains?', d: 'No sealer makes stone stain-proof. Sealers slow liquids down, so spills should still be wiped up quickly.' },
        { t: 'Do you sell sealers?', d: 'We apply sealers as a service. Our team chooses the product to suit your stone.' },
        { t: 'Does it work on granite?', d: 'Granite is usually sealed. We check your stone first and recommend the right treatment.' },
        { t: 'Do you offer this in Abu Dhabi?', d: 'Yes. We work across Abu Dhabi and the other emirates.' },
      ],
      links: [{ label: 'Marble polishing in Abu Dhabi', href: '/locations/abu-dhabi' }],
    },
  ],
  'granite-polishing': [
    {
      eyebrow: 'What it is',
      h2: 'Granite polishing in Dubai: why it takes different tools',
      body: [
        'Granite is much harder than marble, so the light pads used on softer stone can skid across it. Granite floor polishing needs heavier machines and industrial diamond discs. The reward is a tough, deep shine that suits entrances, stairs, kitchens and busy lobbies.',
        'Granite also fails differently. It rarely etches like marble, but its shine can fade under heavy traffic, and pits and uneven tiles can trap dirt. Dark granite shows dullness quickly, so the final grits matter.',
      ],
    },
    {
      eyebrow: 'Where we polish',
      h2: 'Granite surfaces we polish',
      items: [
        { t: 'Floors', d: 'Villas, hotel lobbies, shops and offices.' },
        { t: 'Stairs and entrances', d: 'Treads and landings that take the most wear.' },
        { t: 'Kitchen tops', d: 'Worktops polished in place around your fitted cabinets.' },
        { t: 'Outdoor granite', d: 'Sealed against moisture after polishing.' },
      ],
      links: [
        { label: 'Kitchen top polishing', href: '/services/kitchen-top-polishing' },
        { label: 'Commercial floor polishing', href: '/services/commercial-floor-polishing-dubai' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we polish granite floors',
      numbered: true,
      items: [
        { t: 'Inspect', d: 'A free site visit confirms the stone, the finish and any uneven tiles.' },
        { t: 'Level', d: 'Heavy machines grind down lippage where needed.' },
        { t: 'Polish', d: 'Industrial diamond discs work through the grits to bring up the shine.' },
        { t: 'Seal', d: 'A sealer helps protect against moisture and stains.' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Granite polishing questions',
      items: [
        { t: 'Is polished granite slippery?', d: 'Any polished stone can be slippery when wet. Tell us where the floor is, and we will advise on the right finish.' },
        { t: 'Does granite need sealing?', d: 'Many granites do, especially lighter stones in kitchens and wet areas. We check yours first.' },
        { t: 'How is the price worked out?', d: 'By area, condition and finish. The site visit is free, and you get a fixed quote.' },
      ],
    },
  ],
  'terrazzo-polishing-dubai': [
    {
      eyebrow: 'What it is',
      h2: 'Terrazzo floor polishing in Dubai: what to expect',
      body: [
        'Terrazzo is made of marble, glass or stone chips set in a cement or resin base. Because it mixes hard chips with a softer binder, the polish has to cut both evenly. Done well, grinding and polishing reveal the chips and give the floor a deep, even sheen.',
        'Old terrazzo in Dubai and Sharjah buildings often looks darker than it really is, because the surface is worn or hidden under old coatings. Much of that colour can come back once the top layer is removed.',
      ],
    },
    {
      eyebrow: 'Common problems',
      h2: 'Problems we fix on terrazzo floors',
      items: [
        { t: 'Dull or grey surface', d: 'Years of wear and old coatings hide the colour of the chips.' },
        { t: 'Cracks', d: 'Levelled and filled before polishing.' },
        { t: 'Yellowed binder', d: 'Sealing the cement base helps limit future yellowing.' },
        { t: 'Uneven wear', d: 'Traffic paths are ground back to match the rest of the floor.' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we polish terrazzo',
      numbered: true,
      items: [
        { t: 'Assess the mix', d: 'We check the original floor before removing anything.' },
        { t: 'Grind', d: 'Diamond tools level the surface and expose the chips.' },
        { t: 'Fill', d: 'Cracks and small holes are filled.' },
        { t: 'Polish', d: 'Fine diamond pads bring up the sheen.' },
        { t: 'Seal', d: 'The cement base is sealed to reduce staining and yellowing.' },
      ],
      links: [
        { label: 'Terrazzo work in Sharjah', href: '/locations/sharjah' },
        { label: 'Commercial floor polishing', href: '/services/commercial-floor-polishing-dubai' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Terrazzo polishing questions',
      items: [
        { t: 'Can old terrazzo be saved?', d: 'Often, yes. Worn terrazzo usually responds well to grinding and polishing, and we confirm this on site.' },
        { t: 'What does terrazzo polishing cost?', d: 'It depends on the area, the condition and the finish. The site visit is free, and the quote is fixed.' },
        { t: 'Do you polish terrazzo in large buildings?', d: 'Yes. We use commercial-scale machinery for large lobbies and halls.' },
      ],
    },
  ],
  'corian-countertop-polishing': [
    {
      eyebrow: 'What it is',
      h2: 'Corian repair and polishing in Dubai',
      body: [
        'Corian is a solid surface, not a natural stone. The colour runs through the material, so scratches can be sanded out instead of filled over. That makes Corian repair a different job from marble polishing, and it is done mainly by hand.',
        'Kitchen tops, vanities and reception desks all pick up fine scratches, heat marks and dull patches. Most can be sanded out, blended and finished to match the surface around them.',
      ],
    },
    {
      eyebrow: 'What we fix',
      h2: 'Corian damage we repair',
      items: [
        { t: 'Scratches', d: 'Sanded out by hand through finer and finer grits.' },
        { t: 'Burn marks', d: 'Hot pan marks are sanded back and refinished.' },
        { t: 'Chips and small holes', d: 'Repaired, then blended into the surface.' },
        { t: 'Lifted or yellow seams', d: 'Re-bonded and re-polished.' },
        { t: 'Sink damage', d: 'Burns, chips and hairline cracks on integrated sinks.' },
        { t: 'Dull finish', d: 'Refinished to matte, satin or gloss.' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How Corian polishing works',
      numbered: true,
      items: [
        { t: 'Send a photo', d: 'A photo on WhatsApp helps us give a first opinion.' },
        { t: 'Sand', d: 'We work through fine grits by hand to remove the damage.' },
        { t: 'Repair', d: 'Seams, chips and cracks are fixed.' },
        { t: 'Finish', d: 'You choose matte, satin or gloss.' },
      ],
      links: [
        { label: 'Kitchen top polishing', href: '/services/kitchen-top-polishing' },
        { label: 'Quartz polishing', href: '/services/quartz-polishing' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Corian repair questions',
      items: [
        { t: 'Can Corian be polished at home?', d: 'Yes. Most work is done on site, without removing the countertop.' },
        { t: 'Which finish hides scratches best?', d: 'Matte and satin finishes usually hide fine scratches better than high gloss.' },
        { t: 'Is it Corian or quartz?', d: 'They look similar but need different work. We can confirm from a photo or at a free site visit.' },
      ],
    },
  ],
  'yellow-stain-removing': [
    {
      eyebrow: 'What it is',
      h2: 'Yellow stain removal: why stains need the right treatment',
      body: [
        'Marble is porous, so liquids can sink below the surface. That is why scrubbing often fails, and why bleach or acid can make things worse. Stain removal starts by working out what caused the mark, then using a treatment that draws it back out of the stone.',
        'Yellowing is the most common complaint on white marble. It may come from rust, oil, organic seepage, old wax or the wrong cleaning products, and each cause needs a different approach.',
      ],
    },
    {
      eyebrow: 'Stain types',
      h2: 'Common marble stains and their causes',
      items: [
        { t: 'Rust stains', d: 'Orange or brown marks from metal legs, cans or iron in the stone.' },
        { t: 'Oil stains', d: 'Dark patches, common in kitchens and dining areas.' },
        { t: 'Organic stains', d: 'Tea, coffee, leaves and pet marks, often brown or yellow.' },
        { t: 'Old wax build-up', d: 'A yellow film that builds up under foot traffic.' },
        { t: 'Water marks', d: 'Dull rings and patches from hard water.' },
        { t: 'Etching', d: 'A surface mark, not a stain. It needs polishing instead of a poultice.' },
      ],
      links: [
        { label: 'How to remove yellow stains', href: '/blog/how-to-remove-yellow-stains-from-marble' },
        { label: 'Marble scratch and crack repair', href: '/services/marble-scratch-repair-dubai' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we remove stains from marble',
      numbered: true,
      items: [
        { t: 'Find the cause', d: 'We check the stain and the stone at a free site visit.' },
        { t: 'Apply a poultice', d: 'A stain-specific treatment draws the mark out of the pores over 24 to 48 hours.' },
        { t: 'Repeat if needed', d: 'Older stains may need more than one round.' },
        { t: 'Re-polish', d: 'The area is polished to blend with the floor.' },
        { t: 'Seal', d: 'A sealer helps slow down future staining.' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Stain removal questions',
      items: [
        { t: 'Can every stain be removed?', d: 'Not always. Very old or deep stains may only fade, and we tell you what to expect first.' },
        { t: 'Should I use bleach on marble?', d: 'No. Bleach and acids can damage the surface or set the stain deeper.' },
        { t: 'Do you remove stains from countertops?', d: 'Yes, including marble kitchen and bathroom tops.' },
      ],
      links: [{ label: 'Marble countertop polishing', href: '/services/marble-countertop-polishing' }],
    },
  ],
  'location-dubai': [
    {
      eyebrow: 'Why it matters',
      h2: 'Choosing a marble polishing company in Dubai',
      body: [
        'Dubai has many companies offering marble polishing, and the results can vary a lot. A cheap coating can look good for a few weeks and then fade, while rough work can leave swirl marks on expensive stone. A good marble polishing company should inspect your floor first, explain the process and put the price in writing.',
        'MarblePro is a DED-licensed marble polishing company. The site visit is free, the quote is fixed for the agreed scope and our work comes with a 1-month written guarantee. We use diamond pads up to 3000 grit, Italian crystallization and a dust-free wet process.',
      ],
    },
    {
      eyebrow: 'Dubai properties',
      h2: 'Marble polishing for every type of Dubai property',
      items: [
        { t: 'Villas', d: 'Living rooms, stairs and entrances in communities such as Palm Jumeirah, Emirates Hills and Arabian Ranches.' },
        { t: 'Apartments', d: 'Towers in Downtown, Dubai Marina, JBR and Business Bay. We plan around your building hours.' },
        { t: 'Offices and showrooms', d: 'DIFC and Business Bay spaces, with overnight or weekend work available.' },
      ],
      links: [
        { label: 'Commercial floor polishing', href: '/services/commercial-floor-polishing-dubai' },
        { label: 'Floor polishing Dubai', href: '/services/floor-polishing-dubai' },
      ],
    },
    {
      eyebrow: 'How to book',
      h2: 'How to book marble polishing in Dubai',
      numbered: true,
      items: [
        { t: 'Call or WhatsApp', d: 'Send a photo of the floor and tell us your area.' },
        { t: 'Free site visit', d: 'We check the stone and measure the area.' },
        { t: 'Fixed quote', d: 'You get a clear price with no obligation.' },
        { t: 'Polish and handover', d: 'We finish the work, then check the floor with you.' },
      ],
    },
    {
      eyebrow: 'Dubai services',
      h2: 'Our most requested services in Dubai',
      body: [
        'Marble polishing is the main job, but many Dubai homes also need restoration for deep damage, crystallization for a stronger finish or stain removal on pale stones such as Crema Marfil and Calacatta.',
      ],
      links: [
        { label: 'Marble polishing Dubai', href: '/services/marble-polishing-dubai' },
        { label: 'Marble cleaning', href: '/services/marble-cleaning-dubai' },
        { label: 'Marble floor restoration', href: '/services/marble-floor-restoration' },
        { label: 'Crystallization and sealing', href: '/services/crystallization-sealing' },
        { label: 'Yellow stain removal', href: '/services/yellow-stain-removing' },
      ],
    },
  ],
  'location-abu-dhabi': [
    {
      eyebrow: 'Abu Dhabi',
      h2: 'Marble polishing company in Abu Dhabi',
      body: [
        'Sand, heavy foot traffic and hard water wear down stone floors in Abu Dhabi just as they do in Dubai. We polish and restore marble in villas, towers and showrooms across the capital, from Saadiyat Island and Yas Island to Al Reem Island and the Corniche.',
        'Our office is in Sharjah and our team works across the UAE. When you contact us, we reply within 30 minutes and give you a visit time based on our schedule. The site visit is free, and you receive a fixed-price quote before any work starts.',
      ],
    },
    {
      eyebrow: 'Services',
      h2: 'Marble services in Abu Dhabi',
      items: [
        { t: 'Marble floor polishing', d: 'Diamond polishing for dull and scratched floors.' },
        { t: 'Marble floor grinding', d: 'For uneven tiles and deep scratches.' },
        { t: 'Crystallization', d: 'Popular for new-build handovers and after renovation work.' },
        { t: 'Restoration', d: 'Crack filling, etch removal and full re-polishing.' },
      ],
      links: [
        { label: 'Marble grinding', href: '/services/marble-grinding-dubai' },
        { label: 'Crystallization and sealing', href: '/services/crystallization-sealing' },
        { label: 'Marble floor restoration', href: '/services/marble-floor-restoration' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Marble polishing questions from Abu Dhabi customers',
      items: [
        { t: 'What does it cost to polish marble floors in Abu Dhabi?', d: 'It depends on the area, the condition and the finish. The site visit is free, and the price is fixed.' },
        { t: 'Can you work on weekends?', d: 'Yes. Overnight and weekend slots are available for commercial clients.' },
        { t: 'Is the guarantee the same as in Dubai?', d: 'Yes. Work in every emirate has the same 1-month written guarantee.' },
      ],
    },
    {
      eyebrow: 'How it works',
      h2: 'How to book in Abu Dhabi',
      numbered: true,
      items: [
        { t: 'Contact us', d: 'Call or WhatsApp us with your area and a photo of the floor. We reply within 30 minutes.' },
        { t: 'Get a visit time', d: 'We check our schedule and tell you when our team can come.' },
        { t: 'Free inspection', d: 'We look at the stone in person and give you a fixed price for the agreed work.' },
        { t: 'Work and handover', d: 'We complete the job, walk through it with you and explain the aftercare.' },
      ],
    },
    {
      eyebrow: 'Proof',
      h2: 'See our work before you book',
      body: [
        'Our gallery shows real marble, granite and terrazzo jobs from across the UAE. Reading our Google reviews is also a good way to see how customers found the work.',
      ],
      links: [{ label: 'View the gallery', href: '/gallery' }],
    },
  ],
  'location-sharjah': [
    {
      eyebrow: 'Sharjah',
      h2: 'Marble polishing in Sharjah',
      body: [
        'Our office is in Muwaileh Commercial, Sharjah, so Sharjah is home ground for MarblePro. Our team also works across the UAE, on a schedule agreed with each customer. We polish marble in villas, apartments and offices across Al Khan, Al Majaz, Al Nahda, Al Taawun and University City.',
        'Older Sharjah buildings often mix marble, terrazzo and granite on one floor plan. We can handle all three in one visit, using the right machinery for each stone.',
      ],
    },
    {
      eyebrow: 'Services',
      h2: 'Marble and stone services in Sharjah',
      items: [
        { t: 'Marble polishing', d: 'Brings back the shine on dull and scratched floors.' },
        { t: 'Terrazzo restoration', d: 'Reveals the chips hidden by years of wear.' },
        { t: 'Marble repair', d: 'Fixes scratches, cracks and chips.' },
        { t: 'Yellow stain removal', d: 'Treats yellowing and deep stains on pale marble.' },
      ],
      links: [
        { label: 'Marble polishing', href: '/services/marble-polishing-dubai' },
        { label: 'Terrazzo polishing', href: '/services/terrazzo-polishing-dubai' },
        { label: 'Marble scratch and crack repair', href: '/services/marble-scratch-repair-dubai' },
      ],
    },
    {
      eyebrow: 'Common jobs',
      h2: 'What Sharjah customers ask us for',
      items: [
        { t: 'Old terrazzo floors', d: 'We strip old wax, repair cracks and bring the stone chips back into view.' },
        { t: 'Apartment marble', d: 'We polish halls, living rooms and bathrooms room by room.' },
        { t: 'Mixed stone floors', d: 'Many older buildings mix marble, granite and terrazzo, so we change the method for each one.' },
        { t: 'Building lobbies', d: 'We can plan work around residents, and agree access with your building manager.' },
      ],
      links: [
        { label: 'Terrazzo polishing', href: '/services/terrazzo-polishing-dubai' },
        { label: 'Marble floor restoration', href: '/services/marble-floor-restoration' },
      ],
    },
    {
      eyebrow: 'How it works',
      h2: 'How to book in Sharjah',
      numbered: true,
      items: [
        { t: 'Call or WhatsApp us', d: 'Send your area and a photo if you can. We reply within 30 minutes.' },
        { t: 'Agree a time', d: 'We give you a visit time based on our schedule.' },
        { t: 'Free inspection', d: 'We check the stone and give you a fixed price for the agreed work.' },
        { t: 'Work and aftercare', d: 'We finish the floor, show you how to keep it clean, and the work has a 1-month written guarantee.' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Questions from Sharjah customers',
      items: [
        { t: 'Where is your office?', d: 'Our office is in Muwaileh Commercial, Sharjah. Our team works across the UAE.' },
        { t: 'Can you work in a tenanted flat?', d: 'Yes, with the owner or tenant present. Agree this with us when you book.' },
        { t: 'Do you charge for the inspection?', d: 'No. The site visit and quote are free.' },
      ],
    },
  ],
  'marble-cleaning-dubai': [
    {
      eyebrow: 'What it is',
      h2: 'Marble cleaning in Dubai: what the service covers',
      body: [
        'Marble cleaning removes what is sitting on the stone: dirt, sand, grime, soap film and the build-up left by old cleaning products. It is a different job from polishing. Cleaning lifts what is on top of the surface, while polishing works the stone itself with diamond abrasives to bring back the shine.',
        'Marble needs more care than tile or porcelain because it is a calcium-based stone, and acids eat into it. Many bathroom, kitchen and glass cleaners can leave pale, dull marks after one use. A good marble cleaning company chooses products to suit the stone, which is why we check your marble before any work starts.',
      ],
    },
    {
      eyebrow: 'Signs',
      h2: 'When does marble need a professional clean?',
      items: [
        { t: 'The floor looks grey after mopping', d: 'Old mop water and product residue build up on the surface and hold on to dirt.' },
        { t: 'Bathroom marble looks cloudy', d: 'Soap film and hard water leave a dull layer on vanities, walls and shower areas.' },
        { t: 'Joints have turned dark', d: 'Dirt collects in the lines between tiles and makes the whole floor look tired.' },
        { t: 'Entrances and stairs stay sandy', d: 'Sand comes in on shoes, so these areas get dirty first and scratch fastest.' },
        { t: 'You have just renovated', d: 'Fine dust and site residue should be removed with care from new or uncovered stone.' },
        { t: 'You are moving in or out', d: 'A deep clean gets the stone ready for the next person living in the home.' },
      ],
    },
    {
      eyebrow: 'Which service',
      h2: 'Cleaning, polishing or stain removal: which one do you need?',
      body: [
        'Not every marked floor is a dirty floor. Marks inside the stone will not come off with any cleaner, and scrubbing harder can make things worse. We look at the stone first, then tell you which of these it needs.',
      ],
      items: [
        { t: 'Cleaning', d: 'For marble that is dirty but not damaged.' },
        { t: 'Polishing', d: 'For marble that stays dull once it is clean, or shows traffic paths and fine scratches.' },
        { t: 'Stain removal', d: 'For marks inside the stone, such as yellowing, rust or oil.' },
        { t: 'Repair', d: 'For etch marks, chips and cracks, which are damage rather than dirt.' },
      ],
      links: [
        { label: 'Marble polishing Dubai', href: '/services/marble-polishing-dubai' },
        { label: 'Yellow stain removal', href: '/services/yellow-stain-removing' },
        { label: 'Marble scratch and crack repair', href: '/services/marble-scratch-repair-dubai' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How our marble cleaning service works',
      numbered: true,
      items: [
        { t: 'Call or WhatsApp', d: 'Tell us your area and send a photo of the marble. We reply within 30 minutes.' },
        { t: 'Free site visit', d: 'We confirm a time with you, identify the stone and measure the area.' },
        { t: 'Fixed-price quote', d: 'You get one price for the agreed scope, with no obligation to go ahead.' },
        { t: 'Stone-safe clean', d: 'We use products that suit your stone, and clean the surface and the joints.' },
        { t: 'Rinse and dry', d: 'Residue is removed, because cleaner left on the stone attracts new dirt.' },
        { t: 'Check it with you', d: 'We go through the result together and point out any area that needs more than cleaning.' },
      ],
    },
    {
      eyebrow: 'What we clean',
      h2: 'Marble floor cleaning and more',
      items: [
        { t: 'Floors', d: 'Living rooms, hallways, lobbies and entrances, the areas that collect the most sand.' },
        { t: 'Stairs', d: 'Treads and landings, including the edges a machine struggles to reach.' },
        { t: 'Bathrooms', d: 'Marble vanities, walls and floors with soap film and water marks.' },
        { t: 'Kitchen tops', d: 'Marble tops with grease and everyday marks, cleaned with care around food areas.' },
      ],
      body: [
        'Have a different stone? Granite, terrazzo and travertine each need their own products, so tell us what you have when you contact us.',
      ],
    },
    {
      eyebrow: 'Dubai coverage',
      h2: 'Marble cleaning for Dubai homes and businesses',
      body: [
        'We clean marble in villas, apartments, offices, hotels and showrooms across Dubai. Our office is in Sharjah and our team works across the UAE, so when you contact us we give you a visit time based on our schedule. Tell us about any building rules or working hours, and we will plan around them.',
      ],
      links: [
        { label: 'Marble polishing company in Dubai', href: '/locations/dubai' },
        { label: 'Commercial floor polishing', href: '/services/commercial-floor-polishing-dubai' },
      ],
    },
    {
      eyebrow: 'Pricing',
      h2: 'How marble cleaning is priced',
      body: [
        'The price depends on the size of the area, the condition of the stone and how easy it is to reach. A single bathroom and a full villa floor are very different jobs, so we do not quote one flat rate for everything. Prices start from AED 70 per square metre in Dubai and Abu Dhabi, and from AED 40 per square metre in Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain and Fujairah. The site visit is free, and you get a fixed price for the agreed work before anything starts.',
      ],
    },
    {
      eyebrow: 'Daily care',
      h2: 'How to keep marble clean between visits',
      items: [
        { t: 'Sweep or dust-mop often', d: 'Removing sand is the simplest way to protect the surface.' },
        { t: 'Use a pH-neutral cleaner', d: 'Choose a product made for natural stone, and follow the label.' },
        { t: 'Avoid acids and bleach', d: 'Vinegar, lemon, bleach and strong bathroom cleaners can mark marble.' },
        { t: 'Wipe spills quickly', d: 'Blot juice, coffee and oil before they reach the stone.' },
        { t: 'Put mats at the door', d: 'Mats catch sand before it spreads through the home.' },
      ],
      links: [{ label: 'How to care for marble in the UAE climate', href: '/blog/how-to-care-for-marble-floors-uae' }],
    },
    {
      eyebrow: 'Questions',
      h2: 'Marble cleaning questions from Dubai customers',
      items: [
        { t: 'Is marble cleaning the same as polishing?', d: 'No. Cleaning removes dirt from the surface. Polishing works the stone to bring back its shine.' },
        { t: 'Will cleaning bring the shine back?', d: 'Only if the shine is hidden under dirt or residue. A worn or scratched floor needs polishing.' },
        { t: 'Can cleaning remove yellow stains?', d: 'Usually not, because yellowing sits inside the stone. It needs a stain treatment instead.' },
        { t: 'Can I use a normal floor cleaner on marble?', d: 'Check the label first. Many household cleaners are too acidic or too harsh for marble.' },
        { t: 'How do I book?', d: 'Call or WhatsApp 054 556 77 99. We reply within 30 minutes and agree a visit time with you.' },
      ],
      links: [
        { label: 'How to remove yellow stains from marble', href: '/blog/how-to-remove-yellow-stains-from-marble' },
        { label: 'Marble table polishing', href: '/services/marble-table-polishing-dubai' },
      ],
    },
  ],
  'floor-polishing-dubai': [
    {
      eyebrow: 'What it is',
      h2: 'Floor polishing in Dubai, done for your type of stone',
      body: [
        'Floor polishing means working the surface of a hard floor with fine abrasives until it reflects light again. It is very different from mopping or applying a shine product, which only sit on top and wear off. On stone, a proper polish takes out fine scratches and brings back the depth of the floor.',
        'The method depends on the floor. Marble is soft and reacts to acids, granite is very hard, and terrazzo mixes stone chips with a cement base. A floor polishing company that treats them all the same risks an uneven finish, so we identify the stone before quoting.',
      ],
    },
    {
      eyebrow: 'Floors we polish',
      h2: 'Which floors can we polish?',
      items: [
        { t: 'Marble floors', d: 'Crema Marfil, Calacatta, Emperador and other marbles, polished up to 3000 grit.' },
        { t: 'Granite floors', d: 'A very hard stone that needs heavy machines and industrial diamond discs.' },
        { t: 'Terrazzo floors', d: 'Fine diamond pads level the surface and bring out the stone and glass chips.' },
        { t: 'Travertine floors', d: 'Natural holes are filled first, then the stone is honed and polished.' },
        { t: 'Tile floors', d: 'Porcelain and stone tiles polished, and grout cleaned, with a gentler method for glazed ceramic.' },
        { t: 'Limestone floors', d: 'Soft, porous stone that is honed or polished with care.' },
        { t: 'Mosaic floors', d: 'Stone patterns, borders and inlays, cleaned and polished piece by piece.' },
      ],
      links: [
        { label: 'Marble polishing Dubai', href: '/services/marble-polishing-dubai' },
        { label: 'Granite polishing', href: '/services/granite-polishing' },
        { label: 'Terrazzo polishing', href: '/services/terrazzo-polishing-dubai' },
        { label: 'Travertine polishing', href: '/services/travertine-polishing-dubai' },
      ],
    },
    {
      eyebrow: 'What your floor needs',
      h2: 'Polish, restore or seal?',
      items: [
        { t: 'Polish', d: 'For floors that look dull or carry light scratches, but are otherwise in good shape.' },
        { t: 'Restore', d: 'For cracks, chips, deep scratches, etching or uneven tiles. Repairs come before the polish.' },
        { t: 'Seal', d: 'For polished stone that needs extra protection against spills and daily wear.' },
      ],
      links: [
        { label: 'Marble cleaning', href: '/services/marble-cleaning-dubai' },
        { label: 'Marble floor restoration', href: '/services/marble-floor-restoration' },
        { label: 'Crystallization and sealing', href: '/services/crystallization-sealing' },
      ],
    },
    {
      eyebrow: 'How it works',
      h2: 'How our floor polishing service works',
      numbered: true,
      items: [
        { t: 'Tell us about your floor', d: 'Call us, or send a photo on WhatsApp for a first opinion.' },
        { t: 'Free site visit', d: 'We identify the stone, check the condition and measure the area.' },
        { t: 'Fixed-price quote', d: 'You get one price for the agreed scope, with no obligation to go ahead.' },
        { t: 'Polishing day', d: 'Our crew uses a dust-free wet process, working through the diamond grits for your stone.' },
        { t: 'Protect and hand over', d: 'We apply crystallization or a sealer where needed, then check the finish with you.' },
      ],
    },
    {
      eyebrow: 'Homes and businesses',
      h2: 'Floor polishing for villas, apartments and offices',
      body: [
        'We polish stone floors in villas, apartments, offices, hotels and retail spaces across Dubai. Lived-in homes can stay occupied while we work. For offices and shops, we can plan overnight or weekend work to keep your business running. We are available 24 hours, 7 days a week.',
      ],
      links: [
        { label: 'Our work in Dubai', href: '/locations/dubai' },
        { label: 'Project gallery', href: '/gallery' },
      ],
    },
    {
      eyebrow: 'Choosing a company',
      h2: 'How to choose a floor polishing company in Dubai',
      items: [
        { t: 'Ask what stone they work with', d: 'A good company should identify your floor and explain the method.' },
        { t: 'Ask about wax coatings', d: 'A coating can look shiny at first, but it does not repair the stone and wears off.' },
        { t: 'Ask how they control dust', d: 'Dry grinding spreads dust through a home. A wet process avoids it.' },
        { t: 'Get the price and guarantee in writing', d: 'Check what is included, and be careful of a price given without seeing the floor.' },
      ],
    },
    {
      eyebrow: 'Pricing',
      h2: 'Floor polishing price in Dubai',
      body: [
        'Stone floor polishing is usually priced by the square metre. Prices start from AED 70 per square metre in Dubai and Abu Dhabi, and from AED 40 per square metre in Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain and Fujairah. The rate depends on the stone, its condition, the area and the finish you want. That is why we check the floor first. The site visit is free, and your fixed price covers the agreed scope.',
      ],
      links: [{ label: 'Marble polishing cost guide', href: '/blog/marble-polishing-cost-dubai' }],
    },
    {
      eyebrow: 'Questions',
      h2: 'Floor polishing questions from Dubai customers',
      items: [
        { t: 'How long does it take?', d: 'A standard villa living area typically takes 1 to 2 days. We confirm the time with your quote.' },
        { t: 'Will my home be full of dust?', d: 'No. We use a wet process, so marble dust does not spread through your home.' },
        { t: 'Can you come urgently?', d: 'Tell us it is urgent and we will give you the earliest visit time on our schedule.' },
        { t: 'Do you cover other emirates?', d: 'Yes. We work across all 7 UAE emirates, including Abu Dhabi and Sharjah.' },
      ],
    },
  ],
  'marble-floor-restoration': [
    {
      eyebrow: 'What it is',
      h2: 'Marble floor restoration: repair first, then shine',
      body: [
        'Polishing alone works when marble is dull. Restoration is for floors with real damage, such as cracks, chips, deep scratches, acid etching, uneven tiles or heavy yellowing. Each fault is repaired first, then the whole floor is ground, polished and sealed so the repairs blend into the stone.',
        'Marble flooring in a Dubai villa is expensive to replace, and removing it means noise, dust and days of disruption. In many cases marble floor restoration saves the stone you already have. We tell you honestly at the site visit if a tile is too badly damaged to save.',
      ],
    },
    {
      eyebrow: 'Damage we repair',
      h2: 'What marble floor restoration can fix',
      items: [
        { t: 'Cracks and chips', d: 'Filled with colour-matched epoxy, then levelled and polished with the surrounding stone.' },
        { t: 'Deep scratches', d: 'Cut back with coarse diamonds where normal polishing pads cannot reach, often from moved furniture.' },
        { t: 'Etching', d: 'Marks from citrus, wine and harsh cleaners are removed from the surface and re-polished.' },
        { t: 'Lippage', d: 'Tile edges that stand proud are ground down until the floor is flat underfoot.' },
        { t: 'Open or dirty joints', d: 'Joints are cleaned out and levelled so the floor reads as one surface.' },
        { t: 'Yellowed marble', d: 'Deep discolouration gets its own stain treatment before the final polish.' },
      ],
      links: [
        { label: 'Yellow stain removal', href: '/services/yellow-stain-removing' },
        { label: '7 signs your floor needs restoration', href: '/blog/signs-marble-floor-needs-restoration' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we restore a marble floor',
      numbered: true,
      items: [
        { t: 'Damage assessment', d: 'On a free site visit we map every crack, chip and low spot, then agree the scope and a fixed price with you.' },
        { t: 'Repairs', d: 'Cracks and chips are filled and left to cure, with the colour matched to your stone.' },
        { t: 'Flattening', d: 'Weighted diamond grinding levels the tiles and the repairs into a single flat surface.' },
        { t: 'Scratch and etch removal', d: 'Progressively finer diamonds take out the remaining damage and the marks left by grinding.' },
        { t: 'Polish and crystallize', d: 'The floor is brought up to the finish you chose, then treated with Italian crystallization.' },
        { t: 'Seal and final check', d: 'A breathable sealer goes on last, and we review the finished floor with you.' },
      ],
    },
    {
      eyebrow: 'Restore or replace',
      h2: 'Should you restore or replace your marble?',
      body: [
        'Restoration usually makes sense when the tiles are still firmly bonded and the damage is on the surface or in isolated spots. It also keeps the original stone, so you avoid hunting for a matching batch of marble. Replacement may be the better choice if tiles are loose across a large area or badly broken.',
        'If only some areas are affected, a single room or a stretch of corridor can be restored on its own. We will explain how the finish will meet the rest of the floor before any work starts.',
      ],
    },
    {
      eyebrow: 'Pricing',
      h2: 'What affects the cost of marble floor restoration in Dubai?',
      body: [
        'Prices start from AED 70 per square metre in Dubai and Abu Dhabi, and from AED 40 per square metre in Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain and Fujairah. Restoration usually costs more per square metre than a standard polish because there is more work in it. The price depends on the floor area, the number of cracks and chips, how much grinding the tiles need and the finish you want. That is why we inspect first instead of quoting blind.',
        'The site visit is free, and you receive a fixed price for the agreed scope. Your restored floor is covered by a 1-month written guarantee.',
      ],
      links: [{ label: 'Marble polishing and restoration cost guide', href: '/blog/marble-polishing-cost-dubai' }],
    },
    {
      eyebrow: 'Homes and businesses',
      h2: 'Residential and commercial floor restoration in Dubai',
      body: [
        'We restore marble floors in villas and apartments, as well as hotels, offices, lobbies and showrooms. For urgent home jobs, we give you the earliest visit time on our schedule. For commercial floor restoration in Dubai, we can plan overnight and weekend work so your business keeps running.',
        'Our dust-free wet process means a lived-in home stays usable while the work moves from room to room. We also cover Abu Dhabi, Sharjah and the other emirates.',
      ],
      links: [
        { label: 'Marble floor restoration in Dubai', href: '/locations/dubai' },
        { label: 'Marble polishing Dubai', href: '/services/marble-polishing-dubai' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Marble restoration questions from Dubai customers',
      items: [
        { t: 'Will I still see the crack after repair?', d: 'We colour-match the filler so repairs blend into the stone. Veining and the size of the crack affect the result, and we show you what to expect first.' },
        { t: 'Can etching always be removed?', d: 'Surface etching normally can. Deeper damage may need more grinding, which we check at the site visit.' },
        { t: 'How long does restoration take?', d: 'It depends on the area and the amount of repair work. You get a clear timeline with your quote.' },
        { t: 'Does restoration stop the damage coming back?', d: 'It removes the existing damage, and sealing helps protect the floor, but marble still needs care. Wipe up acidic spills quickly and use pH-neutral cleaners.' },
      ],
      links: [
        { label: 'How often should marble be polished?', href: '/blog/how-often-polish-marble-floors-dubai' },
        { label: 'Marble countertop polishing', href: '/services/marble-countertop-polishing' },
        { label: 'Marble table polishing', href: '/services/marble-table-polishing-dubai' },
      ],
    },
  ],
  'calacatta-marble-polishing-dubai': [
    {
      eyebrow: 'The stone',
      h2: 'What makes Calacatta marble hard to polish',
      body: [
        'Calacatta is a white Italian marble with bold grey and gold veins. It is calcium-based, so lemon juice, vinegar and many bathroom cleaners can leave a dull mark within minutes. On a white background, every one of those marks shows.',
        'White marble also needs care with water. Too much water sitting on or under the stone can bring out yellow or brown tones, so we control the water we use at each step. The aim is to restore the shine without changing the colour of the slab.',
      ],
    },
    {
      eyebrow: 'Signs',
      h2: 'When Calacatta needs professional work',
      items: [
        { t: 'Dull rings and spots', d: 'Glasses, perfume bottles and cleaning sprays leave etch marks on vanity tops and floors.' },
        { t: 'Yellow patches', d: 'Age, water and old wax can turn parts of the slab yellow, and normal cleaning will not lift it.' },
        { t: 'Faded shine in walkways', d: 'Sand on shoes wears the polish down along hallways and around doors.' },
        { t: 'Lost contrast in the veins', d: 'A dull surface makes the grey and gold veining look flat.' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we polish Calacatta',
      numbered: true,
      items: [
        { t: 'Inspect the slab', d: 'We check the finish, stains, cracks and any old coatings, then give you a fixed-price quote.' },
        { t: 'Treat stains first', d: 'We deal with yellowing and marks before polishing, so we do not seal them in.' },
        { t: 'Polish in stages', d: 'We use fine diamond pads and move up gradually, to protect the veins and the white tone.' },
        { t: 'Seal and hand over', d: 'We apply a sealer that suits white marble and show you which cleaners to use.' },
      ],
      links: [
        { label: 'Yellow stain removal', href: '/services/yellow-stain-removing' },
        { label: 'Crystallization and sealing', href: '/services/crystallization-sealing' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Calacatta polishing questions',
      items: [
        { t: 'Can you polish Calacatta kitchen tops as well as floors?', d: 'Yes. We polish floors, kitchen tops, vanities, walls and stairs.' },
        { t: 'Will sealing stop etch marks?', d: 'No sealer fully stops acid from etching marble. It slows stains, so you still need to wipe spills quickly.' },
        { t: 'Should I choose a polished or honed finish?', d: 'Polished Calacatta looks brighter. A honed finish hides light marks better, which helps in busy kitchens.' },
      ],
      links: [{ label: 'How to care for Calacatta at home', href: '/blog/how-to-care-for-calacatta-marble' }],
    },
  ],
  'crema-marfil-polishing-dubai': [
    {
      eyebrow: 'The stone',
      h2: 'Why Crema Marfil needs its own approach',
      body: [
        'Crema Marfil is a warm beige marble from Spain, and you will find it in many UAE villas and apartment blocks. It is fairly soft and has natural veins and fine fissures. Factories often fill these with resin before the tiles reach the site.',
        'That mix of soft stone and resin filler affects how we polish it. Heavy grinding can open up the veins or remove filler, so we set the grit and pressure after we have looked at your floor. We also check the joints, as dirt in the grout can make a clean floor look tired.',
      ],
    },
    {
      eyebrow: 'Signs',
      h2: 'Common problems on Crema Marfil floors',
      items: [
        { t: 'Patchy shine', d: 'Walkways turn matt while the edges of the room still look polished.' },
        { t: 'Dark or orange patches', d: 'Water and old cleaners can leave uneven tones in the stone.' },
        { t: 'Hollow or chipped veins', d: 'Old filler can wear away and leave small holes that trap dirt.' },
        { t: 'Uneven tiles', d: 'Raised tile edges catch the light and chip over time.' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we restore Crema Marfil',
      numbered: true,
      items: [
        { t: 'Check the floor', d: 'We look at wear, stains, filler and lippage, and tell you what polishing can and cannot fix.' },
        { t: 'Repair first', d: 'We fill open veins and chips with a colour-matched filler.' },
        { t: 'Grind only where needed', d: 'We flatten raised edges where a floor needs it, then polish through the diamond grits.' },
        { t: 'Finish and protect', d: 'We finish to the shine you choose and seal the stone against spills.' },
      ],
      links: [
        { label: 'Marble grinding', href: '/services/marble-grinding-dubai' },
        { label: 'Scratch and crack repair', href: '/services/marble-scratch-repair-dubai' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Crema Marfil polishing questions',
      items: [
        { t: 'Can polishing remove dark patches?', d: 'Often, but it depends on the cause. We test the patch during the inspection before we promise a result.' },
        { t: 'Do you polish single rooms?', d: 'Yes. The shine may differ slightly from the rooms next door, so we discuss that with you first.' },
        { t: 'Is the work dusty?', d: 'We use a wet process, which keeps stone dust out of the air.' },
      ],
      links: [{ label: 'Why Crema Marfil turns dull or patchy', href: '/blog/crema-marfil-dull-or-patchy' }],
    },
  ],
  'emperador-marble-polishing-dubai': [
    {
      eyebrow: 'The stone',
      h2: 'Why Emperador shows every mark',
      body: [
        'Emperador is a brown Spanish marble with white veins. Its dark colour makes it look rich, but it also shows scratches, water spots and dust far more than a cream or white stone.',
        'Hard-water marks are the most common complaint in bathrooms. They sit on the surface as white spots, and a dull etch mark can look almost the same. We tell them apart first, because one needs cleaning and the other needs polishing.',
      ],
    },
    {
      eyebrow: 'Signs',
      h2: 'When Emperador needs attention',
      items: [
        { t: 'White water marks', d: 'Marks build up around basins, showers and taps.' },
        { t: 'Grey, faded areas', d: 'The floor loses its deep brown colour along the paths people walk.' },
        { t: 'Fine scratches', d: 'Light catches every scratch on dark stone, especially near entrances.' },
        { t: 'Worn white veins', d: 'The veins are softer in places, and they can pit or lose their shine.' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we polish Emperador',
      numbered: true,
      items: [
        { t: 'Identify the marks', d: 'We separate water deposits, etching and scratches, then quote for the agreed work.' },
        { t: 'Clean off deposits', d: 'We remove hard-water build-up with products that suit marble.' },
        { t: 'Polish through the grits', d: 'Diamond pads take out the wear and bring the brown tone back.' },
        { t: 'Seal wet areas', d: 'We use a sealer made for bathrooms and other wet areas.' },
      ],
      links: [{ label: 'Crystallization and sealing', href: '/services/crystallization-sealing' }],
    },
    {
      eyebrow: 'Questions',
      h2: 'Emperador polishing questions',
      items: [
        { t: 'How do I stop water marks coming back?', d: 'Wipe the stone dry after use and clean with a pH-neutral cleaner. Sealing helps, but it does not replace drying.' },
        { t: 'Can you polish Emperador in a shower?', d: 'Yes. We check the joints and any water damage first.' },
        { t: 'Will polishing darken the stone?', d: 'It usually brings back the deeper brown you lost to wear. A colour-enhancing sealer can deepen it further if you want that.' },
      ],
      links: [{ label: 'Why Emperador shows every mark', href: '/blog/emperador-marble-care' }],
    },
  ],
  'onyx-marble-polishing-dubai': [
    {
      eyebrow: 'The stone',
      h2: 'What makes onyx different from marble',
      body: [
        'Onyx is a translucent, banded stone. People use it for backlit walls, vanity tops, reception counters and feature panels because light passes through it. It is softer and more brittle than most marble, so it scratches and cracks more easily.',
        'Many onyx slabs have a resin layer or a mesh backing to hold them together. That changes what we can do, because too much heat or pressure can damage the resin. We inspect each piece and agree a plan before any machine touches it.',
      ],
    },
    {
      eyebrow: 'Signs',
      h2: 'Problems we see on onyx',
      items: [
        { t: 'Cloudy surface', d: 'Acidic cleaners and water leave a white haze that dims the glow.' },
        { t: 'Fine scratches', d: 'Even a soft cloth with grit on it can mark a polished slab.' },
        { t: 'Uneven light', d: 'On a backlit wall, wear and residue show up as dark or dull areas.' },
        { t: 'Small cracks', d: 'Natural fissures can open over time and collect dirt.' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we polish onyx',
      numbered: true,
      items: [
        { t: 'Inspect the piece', d: 'We check the backing, cracks and finish, and tell you the risks before we start.' },
        { t: 'Fill and stabilise', d: 'We fill fissures with resin where the stone needs it.' },
        { t: 'Use fine abrasives only', d: 'We start at a fine grit and work by hand on delicate areas.' },
        { t: 'Protect the finish', d: 'We apply a suitable sealer and explain how to clean the stone.' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Onyx polishing questions',
      items: [
        { t: 'Can you polish a backlit onyx wall?', d: 'Yes, in most cases. We check the fixing and the lighting first, and protect the area around it.' },
        { t: 'Can all scratches come out?', d: 'Light scratches usually can. Deep damage may stay visible, and we tell you that at the inspection.' },
        { t: 'Which cleaner is safe for onyx?', d: 'Use a soft cloth and a pH-neutral stone cleaner. Avoid vinegar, lemon and bathroom sprays.' },
      ],
      links: [{ label: 'Onyx care at home', href: '/blog/onyx-care-guide' }],
    },
  ],
  'quartz-polishing': [
    {
      eyebrow: 'The surface',
      h2: 'Quartz is not stone in the usual sense',
      body: [
        'Engineered quartz is mostly crushed quartz held together with resin. The factory gives it a polish that resists stains well, so it does not need the sealing routine that marble does. The resin is also its weak point: heat and strong chemicals can mark it.',
        'That means polishing quartz is a limited job. We can often improve light scratches and dull patches, but we cannot always remove a burn or a deep chip. We tell you what is realistic before we start, and we use low speed and low heat to protect the resin.',
      ],
    },
    {
      eyebrow: 'Signs',
      h2: 'What brings customers to us',
      items: [
        { t: 'Dull areas by the sink or hob', d: 'Daily wiping and harsh cleaners can take the sheen off busy spots.' },
        { t: 'Light scratches', d: 'Cutting directly on the top leaves fine lines.' },
        { t: 'Stubborn marks', d: 'Oil, turmeric and tea can sit on a worn surface.' },
        { t: 'Heat marks', d: 'Hot pans can leave pale or yellow patches in the resin.' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we work on quartz',
      numbered: true,
      items: [
        { t: 'Check the damage', d: 'We look at each mark and tell you which ones should improve.' },
        { t: 'Clean the surface', d: 'We remove residue so we can see the true condition of the top.' },
        { t: 'Polish gently', d: 'We work at low speed to avoid overheating the resin.' },
        { t: 'Add protection if you want it', d: 'An optional sealer helps repel oil, wine and juice.' },
      ],
      links: [{ label: 'Kitchen top polishing', href: '/services/kitchen-top-polishing' }],
    },
    {
      eyebrow: 'Questions',
      h2: 'Quartz polishing questions',
      items: [
        { t: 'Can a burn mark be removed?', d: 'Sometimes it can be reduced, but a heat mark in the resin may not fully go. Check it with us first.' },
        { t: 'Does quartz etch like marble?', d: 'No. Normal food acids do not etch it, but strong chemicals and bleach can damage the surface.' },
        { t: 'How should I clean quartz?', d: 'Use a soft cloth, warm water and mild soap. Avoid abrasive pads.' },
      ],
      links: [{ label: 'Can quartz be polished?', href: '/blog/can-quartz-be-polished' }],
    },
  ],
  'travertine-polishing-dubai': [
    {
      eyebrow: 'The stone',
      h2: 'Why travertine is treated differently',
      body: [
        'Travertine forms in layers around mineral springs, which leaves natural holes in the stone. Many tiles are filled at the factory, but that filler can wear away. When it does, dirt and water collect in the holes and the floor starts to look pitted.',
        'So polishing alone will not fix a worn travertine floor. We fill the holes first, and only then hone or polish. We also ask how you want it to look. Some homes suit a soft honed finish, and others want more shine.',
      ],
    },
    {
      eyebrow: 'Signs',
      h2: 'When travertine needs work',
      items: [
        { t: 'Open holes', d: 'Filler has worn out, and dirt now sits in the surface.' },
        { t: 'Dark, dirty patches', d: 'Soil gets into the pores, and mopping only moves it around.' },
        { t: 'Rough walkways', d: 'The floor feels worn underfoot along busy routes.' },
        { t: 'Damaged outdoor areas', d: 'Pool surrounds and terraces suffer from sun, salt and water.' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we restore travertine',
      numbered: true,
      items: [
        { t: 'Inspect and agree the finish', d: 'We look at the holes and the wear, and help you choose honed or polished.' },
        { t: 'Deep clean', d: 'We clear dirt from the pores so the filler can bond.' },
        { t: 'Fill the voids', d: 'We use a colour-matched epoxy filler in holes and chips.' },
        { t: 'Hone, polish and seal', d: 'We bring the floor to the agreed finish and seal it.' },
      ],
      links: [{ label: 'Marble floor restoration', href: '/services/marble-floor-restoration' }],
    },
    {
      eyebrow: 'Questions',
      h2: 'Travertine polishing questions',
      items: [
        { t: 'Honed or polished: which is better?', d: 'Honed hides wear and feels less slippery. Polished looks brighter but shows marks sooner.' },
        { t: 'Will the filler match my floor?', d: 'We colour-match it to the stone. Small differences are normal, because no two tiles are the same.' },
        { t: 'Can you work on pool areas?', d: 'Yes. We usually suggest a finish with more grip outdoors.' },
      ],
      links: [{ label: 'Filled or unfilled travertine', href: '/blog/travertine-floors-filled-or-unfilled' }],
    },
  ],
  'marble-countertop-polishing': [
    {
      eyebrow: 'What it is',
      h2: 'What marble countertop polishing can fix',
      body: [
        'A marble countertop takes more daily punishment than a floor. Lemon, tomato, vinegar and wine can all etch it, leaving dull spots that look like water marks but do not wipe off. Oil can also soak in and leave a dark stain.',
        'We polish tops in place, so you do not have to remove anything. Our team protects the cabinets, sink and walls first, and we work by hand around taps and edges where a machine cannot reach.',
      ],
    },
    {
      eyebrow: 'Signs',
      h2: 'When your countertop needs polishing',
      items: [
        { t: 'Dull rings and spots', d: 'Glasses and spills leave marks you can see in the light.' },
        { t: 'Dark oil stains', d: 'They usually appear around the hob and the sink.' },
        { t: 'Water no longer beads', d: 'If water soaks in quickly, the sealer has worn off.' },
        { t: 'Rough or chipped edges', d: 'Edges take knocks from pans and sinks.' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we polish a marble top',
      numbered: true,
      items: [
        { t: 'Inspect', d: 'We check the stone type, marks and edges, then give you a fixed-price quote.' },
        { t: 'Protect the kitchen', d: 'We cover nearby surfaces before we start.' },
        { t: 'Remove marks', d: 'We treat stains, then polish out etching with diamond pads.' },
        { t: 'Seal', d: 'We apply a food-safe sealer and tell you when you can use the top again.' },
      ],
      links: [{ label: 'Kitchen top polishing', href: '/services/kitchen-top-polishing' }],
    },
    {
      eyebrow: 'Questions',
      h2: 'Countertop polishing questions',
      items: [
        { t: 'Do I need to remove my sink?', d: 'No. We work with the sink and taps in place.' },
        { t: 'How often should I reseal?', d: 'It depends on use. If water stops beading on the surface, it is time to reseal.' },
        { t: 'Can you fix a chipped edge?', d: 'Usually, yes. We fill the chip and blend it into the edge.' },
      ],
      links: [{ label: 'Etch marks on marble countertops', href: '/blog/etch-marks-on-marble-countertops' }],
    },
  ],
  'kitchen-top-polishing': [
    {
      eyebrow: 'What it is',
      h2: 'Every kitchen top needs a different method',
      body: [
        'The right method depends on what your top is made of. Marble can etch, but polishing can bring it back. Granite is harder and resists most kitchen acids. Quartz relies on resin, so it needs low heat. Corian is a solid surface that we sand and refinish.',
        'That is why we start by checking the material. If you are not sure what your kitchen top is, send us a photo on WhatsApp. We reply within 30 minutes and can confirm it during the free inspection.',
      ],
    },
    {
      eyebrow: 'Problems',
      h2: 'What we fix on kitchen tops',
      items: [
        { t: 'Dull areas', d: 'Daily cleaning wears down the shine near the sink and hob.' },
        { t: 'Oil and food stains', d: 'Stains are most common on marble and on granite that has lost its seal.' },
        { t: 'Scratches', d: 'Knives and pans leave marks, especially on softer surfaces.' },
        { t: 'Heat marks', d: 'Hot pans can mark quartz and Corian.' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How the job works',
      numbered: true,
      items: [
        { t: 'Confirm the material', d: 'We identify the surface and check the damage.' },
        { t: 'Agree the price', d: 'You get a fixed price for the agreed work.' },
        { t: 'Polish in place', d: 'We protect the kitchen and work around sinks and taps.' },
        { t: 'Seal where it helps', d: 'We seal porous stone with a food-safe product. Quartz and Corian usually do not need it.' },
      ],
      links: [
        { label: 'Marble countertop polishing', href: '/services/marble-countertop-polishing' },
        { label: 'Quartz polishing', href: '/services/quartz-polishing' },
        { label: 'Corian countertop polishing', href: '/services/corian-countertop-polishing' },
        { label: 'Granite polishing', href: '/services/granite-polishing' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Kitchen top polishing questions',
      items: [
        { t: 'How long will my kitchen be out of use?', d: 'It depends on the material and the size of the top. We confirm the time after the inspection.' },
        { t: 'Is the sealer safe for food areas?', d: 'We use a food-safe sealer on stone kitchen tops.' },
        { t: 'Can you polish only one section?', d: 'Sometimes, but the repair can show. We usually suggest polishing the full run so the shine stays even.' },
      ],
      links: [{ label: 'Which kitchen tops can be polished?', href: '/blog/which-kitchen-tops-can-be-polished' }],
    },
  ],
  'location-ajman': [
    {
      eyebrow: 'Ajman homes',
      h2: 'Marble polishing in Ajman for towers and villas',
      body: [
        'Ajman has a mix of apartment towers along the Corniche and Al Rashidiya, newer communities such as Al Zorah and Helio, and older villas in areas such as Al Nuaimiya and Al Rumailah. Each of these brings different problems, so we start by looking at your stone and how you use the space.',
        'In tower lobbies and lift areas, the main issue is foot traffic and sand from outside. Close to the sea, humidity and salty air make floors feel dull sooner. In older homes, we often find terrazzo or marble under years of wax.',
      ],
    },
    {
      eyebrow: 'What we do',
      h2: 'Popular jobs in Ajman',
      items: [
        { t: 'Apartment floor polishing', d: 'We work room by room, which suits lived-in flats.' },
        { t: 'Lobby and corridor polishing', d: 'We can plan work with building managers to reduce disruption.' },
        { t: 'Bathroom and vanity marble', d: 'We remove water marks and dull spots.' },
        { t: 'Old terrazzo restoration', d: 'We remove old coatings and bring back the stone chips.' },
      ],
      links: [
        { label: 'Floor polishing', href: '/services/floor-polishing-dubai' },
        { label: 'Terrazzo polishing', href: '/services/terrazzo-polishing-dubai' },
      ],
    },
    {
      eyebrow: 'How it works',
      h2: 'How to book in Ajman',
      numbered: true,
      items: [
        { t: 'Call or WhatsApp us', d: 'Send a photo if you can. We reply within 30 minutes.' },
        { t: 'Agree a visit time', d: 'We give you a time based on our schedule.' },
        { t: 'Get a fixed quote', d: 'We inspect the floor for free and quote for the agreed work.' },
        { t: 'We do the work', d: 'Our team protects the area and uses a wet, low-dust process.' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Questions from Ajman customers',
      items: [
        { t: 'Do you work in apartments?', d: 'Yes. We can work around building rules and access times.' },
        { t: 'Do you charge for the visit?', d: 'No. The inspection and quote are free.' },
        { t: 'Can you polish my floor before I move in?', d: 'Yes. An empty home is the easiest time to do it.' },
      ],
    },
  ],
  'location-ras-al-khaimah': [
    {
      eyebrow: 'Ras Al Khaimah homes',
      h2: 'Marble polishing in Ras Al Khaimah for homes and holiday properties',
      body: [
        'Many properties in Al Hamra Village, Mina Al Arab and Al Marjan Island are holiday homes or rentals. Floors in these homes can sit unused for weeks, then take heavy use from guests. Sand, sun cream and pool water all end up on the stone.',
        'Further inland, in areas such as Khuzam and Al Nakheel, family villas often have marble or granite that has lost its shine over many years. We look at each floor first, because a holiday flat and a family villa rarely need the same work.',
      ],
    },
    {
      eyebrow: 'What we do',
      h2: 'Popular jobs in Ras Al Khaimah',
      items: [
        { t: 'Refreshing a holiday home', d: 'We polish and seal floors between lets or before a new season.' },
        { t: 'Marble floor restoration', d: 'We take out scratches, etch marks and worn areas.' },
        { t: 'Terrace and pool surrounds', d: 'We clean and seal stone that takes sun and water.' },
        { t: 'Hotel and resort work', d: 'We can plan overnight work so guests are not disturbed.' },
      ],
      links: [
        { label: 'Marble floor restoration', href: '/services/marble-floor-restoration' },
        { label: 'Commercial floor polishing', href: '/services/commercial-floor-polishing-dubai' },
      ],
    },
    {
      eyebrow: 'How it works',
      h2: 'How to book in RAK',
      numbered: true,
      items: [
        { t: 'Send us the details', d: 'Call or WhatsApp us with your location and a photo. We reply within 30 minutes.' },
        { t: 'Choose a time', d: 'We give you a visit time based on our schedule. Tell us if the home is empty.' },
        { t: 'Inspection and quote', d: 'We check the stone for free and give you a fixed price.' },
        { t: 'Work and handover', d: 'We finish the floor and explain how to look after it.' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Questions from Ras Al Khaimah customers',
      items: [
        { t: 'I live abroad. Can you work with my property manager?', d: 'Yes. We can arrange access and send updates through your manager.' },
        { t: 'How do I look after the floor between visits?', d: 'Sweep sand often, use a pH-neutral cleaner and put mats at entrances.' },
        { t: 'Do you cover Jebel Jais?', d: 'Yes. Tell us the exact location so we can plan the trip.' },
      ],
    },
  ],
  'location-umm-al-quwain': [
    {
      eyebrow: 'Umm Al Quwain homes',
      h2: 'Marble polishing in Umm Al Quwain for older homes and lagoon villas',
      body: [
        'Umm Al Quwain has a quieter mix of older family homes around the Old Town and newer villas near UAQ Marina. In older homes, terrazzo and marble have often been waxed many times. That wax yellows and hides the stone beneath it.',
        'We prefer a gentle approach on these floors. We test a small area first, remove the old coating, and then decide how much polishing the floor needs. On newer villas near the water, the work is usually about bringing back shine and protecting the stone from humidity.',
      ],
    },
    {
      eyebrow: 'What we do',
      h2: 'Popular jobs in Umm Al Quwain',
      items: [
        { t: 'Removing old wax', d: 'We strip yellowed coatings and show the real stone.' },
        { t: 'Terrazzo restoration', d: 'We bring out the stone chips and repair small cracks.' },
        { t: 'Marble polishing', d: 'We remove dull paths, etch marks and light scratches.' },
        { t: 'Sealing', d: 'We protect the floor from spills and damp.' },
      ],
      links: [
        { label: 'Terrazzo polishing', href: '/services/terrazzo-polishing-dubai' },
        { label: 'Marble polishing', href: '/services/marble-polishing-dubai' },
      ],
    },
    {
      eyebrow: 'How it works',
      h2: 'How to book in Umm Al Quwain',
      numbered: true,
      items: [
        { t: 'Contact us', d: 'Call or WhatsApp us. We reply within 30 minutes.' },
        { t: 'Agree a time', d: 'We give you a visit time based on our schedule.' },
        { t: 'Test and quote', d: 'We inspect the floor for free and give you a fixed price.' },
        { t: 'Finish the floor', d: 'We complete the work and show you how to clean it.' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Questions from Umm Al Quwain customers',
      items: [
        { t: 'Is my old floor worth restoring?', d: 'Very often, yes. Old terrazzo and marble can usually be restored for less than the cost of replacing them.' },
        { t: 'Will you damage the floor when you remove the wax?', d: 'We test a small area first, then choose the gentlest method that works.' },
        { t: 'Do I need to move out?', d: 'Usually not. We work room by room and agree the plan with you.' },
      ],
    },
  ],
  'location-fujairah': [
    {
      eyebrow: 'Fujairah properties',
      h2: 'Marble polishing in Fujairah and the east coast',
      body: [
        'Fujairah properties range from family homes in Fujairah City and Sakamkam to hotels and villas along the coast at Al Faseel and Khor Fakkan. Air from the sea brings humidity and salt, which can leave stone looking tired, especially near doors and windows.',
        'Homes close to the mountains deal with more dust, which scratches a polished floor in the same way as desert sand. So the plan for each property depends on where it is, what the stone is, and how many people walk on it.',
      ],
    },
    {
      eyebrow: 'What we do',
      h2: 'Popular jobs in Fujairah',
      items: [
        { t: 'Hotel lobbies and corridors', d: 'We plan overnight work around your guests.' },
        { t: 'Villa floor restoration', d: 'We remove scratches and worn paths and bring back the shine.' },
        { t: 'Sealing near the sea', d: 'We choose sealers that suit humid, coastal homes.' },
        { t: 'Granite polishing', d: 'We restore granite on floors, stairs and kitchen tops.' },
      ],
      links: [
        { label: 'Commercial floor polishing', href: '/services/commercial-floor-polishing-dubai' },
        { label: 'Granite polishing', href: '/services/granite-polishing' },
      ],
    },
    {
      eyebrow: 'How it works',
      h2: 'How to book in Fujairah',
      numbered: true,
      items: [
        { t: 'Tell us where you are', d: 'Call or WhatsApp us with your location. We reply within 30 minutes.' },
        { t: 'Agree a visit', d: 'We give you a time based on our schedule.' },
        { t: 'Free inspection', d: 'We check the stone and give you a fixed price.' },
        { t: 'Finish and handover', d: 'We complete the work and explain the aftercare.' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Questions from Fujairah customers',
      items: [
        { t: 'Do you travel to Khor Fakkan?', d: 'Yes. Share your location and we will confirm a visit time.' },
        { t: 'Does sea air damage marble?', d: 'Humidity and salt can dull the finish over time. Regular cleaning and sealing help.' },
        { t: 'Can you work while a hotel stays open?', d: 'Yes. We can work in sections and plan overnight slots.' },
      ],
    },
  ],
  'location-dibba': [
    {
      eyebrow: 'Dibba homes',
      h2: 'Marble polishing in Dibba for villas and beach homes',
      body: [
        'Dibba sits between the mountains and the sea, and it covers Dibba Al-Fujairah and Dibba Al-Hisn, along with beach properties towards Al Aqah. Many homes here are villas or weekend houses, and they take in a lot of sand, salt and damp air.',
        'Stone near pools and terraces often loses its shine first. Indoors, sand from the beach scratches the floor along the main walkways. For homes used only at weekends, we also see water marks and dull patches from long gaps between cleaning.',
      ],
    },
    {
      eyebrow: 'What we do',
      h2: 'Popular jobs in Dibba',
      items: [
        { t: 'Villa floor polishing', d: 'We bring back the shine in living areas and hallways.' },
        { t: 'Terrace and pool stone', d: 'We clean and seal stone that takes sun, salt and water.' },
        { t: 'Bathroom marble', d: 'We remove water marks and seal wet areas.' },
        { t: 'Yellow stain removal', d: 'We treat yellowing on white marble.' },
      ],
      links: [
        { label: 'Yellow stain removal', href: '/services/yellow-stain-removing' },
        { label: 'Crystallization and sealing', href: '/services/crystallization-sealing' },
      ],
    },
    {
      eyebrow: 'How it works',
      h2: 'How to book in Dibba',
      numbered: true,
      items: [
        { t: 'Message us', d: 'Send your location and a photo. We reply within 30 minutes.' },
        { t: 'Get a visit time', d: 'We confirm a time based on our schedule.' },
        { t: 'Free inspection', d: 'We check the stone and give you a fixed price.' },
        { t: 'Work and aftercare', d: 'We finish the job and show you how to care for the stone.' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Questions from Dibba customers',
      items: [
        { t: 'Can you work while we are away?', d: 'Yes, if someone can give our team access. Agree this with us when you book.' },
        { t: 'Do you cover Al Aqah?', d: 'Yes. Share your location and we will confirm the time.' },
        { t: 'How can I reduce sand damage?', d: 'Use mats at every door and sweep often. Sand scratches marble under shoes.' },
      ],
    },
  ],
  'tile-polishing-dubai': [
    {
      eyebrow: 'What it is',
      h2: 'Tile polishing in Dubai: what can be improved',
      body: [
        'Tiles lose their shine for simple reasons. Sand scratches the surface, cleaning products leave a film, and dirt builds up in the grout. Often the tile is not worn at all. It only needs a deep clean to look bright again.',
        'Where the surface itself has worn, the answer depends on the tile. Polished porcelain and natural stone tiles can usually be polished by machine. Glazed ceramic has a thin coloured layer on top, so heavy polishing could damage it. We check which you have before we start.',
      ],
    },
    {
      eyebrow: 'Tiles we work on',
      h2: 'Which tile floors can we polish?',
      items: [
        { t: 'Polished porcelain', d: 'Common in UAE villas and apartments. Light scratches and dull paths can usually be improved.' },
        { t: 'Matt porcelain', d: 'This tile has no shine to restore, so a deep clean is usually the right job.' },
        { t: 'Glazed ceramic', d: 'We clean it and lift the film, but we cannot replace a glaze that has worn through.' },
        { t: 'Stone tiles', d: 'Marble, granite and travertine tiles get the same care as a stone floor.' },
      ],
      links: [
        { label: 'Floor polishing', href: '/services/floor-polishing-dubai' },
        { label: 'Marble polishing', href: '/services/marble-polishing-dubai' },
      ],
    },
    {
      eyebrow: 'Signs',
      h2: 'When your tiles need attention',
      items: [
        { t: 'Dull walkways', d: 'The floor looks flat in hallways and near doors, while the edges still shine.' },
        { t: 'Dark grout', d: 'Grout lines turn grey or black, and the floor looks dirty even after mopping.' },
        { t: 'Streaks after mopping', d: 'Old cleaner has built up as a film on the tile.' },
        { t: 'Fine scratches', d: 'You can see them when light falls across the floor.' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we polish tile floors',
      numbered: true,
      items: [
        { t: 'Identify the tile', d: 'We test a small area and agree the result you can expect.' },
        { t: 'Deep clean', d: 'We remove dirt and old product film from the tile and the grout.' },
        { t: 'Polish where it helps', d: 'We polish tiles that can take it, and use a gentler method on glazed surfaces.' },
        { t: 'Protect the grout', d: 'We can seal the grout so that it stays cleaner for longer.' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Tile polishing questions',
      items: [
        { t: 'Can you polish every tile?', d: 'No. Some tiles only need cleaning, and a worn glaze cannot be restored. We tell you this at the site visit.' },
        { t: 'Can you clean the grout too?', d: 'Yes. Grout cleaning makes a big difference to how the whole floor looks.' },
        { t: 'Do you work in apartments and offices?', d: 'Yes. We work in homes, offices and shops across the UAE, with the visit time based on our schedule.' },
        { t: 'How should I clean tiles at home?', d: 'Sweep first, then use a mild, neutral cleaner and clean water. Too much product leaves a dull film.' },
      ],
      links: [{ label: 'Get a free quote', href: '/contact' }],
    },
  ],
  'marble-stairs-polishing-dubai': [
    {
      eyebrow: 'What it is',
      h2: 'Why marble stairs need their own approach',
      body: [
        'A staircase takes more wear than most floors, because people step on the same small area every day. The front edge of each tread suffers most. It turns dull first, and it can chip when something heavy hits it.',
        'Stairs also have many small surfaces. Treads, risers, landings and side strips all need work, and large floor machines cannot reach most of them. So much of the job is done with small machines and by hand.',
      ],
    },
    {
      eyebrow: 'Signs',
      h2: 'When your stairs need polishing',
      items: [
        { t: 'Dull centres', d: 'The middle of each step looks matt, while the sides still shine.' },
        { t: 'Chipped edges', d: 'Step edges have small breaks that catch dirt and feet.' },
        { t: 'Scratches on the landing', d: 'Turning on a landing grinds sand into the stone.' },
        { t: 'Marks on risers', d: 'Shoes and cleaning products leave scuffs on the upright faces.' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we polish a staircase',
      numbered: true,
      items: [
        { t: 'Inspect', d: 'We check the stone, the edges and any loose steps, then give you a fixed-price quote.' },
        { t: 'Protect', d: 'We cover the walls, handrails and nearby floors.' },
        { t: 'Repair', d: 'We fill chips and cracks with a colour-matched filler.' },
        { t: 'Polish', d: 'We work step by step through finer diamond pads, and finish the edges by hand.' },
        { t: 'Seal', d: 'We seal the stone, then show you how to clean it safely.' },
      ],
      links: [
        { label: 'Marble polishing', href: '/services/marble-polishing-dubai' },
        { label: 'Scratch and crack repair', href: '/services/marble-scratch-repair-dubai' },
      ],
    },
    {
      eyebrow: 'Safety',
      h2: 'Shine and grip on stairs',
      body: [
        'A high gloss looks good, but polished stone can be slippery, especially when it is wet. On stairs, we talk through the finish with you first. A slightly lower sheen on the treads can be the better choice, above all in homes with children or older family members.',
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Marble stairs polishing questions',
      items: [
        { t: 'Can we keep using the stairs during the work?', d: 'Usually, yes. We work in sections and agree the plan with you, so there is always a way up and down.' },
        { t: 'Do you polish granite stairs too?', d: 'Yes. We polish marble, granite and other stone stairs.' },
        { t: 'Can broken step edges be repaired?', d: 'Most chips can be filled and shaped. A step with a large break may need more work, and we will tell you at the site visit.' },
        { t: 'How should I clean polished stairs?', d: 'Dust them first, then use a damp mop and a pH-neutral cleaner. Make sure the steps are dry before anyone uses them.' },
      ],
    },
  ],
  'marble-table-polishing-dubai': [
    {
      eyebrow: 'What it is',
      h2: 'What marble table polishing can fix',
      body: [
        'A marble table is one of the easiest places to spot damage, because light falls right across it. Lemon, wine, coffee and perfume can all leave dull rings. Hot cups and cleaning sprays can mark it as well.',
        'Most of these marks sit on the surface, so polishing can remove them. Stains that have soaked in are different. They need a stain treatment first, and we test this before we start.',
      ],
    },
    {
      eyebrow: 'Types of table',
      h2: 'Tables we work on',
      items: [
        { t: 'Dining tables', d: 'Large tops with rings, scratches and uneven shine.' },
        { t: 'Coffee tables', d: 'Daily use leaves marks from cups, keys and remote controls.' },
        { t: 'Console and side tables', d: 'Smaller tops with shaped edges, finished by hand.' },
        { t: 'Hotel and restaurant tables', d: 'We can plan the work around your opening hours.' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we polish a marble table',
      numbered: true,
      items: [
        { t: 'Inspect', d: 'We check the stone, marks and edges, and tell you what polishing can fix.' },
        { t: 'Protect the room', d: 'We cover the floor, the table base and nearby furniture.' },
        { t: 'Remove marks', d: 'We treat stains, then polish out rings and scratches with fine diamond pads.' },
        { t: 'Finish the edges', d: 'We work round the edges by hand so that they match the top.' },
        { t: 'Seal', d: 'We seal the top and tell you when you can use it again.' },
      ],
      links: [
        { label: 'Marble countertop polishing', href: '/services/marble-countertop-polishing' },
        { label: 'Etch marks explained', href: '/blog/etch-marks-on-marble-countertops' },
      ],
    },
    {
      eyebrow: 'Daily care',
      h2: 'How to keep a marble table looking good',
      items: [
        { t: 'Use coasters and placemats', d: 'They stop drinks and hot dishes from marking the stone.' },
        { t: 'Wipe spills straight away', d: 'Acid from lemon, wine and vinegar works within minutes.' },
        { t: 'Use mild cleaners', d: 'Warm water and a pH-neutral stone cleaner are enough.' },
        { t: 'Avoid sliding objects', d: 'Grit under a vase or tray scratches the surface.' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Marble table polishing questions',
      items: [
        { t: 'Do you need to take the table away?', d: 'No. We polish it at your home or business.' },
        { t: 'Can you remove every ring?', d: 'Most surface rings come out. Deep stains may fade rather than go completely.' },
        { t: 'Will a polished table stay mark-free?', d: 'No marble does. Sealing helps with stains, but acid can still leave marks, so quick cleaning matters.' },
      ],
    },
  ],
  'grout-joint-repair-dubai': [
    {
      eyebrow: 'What it is',
      h2: 'Why grout and joints fail',
      body: [
        'The lines between tiles take in dirt, water and cleaning products every day. Over time they turn dark, crack or crumble. Because they cover the whole floor, even a clean floor can look tired when the joints are dirty.',
        'Joints also move. If a floor has shifted, or if water has got underneath, the filler can crack again. That is why we look for the cause before we repair anything.',
      ],
    },
    {
      eyebrow: 'Signs',
      h2: 'When your joints need attention',
      items: [
        { t: 'Dark lines', d: 'The grout has soaked up dirt, and mopping no longer helps.' },
        { t: 'Cracked or missing filler', d: 'Gaps open up and collect dirt and water.' },
        { t: 'Loose tile edges', d: 'Broken joints can leave tile edges open to chipping.' },
        { t: 'Damp lines near wet areas', d: 'Showers and kitchens are the first places to check.' },
      ],
    },
    {
      eyebrow: 'Which repair',
      h2: 'Clean, refill or replace?',
      items: [
        { t: 'Deep clean', d: 'For joints that are dirty but still solid.' },
        { t: 'Refill', d: 'For small gaps, where the old filler is sound around them.' },
        { t: 'Remove and replace', d: 'For crumbling or badly stained grout.' },
        { t: 'Fill and polish', d: 'For marble and stone floors, where the joints can be blended into the polished surface.' },
      ],
      links: [
        { label: 'Marble cleaning', href: '/services/marble-cleaning-dubai' },
        { label: 'Tile polishing', href: '/services/tile-polishing-dubai' },
        { label: 'Marble floor restoration', href: '/services/marble-floor-restoration' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we repair joints',
      numbered: true,
      items: [
        { t: 'Find the cause', d: 'We check for movement, damp and old filler, then quote for the agreed work.' },
        { t: 'Clean the lines', d: 'We remove dirt and any loose material.' },
        { t: 'Match the colour', d: 'We choose a filler that suits your floor.' },
        { t: 'Fill and finish', d: 'We fill the joints and finish them level with the surface.' },
        { t: 'Protect', d: 'We seal where it helps, so the joints stay cleaner for longer.' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Grout and joint repair questions',
      items: [
        { t: 'Can you make joints on a marble floor less visible?', d: 'Yes. A colour-matched filler and polishing can make them far less obvious, though natural stone always varies.' },
        { t: 'Do you repair grout in bathrooms?', d: 'Yes. If water is getting behind the tiles, that needs fixing first.' },
        { t: 'Will the new grout match exactly?', d: 'We match it as closely as we can. Old grout can differ in colour, so sometimes the best result comes from renewing a whole area.' },
      ],
    },
  ],
  'limestone-polishing-dubai': [
    {
      eyebrow: 'The stone',
      h2: 'What makes limestone different',
      body: [
        'Limestone is a calcium-based stone, just like marble, so acids such as lemon and vinegar can mark it. It is usually softer and more porous, so it scratches more easily and takes in water and dirt faster.',
        'That means the method matters. Too much pressure can leave marks, and too much water can leave dark patches. We check the stone first and choose the grit and products to suit it.',
      ],
    },
    {
      eyebrow: 'Signs',
      h2: 'Common problems on limestone',
      items: [
        { t: 'Dark, dirty walkways', d: 'Dirt gets into the pores in busy areas.' },
        { t: 'Dull or chalky patches', d: 'Acids and strong cleaners damage the surface.' },
        { t: 'Water marks', d: 'Damp can leave rings and patches on porous stone.' },
        { t: 'Rust marks', d: 'Metal furniture and some cans can leave orange stains.' },
      ],
    },
    {
      eyebrow: 'Finish',
      h2: 'Honed or polished limestone?',
      items: [
        { t: 'Honed', d: 'A soft, natural look that hides marks well. Many limestone floors look best this way.' },
        { t: 'Polished', d: 'More shine, but it shows wear sooner on soft stone.' },
        { t: 'Textured', d: 'A better choice outdoors, where grip matters.' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we restore limestone',
      numbered: true,
      items: [
        { t: 'Check the stone', d: 'We test the finish and stains, then agree the look you want.' },
        { t: 'Clean', d: 'We lift dirt from the surface with stone-safe products.' },
        { t: 'Hone or polish', d: 'We remove wear with diamond pads, and use only as much water as the stone can take.' },
        { t: 'Seal', d: 'We apply a sealer that helps keep water and dirt out.' },
      ],
      links: [
        { label: 'Travertine polishing', href: '/services/travertine-polishing-dubai' },
        { label: 'Crystallization and sealing', href: '/services/crystallization-sealing' },
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Limestone polishing questions',
      items: [
        { t: 'Can limestone be polished like marble?', d: 'Often, but many types are softer and take a lower shine. We test a small area first.' },
        { t: 'Which cleaner is safe?', d: 'Use a pH-neutral stone cleaner. Avoid vinegar, lemon and bathroom sprays.' },
        { t: 'Do you polish limestone outdoors?', d: 'We clean and seal outdoor limestone, and we normally keep a finish with more grip.' },
      ],
    },
  ],
  'mosaic-floor-polishing-dubai': [
    {
      eyebrow: 'What it is',
      h2: 'What makes mosaic floors hard to polish',
      body: [
        'A mosaic is made of many small pieces set close together. Some are marble, some are other stone, and some may be glass or ceramic. Each material wears differently, so one method will not suit them all.',
        'There are also far more joints than on a normal floor. Dirt collects in them, and small pieces can come loose. A careless machine can pull those pieces out, which is why we check the floor closely before we begin.',
      ],
    },
    {
      eyebrow: 'What we restore',
      h2: 'Mosaics we work on',
      items: [
        { t: 'Marble mosaics', d: 'Patterned floors and borders that have lost their shine.' },
        { t: 'Inlays and medallions', d: 'Entrance features with several stone colours.' },
        { t: 'Bathroom mosaics', d: 'Small stone tiles with dirty or damaged joints.' },
        { t: 'Mixed-material floors', d: 'Stone is polished, and glass or glazed pieces are cleaned.' },
      ],
    },
    {
      eyebrow: 'Our process',
      h2: 'How we polish a mosaic',
      numbered: true,
      items: [
        { t: 'Inspect each area', d: 'We identify the materials and check for loose pieces.' },
        { t: 'Repair', d: 'We fix loose pieces and fill open joints where we can.' },
        { t: 'Clean', d: 'We remove dirt from the surface and the joints.' },
        { t: 'Polish the stone', d: 'We use fine pads, and work by hand around detail.' },
        { t: 'Seal', d: 'We seal porous stone and joints.' },
      ],
      links: [
        { label: 'Grout and joint repair', href: '/services/grout-joint-repair-dubai' },
        { label: 'Floor polishing', href: '/services/floor-polishing-dubai' },
      ],
    },
    {
      eyebrow: 'Limits',
      h2: 'What polishing cannot do',
      body: [
        'Glass and glazed pieces cannot be ground like stone, so we clean them instead. Missing pieces can only be matched if similar stone is available. If an old floor has moved or lifted, it may need repair by a tiler first. We tell you all of this at the site visit, before you pay for anything.',
      ],
    },
    {
      eyebrow: 'Questions',
      h2: 'Mosaic floor polishing questions',
      items: [
        { t: 'Can you replace missing pieces?', d: 'Sometimes. It depends on whether a close match is available.' },
        { t: 'Will polishing damage the pattern?', d: 'Not with the right method. We work gently, and test a small area first.' },
        { t: 'Do you work on medallions?', d: 'Yes. Inlays and medallions need careful hand work.' },
      ],
    },
  ],
};
