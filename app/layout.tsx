import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maria Vitória Santos | Portfólio",
  description:
    "Portfólio de Maria Vitória Santos — desenvolvimento de software, inteligência artificial e tecnologia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
