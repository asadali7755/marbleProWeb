import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import HomeClient from '@/components/sections/home/HomeClient';

export const metadata: Metadata = {
  title: 'Marble Polishing Dubai | Floor Restoration UAE | MarblePro',
  description: 'Marble floor polishing, crystallization, terrazzo and granite restoration in Dubai and across the UAE. Free inspection, open 24/7. Call 054 556 77 99.',
  keywords: 'marble polishing, marble polishing dubai, marble floor restoration, marble crystallization, marble polishing company dubai',
  alternates: {
    canonical: 'https://www.marblepro.ae',
  },
  openGraph: {
    title: 'Marble Polishing Dubai | Floor Restoration UAE | MarblePro',
    description: 'Marble floor polishing, crystallization, terrazzo and granite restoration in Dubai and across the UAE. Free inspection, open 24/7. Call 054 556 77 99.',
    url: 'https://www.marblepro.ae',
    images: [{ url: '/raw/twittercard.jpg', width: 1200, height: 630, alt: 'MarblePro marble polishing in Dubai, UAE' }],
  },
};

export default function HomePage() {
  return (
    <>
      <Nav active="home" />
      <main>
        <HomeClient />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
