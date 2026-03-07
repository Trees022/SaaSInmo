import zonesData from '@/data/zones.json';

export interface Zone {
    id: string;
    name: string;
    slug: string;
    description: string;
    highlights: string[];
    opportunities: string;
    image: string;
}

export function getAllZones(): Zone[] {
    return zonesData as Zone[];
}

export function getZoneBySlug(slug: string): Zone | undefined {
    return getAllZones().find((z) => z.slug === slug);
}

export function getAllZoneSlugs(): string[] {
    return getAllZones().map((z) => z.slug);
}
