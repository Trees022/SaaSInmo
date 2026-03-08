import type { Metadata } from 'next';

/** Site-wide SEO constants — easy to swap per client */
export const siteConfig = {
    name: 'Propiedades V Región',
    description:
        'Venta, arriendo y administración de propiedades en Viña del Mar, Valparaíso, Con-Cón, Quilpué, Villa Alemana y Reñaca. Especialistas en propiedades de la V Región.',
    url: 'https://propiedadesvregion.cl',
    locale: 'es_CL',
    phone: '+56 9 1234 5678',
    email: 'info@propiedadesvregion.cl',
    whatsapp: '56912345678',
    address: 'Viña del Mar, Región de Valparaíso, Chile',
};

export function generatePageMetadata({
    title,
    description,
    path = '',
    image,
}: {
    title: string;
    description: string;
    path?: string;
    image?: string;
}): Metadata {
    const url = `${siteConfig.url}${path}`;
    const ogImage = image ?? `${siteConfig.url}/images/hero/hero-bg.png`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            siteName: siteConfig.name,
            locale: siteConfig.locale,
            type: 'website',
            images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}
