import { TerminalIcon } from "lucide-react";

function CtaFooterSection() {
  return (
    <section
      className="px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden border-2 border-lime bg-linear-gradient-to-br from-[--deg-dark] to-black p-12 sm:p-20">
          {/* Decorative elements */}
          <div
            className="absolute -right-8 -top-8 h-32 w-32 border-2 border-lime/20"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-8 -left-8 h-32 w-32 border-2 border-lime/20"
            aria-hidden="true"
          />

          <div className="relative text-center">
            <div
              className="mx-auto mb-8 inline-flex border-2 border-lime bg-lime/10 p-5 text-lime"
              aria-hidden="true"
            >
              <TerminalIcon />
            </div>

            <h2
              id="cta-heading"
              className="mb-6 text-balance text-4xl font-bold uppercase tracking-tight sm:text-5xl"
            >
              Prêt à <span className="text-lime">collaborer</span> ?
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-pretty font-mono leading-relaxed text-(--deg-muted)">
              <span aria-hidden="true">{">"} </span>Un projet en tête ? Une idée
              à développer ?
              <br />
              <span aria-hidden="true">{">"} </span>Parlons-en autour d'un café
              (virtuel ou non).
            </p>

            <button className="btn-brutal bg-lime px-10 py-5 text-base font-bold text-black hover:bg-lime/90">
              Me contacter →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaFooterSection;
