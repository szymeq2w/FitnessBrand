import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { PLANS, COMPARISON } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Plany i cennik — Platforma Trenera Personalnego",
};

function Check({ value }: { value: string | boolean }) {
  if (value === true) {
    return <span className="text-accent-dark" aria-label="tak">✓</span>;
  }
  if (value === false) {
    return <span className="text-ink-muted/40" aria-label="nie">—</span>;
  }
  return <span className="font-mono text-xs">{value}</span>;
}

export default function PlansPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-6xl px-6 pb-14 pt-16 text-center md:pt-24">
          <Reveal>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-dark">
              Cennik
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Wybierz plan dopasowany
              <br className="hidden md:block" /> do poziomu wsparcia, jakiego potrzebujesz
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-ink-muted">
              Płatność jednorazowa za wybrany okres — bez subskrypcji i
              automatycznego odnawiania. Dostęp aktywuje się od razu po
              płatności.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <StaggerItem
                key={plan.slug}
                id={plan.slug}
                className={`scroll-mt-24 flex flex-col rounded-3xl border p-8 ${
                  plan.highlight
                    ? "border-ink bg-ink text-surface md:-translate-y-3"
                    : "border-line bg-surface"
                }`}
              >
                {plan.highlight && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-surface">
                    Najczęściej wybierany
                  </span>
                )}
                <h2 className="font-display text-2xl font-semibold">{plan.tier}</h2>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlight ? "text-surface/70" : "text-ink-muted"
                  }`}
                >
                  {plan.tagline}
                </p>
                <div className="mt-6 font-mono">
                  <span className="text-4xl font-semibold">{plan.price}</span>
                  <span
                    className={`ml-1 text-sm ${
                      plan.highlight ? "text-surface/70" : "text-ink-muted"
                    }`}
                  >
                    {" "}
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className={plan.highlight ? "text-accent" : "text-accent-dark"}>
                        +
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <p
                  className={`mt-6 text-xs ${
                    plan.highlight ? "text-surface/60" : "text-ink-muted"
                  }`}
                >
                  {plan.forWho}
                </p>

                <a
                  href={`/checkout?plan=${plan.slug}`}
                  className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-accent text-surface hover:bg-accent-dark"
                      : "bg-ink text-surface hover:bg-accent"
                  }`}
                >
                  Kup dostęp — {plan.tier}
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section className="border-t border-line bg-surface">
          <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
            <Reveal>
              <h2 className="text-center font-display text-2xl font-semibold tracking-tight md:text-3xl">
                Porównanie funkcji
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-line bg-surface-soft">
                    <th className="p-4 text-left font-medium text-ink-muted">Funkcja</th>
                    <th className="p-4 text-center font-display font-semibold">Basic</th>
                    <th className="p-4 text-center font-display font-semibold">Standard</th>
                    <th className="p-4 text-center font-display font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.label} className="border-b border-line last:border-0">
                      <td className="p-4 text-ink-muted">{row.label}</td>
                      <td className="p-4 text-center"><Check value={row.basic} /></td>
                      <td className="p-4 text-center"><Check value={row.standard} /></td>
                      <td className="p-4 text-center"><Check value={row.premium} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>

            <Reveal delay={0.15} className="mt-8 text-center text-xs text-ink-muted">
              Dieta, śledzenie progresu i komentowanie logów to funkcje z Fazy 2 —
              pojawią się w aplikacji wkrótce po starcie MVP.
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
