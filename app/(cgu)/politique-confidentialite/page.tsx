import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site DevEnGalère",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="border-l-4 border-lime pl-6 mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-lime">[Légal]</span>
        <h1 className="mt-2 text-4xl font-bold uppercase tracking-tight sm:text-5xl">Politique de confidentialité</h1>
        <p className="mt-4 font-mono text-sm text-(--deg-muted)">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>
      </div>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            1. Introduction
          </h2>
          <p className="text-(--deg-muted) leading-relaxed">
            DevEnGalère s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous
            collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site web.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            2. Données collectées
          </h2>
          <p className="text-(--deg-muted) leading-relaxed mb-4">
            Nous collectons les types de données suivants :
          </p>

          <h3 className="mb-3 text-xl font-bold text-lime">2.1 Données de navigation</h3>
          <ul className="list-none space-y-2 text-(--deg-muted) mb-6">
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Adresse IP</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Type de navigateur et version</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Pages visitées et durée de visite</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Source de référence</span>
            </li>
          </ul>

          <h3 className="mb-3 text-xl font-bold text-lime">2.2 Cookies et technologies similaires</h3>
          <p className="text-(--deg-muted) leading-relaxed">
            Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et
            personnaliser le contenu. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut
            affecter certaines fonctionnalités du site.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            3. Utilisation des données
          </h2>
          <p className="text-(--deg-muted) leading-relaxed mb-4">Nous utilisons vos données pour :</p>
          <ul className="list-none space-y-2 text-(--deg-muted)">
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Améliorer et optimiser notre site web</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Analyser l'utilisation du site et les tendances</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Personnaliser votre expérience utilisateur</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Détecter et prévenir les abus et fraudes</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            4. Analytics et outils tiers
          </h2>
          <p className="text-(--deg-muted) leading-relaxed mb-4">
            Nous utilisons Vercel Analytics pour collecter des données anonymes sur l'utilisation du site. Ces données
            nous aident à comprendre comment les visiteurs interagissent avec notre contenu et à améliorer l'expérience
            utilisateur.
          </p>
          <p className="text-(--deg-muted) leading-relaxed">
            Vercel Analytics respecte la vie privée des utilisateurs et ne collecte pas de données personnelles
            identifiables. Pour plus d'informations, consultez la{" "}
            <a
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime hover:underline"
            >
              politique de confidentialité de Vercel
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            5. Partage des données
          </h2>
          <p className="text-(--deg-muted) leading-relaxed mb-4">
            Nous ne vendons, ne louons ni ne partageons vos informations personnelles avec des tiers, sauf dans les cas
            suivants :
          </p>
          <ul className="list-none space-y-2 text-(--deg-muted)">
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>
                Avec des fournisseurs de services qui nous aident à exploiter le site (ex: Vercel pour l'hébergement)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Pour se conformer à des obligations légales</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Pour protéger nos droits et notre sécurité</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            6. Liens externes
          </h2>
          <p className="text-(--deg-muted) leading-relaxed">
            Notre site contient des liens vers des sites externes (réseaux sociaux, partenaires, outils recommandés).
            Nous ne sommes pas responsables des pratiques de confidentialité de ces sites. Nous vous encourageons à lire
            leurs politiques de confidentialité respectives.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            7. Vos droits
          </h2>
          <p className="text-(--deg-muted) leading-relaxed mb-4">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-none space-y-2 text-(--deg-muted)">
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Droit d'accès à vos données personnelles</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Droit de rectification de vos données</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Droit à l'effacement de vos données</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Droit à la limitation du traitement</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Droit à la portabilité des données</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Droit d'opposition au traitement</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            8. Sécurité des données
          </h2>
          <p className="text-(--deg-muted) leading-relaxed">
            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos
            données contre tout accès non autorisé, modification, divulgation ou destruction. Le site utilise le
            protocole HTTPS pour sécuriser les communications.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            9. Conservation des données
          </h2>
          <p className="text-(--deg-muted) leading-relaxed">
            Nous conservons vos données aussi longtemps que nécessaire pour les finalités décrites dans cette politique,
            ou aussi longtemps que la loi l'exige. Les données analytiques sont généralement conservées de manière
            agrégée et anonymisée.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            10. Modifications de la politique
          </h2>
          <p className="text-(--deg-muted) leading-relaxed">
            Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de
            tout changement en publiant la nouvelle politique sur cette page avec une date de mise à jour révisée.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">11. Contact</h2>
          <p className="text-(--deg-muted) leading-relaxed">
            Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, vous pouvez
            nous contacter via nos réseaux sociaux ou notre serveur Discord.
          </p>
        </section>

        <div className="mt-12 border-t border-(--deg-gray-light) pt-8">
          <p className="font-mono text-xs text-lime">
            <span aria-hidden="true">{"// "}</span>
            DevEnGalère - Votre vie privée nous tient à cœur
          </p>
        </div>
      </div>
    </div>
  )
}
