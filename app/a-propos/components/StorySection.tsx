import React from 'react'

function StorySection() {
  return (
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
  )
}

export default StorySection