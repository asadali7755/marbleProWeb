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
        { t: 'How is it priced?', d: 'By area and condition. The site visit is free, and you receive a fixed price.' },
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
      h2: 'Marble stain removal: why stains need the right treatment',
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
        'At MarblePro, the site visit is free, the quote is fixed for the agreed scope and our work comes with a 1-month written guarantee. We use diamond pads up to 3000 grit, Italian crystallization and a dust-free wet process.',
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
        { label: 'Yellow stain removing', href: '/services/yellow-stain-removing' },
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
        { t: 'Yellow stain removing', d: 'Treats yellowing and deep stains on pale marble.' },
      ],
      links: [
        { label: 'Marble polishing', href: '/services/marble-polishing-dubai' },
        { label: 'Terrazzo polishing', href: '/services/terrazzo-polishing-dubai' },
        { label: 'Marble scratch and crack repair', href: '/services/marble-scratch-repair-dubai' },
      ],
    },
    {
      eyebrow: 'How to book',
      h2: 'How to book in Sharjah',
      body: [
        'Call or WhatsApp a photo of your floor. We then visit for free, confirm the stone and give you a fixed price for the agreed work. Our work comes with a 1-month written guarantee.',
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
        { label: 'Yellow stain removing', href: '/services/yellow-stain-removing' },
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
        'The price depends on the size of the area, the condition of the stone and how easy it is to reach. A single bathroom and a full villa floor are very different jobs, so we do not quote one flat rate for everything. The site visit is free, and you get a fixed price for the agreed work before anything starts.',
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
      links: [{ label: 'How to remove yellow stains from marble', href: '/blog/how-to-remove-yellow-stains-from-marble' }],
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
        'Stone floor polishing is usually priced by the square metre. The rate depends on the stone, its condition, the area and the finish you want. That is why we check the floor first. The site visit is free, and your fixed price covers the agreed scope.',
      ],
      links: [{ label: 'Marble polishing cost guide', href: '/blog/marble-polishing-cost-dubai' }],
    },
    {
      eyebrow: 'Questions',
      h2: 'Floor polishing questions from Dubai customers',
      items: [
        { t: 'How long does it take?', d: 'A standard villa living area typically takes 1 to 2 days. We confirm the time with your quote.' },
        { t: 'Will my home be full of dust?', d: 'No. We use a wet process, so marble dust does not spread through your home.' },
        { t: 'Do you offer same-day service?', d: 'Same-day or next-day work may be available for urgent residential jobs. Call us to check.' },
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
        { label: 'Yellow stain removing', href: '/services/yellow-stain-removing' },
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
        'Restoration costs more per square metre than a standard polish because there is more work in it. The price depends on the floor area, the number of cracks and chips, how much grinding the tiles need and the finish you want. That is why we inspect first instead of quoting blind.',
        'The site visit is free, and you receive a fixed price for the agreed scope. Your restored floor is covered by a 1-month written guarantee.',
      ],
      links: [{ label: 'Marble polishing and restoration cost guide', href: '/blog/marble-polishing-cost-dubai' }],
    },
    {
      eyebrow: 'Homes and businesses',
      h2: 'Residential and commercial floor restoration in Dubai',
      body: [
        'We restore marble floors in villas and apartments, as well as hotels, offices, lobbies and showrooms. Emergency residential work is available same-day or next-day. For commercial floor restoration in Dubai, we can plan overnight and weekend work so your business keeps running.',
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
      links: [{ label: 'How often should marble be polished?', href: '/blog/how-often-polish-marble-floors-dubai' }],
    },
  ],
};
