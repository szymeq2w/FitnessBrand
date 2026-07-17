import type { Metadata } from "next";
import { Bricolage_Grotesque, Karla, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const karla = Karla({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Platforma Trenera Personalnego",
  description: "Treningi, dieta i progres w jednym miejscu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${bricolage.variable} ${karla.variable} ${plexMono.variable} min-h-screen bg-bg font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
