import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const inter = Inter({
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
        className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} min-h-screen bg-surface-soft font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
