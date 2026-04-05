import { useMemo, useState } from 'react'
import { PhotoShowcase } from '../components/content/PhotoShowcase'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { SeoHead } from '../components/seo/SeoHead'
import { ToolFilters } from '../components/tools/ToolFilters'
import { ToolCard } from '../components/tools/ToolCard'
import { AdSlot } from '../components/ui/AdSlot'
import { categories } from '../data/categories'
import { tools } from '../data/tools'
import { showcasePhotos } from '../data/visuals'
import type { PricingModel } from '../types'
import { filterTools, sortTools } from '../utils/tools'

export const ToolsPage = () => {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [pricing, setPricing] = useState<PricingModel | 'all'>('all')
  const [sort, setSort] = useState<'top-rated' | 'recent' | 'name'>('top-rated')

  const visibleTools = useMemo(() => {
    const filtered = filterTools(tools, query, category, pricing)
    return sortTools(filtered, sort)
  }, [category, pricing, query, sort])

  return (
    <>
      <SeoHead
        title="All AI Tools - Compare by Category, Price, and Rating"
        description="Browse all AI tools in one place. Filter by category and pricing, compare ratings, and discover free AI tools for your workflow."
        canonicalPath="/tools"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'All AI Tools',
          description: 'Complete listing of AI tools by category and pricing.',
        }}
      />

      <section className="mt-8">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'All Tools' }]} />
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">All AI tools</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          Search and compare AI tools by category, pricing model, and review score. Filters are indexable-safe because each category has a dedicated page.
        </p>
      </section>

      <div className="mt-6">
        <ToolFilters
          query={query}
          category={category}
          pricing={pricing}
          sort={sort}
          categoryOptions={categories.map((item) => ({ slug: item.slug, name: item.name }))}
          onQueryChange={setQuery}
          onCategoryChange={setCategory}
          onPricingChange={setPricing}
          onSortChange={setSort}
        />
      </div>

      <PhotoShowcase
        title="Visual AI workspace"
        subtitle="Photo-rich context to help visitors quickly understand real AI use cases before choosing a tool."
        photos={showcasePhotos.slice(3)}
      />

      <AdSlot label="Tools listing in-feed ad slot" className="mt-6" />

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </section>

      {visibleTools.length === 0 ? (
        <p className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
          No tools found for this filter combination. Try removing one filter.
        </p>
      ) : null}
    </>
  )
}
