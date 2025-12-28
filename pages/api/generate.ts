import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  // Simulate AI-generated opportunities with realistic Ivorian market data
  const aiGeneratedOpportunities = [
    {
      title: "Digitalisation système comptable - Coopérative agricole",
      category: "developpement",
      description: "Coopérative de 500 producteurs de cacao cherche solution logicielle pour digitaliser gestion comptable, stocks, et paiements producteurs avec interface mobile.",
      location: "Soubré, Région du Bas-Sassandra",
      budget: "6,500,000 FCFA",
      timeline: "4 mois développement + formation",
      client: "Coopérative SCAD-Soubré",
      contact: "direction@scad-soubre.ci",
      requirements: [
        "Application web + mobile Android",
        "Gestion stocks cacao en temps réel",
        "Module paiement mobile money",
        "Rapport automatique pour certificateurs"
      ],
      potential: "Déploiement vers 50+ coopératives de la région + maintenance annuelle"
    },
    {
      title: "Cybersécurité et audit - Fintech émergente",
      category: "maintenance",
      description: "Startup fintech en forte croissance recherche expert cybersécurité pour audit complet infrastructure et mise en place protocoles sécurité conformes BCEAO.",
      location: "Abidjan, 2 Plateaux",
      budget: "8,000,000 FCFA",
      timeline: "Audit 1 mois + implémentation 2 mois",
      client: "MobiPay Solutions",
      contact: "cto@mobipay.ci",
      requirements: [
        "Audit sécurité complet",
        "Conformité réglementaire BCEAO",
        "Mise en place SIEM",
        "Formation équipe technique"
      ],
      potential: "Contrat sécurité annuel + conseil stratégique IT"
    },
    {
      title: "Équipement informatique complet - Centre médical",
      category: "achat",
      description: "Nouveau centre médical privé cherche équipement informatique complet: postes travail, serveur dossiers patients, imprimantes, système sauvegarde.",
      location: "Abidjan, Angré",
      budget: "16,000,000 FCFA",
      timeline: "Livraison et installation: 6 semaines",
      client: "Clinique Santé Plus",
      contact: "admin@santeplus.ci",
      requirements: [
        "15 postes informatiques médicaux",
        "Serveur sécurisé dossiers patients",
        "Système sauvegarde cloud",
        "Installation et formation personnel"
      ],
      potential: "Maintenance IT annuelle + développement logiciel gestion patients"
    },
    {
      title: "Application mobile agritech - Prix marchés",
      category: "developpement",
      description: "Projet ONG pour créer application informant agriculteurs sur prix marchés locaux en temps réel pour manioc, igname, banane plantain, légumes.",
      location: "Tout le territoire national",
      budget: "15,000,000 FCFA",
      timeline: "6 mois développement + pilote",
      client: "ONG AgriConnect Afrique",
      contact: "projects@agriconnect.org",
      requirements: [
        "Application Android simple",
        "SMS pour téléphones basiques",
        "Backend gestion prix par marché",
        "Interface collecte données"
      ],
      potential: "Phase 2 financée + expansion autres pays + maintenance long terme"
    },
    {
      title: "Infrastructure WiFi et réseau - Campus universitaire",
      category: "reseau",
      description: "Extension campus universitaire: installation réseau et WiFi dans 4 nouveaux bâtiments (12 salles de classe + 2 amphis + bibliothèque).",
      location: "Yamoussoukro",
      budget: "28,000,000 FCFA",
      timeline: "6 semaines installation",
      client: "Institut Supérieur de Technologie",
      contact: "infrastructure@ist-yop.ci",
      requirements: [
        "WiFi haute densité (500 utilisateurs simultanés)",
        "Fibre optique inter-bâtiments",
        "Points d'accès managés",
        "Système authentification centralisé"
      ],
      potential: "Maintenance réseau + projets futurs (datacenter, serveurs)"
    },
    {
      title: "Migration cloud et formation - Cabinet d'avocats",
      category: "maintenance",
      description: "Cabinet d'avocats souhaite migrer vers le cloud (Microsoft 365) avec formation équipe et sécurisation données clients confidentielles.",
      location: "Abidjan, Plateau",
      budget: "3,500,000 FCFA",
      timeline: "Migration 3 semaines",
      client: "Cabinet Koffi & Associés",
      contact: "it@koffi-avocats.ci",
      requirements: [
        "Migration 25 comptes Microsoft 365",
        "Configuration Teams et SharePoint",
        "Chiffrement données sensibles",
        "Formation complète utilisateurs"
      ],
      potential: "Support IT mensuel + gestion infrastructure cloud continue"
    },
    {
      title: "Ordinateurs reconditionnés - Lycée public",
      category: "achat",
      description: "Lycée public recherche 40 ordinateurs reconditionnés de qualité pour salle informatique avec budget limité ministère éducation.",
      location: "Man, Région Montagnes",
      budget: "4,000,000 FCFA",
      timeline: "Livraison avant rentrée (1 mois)",
      client: "Lycée Moderne de Man",
      contact: "proviseur.lyceeman@education.gouv.ci",
      requirements: [
        "40 ordinateurs reconditionnés garantis",
        "Configuration: i3, 4GB RAM minimum",
        "Windows 10 + suite bureautique",
        "Installation réseau local"
      ],
      potential: "Maintenance semestrielle + fourniture autres établissements district"
    },
    {
      title: "Plateforme marketplace produits locaux",
      category: "developpement",
      description: "Entrepreneur cherche développeur pour créer marketplace connectant artisans ivoiriens et acheteurs avec paiement mobile et livraison intégrée.",
      location: "Abidjan (base) - National",
      budget: "18,000,000 FCFA",
      timeline: "8 mois MVP + lancement",
      client: "Startup IvoireMarket",
      contact: "founder@ivoiremarket.ci",
      requirements: [
        "Plateforme web responsive",
        "Application mobile acheteurs",
        "Interface vendeurs simplifiée",
        "Intégration paiement mobile + suivi livraison"
      ],
      potential: "Equity participation + développement fonctionnalités + scaling"
    }
  ]

  // Randomly select 6-8 opportunities to simulate AI generation
  const numberOfResults = Math.floor(Math.random() * 3) + 6 // 6-8 results
  const shuffled = aiGeneratedOpportunities.sort(() => 0.5 - Math.random())
  const selected = shuffled.slice(0, numberOfResults)

  res.status(200).json({ opportunities: selected })
}
