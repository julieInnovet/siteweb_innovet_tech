import { Heart, Lightbulb, Zap } from "lucide-react";
import CardsSectionLayout from "../layout/ValuesSectionLayout";

const cards = [
  {
    icon: <Lightbulb />,
    title: "Innovation",
    description:
      "Nous plaçons la technologie au service des vétérinaires pour simplifier leur quotidien.",
  },
  {
    icon: <Heart />,
    title: "Accompagnements",
    description:
      "Un suivi personnalisé et des formations sur mesure pour intégrer chaque solution dans vos pratiques.",
  },
  {
    icon: <Zap />,
    title: "Productivité",
    description:
      "Nous vous fournissons les outils adaptés pour vous redonner du temps et améliorer votre rentabilité.",
  },
];

export default function ValuesSection() {
  return (
    <CardsSectionLayout
      cards={cards}
      title={"Les valeurs d'InnoVetTech"}
      mdCols={3}
    />
  );
}
