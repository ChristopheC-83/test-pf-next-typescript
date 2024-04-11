import type { Metadata } from "next";
import { Reem_Kufi_Fun } from "next/font/google";
import "./globals.css";

//  J'ai remplacé la font Iner par Reem Kufi Fun => répercussion sur tout le projet !

const kufi = Reem_Kufi_Fun({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PortFolio - Web Developer",
  description: "Test de la mise en place d'un portfolio avec Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="min-h-screen">
<body className={`${kufi.className} min-h-screen bg-background text-foreground`}>{children}</body>
    </html>
  );
}
