import { Award } from "lucide-react";
import { certifications } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="section-pad bg-sage-50/60">
      <div className="container-page">
        <SectionHeading
          title="Certifications & workshops"
          description="Continuing education attended alongside academic and clinical training."
        />

        <div className="mt-12 -mx-6 flex snap-x gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal
              key={cert}
              delay={i * 0.05}
              className="w-[16rem] flex-none snap-start sm:w-auto"
            >
              <div className="flex h-full items-start gap-3 rounded-2xl border border-sage-100 bg-white p-5 shadow-card">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-peach-100 text-peach-400">
                  <Award className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-sm leading-snug text-ink-soft">{cert}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
