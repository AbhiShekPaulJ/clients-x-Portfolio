export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-paper">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-sage-200 border-t-sage-600" />
      <p className="text-sm text-ink-faint">Loading portfolio…</p>
    </div>
  );
}
