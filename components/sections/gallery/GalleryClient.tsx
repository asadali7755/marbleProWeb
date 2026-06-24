'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRequestCall } from '@/components/marble/RequestCallModal';
import { marbleSvg } from '@/components/marble/marbleSvg';
import { WA_LINK } from '@/components/marble/constants';
import { PageFaqCta } from '@/components/marble/FaqCta';
import RealProjects from './RealProjects';
import ShowcaseVideo from './ShowcaseVideo';

interface Project { city: string; spec: string; hue: number; vein: number; }
interface GalleryItem {
  slug: string; num: string; name: string; kw: string; h2: string;
  intro: string; body: string; projects: Project[]; meta: string[];
}

const GALLERY: GalleryItem[] = [
  { slug:'travertine-polishing-dubai', num:'01', name:'Travertine Polishing', kw:'travertine polishing dubai · travertine restoration uae', h2:'Travertine polishing Dubai — void filling, honing & crystallization',
    intro:'Travertine is the most widely used natural stone in UAE villas and hotel lobbies. Its natural holes and warm cream tones make it instantly recognisable — but without proper void filling and sealing, travertine deteriorates fast under foot traffic.',
    body:'Our travertine polishing Dubai process fills every natural void with colour-matched epoxy, grinds the surface flat, hones to the desired grit and finishes with Italian crystallization. The result: a warm, mirror-polished travertine floor that looks better than new.',
    projects:[{city:'Dubai Marina villa',spec:'Travertine floor · 280 m²',hue:44,vein:0.14},{city:'Abu Dhabi palace',spec:'Corridor travertine · 190 m²',hue:46,vein:0.12},{city:'Sharjah heritage hotel',spec:'Lobby travertine · 320 m²',hue:42,vein:0.16}],
    meta:['Void & pore filling','Lippage grinding','Italian crystallization','Breathable sealing']},

  { slug:'onyx-marble-polishing-dubai', num:'02', name:'Onyx Polishing', kw:'onyx marble polishing dubai · onyx restoration uae', h2:'Onyx marble polishing Dubai — ultra-delicate, ultra-premium stone',
    intro:'Onyx is the rarest and most visually dramatic stone installed in UAE luxury properties. Its translucency and bold veining command premium value — but a single wrong abrasive pass can permanently damage its surface. We treat every onyx job as the investment it is.',
    body:'Our onyx marble polishing Dubai team starts no coarser than 400 grit and works through ultra-fine sequences to erase etch marks and dull patches while preserving full translucency. Backlit feature panels are restored so light passes through evenly again.',
    projects:[{city:'Palm Jumeirah feature wall',spec:'Backlit onyx panel · 18 m²',hue:15,vein:0.42},{city:'DIFC penthouse',spec:'Onyx bathroom walls · 32 m²',hue:12,vein:0.38},{city:'Abu Dhabi presidential suite',spec:'Onyx vanity & floor · 24 m²',hue:18,vein:0.40}],
    meta:['Ultra-fine 400+ grit','Translucency preserved','Backlit panel restore','Crack stabilisation']},

  { slug:'crema-marfil-polishing-dubai', num:'03', name:'Crema Marfil Polishing', kw:'crema marfil polishing dubai · crema marfil restoration uae', h2:"Crema Marfil polishing Dubai — UAE's most installed marble restored",
    intro:"Crema Marfil is installed in more UAE villas and apartments than any other marble. Its warm cream tones with subtle golden veining defined a generation of UAE luxury interiors — but years of sand abrasion and harsh cleaning dull its surface significantly.",
    body:"Our Crema Marfil polishing Dubai process removes deep scratches, reverses etch marks and acid damage, corrects yellow discolouration and seals with an impregnating breathable sealer. The warm cream glow that made this marble iconic comes back completely.",
    projects:[{city:'Mirdif villa',spec:'Crema Marfil floors · 350 m²',hue:40,vein:0.13},{city:'Al Barsha complex',spec:'Corridor & lobby · 220 m²',hue:38,vein:0.15},{city:'Ajman beachfront villa',spec:'Full restoration · 180 m²',hue:42,vein:0.11}],
    meta:['Etch & acid reversal','Yellow tone correction','Pore sealing','Grout line cleaning']},

  { slug:'calacatta-marble-polishing-dubai', num:'04', name:'Calacatta Polishing', kw:'calacatta marble polishing dubai · calacatta restoration uae', h2:"Calacatta marble polishing Dubai — Italy's finest stone, precision restored",
    intro:"Calacatta marble commands the highest price per square metre of any natural stone in UAE. Its pure white background and bold grey-gold veining make every slab unique — and every scratch or etch immediately visible. Precision is not optional.",
    body:"We restore Calacatta's pure white tone, remove water rings, citrus hazes and dull patches with ultra-fine diamond sequences that leave bold vein patterns completely undisturbed. Bookmatched feature slabs are polished as a unit so veining alignment is maintained.",
    projects:[{city:'Emirates Hills mansion',spec:'Calacatta villa floor · 400 m²',hue:30,vein:0.36},{city:'DIFC penthouse kitchen',spec:'Calacatta island & counters · 12 m²',hue:28,vein:0.38},{city:'Abu Dhabi Corniche',spec:'Feature wall panels · 40 m²',hue:32,vein:0.34}],
    meta:['White tone restoration','Vein pattern intact','Anti-stain sealing','Book-match care']},

  { slug:'emperador-marble-polishing-dubai', num:'05', name:'Emperador Polishing', kw:'emperador marble polishing dubai · emperador restoration uae', h2:'Emperador marble polishing Dubai — rich dark stone, deep gloss restored',
    intro:"Emperador is Spain's most celebrated dark marble — a rich chocolate-brown stone with striking white veining, widely used in UAE luxury bathrooms, staircases and feature walls. Its dense structure polishes to one of the highest gloss readings possible in natural stone.",
    body:"Our Emperador marble polishing Dubai process restores the deep chocolate tones, removes calcium deposits and white water marks that show clearly on the dark surface, and applies a colour-enhancing sealer that deepens the brown tones while blocking moisture in wet areas.",
    projects:[{city:'Jumeirah villa bathrooms',spec:'Emperador floor & walls · 85 m²',hue:22,vein:0.28},{city:'Dubai Hills estate',spec:'Staircase & landing · 60 m²',hue:20,vein:0.30},{city:'Sharjah luxury apartment',spec:'Master bath · 28 m²',hue:24,vein:0.26}],
    meta:['Calcium deposit removal','Chocolate tone revival','90+ GU gloss','Wet-area marine seal']},

  { slug:'marble-polishing-dubai', num:'06', name:'Marble Polishing', kw:'marble polishing dubai · marble floor polishing', h2:'Marble polishing Dubai — mirror finishes for villas & towers',
    intro:'Heavy foot traffic, desert sand and casual maintenance all dull marble over time. Our diamond polishing process — 50 to 3000 grit, then Italian crystallization — restores the deep, glass-like reflection your stone had on day one.',
    body:'These before & after slides are real Dubai villa floors, photographed under identical daylight. Move the handle to see how dramatically marble polishing Dubai can transform a tired floor without replacement cost.',
    projects:[{city:'Palm Jumeirah',spec:'Carrara marble · 240 m²',hue:32,vein:0.22},{city:'Emirates Hills',spec:'Crema Marfil · 180 m²',hue:38,vein:0.18},{city:'Downtown Dubai',spec:'Botticino marble · 95 m²',hue:28,vein:0.25}],
    meta:['1-2 day completion','Dust-free wet process','85+ GU gloss guaranteed','Free on-site inspection']},
  { slug:'marble-floor-restoration', num:'07', name:'Floor Restoration', kw:'marble floor restoration services · floor restoration services', h2:'Marble floor restoration services — even severely damaged stone',
    intro:'Cracked, etched, deeply yellowed marble can be brought back without replacement. We do color-matched epoxy crack filling, lippage grinding, acid-etch reversal — then full re-polish.',
    body:'Property managers across Dubai, Abu Dhabi and Sharjah call us for emergency residential marble floor restoration services. Most jobs are walk-on-ready within 24 hours.',
    projects:[{city:'Saadiyat Island',spec:'Severe lippage & cracks · 320 m²',hue:30,vein:0.30},{city:'Abu Dhabi Corniche',spec:'Acid-etched lobby · 80 m²',hue:36,vein:0.22},{city:'Sharjah villa',spec:'Full restoration · 12 years old',hue:24,vein:0.28}],
    meta:['Crack & chip filling','Lippage leveling','Acid-etch reversal','Written guarantee']},
  { slug:'marble-countertop-polishing', num:'08', name:'Countertop Polishing', kw:'premium marble countertop polishing Dubai · kitchen top polishing and sealing services UAE', h2:'Premium marble countertop polishing Dubai & kitchen top sealing UAE',
    intro:'Kitchen counters and bathroom vanities face daily exposure to oils, acids, water and heat. Our premium marble countertop polishing Dubai service buffs the surface back, removes burns and rings, then applies a food-safe sealant — same-day kitchen top polishing and sealing services UAE-wide.',
    body:'Edges, cut-outs and undermount sinks are hand-polished separately so the join is invisible. We also offer Corian countertop polishing and scratch repair Dubai — even kitchen islands stay seamless from above and below.',
    projects:[{city:'Marina apartment',spec:'Carrara kitchen island · 6 m²',hue:38,vein:0.18},{city:'DIFC penthouse',spec:'Black marble vanity · 4 m²',hue:18,vein:0.30},{city:'Jumeirah villa',spec:'Bathroom counter set · 8 m²',hue:42,vein:0.16}],
    meta:['Half-day completion','Food-safe sealer','Edge hand-polish','Burn & ring removal']},
  { slug:'terrazzo-polishing-dubai', num:'09', name:'Terrazzo Polishing', kw:'terrazzo polishing dubai · terrazzo floor polishing dubai', h2:'Terrazzo polishing Dubai — vintage and modern terrazzo restored',
    intro:'Terrazzo is having a major moment in UAE architecture, and even decades-old terrazzo can be revived. Our terrazzo floor polishing Dubai process exposes the aggregate sharply, evens the cement matrix and seals it for daily commercial use.',
    body:'We service heritage buildings in Sharjah, lobby floors in Dubai and modern villa entrances across the country. Same machinery, gentler technique for older buildings.',
    projects:[{city:'Sharjah Corniche',spec:"1980s lobby · 90 m²",hue:45,vein:0.18},{city:'Dubai office tower',spec:'Modern terrazzo · 220 m²',hue:50,vein:0.15},{city:'Abu Dhabi heritage',spec:'Restoration · 140 m²',hue:40,vein:0.20}],
    meta:['Aggregate revealed','Matrix sealed','Commercial-scale','Heritage-safe']},
  { slug:'granite-polishing', num:'10', name:'Granite Polishing', kw:'granite polishing · floor polishing dubai', h2:'Commercial granite polishing services Dubai',
    intro:"Granite is harder than marble — generic polishing pads simply skid. We use industrial-grade diamond discs and heavy machinery to deliver mirror-like granite gloss for villas, retail and hotels.",
    body:'Slip-safe finish, weatherproof seal for outdoor areas, and annual maintenance contracts for commercial buildings. Saadiyat Island and Yas Island resorts are regular clients.',
    projects:[{city:'DIFC reception',spec:'Black granite · 60 m²',hue:18,vein:0.30},{city:'Al Barsha staircase',spec:'Granite stairs · 40 steps',hue:22,vein:0.26},{city:'Saadiyat villa',spec:'Outdoor patio · 180 m²',hue:24,vein:0.24}],
    meta:['Industrial diamond discs','Slip-safe finish','Weather-proof seal','AMC available']},
  { slug:'quartz-polishing', num:'11', name:'Quartz Polishing', kw:'quartz polishing and stain protection Abu Dhabi · quartz polishing Dubai', h2:'Quartz polishing and stain protection Abu Dhabi & Dubai',
    intro:"Engineered quartz contains resin binders that need low-heat technique — the wrong tool melts or burns the surface permanently. Our quartz polishing and stain protection Abu Dhabi service buffs out scratches and dull spots without damaging the binder.",
    body:'Available UAE-wide — quartz polishing for new installations includes a stain-block resin sealer protecting against wine, oil and curry for 12+ months.',
    projects:[{city:'Marina kitchen',spec:'White quartz island · 5 m²',hue:50,vein:0.15},{city:'JBR apartment',spec:'Quartz vanity tops · 7 m²',hue:55,vein:0.12},{city:'Business Bay',spec:'Quartz reception · 14 m²',hue:48,vein:0.16}],
    meta:['Low-heat technique','Stain-block sealer','No etching','Same-day']},
  { slug:'corian-countertop-polishing', num:'12', name:'Corian Countertop Polishing', kw:'corian countertop polishing', h2:'Corian countertop polishing & scratch repair Dubai',
    intro:'Corian is a craftsman\'s surface — every scratch, burn, even small hole can be sanded out by hand and refinished invisibly. Our hand-polished Corian process restores worn surfaces to look completely brand new.',
    body:'We also repair integrated Corian sinks, lifted seams and yellowed joins on the original installations.',
    projects:[{city:'Jumeirah villa',spec:'Corian kitchen · 12 m²',hue:42,vein:0.10},{city:'Sharjah office',spec:'Reception desk · 8 m²',hue:38,vein:0.12},{city:'Mirdif home',spec:'Bathroom vanity · 4 m²',hue:46,vein:0.08}],
    meta:['Hand-sanded fine grit','Matte / satin / gloss','Seam repair','Sink burns fixed']},
  { slug:'yellow-stain-removing', num:'13', name:'Yellow Stain Removing', kw:'yellow stain removing', h2:'Professional yellow stain removing for natural stone UAE',
    intro:'Yellow stains on marble come from iron oxidation, organic seepage or improper chemicals — and they go deep. Bleach and acid only set them in. Our chemical poultice draws the pigment out over 24-48 hours.',
    body:"Diagnosis first — iron, organic, oil, biological — then a stain-specific poultice. Then re-polish so you'd never know it was there.",
    projects:[{city:'Mirdif villa',spec:'Decade-old yellowing · 80 m²',hue:48,vein:0.16},{city:'Abu Dhabi kitchen',spec:'Oil & turmeric stains',hue:46,vein:0.18},{city:'Al Barsha bath',spec:'Rust around fixtures',hue:30,vein:0.20}],
    meta:['Stain-type diagnosis','Drawn out, not bleached','24-48 hr cycle','Re-polish included']},
  { slug:'kitchen-top-polishing', num:'14', name:'Kitchen Top Polishing', kw:'kitchen top polishing', h2:'Kitchen top polishing & sealing services UAE',
    intro:'Kitchen counters are the most punished surface in your home. Kitchen top polishing with food-safe sealing protects against the next decade of cooking — oil-, water- and heat-resistant.',
    body:'Available for marble, granite, quartz, Corian, terrazzo and engineered stone tops. Half-day turnaround, cook on it the same evening.',
    projects:[{city:'Damac Hills villa',spec:'Marble counter + island · 14 m²',hue:38,vein:0.18},{city:'Arabian Ranches',spec:'Granite kitchen top · 9 m²',hue:22,vein:0.26},{city:'Sharjah Al Khan',spec:'Quartz waterfall · 8 m²',hue:52,vein:0.14}],
    meta:['Hydrophobic sealer','Half-day done','Edge & splash polish','Cook same night']},
  { slug:'crystallization-sealing', num:'15', name:'Crystallization & Sealing', kw:'marble polishing dubai · floor restoration services', h2:'Italian crystallization & breathable sealing',
    intro:'After polishing, the right sealant is what makes the finish last 5 years instead of 5 months. Italian diamond crystallization creates a microscopic, chemically-bonded shield — not a wax film.',
    body:'Mirror-reflective, slip-resistant, durable under heavy foot traffic — the gold-standard finish for luxury villas, hotels and showrooms.',
    projects:[{city:'Palm Jumeirah',spec:'Italian crystallization · 280 m²',hue:36,vein:0.22},{city:'Yas Island resort',spec:'Lobby crystallization · 420 m²',hue:32,vein:0.20},{city:'Sharjah showroom',spec:'Retail crystallization · 160 m²',hue:40,vein:0.18}],
    meta:['Real chemical bond','Mirror-reflective','Slip-resistant','Multi-year shine']},
];

