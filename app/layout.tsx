import type { Metadata } from "next";
import "./globals.css";



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
<body className={` min-h-screen bg-background text-foreground`}>{children}</body>
    </html>
  );
}
