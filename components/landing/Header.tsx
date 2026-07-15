export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg font-semibold tracking-tight">
          FORMA<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-ink-muted md:flex">
          <a href="#o-mnie" className="hover:text-ink">O mnie</a>
          <a href="#jak-to-dziala" className="hover:text-ink">Jak to działa</a>
          <a href="#plany" className="hover:text-ink">Plany</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </nav>
        <a
          href="#plany"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-surface transition-colors hover:bg-accent"
        >
          Wybierz plan
        </a>
      </div>
    </header>
  );
}
