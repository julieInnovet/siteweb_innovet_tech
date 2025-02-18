import { NavLink } from "react-router-dom";
import {
  Target,
  Shield,
  Award,
  Lightbulb,
  Heart,
  Zap,
  MessageSquare,
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string[];
  imageUrl: string;
  contributions?: string[];
}

const team: TeamMember[] = [
  {
    name: "Julie Samama",
    role: "Fondatrice & Vétérinaire Spécialiste Équine",
    description: [
      "InnoVetTech est né de la vision de Julie Samama, vétérinaire équine diplômée de l'Université de Liège (2011). Dès ses débuts, Julie explore différents modes d'organisation dans des structures prestigieuses (CHVE du Livet, CIRALE), où elle réalise l'importance cruciale du travail d'équipe.",
      "Par la suite, deux années passées auprès d'un vétérinaire itinérant lui révèlent les défis spécifiques de la pratique en solo, notamment la gestion du temps et des tâches administratives. En 2019, installée à son compte, Julie constate l'ampleur de la surcharge administrative pesant sur les vétérinaires. Elle lance alors un service de secrétariat dédié basé sur l'audio, facilitant la rédaction de comptes rendus et l'encodage de factures.",
      "Consciente de la révolution numérique en cours, elle décide d'intégrer l'intelligence artificielle (IA) dans ses solutions. Ainsi naît InnoVetTech, avec pour mission de simplifier le quotidien des vétérinaires en proposant des assistants IA sur mesure, allégeant les tâches récurrentes pour que chacun puisse se consacrer pleinement aux soins et au bien-être animal.",
    ],
    imageUrl: "/src/assets/images/julie-samama-fondatrice-innovet-tech.jpeg",
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
    imageUrl:
      "/src/assets/images/yannick-audubert-directeur-projets-numeriques-innovet-tech.jpeg",
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
    imageUrl: "/src/assets/images/adeline-ayache-formatrice-innovet-tech.jpeg",
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
    imageUrl:
      "/src/assets/images/dhouha-selmi-responsable-elaboration-ia-innovet-tech.png",
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
    imageUrl:
      "/src/assets/images/mustapha-sahli-ingenieur-ia-developpeur-full-stack.jpg",
  },
  {
    name: "Chaima Chakroun",
    role: "Graphiste & Développeuse Web",
    description: [
      "Chaima apporte à l'équipe son sens aigu de l'esthétique et de l'ergonomie digitale. Formée au multimédia et à l'informatique de gestion, elle maîtrise aussi bien la conception d'identités visuelles que le développement web (HTML, CSS, JavaScript, React, etc.). Son approche allie design moderne et performance technique, pour offrir aux vétérinaires une plateforme intuitive et résolument orientée utilisateur.",
    ],
    contributions: [
      "Créer et améliorer l'interface visuelle de la plateforme, en veillant à la fluidité de la navigation et à la cohérence graphique",
      "Développer des fonctionnalités innovantes, depuis la phase de prototypage jusqu'à l'intégration finale, tout en prenant en compte l'optimisation SEO",
      "Travailler en étroite collaboration avec les autres pôles (IA, gestion, formation) pour livrer des solutions répondant aux exigences réelles de la pratique vétérinaire",
    ],
    imageUrl:
      "/src/assets/images/chaima-chakroun-graphiste-developpeuse-web-innovet-tech.jpeg",
  },
];

const values = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation",
    description:
      "Nous repoussons constamment les limites de l'innovation pour créer des solutions qui transforment la médecine vétérinaire.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Passion",
    description:
      "Notre passion pour la santé animale guide chacune de nos décisions et alimente notre désir d'excellence.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Fiabilité",
    description:
      "Nous nous engageons à fournir des solutions fiables et sécurisées sur lesquelles les vétérinaires peuvent compter.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Excellence",
    description:
      "Nous visons l'excellence dans tout ce que nous faisons, de la conception à l'assistance client.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-800 to-primary-400 text-white">
        <div className="absolute inset-0 bg-[url('/src/assets/images/heros_section_a_propos.png')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Découvrez qui sont les héros de notre équipe !
            </h1>
            <p className="text-lg text-blue-100">
              Une équipe passionnée qui révolutionne la pratique vétérinaire
              grâce à l'intelligence artificielle et l'innovation numérique.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {team.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-soft ${
                      index === 0 ? "lg:sticky lg:top-24" : ""
                    }`}
                  >
                    <img
                      src={member.imageUrl}
                      alt={`Portrait de ${
                        member.name
                      }, ${member.role.toLowerCase()} chez InnoVet Tech`}
                      title={`${member.name}, ${member.role} - InnoVet Tech`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-1 lg:py-8">
                  <h2 className="text-2xl font-bold text-secondary-700 mb-2">
                    {member.name}
                  </h2>
                  <p className="text-primary-400 font-medium text-lg mb-6">
                    {member.role}
                  </p>
                  <div className="space-y-4">
                    {member.description.map((paragraph, idx) => (
                      <p key={idx} className="text-gray-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {member.contributions && (
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-secondary-700 mb-4">
                        Missions principales
                      </h3>
                      <ul className="space-y-3">
                        {member.contributions.map((contribution, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Target className="h-5 w-5 text-primary-400 flex-shrink-0 mt-1" />
                            <span className="text-gray-600">
                              {contribution}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-700 sm:text-4xl">
              Les valeurs d'InnoVetTech
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-400 text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-700 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-700 mb-6">
                Notre vision
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  En plaçant l'innovation et l'humain au cœur de chaque projet,
                  nous souhaitons créer un futur où chaque praticien dispose de
                  solutions performantes pour exercer sereinement et avec un
                  impact maximal.
                </p>
                <ul className="space-y-4">
                  {[
                    "Réinventer la pratique avec des solutions numériques sur mesure",
                    "Décupler l'efficacité des processus et améliorer la qualité des soins",
                    "Renforcer la satisfaction client grâce à des outils accessibles et inclusifs",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-primary-400" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-700 mb-6">
                Notre objectif
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Notre priorité est que chaque vétérinaire puisse se consacrer
                  pleinement aux soins et au bien-être animal.
                </p>
                <ul className="space-y-4">
                  {[
                    "Simplifier la gestion administrative",
                    "Optimiser la prise en charge des patients grâce à l'IA",
                    "Réduire la charge mentale des vétérinaires",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary-400" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-400">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à transformer votre pratique ?
            </h2>
            <p className="mt-4 text-lg text-primary-50">
              Découvrez comment nos solutions peuvent révolutionner votre
              quotidien.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <NavLink
              to="/contact"
              className="rounded-full bg-white px-6 py-3 text-base font-semibold text-primary-400 shadow-soft hover:bg-primary-50 flex items-center gap-2"
            >
              Contactez-nous <MessageSquare className="h-5 w-5" />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
