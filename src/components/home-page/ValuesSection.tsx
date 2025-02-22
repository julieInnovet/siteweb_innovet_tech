import { Heart, Lightbulb, Zap } from "lucide-react";
import Card from "../layout/Card";

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
    <section>
      <div className="wrapper">
        <div className="title">
          <h2>Les valeurs d'InnoVetTech</h2>
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
