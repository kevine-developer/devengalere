import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons/iconAll";
import type { Metadata } from "next";
import Image from "next/image";
import CtaSection from "./components/CtaSection";
import StorySection from "./components/StorySection";
import { SITE_CONFIG } from "@/lib/constants";
import { InstagramIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos | DevEnGalère",
  description: "Découvre l'histoire et la mission de DevEnGalère.",
  keywords: [
    "DevEnGalère",
    "Développeur",
    "Authenticité",
    "Collaboration",
    "YVES narson kevine",
  ],
};

const dataSocial = [
  {
    icon: GithubIcon,
    href: SITE_CONFIG.social.github,
    label: "GitHub",
  },
  {
    icon: InstagramIcon,
    href: SITE_CONFIG.social.instagram,
    label: "Instagram",
  },
  {
    icon: LinkedinIcon,
    href: SITE_CONFIG.social.linkedin,
    label: "LinkedIn",
  }

];

const dataValue = [
  {
    num: "01",
    title: "Authenticité",
    description:
      "Pas de façade. Les galères font partie du métier, autant les assumer.",
  },
  {
    num: "02",
    title: "Simplicité",
    description:
      "Les solutions devraient être simples. Pas besoin de complexité pour résoudre des problèmes simples.",
  },
  {
    num: "03",
    title: "Collaboration",
    description:
      "La communauté dev est plus forte quand on se partage et on s'entraide.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative mx-auto max-w-4xl">
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="relative mb-8">
              <div className="h-32 w-32 overflow-hidden border-4 border-lime bg-(--deg-gray)">
                <Image
                  src="https://res.cloudinary.com/dhe585mze/image/upload/v1765019971/logo._td5d5y.png?height=128&width=128"
                  alt="DevEnGalère"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>
            <span className="mb-4 font-mono text-xs uppercase tracking-widest text-lime">
              [À propos]
            </span>
            <h1 className="mb-4 text-4xl font-bold uppercase tracking-tight sm:text-5xl">
              Salut, c'est
              <br />
              <span className="text-lime">DevEnGalère</span>
            </h1>
            <p className="max-w-2xl font-mono text-sm text-(--deg-muted)">
              {">"} Développeur passionné qui transforme les galères
              <br />
              {">"} quotidiennes en contenu utile pour la communauté dev.
            </p>
          </div>

          {/* Social links */}
          <div className="mt-12 flex justify-center gap-2">
            {dataSocial.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center border border-(--deg-gray-light) text-(--deg-muted) transition-all hover:border-lime hover:text-lime hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <StorySection />

      {/* Values */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-mono text-xs uppercase tracking-widest text-lime">
            {"[Les valeurs]"}
          </h2>
          <div className="grid gap-0 border border-(--deg-gray-light) md:grid-cols-3">
            {dataValue.map((value, index) => (
              <div
                key={value.title}
                className={`relative p-8 transition-colors hover:bg-(--deg-dark) ${
                  index < 2 ? "border-r border-(--deg-gray-light)" : ""
                }`}
              >
                <span className="absolute right-4 top-4 font-mono text-5xl font-bold text-(--deg-gray)">
                  {value.num}
                </span>
                <h3 className="mb-3 text-xl font-bold uppercase">
                  {value.title}
                </h3>
                <p className="font-mono text-xs text-(--deg-muted)">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </div>
  );
}
