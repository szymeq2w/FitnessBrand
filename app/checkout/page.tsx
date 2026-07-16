import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { PLANS } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Podsumowanie zamówienia — Platforma Trenera Personalnego",
};

export default function CheckoutPage({
  searchParams,
}: {
  searchParams: { plan?: string };
}) {
  const plan = PLANS.find((p) => p.slug === searchParams.plan);

  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-dark">
          Podsumowanie
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          {plan ? `Wybrany plan: ${plan.tier}` : "Nie wybrano planu"}
        </h1>

        {plan ? (
          <div className="mt-6 w-full rounded-3xl border border-line bg-surface p-8">
            <p className="text-ink-muted">{plan.tagline}</p>
            <div className="mt-4 font-mono">
              <span className="text-3xl font-semibold">{plan.price}</span>
              <span className="ml-1 text-sm text-ink-muted"> {plan.period}</span>
            </div>
          </div>
        ) : (
          <p className="mt-4 text-ink-muted">
            Wróć do strony planów i wybierz jeden z pakietów.
          </p>
        )}

        <div className="mt-8 rounded-2xl border border-dashed border-line bg-surface-soft p-6 text-sm text-ink-muted">
          Płatność Stripe (jednorazowa, z automatyczną aktywacją dostępu)
          zostanie podpięta w tym miejscu w <strong className="text-ink">Etapie 5</strong>.
        </div>

        <a
          href="/plany"
          className="mt-8 text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-ink"
        >
          ← Wróć do planów
        </a>
      </main>
      <Footer />
    </>
  );
}
