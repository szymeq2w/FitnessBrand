import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
