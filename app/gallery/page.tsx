import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import GalleryClient from '@/components/sections/gallery/GalleryClient';
import ExternalRef from '@/components/marble/ExternalRef';

export const metadata: Metadata = {
  title: 'Marble Polishing Before and After Gallery | MarblePro',
  description: 'Before and after photos and videos of our marble polishing work, in two sections: floors and countertops. Villas, apartments and kitchens in the UAE.',
  keywords: 'marble polishing before and after, marble floor before and after, marble polishing dubai',
  alternates: {
    canonical: 'https://www.marblepro.ae/gallery',
  },
  openGraph: {
    title: 'Before & After Gallery — Marble Polishing Floors & Countertops | MarblePro',
    description: 'Before & after photos and videos of MarblePro marble polishing — floors and countertops across Dubai and the UAE.',
    url: 'https://www.marblepro.ae/gallery',
    images: [{ url: '/raw/twittercard.jpg', width: 1200, height: 630, alt: 'MarblePro Before & After Gallery — Marble Polishing Dubai' }],
  },
};

export default function GalleryPage() {
  return (
    <>
      <Nav active="gallery" />
      <main>
        <GalleryClient />
        <ExternalRef path="/gallery" />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
