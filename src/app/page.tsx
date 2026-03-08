import { Hero } from '@/components/Hero';
import { ZonesSection } from '@/components/ZonesSection';
import { PropertyGrid } from '@/components/PropertyGrid';
import { ServicesSection } from '@/components/ServicesSection';
import { Testimonials } from '@/components/Testimonials';
import { CTASection } from '@/components/CTASection';
import { ContactForm } from '@/components/ContactForm';
import { getFeaturedProperties } from '@/lib/properties';

export default function HomePage() {
  const featuredProperties = getFeaturedProperties();

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Zones */}
      <ZonesSection />

      {/* Featured properties */}
      <section id="featured-properties" className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-forest mx-auto mb-6" />
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-semibold text-gray-dark mb-4">
              Propiedades Destacadas
            </h2>
            <p className="text-gray-medium max-w-2xl mx-auto">
              Descubra nuestra selección de las mejores propiedades disponibles en la V Región.
            </p>
          </div>
          <PropertyGrid properties={featuredProperties} />
        </div>
      </section>

      {/* Services */}
      <ServicesSection />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTASection />

      {/* Contact form section */}
      <section id="contact" className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="w-12 h-0.5 bg-forest mx-auto mb-6" />
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-semibold text-gray-dark mb-4">
              Contáctenos
            </h2>
            <p className="text-gray-medium max-w-xl mx-auto">
              Complete el formulario y nos pondremos en contacto con usted a la brevedad.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
