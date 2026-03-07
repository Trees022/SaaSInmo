import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PropertyGallery } from '@/components/PropertyGallery';
import { PropertyFeatures } from '@/components/PropertyFeatures';
import { PropertyGrid } from '@/components/PropertyGrid';
import {
    getPropertyBySlug,
    getAllPropertySlugs,
    getAllProperties,
    formatPrice,
} from '@/lib/properties';
import { generatePageMetadata, siteConfig } from '@/lib/seo';
import { propertySchema } from '@/lib/schema';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllPropertySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const property = getPropertyBySlug(slug);
    if (!property) return {};

    return generatePageMetadata({
        title: `${property.title} — ${property.location}`,
        description: property.description.slice(0, 160),
        path: `/propiedades/${property.slug}`,
        image: `${siteConfig.url}${property.images[0]}`,
    });
}

export default async function PropertyDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const property = getPropertyBySlug(slug);
    if (!property) notFound();

    const relatedProperties = getAllProperties()
        .filter((p) => p.zone === property.zone && p.id !== property.id)
        .slice(0, 3);

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(propertySchema(property)),
                }}
            />

            {/* Page header */}
            <section className="pt-24 pb-2 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-4">
                        <ol className="flex items-center gap-2 text-sm text-gray-medium">
                            <li>
                                <Link href="/" className="hover:text-forest transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li>
                                <Link href="/propiedades" className="hover:text-forest transition-colors">
                                    Propiedades
                                </Link>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li className="text-gray-dark font-medium truncate">{property.title}</li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* Main content */}
            <section className="py-8 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Left: Gallery + Details */}
                        <div className="lg:col-span-2 space-y-8">
                            <PropertyGallery images={property.images} title={property.title} />

                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="inline-flex items-center rounded-full bg-forest/10 px-3 py-1 text-xs font-medium text-forest">
                                        {property.type}
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                                        {property.status}
                                    </span>
                                </div>

                                <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-semibold text-gray-dark mb-2">
                                    {property.title}
                                </h1>

                                <p className="flex items-center gap-1 text-gray-medium mb-6">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                                    </svg>
                                    {property.address}
                                </p>

                                {/* Quick stats */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-gray-100">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-forest">{property.bedrooms}</p>
                                        <p className="text-xs text-gray-medium mt-1">Dormitorios</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-forest">{property.bathrooms}</p>
                                        <p className="text-xs text-gray-medium mt-1">Baños</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-forest">{property.area} m²</p>
                                        <p className="text-xs text-gray-medium mt-1">Construidos</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-forest">{property.lotArea} m²</p>
                                        <p className="text-xs text-gray-medium mt-1">Terreno</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="py-6">
                                    <h3 className="font-[var(--font-heading)] text-xl font-semibold text-gray-dark mb-3">
                                        Descripción
                                    </h3>
                                    <p className="text-gray-medium leading-relaxed">{property.description}</p>
                                </div>

                                {/* Features */}
                                <PropertyFeatures features={property.features} />

                                {/* Map placeholder */}
                                <div className="mt-8">
                                    <h3 className="font-[var(--font-heading)] text-xl font-semibold text-gray-dark mb-3">
                                        Ubicación
                                    </h3>
                                    <div className="aspect-[16/9] rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200">
                                        <div className="text-center text-gray-medium">
                                            <svg className="h-10 w-10 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                                            </svg>
                                            <p className="text-sm">{property.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Price card */}
                                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                                    <p className="text-sm text-gray-medium mb-1">Precio</p>
                                    <p className="text-3xl font-bold text-forest mb-6">
                                        {formatPrice(property.price)}
                                    </p>

                                    <div className="space-y-3">
                                        <a
                                            href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20la%20propiedad%3A%20${encodeURIComponent(property.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-medium text-white hover:bg-[#20bd5a] transition-colors"
                                        >
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            Consultar por WhatsApp
                                        </a>
                                        <Link
                                            href="/contacto"
                                            className="flex w-full items-center justify-center rounded-lg border border-forest bg-white px-4 py-3 text-sm font-medium text-forest hover:bg-forest hover:text-white transition-colors"
                                        >
                                            Solicitar Asesoría
                                        </Link>
                                    </div>
                                </div>

                                {/* Agent info */}
                                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                                    <h4 className="font-semibold text-gray-dark text-sm mb-3">¿Tiene preguntas?</h4>
                                    <p className="text-sm text-gray-medium mb-4">
                                        Nuestro equipo está disponible para ayudarle con cualquier consulta sobre esta propiedad.
                                    </p>
                                    <div className="space-y-2 text-sm text-gray-medium">
                                        <p className="flex items-center gap-2">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                            {siteConfig.phone}
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                            {siteConfig.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related properties */}
                    {relatedProperties.length > 0 && (
                        <div className="mt-16 pt-12 border-t border-gray-100">
                            <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-gray-dark mb-8">
                                Propiedades Relacionadas
                            </h2>
                            <PropertyGrid properties={relatedProperties} />
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
