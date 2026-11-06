import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import ServicesClient from '@/components/sections/services/ServicesClient';
import ExternalRef from '@/components/marble/ExternalRef';

export const metadata: Metadata = {
  title: 'Marble & Stone Polishing Services Dubai & UAE | MarblePro',
  description: '26 stone-care services across the UAE: marble and tile polishing, stairs, floor restoration, countertops, granite, terrazzo, quartz and Corian.',
  keywords: 'marble polishing services, stone polishing services dubai, marble floor restoration, granite polishing, terrazzo polishing',
  alternates: {
    canonical: 'https://www.marblepro.ae/services',
  },
  openGraph: {
    title: 'Marble & Stone Polishing Services Dubai & UAE — MarblePro',
    description: '26 marble and stone polishing services across the UAE: polishing, restoration, crystallization, countertops, granite, terrazzo, quartz and Corian.',
    url: 'https://www.marblepro.ae/services',
    images: [{ url: '/raw/twittercard.jpg', width: 1200, height: 630, alt: 'MarblePro Services — Marble, Terrazzo & Granite Polishing Dubai' }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Nav active="services" />
      <main>
        <ServicesClient />
        <ExternalRef path="/services" />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
