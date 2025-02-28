import { Clock, Database, FileText, Stethoscope } from "lucide-react";
import CardsSectionLayout from "../layout/ValuesSectionLayout";

const cards = [
  {
    icon: <Stethoscope />,
    title: "Diagnostic et traitement assistés",
    description:
      "En analysant rapidement des milliers de données médicales, l'IA détecte des signes parfois imperceptibles à l'œil humain. Elle suggère des diagnostics précis et des plans de traitement personnalisés.",
  },
  {
    icon: <Clock />,
    title: "Optimisation de la gestion",
    description:
      "L'IA facilite la gestion quotidienne : planification des rendez-vous, prévision des stocks et fournitures, facturation automatique.",
  },
  {
    icon: <FileText />,
    title: "Génération de contenu",
    description:
      "L'IA prend en charge la rédaction rapide de documents : recherches bibliographiques, comptes rendus, mails personnalisés, communication sur les réseaux sociaux.",
  },
  {
    icon: <Database />,
    title: "Gestion des dossiers",
    description:
      "En plus de trier et d'organiser les dossiers médicaux, l'IA peut repérer des signaux d'alerte et mettre en évidence des épidémies locales.",
  },
];

export default function BenefitsSection() {
  return (
    <CardsSectionLayout
      cards={cards}
      title="Pourquoi opter pour l'intelligence artificielle quand on est vétérinaire ?"
      description="L'intelligence artificielle transforme déjà de nombreux secteurs, y compris la médecine vétérinaire. En automatisant les diagnostics, en optimisant la gestion des cliniques et en accélérant la production de contenus, l'IA permet aux vétérinaires de gagner en efficacité tout en maintenant un niveau de soins élevé."
      mdCols={2}
      lgCols={4}
    />
  );
}
