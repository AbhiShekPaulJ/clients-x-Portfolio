import { MapPin, Building2 } from "lucide-react";
import { experience, experienceNote } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ClinicalExperience() {
  return (
    <section id="experience" className="section-pad bg-sage-50/60">
      <div className="container-page">
        <SectionHeading
          title="Supervised clinical experience"
          description="Internship placements across multispecialty hospitals, working under senior dietitians and clinical teams."
        />

        <div className="relative mt-14 pl-8 sm:pl-10">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-2 w-px bg-sage-200 sm:left-[9px]"
          />

          <ol className="space-y-12">
            {experience.map((role, i) => (
              <Reveal
                as="li"
                key={role.hospital}
                delay={i * 0.12}
                direction={i % 2 === 0 ? "left" : "right"}
                distance={28}
                className="relative"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-sage-600 ring-4 ring-sage-50 sm:-left-10"
                />

                <div className="rounded-2xl border border-sage-100 bg-white p-6 shadow-card sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="flex items-center gap-2 text-lg font-medium text-ink">
                      <Building2 className="h-4 w-4 text-sage-600" aria-hidden="true" />
                      {role.hospital}
                    </h3>
                    <span className="text-sm text-ink-faint">{role.period}</span>
                  </div>

                  <p className="mt-1 flex items-center gap-1.5 text-sm text-sage-700">
                    {role.roleTitle}
                    <span className="text-ink-faint">·</span>
                    <span className="flex items-center gap-1 text-ink-faint">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {role.location}
                    </span>
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {role.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 flex-none rounded-full bg-sage-400"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 rounded-2xl border border-peach-200 bg-peach-50 px-6 py-4 text-sm text-ink-soft">
            {experienceNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
