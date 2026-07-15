const CYCLE = [
  { label: "PUSH", tone: "bg-ink text-surface" },
  { label: "PULL", tone: "bg-accent text-surface" },
  { label: "LEGS", tone: "bg-ink text-surface" },
  { label: "REST", tone: "bg-surface text-ink-muted border border-line" },
] as const;

export function CycleMotif({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex overflow-hidden rounded-2xl border border-line font-mono text-xs font-medium tracking-wide ${className}`}
      aria-hidden="true"
    >
      {CYCLE.map((day) => (
        <div
          key={day.label}
          className={`flex-1 px-4 py-3 text-center ${day.tone}`}
        >
          {day.label}
        </div>
      ))}
    </div>
  );
}
