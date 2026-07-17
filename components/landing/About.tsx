import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <section id="o-mnie" className="border-t border-ink/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.75fr_1.25fr] md:items-center md:py-32">
        <Reveal className="relative aspect-[4/5] w-full max-w-xs border border-ink/15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(23,24,28,0.06) 0px, rgba(23,24,28,0.06) 1px, transparent 1px, transparent 12px)",
            }}
          />
          <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-wide text-ink/40">
            Zdjęcie trenera
          </span>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark">
            O mnie
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            [Imię i nazwisko trenera]
          </h2>
          <p className="mt-5 max-w-xl text-ink/65">
            Od [X] lat pomagam ludziom budować siłę i dobre nawyki, które
            zostają na dłużej niż jeden cykl treningowy. Nie wierzę w gotowe
            plany z internetu — każdy program układam pod konkretną osobę:
            jej czas, sprzęt, historię kontuzji i cele.
          </p>
          <p className="mt-4 max-w-xl text-ink/65">
            Ta platforma to sposób, żeby mieć wszystko — plan, progres,
            kontakt ze mną — w jednym, uporządkowanym miejscu, zamiast w
            pięciu różnych aplikacjach.
          </p>
          <div className="mt-9 flex gap-10 border-t border-ink/10 pt-6 font-mono">
            <div>
              <div className="text-2xl font-semibold">[XX]</div>
              <div className="text-xs text-ink/50">lat doświadczenia</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">[XXX]+</div>
              <div className="text-xs text-ink/50">klientów</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">[Certyfikat]</div>
              <div className="text-xs text-ink/50">kwalifikacje</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
