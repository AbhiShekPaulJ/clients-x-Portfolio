import { Stethoscope, HandHeart, Leaf, Monitor } from "lucide-react";
import { skillGroups } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  stethoscope: Stethoscope,
  "hand-heart": HandHeart,
  leaf: Leaf,
  monitor: Monitor,
} as const;

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-paper">
      <div className="container-page">
        <SectionHeading title="Skills" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon as keyof typeof icons];
            return (
              <Reveal key={group.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-sage-100 bg-gradient-to-b from-white to-sage-50/40 p-6 transition-shadow hover:shadow-lift">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-600 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-medium text-ink">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg bg-white/70 px-3 py-2 text-sm text-ink-soft"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
