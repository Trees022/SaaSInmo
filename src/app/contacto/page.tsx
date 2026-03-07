import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { generatePageMetadata, siteConfig } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
    title: 'Contacto',
    description:
        'Contáctenos para asesoría inmobiliaria en Puerto Montt, Chiloé, Puerto Varas y alrededores. Estamos disponibles para ayudarle.',
    path: '/contacto',
});

export default function ContactoPage() {
    return (
        <>
            {/* Page header */}
            <section className="pt-28 pb-12 bg-cream">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-semibold text-gray-dark mb-4">
                        Contacto
                    </h1>
                    <p className="text-gray-medium max-w-2xl mx-auto text-lg">
                        Estamos disponibles para ayudarle con cualquier consulta inmobiliaria.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact form */}
                        <div>
                            <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-gray-dark mb-6">
                                Envíenos un mensaje
                            </h2>
                            <ContactForm />
                        </div>

                        {/* Contact info */}
                        <div className="space-y-8">
                            {/* WhatsApp */}
                            <div>
                                <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-gray-dark mb-4">
                                    WhatsApp
                                </h2>
                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20necesito%20asesoría%20inmobiliaria`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 rounded-xl bg-[#25D366]/10 px-6 py-4 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
                                >
                                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-gray-dark">Chatea con nosotros</p>
                                        <p className="text-sm text-gray-medium">{siteConfig.phone}</p>
                                    </div>
                                </a>
                            </div>

                            {/* Business hours */}
                            <div>
                                <h3 className="font-[var(--font-heading)] text-xl font-semibold text-gray-dark mb-3">
                                    Horario de Atención
                                </h3>
                                <div className="space-y-2 text-sm text-gray-medium">
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span>Lunes - Viernes</span>
                                        <span className="font-medium text-gray-dark">9:00 - 18:00</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span>Sábado</span>
                                        <span className="font-medium text-gray-dark">10:00 - 14:00</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span>Domingo</span>
                                        <span className="font-medium text-gray-dark">Cerrado</span>
                                    </div>
                                </div>
                            </div>

                            {/* Service area */}
                            <div>
                                <h3 className="font-[var(--font-heading)] text-xl font-semibold text-gray-dark mb-3">
                                    Área de Servicio
                                </h3>
                                <p className="text-sm text-gray-medium mb-3">
                                    Operamos en toda la Región de Los Lagos:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Puerto Montt', 'Puerto Varas', 'Chiloé', 'Llanquihue'].map((area) => (
                                        <span
                                            key={area}
                                            className="inline-flex items-center rounded-full bg-forest/5 px-3 py-1 text-xs font-medium text-forest"
                                        >
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Contact details */}
                            <div>
                                <h3 className="font-[var(--font-heading)] text-xl font-semibold text-gray-dark mb-3">
                                    Información de Contacto
                                </h3>
                                <div className="space-y-3 text-sm text-gray-medium">
                                    <p className="flex items-center gap-2">
                                        <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                        <a href={`tel:${siteConfig.phone}`} className="hover:text-forest transition-colors">
                                            {siteConfig.phone}
                                        </a>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                        <a href={`mailto:${siteConfig.email}`} className="hover:text-forest transition-colors">
                                            {siteConfig.email}
                                        </a>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <svg className="h-4 w-4 text-forest shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                                        </svg>
                                        {siteConfig.address}
                                    </p>
                                </div>
                            </div>

                            {/* Map placeholder */}
                            <div className="aspect-[4/3] rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200">
                                <div className="text-center text-gray-medium">
                                    <svg className="h-10 w-10 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                    </svg>
                                    <p className="text-sm">{siteConfig.address}</p>
                                    <p className="text-xs mt-1 opacity-60">Mapa próximamente</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
