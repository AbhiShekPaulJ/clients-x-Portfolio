import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ClinicalExperience } from "@/components/ClinicalExperience";
import { Education } from "@/components/Education";
import { Research } from "@/components/Research";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Booking } from "@/components/Booking";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { contact, site } from "@/data/content";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.intro,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    ...(contact.email && !contact.email.startsWith("[")
      ? { email: contact.email }
      : {}),
    ...(contact.linkedin && !contact.linkedin.startsWith("[")
      ? { sameAs: [contact.linkedin] }
      : {}),
  };

  return (
    <>
      {/* Structured data helps search engines understand this as a
          professional profile for queries like "Clinical Dietitian in India" */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <ClinicalExperience />
        <Education />
        <Research />
        <Skills />
        <Certifications />
        {/* <Booking /> */}
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
