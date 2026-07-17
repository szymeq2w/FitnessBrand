import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

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
    <section className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <Reveal>
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark">
            Opinie
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            Co mówią klienci
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <StaggerItem
              key={t.name}
              className={`flex flex-col justify-between border border-ink/15 bg-bg p-7 ${
                i === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              <blockquote className="text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
              <p className="mt-6 border-t border-ink/10 pt-4 font-mono text-xs text-ink/50">
                {t.name} · {t.detail}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
