import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import ServicesClient from '@/components/sections/services/ServicesClient';

export const metadata: Metadata = {
  title: 'Marble & Travertine Polishing Dubai · Terrazzo, Granite, Quartz & Corian — MarblePro UAE',
  description: 'Expert marble polishing Dubai, travertine polishing Dubai, travertine restoration UAE, floor polishing Abu Dhabi, Sharjah & Ajman. Terrazzo, granite, quartz, Corian & yellow stain removing across all 7 UAE emirates. Free on-site quote.',
  keywords: 'marble polishing dubai, travertine polishing dubai, travertine restoration dubai, travertine floor polishing abu dhabi, travertine cleaning sharjah, travertine sealing ajman, travertine marble dubai, marble floor polishing, floor polishing dubai, countertop polishing, kitchen top polishing, floor restoration services, marble floor restoration services, terrazzo floor polishing dubai, terrazzo polishing dubai, quartz polishing, corian countertop polishing, yellow stain removing, granite polishing, floor polishing uae',
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
