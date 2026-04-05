import { Link, Navigate, useParams } from 'react-router-dom'
import { AdSlot } from '../components/ui/AdSlot'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { SeoHead } from '../components/seo/SeoHead'
import { RelatedTools } from '../components/content/RelatedTools'
import { RelatedArticles } from '../components/content/RelatedArticles'
import { articles } from '../data/articles'
import { tools } from '../data/tools'
import { formatDate } from '../utils/seo'

export const BlogArticlePage = () => {
  const { articleSlug = '' } = useParams()
  const article = articles.find((item) => item.slug === articleSlug)

  if (!article) {
    return <Navigate to="/404" replace />
  }

  const relatedTools = tools.filter((tool) => article.relatedToolSlugs.includes(tool.slug)).slice(0, 3)
  const relatedArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 3)

  return (
    <>
      <SeoHead
        title={`${article.title} | AI Tools Radar`}
        description={article.excerpt}
        canonicalPath={`/blog/${article.slug}`}
        ogType="article"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt,
          datePublished: article.publishedAt,
          author: {
            '@type': 'Person',
            name: article.author,
          },
        }}
      />

      <article className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Blog', to: '/blog' },
            { label: article.title },
          ]}
        />

        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">{article.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span>{article.author}</span>
          <span>•</span>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <div className="prose prose-slate mt-6 max-w-none">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </article>

      <AdSlot label="In-article ad slot" className="mt-8" />

      <div className="mt-10">
        <RelatedTools title="Tools mentioned in this guide" tools={relatedTools} />
      </div>

      <div className="mt-10">
        <RelatedArticles items={relatedArticles} />
      </div>

      <div className="mt-10">
        <Link to="/blog" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
          Back to all guides
        </Link>
      </div>
    </>
  )
}
