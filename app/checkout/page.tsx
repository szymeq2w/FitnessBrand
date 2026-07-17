import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { getPlan } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Podsumowanie zamówienia — Platforma Trenera Personalnego",
};

export default function CheckoutPage({
  searchParams,
}: {
  searchParams: { plan?: string };
}) {
  const plan = getPlan(searchParams.plan);

  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark">
          Podsumowanie
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight">
          {plan ? `Wybrany plan: ${plan.tier}` : "Nie wybrano planu"}
        </h1>

        {plan ? (
          <>
            <div className="mt-6 w-full border border-ink/15 bg-bg p-8 text-left">
              <p className="text-ink/60">{plan.tagline}</p>
              <div className="mt-4 border-t border-ink/10 pt-4 font-mono">
                <span className="text-3xl font-semibold">{plan.amountPLN} zł</span>
                <span className="ml-1 text-sm text-ink/50"> {plan.billingNote}</span>
              </div>
              <p className="mt-4 text-xs text-ink/50">
                Płatność jednorazowa przez Stripe. Dostęp aktywuje się
                automatycznie po zaksięgowaniu wpłaty.
              </p>
            </div>

            <form action="/api/checkout" method="POST" className="mt-8 w-full">
              <input type="hidden" name="plan" value={plan.slug} />
              <button
                type="submit"
                className="w-full border border-accent bg-accent px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-dark hover:text-bg"
              >
                Przejdź do płatności — {plan.amountPLN} zł
              </button>
            </form>
          </>
        ) : (
          <p className="mt-4 text-ink/60">
            Wróć do strony planów i wybierz jeden z pakietów.
          </p>
        )}

        <a
          href="/plany"
          className="mt-6 text-sm font-medium underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
        >
          ← Wróć do planów
        </a>
      </main>
      <Footer />
    </>
  );
}
