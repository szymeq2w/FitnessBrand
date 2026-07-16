import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { PLANS } from "@/lib/plans";

export function PlansSummary() {
  return (
    <section id="plany" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-dark">
          Cennik
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Wybierz swój poziom wsparcia
        </h2>
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <StaggerItem
            key={plan.slug}
            className={`flex flex-col rounded-3xl border p-8 ${
              plan.highlight
                ? "border-ink bg-ink text-surface"
                : "border-line bg-surface"
            }`}
          >
            <h3 className="font-display text-xl font-semibold">{plan.tier}</h3>
            <p
              className={`mt-2 text-sm ${
                plan.highlight ? "text-surface/70" : "text-ink-muted"
              }`}
            >
              {plan.tagline}
            </p>
            <div className="mt-6 font-mono">
              <span className="text-3xl font-semibold">{plan.price}</span>
              <span
                className={`ml-1 text-sm ${
                  plan.highlight ? "text-surface/70" : "text-ink-muted"
                }`}
              >
                {" "}
                {plan.period}
              </span>
            </div>
            <ul className="mt-6 flex-1 space-y-2 text-sm">
              {plan.features.slice(0, 3).map((f) => (
                <li key={f} className="flex gap-2">
                  <span className={plan.highlight ? "text-accent" : "text-accent-dark"}>
                    +
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={`/plany#${plan.slug}`}
              className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors ${
                plan.highlight
                  ? "bg-accent text-surface hover:bg-accent-dark"
                  : "bg-ink text-surface hover:bg-accent"
              }`}
            >
              Wybierz {plan.tier}
            </a>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <p className="mt-6 text-center text-xs text-ink-muted">
        Pełne porównanie funkcji znajdziesz na{" "}
        <a href="/plany" className="underline hover:text-ink">
          stronie z planami
        </a>
        . Płatność Stripe pojawi się w Etapie 5.
      </p>
    </section>
  );
}
