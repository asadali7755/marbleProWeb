'use client';
import React from 'react';
import Link from 'next/link';
import { useRequestCall } from '@/components/marble/RequestCallModal';
import { marbleSvg } from '@/components/marble/marbleSvg';
import { PHONE_DISPLAY, PHONE_TEL, WA_LINK } from '@/components/marble/constants';

interface Feat { t: string; d: string; }
interface ServiceDetail {
  num: string; slug: string; name: string; h2: string; kw: string;
  hue: number; vein: number; intro: string; body: string[]; feat: Feat[];
}

const SERVICE_DETAIL: ServiceDetail[] = [
  { num:'01', slug:'marble-polishing-dubai', name:'Marble Polishing Dubai', h2:'Premium Marble Polishing in Dubai & UAE', kw:'marble polishing dubai · marble floor polishing', hue:32, vein:0.22,
    intro:'Over time, heavy foot traffic and desert sand cause marble to lose its luster. Our multi-stage diamond marble polishing Dubai process restores a high-gloss, premium reflective finish to the floors, walls and stairs of luxury villas and commercial buildings.',
    body:['MarblePro is the best marble polishing company in Dubai for Italian Carrara, Botticino, Crema Marfil and locally-sourced natural stone. Our certified technicians grind, hone and polish with successive diamond pads from 50 to 3000 grit — then lock the result in with Italian diamond crystallization for a finish that lasts for years.','Whether you need affordable marble floor polishing for an apartment or full marble polishing and crystallization for a villa, we provide a free on-site inspection and a transparent fixed-price quote.'],
    feat:[{t:'Diamond grinding 50–3000 grit',d:'Lippage flattened, scratches erased, gloss meter reads 85+ GU.'},{t:'Italian crystallization seal',d:'Mirror finish chemically bonded into the stone, not just waxed on top.'},{t:'Dust-free wet process',d:"We never leave your villa or office covered in marble dust."},{t:'Same-day completion',d:'Most living-area floors completed in 8–14 hours of on-site work.'}]},
  { num:'02', slug:'marble-floor-restoration', name:'Marble Floor Restoration Services', h2:'Marble Floor Restoration Services Dubai', kw:'floor restoration services · marble floor restoration services', hue:28, vein:0.20,
    intro:"Cracked, etched, deep-scratched or completely yellowed marble? Our marble floor restoration services bring even the most neglected stone back to showroom condition — without ripping it out.",
    body:['Emergency residential marble floor restoration services Dubai is one of our most-requested treatments. We perform color-matched epoxy crack filling, joint leveling, deep scratch removal and acid-etch reversal — followed by full diamond polishing and crystallization.','Our floor restoration services are designed for the long haul: properly restored marble holds its shine for years with minimal maintenance, saving you the cost of full replacement.'],
    feat:[{t:'Color-matched epoxy crack filling',d:'Cracks and chips become invisible after re-polishing.'},{t:'Lippage & joint leveling',d:'We grind down uneven tiles for a perfectly flat plane.'},{t:'Acid & etch reversal',d:'Removes citrus, wine and cleaning-product damage.'},{t:'Re-polish & crystallize',d:'The final finish matches new — backed by a written guarantee.'}]},
  { num:'03', slug:'marble-countertop-polishing', name:'Countertop Polishing', h2:'Premium Marble Countertop Polishing Dubai', kw:'countertop polishing · kitchen top polishing', hue:38, vein:0.18,
    intro:'Kitchen counters and bathroom vanities face constant exposure to oils, acids, water marks and heat. We provide specialised countertop polishing and food-safe sealing to protect your investment.',
    body:['Premium marble countertop polishing Dubai is delivered with low-profile machinery that fits around your fitted cabinetry — no need to dismantle anything. Edges, splashbacks and undermount cut-outs are hand-polished separately for a flawless seam.','Our countertop polishing service is also available for marble, granite and quartz vanity tops, kitchen islands and bar counters.'],
    feat:[{t:'Edge & splash-back hand polish',d:"Where machines can't reach, our technicians work by hand."},{t:'Food-safe sealer',d:'Hydrophobic, FDA-approved — safe for direct food contact.'},{t:'Burn & ring removal',d:'Hot pan and glass-ring marks lifted and re-polished.'},{t:'Half-day turnaround',d:'Typical kitchen counter done in 4–6 hours.'}]},
  { num:'04', slug:'terrazzo-polishing-dubai', name:'Terrazzo Polishing Dubai', h2:'Terrazzo Floor Polishing Dubai — Vintage & Modern', kw:'terrazzo polishing dubai · terrazzo floor polishing dubai', hue:45, vein:0.18,
    intro:'Terrazzo is back in style across UAE architecture — and old terrazzo can be restored to a finish more beautiful than the day it was poured. We specialise in terrazzo polishing in Dubai for heritage buildings, modern villas and commercial lobbies.',
    body:['Our terrazzo floor polishing Dubai process uses fine diamond pads to smoothly level out cracks and expose the beautiful, sparkling marble and glass aggregate beneath. Aggregate colours come back vivid, and the cement matrix gets a deep, even sheen.','Whether you\'re asking for terrazzo polishing Dubai price for a 50 m² lobby or a 2,000 m² heritage hall, we provide an upfront fixed quote with no surprises.'],
    feat:[{t:'Aggregate revealed sharply',d:'Successive grits expose marble and glass chips at perfect plane.'},{t:'Cement matrix sealed',d:'Prevents future yellowing and porosity in the binder.'},{t:'Commercial-scale machinery',d:'Heavy diamond grinders make short work of 1,000+ m² jobs.'},{t:'Heritage-safe technique',d:'We assess original mix before polishing — no irreversible removal.'}]},
  { num:'05', slug:'granite-polishing', name:'Granite Polishing', h2:'Commercial Granite Polishing Services Dubai', kw:'granite polishing · floor polishing dubai', hue:20, vein:0.30,
    intro:"Renowned for its hardness, granite needs professional-grade machinery and high-grade industrial diamond discs to polish to a brilliant, glass-like reflection. MarblePro delivers slip-safe granite gloss for villas, hotels and retail floors.",
    body:["Granite polishing is technically harder than marble polishing — that's why generic floor polishing companies often skip it. We use specialised heavy-weight machinery to grind down uneven tiles (lippage) and polish granite to a brilliant, mirror-like finish.","For commercial granite polishing services Dubai — hotels, malls, premium retail — we schedule overnight and weekend work to ensure zero downtime for your business."],
    feat:[{t:'Heavy industrial diamond discs',d:"Required for granite's high silica content — generic pads simply skid."},{t:'Weather-proof sealing',d:'Granite outdoors? We seal against UV and moisture penetration.'},{t:'Slip-resistant finish',d:'Polished granite is slip-safe with our textured crystallizer.'},{t:'Annual maintenance plans',d:'Quarterly buffering keeps commercial granite at peak gloss.'}]},
  { num:'06', slug:'quartz-polishing', name:'Quartz Polishing', h2:'Premium Quartz Polishing & Stain Protection', kw:'quartz polishing', hue:50, vein:0.15,
    intro:'Engineered quartz is one of the most popular surfaces in modern UAE kitchens — but it does scratch, dull and absorb stains over time. Our specialised quartz polishing buffs out light abrasions and restores the factory-slick sheen.',
    body:['Quartz polishing is different from marble or granite polishing — quartz contains resin binders that need precise, low-heat technique. The wrong tool can melt or burn the surface permanently.','We also offer quartz polishing and stain protection Abu Dhabi for new installations: a hydrophobic resin sealer that prevents wine, oil and curry from penetrating during the first year of use.'],
    feat:[{t:'Low-heat resin-safe technique',d:"Specific to engineered stone — won't melt the binder."},{t:'Factory-slick sheen restored',d:'Light abrasions and dull spots completely erased.'},{t:'Stain-block resin sealer',d:'Optional add-on — repels oil, wine, juice for 12+ months.'},{t:'No etching from foods',d:'Quartz already acid-resistant, our finish keeps it that way.'}]},
  { num:'07', slug:'corian-countertop-polishing', name:'Corian Countertop Polishing', h2:'Professional Corian Countertop Polishing & Scratch Repair Dubai', kw:'corian countertop polishing', hue:42, vein:0.10,
    intro:'Corian and other solid-surface materials are repairable in ways stone is not — burns, scratches and even small holes can be invisibly fixed. Our hand-polished Corian countertop polishing and scratch repair service makes worn Corian look completely brand new.',
    body:['Corian countertop polishing and scratch repair Dubai is a craft, not a mass-produced service. Each Corian surface is sanded by hand through fine grits, then finished to your preferred sheen — matte, satin or full gloss.','We also repair Corian sinks, seam-rejoining, burn marks and chips on the original integrated installations.'],
    feat:[{t:'Hand-sand to fine grit',d:'Deep scratches and burns sanded out by hand — no machine marks.'},{t:'Matte / satin / gloss choice',d:'You pick the final finish. Each looks completely brand new.'},{t:'Seam repair & rejoin',d:'Lifted or yellowed seams re-bonded and re-polished invisibly.'},{t:'Sink & integrated repair',d:'Burns, chips, hairline cracks fixed on Corian integrated sinks.'}]},
  { num:'08', slug:'yellow-stain-removing', name:'Yellow Stain Removing', h2:'Professional Yellow Stain Removing for Natural Stone UAE', kw:'yellow stain removing', hue:48, vein:0.16,
    intro:'Yellow stains on marble are caused by iron oxidation, organic seepage, or improper cleaning chemicals — and they go deep. Our chemical poultice treatments target yellow stain removing from deep within the stone pores without damaging the surface.',
    body:['Yellow stain removing is one of our most-requested specialty services. We diagnose the cause first — rust, oil, urine, citrus, wax — then apply a stain-specific poultice that draws the pigment out over 24–48 hours.','How to remove yellow stains from marble floor Dubai is not a DIY job; aggressive bleach or acid only sets the stain deeper. Our process is professional, repeatable, and guaranteed.'],
    feat:[{t:'Stain type diagnosis',d:'Iron, organic, oil, biological — each needs a different poultice.'},{t:'Drawn out, not bleached',d:'Pigment is physically pulled from the pores — no chemical hiding.'},{t:'No surface damage',d:"We re-polish after treatment so you'd never know it was there."},{t:'24–48 hour treatment cycle',d:'Poultice applied, left to draw, removed, repeated if needed.'}]},
  { num:'09', slug:'kitchen-top-polishing', name:'Kitchen Top Polishing', h2:'Kitchen Top Polishing & Sealing Services UAE', kw:'kitchen top polishing', hue:40, vein:0.18,
    intro:'Your kitchen counter is the centerpiece of your home — and the most punished surface in it. Kitchen top polishing and sealing services UAE delivers daily-use-grade protection that actually lasts.',
    body:['We offer kitchen top polishing for marble, granite, quartz, Corian, terrazzo and engineered stone tops. Each material gets a tailored polishing technique plus a food-safe sealant suited to its porosity.','Best kitchen top polishing company near me? We service all of Dubai, Abu Dhabi and Sharjah with same-week appointments — kitchen tops done in half a day, ready for use that night.'],
    feat:[{t:'Oil & water repellent',d:'Hydrophobic sealer rated for direct food prep contact.'},{t:'Hot-pan & ring removal',d:'Burn marks and glass rings polished out invisibly.'},{t:'Edge & cut-out polish',d:'Sink and hob cut-outs treated with the same precision as the surface.'},{t:'Half-day completion',d:'Cook on it the same evening. No fumes, no residue.'}]},
  { num:'10', slug:'crystallization-sealing', name:'Crystallization & Sealing', h2:'Italian Diamond Crystallization & Impregnating Sealing', kw:'marble polishing dubai · floor restoration services', hue:36, vein:0.20,
    intro:"After polishing, the right sealant is what makes the finish last 5 years instead of 5 months. We apply true Italian diamond crystallization plus an impregnating breathable sealer to protect against future spills.",
    body:["Italian marble polishing and crystallization Dubai is the gold-standard finish for premium villas and luxury hotels. The chemistry creates a microscopic, hardened shield on top of the stone — highly mirror-reflective, slip-resistant and durable against heavy foot traffic.","We don't use cheap wax coatings that wear off in weeks. Real crystallization is a chemical bond, not a coating."],
    feat:[{t:'Italian crystallization compound',d:'Real chemical bond — not a wax or acrylic film.'},{t:'Impregnating breathable sealer',d:'Stops liquid penetration without trapping stone moisture.'},{t:'Slip-resistance rated',d:'Surprisingly grippy underfoot despite the mirror finish.'},{t:'Multi-year shine',d:'Professionally crystallized floors hold their gloss for years.'}]},
];

