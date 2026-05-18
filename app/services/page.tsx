import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import ServicesClient from '@/components/sections/services/ServicesClient';

export const metadata: Metadata = {
  title: 'Marble Polishing Dubai · Terrazzo, Granite, Quartz & Corian Polishing — MarblePro UAE',
  description: 'Full range of marble polishing Dubai, marble floor polishing, terrazzo polishing Dubai, granite polishing, quartz polishing, Corian countertop polishing, yellow stain removing and floor restoration services across the UAE.',
  keywords: 'marble polishing dubai, marble floor polishing, floor polishing dubai, countertop polishing, kitchen top polishing, floor restoration services, marble floor restoration services, terrazzo floor polishing dubai, terrazzo polishing dubai, quartz polishing, corian countertop polishing, yellow stain removing, granite polishing',
};

export default function ServicesPage() {
  return (
    <>
      <Nav active="services" />
      <ServicesClient />
      <Footer />
      <Fab />
    </>
  );
}
