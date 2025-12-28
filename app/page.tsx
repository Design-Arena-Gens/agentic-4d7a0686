'use client'

import { useState } from 'react'
import OpportunityCard from '@/components/OpportunityCard'
import SearchFilters from '@/components/SearchFilters'

export default function Home() {
  const [opportunities, setOpportunities] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({
    category: 'all',
    region: 'all',
    budget: 'all'
  })

  const searchOpportunities = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/opportunities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filters),
      })
      const data = await response.json()
      setOpportunities(data.opportunities || [])
    } catch (error) {
      console.error('Erreur lors de la recherche:', error)
    } finally {
      setLoading(false)
    }
  }

  const autoGenerate = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      setOpportunities(data.opportunities || [])
    } catch (error) {
      console.error('Erreur lors de la génération:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              AI
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Agent IA - Opportunités Informatique
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les meilleures opportunités d&apos;affaires en informatique en Côte d&apos;Ivoire :
            achat d&apos;ordinateurs, maintenance, et création d&apos;applications
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
          <SearchFilters filters={filters} setFilters={setFilters} />

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              onClick={searchOpportunities}
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {loading ? '🔍 Recherche en cours...' : '🔍 Rechercher des opportunités'}
            </button>

            <button
              onClick={autoGenerate}
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {loading ? '⚡ Génération...' : '⚡ Générer avec IA'}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
            <p className="mt-4 text-gray-600 text-lg">Analyse des opportunités en cours...</p>
          </div>
        )}

        {!loading && opportunities.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {opportunities.length} Opportunité{opportunities.length > 1 ? 's' : ''} trouvée{opportunities.length > 1 ? 's' : ''}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities.map((opp, index) => (
                <OpportunityCard key={index} opportunity={opp} />
              ))}
            </div>
          </div>
        )}

        {!loading && opportunities.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <div className="text-6xl mb-4">💼</div>
            <p className="text-gray-600 text-lg">
              Cliquez sur un bouton ci-dessus pour découvrir les opportunités d&apos;affaires
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
