'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRequestCall, useToast } from '@/components/marble/RequestCallModal';
import { PageFaqCta } from '@/components/marble/FaqCta';
import CityCards from '@/components/marble/CityCards';
import { marbleSvg } from '@/components/marble/marbleSvg';
import { PHONE_TEL, WA_LINK, SERVICES } from '@/components/marble/constants';
import { SVC_DETAIL_IMGS } from '@/lib/servicesData';
import { sendEnquiry } from '@/lib/sendEmail';

const STEPS = [
  { n: '01', h: 'Deep Inspection & Lippage Removal',  p: 'We evaluate the stone, identify cracks, and check for uneven tile edges. Low-speed weighted diamond grinding flattens the floor surface seamlessly.' },
  { n: '02', h: 'Honing & Scratch Erasing',           p: 'Medium-grit diamond pads systematically erase deep scratches, traffic paths, and superficial yellow stains from your marble floors.' },
  { n: '03', h: 'High-Gloss Polishing',               p: 'Micro-abrasive diamond powders bring out the natural deep clarity and rich color tones of the stone, preparing it for an ultra-reflective finish.' },
  { n: '04', h: 'Italian Diamond Crystallization',    p: 'A specialised chemical crystallization creates a microscopic, hardened shield — mirror-reflective, slip-resistant, durable against heavy foot traffic.' },
  { n: '05', h: 'Impregnating Sealer Application',    p: 'A premium breathable sealer protects against future spills, ensuring your floor restoration services investment lasts for years.' },
];

const REVIEWS = [
  { name: 'Ahmed K.',    stars: 5, time: '2 weeks ago',  text: 'MarblePro restored a 12-year-old marble floor in our Palm Jumeirah villa to better than new. The team was punctual, clean, and the price was exactly what was quoted.' },
  { name: 'Layla R.',    stars: 5, time: '1 month ago',  text: 'Beautiful job on our terrazzo lobby in Sharjah. Tenants noticed within a day. Professional crew, dust-free process.' },
  { name: 'Mohammed A.', stars: 5, time: '1 month ago',  text: 'Removed yellow stains we\'d lived with for years from our Abu Dhabi villa floor. Worth every dirham.' },
  { name: 'Priya S.',    stars: 5, time: '2 months ago', text: 'Quartz countertop in our Dubai Marina apartment looks brand new. Booking again for the bathrooms.' },
];

const FAQS = [
  { q: 'Why is MarblePro the best marble polishing company in Dubai?', a: 'MarblePro uses Italian diamond crystallization technology — the same system used in 5-star hotels across the UAE. Every job comes with a written gloss guarantee (minimum 85 GU) and a fixed-price quote, making us the most trusted and affordable marble floor polishing services provider across UAE.' },
  { q: 'How long does the marble floor polishing process take in Dubai?', a: 'A standard villa living area typically takes 1 to 2 days. Emergency residential marble floor restoration services in Dubai can be scheduled same-day or next-day. We work around your schedule and ensure a completely dust-free process.' },
  { q: 'Can you remove yellow stains from marble floors in Dubai?', a: 'Yes. Professional yellow stain removing for natural stone UAE is one of our core specialties. We use chemically targeted treatments to lift deep-set yellowing, rust marks and watermarks that regular cleaning cannot fix — restoring the original bright tone of your stone.' },
  { q: 'Do you do deep scratch removal and marble crack filling in Dubai?', a: 'Absolutely. Deep scratch removal and marble crack filling Dubai is handled using colour-matched epoxy fillers and progressive diamond pads. We can restore heavily scratched, chipped or cracked natural stone to near-new condition.' },
  { q: 'What is the price for terrazzo floor polishing in Dubai?', a: 'Terrazzo floor polishing Dubai price depends on the area size, current condition and finish required. We offer free on-site assessments with no-obligation fixed quotes. As terrazzo polishing and restoration contractors UAE businesses and homeowners trust, we price fairly with no hidden charges.' },
  { q: 'Do you offer premium marble countertop polishing in Dubai?', a: 'Yes. Premium marble countertop polishing Dubai covers kitchen tops, bathroom vanities, island benches and feature walls. We also offer kitchen top polishing and sealing services UAE-wide, Corian countertop polishing and scratch repair Dubai, and quartz polishing and stain protection Abu Dhabi.' },
  { q: 'Do you provide commercial granite polishing services in Dubai?', a: 'Yes — commercial granite polishing services Dubai is available for retail showrooms, hotel lobbies, office buildings and residential complexes. As a multi-type floor polishing company UAE, we handle marble, granite, terrazzo, quartz and Corian in one visit.' },
  { q: 'Which emirates do you cover?', a: 'All 7 — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain and Fujairah. Same crew, same standards, same-week availability. Italian marble polishing and crystallization Dubai is our flagship service, available across all regions.' },
];

