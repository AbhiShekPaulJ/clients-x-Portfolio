import { cta, site } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="section-pad bg-sage-700">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center text-white">
            <h2 className="text-balance font-serif text-3xl leading-snug sm:text-4xl">
              {cta.heading}
            </h2>
            <p className="mt-5 leading-relaxed text-sage-50/90">{cta.text}</p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-medium text-sage-800 transition-transform hover:-translate-y-0.5"
              >
                Contact Sowmya
              </a>
              <a
                href={site.resumeHref}
                download
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
