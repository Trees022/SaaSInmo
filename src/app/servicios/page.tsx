import type { Metadata } from 'next';
import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
    title: 'Servicios Inmobiliarios',
    description:
        'Ofrecemos servicios de venta, arriendo, administración y tasación de propiedades en Puerto Montt, Chiloé, Puerto Varas y alrededores.',
    path: '/servicios',
});

const services = [
    {
        title: 'Venta de Propiedades',
        description:
            'Comercializamos su propiedad con estrategias de marketing digital, fotografía profesional y una amplia red de contactos. Nos encargamos de todo el proceso, desde la tasación inicial hasta la firma de escritura.',
        features: [
            'Tasación profesional del inmueble',
            'Fotografía y video profesional',
            'Publicación en portales inmobiliarios',
            'Marketing digital dirigido',
            'Negociación y cierre de venta',
            'Asesoría legal completa',
        ],
        icon: (
            <svg className="h-16 w-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M32 8L8 28h8v24h16V38h0V52h16V28h8L32 8z" />
                <circle cx="50" cy="14" r="8" />
                <path d="M48 14h4M50 12v4" />
            </svg>
        ),
    },
    {
        title: 'Arriendo de Inmuebles',
        description:
            'Encontramos el arriendo perfecto para usted. Contamos con una amplia cartera de propiedades en arriendo, desde departamentos hasta casas y parcelas en las mejores ubicaciones del sur de Chile.',
        features: [
            'Amplia cartera de propiedades',
            'Verificación de arrendatarios',
            'Contratos estandarizados',
            'Acompañamiento en todo el proceso',
            'Asesoría en precios de mercado',
            'Inventario detallado',
        ],
        icon: (
            <svg className="h-16 w-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M32 8L8 28h8v28h36V28h8L32 8z" />
                <path d="M26 40h12v16H26z" />
                <path d="M22 32h6v6h-6zM36 32h6v6h-6z" />
            </svg>
        ),
    },
    {
        title: 'Administración de Arriendos',
        description:
            'Gestionamos integralmente sus propiedades en arriendo. Nos encargamos de la búsqueda de arrendatarios, cobranza, mantenimiento y todo lo necesario para que su inversión rente sin preocupaciones.',
        features: [
            'Búsqueda y selección de arrendatarios',
            'Cobranza mensual de arriendos',
            'Gestión de mantenimiento',
            'Informes mensuales de gestión',
            'Renovación de contratos',
            'Resolución de conflictos',
        ],
        icon: (
            <svg className="h-16 w-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <rect x="10" y="18" width="44" height="36" rx="3" />
                <path d="M10 28h44" />
                <path d="M18 18V10h28v8" />
                <path d="M24 38h16M24 46h10" />
            </svg>
        ),
    },
    {
        title: 'Tasación de Propiedades',
        description:
            'Realizamos tasaciones profesionales con metodología rigurosa y profundo conocimiento del mercado local. Nuestras tasaciones son reconocidas por instituciones financieras y entidades públicas.',
        features: [
            'Metodología profesional certificada',
            'Conocimiento del mercado local',
            'Informes detallados',
            'Válido para instituciones financieras',
            'Tasación comercial y fiscal',
            'Entrega en 48 horas',
        ],
        icon: (
            <svg className="h-16 w-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <rect x="12" y="8" width="40" height="48" rx="3" />
                <path d="M20 20h24M20 28h24M20 36h16" />
                <path d="M38 42l5 5 8-10" />
            </svg>
        ),
    },
];

export default function ServiciosPage() {
    return (
        <>
            {/* Page header */}
            <section className="pt-28 pb-12 bg-cream">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-semibold text-gray-dark mb-4">
                        Nuestros Servicios
                    </h1>
                    <p className="text-gray-medium max-w-2xl mx-auto text-lg">
                        Ofrecemos un servicio integral para todas sus necesidades inmobiliarias en el sur de Chile.
                    </p>
                </div>
            </section>

            {/* Services detail */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-20">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`flex flex-col gap-8 lg:gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                }`}
                        >
                            {/* Icon */}
                            <div className="lg:w-1/3 flex items-start justify-center">
                                <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-forest/5 text-forest">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="lg:w-2/3">
                                <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-semibold text-gray-dark mb-4">
                                    {service.title}
                                </h2>
                                <p className="text-gray-medium leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-medium">
                                            <svg className="h-4 w-4 text-forest shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center gap-2 rounded-lg bg-forest px-6 py-3 text-sm font-medium text-white hover:bg-forest-dark transition-colors"
                                >
                                    Solicitar este servicio
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTASection />
        </>
    );
}
