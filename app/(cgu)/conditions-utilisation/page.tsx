import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description: "Conditions d'utilisation du site DevEnGalère",
}

export default function ConditionsUtilisationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="border-l-4 border-lime pl-6 mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-lime">[Légal]</span>
        <h1 className="mt-2 text-4xl font-bold uppercase tracking-tight sm:text-5xl">Conditions d'utilisation</h1>
        <p className="mt-4 font-mono text-sm text-[--deg-muted]">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>
      </div>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            1. Acceptation des conditions
          </h2>
          <p className="text-[--deg-muted] leading-relaxed">
            En accédant et en utilisant DevEnGalère (le "Site"), vous acceptez d'être lié par ces conditions
            d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Site.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            2. Utilisation du contenu
          </h2>
          <p className="text-[--deg-muted] leading-relaxed mb-4">
            Le contenu fourni sur DevEnGalère, incluant mais non limité aux articles, projets, vidéos et ressources, est
            fourni à des fins éducatives et informatives.
          </p>
          <ul className="list-none space-y-2 text-[--deg-muted]">
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Vous pouvez utiliser le code source des projets open source selon leurs licences respectives</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Les articles et tutoriels peuvent être partagés avec attribution</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>La reproduction intégrale du contenu sans autorisation est interdite</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            3. Liens d'affiliation et bons plans
          </h2>
          <p className="text-[--deg-muted] leading-relaxed">
            DevEnGalère peut contenir des liens d'affiliation et des codes de parrainage. Lorsque vous utilisez ces
            liens, nous pouvons recevoir une commission sans coût supplémentaire pour vous. Ces partenariats nous
            permettent de maintenir le site et de continuer à créer du contenu gratuit.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            4. Avertissement
          </h2>
          <p className="text-[--deg-muted] leading-relaxed">
            Le contenu du Site est fourni "tel quel" sans garantie d'aucune sorte. DevEnGalère ne peut être tenu
            responsable des erreurs, omissions ou résultats obtenus suite à l'utilisation de ce contenu. L'utilisation
            du code et des conseils fournis se fait à vos propres risques.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            5. Propriété intellectuelle
          </h2>
          <p className="text-[--deg-muted] leading-relaxed">
            Le Site et son contenu original (à l'exception du code open source) sont la propriété de DevEnGalère et sont
            protégés par les lois internationales sur le droit d'auteur. Les marques DevEnGalère et le logo associé sont
            des marques de DevEnGalère.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            6. Comportement des utilisateurs
          </h2>
          <p className="text-[--deg-muted] leading-relaxed mb-4">En utilisant le Site, vous acceptez de :</p>
          <ul className="list-none space-y-2 text-[--deg-muted]">
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Ne pas utiliser le Site à des fins illégales ou non autorisées</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Ne pas tenter de compromettre la sécurité du Site</span>
            </li>
            <li className="flex items-start">
              <span className="text-lime mr-2 font-mono">•</span>
              <span>Respecter les droits de propriété intellectuelle</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">
            7. Modifications des conditions
          </h2>
          <p className="text-[--deg-muted] leading-relaxed">
            DevEnGalère se réserve le droit de modifier ces conditions à tout moment. Les modifications prendront effet
            immédiatement après leur publication sur le Site. Votre utilisation continue du Site après les modifications
            constitue votre acceptation des nouvelles conditions.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight border-b-2 border-lime pb-2">8. Contact</h2>
          <p className="text-[--deg-muted] leading-relaxed">
            Pour toute question concernant ces conditions d'utilisation, vous pouvez nous contacter via nos réseaux
            sociaux ou notre Discord.
          </p>
        </section>
        <div className="mt-12 border-t border-[--deg-gray-light] pt-8">
          <p className="font-mono text-xs text-lime">
            <span aria-hidden="true">{"// "}</span>
            DevEnGalère - Galère avec style
          </p>
        </div>
      </div>
    </div>
  )
}
