'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRequestCall } from '@/components/marble/RequestCallModal';
import { PHONE_DISPLAY, PHONE_TEL, WA_LINK, CITY_IMG, CITY_GRAD, SERVICES } from '@/components/marble/constants';

interface Location {
  slug: string; name: string; ar: string; h1: string; eyebrow: string;
  intro: string; body: string[]; areas: string[];
  stats: { l: string; v: string }[];
}

const LOCATIONS: Location[] = [
  { slug:'dubai', name:'Dubai', ar:'دبي', h1:'Marble Polishing Dubai — Villas, Towers & Showrooms', eyebrow:'01 — Marble Polishing Dubai',
    intro:'Dubai is where MarblePro began — and where we still deliver more marble polishing Dubai jobs than anywhere else in the UAE. From Palm Jumeirah villas to DIFC offices, our diamond-grade marble floor polishing is the trusted finish for the city\'s most discerning properties.',
    body:['We provide our complete service range in Dubai: marble polishing, terrazzo floor polishing Dubai, granite polishing, quartz polishing, Corian countertop polishing, kitchen top polishing, yellow stain removing and full marble floor restoration services. Same crew, same standards, every job.','Same-day appointments are standard across Dubai. Most central locations are reached within 90 minutes of a confirmed booking. We work Mon–Sun, 8 am to 10 pm.'],
    areas:['Palm Jumeirah','Emirates Hills','Downtown','DIFC','Marina','JBR','Business Bay','Al Barsha','Jumeirah','Mirdif','Arabian Ranches','Damac Hills'],
    stats:[{l:'Response time',v:'Within 90 min'},{l:'Avg job size',v:'240 m² villa'},{l:'Crew count',v:'5 teams active'},{l:'Top service',v:'Marble polishing'}]},
  { slug:'abu-dhabi', name:'Abu Dhabi', ar:'أبوظبي', h1:'Marble Polishing Abu Dhabi — Capital-Grade Stone Care', eyebrow:'02 — Marble Polishing Abu Dhabi',
    intro:'Abu Dhabi homes and offices set the bar for the rest of the country — and quartz polishing and stain protection Abu Dhabi is one of our most-requested specialty services. Whether you\'re in a Saadiyat villa, a Corniche tower or a Yas Island showroom, our crew is on the road weekly.',
    body:['All MarblePro services are available in Abu Dhabi: marble polishing, marble floor restoration services, terrazzo polishing, granite polishing, quartz polishing, Corian countertop polishing, kitchen top polishing and yellow stain removing. We run weekly Abu Dhabi routes — bookings are typically scheduled within 48 hours.','We also offer dedicated villa marble floor crystallization services Abu Dhabi for new build hand-overs and post-renovation gloss restoration. Free on-site inspection across the emirate, with overnight and weekend slots for commercial clients.'],
    areas:['Saadiyat Island','Yas Island','Al Reem Island','Khalifa City','Mussafah','Corniche','Al Raha Beach','Al Bateen','Al Mushrif'],
    stats:[{l:'Response time',v:'Within 48 hours'},{l:'Avg job size',v:'180 m² floor'},{l:'Routing',v:'Weekly crew'},{l:'Top service',v:'Quartz polishing'}]},
  { slug:'sharjah', name:'Sharjah', ar:'الشارقة', h1:'Marble & Terrazzo Polishing Sharjah', eyebrow:'03 — Sharjah Stone Care',
    intro:'Sharjah is home to some of the UAE\'s most beautiful heritage terrazzo and marble — and we specialise in restoring it. Terrazzo polishing in Sharjah brings out aggregate detail that\'s been hidden under decades of foot traffic.',
    body:['Our full service range is available across Sharjah: marble polishing, marble floor polishing, terrazzo floor polishing, granite polishing, quartz polishing, Corian countertop polishing, kitchen top polishing, and yellow stain removing. We\'re particularly active in heritage districts where careful, non-aggressive technique is required.','Multi-type floor polishing company UAE is exactly what Sharjah needs — many older buildings combine marble, terrazzo and granite within a single floor plan, and we handle all three in one visit with the right machinery for each.'],
    areas:['Al Khan','Al Majaz','Al Nahda','Al Qasimia','Al Taawun','Muwaileh','Al Mamzar','University City','Al Yarmook'],
    stats:[{l:'Response time',v:'Within 72 hours'},{l:'Avg job size',v:'120 m² mixed'},{l:'Specialty',v:'Terrazzo restoration'},{l:'Top service',v:'Terrazzo polishing'}]},
  { slug:'ajman', name:'Ajman', ar:'عجمان', h1:'Floor Polishing & Restoration Ajman', eyebrow:'04 — Ajman Coastal Service',
    intro:"Ajman's coastal villas and beachfront apartments face a unique challenge — salt air and humidity dull stone faster than inland properties. Our marble polishing and crystallization service in Ajman uses sealants specifically rated for coastal conditions.",
    body:['All MarblePro services are available in Ajman: marble polishing, floor polishing, marble floor restoration services, countertop polishing, terrazzo polishing, granite polishing, quartz polishing, Corian countertop polishing and yellow stain removing. Coastal properties get our marine-grade impregnating sealer free of charge as a standard upgrade.','Free on-site inspection and quotation across all of Ajman. Booking lead time is typically 3–5 days as part of our scheduled northern emirates route.'],
    areas:['Al Nuaimiya','Al Rashidiya','Al Hamidiya','Al Rumailah','Al Jurf','Ajman Corniche','Helio','Al Zorah'],
    stats:[{l:'Response time',v:'3–5 days'},{l:'Avg job size',v:'150 m² coastal'},{l:'Specialty',v:'Marine-grade sealing'},{l:'Top service',v:'Floor polishing'}]},
  { slug:'ras-al-khaimah', name:'Ras Al Khaimah', ar:'رأس الخيمة', h1:'Marble Polishing Ras Al Khaimah — Mountain & Coastal Villas', eyebrow:'05 — RAK Restoration',
    intro:'Ras Al Khaimah villas span everything from beachfront to mountain retreats — and we service all of them. Our marble floor restoration services in RAK handle the unique wear patterns of holiday homes that sit empty for months at a time.',
    body:['Our complete service catalogue is available in Ras Al Khaimah: marble polishing, terrazzo polishing, granite polishing, quartz polishing, Corian countertop polishing, kitchen top polishing, yellow stain removing and full marble floor restoration services. We schedule weekly RAK routes so booking lead time is rarely more than a week.','Hotels and resorts across Jebel Jais and Al Marjan Island work with us for ongoing maintenance contracts — overnight scheduling, no guest disruption, predictable budget.'],
    areas:['Al Hamra Village','Mina Al Arab','Jebel Jais','Al Marjan Island','Khuzam','Al Nakheel','Al Mairid','Al Dhait'],
    stats:[{l:'Response time',v:'Within 7 days'},{l:'Avg job size',v:'200 m² villa'},{l:'Specialty',v:'Holiday-home revival'},{l:'Top service',v:'Marble restoration'}]},
  { slug:'umm-al-quwain', name:'Umm Al Quwain', ar:'أم القيوين', h1:'Marble & Floor Polishing Umm Al Quwain', eyebrow:'06 — UAQ Service',
    intro:"Umm Al Quwain's mix of heritage homes and modern lagoon-side villas needs gentle, traditional polishing technique. Our floor polishing service in UAQ is run from the same northern emirates route as Ajman and Ras Al Khaimah.",
    body:['All MarblePro services available in Umm Al Quwain: marble polishing, marble floor polishing, floor restoration services, terrazzo polishing, granite polishing, quartz polishing, Corian countertop polishing, kitchen top polishing and yellow stain removing. Free site visit and quotation, no minimum job size.','We combine UAQ visits with Ajman and RAK to keep travel costs out of your quote — that\'s why our pricing for the northern emirates matches our Dubai pricing for the same scope.'],
    areas:['Old Town UAQ','Al Salamah','Al Aaminah','Al Maidan','UAQ Marina','Al Riqqah'],
    stats:[{l:'Response time',v:'Within 7 days'},{l:'Avg job size',v:'130 m²'},{l:'Specialty',v:'Heritage-safe technique'},{l:'Top service',v:'Floor polishing'}]},
  { slug:'fujairah', name:'Fujairah', ar:'الفجيرة', h1:'Marble Polishing Fujairah — East Coast Specialist', eyebrow:'07 — Fujairah Service',
    intro:"Fujairah's east-coast hotels, resorts and mountain villas need stone care that handles humidity, salt and sand. Our crew makes regular runs to Fujairah from our Dubai base to deliver the full MarblePro service range.",
    body:['Every MarblePro service is available in Fujairah: marble polishing, marble floor polishing, floor restoration services, terrazzo polishing, granite polishing, quartz polishing, Corian countertop polishing, kitchen top polishing and yellow stain removing. Resorts on the Indian Ocean side benefit from our coastal-grade impregnating sealer as standard.','Hotels and large residences typically book 10–14 days ahead. Smaller residential jobs can usually be combined into our regular Fujairah route within a week or two.'],
    areas:['Dibba','Al Faseel','Al Ghurfa','Sakamkam','Madhab','Al Bidiyah','Khor Fakkan','Fujairah City'],
    stats:[{l:'Response time',v:'Within 10 days'},{l:'Avg job size',v:'300 m² resort'},{l:'Specialty',v:'Coastal-grade seal'},{l:'Top service',v:'Hotel maintenance'}]},
];

