import type { Metadata } from 'next';

/** Site-wide SEO constants — easy to swap per client */
export const siteConfig = {
    name: 'Tu Inmobiliaria',
    description:
        'Vendemos y administramos propiedades en Puerto Montt, Chiloé, Puerto Varas y alrededores. Su hogar ideal en el sur de Chile.',
    url: 'https://tuinmobiliaria.cl',
    locale: 'es_CL',
    phone: '+56 9 1234 5678',
    email: 'info@tuinmobiliaria.cl',
    whatsapp: '56912345678',
    address: 'Puerto Montt, Región de Los Lagos, Chile',
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
