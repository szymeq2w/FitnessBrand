const CYCLE = [
  { label: "PUSH", tone: "bg-ink text-bg" },
  { label: "PULL", tone: "bg-accent text-ink" },
  { label: "LEGS", tone: "bg-ink text-bg" },
  { label: "REST", tone: "bg-transparent text-ink/50 border border-ink/15" },
] as const;

export function CycleMotif({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex overflow-hidden rounded border border-ink/15 font-mono text-xs font-medium tracking-wide ${className}`}
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
