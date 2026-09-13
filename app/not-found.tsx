import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-paper px-6 text-center">
      <h1 className="font-serif text-2xl text-ink">Page not found</h1>
      <p className="max-w-sm text-sm text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-sage-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-sage-800"
      >
        Return home
      </Link>
    </div>
  );
}
