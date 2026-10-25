import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import GalleryClient from '@/components/sections/gallery/GalleryClient';

export const metadata: Metadata = {
  title: 'Before & After Gallery — Marble Polishing Dubai | MarblePro',
  description: 'Before and after photos and videos of MarblePro marble polishing, split into floors and countertops — villas, apartments, hotels and kitchens across the UAE.',
  keywords: 'how to remove yellow stains from marble floor Dubai, professional yellow stain removing for natural stone UAE, deep scratch removal and marble crack filling Dubai, marble polishing before after Dubai, Italian marble polishing and crystallization Dubai, marble floor restoration gallery UAE',
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
      <Nav active="gallery" theme="dark" />
      <GalleryClient />
      <Footer />
      <Fab />
    </>
  );
}
