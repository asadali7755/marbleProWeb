import { MetadataRoute } from 'next';
import { SERVICE_DETAIL } from '@/lib/servicesData';
import { LOCATIONS } from '@/lib/locationsData';
import { GUIDES } from '@/lib/guidesData';
import { PAGE_UPDATES } from '@/lib/pageUpdates';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.marblepro.ae';
  // Fixed date of the last site-wide content change. A lastmod that changes on
  // every request (new Date()) teaches Google to ignore it. Pages changed later
  // get their own date from lib/pageUpdates.ts.
  const now = new Date('2026-11-24');

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

  const withPageDates = (routes: MetadataRoute.Sitemap): MetadataRoute.Sitemap =>
    routes.map((r) => {
      const path = r.url === baseUrl ? '/' : r.url.slice(baseUrl.length);
      const changed = PAGE_UPDATES[path];
      return changed ? { ...r, lastModified: new Date(changed) } : r;
    });

  return withPageDates([...core, ...services, ...locations, ...guides]);
}
