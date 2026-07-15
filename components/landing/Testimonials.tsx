const TESTIMONIALS = [
  {
    quote:
      "Pierwszy raz mam plan, którego się trzymam dłużej niż miesiąc. Widzę dokładnie ile kg dołożyłam na każdym ćwiczeniu.",
    name: "Kasia W.",
    detail: "Plan Standard · 7 miesięcy",
  },
  {
    quote:
      "Zamiast szukać przepisów po grupach na Facebooku, mam gotową bibliotekę dopasowaną do moich makro.",
    name: "Marek T.",
    detail: "Plan Premium · 4 miesiące",
  },
  {
    quote:
      "Podoba mi się, że wszystko — plan, progres, kontakt z trenerem — jest w jednym miejscu, nie w pięciu appkach.",
    name: "Ola R.",
    detail: "Plan Standard · 10 miesięcy",
  },
] as const;

export function Testimonials() {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-dark">
          Opinie
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Co mówią klienci
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-3xl border border-line bg-surface-soft p-7"
            >
              <blockquote className="text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 font-mono text-xs text-ink-muted">
                {t.name} · {t.detail}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
