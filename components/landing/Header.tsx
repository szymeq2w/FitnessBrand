export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-lg font-bold tracking-tight">
          FORMA<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-ink/60 md:flex">
          <a href="/#o-mnie" className="hover:text-ink">O mnie</a>
          <a href="/#jak-to-dziala" className="hover:text-ink">Jak to działa</a>
          <a href="/plany" className="hover:text-ink">Plany</a>
          <a href="/#faq" className="hover:text-ink">FAQ</a>
        </nav>
        <a
          href="/plany"
          className="border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:border-accent hover:bg-accent hover:text-ink"
        >
          Wybierz plan
        </a>
      </div>
    </header>
  );
}
