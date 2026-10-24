'use client';
import { useEffect } from 'react';

const WHATSAPP_HREF = /^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i;

// Where on the page the link sits. An explicit data-cta on the link or any
// ancestor wins; otherwise fall back to the surrounding landmark/section.
function linkLocation(link: HTMLElement): string {
  const tagged = link.closest<HTMLElement>('[data-cta]');
  if (tagged?.dataset.cta) return tagged.dataset.cta;
  if (link.closest('.fab')) return 'floating_button';
  if (link.closest('footer')) return 'footer';
  if (link.closest('header, nav')) return 'navbar';
  if (link.closest('.success-toast')) return 'toast';
  if (link.closest('.modal')) return 'request_call_modal';
  const section = link.closest<HTMLElement>('section');
  if (section?.dataset.screenLabel) return section.dataset.screenLabel;
  if (section?.id) return section.id;
  return 'content';
}

/**
 * Tracks every WhatsApp and tel: link on the site with one delegated listener,
 * so WhatsApp/call leads (which never pass through the enquiry email) are
 * counted. Pushes a GTM `contact` event; GTM forwards it to GA4.
 */
export default function ContactClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute('href') || '';
      const method = href.startsWith('tel:') ? 'phone' : WHATSAPP_HREF.test(href) ? 'whatsapp' : null;
      if (!method) return;
      try {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'contact', method, link_location: linkLocation(link), page_path: window.location.pathname });
      } catch {}
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
