'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PropertyGalleryProps {
    images: string[];
    title: string;
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100">
                <Image
                    src={images[selectedIndex]}
                    alt={`${title} — Imagen ${selectedIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"
                    priority
                />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setSelectedIndex(i)}
                            className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${i === selectedIndex
                                    ? 'border-forest ring-1 ring-forest'
                                    : 'border-transparent opacity-70 hover:opacity-100'
                                }`}
                            aria-label={`Ver imagen ${i + 1}`}
                        >
                            <Image
                                src={img}
                                alt={`${title} miniatura ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="96px"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
