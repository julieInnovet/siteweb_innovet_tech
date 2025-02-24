import {
  Bot,
  Brain,
  Users,
  FileText,
  Share2,
  Database,
  Settings,
  Sparkles,
  Zap,
  BarChart,
} from "lucide-react";
import agents_ia from "../assets/images/agents_ia.jpeg";
import collaborative from "../assets/images/collaborative.jpeg";
import digital from "../assets/images/digital.jpeg";

export const solutions = [
  {
    id: "agents-ia",
    icon: <Bot />,
    title: "Agents IA – Assistants Intelligents",
    description:
      "Nos agents IA agissent comme de véritables collaborateurs numériques, allégeant vos tâches administratives et améliorant votre efficacité. Conçus pour le domaine vétérinaire, ils s'intègrent parfaitement à vos processus et répondent aux besoins uniques de votre cabinet ou clinique.",
    features: [
      {
        icon: <FileText />,
        title: "Rédaction automatisée et précise de documents",
        description:
          "Terminez en quelques minutes vos rapports médicaux, devis, factures ou courriers administratifs. Grâce à la compréhension de vos besoins, nos outils génèrent des contenus adaptés avec une précision professionnelle.",
      },
      {
        icon: <Share2 />,
        title: "Présence numérique facilitée",
        description:
          "Gérez vos réseaux sociaux et planifiez des publications informatives et engageantes pour vos clients, renforçant ainsi votre visibilité en ligne.",
      },
      {
        icon: <Brain />,
        title: "Aide au diagnostic",
        description:
          "En s'appuyant sur des bases de données vétérinaires actualisées, nos IA analysent les données patients et résultats d'examens, vous suggérant des pistes diagnostiques fiables et documentées.",
      },
    ],
    benefits: [
      "Gain de temps significatif : Libérez jusqu'à 2 heures par jour en déléguant les tâches répétitives",
      "Réduction des erreurs : Limitez les risques de facturation incorrecte ou de dossiers incomplets",
      "Expérience client enrichie : Offrez des réponses rapides, un suivi rigoureux et une meilleure disponibilité",
      "Outils personnalisables : Adaptez les fonctionnalités selon votre taille et vos besoins spécifiques",
    ],
    image: agents_ia,
  },
  {
    id: "collaborative",
    icon: <Users />,
    title: "Plateforme Collaborative – Mutualisez vos Ressources",
    description:
      "Notre plateforme collaborative représente une solution clé en main pour les vétérinaires souhaitant mutualiser leurs ressources et profiter des dernières avancées en intelligence artificielle.",
    features: [
      {
        icon: <Share2 />,
        title: "Outils partagés",
        description:
          "Réduisez vos coûts grâce à une interface commune regroupant agents IA personnalisés, outils d'analyse et fonctions de gestion.",
      },
      {
        icon: <Users />,
        title: "Collaboration renforcée",
        description:
          "Partagez des données entre cliniques, connectez vos équipes et facilitez la coordination, tout en respectant les normes de confidentialité.",
      },
      {
        icon: <BarChart />,
        title: "Évolutivité assurée",
        description:
          "Nos solutions s'adaptent à la croissance de votre structure et intègrent de nouvelles fonctionnalités au fur et à mesure de votre évolution.",
      },
    ],
    benefits: [
      "Réduction des coûts grâce à la mutualisation des dépenses technologiques",
      "Meilleure connectivité entre partenaires et collègues",
      "Accès aux innovations en temps réel",
      "Environnement numérique intégré et sécurisé",
    ],
    image: collaborative,
  },
  {
    id: "digitalisation",
    icon: <Sparkles />,
    title: "Digitalisation sur Mesure – Automatisation Personnalisée",
    description:
      "Chaque cabinet vétérinaire étant unique, nous proposons des solutions de digitalisation sur mesure pour automatiser vos processus, tout en tenant compte de vos particularités métier.",
    features: [
      {
        icon: <Settings />,
        title: "Adaptation à vos besoins spécifiques",
        description:
          "Des fonctionnalités pensées pour répondre précisément à vos contraintes, vos objectifs et votre organisation.",
      },
      {
        icon: <Zap />,
        title: "Création d'outils dédiés et évolutifs",
        description:
          "Applications et tableaux de bord personnalisés, intégration de nouveaux services ou sources de données au fil du temps.",
      },
      {
        icon: <Database />,
        title: "Centralisation et traçabilité des données",
        description:
          "Gestion globale et sécurisée de vos informations, conformité réglementaire simplifiée, préparation d'audits facilitée.",
      },
    ],
    benefits: [
      "Automatisations ciblées pour vos workflows spécifiques",
      "Applications dédiées répondant à vos besoins particuliers",
      "Simplification des audits et contrôles",
      "Formation et support expert pour une intégration réussie",
    ],
    image: digital,
  },
];
