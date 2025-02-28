import { Clock, Database, Settings, Shield, Target, Users } from "lucide-react";
import CardsSectionLayout from "../layout/ValuesSectionLayout";

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
    <CardsSectionLayout
      cards={cards}
      title="Pourquoi choisir InnoVet Tech ?"
      description="Notre technologie s'adapte à votre pratique pour vous offrir une expérience sur mesure et un retour sur investissement rapide."
      mdCols={3}
    />
  );
}