function LocationSection({ loc, idx }: { loc: Location; idx: number }) {
  const { open } = useRequestCall();
  return (
    <section className="loc-section" id={loc.slug} data-screen-label={`location-${loc.slug}`}>
      <div className="loc-banner" style={{ background: CITY_GRAD[loc.slug] }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -2, backgroundImage: `url("${CITY_IMG[loc.slug]}")`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.55 }} />
        <div className="loc-banner-inner">
          <div>
            <span className="meta">{loc.eyebrow} · {loc.ar}</span>
            <h1>{loc.name} — <em>marble polishing</em><br/>&amp; restoration.</h1>
            <p>{loc.intro}</p>
          </div>
          <div className="loc-card-list">
            <h4>Services available in {loc.name}</h4>
            <ul>
              {SERVICES.slice(0, 8).map((s, i) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} style={{ color: 'inherit', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <span>{s.name}</span>
                    <span>0{i + 1}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="loc-body">
        <div className="loc-body-grid">
          <div>
            <h3>{loc.h1}</h3>
            {loc.body.map((p, i) => <p key={i}>{p}</p>)}
            <div className="areas">
              {loc.areas.map((a) => <span className="area" key={a}>{a}</span>)}
            </div>
          </div>
          <div className="stats">
            <h4>{loc.name} service snapshot</h4>
            {loc.stats.map((s) => (
              <div className="row" key={s.l}>
                <span className="l">{s.l}</span>
                <span className="v">{s.v}</span>
              </div>
            ))}
            <div className="cta">
              <a href={`tel:${PHONE_TEL}`} className="primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/></svg>
                Call {PHONE_DISPLAY}
              </a>
              <button className="alt" onClick={open}>Request a Call</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Rail() {
  const [active, setActive] = useState('dubai');
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-40% 0px -50% 0px' }
    );
    LOCATIONS.forEach((l) => { const el = document.getElementById(l.slug); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <nav className="loc-rail" aria-label="Emirates">
      <div className="loc-rail-inner">
        {LOCATIONS.map((l, i) => (
          <a key={l.slug} href={`#${l.slug}`} className={active === l.slug ? 'active' : ''}>
            <span className="n">0{i + 1}</span>{l.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default function LocationsClient() {
  const { open } = useRequestCall();
  return (
    <>
      <section className="loc-intro" data-screen-label="locations-intro" style={{ paddingTop: 150 }}>
        <span className="eyebrow-pill"><span className="pulse" /> Live coverage · all 7 emirates</span>
        <h1>Marble polishing &amp; floor restoration across <em>every emirate.</em></h1>
        <p className="lead">
          MarblePro is the only specialist stone polishing crew with regular weekly routes through
          all 7 emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain and Fujairah.
          Same team, same machinery, same gloss-meter standard everywhere.
        </p>
      </section>
      <Rail />
      {LOCATIONS.map((loc, idx) => <LocationSection key={loc.slug} loc={loc} idx={idx} />)}
      <section style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '100px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden' }} data-screen-label="cta-footer">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 50% at 50% 0%, rgba(195,155,78,0.18), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <span className="sec-eyebrow" style={{ color: 'var(--paper)', opacity: 0.7 }}>— Whichever emirate</span>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 320, fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 0.95, letterSpacing: '-0.03em', margin: '14px 0 22px' }}>
            One crew. <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Seven emirates.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, opacity: 0.78, maxWidth: '54ch', margin: '0 auto 30px' }}>
            Free on-site inspection anywhere in the UAE. Same-week bookings in Dubai and Abu Dhabi.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" href="/contact">
              Get a Free Quote
              <span className="arr"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
            </Link>
            <button className="btn btn-secondary on-dark" onClick={open}>Request a Call</button>
            <a className="btn btn-wa" href={`${WA_LINK}?text=${encodeURIComponent('Hi MarblePro, I need a quote.')}`} target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
