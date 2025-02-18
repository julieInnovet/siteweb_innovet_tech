import React from "react";
import { NavLink } from "react-router-dom";
import {
  Bot,
  Clock,
  ChevronRight,
  Brain,
  FileText,
  Stethoscope,
  Database,
  MessageSquare,
  Share2,
  Sparkles,
  Lightbulb,
  Heart,
  Zap,
} from "lucide-react";

interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
}

const solutions: Solution[] = [
  {
    icon: <Bot className="h-8 w-8" />,
    title: "Agents IA – Assistants intelligents",
    description:
      "Offrez-vous des assistants IA dédiés à l'optimisation des tâches vétérinaires",
    features: [
      "Rédaction de rapports, de mails et de factures",
      "Gestion des publications sur les réseaux sociaux",
      "Aide au diagnostic",
    ],
    href: "/solutions#agents-ia",
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: "Plateforme collaborative",
    description:
      "Profitez d'une interface commune pour mutualiser les coûts et partager vos assistants IA personnalisés ainsi que des outils pensés pour répondre aux besoins communs des vétérinaires.",
    features: [
      "Partage d'assistants IA",
      "Mutualisation des coûts",
      "Outils collaboratifs",
    ],
    href: "/solutions#plateforme",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Digitalisation sur mesure & automatisation personnalisée",
    description:
      "Optimisez vos processus avec des applications dédiées et des automatisations adaptées à votre pratique. Vous gagnez en efficacité et en sérénité.",
    features: [
      "Applications sur mesure",
      "Automatisation des tâches",
      "Intégration fluide",
    ],
    href: "/solutions#digitalisation",
  },
];

const values = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation",
    description:
      "Nous plaçons la technologie au service des vétérinaires pour simplifier leur quotidien.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Accompagnement",
    description:
      "Un suivi personnalisé et des formations sur mesure pour intégrer chaque solution dans vos pratiques.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Productivité",
    description:
      "Nous vous fournissons les outils adaptés pour vous redonner du temps et améliorer votre rentabilité.",
  },
];

const benefits = [
  {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Diagnostic et traitement assistés",
    description:
      "En analysant rapidement des milliers de données médicales, l'IA détecte des signes parfois imperceptibles à l'œil humain. Elle suggère des diagnostics précis et des plans de traitement personnalisés.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Optimisation de la gestion",
    description:
      "L'IA facilite la gestion quotidienne : planification des rendez-vous, prévision des stocks et fournitures, facturation automatique.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Génération de contenu",
    description:
      "L'IA prend en charge la rédaction rapide de documents : recherches bibliographiques, comptes rendus, mails personnalisés, communication sur les réseaux sociaux.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Gestion des dossiers",
    description:
      "En plus de trier et d'organiser les dossiers médicaux, l'IA peut repérer des signaux d'alerte et mettre en évidence des épidémies locales.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-800 to-primary-400 text-white">
        <div
          className="absolute inset-0 bg-[url('/src/assets/images/revolution-pratique-veterinaire-innovettech.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"
          role="img"
          aria-label="Révolutionnez votre pratique vétérinaire avec l'IA - InnoVetTech"
        ></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Révolutionnez votre pratique vétérinaire avec l'IA
            </h1>
            <p className="text-lg text-primary-50 mb-8">
              InnoVetTech, la plateforme d'intelligence artificielle conçue par
              et pour les vétérinaires français, vous aide à gagner du temps, à
              améliorer vos soins et à booster votre rentabilité.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink
                to="/contact"
                className="rounded-full bg-white px-6 py-3 text-base font-semibold text-primary-400 shadow-soft hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center gap-2"
              >
                Contactez-nous <MessageSquare className="h-5 w-5" />
              </NavLink>
              <NavLink
                to="/contact"
                className="rounded-full bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-soft hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 flex items-center gap-2"
              >
                Demander une démo <ChevronRight className="h-5 w-5" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-700 sm:text-4xl">
              Bienvenue chez InnoVetTech
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nos solutions d'intelligence artificielle et nos outils innovants
              allègent vos tâches administratives pour vous permettre de vous
              concentrer sur l'essentiel : les soins aux animaux.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative bg-white p-8 shadow-soft rounded-2xl">
              <div className="absolute top-0 -translate-y-1/2 bg-primary-400 p-4 rounded-xl">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-secondary-700">
                Création de contenu
              </h3>
              <p className="mt-4 text-gray-600">
                Rédaction de comptes rendus, facturation, recherche
                documentaire, mails et bien plus encore.
              </p>
            </div>
            <div className="relative bg-white p-8 shadow-soft rounded-2xl">
              <div className="absolute top-0 -translate-y-1/2 bg-primary-400 p-4 rounded-xl">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-secondary-700">
                Automatisation des tâches
              </h3>
              <p className="mt-4 text-gray-600">
                Classement et envoi de dossiers médicaux, relances et gestion
                administrative simplifiée.
              </p>
            </div>
            <div className="relative bg-white p-8 shadow-soft rounded-2xl">
              <div className="absolute top-0 -translate-y-1/2 bg-primary-400 p-4 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-secondary-700">
                Optimisation du diagnostic
              </h3>
              <p className="mt-4 text-gray-600">
                Aide à l'identification des pathologies, analyse prédictive et
                gestion intelligente des données.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-700 sm:text-4xl">
              Nos solutions s'adaptent à vos besoins pour améliorer votre
              productivité
            </h2>
          </div>
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 lg:pt-8">
                  <div className="flex items-center gap-4 text-primary-400 mb-6">
                    {solution.icon}
                    <h3 className="text-2xl font-bold tracking-tight text-secondary-700">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">
                    {solution.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Stethoscope className="h-5 w-5 text-primary-400" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <NavLink
                    to={solution.href}
                    className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-500"
                  >
                    En savoir plus <ChevronRight className="h-5 w-5" />
                  </NavLink>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-8 lg:p-12 shadow-soft">
                  <div className="aspect-w-16 aspect-h-9 bg-[url('https://images.unsplash.com/photo-1576073719676-aa95576db207')] bg-cover bg-center rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-700 sm:text-4xl">
              Les valeurs d'InnoVetTech
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-neutral-50 p-8 rounded-2xl shadow-soft"
              >
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

      {/* Benefits Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-700 sm:text-4xl">
              Pourquoi opter pour l'intelligence artificielle quand on est
              vétérinaire ?
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              L'intelligence artificielle transforme déjà de nombreux secteurs,
              y compris la médecine vétérinaire. En automatisant les
              diagnostics, en optimisant la gestion des cliniques et en
              accélérant la production de contenus, l'IA permet aux vétérinaires
              de gagner en efficacité tout en maintenant un niveau de soins
              élevé.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-400 text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-700 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
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
            <NavLink
              to="/contact"
              className="rounded-full bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-soft hover:bg-primary-400 flex items-center gap-2"
            >
              Demander une démo <ChevronRight className="h-5 w-5" />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
