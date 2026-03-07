import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PropertyGrid } from '@/components/PropertyGrid';
import { CTASection } from '@/components/CTASection';
import { getZoneBySlug, getAllZoneSlugs } from '@/lib/zones';
import { getPropertiesByZone } from '@/lib/properties';
import { generatePageMetadata } from '@/lib/seo';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllZoneSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const zone = getZoneBySlug(slug);
    if (!zone) return {};

    return generatePageMetadata({
        title: `Propiedades en ${zone.name} — Sur de Chile`,
        description: zone.description.slice(0, 160),
        path: `/zonas/${zone.slug}`,
    });
}

export default async function ZoneDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const zone = getZoneBySlug(slug);
    if (!zone) notFound();

    const properties = getPropertiesByZone(zone.slug);

    return (
        <>
            {/* Hero */}
            <section className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={zone.image}
                        alt={`Vista de ${zone.name}`}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                    <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-semibold text-white mb-4 drop-shadow-lg">
                        {zone.name}
                    </h1>
                    <p className="text-lg text-white/90 max-w-2xl drop-shadow">
                        {zone.description}
                    </p>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-semibold text-gray-dark mb-6">
                                ¿Por qué {zone.name}?
                            </h2>
                            <ul className="space-y-3">
                                {zone.highlights.map((highlight) => (
                                    <li key={highlight} className="flex items-start gap-3 text-gray-medium">
                                        <svg className="h-5 w-5 text-forest shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-semibold text-gray-dark mb-6">
                                Oportunidades Inmobiliarias
                            </h2>
                            <p className="text-gray-medium leading-relaxed">{zone.opportunities}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Properties in zone */}
            {properties.length > 0 && (
                <section className="py-16 bg-cream">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-semibold text-gray-dark mb-8">
                            Propiedades en {zone.name}
                        </h2>
                        <PropertyGrid properties={properties} />
                    </div>
                </section>
            )}

            <CTASection />
        </>
    );
}
