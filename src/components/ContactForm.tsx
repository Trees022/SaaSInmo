'use client';

import { useState, type FormEvent } from 'react';

export function ContactForm() {
    const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormState('sending');
        // Simulate send (in production, connect to API route or external service)
        setTimeout(() => setFormState('sent'), 1500);
    }

    if (formState === 'sent') {
        return (
            <div className="rounded-xl bg-forest/5 border border-forest/20 p-8 text-center">
                <svg
                    className="h-12 w-12 text-forest mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <h3 className="font-[var(--font-heading)] text-xl font-semibold text-gray-dark mb-2">
                    ¡Mensaje enviado!
                </h3>
                <p className="text-gray-medium text-sm">
                    Nos pondremos en contacto con usted a la brevedad.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-dark mb-1.5">
                        Nombre completo
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-dark placeholder:text-gray-medium/60 focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors"
                        placeholder="Juan Pérez"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-dark mb-1.5">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-dark placeholder:text-gray-medium/60 focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors"
                        placeholder="juan@ejemplo.cl"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-dark mb-1.5">
                    Teléfono
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-dark placeholder:text-gray-medium/60 focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors"
                    placeholder="+56 9 1234 5678"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-dark mb-1.5">
                    Mensaje
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-dark placeholder:text-gray-medium/60 focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors resize-none"
                    placeholder="Cuéntenos en qué podemos ayudarle..."
                />
            </div>

            <button
                type="submit"
                disabled={formState === 'sending'}
                className="inline-flex w-full items-center justify-center rounded-lg bg-forest px-6 py-3.5 text-base font-medium text-white hover:bg-forest-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {formState === 'sending' ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                    </>
                ) : (
                    'Enviar Mensaje'
                )}
            </button>
        </form>
    );
}
