import { Link } from 'react-router-dom'
import { getArticlePhoto } from '../../data/visuals'
import type { BlogArticle } from '../../types'
import { formatDate } from '../../utils/seo'

interface ArticleCardProps {
  article: BlogArticle
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const imageUrl = getArticlePhoto(article.slug)

  return (
    <article className="photo-card animate-reveal-up overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <img src={imageUrl} alt={`${article.title} cover`} loading="lazy" className="h-44 w-full object-cover" />
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">{article.category}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">{article.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{article.excerpt}</p>
        <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
          <span>{formatDate(article.publishedAt)}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <Link
          to={`/blog/${article.slug}`}
          className="mt-4 inline-flex rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          Read guide
        </Link>
      </div>
    </article>
  )
}
