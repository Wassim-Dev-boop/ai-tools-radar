import { Link } from 'react-router-dom'
import type { Category } from '../../types'

interface CategoryBlocksProps {
  categories: Category[]
}

export const CategoryBlocks = ({ categories }: CategoryBlocksProps) => {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Top categories</h2>
        <Link to="/tools" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
          Browse all tools
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <article key={category.slug} className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">{category.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{category.shortDescription}</p>
            <Link
              to={`/categories/${category.slug}`}
              className="mt-4 inline-flex text-sm font-medium text-cyan-700 hover:text-cyan-800"
            >
              Explore category
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
