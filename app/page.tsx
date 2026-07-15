export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-semibold">
        Platforma Trenera Personalnego
      </h1>
      <p className="max-w-md text-brand-600">
        Etap 1: fundament projektu działa. Landing page z pełną treścią
        i animacjami pojawi się w Etapie 2 i 3.
      </p>
      <a
        href="/api/health"
        className="rounded-full bg-brand-900 px-5 py-2 text-sm text-white hover:bg-brand-700"
      >
        Sprawdź połączenie z bazą danych
      </a>
    </main>
  );
}
