import type { PricingModel } from '../../types'

interface ToolFiltersProps {
  query: string
  category: string
  pricing: PricingModel | 'all'
  sort: 'top-rated' | 'recent' | 'name'
  categoryOptions: Array<{ slug: string; name: string }>
  onQueryChange: (value: string) => void
  onCategoryChange: (value: string) => void
  onPricingChange: (value: PricingModel | 'all') => void
  onSortChange: (value: 'top-rated' | 'recent' | 'name') => void
}

export const ToolFilters = ({
  query,
  category,
  pricing,
  sort,
  categoryOptions,
  onQueryChange,
  onCategoryChange,
  onPricingChange,
  onSortChange,
}: ToolFiltersProps) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid gap-3 md:grid-cols-4">
        <label className="flex flex-col gap-2 text-sm">
          Search tools
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            type="search"
            placeholder="Search by name, feature, tag"
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none ring-emerald-400 transition focus:ring"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm">
          Category
          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2"
          >
            <option value="all">All categories</option>
            {categoryOptions.map((option) => (
              <option key={option.slug} value={option.slug}>
                {option.name}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm">
          Pricing
          <select
            value={pricing}
            onChange={(event) => onPricingChange(event.target.value as PricingModel | 'all')}
            className="rounded-lg border border-slate-300 px-3 py-2"
          >
            <option value="all">All pricing</option>
            <option value="free">Free</option>
            <option value="freemium">Freemium</option>
            <option value="paid">Paid</option>
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm">
          Sort by
          <select
            value={sort}
            onChange={(event) => onSortChange(event.target.value as 'top-rated' | 'recent' | 'name')}
            className="rounded-lg border border-slate-300 px-3 py-2"
          >
            <option value="top-rated">Top rated</option>
            <option value="recent">Recently updated</option>
            <option value="name">Name A-Z</option>
          </select>
        </label>
      </div>
    </section>
  )
}
