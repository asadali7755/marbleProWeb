import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import ContactClient from '@/components/sections/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Free Quote — Affordable Marble Polishing & Emergency Floor Restoration Dubai | MarblePro',
  description: 'Get a free quote from the best marble polishing company in Dubai. Affordable marble floor polishing services UAE, emergency residential marble floor restoration services Dubai. Call, WhatsApp or email — available 7 days a week across all UAE emirates.',
  keywords: 'affordable marble floor polishing services UAE, emergency residential marble floor restoration services Dubai, best marble polishing company in Dubai, free marble polishing quote Dubai, marble polishing contact UAE',
  alternates: {
    canonical: 'https://www.marblepro.ae/contact',
  },
  openGraph: {
    title: 'Free Quote — Affordable Marble Polishing & Emergency Floor Restoration Dubai | MarblePro',
    description: 'Get a free quote from the best marble polishing company in Dubai. Affordable marble floor polishing services UAE, emergency residential marble floor restoration services Dubai. Call, WhatsApp or email — 7 days a week.',
    url: 'https://www.marblepro.ae/contact',
    images: [{ url: '/raw/twittercard.jpg', width: 1200, height: 630, alt: 'Contact MarblePro — Free Marble Polishing Quote Dubai' }],
  },
};

export default function ContactPage() {
  return (
    <>
      <Nav active="contact" />
      <ContactClient />
      <Footer />
      <Fab />
    </>
  );
}
