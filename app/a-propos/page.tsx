import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À propos | DevEnGalère",
  description: "Découvre l'histoire et la mission de DevEnGalère.",
};

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

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
                  src="/placeholder.svg?height=128&width=128"
                  alt="DevEnGalère"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center bg-lime">
                <span className="font-mono text-lg font-bold text-(--deg-black)">
                  {">"}_
                </span>
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
            {[
              {
                icon: GithubIcon,
                href: "https://github.com/devengalere",
                label: "GitHub",
              },
              {
                icon: TwitterIcon,
                href: "https://twitter.com/devengalere",
                label: "X",
              },
              {
                icon: LinkedinIcon,
                href: "https://linkedin.com/in/devengalere",
                label: "LinkedIn",
              },
            ].map((social) => (
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
      <section className="border-y border-(--deg-gray-light) stripes px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="bg-(--deg-dark) border border-(--deg-gray-light) p-8 sm:p-12">
            <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-lime">
              {"// L'histoire"}
            </h2>
            <div className="space-y-6 font-mono text-sm text-(--deg-muted)">
              <p>
                <span className="text-(--deg-white)">DevEnGalère</span> est né
                d'un constat simple : on galère tous. Bugs mystérieux à 3h du
                matin, docs inexistantes, et parfois même l'IA qui répond à
                côté… bref, le quotidien d'un développeur.
              </p>

              <p>
                Plutôt que de galérer seul dans mon coin, j'ai choisi — moi,
                <a
                  href="https://yves-nasonkevine.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime"
                >
                  Yves Nason Kevine
                </a>
                — de tout documenter : les galères, les solutions, les petites
                victoires. Le tout en format court, direct.
              </p>

              <p>
                Aujourd'hui, DevEnGalère c'est une communauté de devs qui
                s'entraident, du contenu tech authentique, et la preuve que même
                avec l'IA,
                <span className="text-lime">
                  rien n'est vraiment simple… mais galérer, c'est aussi
                  progresser.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-mono text-xs uppercase tracking-widest text-lime">
            {"[Les valeurs]"}
          </h2>
          <div className="grid gap-0 border border-(--deg-gray-light) md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Authenticité",
                description:
                  "Pas de façade. Les galères font partie du métier, autant les assumer.",
              },
              {
                num: "02",
                title: "Pragmatisme",
                description:
                  "Des solutions qui marchent en vrai, pas des théories abstraites.",
              },
              {
                num: "03",
                title: "Partage",
                description:
                  "Ce qu'on apprend seul, on le partage à tous. C'est ça, la communauté.",
              },
            ].map((value, index) => (
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
      <section className="border-t border-(--deg-gray-light) px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex border border-lime p-4 text-lime">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <h2 className="mb-4 text-3xl font-bold uppercase">
            Envie de <span className="text-lime">collaborer</span> ?
          </h2>
          <p className="mb-8 font-mono text-sm text-(--deg-muted)">
            {">"} Un projet en tête ? Une idée de contenu ? Discutons.
          </p>
          <button className="btn-brutal px-8 py-4 text-sm">
            Me contacter →
          </button>
        </div>
      </section>
    </div>
  );
}
