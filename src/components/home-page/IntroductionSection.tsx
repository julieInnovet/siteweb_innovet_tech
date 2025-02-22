import { Brain, Clock, FileText } from "lucide-react";

export default function IntroductionSection() {
  return (
    <section>
      <div className="wrapper">
        <div className="title">
          <h2>Bienvenue chez InnoVetTech</h2>
          <p>
            Nos solutions d'intelligence artificielle et nos outils innovants
            allègent vos tâches administratives pour vous permettre de vous
            concentrer sur l'essentiel : les soins aux animaux.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 pt-5">
          <div className="card">
            <div className="icon">
              <FileText />
            </div>
            <h3>Création de contenu</h3>
            <p>
              Rédaction de comptes rendus, facturation, recherche documentaire,
              mails et bien plus encore.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <Clock />
            </div>
            <h3>Automatisation des tâches</h3>
            <p>
              Classement et envoi de dossiers médicaux, relances et gestion
              administrative simplifiée.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <Brain />
            </div>
            <h3>Optimisation du diagnostic</h3>
            <p>
              Aide à l'identification des pathologies, analyse prédictive et
              gestion intelligente des données.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
