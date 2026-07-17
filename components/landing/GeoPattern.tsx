export function GeoPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="330" cy="70" r="60" stroke="#17181C" strokeOpacity="0.12" />
      <circle cx="330" cy="70" r="100" stroke="#17181C" strokeOpacity="0.08" />
      <circle cx="330" cy="70" r="140" stroke="#17181C" strokeOpacity="0.05" />
      {Array.from({ length: 7 }).map((_, i) => (
        <line
          key={i}
          x1={20 + i * 12}
          y1="400"
          x2={20 + i * 12 + 160}
          y2="0"
          stroke={i === 3 ? "#FF5A36" : "#17181C"}
          strokeOpacity={i === 3 ? 0.6 : 0.08}
          strokeWidth={i === 3 ? 3 : 1}
        />
      ))}
    </svg>
  );
}
