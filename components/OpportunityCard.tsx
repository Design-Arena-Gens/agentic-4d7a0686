interface Opportunity {
  title: string
  category: string
  description: string
  location: string
  budget: string
  timeline: string
  client: string
  contact: string
  requirements: string[]
  potential: string
}

interface OpportunityCardProps {
  opportunity: Opportunity
}

export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'achat': '💻',
      'maintenance': '🔧',
      'developpement': '📱',
      'reseau': '🌐',
      'default': '💼'
    }
    return icons[category] || icons['default']
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'achat': 'bg-blue-100 text-blue-800',
      'maintenance': 'bg-orange-100 text-orange-800',
      'developpement': 'bg-green-100 text-green-800',
      'reseau': 'bg-purple-100 text-purple-800',
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-orange-500 to-green-600 p-4">
        <div className="flex items-center justify-between">
          <span className="text-4xl">{getCategoryIcon(opportunity.category)}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(opportunity.category)}`}>
            {opportunity.category.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {opportunity.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {opportunity.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-start">
            <span className="text-orange-500 mr-2">📍</span>
            <span className="text-sm text-gray-700">{opportunity.location}</span>
          </div>

          <div className="flex items-start">
            <span className="text-green-600 mr-2">💰</span>
            <span className="text-sm font-semibold text-gray-700">{opportunity.budget}</span>
          </div>

          <div className="flex items-start">
            <span className="text-blue-500 mr-2">⏱️</span>
            <span className="text-sm text-gray-700">{opportunity.timeline}</span>
          </div>

          <div className="flex items-start">
            <span className="text-purple-500 mr-2">🏢</span>
            <span className="text-sm text-gray-700">{opportunity.client}</span>
          </div>
        </div>

        {opportunity.requirements && opportunity.requirements.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Exigences:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {opportunity.requirements.slice(0, 3).map((req, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
          <p className="text-xs font-semibold text-green-800 mb-1">Potentiel:</p>
          <p className="text-sm text-green-700">{opportunity.potential}</p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-xs text-gray-500">Contact: {opportunity.contact}</span>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200">
            Postuler
          </button>
        </div>
      </div>
    </div>
  )
}
