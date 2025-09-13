'use client';

import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Services from "@/components/Services";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Team from "@/components/Team";
import TrustSection from "@/components/TrustSection";
import WorkingEnvironment from "@/components/WorkingEnvironment";
import Logos from "@/components/Logos";
import Contact from "@/components/Contact";
import { useLanguage } from "@/contexts/LanguageContext";

const HomePage: React.FC = () => {
  const { t, isLoading } = useLanguage();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors">
        {/* Loading Hero */}
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-4"></div>
            <div className="w-48 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Client Logos */}
      <Logos />
      
      <Container>
        {/* Features Section */}
        <Section
          id="features"
          title={t.features.title}
          description={t.features.subtitle}
        >
          <Benefits />
        </Section>

        {/* Services Section */}
        <Section
          id="services"
          title={t.servicesSection.title}
          description={t.servicesSection.subtitle}
        >
          <Services />
        </Section>

        {/* Stats Section */}
        <Stats />

        {/* Products Section */}
        <Section
          id="pricing"
          title={t.products.title}
          description={t.products.subtitle}
        >
          <Pricing />
        </Section>
      </Container>
      
      <TrustSection />
      
      <Container>
        {/* Testimonials */}
        <Section
          id="testimonials"
          title={t.testimonials.title}
          description={t.testimonials.subtitle}
        >
          <Testimonials />
        </Section>

        {/* FAQ Section */}
        <Section
          id="faq"
          title={t.faq.title}
          description={t.faq.subtitle}
        >
          <FAQ />
        </Section>
      </Container>

      {/* Team Section */}
      <div id="team">
        <Team />
      </div>

      {/* Working Environment */}
      <WorkingEnvironment />

      {/* Contact Section */}
      <Contact />

      <Container>
        {/* CTA Section */}
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
