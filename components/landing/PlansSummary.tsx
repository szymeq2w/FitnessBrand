const PLANS = [
  {
    tier: "Basic",
    price: "od [XXX] zł",
    period: "/ okres",
    tagline: "Plan samodzielny, bez bieżącego kontaktu ze mną.",
    features: ["Gotowy plan treningowy", "Dostęp do bazy ćwiczeń", "Bez korekt w trakcie"],
    highlight: false,
  },
  {
    tier: "Standard",
    price: "od [XXX] zł",
    period: "/ okres",
    tagline: "Spersonalizowany plan + comiesięczna korekta.",
    features: [
      "Plan ułożony indywidualnie",
      "Korekta planu raz w miesiącu",
      "Dostęp do biblioteki przepisów",
    ],
    highlight: true,
  },
  {
    tier: "Premium",
    price: "od [XXX] zł",
    period: "/ okres",
    tagline: "Pełny coaching 1:1 z cotygodniowym wsparciem.",
    features: [
      "Cotygodniowe sprawdzanie progresu",
      "Bieżące komentowanie Twoich logów",
      "Priorytetowy kontakt ze mną",
    ],
    highlight: false,
  },
] as const;

export function PlansSummary() {
  return (
    <section id="plany" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-dark">
        Cennik
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
        Wybierz swój poziom wsparcia
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.tier}
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
                {plan.period}
              </span>
            </div>
            <ul className="mt-6 flex-1 space-y-2 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className={plan.highlight ? "text-accent" : "text-accent-dark"}>
                    +
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors ${
                plan.highlight
                  ? "bg-accent text-surface hover:bg-accent-dark"
                  : "bg-ink text-surface hover:bg-accent"
              }`}
            >
              Wybierz {plan.tier}
            </a>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-ink-muted">
        Pełne porównanie funkcji i płatność Stripe pojawią się w Etapie 4 i 5.
      </p>
    </section>
  );
}
