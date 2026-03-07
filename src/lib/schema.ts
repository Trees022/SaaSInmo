import { siteConfig } from './seo';
import type { Property } from './properties';

export function organizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/hero/hero-bg.png`,
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: siteConfig.phone,
            contactType: 'sales',
            areaServed: 'CL',
            availableLanguage: 'Spanish',
        },
    };
}

export function localBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Puerto Montt',
            addressRegion: 'Los Lagos',
            addressCountry: 'CL',
        },
        areaServed: [
            { '@type': 'City', name: 'Puerto Montt' },
            { '@type': 'City', name: 'Puerto Varas' },
            { '@type': 'City', name: 'Chiloé' },
            { '@type': 'City', name: 'Llanquihue' },
        ],
        priceRange: '$$$',
    };
}

export function propertySchema(property: Property) {
    return {
        '@context': 'https://schema.org',
        '@type': 'RealEstateListing',
        name: property.title,
        description: property.description,
        url: `${siteConfig.url}/propiedades/${property.slug}`,
        image: property.images.map((img) => `${siteConfig.url}${img}`),
        offers: {
            '@type': 'Offer',
            price: property.price,
            priceCurrency: property.currency,
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: property.location,
            addressRegion: 'Los Lagos',
            addressCountry: 'CL',
        },
        numberOfRooms: property.bedrooms,
        numberOfBathroomsTotal: property.bathrooms,
        floorSize: {
            '@type': 'QuantitativeValue',
            value: property.area,
            unitCode: 'MTK',
        },
    };
}
