import { ArticleCard } from '../components/content/ArticleCard'
import { PhotoShowcase } from '../components/content/PhotoShowcase'
import { SeoHead } from '../components/seo/SeoHead'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { articles } from '../data/articles'
import { showcasePhotos } from '../data/visuals'

export const BlogPage = () => {
  const sortedArticles = [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

  return (
    <>
      <SeoHead
        title="AI Guides and Tutorials - SEO, Comparisons, and Workflows"
        description="Read practical AI guides: tool comparisons, category breakdowns, and long-tail tutorials for organic growth."
        canonicalPath="/blog"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'AI Tools Radar Guides',
          description: 'Guides and tutorials about AI tools and workflow decisions.',
        }}
      />

      <section className="mt-8">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">AI guides and tutorials</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          Long-form content designed for high-intent SEO queries like best AI tools, comparisons, and category-specific workflows.
        </p>
      </section>

      <PhotoShowcase
        title="Inspiration gallery"
        subtitle="Snapshots that support each article theme: productivity, collaboration, education, and AI strategy."
        photos={showcasePhotos.slice(0, 3)}
      />

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sortedArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>
    </>
  )
}
