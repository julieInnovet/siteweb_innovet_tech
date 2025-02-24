import { Clock, Database, Settings, Shield, Target, Users } from "lucide-react";
import Card from "../layout/Card";

const cards = [
  {
    icon: <Clock />,
    title: "Gain de temps significatif",
    description:
      "Automatisez vos tâches administratives et concentrez-vous sur les soins.",
  },
  {
    icon: <Shield />,
    title: "Sécurité maximale",
    description:
      "Vos données sont protégées selon les plus hauts standards de sécurité.",
  },
  {
    icon: <Users />,
    title: "Support dédié",
    description:
      "Une équipe d'experts à votre écoute pour vous accompagner au quotidien.",
  },
  {
    icon: <Settings />,
    title: "Personnalisation avancée",
    description:
      "Des solutions adaptées à votre pratique et à vos besoins spécifiques.",
  },
  {
    icon: <Database />,
    title: "Infrastructure robuste",
    description:
      "Une plateforme stable et évolutive pour supporter votre croissance.",
  },
  {
    icon: <Target />,
    title: "ROI mesurable",
    description: "Des résultats concrets et quantifiables pour votre cabinet.",
  },
];

export default function FeaturesSection() {
  return (
    <section>
      <div className="wrapper">
        <div className="title">
          <h2>Pourquoi choisir InnoVet Tech ?</h2>
          <p>
            Notre technologie s'adapte à votre pratique pour vous offrir une
            expérience sur mesure et un retour sur investissement rapide.
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
