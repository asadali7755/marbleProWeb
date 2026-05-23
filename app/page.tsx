import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import HomeClient from '@/components/sections/home/HomeClient';

export const metadata: Metadata = {
  title: 'Marble Polishing Dubai | Floor Restoration UAE | MarblePro',
  description: "MarblePro — Dubai's best marble polishing company. Expert floor polishing, Italian crystallization, terrazzo & granite restoration across all 7 UAE emirates. Free quote · 054 556 77 99.",
  keywords: 'best marble polishing company in Dubai, affordable marble floor polishing services UAE, Italian marble polishing and crystallization Dubai, emergency residential marble floor restoration services Dubai, marble polishing dubai, marble floor polishing, floor polishing dubai, countertop polishing, kitchen top polishing, floor restoration services, marble floor restoration services, terrazzo floor polishing dubai, terrazzo polishing dubai, quartz polishing, corian countertop polishing, yellow stain removing, granite polishing, multi type floor polishing company UAE',
  alternates: {
    canonical: 'https://www.marblepro.ae',
  },
  openGraph: {
    title: 'Best Marble Polishing Company in Dubai | Affordable Floor Restoration UAE — MarblePro',
    description: 'MarblePro — best marble polishing company in Dubai offering affordable marble floor polishing services UAE-wide. Italian marble polishing and crystallization Dubai, emergency residential marble floor restoration, terrazzo, granite & quartz polishing across all 7 emirates.',
    url: 'https://www.marblepro.ae',
    images: [{ url: '/raw/twittercard.jpg', width: 1200, height: 630, alt: 'MarblePro — Best Marble Polishing Company in Dubai UAE' }],
  },
};

export default function HomePage() {
  return (
    <>
      <Nav active="home" />
      <HomeClient />
      <Footer />
      <Fab />
    </>
  );
}
