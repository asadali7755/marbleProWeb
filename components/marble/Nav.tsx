'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRequestCall } from './RequestCallModal';
import { SERVICES, EMIRATES } from './constants';

interface NavProps {
  active: 'home' | 'services' | 'locations' | 'gallery' | 'contact' | 'blog';
  theme?: 'dark' | 'light';
}

export default function Nav({ active, theme }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const { open } = useRequestCall();

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);

  // Close menu on route change / scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => { setMenuOpen(false); setSvcOpen(false); setLocOpen(false); };
  const cls = `nav${scrolled ? ' scrolled' : ''}${theme === 'dark' ? ' dark-page' : ''}${menuOpen ? ' menu-open' : ''}`;

  return (
    <header className={cls}>
      <div className="nav-inner">
        <Link href="/" className="logo" onClick={closeMenu}>
          Marble<span className="dot">.</span>Pro<span className="pro">UAE</span>
        </Link>

        {/* Desktop links */}
        <nav className="nav-links">
          <Link href="/"          className={active === 'home'      ? 'active' : ''}>Home</Link>

          <span className="nav-dd">
            <Link href="/services" className={active === 'services' ? 'active' : ''}>Services<span className="nav-dd-caret">▾</span></Link>
            <div className="nav-dd-panel" role="menu">
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} role="menuitem">{s.name}</Link>
              ))}
            </div>
          </span>

          <span className="nav-dd">
            <Link href="/locations" className={active === 'locations' ? 'active' : ''}>Locations<span className="nav-dd-caret">▾</span></Link>
            <div className="nav-dd-panel nav-dd-panel--narrow" role="menu">
              {EMIRATES.map((e) => (
                <Link key={e.slug} href={`/locations/${e.slug}`} role="menuitem">{e.name}</Link>
              ))}
            </div>
          </span>

          <Link href="/gallery"   className={active === 'gallery'   ? 'active' : ''}>Gallery</Link>
          <Link href="/blog"      className={active === 'blog'      ? 'active' : ''}>Guides</Link>
          <Link href="/contact"   className={active === 'contact'   ? 'active' : ''}>Contact</Link>
        </nav>

        <div className="nav-right">
          <button className="nav-cta" onClick={open}>
            <span className="ring">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            <span className="nav-cta-text">Request a Call</span>
          </button>

          {/* Hamburger button - mobile only */}
          <button
            className="nav-burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`burger-line ${menuOpen ? 'open' : ''}`} />
            <span className={`burger-line ${menuOpen ? 'open' : ''}`} />
            <span className={`burger-line ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="nav-drawer" onClick={closeMenu}>
          <nav className="nav-drawer-links" onClick={(e) => e.stopPropagation()}>
            <Link href="/" className={active === 'home' ? 'active' : ''} onClick={closeMenu}>Home</Link>

            {/* Services — tap to expand */}
            <button
              className={`nav-drawer-toggle${active === 'services' ? ' active' : ''}`}
              onClick={() => setSvcOpen((v) => !v)}
              aria-expanded={svcOpen}
            >
              Services<span className={`nav-drawer-caret${svcOpen ? ' open' : ''}`}>&#9662;</span>
            </button>
            {svcOpen && (
              <div className="nav-drawer-sub">
                {SERVICES.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} onClick={closeMenu}>{s.name}</Link>
                ))}
              </div>
            )}

            {/* Locations — tap to expand */}
            <button
              className={`nav-drawer-toggle${active === 'locations' ? ' active' : ''}`}
              onClick={() => setLocOpen((v) => !v)}
              aria-expanded={locOpen}
            >
              Locations<span className={`nav-drawer-caret${locOpen ? ' open' : ''}`}>&#9662;</span>
            </button>
            {locOpen && (
              <div className="nav-drawer-sub">
                {EMIRATES.map((e) => (
                  <Link key={e.slug} href={`/locations/${e.slug}`} onClick={closeMenu}>{e.name}</Link>
                ))}
              </div>
            )}

            <Link href="/gallery" className={active === 'gallery' ? 'active' : ''} onClick={closeMenu}>Gallery</Link>
            <Link href="/blog" className={active === 'blog' ? 'active' : ''} onClick={closeMenu}>Guides</Link>
            <Link href="/contact" className={active === 'contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>

            <div className="nav-drawer-ctas">
              <button className="btn btn-primary" onClick={() => { open(); closeMenu(); }}>
                <span className="ring" style={{ width: 22, height: 22, borderRadius: 999, background: 'var(--gold)', display: 'grid', placeItems: 'center' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                Request a Call
              </button>
              <a href="tel:+971545567799" className="btn btn-wa">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.7-3.3-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5s-.6-1.5-.9-2.1c-.2-.5-.5-.5-.7-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 .9-1 2.3s1 2.7 1.1 2.9c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
                Call Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
