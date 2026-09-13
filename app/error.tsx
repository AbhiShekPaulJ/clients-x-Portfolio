"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-paper px-6 text-center">
      <h1 className="font-serif text-2xl text-ink">Something didn&apos;t load correctly</h1>
      <p className="max-w-sm text-sm text-ink-soft">
        The page ran into an unexpected problem. Try again, and if it keeps
        happening, refresh the browser tab.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-2 rounded-full bg-sage-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-sage-800"
      >
        Try again
      </button>
    </div>
  );
}
