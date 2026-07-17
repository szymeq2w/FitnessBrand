import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  // Rzucane dopiero przy realnym użyciu (np. w route handlerze),
  // nie blokuje builda - klucz dodajesz w .env / Vercel env vars.
  console.warn("STRIPE_SECRET_KEY nie jest ustawiony w zmiennych środowiskowych.");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "");
