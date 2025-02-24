import { Heart, Lightbulb, Shield, Zap } from "lucide-react";
import Card from "../layout/Card";

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
    <section>
      <div className="wrapper">
        <div className="title">
          <h2>Les valeurs d'InnoVetTech</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 pt-5">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
