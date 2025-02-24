import julie from "../../assets/images/julie-samama-fondatrice-innovet-tech.jpeg";
import yannick from "../../assets/images/yannick-audubert-directeur-projets-numeriques-innovet-tech.jpeg";
import adeline from "../../assets/images/adeline-ayache-formatrice-innovet-tech.jpeg";
import dhouha from "../../assets/images/dhouha-selmi-responsable-elaboration-ia-innovet-tech.png";
import mustapha from "../../assets/images/mustapha-sahli-ingenieur-ia-developpeur-full-stack.jpg";
import { Stethoscope } from "lucide-react";

const team = [
  {
    name: "Julie Samama",
    role: "Fondatrice & Vétérinaire Spécialiste Équine",
    description: [
      "InnoVetTech est né de la vision de Julie Samama, vétérinaire équine diplômée de l'Université de Liège (2011). Dès ses débuts, Julie explore différents modes d'organisation dans des structures prestigieuses (CHVE du Livet, CIRALE), où elle réalise l'importance cruciale du travail d'équipe.",
      "Par la suite, deux années passées auprès d'un vétérinaire itinérant lui révèlent les défis spécifiques de la pratique en solo, notamment la gestion du temps et des tâches administratives. En 2019, installée à son compte, Julie constate l'ampleur de la surcharge administrative pesant sur les vétérinaires. Elle lance alors un service de secrétariat dédié basé sur l'audio, facilitant la rédaction de comptes rendus et l'encodage de factures.",
      "Consciente de la révolution numérique en cours, elle décide d'intégrer l'intelligence artificielle (IA) dans ses solutions. Ainsi naît InnoVetTech, avec pour mission de simplifier le quotidien des vétérinaires en proposant des assistants IA sur mesure, allégeant les tâches récurrentes pour que chacun puisse se consacrer pleinement aux soins et au bien-être animal.",
    ],
    image: julie,
  },
  {
    name: "Yannick Audubert",
    role: "Directeur de Projets Numériques",
    description: [
      "Avec un parcours atypique alliant le métier de maréchal-ferrant et plus de dix ans dans l'innovation numérique, Yannick Audubert apporte une vision pragmatique au service des professionnels de la santé animale. Ses compétences en gestion de projets, intelligence artificielle et optimisation des processus numériques lui permettent d'orchestrer toutes les étapes de conception et d'intégration des assistants IA chez InnoVetTech.",
    ],
    contributions: [
      "Superviser le développement des solutions IA, en les adaptant aux besoins concrets des vétérinaires",
      "Garantir une intégration fluide pour améliorer diagnostics, processus administratifs et communication client",
    ],
    image: yannick,
  },
  {
    name: "Adeline Ayache",
    role: "Formatrice et Assistante de Gestion",
    description: [
      "Adeline Ayache joue un rôle clé chez InnoVetTech en tant que formatrice et assistante de gestion. Forte d'une expérience en formation professionnelle, elle crée des programmes pédagogiques dédiés aux vétérinaires, favorisant une adoption rapide et efficace des outils numériques et de l'IA. Parallèlement, elle assure la fluidité des opérations internes de l'entreprise.",
    ],
    contributions: [
      "Concevoir et animer des formations personnalisées sur les technologies IA",
      "Optimiser les processus administratifs (suivi, relation client, organisation)",
      "Accompagner la transition numérique des vétérinaires grâce à des méthodes interactives",
    ],
    image: adeline,
  },
  {
    name: "Dhouha Selmi",
    role: "Responsable de l'Élaboration des Intelligences Artificielles",
    description: [
      "Ingénieure en informatique et data scientist, Dhouha Selmi pilote la conception et le perfectionnement des solutions d'IA d'InnoVetTech. Spécialisée en machine learning, en traitement du langage naturel (NLP) et en analyse d'images, elle a déjà conçu des chatbots et des systèmes de reconnaissance vocale performants.",
    ],
    contributions: [
      "Concevoir des IA sur mesure adaptées aux cabinets vétérinaires",
      "Développer des algorithmes avancés pour améliorer diagnostics et analyse de données cliniques",
      "Créer des outils intuitifs répondant précisément aux besoins quotidiens des professionnels",
    ],
    image: dhouha,
  },
  {
    name: "Mustapha Sahli",
    role: "Ingénieur en Intelligence Artificielle & Développeur Full Stack",
    description: [
      "Mustapha Sahli est un ingénieur IA et développeur full stack passionné par l'innovation. Son expérience chez InstaDeep, Imaginario AI et Elyadata l'a amené à contribuer à des projets de machine learning, de monitoring de données en temps réel et d'automatisation de systèmes complexes.",
    ],
    contributions: [
      "Concevoir des solutions intelligentes pour automatiser les tâches répétitives des vétérinaires",
      "Garantir la stabilité, la sécurité et l'efficacité des outils numériques",
      "Permettre aux praticiens de se concentrer sur l'essentiel : les soins aux animaux",
    ],
    image: mustapha,
  },
];

export default function TeamSection() {
  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col gap-8 lg:gap-20">
          {team.map((member) => (
            <article key={member.name} className="team-member">
              <div className="team-member-content">
                <div className="space-y-4">
                  <h2>{member.name}</h2>
                  <h3 className="role">{member.role}</h3>
                  {member.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {member.contributions && (
                  <div className="space-y-4">
                    <h3>Missions principales</h3>
                    <ul>
                      {member.contributions.map((contribution) => (
                        <li key={contribution}>
                          <Stethoscope />
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <img src={member.image} alt={member.name} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
