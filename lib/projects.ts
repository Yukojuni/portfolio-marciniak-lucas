export interface Project {
  id: string
  title: string
  image: string
  visual: string
  description: string
  longDescription: string
  context: string
  stack: string[]
  impact: string
  challenges: string[]
  solutions: string[]
  learnings: string[]
  demo?: string
  images?: string[]
}

export const projects: Project[] = [
  {
    "id": "prism-portfolio",
    "title": "Prism Portfolio",
    "image": "/images/prism-portfolio/prism.png",
    "visual": "/images/prism-portfolio/prism-visual.png",
    "description": "Analyse de données financières d’ETF pour construire des stratégies d’investissement adaptées au profil de risque via une application interactive.",
    "longDescription": "Prism est un projet de data analysis appliqué à la gestion de patrimoine. Il simule une collaboration avec un cabinet de Conseil en Gestion de Patrimoine (CGP) souhaitant accompagner ses clients dans leurs décisions d’investissement à partir de données historiques d’ETF. L’objectif n’est pas de prédire les marchés, mais de construire une approche rationnelle, structurée et pédagogique de l’investissement, en tenant compte du risque, de la diversification et de l’horizon de placement.",
    "context": "Projet académique simulant une mission d'analyse financière.",
    "stack": ["Python", "Streamlit", "Parquet", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Altair"],
    "impact": "Mise en place d’un outil d’aide à la décision permettant de comparer les ETF, d’évaluer le risque et de proposer des allocations cohérentes selon différents profils investisseurs.",
    "challenges": [
      "Nettoyer et structurer des données financières hétérogènes issues de plusieurs sources",
      "Rendre compréhensible des notions complexes (volatilité, corrélation, rendement) pour un utilisateur non expert",
      "Concevoir une interface interactive claire et pédagogique avec Streamlit"
    ],
    "solutions": [
      "Utilisation du format Parquet pour optimiser le stockage et les performances de traitement",
      "Création d’indicateurs clés (rendement, volatilité, performance cumulée) avec Pandas et NumPy",
      "Développement d’une application Streamlit avec visualisations interactives (Altair, Matplotlib, Seaborn)"
    ],
    "learnings": [
      "Comprendre les enjeux de la gestion de patrimoine et l’importance du profil investisseur",
      "Manipuler et analyser des données financières réelles à grande échelle",
      "Concevoir une application data interactive orientée utilisateur",
      "Traduire des analyses quantitatives en recommandations claires et exploitables"
    ],
    "demo": "https://github.com/CalvoTom/Prisme.git"
  },
  {
    "id": "stellar-formation",
    "title": "Stellar",
    "image": "/images/stellar-formation/stellar.png",
    "visual": "/images/stellar-formation/stellar-visual.png",
    "description": "Plateforme interactive pour apprendre le machine learning de manière ludique à travers des missions et du code en direct.",
    "longDescription": "Stellar est un projet pédagogique immersif où l’on apprend le machine learning en explorant un univers spatial. Accompagné de Nova et Orion, l’utilisateur avance à travers des défis, des quiz et un éditeur de code intégré pour tester ses idées en temps réel. L’objectif : rendre des concepts complexes accessibles, concrets et surtout engageants.",
    "context": "Projet académique sur 1 an avec pilotage d’une équipe de 10 personnes.",
    "stack": ["Python", "Machine Learning", "UI/UX", "HTML", "CSS", "JavaScript"],
    "impact": "Une expérience d’apprentissage fun et interactive qui rend le machine learning plus accessible.",
    "challenges": [
        "Coordonner et piloter une équipe de 10 personnes sur un projet long avec des profils techniques variés",
        "Concevoir une expérience pédagogique engageante combinant narration, interactivité et contenu technique",
        "Rendre accessibles des concepts complexes de machine learning à travers une approche ludique",
        "Maintenir une cohérence produit entre contenu éducatif, design et fonctionnalités techniques"
      ],
    "solutions": [
      "Mise en place d’une organisation de projet structurée (répartition des rôles, suivi, itérations)",
      "Utilisation de la gamification (missions, personnages, progression) pour renforcer l’engagement utilisateur",
      "Intégration d’un éditeur de code interactif pour apprendre par la pratique",
      "Collaboration étroite entre design, contenu pédagogique et développement pour assurer la cohérence globale"
    ],
    "learnings": [
      "Leadership et gestion d’équipe sur un projet complexe et long terme",
      "Conception d’expériences pédagogiques interactives (learning by doing)",
      "Vulgarisation de concepts techniques avancés en machine learning",
      "Importance de la collaboration multidisciplinaire (tech, design, contenu)",
      "Gestion de projet agile et itérative en environnement académique"
    ],
    "demo": "https://stellarformationml.netlify.app"
  },
  {
    "id": "orasi-website",
    "title": "Orasi",
    "image": "/images/orasi-website/orasi.png",
    "visual": "/images/orasi-website/orasi-visual.png",
    "description": "Refonte complète du site de l'association étudiante ORASI, optimisée pour la lecture, la navigation et la gestion de contenu.",
    "longDescription": "Ce projet a été réalisé dans le cadre d'un stage de 2 mois. L'objectif était de moderniser et restructurer le site orasi.fr afin de faciliter la navigation, améliorer l'expérience utilisateur et optimiser la gestion des articles, interviews et événements publiés par l'association. La refonte a porté sur l'UX/UI, l'architecture du contenu, la performance du site et les outils d'administration pour les contributeurs.",
    "context": "Stage académique au sein de l'association ORASI",
    "stack": ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    "impact": "Amélioration significative de l'expérience utilisateur et simplification de la gestion des contenus pour les contributeurs",
    "challenges": [
      "Refondre complètement le design tout en conservant la structure existante",
      "Optimiser la navigation pour différents types de contenus (articles, interviews, événements)",
      "Assurer la compatibilité et la performance sur tous les appareils"
    ],
    "solutions": [
      "Re-design UI/UX moderne et responsive",
      "Restructuration de l'architecture du contenu",
      "Optimisation des performances et mise en place d'un système d'administration efficace"
    ],
    "learnings": [
      "Comprendre les besoins des utilisateurs finaux avant de développer",
      "Importance de l'UX et de la hiérarchie de l'information pour un site éditorial",
      "Gestion d'un projet complet de refonte web en autonomie"
    ],
    "demo": "https://orasi.fr"
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id)
}
