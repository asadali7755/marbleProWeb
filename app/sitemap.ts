import { MetadataRoute } from 'next';
import { SERVICE_DETAIL } from '@/lib/servicesData';
import { LOCATIONS } from '@/lib/locationsData';
import { GUIDES } from '@/lib/guidesData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.marblepro.ae';
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  // Blog / guides (Phase 4)
  const guides: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${baseUrl}/blog/${g.slug}`,
    lastModified: new Date(g.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dedicated service pages (Phase 1)
  const services: MetadataRoute.Sitemap = SERVICE_DETAIL.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Dedicated per-emirate location pages (Phase 1)
  const locations: MetadataRoute.Sitemap = LOCATIONS.map((l) => ({
    url: `${baseUrl}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...core, ...services, ...locations, ...guides];
}
