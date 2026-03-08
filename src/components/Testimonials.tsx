const testimonials = [
    {
        name: 'María Gómez',
        role: 'Propietaria en Viña del Mar',
        text: 'Excelente servicio, vendieron mi departamento rápido y sin complicaciones. Muy profesionales y siempre disponibles para responder mis dudas.',
        initials: 'MG',
    },
    {
        name: 'Carlos Pérez',
        role: 'Inversionista en Reñaca',
        text: 'Gran equipo, muy profesionales y confiables. Me ayudaron a encontrar el departamento perfecto para inversión frente al mar en Reñaca.',
        initials: 'CP',
    },
    {
        name: 'Ana Rodríguez',
        role: 'Compradora en Valparaíso',
        text: 'Nos acompañaron en todo el proceso de compra de nuestra casa en Cerro Alegre. Conocen perfectamente el mercado local y nos dieron la mejor asesoría.',
        initials: 'AR',
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-cream">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-14">
                    <div className="w-12 h-0.5 bg-forest mx-auto mb-6" />
                    <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-semibold text-gray-dark mb-4">
                        Testimonios
                    </h2>
                    <p className="text-gray-medium max-w-2xl mx-auto">
                        Lo que dicen nuestros clientes sobre nuestra experiencia y servicio.
                    </p>
                </div>

                {/* Testimonials grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                {/* Avatar initials */}
                                <div className="h-12 w-12 rounded-full bg-forest/10 flex items-center justify-center text-forest font-semibold text-sm">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-dark text-sm">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs text-gray-medium">{testimonial.role}</p>
                                </div>
                            </div>
                            <blockquote className="text-sm text-gray-medium leading-relaxed italic">
                                &ldquo;{testimonial.text}&rdquo;
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
