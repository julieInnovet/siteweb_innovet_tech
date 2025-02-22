import { Brain, Clock, FileText } from "lucide-react";
import Card from "../layout/Card";

const cards = [
  {
    icon: <FileText />,
    title: "Création de contenu",
    description:
      "Rédaction de comptes rendus, facturation, recherche documentaire, mails et bien plus encore.",
  },
  {
    icon: <Clock />,
    title: "Automatisation des tâches",
    description:
      "Classement et envoi de dossiers médicaux, relances et gestion administrative simplifiée.",
  },
  {
    icon: <Brain />,
    title: "Optimisation du diagnostic",
    description:
      "Aide à l'identification des pathologies, analyse prédictive et gestion intelligente des données.",
  },
];

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
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
