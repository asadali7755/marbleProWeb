'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRequestCall } from '@/components/marble/RequestCallModal';
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, WA_LINK, EMIRATES, SERVICES, CITY_IMG } from '@/components/marble/constants';
import { sendEnquiry } from '@/lib/sendEmail';

const EMIRATE_RESPONSE = [
  { slug:'dubai',          name:'Dubai',          time:'Within 90 min' },
  { slug:'abu-dhabi',      name:'Abu Dhabi',      time:'Within 48 hours' },
  { slug:'sharjah',        name:'Sharjah',        time:'Within 72 hours' },
  { slug:'ajman',          name:'Ajman',          time:'3–5 days' },
  { slug:'ras-al-khaimah', name:'Ras Al Khaimah', time:'Within 7 days' },
  { slug:'umm-al-quwain',  name:'Umm Al Quwain',  time:'Within 7 days' },
  { slug:'fujairah',       name:'Fujairah',       time:'Within 10 days' },
];

const REVIEWS = [
  { name:'Ahmed K.',    stars:5, src:'Google · Dubai',     text:'Restored a 12-year-old marble floor to better than new.' },
  { name:'Layla R.',    stars:5, src:'Google · Sharjah',   text:'Beautiful job on our terrazzo lobby — tenants noticed within a day.' },
  { name:'Mohammed A.', stars:5, src:'Google · Abu Dhabi', text:"Removed yellow stains we'd lived with for years. Worth every dirham." },
];