function BeforeAfter({ hue, vein, title, sub, beforeImg, afterImg }: { hue: number; vein: number; title: string; sub: string; beforeImg?: string; afterImg?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const onMove = (e: MouseEvent | TouchEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };
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
  const beforeBg = beforeImg ? `url("${beforeImg}")` : `url("${marbleSvg({ dull: true,  hue, vein })}")`;
  const afterBg  = afterImg  ? `url("${afterImg}")`  : `url("${marbleSvg({ dull: false, hue, vein })}")`;
  return (
    <div>
      <div className="ba" ref={ref}
        style={{ '--pos': `${pos}%` } as React.CSSProperties}
        onMouseDown={(e) => { dragging.current = true; onMove(e.nativeEvent); }}
        onTouchStart={(e) => { dragging.current = true; onMove(e.nativeEvent); }}
      >
        <div className="pane before" style={{ backgroundImage: beforeBg }} />
        <div className="pane after"  style={{ backgroundImage: afterBg }} />
        <div className="ba-handle">
          <div className="grip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 3 12 9 18"/><polyline points="15 6 21 12 15 18"/></svg>
          </div>
        </div>
        <span className="ba-tag b">Before</span>
        <span className="ba-tag a">After</span>
      </div>
      <div className="ba-caption">
        <strong>{title}</strong>
        <span>{sub}</span>
      </div>
    </div>
  );
}

const onDesktop = () => window.matchMedia('(hover:hover) and (pointer:fine)').matches;

function Hero() {
  const { open } = useRequestCall();
  const showToast = useToast();
  const [number, setNumber] = useState('');
  const [job, setJob] = useState('');
  const [err, setErr] = useState('');
  const [desktop, setDesktop] = useState(false);
  useEffect(() => { setDesktop(onDesktop()); }, []);
  const wa = async () => {
    if (!number.trim()) { setErr('Please enter your phone number'); return; }
    setErr('');
    try { await sendEnquiry({ type: 'WhatsApp Quote (Hero)', phone: number, work: job }); } catch (e) { console.error('EmailJS:', e); }
    showToast('Enquiry sent! We\'ll be in touch shortly.');
    if (!onDesktop()) {
      const msg = encodeURIComponent(`Hi MarblePro, I need a quote.\nWork: ${job || 'Marble polishing'}\nNumber: ${number}`);
      window.open(`${WA_LINK}?text=${msg}`, '_blank');
    }
  };
  return (
    <section className="hero marble-bg" data-screen-label="hero" id="top">
      <div className="marble-veins" />
      <div>
        <span className="eyebrow-pill hero-eyebrow"><span className="pulse" /> Available across UAE · 7 emirates</span>
        <h1>
          Professional <em>marble polishing</em><br/>
          &amp; floor restoration<br/>
          in Dubai &amp; UAE.
        </h1>
        <p className="hero-sub">
          Restore the timeless brilliance of your floors. MarblePro delivers premium stone polishing,
          deep scratch removal, and diamond crystallization for luxury villas, commercial spaces,
          and apartments across the UAE.
        </p>
        <div className="hero-cta-row">
          <a className="btn btn-primary" href="#quote">
            Get a Free On-Site Quote
            <span className="arr"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
          </a>
          <button className="btn btn-secondary" onClick={open}>
            <span className="arr"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/></svg></span>
            Request a Call
          </button>
        </div>
      </div>
      <aside className="hero-card">
        <div className="veins-d" />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="hero-card-label">Two-line quote · WhatsApp in 60 sec</span>
          <h2 className="hero-card-h">Tell us the job &amp; your number.<br/>That&apos;s it.</h2>
          <div className="quote-mini">
            <input value={job} onChange={(e) => setJob(e.target.value)} placeholder="What needs polishing? (e.g. kitchen counter, villa floor)" />
            <input value={number} onChange={(e) => { setNumber(e.target.value); setErr(''); }} placeholder="Your mobile number (UAE)*" inputMode="tel" style={err ? { borderColor: '#e53e3e' } : {}} />
            {err && <span style={{ color:'#e53e3e', fontSize:12, marginTop:4, display:'block' }}>{err}</span>}
            <div className="row">
              <button className="btn btn-wa" onClick={wa}>
                <span className="arr" style={{ background: '#082b13' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </span>
                {desktop ? 'Send Enquiry' : 'WhatsApp'}
              </button>
              <a className="btn-call" href={`tel:${PHONE_TEL}`} style={{ justifyContent: 'center' }}>Call now</a>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

function Marquee() {
  const items = ['Marble Polishing Dubai','Terrazzo Restoration','Granite Polishing','Quartz Care','Yellow Stain Removing','Kitchen Top Polishing','Corian Repair'];
  const row = items.flatMap((t, i) => [
    <span key={`t${i}`}>{t}</span>,
    <span key={`d${i}`} className="dot">✦</span>,
  ]);
  return <div className="marquee"><div className="marquee-track">{row}{row}{row}</div></div>;
}


// background: dark-overlay gradient + stone image for each card
const SVC_CARDS: { img: string; overlay: string }[] = [
  { img:'/images/services/travertine-polishing-dubai.jpg', overlay:'linear-gradient(180deg,rgba(44,28,10,0.30) 0%,rgba(44,28,10,0.62) 100%)' }, // travertine
  { img:'/images/services/onyx-marble-polishing-dubai.webp', overlay:'linear-gradient(180deg,rgba(10,10,22,0.32) 0%,rgba(10,10,22,0.65) 100%)' }, // onyx
  { img:'/images/projects/polished-marble-floor-dubai-3.webp', overlay:'linear-gradient(180deg,rgba(52,36,16,0.28) 0%,rgba(52,36,16,0.60) 100%)' }, // crema marfil
  { img:'/images/services/calacatta-marble-polishing-dubai.webp', overlay:'linear-gradient(180deg,rgba(11,11,11,0.30) 0%,rgba(11,11,11,0.62) 100%)' }, // calacatta
  { img:'/images/services/emperador-marble-polishing-dubai.webp', overlay:'linear-gradient(180deg,rgba(30,14,8,0.32) 0%,rgba(30,14,8,0.65) 100%)' }, // emperador
  { img:'/images/projects/polished-marble-floor-dubai-1.webp', overlay:'linear-gradient(180deg,rgba(14,22,44,0.28) 0%,rgba(14,22,44,0.62) 100%)' }, // marble
  { img:'/images/projects/polished-marble-floor-dubai-6.webp', overlay:'linear-gradient(180deg,rgba(28,24,38,0.30) 0%,rgba(28,24,38,0.62) 100%)' }, // floor restoration
  { img:'/images/services/marble-countertop-polishing.webp', overlay:'linear-gradient(180deg,rgba(52,28,16,0.28) 0%,rgba(52,28,16,0.60) 100%)' }, // countertop
  { img:'/images/services/terrazzo-polishing-dubai.webp', overlay:'linear-gradient(180deg,rgba(14,44,44,0.28) 0%,rgba(14,44,44,0.62) 100%)' }, // terrazzo
  { img:'/images/services/granite-polishing.webp', overlay:'linear-gradient(180deg,rgba(14,32,44,0.28) 0%,rgba(14,32,44,0.62) 100%)' }, // granite
  { img:'/images/services/quartz-polishing.webp', overlay:'linear-gradient(180deg,rgba(40,14,14,0.28) 0%,rgba(40,14,14,0.62) 100%)' }, // quartz
  { img:'/images/services/corian-countertop-polishing.webp', overlay:'linear-gradient(180deg,rgba(14,28,46,0.30) 0%,rgba(14,28,46,0.62) 100%)' }, // corian
  { img:'/images/services/yellow-stain-removing.webp', overlay:'linear-gradient(180deg,rgba(28,16,44,0.30) 0%,rgba(28,16,44,0.62) 100%)' }, // yellow stain
  { img:'/images/services/kitchen-top-polishing.webp', overlay:'linear-gradient(180deg,rgba(14,36,24,0.28) 0%,rgba(14,36,24,0.62) 100%)' }, // kitchen top
  { img:'/images/projects/polished-marble-floor-dubai-10.webp', overlay:'linear-gradient(180deg,rgba(42,32,14,0.28) 0%,rgba(42,32,14,0.62) 100%)' }, // crystallization
];

// Lazy-load Unsplash background images — only fetch when card enters viewport.
// First 4 cards (likely above-fold on desktop) load eagerly to avoid LCP delay.
function LazySvcCard({ s, size, card, eager }: {
  s: (typeof SERVICES)[number];
  size: string;
  card: { img: string; overlay: string };
  eager: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  // Use the SAME image as the service page (single source of truth), fall back to card.img.
  const imgSrc = SVC_DETAIL_IMGS[s.slug] ?? card.img;
  const [imgUrl, setImgUrl] = useState(eager ? imgSrc : '');

  useEffect(() => {
    if (eager || imgUrl) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgUrl(imgSrc);
          io.disconnect();
        }
      },
      { rootMargin: '400px' }, // pre-load 400 px before visible
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager, imgUrl, imgSrc]);

  return (
    <Link
      ref={ref}
      className={`svc ${size}`}
      href={`/services/${s.slug}`}
      style={{
        '--svc-bg': imgUrl ? `${card.overlay}, url("${imgUrl}")` : card.overlay,
        '--svc-overlay': 'rgba(0,0,0,0.18)',
        '--svc-fg': 'var(--paper)',
      } as React.CSSProperties}
    >
      <div>
        <span className="svc-num">— {s.num}</span>
        <h3 className="svc-name">{s.name}</h3>
        <p className="svc-desc">{s.short}</p>
      </div>
      <div className="svc-glyph">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </div>
      <span className="svc-cta">Read more →</span>
    </Link>
  );
}

function ServicesGrid() {
  const sizes = ['lg','md','sm','sm','md','sm','sm','md','sm','sm','lg','md','sm','sm','md'];
  return (
    <section className="sec" data-screen-label="services" id="services">
      <div style={{ marginBottom: 60 }}>
        <span className="sec-eyebrow">02 — What we do</span>
        <h2 className="sec-title" style={{ marginTop: 14, maxWidth: '22ch' }}>Welcome to MarblePro — <em>The UAE&apos;s Stone Care Experts.</em></h2>
        <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.65, opacity: 0.78, maxWidth: '70ch' }}>
          At MarblePro, we transform dull, scratched, or stained surfaces back into pristine,
          mirror-like masterpieces. Natural stone flooring is a premium investment for your UAE
          property, and it deserves specialised care.
        </p>
        <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.65, fontWeight: 600, maxWidth: '70ch' }}>
          Whether you need routine floor polishing in Dubai, intensive marble floor restoration
          services, or specialised countertop care, our certified technicians use state-of-the-art
          diamond grinding machinery and eco-friendly compounds to achieve flawless results.
          We serve residential and commercial clients all over the UAE, delivering unparalleled
          craftsmanship with minimal disruption to your day.
        </p>
        <Link href="/services" style={{ display: 'inline-block', marginTop: 20, fontFamily: 'var(--grot)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink)' }}>
          See all services →
        </Link>
      </div>
      <div className="svc-grid">
        {SERVICES.map((s, i) => (
          <LazySvcCard
            key={s.num}
            s={s}
            size={sizes[i]}
            card={SVC_CARDS[i]}
            eager={i < 4}
          />
        ))}
      </div>
    </section>
  );
}

function ProcessVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef  = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    // Pre-load when section is 400px away so video is buffered before it's visible
    const ioPreload = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.load();
          ioPreload.disconnect();
        }
      },
      { rootMargin: '400px' }
    );
    ioPreload.observe(el);

    // Play/pause when actually in view
    const ioPlay = new IntersectionObserver(
      ([entry]) => {
        const v = videoRef.current;
        if (!v) return;
        if (entry.isIntersecting) {
          v.currentTime = 0;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.3 }
    );
    ioPlay.observe(el);

    return () => { ioPreload.disconnect(); ioPlay.disconnect(); };
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div ref={wrapRef} style={{ borderRadius: 22, overflow: 'hidden', aspectRatio: '4/5', position: 'relative', background: '#1a1410' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'VideoObject',
          name: 'Professional Marble Polishing Process in Dubai — MarblePro UAE',
          description: 'Watch MarblePro restore a dull marble floor to a mirror gloss using diamond grinding and Italian crystallization, across Dubai and the UAE.',
          thumbnailUrl: 'https://www.marblepro.ae/videos/marble-polishing-process-dubai-poster.jpg',
          contentUrl: 'https://www.marblepro.ae/videos/marble-polishing-process-dubai.mp4',
          uploadDate: '2026-05-01',
          publisher: { '@type': 'Organization', name: 'MarblePro UAE', logo: { '@type': 'ImageObject', url: 'https://www.marblepro.ae/raw/twittercard.jpg' } },
        }) }}
      />
      <video
        ref={videoRef}
        muted
        playsInline
        preload="none"
        poster="/videos/marble-polishing-process-dubai-poster.jpg"
        aria-label="Professional marble polishing process in Dubai — MarblePro UAE"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src="/videos/marble-polishing-process-dubai.webm" type="video/webm" />
        <source src="/videos/marble-polishing-process-dubai.mp4"  type="video/mp4" />
      </video>

      {/* Mute / Unmute button */}
      <button
        onClick={toggleMute}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        style={{
          position: 'absolute', top: 16, right: 16, zIndex: 10,
          width: 40, height: 40, borderRadius: 999,
          background: 'rgba(11,11,11,0.65)', backdropFilter: 'blur(6px)',
          border: '1px solid rgba(246,241,232,0.2)',
          color: 'var(--paper)', display: 'grid', placeItems: 'center',
          cursor: 'pointer', transition: 'background .2s',
        }}
      >
        {muted ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
        )}
      </button>

      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7))' }} />
      <div style={{ position: 'absolute', left: 24, right: 24, bottom: 24, color: 'var(--paper)' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7 }}>Live polish · 3000 grit</span>
        <p style={{ fontFamily: 'var(--display)', fontWeight: 380, fontSize: 26, lineHeight: 1.15, letterSpacing: '-0.02em', margin: '10px 0 0' }}>
          We measure gloss with a meter — <em style={{ color: 'var(--gold)' }}>minimum 85 GU</em> before we leave site.
        </p>
      </div>
    </div>
  );
}

