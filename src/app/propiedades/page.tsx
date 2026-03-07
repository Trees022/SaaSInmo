import type { Metadata } from 'next';
import { PropertyGrid } from '@/components/PropertyGrid';
import { CTASection } from '@/components/CTASection';
import { getAllProperties } from '@/lib/properties';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
    title: 'Propiedades en Venta — Sur de Chile',
    description:
        'Explore nuestra selección de casas, parcelas y cabañas en Puerto Montt, Chiloé, Puerto Varas y alrededores. Encuentre su propiedad ideal.',
    path: '/propiedades',
});

export default function PropiedadesPage() {
    const properties = getAllProperties();

    return (
        <>
            {/* Page header */}
            <section className="pt-28 pb-12 bg-cream">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-semibold text-gray-dark mb-4">
                            Propiedades
                        </h1>
                        <p className="text-gray-medium max-w-2xl mx-auto text-lg">
                            Explore nuestra selección de propiedades disponibles en el sur de Chile.
                        </p>
                    </div>
                </div>
            </section>

            {/* Properties grid */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <PropertyGrid properties={properties} />
                </div>
            </section>

            <CTASection />
        </>
    );
}
