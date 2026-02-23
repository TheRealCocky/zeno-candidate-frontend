import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
    title: "Zeno Grupo - Portal de Candidaturas",
    description: "Sistema especializado para gestão e submissão de candidaturas do Grupo Zeno. Desenvolvido para otimizar o processo de recrutamento e seleção.",
    keywords: ["Recrutamento", "Zeno Grupo", "Software de RH", "Next.js Angola", "Desafio Técnico"],
    authors: [{ name: "Euclides Baltazar" }],
    creator: "Euclides Baltazar",
    publisher: "Zeno Grupo",
    applicationName: "Portal Zeno Talentos",
    robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