// Real before/after job photos wired into the most relevant gallery sliders.
// Files in /public/images/gallery/<prefix>-before.webp + -after.webp
const REAL_BA: Record<string, string> = {
  'marble-polishing-dubai':           'marble-villa',
  'marble-countertop-polishing':      'ba2',
  'marble-floor-restoration':         'ba3',
  'kitchen-top-polishing':            'ba4',
  'yellow-stain-removing':            'ba5',
  'crystallization-sealing':          'ba6',
  'travertine-polishing-dubai':       'travertine',
  'calacatta-marble-polishing-dubai': 'calacatta',
  'granite-polishing':                'granite',
  'terrazzo-polishing-dubai':         'terrazzo',
  'crema-marfil-polishing-dubai':     'whitemarble',
  'onyx-marble-polishing-dubai':      'onyx',
  'emperador-marble-polishing-dubai': 'emperador',
  'quartz-polishing':                 'quartz',
  'corian-countertop-polishing':      'corian',
};

interface RealPair { before: string; after: string; alt: string; }

// Real process videos per service — shown in place of the before/after slider.
interface SvcVideo { mp4: string; poster: string; name: string; description: string; }
const SERVICE_VIDEOS: Record<string, SvcVideo> = {
  'travertine-polishing-dubai': {
    mp4: '/videos/travertine-polishing-dubai-process.mp4?v=2',
    poster: '/videos/travertine-polishing-dubai-process-poster.jpg?v=2',
    name: 'Travertine Polishing in a Dubai Villa — MarblePro UAE',
    description: 'Travertine floor polished and crystallized to a high-gloss mirror finish in a Dubai villa by MarblePro — void filling, honing and crystallization.',
  },
  'onyx-marble-polishing-dubai': {
    mp4: '/videos/onyx-marble-polishing-dubai-process.mp4',
    poster: '/videos/onyx-marble-polishing-dubai-process-poster.jpg',
    name: 'Onyx Marble Polishing in a Dubai Villa — MarblePro UAE',
    description: 'MarblePro polishing onyx and dark marble to a deep, high-gloss mirror finish on a real Dubai villa project.',
  },
  'calacatta-marble-polishing-dubai': {
    mp4: '/videos/calacatta-marble-polishing-dubai-process.mp4',
    poster: '/videos/calacatta-marble-polishing-dubai-process-poster.jpg',
    name: 'Calacatta Marble Polishing in a Dubai Villa — MarblePro UAE',
    description: 'MarblePro polishing a white Calacatta marble floor to a pure, high-gloss mirror finish in a Dubai villa.',
  },
  'crema-marfil-polishing-dubai': {
    mp4: '/videos/crema-marfil-polishing-dubai-process.mp4',
    poster: '/videos/crema-marfil-polishing-dubai-process-poster.jpg',
    name: 'Crema Marfil Marble Polishing & Decorative Inlay — MarblePro UAE',
    description: 'MarblePro restoring a cream Crema Marfil marble floor with decorative inlay to a high-gloss finish in a Dubai villa.',
  },
  'marble-polishing-dubai': {
    mp4: '/videos/marble-polishing-results-dubai.mp4',
    poster: '/videos/marble-polishing-results-dubai-poster.jpg',
    name: 'Marble Polishing Results in a Dubai Villa — MarblePro UAE',
    description: 'A real MarblePro project: a marble floor polished to a deep mirror gloss in a Dubai villa.',
  },
  'marble-floor-restoration': {
    mp4: '/videos/marble-floor-restoration-process.mp4',
    poster: '/videos/marble-floor-restoration-process-poster.jpg',
    name: 'Marble Floor Restoration in a Dubai Villa — MarblePro UAE',
    description: 'MarblePro restoring a marble floor to a flawless high-gloss finish in a Dubai villa.',
  },
  'crystallization-sealing': {
    mp4: '/videos/marble-polishing-process-closeup-dubai.mp4',
    poster: '/videos/marble-polishing-process-closeup-dubai-poster.jpg',
    name: 'Marble Crystallization & Sealing — MarblePro UAE',
    description: 'MarblePro crystallizing and sealing marble to a durable mirror finish on a real Dubai project.',
  },
};

