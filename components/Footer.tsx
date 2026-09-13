import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-sage-100 bg-paper py-8">
      <div className="container-page flex flex-col items-center justify-between gap-3 text-sm text-ink-faint sm:flex-row">
        <p>&copy; 2026 {site.name}. Clinical Dietitian &amp; Nutritionist.</p>
        <a href="#home" className="hover:text-sage-700">
          Back to top
        </a>
      </div>
    </footer>
  );
}
