interface PropertyFeaturesProps {
    features: string[];
}

export function PropertyFeatures({ features }: PropertyFeaturesProps) {
    return (
        <div>
            <h3 className="font-[var(--font-heading)] text-xl font-semibold text-gray-dark mb-4">
                Características
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-medium">
                        <svg
                            className="h-4 w-4 text-forest shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}
