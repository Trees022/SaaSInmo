'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/propiedades', label: 'Propiedades' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/contacto', label: 'Contacto' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
            <nav
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                aria-label="Navegación principal"
            >
                <div className="flex h-16 items-center justify-between lg:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-forest font-[var(--font-heading)] text-xl lg:text-2xl font-semibold tracking-tight hover:text-forest-dark transition-colors"
                    >
                        <svg
                            className="h-8 w-8 lg:h-9 lg:w-9"
                            viewBox="0 0 32 32"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M16 2L2 14h4v14h8v-8h4v8h8V14h4L16 2z"
                                fill="currentColor"
                            />
                        </svg>
                        <span>Tu Inmobiliaria</span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-dark hover:text-forest transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-forest after:transition-all after:duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contacto"
                            className="inline-flex items-center rounded-md bg-forest px-5 py-2.5 text-sm font-medium text-white hover:bg-forest-dark transition-colors"
                        >
                            Solicitar Asesoría
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-dark hover:text-forest transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div id="mobile-menu" className="lg:hidden border-t border-gray-100 py-4">
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-3 py-2 text-base font-medium text-gray-dark hover:text-forest hover:bg-cream rounded-md transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contacto"
                                className="mx-3 mt-2 inline-flex items-center justify-center rounded-md bg-forest px-5 py-2.5 text-sm font-medium text-white hover:bg-forest-dark transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Solicitar Asesoría
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
