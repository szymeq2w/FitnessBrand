import { Reveal } from "@/components/motion/Reveal";

const FAQS = [
  {
    q: "Czy to jest subskrypcja?",
    a: "Nie. Płatność jest jednorazowa za wybrany okres — dostęp nie odnawia się automatycznie. Sam decydujesz, kiedy przedłużyć.",
  },
  {
    q: "Jak szybko dostanę dostęp po płatności?",
    a: "Dostęp aktywuje się automatycznie od razu po zaksięgowaniu płatności przez Stripe.",
  },
  {
    q: "Czy mogę się kontaktować z trenerem przez aplikację?",
    a: "Bieżąca komunikacja odbywa się poza aplikacją (WhatsApp/Instagram/mail). W aplikacji trener komentuje bezpośrednio Twoje logi i progres.",
  },
  {
    q: "Co się dzieje z moimi danymi (waga, dieta)?",
    a: "Dane traktujemy jako wrażliwe i przetwarzamy zgodnie z RODO — masz prawo do wglądu i usunięcia swoich danych w każdej chwili.",
  },
  {
    q: "Czy mogę zmienić plan w trakcie?",
    a: "Tak, napisz do mnie bezpośrednio, a ustalimy zmianę na kolejny okres rozliczeniowy.",
  },
] as const;

export function Faq() {
  return (
    <section id="faq" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-dark">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Najczęstsze pytania
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 divide-y divide-line rounded-2xl border border-line">
          {FAQS.map((item) => (
            <details key={item.q} className="group p-6 open:bg-surface-soft">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium marker:content-none">
                {item.q}
                <span className="ml-4 shrink-0 text-ink-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-ink-muted">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
