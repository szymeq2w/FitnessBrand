import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <section id="o-mnie" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:items-center md:py-28">
        <Reveal className="aspect-[4/5] w-full max-w-xs rounded-3xl bg-surface-soft border border-line" />
        <Reveal delay={0.15}>
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-dark">
            O mnie
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            [Imię i nazwisko trenera]
          </h2>
          <p className="mt-5 max-w-xl text-ink-muted">
            Od [X] lat pomagam ludziom budować siłę i dobre nawyki, które
            zostają na dłużej niż jeden cykl treningowy. Nie wierzę w gotowe
            plany z internetu — każdy program układam pod konkretną osobę:
            jej czas, sprzęt, historię kontuzji i cele.
          </p>
          <p className="mt-4 max-w-xl text-ink-muted">
            Ta platforma to sposób, żeby mieć wszystko — plan, progres,
            kontakt ze mną — w jednym, uporządkowanym miejscu, zamiast w
            pięciu różnych aplikacjach.
          </p>
          <div className="mt-8 flex gap-8 font-mono">
            <div>
              <div className="text-2xl font-semibold">[XX]</div>
              <div className="text-xs text-ink-muted">lat doświadczenia</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">[XXX]+</div>
              <div className="text-xs text-ink-muted">klientów</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">[Certyfikat]</div>
              <div className="text-xs text-ink-muted">kwalifikacje</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
