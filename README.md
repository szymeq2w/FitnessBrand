# Platforma Trenera Personalnego — Etap 1: Fundament

Ten pakiet zawiera fundament projektu:
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (skonfigurowany, gotowy pod landing z Etapu 2/3)
- Prisma + PostgreSQL (schemat startowy: model `User` z rolami ADMIN/CLIENT)
- Endpoint `/api/health` sprawdzający realne połączenie z bazą danych

## 1. Uruchomienie lokalne

```bash
npm install
```

## 2. Baza danych (Neon lub Supabase — oba działają identycznie z Prisma)

1. Załóż darmowy projekt na [neon.tech](https://neon.tech) lub [supabase.com](https://supabase.com).
2. Skopiuj connection string (pooled i direct) do pliku `.env`:
   ```bash
   cp .env.example .env
   ```
   i wklej realne wartości `DATABASE_URL` / `DIRECT_URL`.
3. Wypchnij schemat do bazy:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

## 3. Test lokalny

```bash
npm run dev
```

Otwórz `http://localhost:3000` i kliknij "Sprawdź połączenie z bazą danych"
(albo wejdź na `http://localhost:3000/api/health`). Odpowiedź
`{"status":"ok","database":"connected"}` = fundament działa poprawnie.

## 4. Wdrożenie na Vercel

1. Wrzuć ten katalog jako repozytorium na GitHub.
2. Na [vercel.com](https://vercel.com) → "Add New Project" → wskaż repo.
3. W ustawieniach projektu (Environment Variables) dodaj `DATABASE_URL`
   i `DIRECT_URL` (te same wartości co w `.env`).
4. Deploy. Po zakończeniu builda odwiedź `https://<twoj-projekt>.vercel.app/api/health`,
   żeby potwierdzić, że produkcyjne środowisko też łączy się z bazą.

## Co dalej (kolejne etapy)

- **Etap 2** — pełna treść i layout landing page (sekcje, responsywność, bez animacji)
- **Etap 3** — Framer Motion, animacje na scrollu
- **Etap 4** — strona z 3 planami (Basic/Standard/Premium)
- **Etap 5** — Stripe: płatność jednorazowa + webhook auto-aktywacji
- **Etap 6** — logowanie email+hasło, role admin/klient
- **Etap 7** — panel admina: lista klientów
- **Etap 8** — panel bazy ćwiczeń
- **Etap 9** — moduł treningowy (plany, dni/cykle)
- **Etap 10** — statystyki biznesowe

Każdy kolejny etap rozbudowuje ten sam projekt — nic tutaj nie trzeba
przepisywać od zera.
