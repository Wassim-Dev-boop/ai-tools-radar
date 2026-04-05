import { Link, Navigate, useParams } from 'react-router-dom'
import { RelatedArticles } from '../components/content/RelatedArticles'
import { RelatedTools } from '../components/content/RelatedTools'
import { SeoHead } from '../components/seo/SeoHead'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { AdSlot } from '../components/ui/AdSlot'
import { articles } from '../data/articles'
import { categories } from '../data/categories'
import { getAlternativeTools, getToolBySlug } from '../utils/tools'

export const ToolDetailPage = () => {
  const { toolSlug = '' } = useParams()
  const tool = getToolBySlug(toolSlug)

  if (!tool) {
    return <Navigate to="/404" replace />
  }

  const category = categories.find((item) => item.slug === tool.category)
  const alternatives = getAlternativeTools(tool, 3)
  const relatedArticles = articles
    .filter((article) => article.relatedToolSlugs.includes(tool.slug))
    .slice(0, 3)

  return (
    <>
      <SeoHead
        title={`${tool.name} Review, Pricing, Features, and Alternatives`}
        description={`${tool.name}: ${tool.shortDescription} Compare pricing, strengths, limitations, and alternatives before choosing.`}
        canonicalPath={`/tools/${tool.slug}`}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: tool.name,
            applicationCategory: category?.name || 'AI Tool',
            offers: {
              '@type': 'Offer',
              price: tool.pricing === 'paid' ? '29' : '0',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: tool.rating,
              reviewCount: 18,
            },
          },
        ]}
      />

      <section className="mt-8">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'All Tools', to: '/tools' },
            {
              label: category?.name || 'Category',
              to: category ? `/categories/${category.slug}` : undefined,
            },
            { label: tool.name },
          ]}
        />

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-700">{tool.pricing}</span>
            <span className="rounded-full bg-cyan-100 px-2.5 py-1 font-medium text-cyan-700">{category?.name}</span>
          </div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">{tool.name}</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">{tool.fullDescription}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Top features</h2>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                {tool.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Pros and cons</h2>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                {tool.pros.map((pro) => (
                  <li key={pro}>+ {pro}</li>
                ))}
                {tool.cons.map((con) => (
                  <li key={con}>- {con}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={tool.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
            >
              Visit official website
            </a>
            <span className="text-sm text-slate-600">Rating: {tool.rating.toFixed(1)} / 5</span>
            <span className="text-sm text-slate-500">Updated: {tool.updatedAt}</span>
          </div>
        </div>
      </section>

      <AdSlot label="Article-body style ad slot" className="mt-8" />

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Compare alternatives</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Evaluate alternatives in the same category if you need a different pricing model, stronger integrations, or better team permissions.
        </p>
      </section>

      <div className="mt-10">
        <RelatedTools title="Related tools" tools={alternatives} />
      </div>

      <div className="mt-10">
        <RelatedArticles title="Related articles" items={relatedArticles} />
      </div>

      <div className="mt-10">
        <Link to="/tools" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
          Back to all tools
        </Link>
      </div>
    </>
  )
}
