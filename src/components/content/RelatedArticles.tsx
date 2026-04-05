import type { BlogArticle } from '../../types'
import { ArticleCard } from './ArticleCard'

interface RelatedArticlesProps {
  title?: string
  items: BlogArticle[]
}

export const RelatedArticles = ({ title = 'Related guides', items }: RelatedArticlesProps) => {
  if (items.length === 0) {
    return null
  }

  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  )
}
