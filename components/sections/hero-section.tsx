import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32 lg:px-8"
      aria-labelledby="hero-heading"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 grid-pattern opacity-30"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Status badge */}
        <div className="mb-8 inline-flex items-center gap-2 border border-(--deg-gray-light) bg-(--deg-dark) px-4 py-2">
          <span className="h-2 w-2 animate-pulse bg-lime" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-wider text-(--deg-muted)">
            Status: En galère mais opérationnel
          </span>
        </div>

        <h1
          id="hero-heading"
          className="mb-6 text-4xl font-bold uppercase tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          Du code,
          <br />
          <span className="relative inline-block">
            des galères
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 6C50 0 100 12 150 6C200 0 250 12 300 6"
                stroke="#c8ff00"
                strokeWidth="4"
              />
            </svg>
          </span>
          ,
          <br />
          <span className="text-lime">et des solutions.</span>
        </h1>

        <p className="mb-10 max-w-2xl font-mono text-lg text-(--deg-muted) text-pretty sm:text-xl">
          <span aria-hidden="true">{">"} </span>Projets concrets, contenus
          utiles et accessibles,
          <br />
          <span aria-hidden="true">{">"} </span>et vidéos pensées pour aider
          chaque développeur à progresser.
          <span className="cursor-blink" aria-hidden="true"></span>
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/projets"
            className="btn-brutal inline-flex items-center justify-center gap-2 px-8 py-4 text-sm"
          >
            Voir les projets
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="/a-propos"
            className="btn-outline-brutal inline-flex items-center justify-center px-8 py-4 text-sm"
          >
            En savoir plus
          </a>
        </div>

        {/* Stats - brutalist style */}
        <div
          className="mt-20 grid grid-cols-2 gap-0 border border-(--deg-gray-light) sm:grid-cols-4"
          role="list"
          aria-label="Statistiques"
        >
          {[
            { value: "3+", label: "Projets" },
            { value: "50+", label: "Articles" },
            { value: "30+", label: "Bons plans" },
            { value: "100+", label: "Followers" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              role="listitem"
              className={`p-6 text-center ${
                index < 3 ? "border-r border-(--deg-gray-light)" : ""
              } ${
                index < 2
                  ? "border-b border-(--deg-gray-light) sm:border-b-0"
                  : ""
              }`}
            >
              <div className="text-3xl font-bold text-lime sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-(--deg-muted)">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
