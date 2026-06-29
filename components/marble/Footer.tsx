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
        <div className="foot-social">
          <a href="https://www.facebook.com/marblepro.ae/" target="_blank" rel="noopener" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.instagram.com/marbleprodubai/" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://x.com/marbleprodubai/" target="_blank" rel="noopener" aria-label="X (Twitter)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
        <div className="foot-bot">
          <span>© 2026 MarblePro — Marble Polishing Services UAE</span>
          <span>marblepro.ae · DED Licensed</span>
        </div>
      </div>
    </footer>
  );
}
