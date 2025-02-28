import { Heart, Lightbulb, Shield, Zap } from "lucide-react";
import CardsSectionLayout from "../layout/ValuesSectionLayout";

const cards = [
  {
    icon: <Lightbulb />,
    title: "Innovation",
    description:
      "Nous repoussons constamment les limites de l'innovation pour créer des solutions qui transforment la médecine vétérinaire.",
  },
  {
    icon: <Heart />,
    title: "Passion",
    description:
      "Notre passion pour la santé animale guide chacune de nos décisions et alimente notre désir d'excellence.",
  },
  {
    icon: <Shield />,
    title: "Fiabilité",
    description:
      "Nous nous engageons à fournir des solutions fiables et sécurisées sur lesquelles les vétérinaires peuvent compter.",
  },
  {
    icon: <Zap />,
    title: "Excellence",
    description:
      "Nous visons l'excellence dans tout ce que nous faisons, de la conception à l'assistance client.",
  },
];

export default function ValuesSection() {
  return (
    <CardsSectionLayout
      cards={cards}
      title={"Les valeurs d'InnoVetTech"}
      mdCols={2}
    />
  );
}
