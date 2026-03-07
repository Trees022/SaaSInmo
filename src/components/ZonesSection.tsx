import Link from 'next/link';
import { getAllZones } from '@/lib/zones';

const zoneIcons: Record<string, React.ReactNode> = {
    'puerto-montt': (
        <svg className="h-10 w-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M24 4L4 20h6v20h12v-10h4v10h12V20h6L24 4z" />
            <path d="M18 20h4v4h-4z" />
            <path d="M26 20h4v4h-4z" />
        </svg>
    ),
    'chiloe': (
        <svg className="h-10 w-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M8 44c4-8 8-16 16-20s16-8 16-16" />
            <path d="M24 24c-4 4-8 12-8 20" />
            <path d="M24 24c4-4 8-12 8-20" />
            <circle cx="24" cy="24" r="3" />
        </svg>
    ),
    'puerto-varas': (
        <svg className="h-10 w-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M4 38h40" />
            <path d="M24 6l-12 20h24L24 6z" />
            <path d="M10 38c0-6 4-10 8-10s6 4 10 4 6-6 10-6" />
        </svg>
    ),
    'llanquihue': (
        <svg className="h-10 w-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M4 30c8-4 12-10 20-10s12 6 20 10" />
            <path d="M14 12l4 8M30 8l2 12M22 10l1 10" />
            <path d="M4 36c8-2 14-4 20-4s12 2 20 4" />
        </svg>
    ),
};

export function ZonesSection() {
    const zones = getAllZones();

    return (
        <section id="zones" className="py-12 bg-white">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    {zones.map((zone) => (
                        <Link
                            key={zone.slug}
                            href={`/zonas/${zone.slug}`}
                            className="flex flex-col items-center gap-2 text-gray-medium hover:text-forest transition-colors group"
                        >
                            <div className="group-hover:scale-110 transition-transform duration-300">
                                {zoneIcons[zone.slug] || zoneIcons['puerto-montt']}
                            </div>
                            <span className="text-sm font-medium">{zone.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