function Process() {
  return (
    <section className="process" data-screen-label="process" id="process">
      <div className="sec">
        <div className="sec-head">
          <div>
            <span className="sec-eyebrow" style={{ opacity: 0.7, color: 'var(--paper)' }}>03 — Our 5-stage system</span>
            <h2 className="sec-title" style={{ color: 'var(--paper)' }}>How we restore <em>floor restoration services</em> — zero mess, one polished result.</h2>
          </div>
          <p className="sec-lead" style={{ color: 'var(--muted-d)' }}>
            Most jobs are completed in a single day. We work around your furniture, your family
            and your business hours — and we never leave dust behind.
          </p>
        </div>
        <div className="process-grid">
          <div className="process-sticky">
            <ProcessVideo />
          </div>
          <div>
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-n">{s.n}</div>
                <div><h3>{s.h}</h3><p>{s.p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="sec" data-screen-label="gallery" id="gallery">
      <div className="sec-head">
        <div>
          <span className="sec-eyebrow">04 — Before &amp; after</span>
          <h2 className="sec-title">Real Marble Polishing Results Across Dubai &amp; UAE — <em>Before &amp; After.</em></h2>
        </div>
        <p className="sec-lead">
          Real marble floor restoration, deep scratch removal and yellow stain removing results from
          Dubai, Abu Dhabi and Sharjah. Same stone, same lighting — only the finish has changed.
          Slide the handle to compare.
        </p>
      </div>
      <div className="ba-strip">
        <BeforeAfter hue={32} vein={0.22} title="Marble floor restoration"        sub="Marble · villa living area"     beforeImg="/images/gallery/ba1-before.webp" afterImg="/images/gallery/ba1-after.webp" />
        <BeforeAfter hue={20} vein={0.30} title="Bathroom stone floor"            sub="Stone tiles · full bathroom"    beforeImg="/images/gallery/ba2-before.webp" afterImg="/images/gallery/ba2-after.webp" />
        <BeforeAfter hue={45} vein={0.18} title="Marble countertop sealing"       sub="Marble · kitchen countertop"    beforeImg="/images/gallery/ba3-before.webp" afterImg="/images/gallery/ba3-after.webp" />
        <BeforeAfter hue={28} vein={0.20} title="Terrazzo floor cleaning"         sub="Terrazzo · commercial kitchen"  beforeImg="/images/gallery/ba4-before.webp" afterImg="/images/gallery/ba4-after.webp" />
        <BeforeAfter hue={50} vein={0.15} title="Travertine floor restoration"    sub="Travertine · villa living room" beforeImg="/images/gallery/ba5-before.webp" afterImg="/images/gallery/ba5-after.webp" />
        <BeforeAfter hue={15} vein={0.34} title="Bathroom marble sink & vanity"   sub="Marble · double sink vanity"    beforeImg="/images/gallery/ba6-before.webp" afterImg="/images/gallery/ba6-after.webp" />
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section className="sec" data-screen-label="coverage" id="coverage" style={{ background: 'var(--paper2)', maxWidth: 'none', padding: '110px 0' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 36px' }}>
        <div className="sec-head" style={{ marginBottom: 30 }}>
          <div>
            <span className="sec-eyebrow">05 — Where we work</span>
            <h2 className="sec-title">Marble Polishing Services Across All 7 UAE Emirates — <em>Dubai to Fujairah.</em></h2>
          </div>
          <p className="sec-lead">
            From Dubai to Fujairah — affordable marble floor polishing services UAE-wide. Same crew,
            same diamond-grade standards, same-week availability across all 7 emirates. Tap your emirate
            for local response times.
            <Link href="/locations" style={{ display: 'block', marginTop: 18, fontFamily: 'var(--grot)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink)' }}>
              View all locations →
            </Link>
          </p>
        </div>
        <CityCards />
      </div>
    </section>
  );
}

function GMBReviews() {
  return (
    <section className="sec" data-screen-label="reviews" id="reviews">
      <div className="sec-head">
        <div>
          <span className="sec-eyebrow">06 — Google reviews</span>
          <h2 className="sec-title">Trusted by UAE Homeowners — 4.4 Stars on Google for <em>Marble Polishing Dubai.</em></h2>
          <div className="gmb-badge">
            <div className="g-icon">G</div>
            <div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                <span className="rate">4.4</span>
                <span style={{ color: 'var(--gold)', letterSpacing: 2 }}>★★★★★</span>
              </div>
              <div className="lbl">
                <a href="https://maps.google.com/?cid=9770771076887647238" target="_blank" rel="noopener" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  Google · Marble Polishing Services Dubai
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="sec-lead">
          Real Google reviews from UAE villa owners, hotels and commercial clients across Dubai, Abu Dhabi and Sharjah. See why MarblePro is the best marble polishing company in Dubai.
        </p>
      </div>
      <div className="gmb-wrap">
        <div className="gmb-map">
          <iframe title="MarblePro on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8406840897!2d55.459874!3d25.3095562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f62b0ca5897%3A0x8798c086d38c9406!2sMarble%20polishing%20and%20crystallization%20services!5e0!3m2!1sen!2s!4v1779095340335!5m2!1sen!2s"
            allowFullScreen />
        </div>
        <div className="gmb-reviews">
          {REVIEWS.map((r, i) => (
            <article className="gmb-review" key={i}>
              <div className="top">
                <div className="avatar">{r.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}</div>
                <div style={{ flex: 1 }}>
                  <div className="name">{r.name}</div>
                  <div className="stars">{'★'.repeat(r.stars)}</div>
                </div>
                <div className="g-icon" style={{ width: 28, height: 28, fontSize: 14 }}>G</div>
              </div>
              <p>&quot;{r.text}&quot;</p>
              <span className="time">{r.time}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="sec" data-screen-label="faq" id="faq" style={{ background: 'var(--paper)', maxWidth: 'none', padding: '110px 0' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 36px' }}>
        <div className="faq-wrap">
          <div>
            <span className="sec-eyebrow">07 — FAQ</span>
            <h2 className="sec-title" style={{ marginTop: 14 }}>Questions <em>worth asking.</em></h2>
            <p style={{ maxWidth: '32ch', fontSize: 15, lineHeight: 1.6, opacity: 0.72, marginTop: 24 }}>
              Couldn&apos;t find what you&apos;re looking for? Drop us a WhatsApp — we usually reply within minutes.
            </p>
          </div>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`faq-item ${openIdx === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="plus" />
                </button>
                <div className="faq-a"><div className="faq-a-inner">{f.a}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  const { open } = useRequestCall();
  const showToast = useToast();
  const [number, setNumber] = useState('');
  const [job, setJob] = useState('');
  const [err, setErr] = useState('');
  const [sent, setSent] = useState(false);
  const [desktop, setDesktop] = useState(false);
  useEffect(() => { setDesktop(onDesktop()); }, []);
  const wa = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!number.trim()) { setErr('Phone number is required'); return; }
    setErr('');
    try { await sendEnquiry({ type: 'WhatsApp Quote (Section 8)', phone: number, work: job }); } catch (e) { console.error('EmailJS:', e); }
    setSent(true);
    showToast('Enquiry sent! We\'ll be in touch shortly.');
    if (!onDesktop()) {
      const msg = encodeURIComponent(`Hi MarblePro, I need a quote.\nWork: ${job || 'Marble polishing'}\nNumber: ${number}`);
      window.open(`${WA_LINK}?text=${msg}`, '_blank');
    }
  };
  return (
    <section className="cta-band" data-screen-label="quote" id="quote">
      <div className="sec">
        <div className="cta-inner">
          <div>
            <span className="sec-eyebrow">08 — Free quote · all UAE emirates</span>
            <h2 className="cta-h">Affordable marble floor polishing services — <em>free quote today.</em></h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, opacity: 0.78, maxWidth: '42ch', marginTop: 22 }}>
              As the best marble polishing company in Dubai, we give you a fixed-price quote in minutes — no site fee, no fine print. Italian marble polishing and crystallization, floor restoration, countertop polishing and yellow stain removing across all 7 UAE emirates.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 24, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.7 }}>
              <span>✦ Same-day emergency service</span>
              <span>✦ Fixed price · written guarantee</span>
              <span>✦ Mon–Sun 8 am – 10 pm</span>
            </div>
          </div>
          <form className="quote-form" onSubmit={wa}>
            <div className="lab">Free Quote Request</div>
            <h3>Get your free quote.</h3>
            <div className="qf-row" style={{ marginTop: 24 }}>
              <label htmlFor="qf-work">The work</label>
              <input id="qf-work" value={job} onChange={(e) => setJob(e.target.value)} placeholder="e.g. polish marble floor, 200 sq ft" />
            </div>
            <div className="qf-row">
              <label htmlFor="qf-num">Your number <span style={{ color:'#e53e3e' }}>*</span></label>
              <input id="qf-num" value={number} onChange={(e) => { setNumber(e.target.value); setErr(''); }} placeholder="+971 5X XXX XXXX" inputMode="tel" required style={err ? { borderColor:'#e53e3e' } : {}} />
              {err && <span style={{ color:'#e53e3e', fontSize:12, marginTop:4, display:'block' }}>{err}</span>}
            </div>
            <div className="qf-btns">
              <button type="submit" className="btn btn-wa" disabled={sent}>
                <span className="arr" style={{ background: '#082b13' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </span>
                {sent ? 'Sent ✓' : desktop ? 'Send Enquiry' : 'Send on WhatsApp'}
              </button>
              <button type="button" className="btn-call" onClick={open} style={{ justifyContent: 'center' }}>Request a Call →</button>
            </div>
            <p className="qf-note">{sent ? 'We received your enquiry — expect a WhatsApp from us shortly!' : '"Send" opens WhatsApp and notifies us instantly. "Request a call" — we\'ll dial back fast.'}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function HomeClient() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesGrid />
      <Process />
      <Gallery />
      <Coverage />
      <GMBReviews />
      <PageFaqCta />
      <QuoteBand />
    </>
  );
}
