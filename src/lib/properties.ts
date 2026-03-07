import propertiesData from '@/data/properties.json';

export interface Property {
    id: string;
    title: string;
    slug: string;
    price: number;
    currency: string;
    location: string;
    zone: string;
    address: string;
    type: string;
    status: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    lotArea: number;
    yearBuilt: number;
    description: string;
    features: string[];
    images: string[];
    featured: boolean;
}

export function getAllProperties(): Property[] {
    return propertiesData as Property[];
}

export function getPropertyBySlug(slug: string): Property | undefined {
    return getAllProperties().find((p) => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
    return getAllProperties().filter((p) => p.featured);
}

export function getPropertiesByZone(zoneSlug: string): Property[] {
    return getAllProperties().filter((p) => p.zone === zoneSlug);
}

export function formatPrice(price: number): string {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        maximumFractionDigits: 0,
    }).format(price);
}

export function getAllPropertySlugs(): string[] {
    return getAllProperties().map((p) => p.slug);
}
