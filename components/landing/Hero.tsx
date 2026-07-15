import { CycleMotif } from "./CycleMotif";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <StaggerGroup onMount>
          <StaggerItem>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-dark">
              Trening · Dieta · Progres
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Twój plan.
              <br />
              Twój trener.
              <br />
              <span className="text-accent">Jedno miejsce.</span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 max-w-md text-lg text-ink-muted">
              Zapomnij o rozsypanych planach w PDF-ach i wiadomościach. Trening,
              dieta i progres — układane dla Ciebie i dostępne w jednej
              aplikacji, na telefonie i komputerze.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#plany"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-surface transition-colors hover:bg-accent-dark"
              >
                Zobacz plany i cennik
              </a>
              <a
                href="#jak-to-dziala"
                className="text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
              >
                Jak to działa?
              </a>
            </div>
          </StaggerItem>
        </StaggerGroup>

        <Reveal delay={0.3} y={24} className="flex flex-col gap-4">
          <div className="rounded-3xl border border-line bg-surface p-6 shadow-sm">
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-ink-muted">
              Przykładowy tydzień
            </p>
            <CycleMotif />
            <div className="mt-5 flex items-baseline justify-between font-mono">
              <div>
                <span className="text-2xl font-semibold">+12,5</span>
                <span className="ml-1 text-sm text-ink-muted">kg / 8 tyg.</span>
              </div>
              <span className="text-xs text-ink-muted">przysiad</span>
            </div>
          </div>
          <p className="px-2 text-center text-xs text-ink-muted">
            Przykładowy podgląd progresu siłowego klienta w panelu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
