import { PropertyCard } from './PropertyCard';
import type { Property } from '@/lib/properties';

interface PropertyGridProps {
    properties: Property[];
    columns?: 2 | 3;
}

export function PropertyGrid({ properties, columns = 3 }: PropertyGridProps) {
    const gridCols =
        columns === 2
            ? 'grid-cols-1 md:grid-cols-2'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

    return (
        <div className={`grid ${gridCols} gap-6 lg:gap-8`}>
            {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
}
