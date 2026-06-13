'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRequestCall } from './RequestCallModal';
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, WA_LINK, SERVICES, EMIRATES } from './constants';

export default function Footer() {
  const { open } = useRequestCall();
  const [desktop, setDesktop] = useState(false);
  useEffect(() => { setDesktop(window.matchMedia('(hover:hover) and (pointer:fine)').matches); }, []);
  return (
    <footer className="foot" data-screen-label="footer">
      <div className="foot-inner">
        <div className="foot-top">
          <div>
            <Link href="/" className="logo" style={{ color: 'var(--paper)' }}>
              Marble<span className="dot">.</span>Pro<span className="pro">UAE</span>
            </Link>
            <h2 className="foot-brand-h">Stone polishing, <em>perfected</em> in the UAE.</h2>
            <button onClick={open} className="foot-call" style={{ background: 'transparent', color: 'var(--paper)', cursor: 'pointer' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 10, letterSpacing: '0.16em', opacity: 0.6 }}>REQUEST A CALL</span>
                <span className="num">{PHONE_DISPLAY}</span>
              </div>
            </button>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Service Areas</h3>
            <ul>
              {EMIRATES.map((e) => (
                <li key={e.slug}><Link href={`/locations/${e.slug}`}>{e.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li><Link href="/blog">Marble Care Guides</Link></li>
              <li><a href={`tel:${PHONE_TEL}`}><strong style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 400, letterSpacing: '-0.01em' }}>{PHONE_DISPLAY}</strong></a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li style={{ opacity: 0.65, marginTop: 8 }}>Mon — Sun · 8:00 am — 10:00 pm</li>
              <li style={{ opacity: 0.65 }}>Dubai · Abu Dhabi · Sharjah</li>
            </ul>
            <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
              {desktop ? (
                <button onClick={open} style={{ padding: '8px 12px', border: '1px solid var(--line-d)', borderRadius: 999, fontSize: 11, fontFamily: 'var(--grot)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'transparent', color: 'inherit', cursor: 'pointer' }}>Request a Call</button>
              ) : (
                <a href={WA_LINK} target="_blank" rel="noopener" style={{ padding: '8px 12px', border: '1px solid var(--line-d)', borderRadius: 999, fontSize: 11, fontFamily: 'var(--grot)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>WhatsApp</a>
              )}
              <a href="https://maps.google.com/?cid=9770771076887647238" target="_blank" rel="noopener" style={{ padding: '8px 12px', border: '1px solid var(--line-d)', borderRadius: 999, fontSize: 11, fontFamily: 'var(--grot)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Google</a>
              <a href="https://maps.google.com/?cid=9770771076887647238" target="_blank" rel="noopener" style={{ padding: '8px 12px', border: '1px solid var(--gold)', borderRadius: 999, fontSize: 11, fontFamily: 'var(--grot)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)' }}>Review us ★</a>
            </div>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 MarblePro — Marble Polishing Services UAE</span>
          <span>marblepro.ae · DED Licensed</span>
        </div>
      </div>
    </footer>
  );
}
