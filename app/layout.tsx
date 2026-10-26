import "../styles/tokens.css";
import "../styles/site.css";
import "../styles/fixes.css";
import "../styles/mob-portraits.css";
import "../styles/encounter-pose.css";
import "../styles/hero-creeper.css";
import "../styles/enemy-wiki.css";
import "../styles/mob-page.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import SiteScripts from "../components/SiteScripts";

export const metadata: Metadata = {
  title: "Bestiario nocturno — Minecraft",
  description: "Bestiario nocturno: conoce a los mobs hostiles de Minecraft.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <head>
        <meta name="theme-color" content="#10130e" />
      </head>
      <body>
        {children}
        <SiteScripts />
      </body>
    </html>
  );
}
