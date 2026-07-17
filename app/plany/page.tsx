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
    return <span className="text-ink/25" aria-label="nie">—</span>;
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
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark">
              Cennik
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              Wybierz plan dopasowany
              <br className="hidden md:block" /> do poziomu wsparcia, jakiego potrzebujesz
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-ink/60">
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
                className={`scroll-mt-24 flex flex-col border p-8 ${
                  plan.highlight
                    ? "border-ink bg-ink text-bg md:-translate-y-3"
                    : "border-ink/15 bg-bg"
                }`}
              >
                {plan.highlight && (
                  <span className="mb-4 inline-block w-fit border border-accent bg-accent px-3 py-1 font-mono text-xs font-semibold text-ink">
                    Najczęściej wybierany
                  </span>
                )}
                <h2 className="font-display text-2xl font-bold">{plan.tier}</h2>
                <p className={`mt-2 text-sm ${plan.highlight ? "text-bg/60" : "text-ink/60"}`}>
                  {plan.tagline}
                </p>
                <div className="mt-6 border-t border-current/10 pt-5 font-mono">
                  <span className="text-4xl font-semibold">{plan.amountPLN} zł</span>
                  <span className={`ml-1 text-sm ${plan.highlight ? "text-bg/60" : "text-ink/50"}`}>
                    {" "}
                    {plan.billingNote}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className={plan.highlight ? "text-accent" : "text-accent-dark"}>+</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <p className={`mt-6 text-xs ${plan.highlight ? "text-bg/50" : "text-ink/45"}`}>
                  {plan.forWho}
                </p>

                <a
                  href={`/checkout?plan=${plan.slug}`}
                  className={`mt-8 border px-5 py-3 text-center text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "border-accent bg-accent text-ink hover:bg-accent-dark hover:text-bg"
                      : "border-ink bg-ink text-bg hover:bg-accent hover:border-accent hover:text-ink"
                  }`}
                >
                  Kup dostęp — {plan.tier}
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section className="border-t border-ink/10">
          <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
            <Reveal>
              <h2 className="text-center font-display text-2xl font-bold tracking-tight md:text-4xl">
                Porównanie funkcji
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 overflow-x-auto border border-ink/15">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-ink/15 bg-ink/[0.03]">
                    <th className="p-4 text-left font-medium text-ink/50">Funkcja</th>
                    <th className="p-4 text-center font-display font-bold">Basic</th>
                    <th className="p-4 text-center font-display font-bold">Standard</th>
                    <th className="p-4 text-center font-display font-bold">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.label} className="border-b border-ink/10 last:border-0">
                      <td className="p-4 text-ink/60">{row.label}</td>
                      <td className="p-4 text-center"><Check value={row.basic} /></td>
                      <td className="p-4 text-center"><Check value={row.standard} /></td>
                      <td className="p-4 text-center"><Check value={row.premium} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>

            <Reveal delay={0.15} className="mt-8 text-center text-xs text-ink/45">
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