function ServiceDetail({ s }: { s: ServiceDetail }) {
  const after = marbleSvg({ dull: false, hue: s.hue, vein: s.vein });
  return (
    <article className="svc-detail" id={s.slug}>
      <div>
        <span className="svc-detail-num">— {s.num}</span>
        <span className="kw">{s.kw}</span>
        <h2>{s.h2}</h2>
        <p style={{ fontSize: 18, fontFamily: 'var(--display)', fontWeight: 380, letterSpacing: '-0.01em', lineHeight: 1.4, opacity: 1 }}>{s.intro}</p>
        {s.body.map((p, i) => <p key={i}>{p}</p>)}
        <ul className="feat">
          {s.feat.map((f, i) => (
            <li key={i}>
              <svg className="chk" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong>{f.t}</strong>{f.d}</span>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
          <Link href="/#quote" className="btn btn-primary">
            Quote this service
            <span className="arr"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
          </Link>
          <a href={`tel:${PHONE_TEL}`} className="btn btn-secondary">Call {PHONE_DISPLAY}</a>
        </div>
      </div>
      <div className="preview">
        <div className="ph" style={{ backgroundImage: `url("${after}")` }} />
        <div className="ovr" />
        <div className="lbl">
          <span className="sm">After · MarblePro finish</span>
          <strong>{s.name}</strong>
        </div>
      </div>
    </article>
  );
}

function ServicesHero() {
  const { open } = useRequestCall();
  return (
    <>
      <section className="svc-hero marble-bg" data-screen-label="services-hero">
        <div className="marble-veins" />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span className="eyebrow-pill"><span className="pulse" /> Services · across all 7 emirates</span>
          <h1>Professional <em>marble polishing</em> &amp; <em>floor restoration services</em> in Dubai &amp; UAE.</h1>
          <p className="lead">
            Ten specialised treatments. One certified team. From a single Corian countertop polishing job
            to a 4,000 sq ft villa marble floor polishing — we use the same diamond-grade process and back
            every job with a written guarantee.
          </p>
          <div className="cta-row">
            <Link href="/#quote" className="btn btn-primary">
              Get a Free On-Site Quote
              <span className="arr"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
            </Link>
            <button className="btn btn-secondary" onClick={open}>
              Request a Call
              <span className="arr"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/></svg></span>
            </button>
          </div>
        </div>
      </section>
      <nav className="svc-toc" aria-label="Services on this page">
        {SERVICE_DETAIL.map((s) => (
          <a key={s.slug} href={`#${s.slug}`}>
            <span className="n">— {s.num}</span>
            <span>{s.name}</span>
          </a>
        ))}
      </nav>
    </>
  );
}

function Welcome() {
  return (
    <section className="sec" data-screen-label="welcome" style={{ padding: '100px 36px 60px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <span className="sec-eyebrow">— Welcome to MarblePro</span>
        <h2 className="sec-title" style={{ maxWidth: '22ch', marginTop: 18 }}>The UAE&apos;s <em>stone care experts.</em></h2>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 60, marginTop: 40 }}>
          <div>
            <p style={{ fontFamily: 'var(--display)', fontWeight: 380, fontSize: 22, lineHeight: 1.4, letterSpacing: '-0.01em', margin: '0 0 22px', maxWidth: '40ch' }}>
              At MarblePro, we transform dull, scratched or stained surfaces back into pristine,
              mirror-like masterpieces. Natural stone flooring is a premium investment for your UAE
              property — and it deserves specialised care.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.78, maxWidth: '54ch', margin: 0 }}>
              Whether you need routine floor polishing in Dubai, intensive marble floor restoration
              services, or specialised countertop care, our certified technicians use state-of-the-art
              diamond grinding machinery and eco-friendly compounds to achieve flawless results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: '500+',  l: 'Villas restored' },
    { n: '85+ GU', l: 'Average gloss reading' },
    { n: '10 yr',  l: 'Service guarantee' },
    { n: '4.9 ★',  l: 'Google rating' },
  ];
  return (
    <section className="stats-band" data-screen-label="stats">
      <div className="stats-inner">
        {stats.map((s) => (
          <div className="stat" key={s.l}>
            <div className="n">{s.n}</div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const WHY_GRADS = [
  'linear-gradient(135deg, #1c2c4b 0%, #3a4a6b 50%, #5b6c8e 100%)',
  'linear-gradient(135deg, #1c4b4a 0%, #3a6b6a 50%, #5b8e8c 100%)',
  'linear-gradient(135deg, #4a2c1c 0%, #6b4a3a 50%, #8e6c5b 100%)',
  'linear-gradient(135deg, #4b3a1c 0%, #6b553a 50%, #8e745b 100%)',
  'linear-gradient(135deg, #2d2a3a 0%, #4a4658 50%, #6e6779 100%)',
  'linear-gradient(135deg, #3a1c1c 0%, #553a3a 50%, #745b5b 100%)',
];

function WhyUs() {
  const items = [
    { num: '01', h: 'UAE-Wide',       em: 'coverage',       p: 'Centrally located in Dubai, our mobile teams quickly service Abu Dhabi, Sharjah, Ajman and all northern emirates with same-week availability.' },
    { num: '02', h: 'Diamond grinding &', em: 'crystallization', p: "We don't use cheap wax coatings that wear off. We utilise true mechanical diamond abrasives followed by Italian crystallization for long-lasting protection." },
    { num: '03', h: 'Tailored',       em: 'stone solutions', p: 'From Italian Carrara marble to technical quartz, we understand the specific chemistry of every material before we touch it.' },
    { num: '04', h: 'Transparent',    em: 'pricing',         p: 'No hidden fees. We offer free on-site evaluations to provide a precise quotation tailored to your floor\'s exact condition.' },
    { num: '05', h: 'Dust-free',      em: 'process',         p: 'Furniture is covered, edges masked, and our wet process keeps the air clear so your home or office stays liveable through the job.' },
    { num: '06', h: 'Written',        em: 'guarantee',       p: 'Every job is backed by a written workmanship guarantee. We come back and fix anything that doesn\'t meet our published gloss standard.' },
  ];
  return (
    <section className="why" data-screen-label="why">
      <div className="why-inner">
        <div className="sec-head" style={{ marginBottom: 0 }}>
          <div>
            <span className="sec-eyebrow">— Why MarblePro</span>
            <h2 className="sec-title" style={{ maxWidth: '22ch', marginTop: 18 }}>The best marble polishing company <em>in Dubai.</em></h2>
          </div>
          <p className="sec-lead">
            We&apos;re not a generic cleaning crew with a polishing add-on. We&apos;re stone specialists —
            it&apos;s all we do, and we do it better than anyone else in the UAE.
          </p>
        </div>
        <div className="why-grid">
          {items.map((item, i) => (
            <article
              className="why-card"
              key={item.num}
              style={{ '--why-bg': WHY_GRADS[i], '--why-fg': 'var(--paper)' } as React.CSSProperties}
            >
              <span className="num">— {item.num}</span>
              <h3>{item.h} <em>{item.em}</em></h3>
              <p>{item.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Commercial() {
  return (
    <section className="commercial-band" data-screen-label="commercial">
      <div className="commercial-inner">
        <div>
          <span className="sec-eyebrow" style={{ color: 'var(--paper)', opacity: 0.7 }}>— Commercial</span>
          <h2>Commercial floor polishing &amp; <em>maintenance</em> across the UAE.</h2>
          <p>
            First impressions matter. A dull, stained lobby floor can subtly push away premium clients
            and hotel guests. MarblePro is the trusted partner for commercial floor polishing in Dubai
            and the wider Emirates. We provide overnight and weekend scheduling to ensure zero
            downtime for your business operations.
          </p>
          <ul>
            <li>5-Star Hotels &amp; Luxury Resorts</li>
            <li>Corporate Office Lobbies</li>
            <li>High-End Retail Showrooms</li>
            <li>Restaurants &amp; Commercial Kitchens</li>
            <li>Shopping Malls &amp; Atriums</li>
            <li>Hospital &amp; Medical Reception</li>
          </ul>
        </div>
        <div className="commercial-card">
          <span className="sm">Property managers</span>
          <h4>Ask about our Annual Maintenance Contracts (AMC).</h4>
          <p style={{ fontSize: 14, lineHeight: 1.65, opacity: 0.8, margin: '0 0 22px' }}>
            We keep your commercial floors looking flawless year-round with scheduled, cost-effective
            quarterly buffering and crystallization. Predictable budgeting, premium results.
          </p>
          <Link href="/#quote" className="btn btn-secondary on-dark" style={{ width: '100%', justifyContent: 'center' }}>
            Get an AMC quote
            <span className="arr"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTAFooter() {
  const { open } = useRequestCall();
  return (
    <section style={{ background: 'var(--paper3)', padding: '100px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden' }} data-screen-label="cta-footer">
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <span className="sec-eyebrow">— Ready?</span>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 320, fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 0.95, letterSpacing: '-0.03em', margin: '14px 0 22px' }}>
          Ready to bring back the <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>mirror shine?</em>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, opacity: 0.78, maxWidth: '52ch', margin: '0 auto 30px' }}>
          Contact MarblePro today for the best floor restoration services in Dubai and the wider UAE.
          We&apos;ll be on-site within 24 hours for your free inspection.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn btn-primary" href="/#quote">
            Free Quote
            <span className="arr"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
          </Link>
          <button className="btn btn-secondary" onClick={open}>Request a Call</button>
          <a className="btn btn-wa" href={`${WA_LINK}?text=${encodeURIComponent('Hi MarblePro, I need a quote.')}`} target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export default function ServicesClient() {
  return (
    <>
      <ServicesHero />
      <Welcome />
      <Stats />
      <section className="svc-page" data-screen-label="services-list" style={{ paddingBottom: 60 }}>
        {SERVICE_DETAIL.map((s) => <ServiceDetail key={s.slug} s={s} />)}
      </section>
      <WhyUs />
      <Commercial />
      <CTAFooter />
    </>
  );
}
