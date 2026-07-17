import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { PLANS } from "@/lib/plans";

export function PlansSummary() {
  return (
    <section id="plany" className="mx-auto max-w-6xl px-6 py-20 md:py-32">
      <Reveal>
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark">
          Cennik
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
          Wybierz swój poziom wsparcia
        </h2>
      </Reveal>

      <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <StaggerItem
            key={plan.slug}
            className={`flex flex-col border p-8 ${
              plan.highlight
                ? "border-ink bg-ink text-bg md:-translate-y-3"
                : "border-ink/15 bg-bg"
            }`}
          >
            <h3 className="font-display text-xl font-bold">{plan.tier}</h3>
            <p className={`mt-2 text-sm ${plan.highlight ? "text-bg/60" : "text-ink/60"}`}>
              {plan.tagline}
            </p>
            <div className="mt-6 border-t border-current/10 pt-5 font-mono">
              <span className="text-3xl font-semibold">{plan.amountPLN} zł</span>
              <span className={`ml-1 text-sm ${plan.highlight ? "text-bg/60" : "text-ink/50"}`}>
                {" "}
                {plan.billingNote}
              </span>
            </div>
            <ul className="mt-6 flex-1 space-y-2 text-sm">
              {plan.features.slice(0, 3).map((f) => (
                <li key={f} className="flex gap-2">
                  <span className={plan.highlight ? "text-accent" : "text-accent-dark"}>+</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={`/plany#${plan.slug}`}
              className={`mt-8 border px-5 py-3 text-center text-sm font-semibold transition-colors ${
                plan.highlight
                  ? "border-accent bg-accent text-ink hover:bg-accent-dark hover:text-bg"
                  : "border-ink bg-ink text-bg hover:bg-accent hover:border-accent hover:text-ink"
              }`}
            >
              Wybierz {plan.tier}
            </a>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <p className="mt-8 text-center text-xs text-ink/50">
        Pełne porównanie funkcji znajdziesz na{" "}
        <a href="/plany" className="underline hover:text-ink">
          stronie z planami
        </a>
        .
      </p>
    </section>
  );
}