function QuoteFormBand() {
  const [tab, setTab] = useState<'quote'|'call'>('quote');
  const [done, setDone] = useState(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [emirate, setEmirate] = useState('Dubai');
  const [service, setService] = useState('Marble Polishing');
  const [job, setJob] = useState('');
  const [phoneErr, setPhoneErr] = useState('');

  const sendWa = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) { setPhoneErr('Phone number is required'); return; }
    setPhoneErr('');
    const msg = encodeURIComponent(`Hi MarblePro, I need a quote.\n\nName: ${name}\nNumber: ${phone}\nEmirate: ${emirate}\nService: ${service}\nDetails: ${job || '(see attached photo)'}`);
    window.open(`${WA_LINK}?text=${msg}`, '_blank');
    sendEnquiry({ type: 'Quote Request (Contact Page)', phone, work: `${service} — ${emirate}${job ? ` — ${job}` : ''}`, name }).catch(() => {});
  };
  const sendMail = async () => {
    if (!phone.trim()) { setPhoneErr('Phone number is required'); return; }
    setPhoneErr('');
    try { await sendEnquiry({ type: 'Email Quote (Contact Page)', phone, work: `${service} — ${emirate}${job ? ` — ${job}` : ''}`, name }); } catch {}
    setDone(true);
  };
  const requestCall = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) { setPhoneErr('Phone number is required'); return; }
    setPhoneErr('');
    try { await sendEnquiry({ type: 'Request a Call (Contact Page)', phone, work: emirate, name }); } catch {}
    setDone(true);
  };

  return (
    <section className="c-quote-band" data-screen-label="contact-form" id="quote">
      <div className="c-quote-inner">
        <div className="c-form">
          <span className="lab">Free quote — no obligation</span>
          <h2>Tell us about <em>your floor.</em></h2>
          <p className="sub">Pick a tab — full quote or just leave your number. Either way we read it within an hour during working hours.</p>
          <div className="c-tabs" role="tablist">
            <button className={`c-tab ${tab === 'quote' ? 'active' : ''}`} onClick={() => { setTab('quote'); setDone(false); setPhoneErr(''); }}>Full quote</button>
            <button className={`c-tab ${tab === 'call' ? 'active' : ''}`} onClick={() => { setTab('call'); setDone(false); setPhoneErr(''); }}>Request a call</button>
          </div>
          {done ? (
            <div className="c-success">
              <div className="tick">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 style={{ fontFamily:'var(--display)', fontWeight:380, fontSize:24, margin:'0 0 8px' }}>We got your message!</h3>
              <p style={{ margin:0, opacity:.65, fontSize:14 }}>We&apos;ll be in touch shortly. Can&apos;t wait? Dial <a style={{ color:'var(--gold)' }} href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.</p>
            </div>
          ) : tab === 'quote' ? (
            <form onSubmit={sendWa}>
              <div className="c-field">
                <div className="row">
                  <div className="c-field">
                    <label htmlFor="cf-name">Your name</label>
                    <input id="cf-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ahmed K." />
                  </div>
                  <div className="c-field">
                    <label htmlFor="cf-phone">UAE number *</label>
                    <input id="cf-phone" inputMode="tel" value={phone} onChange={(e) => { setPhone(e.target.value); setPhoneErr(''); }} placeholder="+971 5X XXX XXXX" style={phoneErr ? { borderColor:'#e53e3e' } : {}} />
                    {phoneErr && <span style={{ color:'#e53e3e', fontSize:12, marginTop:4, display:'block' }}>{phoneErr}</span>}
                  </div>
                </div>
              </div>
              <div className="c-field">
                <div className="row">
                  <div className="c-field">
                    <label htmlFor="cf-em">Emirate</label>
                    <select id="cf-em" value={emirate} onChange={(e) => setEmirate(e.target.value)}>
                      {EMIRATES.map((em) => <option key={em.slug}>{em.name}</option>)}
                    </select>
                  </div>
                  <div className="c-field">
                    <label htmlFor="cf-svc">Service</label>
                    <select id="cf-svc" value={service} onChange={(e) => setService(e.target.value)}>
                      {SERVICES.map((s) => <option key={s.slug}>{s.name}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div className="c-field">
                <label htmlFor="cf-job">Job details (size, condition, photos)</label>
                <textarea id="cf-job" value={job} onChange={(e) => setJob(e.target.value)} placeholder="e.g. 200 sq ft Carrara marble floor, dull & lightly scratched, Palm Jumeirah villa" />
              </div>
              <div className="c-btns">
                <button type="submit" className="btn btn-wa">
                  <span className="arr" style={{ background:'#082b13' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  </span>
                  Send on WhatsApp
                </button>
                <button type="button" className="btn btn-secondary on-dark" onClick={sendMail}>Send by email</button>
              </div>
              <p className="c-note">&quot;WhatsApp&quot; opens chat with your details pre-filled. &quot;Email&quot; sends your details directly to <strong style={{ color:'var(--gold)' }}>{EMAIL}</strong>.</p>
            </form>
          ) : (
            <form onSubmit={requestCall}>
              <p className="sub" style={{ maxWidth:'38ch' }}>One field. Drop your number, we&apos;ll call back during working hours — usually within an hour.</p>
              <div className="c-field">
                <div className="row">
                  <div className="c-field">
                    <label htmlFor="cf-call-phone">Your UAE number *</label>
                    <input id="cf-call-phone" inputMode="tel" value={phone} onChange={(e) => { setPhone(e.target.value); setPhoneErr(''); }} placeholder="+971 5X XXX XXXX" autoFocus style={phoneErr ? { borderColor:'#e53e3e' } : {}} />
                    {phoneErr && <span style={{ color:'#e53e3e', fontSize:12, marginTop:4, display:'block' }}>{phoneErr}</span>}
                  </div>
                  <div className="c-field">
                    <label htmlFor="cf-call-em">Emirate (optional)</label>
                    <select id="cf-call-em" value={emirate} onChange={(e) => setEmirate(e.target.value)}>
                      {EMIRATES.map((em) => <option key={em.slug}>{em.name}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center', padding:18, background:'var(--gold)', color:'var(--ink)' }}>
                Call me back →
              </button>
              <p className="c-note">Drop your number and we&apos;ll call you back during working hours — usually within an hour. No spam, no list.</p>
            </form>
          )}
        </div>
        <aside className="c-gmb">
          <div className="c-gmb-card">
            <div className="c-gmb-top">
              <div className="g-icon">G</div>
              <div className="meta">
                <span className="name">MarblePro on Google</span>
                <span className="lbl">Marble Polishing Services Dubai</span>
              </div>
            </div>
            <div className="c-gmb-rating">
              <span className="rate">4.9</span>
              <div>
                <div className="stars">★★★★★</div>
                <div className="meta">Based on Google reviews</div>
              </div>
            </div>
            <div style={{ borderTop:'1px solid var(--line)', marginTop:18, paddingTop:18, display:'grid', gap:14 }}>
              {REVIEWS.map((r, i) => (
                <div key={i} style={{ display:'grid', gap:4 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:10 }}>
                    <strong style={{ fontFamily:'var(--grot)', fontSize:12, fontWeight:700 }}>{r.name}</strong>
                    <span style={{ fontFamily:'var(--mono)', fontSize:9, letterSpacing:'0.14em', opacity:.55, textTransform:'uppercase' }}>{r.src}</span>
                  </div>
                  <p style={{ margin:0, fontFamily:'var(--display)', fontSize:15, lineHeight:1.4, letterSpacing:'-0.005em', opacity:.85 }}>&quot;{r.text}&quot;</p>
                </div>
              ))}
            </div>
            <div className="c-gmb-cta">
              <a href="https://maps.google.com/?cid=9770771076887647238" target="_blank" rel="noopener">View on Google Maps →</a>
              <a href="https://www.google.com/search?q=marble+polishing+services+dubai" target="_blank" rel="noopener">Leave a review</a>
            </div>
          </div>
          <div className="c-map">
            <iframe title="MarblePro Service Area — Dubai" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8406840897!2d55.459874!3d25.3095562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f62b0ca5897%3A0x8798c086d38c9406!2sMarble%20polishing%20and%20crystallization%20services!5e0!3m2!1sen!2s!4v1779095340335!5m2!1sen!2s"
              allowFullScreen />
          </div>
        </aside>
      </div>
    </section>
  );
}

function SupportBand() {
  return (
    <section className="c-support" data-screen-label="support">
      <div className="c-support-inner">
        <span className="sec-eyebrow" style={{ color:'var(--paper)', opacity:.7 }}>— Support &amp; channels</span>
        <h2>How &amp; when we <em>get back to you.</em></h2>
        <div className="c-support-grid">
          <div className="c-support-card">
            <div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
            <h3>Working <em>hours</em></h3>
            <p>We&apos;re available every day of the week — including weekends and public holidays.</p>
            <ul>
              <li><span className="l">Mon — Fri</span><span className="v">8:00 am — 10:00 pm</span></li>
              <li><span className="l">Sat — Sun</span><span className="v">8:00 am — 10:00 pm</span></li>
              <li><span className="l">Public holidays</span><span className="v">9:00 am — 8:00 pm</span></li>
            </ul>
          </div>
          <div className="c-support-card">
            <div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/></svg></div>
            <h3>Phone &amp; <em>WhatsApp</em></h3>
            <p>Call or WhatsApp for the fastest response. Photo quotes via WhatsApp are usually turned around in under 30 minutes.</p>
            <ul>
              <li><span className="l">Phone</span><span className="v">{PHONE_DISPLAY}</span></li>
              <li><span className="l">WhatsApp</span><span className="v">{PHONE_DISPLAY}</span></li>
              <li><span className="l">Response</span><span className="v">Usually &lt; 30 min</span></li>
            </ul>
          </div>
          <div className="c-support-card">
            <div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
            <h3>Email &amp; <em>online</em></h3>
            <p>Email suits commercial quotes, AMC enquiries and detailed job specs. We reply same working day.</p>
            <ul>
              <li><span className="l">Email</span><span className="v" style={{ fontSize:13, fontFamily:'var(--sans)' }}>{EMAIL}</span></li>
              <li><span className="l">Response</span><span className="v">Same working day</span></li>
              <li><span className="l">Best for</span><span className="v">Commercial, AMC</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResponseTimes() {
  return (
    <section className="c-resp" data-screen-label="response-times">
      <div>
        <span className="sec-eyebrow">— Response by emirate</span>
        <h2 className="sec-title" style={{ marginTop:14 }}>How fast we <em>reach you.</em></h2>
      </div>
      <div className="c-resp-grid">
        {EMIRATE_RESPONSE.map((e, i) => (
          <Link key={e.slug} href={`/locations#${e.slug}`} className="c-resp-card">
            <div className="c-img" style={{ backgroundImage: `url("${CITY_IMG[e.slug]}")` }} />
            <div className="c-overlay" />
            <div className="c-content">
              <div className="meta">0{i + 1} — Service area</div>
              <div>
                <div className="name">{e.name}</div>
                <div className="time">
                  Response time
                  <strong>{e.time}</strong>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ContactClient() {
  const { open } = useRequestCall();
  return (
    <>
      <section className="c-hero marble-bg" data-screen-label="contact-hero">
        <div className="marble-veins" />
        <div className="c-hero-inner">
          <div>
            <span className="eyebrow-pill"><span className="pulse" /> Mon–Sun · 8:00 am — 10:00 pm</span>
            <h1>Quote, call,<br/>WhatsApp — <em>your pick.</em></h1>
            <p className="lead">
              Free on-site inspection across all 7 emirates. WhatsApp a photo and we&apos;ll
              ballpark in minutes — or pick a slot and we&apos;ll be at your door for the proper quote.
            </p>
          </div>
          <aside className="c-quick">
            <span className="lab">Talk to us in 30 seconds</span>
            <h3>Pick a channel.</h3>
            <a href={`tel:${PHONE_TEL}`}>
              <span className="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/></svg></span>
              <span className="det"><span className="l">Phone · UAE</span><span className="v">{PHONE_DISPLAY}</span></span>
            </a>
            <a href={`${WA_LINK}?text=${encodeURIComponent("Hi MarblePro, I'd like a quote.")}`} target="_blank" rel="noopener">
              <span className="ico" style={{ background:'#25D366', color:'#082b13' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.7-3.3-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5s-.6-1.5-.9-2.1c-.2-.5-.5-.5-.7-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 .9-1 2.3s1 2.7 1.1 2.9c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
              </span>
              <span className="det"><span className="l">WhatsApp · Photo OK</span><span className="v">{PHONE_DISPLAY}</span></span>
            </a>
            <a href={`mailto:${EMAIL}`}>
              <span className="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
              <span className="det"><span className="l">Email support</span><span className="v" style={{ fontSize:16, letterSpacing:0, fontFamily:'var(--sans)' }}>{EMAIL}</span></span>
            </a>
            <button onClick={open}>
              <span className="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></span>
              <span className="det"><span className="l">Just drop your number</span><span className="v">Request a Call →</span></span>
            </button>
          </aside>
        </div>
      </section>
      <QuoteFormBand />
      <SupportBand />
      <ResponseTimes />
    </>
  );
}
