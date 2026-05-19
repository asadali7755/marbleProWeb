import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import GalleryClient from '@/components/sections/gallery/GalleryClient';

export const metadata: Metadata = {
  title: 'Before & After Gallery — Travertine, Onyx, Calacatta & Marble Polishing Dubai | MarblePro UAE',
  description: 'See real before & after results of marble, travertine, onyx, Crema Marfil, Calacatta & Emperador polishing in Dubai, Abu Dhabi & Sharjah. 45 real UAE projects, 15 services — drag the line to compare.',
};

export default function GalleryPage() {
  return (
    <>
      <Nav active="gallery" />
      <GalleryClient />
      <Footer />
      <Fab />
    </>
  );
}
