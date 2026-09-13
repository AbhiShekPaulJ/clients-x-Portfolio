import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-balance text-3xl sm:text-4xl font-medium leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-soft leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
