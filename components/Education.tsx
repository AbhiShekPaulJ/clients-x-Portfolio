import { GraduationCap } from "lucide-react";
import { education } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-pad bg-paper">
      <div className="container-page">
        <SectionHeading title="Education" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {education.map((item, i) => (
            <Reveal
              key={item.degree}
              delay={i * 0.12}
              direction={i % 2 === 0 ? "left" : "right"}
              distance={22}
            >
              <div className="h-full rounded-2xl border border-mist-100 bg-white p-7 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mist-50 text-mist-600">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-medium leading-snug text-ink">
                  {item.degree}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{item.institution}</p>
                <p className="mt-3 text-sm text-ink-faint">{item.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
