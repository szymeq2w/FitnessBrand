export function Footer() {
  return (
    <footer className="bg-ink text-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <span className="font-display text-lg font-semibold">
              FORMA<span className="text-accent">.</span>
            </span>
            <p className="mt-3 max-w-xs text-sm text-surface/60">
              Trening, dieta i progres — ułożone dla Ciebie, w jednym miejscu.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-surface/50">
              Nawigacja
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="/#o-mnie" className="hover:text-accent">O mnie</a></li>
              <li><a href="/#jak-to-dziala" className="hover:text-accent">Jak to działa</a></li>
              <li><a href="/plany" className="hover:text-accent">Plany</a></li>
              <li><a href="/#faq" className="hover:text-accent">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-surface/50">
              Kontakt
            </p>
            <ul className="mt-3 space-y-2 text-sm text-surface/80">
              <li>[email@przyklad.pl]</li>
              <li>[@instagram]</li>
              <li>[+48 000 000 000]</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-surface/10 pt-6 text-xs text-surface/50 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} FORMA. Wszystkie prawa zastrzeżone.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-surface">Regulamin</a>
            <a href="#" className="hover:text-surface">Polityka prywatności</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
