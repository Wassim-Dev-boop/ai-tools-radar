import { useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { RelatedArticles } from '../components/content/RelatedArticles'
import { SeoHead } from '../components/seo/SeoHead'
import { ToolCard } from '../components/tools/ToolCard'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { AdSlot } from '../components/ui/AdSlot'
import { articles } from '../data/articles'
import { categories } from '../data/categories'
import { tools } from '../data/tools'

export const CategoryPage = () => {
  const { categorySlug = '' } = useParams()
  const category = categories.find((item) => item.slug === categorySlug)

  const categoryTools = useMemo(
    () => tools.filter((tool) => tool.category === categorySlug).sort((a, b) => b.rating - a.rating),
    [categorySlug],
  )

  const relatedArticles = articles
    .filter((article) => article.tags.some((tag) => tag.includes('ai')))
    .slice(0, 3)

  if (!category) {
    return <Navigate to="/404" replace />
  }

  return (
    <>
      <SeoHead
        title={`${category.seoTitle} | AI Tools Radar`}
        description={category.seoDescription}
        canonicalPath={`/categories/${category.slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: category.name,
          description: category.shortDescription,
        }}
      />

      <section className="mt-8">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'All Tools', to: '/tools' },
            { label: category.name },
          ]}
        />
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">{category.name}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{category.shortDescription}</p>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categoryTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </section>

      <AdSlot label="Category page ad slot" className="mt-8" />

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Compare alternatives</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          To compare tools in this category, shortlist 3 options and test the same workflow brief. Track output quality, editing time, and monthly cost.
        </p>
        <Link
          to="/blog/compare-ai-tools-criteria"
          className="mt-4 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          Read comparison framework
        </Link>
      </section>

      <div className="mt-10">
        <RelatedArticles items={relatedArticles} />
      </div>
    </>
  )
}
