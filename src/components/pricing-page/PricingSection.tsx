import { Bot, Brain, Sparkles, Stethoscope } from "lucide-react";
import { NavLink } from "react-router-dom";

const cards = [
  {
    name: "Bêta-testeurs",
    description:
      "Rejoignez notre programme bêta-testeurs et bénéficiez de 40 agents IA développés par des vétérinaires, pour des vétérinaires.",
    icon: <Bot />,
    price: "249 €",
    monthly: true,
    additionalPrice: "ASV - secrétaire : 99 € HT",
    features: [
      "Accès anticipé aux agents IA : plus de 40 modules spécialisés",
      "Support dédié et formation personnalisée",
      "Retour sur investissement rapide",
      "Participation à l'amélioration continue des solutions",
    ],
    cta: "Devenir bêta-testeur",
  },
  {
    name: "Classique",
    description:
      "Accédez à tous les agents IA et participez à la co-construction de nouvelles automatisations intégrées à vos outils SaaS.",
    icon: <Brain />,
    price: "399 €",
    monthly: true,
    additionalPrice: "ASV - secrétaire : 150 € HT",
    features: [
      "Accès élargi à la bibliothèque complète d'agents IA",
      "Co-construction et personnalisation de la plateforme",
      "Mutualisation des coûts de développement",
      "MVP disponible : gestion RDV, rapports, ordonnances",
      "Infrastructure évolutive basée sur des solutions open source",
      "Suivi en temps réel des tâches administratives",
    ],
    cta: "Demander une démo",
    highlighted: true,
  },
  {
    name: "Sur mesure",
    description:
      "Une solution technologique parfaitement alignée sur vos processus internes, garantissant un gain de temps optimal.",
    icon: <Sparkles />,
    price: "Sur devis",
    features: [
      "Agents IA personnalisés selon vos besoins",
      "Outils spécialisés selon votre pratique",
      "Application dédiée 100% sur mesure",
      "Intégration complète à vos processus existants",
      "Support et maintenance premium",
      "Formation approfondie de vos équipes",
    ],
    cta: "Contactez-nous",
  },
];

export default function PricingSection() {
  return (
    <section>
      <div className="wrapper">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {cards.map((card) => (
            <div
              className={
                "pricing-card" + (card.highlighted ? " highlighted" : "")
              }
            >
              {card.highlighted && (
                <div className="highlight">
                  <span>Recommandé</span>
                </div>
              )}
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              <div className="price">
                <span>{card.price}</span>
                {card.monthly && <span>HT/mois</span>}
              </div>
              <NavLink
                to="/contact"
                className={"cta" + (card.highlighted ? "" : " light")}
              >
                {card.cta}
              </NavLink>
              <ul role="list">
                {card.features.map((feature) => (
                  <li>
                    <Stethoscope />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
