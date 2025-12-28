interface SearchFiltersProps {
  filters: {
    category: string
    region: string
    budget: string
  }
  setFilters: (filters: any) => void
}

export default function SearchFilters({ filters, setFilters }: SearchFiltersProps) {
  const updateFilter = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Catégorie
        </label>
        <select
          value={filters.category}
          onChange={(e) => updateFilter('category', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
        >
          <option value="all">Toutes les catégories</option>
          <option value="achat">Achat d&apos;ordinateurs</option>
          <option value="maintenance">Maintenance informatique</option>
          <option value="developpement">Création d&apos;applications</option>
          <option value="reseau">Réseaux & Infrastructure</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Région
        </label>
        <select
          value={filters.region}
          onChange={(e) => updateFilter('region', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
        >
          <option value="all">Toute la Côte d&apos;Ivoire</option>
          <option value="abidjan">Abidjan</option>
          <option value="yamoussoukro">Yamoussoukro</option>
          <option value="bouake">Bouaké</option>
          <option value="daloa">Daloa</option>
          <option value="san-pedro">San-Pedro</option>
          <option value="korhogo">Korhogo</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Budget estimé
        </label>
        <select
          value={filters.budget}
          onChange={(e) => updateFilter('budget', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
        >
          <option value="all">Tous les budgets</option>
          <option value="small">Moins de 1M FCFA</option>
          <option value="medium">1M - 5M FCFA</option>
          <option value="large">5M - 20M FCFA</option>
          <option value="enterprise">Plus de 20M FCFA</option>
        </select>
      </div>
    </div>
  )
}
