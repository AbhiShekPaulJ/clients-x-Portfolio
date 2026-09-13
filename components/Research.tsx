import { FlaskConical, CheckCircle2 } from "lucide-react";
import { research } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function Research() {
  return (
    <section id="research" className="section-pad bg-mist-50/50">
      <div className="container-page">
        <Reveal scale distance={0}>
          <div className="grid overflow-hidden rounded-[2.5rem] border border-mist-100 bg-white shadow-lift lg:grid-cols-[1fr_1.2fr]">
            <div className="relative flex items-center justify-center bg-gradient-to-br from-sage-100 via-mist-50 to-peach-50 p-10">
              <ResearchIllustration className="h-full max-h-72 w-full max-w-xs" />
            </div>

            <div className="p-8 sm:p-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-sage-50 px-4 py-1.5 text-sm font-medium text-sage-700">
                <FlaskConical className="h-4 w-4" aria-hidden="true" />
                Featured research project
              </span>

              <h2 className="mt-5 text-balance font-serif text-2xl leading-snug text-ink sm:text-3xl">
                {research.title}
              </h2>

              <p className="mt-4 leading-relaxed text-ink-soft">
                {research.summary}
              </p>

              <ul className="mt-6 space-y-3">
                {research.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-sm text-ink-soft">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 flex-none text-sage-600"
                      aria-hidden="true"
                    />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ResearchIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 220"
      className={className}
      role="img"
      aria-label="Illustration of legumes, grains, and a measuring flask representing nutrition research"
    >
      <ellipse cx="120" cy="190" rx="90" ry="12" fill="#E1EBE3" />
      {/* flask */}
      <path
        d="M108 30h24v40l26 60a14 14 0 0 1-13 20H95a14 14 0 0 1-13-20l26-60V30z"
        fill="#FFFFFF"
        stroke="#588268"
        strokeWidth="3"
      />
      <path d="M96 96h48l14 32a10 10 0 0 1-9 14H91a10 10 0 0 1-9-14l14-32z" fill="#C3D7C8" />
      <rect x="104" y="24" width="32" height="10" rx="3" fill="#456854" />
      {/* legumes */}
      <circle cx="60" cy="150" r="12" fill="#DE9C68" />
      <circle cx="80" cy="168" r="9" fill="#E9B78D" />
      <circle cx="182" cy="152" r="11" fill="#78A186" />
      <circle cx="162" cy="172" r="8" fill="#9FBFA8" />
      {/* grain sprigs */}
      <g stroke="#456854" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <path d="M40 190c6-24 2-40-6-56" />
        <path d="M34 150c6 2 10 6 12 12" />
        <path d="M34 162c6 1 10 4 13 9" />
        <path d="M200 188c-6-22-2-38 6-54" />
        <path d="M206 150c-6 2-10 6-12 12" />
        <path d="M206 162c-6 1-10 4-13 9" />
      </g>
    </svg>
  );
}
