import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { category, region, budget } = req.body

  // Simulate searching based on filters
  const allOpportunities = [
    {
      title: "Fourniture de 50 ordinateurs pour école primaire",
      category: "achat",
      description: "Une école primaire à Abidjan recherche 50 ordinateurs de bureau pour équiper sa nouvelle salle informatique. Besoin d'ordinateurs neufs avec garantie.",
      location: "Abidjan, Plateau",
      budget: "12,000,000 FCFA",
      timeline: "Livraison souhaitée dans 2 mois",
      client: "École Primaire Les Palmiers",
      contact: "direction@palmiers-ecole.ci",
      requirements: [
        "Ordinateurs neufs avec Windows 11",
        "Configuration minimum: i5, 8GB RAM, 256GB SSD",
        "Garantie 2 ans minimum",
        "Formation du personnel incluse"
      ],
      potential: "Contrat récurrent possible pour maintenance annuelle"
    },
    {
      title: "Maintenance informatique mensuelle - PME",
      category: "maintenance",
      description: "Entreprise de logistique cherche prestataire pour maintenance mensuelle de son parc informatique (30 postes + serveurs).",
      location: "Abidjan, Zone Industrielle",
      budget: "500,000 FCFA/mois",
      timeline: "Contrat 12 mois renouvelable",
      client: "LogisticPro CI",
      contact: "it@logisticpro.ci",
      requirements: [
        "Intervention mensuelle planifiée",
        "Support technique urgent 24/7",
        "Gestion des sauvegardes",
        "Mise à jour systèmes et antivirus"
      ],
      potential: "Contrat annuel stable avec possibilité d'évolution vers gestion IT complète"
    },
    {
      title: "Développement application mobile e-commerce",
      category: "developpement",
      description: "Startup ivoirienne recherche développeur pour créer une application mobile de vente en ligne de produits locaux avec paiement mobile money.",
      location: "Abidjan, Cocody",
      budget: "8,000,000 - 15,000,000 FCFA",
      timeline: "4-6 mois de développement",
      client: "AfriMarket Startup",
      contact: "ceo@afrimarket.ci",
      requirements: [
        "Application iOS et Android native",
        "Intégration Orange Money & MTN Mobile Money",
        "Backend scalable",
        "Design moderne et intuitif"
      ],
      potential: "Contrat de maintenance à long terme + participation possible au capital"
    },
    {
      title: "Installation réseau et WiFi - Hôtel 4 étoiles",
      category: "reseau",
      description: "Nouvel hôtel recherche expert pour installer infrastructure réseau complète avec WiFi haut débit dans 80 chambres + espaces communs.",
      location: "Grand-Bassam",
      budget: "25,000,000 FCFA",
      timeline: "Installation en 1 mois",
      client: "Hôtel Océan d'Azur",
      contact: "technique@oceanazur.ci",
      requirements: [
        "WiFi 6 dans toutes les chambres",
        "Système de gestion centralisé",
        "Sécurité réseau avancée",
        "Serveur local pour gestion"
      ],
      potential: "Maintenance annuelle + expansion possible vers autres établissements du groupe"
    },
    {
      title: "Achat équipement informatique - Centre de formation",
      category: "achat",
      description: "Centre de formation professionnelle cherche 25 ordinateurs portables + vidéoprojecteurs + tableau interactif pour nouvelles salles.",
      location: "Yamoussoukro",
      budget: "18,000,000 FCFA",
      timeline: "Livraison immédiate",
      client: "Centre Excellence Formation",
      contact: "achats@cef-yop.ci",
      requirements: [
        "25 laptops professionnels",
        "3 vidéoprojecteurs HD",
        "2 tableaux interactifs",
        "Installation et configuration incluse"
      ],
      potential: "Renouvellement matériel tous les 3 ans + formation du personnel"
    },
    {
      title: "Maintenance préventive parc informatique - Banque",
      category: "maintenance",
      description: "Institution financière recherche prestataire sérieux pour maintenance préventive et corrective de 200 postes informatiques répartis sur 5 agences.",
      location: "Abidjan (5 agences)",
      budget: "2,500,000 FCFA/mois",
      timeline: "Contrat 24 mois",
      client: "Banque Atlantique CI",
      contact: "dsi@banque-atlantique.ci",
      requirements: [
        "Équipe de 3 techniciens minimum",
        "Certification sécurité informatique",
        "SLA 4h pour interventions urgentes",
        "Rapport mensuel détaillé"
      ],
      potential: "Contrat premium long terme + possibilité projets infrastructure"
    },
    {
      title: "Application web gestion scolaire",
      category: "developpement",
      description: "Groupe scolaire de 5 établissements cherche solution web complète pour gestion élèves, notes, paiements, communication parents.",
      location: "Bouaké",
      budget: "12,000,000 FCFA",
      timeline: "6 mois développement + déploiement",
      client: "Groupe Scolaire Renaissance",
      contact: "direction@gs-renaissance.ci",
      requirements: [
        "Gestion multi-établissements",
        "Module paiement mobile money",
        "Application mobile parents",
        "Génération bulletins automatique"
      ],
      potential: "Maintenance + hébergement annuels + vente à d'autres établissements"
    },
    {
      title: "Infrastructure réseau entreprise - Siège social",
      category: "reseau",
      description: "Grande entreprise agroalimentaire cherche expert pour refonte complète infrastructure réseau siège social (5 étages, 150 employés).",
      location: "San-Pedro",
      budget: "35,000,000 FCFA",
      timeline: "2 mois installation",
      client: "AgroBusiness SA",
      contact: "it@agrobusiness.ci",
      requirements: [
        "Câblage structuré Cat6A",
        "Switches managés Cisco/HP",
        "Serveur physique + virtualisation",
        "Système sauvegarde automatique"
      ],
      potential: "Contrat maintenance pluriannuel + projets IT futurs (ERP, CRM)"
    },
    {
      title: "Fourniture ordinateurs et serveurs - Ministère",
      category: "achat",
      description: "Appel d'offres ministère pour fourniture de 100 ordinateurs de bureau, 20 portables et 5 serveurs pour nouvelle direction régionale.",
      location: "Korhogo",
      budget: "45,000,000 FCFA",
      timeline: "Procédure marché public - 3 mois",
      client: "Ministère Administration Publique",
      contact: "marches.publics@gouv.ci",
      requirements: [
        "Conformité marchés publics",
        "Matériel certifié haute qualité",
        "5 serveurs Dell/HP",
        "Garantie 3 ans sur site"
      ],
      potential: "Contrat cadre sur 3 ans + autres directions régionales"
    },
    {
      title: "Support technique informatique - ONG internationale",
      category: "maintenance",
      description: "ONG internationale cherche prestataire local pour support technique continu de son équipe (40 personnes) + gestion infrastructure.",
      location: "Abidjan, Marcory",
      budget: "1,200,000 FCFA/mois",
      timeline: "Contrat 18 mois",
      client: "Care International CI",
      contact: "it.support@care.ci",
      requirements: [
        "Support bilingue FR/EN",
        "Gestion Microsoft 365",
        "Support VPN et accès distant",
        "Sécurité et conformité RGPD"
      ],
      potential: "Extension vers autres pays de la région + projets spéciaux"
    },
    {
      title: "Plateforme e-learning pour université",
      category: "developpement",
      description: "Université privée recherche développeur pour créer plateforme e-learning complète avec vidéos, quizz, forums, suivi étudiant.",
      location: "Abidjan, Riviera",
      budget: "20,000,000 FCFA",
      timeline: "8 mois développement",
      client: "Université Internationale d'Abidjan",
      contact: "digital@uia.edu.ci",
      requirements: [
        "Support 5000 étudiants simultanés",
        "Streaming vidéo HD",
        "Système de certification",
        "Intégration paiement en ligne"
      ],
      potential: "Hébergement + maintenance long terme + vente à autres universités"
    },
    {
      title: "Réparation et upgrade 30 ordinateurs",
      category: "maintenance",
      description: "Cyber café cherche technicien pour remettre à niveau son parc de 30 ordinateurs (nettoyage, RAM, SSD, réinstallation).",
      location: "Daloa",
      budget: "1,500,000 FCFA",
      timeline: "2 semaines",
      client: "Cyber Connect Daloa",
      contact: "cyber.daloa@gmail.com",
      requirements: [
        "Upgrade RAM et SSD",
        "Nettoyage complet",
        "Installation Windows + logiciels",
        "Configuration réseau optimisée"
      ],
      potential: "Maintenance mensuelle + ouverture autres cyber cafés"
    }
  ]

  // Filter opportunities
  let filtered = allOpportunities

  if (category !== 'all') {
    filtered = filtered.filter(opp => opp.category === category)
  }

  if (region !== 'all') {
    filtered = filtered.filter(opp =>
      opp.location.toLowerCase().includes(region.toLowerCase())
    )
  }

  if (budget !== 'all') {
    filtered = filtered.filter(opp => {
      const budgetValue = parseInt(opp.budget.replace(/[^0-9]/g, ''))
      if (budget === 'small') return budgetValue < 1000000
      if (budget === 'medium') return budgetValue >= 1000000 && budgetValue < 5000000
      if (budget === 'large') return budgetValue >= 5000000 && budgetValue < 20000000
      if (budget === 'enterprise') return budgetValue >= 20000000
      return true
    })
  }

  res.status(200).json({ opportunities: filtered })
}
