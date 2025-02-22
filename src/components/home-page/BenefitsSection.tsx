import { Clock, Database, FileText, Stethoscope } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section>
      <div className="wrapper">
        <div className="title">
          <h2>
            Pourquoi opter pour l'intelligence artificielle quand on est
            vétérinaire ?
          </h2>
          <p>
            L'intelligence artificielle transforme déjà de nombreux secteurs, y
            compris la médecine vétérinaire. En automatisant les diagnostics, en
            optimisant la gestion des cliniques et en accélérant la production
            de contenus, l'IA permet aux vétérinaires de gagner en efficacité
            tout en maintenant un niveau de soins élevé.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 pt-5">
          <div className="card">
            <div className="icon">
              <Stethoscope />
            </div>
            <h3>Diagnostic et traitement assistés</h3>
            <p>
              En analysant rapidement des milliers de données médicales, l'IA
              détecte des signes parfois imperceptibles à l'œil humain. Elle
              suggère des diagnostics précis et des plans de traitement
              personnalisés.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <Clock />
            </div>
            <h3>Optimisation de la gestion</h3>
            <p>
              L'IA facilite la gestion quotidienne : planification des
              rendez-vous, prévision des stocks et fournitures, facturation
              automatique.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <FileText />
            </div>
            <h3>Génération de contenu</h3>
            <p>
              L'IA prend en charge la rédaction rapide de documents : recherches
              bibliographiques, comptes rendus, mails personnalisés,
              communication sur les réseaux sociaux.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <Database />
            </div>
            <h3>Gestion des dossiers</h3>
            <p>
              En plus de trier et d'organiser les dossiers médicaux, l'IA peut
              repérer des signaux d'alerte et mettre en évidence des épidémies
              locales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
