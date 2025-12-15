import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cronómetro de Debate",
  description: "Sistema de cronometragem para debates com sincronização em tempo real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
