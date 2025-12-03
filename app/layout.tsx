import type React from "react";
import type { Metadata, Viewport } from "next";

import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import {
  Space_Grotesk,
  JetBrains_Mono,
  Inter as Font_Inter,
  Geist_Mono as Font_Geist_Mono,
  Source_Serif_4 as Font_Source_Serif_4,
} from "next/font/google";

const _inter = Font_Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const _geistMono = Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const _sourceSerif_4 = Font_Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DevEnGalère | Le hub créatif pour devs en galère",
    template: "%s | DevEnGalère",
  },
  description:
    "Projets open source, articles techniques, tutoriels vidéo et bons plans pour développeurs. Codes promos, formations et ressources pour les devs qui galèrent mais qui progressent.",
  keywords: [
    "développeur",
    "développement web",
    "projets open source",
    "blog tech",
    "tutoriels dev",
    "codes promos développeurs",
    "formations développeurs",
    "DevEnGalère",
    "communauté dev",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "DevEnGalère" }],
  creator: "DevEnGalère",
  publisher: "DevEnGalère",
  metadataBase: new URL("https://devengalere.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://devengalere.com",
    title: "DevEnGalère | Le hub créatif pour devs en galère",
    description:
      "Projets open source, articles techniques, tutoriels vidéo et bons plans pour développeurs. La communauté dev qui galère mais qui progresse.",
    siteName: "DevEnGalère",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DevEnGalère - Le hub créatif pour devs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevEnGalère | Le hub créatif pour devs en galère",
    description:
      "Projets open source, articles techniques, tutoriels vidéo et bons plans pour développeurs.",
    creator: "@devengalere",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#c8ff00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-lime focus:text-black focus:font-bold"
        >
          Aller au contenu principal
        </a>
        <div className="noise-overlay" />
        <div className="flex min-h-screen flex-col relative z-10">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
