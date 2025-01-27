import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Bot, 
  Check, 
  ChevronRight, 
  MessageSquare, 
  Brain, 
  Sparkles, 
  Users, 
  Shield, 
  Clock, 
  FileText,
  Settings,
  Database,
  Share2,
  Target,
  HelpCircle
} from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  description: string;
  icon: React.ReactNode;
  price: string;
  additionalPrice?: string;
  features: string[];
  cta: {
    text: string;
    link: string;
  };
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Bêta-testeurs des Agents IA",
    description: "Rejoignez notre programme bêta-testeurs et bénéficiez de 40 agents IA développés par des vétérinaires, pour des vétérinaires.",
    icon: <Bot className="h-8 w-8" />,
    price: "249 € HT",
    additionalPrice: "ASV - secrétaire : 99 € HT",
    features: [
      "Accès anticipé aux agents IA : plus de 40 modules spécialisés",
      "Support dédié et formation personnalisée",
      "Retour sur investissement rapide",
      "Participation à l'amélioration continue des solutions"
    ],
    cta: {
      text: "Devenir bêta-testeur",
      link: "/contact"
    }
  },
  {
    name: "Plateforme InnoVet Tech",
    description: "Accédez à tous les agents IA et participez à la co-construction de nouvelles automatisations intégrées à vos outils SaaS.",
    icon: <Brain className="h-8 w-8" />,
    price: "399 € HT",
    additionalPrice: "ASV - secrétaire : 150 € HT",
    features: [
      "Accès élargi à la bibliothèque complète d'agents IA",
      "Co-construction et personnalisation de la plateforme",
      "Mutualisation des coûts de développement",
      "MVP disponible : gestion RDV, rapports, ordonnances",
      "Infrastructure évolutive basée sur des solutions open source",
      "Suivi en temps réel des tâches administratives"
    ],
    cta: {
      text: "Demander une démo",
      link: "/contact"
    },
    highlighted: true
  },
  {
    name: "Digitalisation sur mesure",
    description: "Une solution technologique parfaitement alignée sur vos processus internes, garantissant un gain de temps optimal.",
    icon: <Sparkles className="h-8 w-8" />,
    price: "Sur devis",
    features: [
      "Agents IA personnalisés selon vos besoins",
      "Outils spécialisés selon votre pratique",
      "Application dédiée 100% sur mesure",
      "Intégration complète à vos processus existants",
      "Support et maintenance premium",
      "Formation approfondie de vos équipes"
    ],
    cta: {
      text: "Contactez-nous",
      link: "/contact"
    }
  }
];

const faqs = [
  {
    question: "Comment se passe l'installation ?",
    answer: "L'installation est simple et guidée. Notre équipe vous accompagne pas à pas dans la mise en place des solutions, avec une formation complète pour vous et votre équipe."
  },
  {
    question: "Y a-t-il un engagement ?",
    answer: "Nos formules sont sans engagement. Vous pouvez ajuster ou arrêter votre abonnement à tout moment, avec un préavis d'un mois."
  },
  {
    question: "Combien de temps dure la formation ?",
    answer: "La formation initiale dure environ 2 heures. Des sessions de perfectionnement sont ensuite proposées selon vos besoins."
  },
  {
    question: "Les mises à jour sont-elles incluses ?",
    answer: "Oui, toutes les mises à jour sont automatiquement incluses dans votre abonnement, sans frais supplémentaires."
  }
];

export default function Pricing() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-800 to-primary-400 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Nos Tarifs – Solutions IA et Digitalisation pour Vétérinaires
            </h1>
            <p className="text-lg text-primary-50">
              Découvrez nos formules adaptées à la pratique vétérinaire : de l'accès anticipé aux agents IA 
              jusqu'à la digitalisation sur mesure. Chez InnoVet Tech, nous mettons l'innovation au service 
              de la santé animale et de votre rentabilité.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative flex flex-col rounded-2xl ${
                  tier.highlighted
                    ? 'ring-2 ring-primary-400 shadow-lg'
                    : 'ring-1 ring-neutral-200'
                } p-8`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-primary-400 px-4 py-1 text-sm font-medium text-white">
                      Recommandé
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-4 text-primary-400">
                  {tier.icon}
                  <h2 className="text-2xl font-bold tracking-tight text-secondary-700">
                    {tier.name}
                  </h2>
                </div>
                <p className="mt-4 text-gray-600">
                  {tier.description}
                </p>
                <div className="mt-8">
                  <div className="flex items-baseline text-secondary-700">
                    <span className="text-4xl font-bold tracking-tight">
                      {tier.price}
                    </span>
                    {tier.price !== "Sur devis" && (
                      <span className="text-sm font-semibold">/mois/utilisateur</span>
                    )}
                  </div>
                  {tier.additionalPrice && (
                    <p className="mt-2 text-sm text-primary-400 font-medium">
                      {tier.additionalPrice} /mois/utilisateur
                    </p>
                  )}
                </div>
                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <NavLink
                  to={tier.cta.link}
                  className={`mt-8 block rounded-full px-6 py-3 text-center text-base font-semibold shadow-soft ${
                    tier.highlighted
                      ? 'bg-primary-400 text-white hover:bg-primary-500'
                      : 'bg-neutral-50 text-secondary-700 hover:bg-neutral-100'
                  }`}
                >
                  {tier.cta.text}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-700 sm:text-4xl">
              Pourquoi choisir InnoVet Tech ?
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Notre technologie s'adapte à votre pratique pour vous offrir une expérience 
              sur mesure et un retour sur investissement rapide.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Gain de temps significatif",
                description: "Automatisez vos tâches administratives et concentrez-vous sur les soins."
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Sécurité maximale",
                description: "Vos données sont protégées selon les plus hauts standards de sécurité."
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Support dédié",
                description: "Une équipe d'experts à votre écoute pour vous accompagner au quotidien."
              },
              {
                icon: <Settings className="h-6 w-6" />,
                title: "Personnalisation avancée",
                description: "Des solutions adaptées à votre pratique et à vos besoins spécifiques."
              },
              {
                icon: <Database className="h-6 w-6" />,
                title: "Infrastructure robuste",
                description: "Une plateforme stable et évolutive pour supporter votre croissance."
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: "ROI mesurable",
                description: "Des résultats concrets et quantifiables pour votre cabinet."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-400 text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-700 sm:text-4xl">
              Questions fréquentes
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <dl className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-neutral-50 p-8 rounded-2xl">
                  <dt className="flex items-start gap-3">
                    <HelpCircle className="h-6 w-6 text-primary-400 flex-shrink-0 mt-1" />
                    <span className="text-lg font-semibold text-secondary-700">
                      {faq.question}
                    </span>
                  </dt>
                  <dd className="mt-4 ml-9 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-400">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Vous avez des besoins spécifiques ?
            </h2>
            <p className="mt-4 text-lg text-primary-50">
              Nous développons vos solutions IA de A à Z.
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
              to="/solutions"
              className="rounded-full bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-soft hover:bg-primary-400 flex items-center gap-2"
            >
              Voir nos solutions <ChevronRight className="h-5 w-5" />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}