const services = [
    {
        title: 'Venta de Propiedades',
        description: 'Comercializamos su propiedad con estrategias de marketing digital y una amplia red de contactos.',
        icon: (
            <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M24 4L4 20h6v20h12v-10h4v10h12V20h6L24 4z" />
                <path d="M18 24h4v4h-4z" />
                <path d="M26 24h4v4h-4z" />
                <circle cx="38" cy="10" r="6" fill="none" />
                <path d="M36 10h4M38 8v4" />
            </svg>
        ),
    },
    {
        title: 'Administración de Arriendos',
        description: 'Gestionamos integralmente sus propiedades en arriendo, desde la búsqueda de arrendatarios hasta el mantenimiento.',
        icon: (
            <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <rect x="6" y="14" width="36" height="28" rx="2" />
                <path d="M6 22h36" />
                <path d="M14 14V8h20v6" />
                <path d="M18 30h12M18 36h8" />
            </svg>
        ),
    },
    {
        title: 'Arriendo de Inmuebles',
        description: 'Encontramos el arriendo perfecto para usted, con asesoría personalizada y acompañamiento en todo el proceso.',
        icon: (
            <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M24 4L4 20h6v20h28V20h6L24 4z" />
                <path d="M20 28h8v12h-8z" />
                <path d="M16 22h4v4h-4z" />
                <path d="M28 22h4v4h-4z" />
            </svg>
        ),
    },
    {
        title: 'Tasación de Propiedades',
        description: 'Valoramos su propiedad con metodología profesional y conocimiento del mercado local.',
        icon: (
            <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <rect x="8" y="6" width="32" height="36" rx="2" />
                <path d="M14 14h20M14 20h20M14 26h12" />
                <path d="M30 30l4 4 6-8" />
            </svg>
        ),
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-14">
                    <div className="w-12 h-0.5 bg-forest mx-auto mb-6" />
                    <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-semibold text-gray-dark mb-4">
                        Nuestros Servicios
                    </h2>
                    <p className="text-gray-medium max-w-2xl mx-auto">
                        Ofrecemos un servicio integral para todas sus necesidades inmobiliarias en el sur de Chile.
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group text-center p-6 rounded-xl border border-gray-100 hover:border-forest/20 hover:shadow-md transition-all duration-300"
                        >
                            <div className="inline-flex items-center justify-center text-forest mb-4 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="font-[var(--font-heading)] text-lg font-semibold text-gray-dark mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-medium leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
