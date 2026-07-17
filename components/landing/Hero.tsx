import { CycleMotif } from "./CycleMotif";
import { GeoPattern } from "./GeoPattern";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-6 pb-20 pt-16 md:pb-32 md:pt-24">
      <GeoPattern className="pointer-events-none absolute -right-16 -top-10 h-[420px] w-[420px] md:-right-4" />

      <div className="relative grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start">
        <StaggerGroup onMount>
          <StaggerItem>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark">
              Trening · Dieta · Progres
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="font-display text-4xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              Twój plan.
              <br />
              Twój trener.
              <br />
              <span className="text-accent">Jedno miejsce.</span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-7 max-w-md text-lg text-ink/65">
              Zapomnij o rozsypanych planach w PDF-ach i wiadomościach. Trening,
              dieta i progres — układane dla Ciebie i dostępne w jednej
              aplikacji, na telefonie i komputerze.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="/plany"
                className="border border-ink bg-accent px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-dark hover:text-bg"
              >
                Zobacz plany i cennik
              </a>
              <a
                href="#jak-to-dziala"
                className="text-sm font-medium text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
              >
                Jak to działa?
              </a>
            </div>
          </StaggerItem>
        </StaggerGroup>

        <Reveal delay={0.35} y={28} className="relative mt-4 md:mt-16">
          <div className="border border-ink/15 bg-bg p-6 shadow-[6px_6px_0_0_rgba(23,24,28,0.08)]">
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-ink/50">
              Przykładowy tydzień
            </p>
            <CycleMotif />
            <div className="mt-5 flex items-baseline justify-between border-t border-ink/10 pt-4 font-mono">
              <div>
                <span className="text-2xl font-semibold">+12,5</span>
                <span className="ml-1 text-sm text-ink/50">kg / 8 tyg.</span>
              </div>
              <span className="text-xs text-ink/50">przysiad</span>
            </div>
          </div>
          <p className="mt-3 px-1 text-xs text-ink/45">
            Przykładowy podgląd progresu siłowego klienta w panelu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
