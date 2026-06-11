'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRequestCall } from '@/components/marble/RequestCallModal';
import { PHONE_DISPLAY, PHONE_TEL, WA_LINK, CITY_IMG, CITY_GRAD, SERVICES } from '@/components/marble/constants';
import { PageFaqCta } from '@/components/marble/FaqCta';
import { LOCATIONS, type Location } from '@/lib/locationsData';

function LocationSection({ loc, idx }: { loc: Location; idx: number }) {
  const { open } = useRequestCall();
  return (
    <section className="loc-section" id={loc.slug} data-screen-label={`location-${loc.slug}`}>
      <div className="loc-banner" style={{ background: CITY_GRAD[loc.slug] }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -2, backgroundImage: `url("${CITY_IMG[loc.slug]}")`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.55 }} />
        <div className="loc-banner-inner">
          <div>
            <span className="meta">{loc.eyebrow} · {loc.ar}</span>
            <h1>{loc.name} — <em>Marble Polishing</em> &amp; Floor Restoration Services.</h1>
            <p>{loc.intro}</p>
          </div>
          <div className="loc-card-list">
            <h4>Services available in {loc.name}</h4>
            <ul>
              {SERVICES.slice(0, 8).map((s, i) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} style={{ color: 'inherit', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
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
        <h1>Affordable marble floor polishing services UAE — <em>all 7 emirates covered.</em></h1>
        <p className="lead">
          MarblePro — multi-type floor polishing company UAE — runs regular weekly routes through all 7 emirates.
          Best marble polishing company in Dubai, with commercial granite polishing services, terrazzo polishing
          and restoration contractors UAE, and emergency residential marble floor restoration services available
          same-day in Dubai. Same team, same machinery, same gloss standard everywhere.
        </p>
      </section>
      <Rail />
      {LOCATIONS.map((loc, idx) => <LocationSection key={loc.slug} loc={loc} idx={idx} />)}
      <PageFaqCta />
      <section style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '100px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden' }} data-screen-label="cta-footer">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 50% at 50% 0%, rgba(195,155,78,0.18), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <span className="sec-eyebrow" style={{ color: 'var(--paper)', opacity: 0.7 }}>— Whichever emirate</span>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 320, fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 0.95, letterSpacing: '-0.03em', margin: '14px 0 22px' }}>
            Affordable Marble Floor Polishing Services — <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>UAE&apos;s Best Stone Care, All 7 Emirates.</em>
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
