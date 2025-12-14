import { Terminal } from "lucide-react";

export default function ComingSoon() {
  return (
    <main className="relative flex  flex-col items-center justify-center overflow-hidden px-4 py-12">
      {/* Grille de fond pour effet technique */}
      <div
        className="grid-pattern absolute inset-0 opacity-30"
        aria-hidden="true"
      />

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Conteneur avec bordures décoratives */}
        <div className="relative border-2 border-lime/20 bg-[--deg-dark] p-8 sm:p-12">
          {/* Éléments décoratifs - coins */}
          <div
            className="absolute -left-2 -top-2 h-16 w-16 border-l-2 border-t-2 border-lime"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-2 -right-2 h-16 w-16 border-b-2 border-r-2 border-lime"
            aria-hidden="true"
          />

          {/* Titre principal */}
          <h1 className="mb-6 text-center text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            <span className="text-lime">Bientôt</span> Disponible
          </h1>

          {/* Message descriptif */}
          <p className="mb-8 text-center font-mono text-sm leading-relaxed text-[--deg-muted] sm:text-base">
            Je suis en train de finaliser les dernières étapes.
            <br />
            Le site sera accessible très prochainement
            <span className="cursor-blink" />
          </p>

          {/* Barre de progression */}
          <div className="mx-auto max-w-md">
            <div className="mb-2 flex justify-between font-mono text-xs text-[--deg-muted]">
              <span>Progression</span>
              <span>85%</span>
            </div>
            <div className="h-2 border border-lime/30 bg-[--deg-gray]">
              <div
                className="h-full bg-lime transition-all duration-1000 ease-out"
                style={{ width: "85%" }}
                role="progressbar"
                aria-valuenow={85}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Progression du développement"
              />
            </div>
          </div>

          {/* Message de statut */}
          <p className="mt-6 text-center font-mono text-xs text-lime">
            <span aria-hidden="true">[ </span>
            SYSTÈME EN COURS DE DÉPLOIEMENT
            <span aria-hidden="true"> ]</span>
          </p>
        </div>
      </div>

      {/* Effet de scanlines subtil */}
      <div
        className="scanlines pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
    </main>
  );
}