// Service video that autoplays (muted) when scrolled into view and pauses when out — no play button.
function ScrollVideo({ video }: { video: SvcVideo }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.play().catch(() => {}); }
        else { el.pause(); }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div style={{ aspectRatio: '5/4', borderRadius: 22, overflow: 'hidden', boxShadow: '0 20px 60px rgba(11,11,11,0.22)', background: '#1a1410' }}>
      <video ref={ref} muted loop playsInline preload="none" poster={video.poster}
        aria-label={video.name} title={video.name}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
        <source src={video.mp4} type="video/mp4" />
      </video>
    </div>
  );
}

function BeforeAfterSlider({ projects, activeIdx, onSelect, real }: { projects: Project[]; activeIdx: number; onSelect: (i: number) => void; real?: RealPair }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const onMove = (e: MouseEvent | TouchEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : e.clientX) - r.left;
    setPos(Math.max(0, Math.min(100, (x / r.width) * 100)));
  };
  useEffect(() => {
    setPos(50);
  }, [activeIdx]);
  useEffect(() => {
    const m = (e: MouseEvent | TouchEvent) => dragging.current && onMove(e);
    const stop = () => { dragging.current = false; };
    window.addEventListener('mousemove', m as EventListener);
    window.addEventListener('touchmove', m as EventListener);
    window.addEventListener('mouseup', stop);
    window.addEventListener('touchend', stop);
    return () => {
      window.removeEventListener('mousemove', m as EventListener);
      window.removeEventListener('touchmove', m as EventListener);
      window.removeEventListener('mouseup', stop);
      window.removeEventListener('touchend', stop);
    };
  }, []);
  const p = projects[activeIdx];
  const before = marbleSvg({ dull: true,  hue: p.hue, vein: p.vein });
  const after  = marbleSvg({ dull: false, hue: p.hue, vein: p.vein });
  return (
    <div>
      <div className="g-ba" ref={ref}
        style={{ '--pos': `${pos}%` } as React.CSSProperties}
        onMouseDown={(e) => { dragging.current = true; onMove(e.nativeEvent); }}
        onTouchStart={(e) => { dragging.current = true; onMove(e.nativeEvent); }}
      >
        {real ? (
          <>
            <img className="pane before" src={real.before} alt={`${real.alt} — before polishing`} loading="lazy" decoding="async" />
            <img className="pane after"  src={real.after}  alt={`${real.alt} — after MarblePro polishing`} loading="lazy" decoding="async" />
          </>
        ) : (
          <>
            <div className="pane before" style={{ backgroundImage: `url("${before}")` }} />
            <div className="pane after"  style={{ backgroundImage: `url("${after}")` }} />
          </>
        )}
        <div className="g-ba-handle">
          <div className="grip">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 3 12 9 18"/><polyline points="15 6 21 12 15 18"/></svg>
          </div>
        </div>
        <span className="g-ba-tag b">Before</span>
        <span className="g-ba-tag a">After · MarblePro</span>
      </div>
      {!real && (
        <div className="g-thumbs">
          {projects.map((proj, i) => {
            const thumb = marbleSvg({ dull: false, hue: proj.hue, vein: proj.vein });
            return (
              <button key={i} className={`g-thumb ${activeIdx === i ? 'active' : ''}`}
                onClick={() => onSelect(i)}
                style={{ backgroundImage: `url("${thumb}")`, border: 'none' }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6))' }} />
                <span className="tn">{proj.city}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function GallerySection({ s, even, total }: { s: GalleryItem; even: boolean; total: number }) {
  const { open } = useRequestCall();
  const [idx, setIdx] = useState(0);
  const baPrefix = REAL_BA[s.slug];
  const real: RealPair | undefined = baPrefix
    ? {
        before: `/images/gallery/${baPrefix}-before.webp`,
        after: `/images/gallery/${baPrefix}-after.webp`,
        alt: `${s.name} in ${s.projects[0].city}, UAE — real MarblePro project`,
      }
    : undefined;
  const video = SERVICE_VIDEOS[s.slug];
  return (
    <div className="g-section-wrap" style={{ background: even ? 'var(--paper2)' : 'var(--paper)' }}>
      <section className="g-section" id={s.slug} data-screen-label={`gallery-${s.slug}`}>
        <div className="g-grid">
          <div className="g-content">
            <span className="gnum">— {s.num} / {total}</span>
            <span className="gkw">{s.kw}</span>
            <h2>{s.h2}</h2>
            <p style={{ fontFamily: 'var(--display)', fontWeight: 380, fontSize: 20, lineHeight: 1.4, letterSpacing: '-0.01em', opacity: 1 }}>{s.intro}</p>
            <p>{s.body}</p>
            <div className="gproject">
              <span className="lbl">Featured project · {s.projects[idx].city}</span>
              <p>{s.projects[idx].spec}</p>
            </div>
            <div className="meta-row">
              {s.meta.map((m, i) => <span key={i}>{m}</span>)}
            </div>
            <div className="gbtns">
              <Link className="btn btn-primary" href={`/services/${s.slug}`}>
                Read about {s.name}
                <span className="arr"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
              </Link>
              <button className="btn btn-secondary" onClick={open}>Quote this job</button>
            </div>
          </div>
          <div className="g-media">
            {video ? (
              <>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  '@context': 'https://schema.org', '@type': 'VideoObject',
                  name: video.name, description: video.description,
                  thumbnailUrl: `https://www.marblepro.ae${video.poster}`,
                  contentUrl: `https://www.marblepro.ae${video.mp4}`, uploadDate: '2026-06-24',
                  publisher: { '@type': 'Organization', name: 'MarblePro UAE', logo: { '@type': 'ImageObject', url: 'https://www.marblepro.ae/raw/twittercard.jpg' } },
                }) }} />
                <ScrollVideo video={video} />
              </>
            ) : (
              <BeforeAfterSlider projects={s.projects} activeIdx={idx} onSelect={setIdx} real={real} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function GalleryRail() {
  const [active, setActive] = useState(GALLERY[0].slug);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-40% 0px -50% 0px' }
    );
    GALLERY.forEach((g) => { const el = document.getElementById(g.slug); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <nav className="g-rail" aria-label="Gallery sections">
      <div className="g-rail-inner">
        {GALLERY.map((g) => (
          <a key={g.slug} href={`#${g.slug}`} className={active === g.slug ? 'active' : ''}>{g.name}</a>
        ))}
      </div>
    </nav>
  );
}

export default function GalleryClient() {
  return (
    <>
      <ShowcaseVideo />
      <section className="g-hero marble-bg" data-screen-label="gallery-hero">
        <div className="marble-veins" />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span className="eyebrow-pill"><span className="pulse" /> Before &amp; after · 45 real UAE projects</span>
          <h1>Before &amp; After: Real <em>Marble Polishing</em> &amp; Floor Restoration Results — <em>Dubai &amp; UAE.</em></h1>
          <p className="lead">
            Professional yellow stain removing for natural stone UAE, deep scratch removal and marble crack filling Dubai,
            Italian marble polishing and crystallization — real before &amp; after results across all 7 emirates.
            Same stone, same lighting, same camera — only the finish has changed.
          </p>
          <div className="gstats">
            <div className="gstat"><div className="n"><em>15</em></div><div className="l">Services covered</div></div>
            <div className="gstat"><div className="n"><em>45</em></div><div className="l">Projects displayed</div></div>
            <div className="gstat"><div className="n"><em>7</em></div><div className="l">Emirates served</div></div>
            <div className="gstat"><div className="n">85+ GU</div><div className="l">Average gloss reading</div></div>
          </div>
        </div>
      </section>
      <RealProjects />
      <GalleryRail />
      {GALLERY.map((s, i) => <GallerySection key={s.slug} s={s} even={i % 2 !== 0} total={GALLERY.length} />)}
      <PageFaqCta />
    </>
  );
}
