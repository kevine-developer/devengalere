"use client";

import LogoHeader from "@/components/layout/header/ui/LogoHeader";
import { Terminal, Bell, Zap, Check } from "lucide-react"; // Ajout de Check
import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [wantsEarlyAccess, setWantsEarlyAccess] = useState(false); // Nouvel état
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        wantsEarlyAccess,
      }),
    });

    if (!res.ok) throw new Error("Erreur serveur");

    setIsSubmitted(true);
    setEmail("");
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};


  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-8">
      {/* Grille de fond */}
      <div
        className="grid-pattern absolute inset-0 opacity-30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        <div className="relative border-2 border-lime/20 bg-[--deg-dark] p-6 sm:p-10">
          {/* Coins décoratifs */}
          <div
            className="absolute -left-2 -top-2 h-16 w-16 border-l-2 border-t-2 border-lime"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-2 -right-2 h-16 w-16 border-b-2 border-r-2 border-lime"
            aria-hidden="true"
          />

          <div className="mb-6 flex justify-center">
            <LogoHeader />
          </div>

          <h1 className="mb-6 text-center text-2xl font-bold uppercase tracking-tight sm:text-3xl">
            <span className="text-lime">Bientôt</span> Disponible
          </h1>

          <p className="mb-8 text-center font-mono text-sm leading-relaxed text-[--deg-muted] sm:text-base">
            Je suis en train de finaliser les dernières étapes.
            <br />
            Le site sera accessible très prochainement
            <span className="cursor-blink" />
          </p>

          {/* Barre de progression */}
          <div className="mx-auto mb-8 max-w-md">
            <div className="mb-2 flex justify-between font-mono text-xs text-[--deg-muted]">
              <span>Progression</span>
              <span>60%</span>
            </div>
            <div className="h-2 border border-lime/30 bg-[--deg-gray]">
              <div
                className="h-full bg-lime transition-all duration-1000 ease-out"
                style={{ width: "60%" }}
                role="progressbar"
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>

          <div className="mx-auto max-w-md space-y-4">
            <div className="border-t border-lime/20 pt-2">
              <h2 className="mb-4 flex items-center justify-center gap-2 text-center font-mono text-sm uppercase tracking-wider text-lime">
                <Bell className="h-4 w-4" />
                Restez informé
              </h2>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      required
                      className="w-full border border-[--deg-gray-light] bg-[--deg-black] px-4 py-3 font-mono text-sm text-[--deg-white] placeholder-[--deg-muted] transition-all focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/20"
                      disabled={isLoading}
                    />
                  </div>

                  {/* CHECKBOX ACCÈS ANTICIPÉ */}
                  <label className="flex cursor-pointer items-start gap-3 group">
                    <div className="relative flex h-5 w-5 shrink-0 items-center justify-center border border-lime/40 bg-[--deg-black] transition-colors group-hover:border-lime">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={wantsEarlyAccess}
                        onChange={(e) => setWantsEarlyAccess(e.target.checked)}
                      />
                      <Check
                        className={`h-3.5 w-3.5 text-lime transition-opacity ${
                          wantsEarlyAccess ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-xs uppercase text-[--deg-white] group-hover:text-lime transition-colors">
                        Demander un accès anticipé
                      </span>
                      <span className="font-mono text-[10px] text-[--deg-muted]">
                        Devenir bêta-testeur avant le lancement officiel
                      </span>
                    </div>
                  </label>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-brutal w-full py-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin">⏳</span>
                        Traitement...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Valider l'inscription
                      </span>
                    )}
                  </button>
                </form>
              ) : (
                <div className="rounded border border-lime/30 bg-lime/5 p-4 text-center">
                  <p className="font-mono text-sm text-lime">
                    ✓ Inscription confirmée !
                  </p>
                  <p className="mt-1 font-mono text-xs text-[--deg-muted]">
                    {wantsEarlyAccess
                      ? "Vous êtes sur la liste d'accès anticipé."
                      : "Vous serez notifié dès le lancement."}
                  </p>
                </div>
              )}
            </div>
          </div>

          <p className="mt-8 text-center font-mono text-xs text-lime">
            <span aria-hidden="true">[ </span>
            SYSTÈME EN COURS DE DÉPLOIEMENT
            <span aria-hidden="true"> ]</span>
          </p>
        </div>
      </div>
    </main>
  );
}
