import Link from 'next/link';
import { getAllZones } from '@/lib/zones';

const zoneIcons: Record<string, React.ReactNode> = {
    'vina-del-mar': (
        <svg className="h-10 w-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M4 38c4-6 10-12 20-12s12 6 20 12" />
            <path d="M24 26V8" />
            <path d="M18 14h12" />
            <path d="M20 20h8" />
            <circle cx="24" cy="6" r="2" />
        </svg>
    ),
    'valparaiso': (
        <svg className="h-10 w-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M4 40l8-16 6 8 8-20 6 12 8-8 4 24" />
            <path d="M16 24h4v4h-4z" />
            <path d="M28 20h4v4h-4z" />
        </svg>
    ),
    'concon': (
        <svg className="h-10 w-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M4 30c6-8 12-4 18-8s12-4 18 0" />
            <path d="M4 36c6-6 12-2 18-6s12-2 18 2" />
            <circle cx="36" cy="12" r="5" />
        </svg>
    ),
    'quilpue': (
        <svg className="h-10 w-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="24" cy="14" r="8" />
            <path d="M24 6v-2M24 24v2M16 14h-2M34 14h2" />
            <path d="M18.3 8.3l-1.4-1.4M29.7 19.7l1.4 1.4M18.3 19.7l-1.4 1.4M29.7 8.3l1.4-1.4" />
            <path d="M8 40l6-12h20l6 12" />
        </svg>
    ),
    'villa-alemana': (
        <svg className="h-10 w-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M24 4L4 20h6v20h12v-10h4v10h12V20h6L24 4z" />
            <path d="M18 20h4v4h-4z" />
            <path d="M26 20h4v4h-4z" />
        </svg>
    ),
    'renaca': (
        <svg className="h-10 w-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M4 44V30l10-6 10 10 10-14 10 8v16" />
            <path d="M4 34c8-2 12-6 20-6s12 4 20 6" />
            <circle cx="38" cy="10" r="4" />
        </svg>
    ),
};

export function ZonesSection() {
    const zones = getAllZones();

    return (
        <section id="zones" className="py-12 bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                    {zones.map((zone) => (
                        <Link
                            key={zone.slug}
                            href={`/zonas/${zone.slug}`}
                            className="flex flex-col items-center gap-2 text-gray-medium hover:text-forest transition-colors group"
                        >
                            <div className="group-hover:scale-110 transition-transform duration-300">
                                {zoneIcons[zone.slug] || zoneIcons['villa-alemana']}
                            </div>
                            <span className="text-sm font-medium">{zone.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
