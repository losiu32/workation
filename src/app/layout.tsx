import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workation – Znajdź pomoc w podróży",
  description:
    "Marketplace łączący podróżników z osobami potrzebującymi krótkoterminowej pomocy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} min-h-screen bg-white text-brand-text`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
