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
            addressLocality: 'Viña del Mar',
            addressRegion: 'Valparaíso',
            addressCountry: 'CL',
        },
        areaServed: [
            { '@type': 'City', name: 'Viña del Mar' },
            { '@type': 'City', name: 'Valparaíso' },
            { '@type': 'City', name: 'Con-Cón' },
            { '@type': 'City', name: 'Quilpué' },
            { '@type': 'City', name: 'Villa Alemana' },
            { '@type': 'City', name: 'Reñaca' },
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
            addressRegion: 'Valparaíso',
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
