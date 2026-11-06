import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import LocationsClient from '@/components/sections/locations/LocationsClient';
import ExternalRef from '@/components/marble/ExternalRef';

export const metadata: Metadata = {
  title: 'Marble Polishing UAE: All 7 Emirates | MarblePro',
  description: 'Marble, granite and terrazzo polishing and floor restoration in all 7 emirates: Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Umm Al Quwain and Fujairah.',
  keywords: 'marble polishing UAE, marble polishing dubai, marble polishing abu dhabi, marble polishing sharjah, marble polishing ajman',
  alternates: {
    canonical: 'https://www.marblepro.ae/locations',
  },
  openGraph: {
    title: 'Marble Polishing UAE: All 7 Emirates — MarblePro',
    description: 'Marble, granite and terrazzo polishing and floor restoration in all 7 emirates, from an office in Sharjah.',
    url: 'https://www.marblepro.ae/locations',
    images: [{ url: '/raw/twittercard.jpg', width: 1200, height: 630, alt: 'MarblePro — Marble Polishing Across All UAE Emirates' }],
  },
};

export default function LocationsPage() {
  return (
    <>
      <Nav active="locations" />
      <main>
        <LocationsClient />
        <ExternalRef path="/locations" />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
