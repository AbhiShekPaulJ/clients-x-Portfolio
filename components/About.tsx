import { Microscope, HeartHandshake, ClipboardList, Sprout } from "lucide-react";
import { aboutStory, aboutValues } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  microscope: Microscope,
  "heart-handshake": HeartHandshake,
  "clipboard-list": ClipboardList,
  sprout: Sprout,
} as const;

export function About() {
  return (
    <section id="about" className="section-pad bg-paper">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading title={aboutStory.heading} />

          <Reveal delay={0.1}>
            <div className="max-w-2xl space-y-5 text-ink-soft leading-relaxed">
              {aboutStory.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((value, i) => {
            const Icon = icons[value.icon as keyof typeof icons];
            return (
              <Reveal as="li" key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-sage-100 bg-white p-6 shadow-card transition-shadow hover:shadow-lift">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-50 text-sage-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-medium text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-faint">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
