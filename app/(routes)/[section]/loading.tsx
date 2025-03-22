export default function SectionLoading() {
  return (
    <div className="flex flex-col gap-8 animate-pulse">
      <div className="flex flex-col gap-4">
        <div className="h-12 w-2/3 bg-muted rounded-lg" />
        <div className="h-6 w-full max-w-2xl bg-muted rounded-lg" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-lg border bg-card p-6"
          >
            <div className="h-6 w-1/2 bg-muted rounded-lg mb-4" />
            <div className="h-4 w-full bg-muted rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
} 