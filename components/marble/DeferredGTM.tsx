'use client';
import { useEffect } from 'react';

const GTM_ID = 'GTM-W4GMWCRL';
// Load anyway after this long, so visitors who only read still count.
const FALLBACK_MS = 3500;
const TRIGGERS = ['pointerdown', 'keydown', 'touchstart', 'scroll'] as const;

/**
 * Google Tag Manager (+ GA4 inside it) is ~300 KB of script. Loading it
 * straight after hydration competed with the page's own images and fonts
 * on mobile, so it now loads on the first interaction or after a short
 * delay, whichever comes first. Events pushed to window.dataLayer before
 * that (qualify_lead, contact, ...) are queued and processed when GTM boots.
 */
export default function DeferredGTM() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });

    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      cleanup();
      const s = document.createElement('script');
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(s);
    };
    const timer = window.setTimeout(load, FALLBACK_MS);
    const cleanup = () => {
      window.clearTimeout(timer);
      TRIGGERS.forEach((t) => window.removeEventListener(t, load));
    };
    TRIGGERS.forEach((t) => window.addEventListener(t, load, { once: true, passive: true }));
    return cleanup;
  }, []);

  return null;
}
