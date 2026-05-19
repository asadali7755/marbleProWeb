import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import ServicesClient from '@/components/sections/services/ServicesClient';

export const metadata: Metadata = {
  title: 'Calacatta, Emperador, Travertine & Onyx Marble Polishing Dubai — MarblePro UAE',
  description: 'Expert marble polishing Dubai — Calacatta, Emperador, Crema Marfil, travertine & onyx specialists. Floor restoration Abu Dhabi, Sharjah & Ajman. Free on-site quote across all 7 UAE emirates.',
  keywords: 'emperador marble polishing dubai, emperador marble restoration uae, emperador marble polishing abu dhabi, emperador cleaning sharjah, emperador marble sealing ajman, dark marble polishing dubai, spanish marble polishing dubai, calacatta marble polishing dubai, calacatta marble restoration uae, calacatta marble cleaning abu dhabi, crema marfil polishing dubai, crema marfil restoration uae, travertine polishing dubai, travertine floor polishing abu dhabi, onyx marble polishing dubai, onyx restoration uae, marble polishing dubai, marble floor polishing, floor polishing dubai, floor restoration services, terrazzo floor polishing dubai, quartz polishing, yellow stain removing, granite polishing',
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
