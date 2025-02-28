import { Brain, Clock, FileText } from "lucide-react";
import CardsSectionLayout from "../layout/ValuesSectionLayout";

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
    <CardsSectionLayout
      cards={cards}
      title="Bienvenue chez InnoVetTech"
      description="Nos solutions d'intelligence artificielle et nos outils innovants allègent vos tâches administratives pour vous permettre de vous concentrer sur l'essentiel : les soins aux animaux."
      mdCols={3}
    />
  );
}
