import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import ServicesClient from '@/components/sections/services/ServicesClient';

export const metadata: Metadata = {
  title: 'Marble & Stone Polishing Services Dubai & UAE | MarblePro',
  description: '19 stone-care services across the UAE: marble polishing, floor restoration, countertops, granite, terrazzo, quartz, Corian and crystallization.',
  keywords: 'premium marble countertop polishing Dubai, kitchen top polishing and sealing services UAE, Corian countertop polishing and scratch repair Dubai, quartz polishing and stain protection Abu Dhabi, terrazzo floor polishing Dubai price, terrazzo polishing and restoration contractors UAE, commercial granite polishing services Dubai, multi type floor polishing company UAE, deep scratch removal and marble crack filling Dubai, professional yellow stain removing for natural stone UAE, emperor marble polishing dubai, calacatta marble polishing dubai, crema marfil polishing dubai, travertine polishing dubai, onyx marble polishing dubai, floor restoration services',
  alternates: {
    canonical: 'https://www.marblepro.ae/services',
  },
  openGraph: {
    title: 'Premium Marble Countertop Polishing, Terrazzo & Granite Dubai — MarblePro UAE',
    description: 'Premium marble countertop polishing Dubai, terrazzo floor polishing and restoration contractors UAE, commercial granite polishing services Dubai, Corian countertop polishing and scratch repair, quartz polishing and stain protection Abu Dhabi.',
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
      </main>
      <Footer />
      <Fab />
    </>
  );
}
