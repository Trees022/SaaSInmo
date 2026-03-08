import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        >
            {/* Background image — using next/image for WebP auto-conversion and responsive sizing */}
            <Image
                src="/images/hero/hero-bg.png"
                alt="Vista panorámica de Viña del Mar y la costa de la V Región"
                fill
                priority
                className="object-cover"
                sizes="100vw"
                quality={75}
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55 z-[1]" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center text-white">
                <h1 className="font-[var(--font-heading)] text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6 drop-shadow-lg">
                    Encuentra Tu Próxima Propiedad en la V Región
                </h1>
                <p className="text-base sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow">
                    Venta, arriendo y administración de propiedades en Viña del Mar, Valparaíso, Con-Cón y más.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/propiedades"
                        className="inline-flex items-center rounded-lg bg-forest px-8 py-3.5 text-base font-medium text-white hover:bg-forest-dark transition-colors shadow-lg hover:shadow-xl"
                    >
                        Ver Propiedades
                    </Link>
                    <a
                        href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20una%20propiedad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-white/10 backdrop-blur-sm px-8 py-3.5 text-base font-medium text-white hover:bg-white hover:text-gray-dark transition-all"
                    >
                        Hablar por WhatsApp
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
                <svg
                    className="h-6 w-6 text-white/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </div>
        </section>
    );
}
