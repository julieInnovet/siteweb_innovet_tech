import { Bot, Share2, Sparkles, Stethoscope } from "lucide-react";
import agents_ia from "../../assets/images/agents_ia.png";
import collaborative from "../../assets/images/collaborative.jpeg";
import digital from "../../assets/images/digital.jpeg";

const solutions = [
  {
    icon: <Bot />,
    title: "Agents IA – Assistants intelligents",
    description:
      "Offrez-vous des assistants IA dédiés à l'optimisation des tâches vétérinaires.",
    features: [
      "Rédaction de rapports, de mails et de factures",
      "Gestion des publications sur les réseaux sociaux",
      "Aide au diagnostic",
    ],
    image: agents_ia,
  },
  {
    icon: <Share2 />,
    title: "Plateforme Collaborative",
    description:
      "Profitez d'une interface commune pour mutualiser les coûts et partager vos assistants IA personnalisés ainsi que des outils pensés pour répondre aux besoins communs des vétérinaires.",
    features: [
      "Partage d'assistants IA",
      "Mutualisation des coûts",
      "Outils collaboratifs",
    ],
    image: collaborative,
  },
  {
    icon: <Sparkles />,
    title: "Digitalisation sur Mesure & Automatisation Personnalisée",
    description:
      "Optimisez vos processus avec des applications dédiées et des automatisations adaptées à votre pratique. Vous gagnez en efficacité et en sérénité.",
    features: [
      "Applications sur mesure",
      "Automatisation des tâches",
      "Intégration fluide",
    ],
    image: digital,
  },
];

export default function SolutionsSection() {
  return (
    <section>
      <div className="wrapper">
        <div className="title">
          <h2>
            Nos solutions s'adaptent à vos besoins pour améliorer votre
            productivité
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:gap-20">
          {solutions.map((solution) => (
            <div key={solution.title} className="solution">
              <div className="solution-content">
                <div className="solution-title">
                  {solution.icon}
                  <h3>{solution.title}</h3>
                </div>
                <p>{solution.description}</p>
                <ul>
                  {solution.features.map((feature) => (
                    <li key={feature}>
                      <Stethoscope />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <img src={solution.image} alt={solution.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
