import type { MetadataRoute } from 'next';
import { getAllPropertySlugs } from '@/lib/properties';
import { getAllZoneSlugs } from '@/lib/zones';
import { siteConfig } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/propiedades`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/servicios`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/contacto`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ];

    const propertyPages: MetadataRoute.Sitemap = getAllPropertySlugs().map((slug) => ({
        url: `${baseUrl}/propiedades/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const zonePages: MetadataRoute.Sitemap = getAllZoneSlugs().map((slug) => ({
        url: `${baseUrl}/zonas/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...staticPages, ...propertyPages, ...zonePages];
}
