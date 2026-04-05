import { Link } from 'react-router-dom'
import { getToolPhoto } from '../../data/visuals'
import type { Tool } from '../../types'

const badgeColorByPricing: Record<Tool['pricing'], string> = {
  free: 'bg-emerald-100 text-emerald-700',
  freemium: 'bg-amber-100 text-amber-700',
  paid: 'bg-slate-200 text-slate-700',
}

interface ToolCardProps {
  tool: Tool
}

export const ToolCard = ({ tool }: ToolCardProps) => {
  const imageUrl = getToolPhoto(tool.slug)

  return (
    <article className="photo-card animate-reveal-up overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <img src={imageUrl} alt={`${tool.name} interface preview`} loading="lazy" className="h-40 w-full object-cover" />
      <div className="p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${badgeColorByPricing[tool.pricing]}`}>
          {tool.pricing}
        </span>
        {tool.featured ? (
          <span className="rounded-full bg-cyan-100 px-2.5 py-1 text-xs font-medium text-cyan-700">featured</span>
        ) : null}
        {tool.tags.includes('popular') ? (
          <span className="rounded-full bg-pink-100 px-2.5 py-1 text-xs font-medium text-pink-700">popular</span>
        ) : null}
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-slate-900">{tool.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{tool.shortDescription}</p>

      <ul className="mt-4 space-y-1 text-sm text-slate-600">
        {tool.features.slice(0, 2).map((feature) => (
          <li key={feature}>• {feature}</li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">Rating: {tool.rating.toFixed(1)}/5</span>
        <Link
          to={`/tools/${tool.slug}`}
          className="animate-pulse-glow rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          View details
        </Link>
      </div>
      </div>
    </article>
  )
}
