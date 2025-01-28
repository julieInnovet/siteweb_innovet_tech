import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Bot, 
  LineChart, 
  Clock, 
  Shield, 
  Brain, 
  Stethoscope, 
  ChevronRight, 
  Users, 
  Calendar,
  FileText,
  Share2,
  MessageSquare,
  CheckCircle,
  Database,
  Settings,
  Sparkles,
  Zap,
  BarChart
} from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Solution {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: Feature[];
  benefits: string[];
  imageUrl: string;
}

const solutions: Solution[] = [
  {
    id: "agents-ia",
    icon: <Bot className="h-8 w-8" />,
    title: "Agents IA – Vos assistants intelligents personnalisés",
    description: "Nos agents IA agissent comme de véritables collaborateurs numériques, allégeant vos tâches administratives et améliorant votre efficacité. Conçus pour le domaine vétérinaire, ils s'intègrent parfaitement à vos processus et répondent aux besoins uniques de votre cabinet ou clinique.",
    features: [
      {
        icon: <FileText className="h-6 w-6" />,
        title: "Rédaction automatisée et précise de documents",
        description: "Terminez en quelques minutes vos rapports médicaux, devis, factures ou courriers administratifs. Grâce à la compréhension de vos besoins, nos outils génèrent des contenus adaptés avec une précision professionnelle."
      },
      {
        icon: <Share2 className="h-6 w-6" />,
        title: "Présence numérique facilitée",
        description: "Gérez vos réseaux sociaux et planifiez des publications informatives et engageantes pour vos clients, renforçant ainsi votre visibilité en ligne."
      },
      {
        icon: <Brain className="h-6 w-6" />,
        title: "Aide au diagnostic",
        description: "En s'appuyant sur des bases de données vétérinaires actualisées, nos IA analysent les données patients et résultats d'examens, vous suggérant des pistes diagnostiques fiables et documentées."
      }
    ],
    benefits: [
      "Gain de temps significatif : Libérez jusqu'à 2 heures par jour en déléguant les tâches répétitives",
      "Réduction des erreurs : Limitez les risques de facturation incorrecte ou de dossiers incomplets",
      "Expérience client enrichie : Offrez des réponses rapides, un suivi rigoureux et une meilleure disponibilité",
      "Outils personnalisables : Adaptez les fonctionnalités selon votre taille et vos besoins spécifiques"
    ],
    imageUrl: "/src/assets/images/agents_ia.png"
  },
  {
    id: "plateforme",
    icon: <Users className="h-8 w-8" />,
    title: "Plateforme collaborative – Mutualisez vos ressources",
    description: "Notre plateforme collaborative représente une solution clé en main pour les vétérinaires souhaitant mutualiser leurs ressources et profiter des dernières avancées en intelligence artificielle.",
    features: [
      {
        icon: <Share2 className="h-6 w-6" />,
        title: "Outils partagés",
        description: "Réduisez vos coûts grâce à une interface commune regroupant agents IA personnalisés, outils d'analyse et fonctions de gestion."
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Collaboration renforcée",
        description: "Partagez des données entre cliniques, connectez vos équipes et facilitez la coordination, tout en respectant les normes de confidentialité."
      },
      {
        icon: <BarChart className="h-6 w-6" />,
        title: "Évolutivité assurée",
        description: "Nos solutions s'adaptent à la croissance de votre structure et intègrent de nouvelles fonctionnalités au fur et à mesure de votre évolution."
      }
    ],
    benefits: [
      "Réduction des coûts grâce à la mutualisation des dépenses technologiques",
      "Meilleure connectivité entre partenaires et collègues",
      "Accès aux innovations en temps réel",
      "Environnement numérique intégré et sécurisé"
    ],
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
  },
  {
    id: "digitalisation",
    icon: <Sparkles className="h-8 w-8" />,
    title: "Digitalisation sur mesure – Automatisation adaptée à vos besoins",
    description: "Chaque cabinet vétérinaire étant unique, nous proposons des solutions de digitalisation sur mesure pour automatiser vos processus, tout en tenant compte de vos particularités métier.",
    features: [
      {
        icon: <Settings className="h-6 w-6" />,
        title: "Adaptation à vos besoins spécifiques",
        description: "Des fonctionnalités pensées pour répondre précisément à vos contraintes, vos objectifs et votre organisation."
      },
      {
        icon: <Zap className="h-6 w-6" />,
        title: "Création d'outils dédiés et évolutifs",
        description: "Applications et tableaux de bord personnalisés, intégration de nouveaux services ou sources de données au fil du temps."
      },
      {
        icon: <Database className="h-6 w-6" />,
        title: "Centralisation et traçabilité des données",
        description: "Gestion globale et sécurisée de vos informations, conformité réglementaire simplifiée, préparation d'audits facilitée."
      }
    ],
    benefits: [
      "Automatisations ciblées pour vos workflows spécifiques",
      "Applications dédiées répondant à vos besoins particuliers",
      "Simplification des audits et contrôles",
      "Formation et support expert pour une intégration réussie"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  }
];

export default function Solutions() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-800 to-primary-400 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584986475400-2d6d6d3de3f1')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Nos solutions innovantes pour transformer votre quotidien
            </h1>
            <p className="text-lg text-primary-50">
              Chez InnoVetTech, nous plaçons l'innovation technologique au service des vétérinaires. 
              Nous vous aidons ainsi à assurer le bien-être des animaux tout en optimisant votre 
              gestion quotidienne.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-lg text-gray-600">
              Nos solutions se déclinent en trois piliers principaux, conçus pour simplifier, 
              accélérer et renforcer chaque aspect de votre activité.
            </p>
          </div>
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <div key={solution.id} id={solution.id} className="scroll-mt-20">
                <div className={`flex flex-col lg:flex-row gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-primary-400 mb-6">
                      {solution.icon}
                      <h2 className="text-2xl font-bold tracking-tight text-secondary-700">
                        {solution.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-12">
                      {solution.description}
                    </p>
                    <div className="space-y-12">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-6">
                          <div className="flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-400 text-white">
                              {feature.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-secondary-700 mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-gray-600">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-12">
                      <h3 className="text-lg font-semibold text-secondary-700 mb-6">
                        Les avantages
                      </h3>
                      <ul className="space-y-4">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary-400 flex-shrink-0 mt-1" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="sticky top-24">
                      <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-soft">
                        <img
                          src={solution.imageUrl}
                          alt={solution.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
              Envie de découvrir quelle solution vous convient ?
            </h2>
            <p className="mt-4 text-lg text-primary-50">
              Prenez contact avec notre équipe pour un diagnostic gratuit de vos besoins et une 
              présentation personnalisée de nos solutions.
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