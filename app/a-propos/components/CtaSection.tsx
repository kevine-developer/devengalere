import React from 'react'

function CtaSection() {
  return (
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
  )
}

export default CtaSection