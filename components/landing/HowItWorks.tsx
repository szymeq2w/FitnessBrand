import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const STEPS = [
  {
    n: "01",
    title: "Wybierasz plan",
    body: "Basic, Standard albo Premium — zależnie od tego, ile wsparcia ode mnie potrzebujesz.",
  },
  {
    n: "02",
    title: "Płacisz i masz dostęp od razu",
    body: "Płatność jednorazowa za okres, dostęp aktywuje się automatycznie — bez czekania.",
  },
  {
    n: "03",
    title: "Układam Twój plan",
    body: "Trening dzielę na dni/cykle dopasowane do Twojego poziomu i celu.",
  },
  {
    n: "04",
    title: "Trenujesz i widzisz progres",
    body: "Wchodzisz na dany dzień, widzisz ćwiczenia, śledzisz jak rośnie Twoja siła.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="jak-to-dziala" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-dark">
          Proces
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Jak to działa
        </h2>
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
        {STEPS.map((step) => (
          <StaggerItem key={step.n} className="bg-surface p-7">
            <span className="font-mono text-sm text-accent-dark">{step.n}</span>
            <h3 className="mt-3 font-display text-lg font-semibold">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{step.body}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
