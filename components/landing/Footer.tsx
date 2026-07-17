export function Footer() {
  return (
    <footer className="bg-ink text-bg">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <span className="font-display text-lg font-bold">
              FORMA<span className="text-accent">.</span>
            </span>
            <p className="mt-3 max-w-xs text-sm text-bg/55">
              Trening, dieta i progres — ułożone dla Ciebie, w jednym miejscu.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-bg/40">
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
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-bg/40">
              Kontakt
            </p>
            <ul className="mt-3 space-y-2 text-sm text-bg/75">
              <li>[email@przyklad.pl]</li>
              <li>[@instagram]</li>
              <li>[+48 000 000 000]</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-bg/10 pt-6 text-xs text-bg/45 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} FORMA. Wszystkie prawa zastrzeżone.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-bg">Regulamin</a>
            <a href="#" className="hover:text-bg">Polityka prywatności</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
