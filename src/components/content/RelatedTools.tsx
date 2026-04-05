import type { Tool } from '../../types'
import { ToolCard } from '../tools/ToolCard'

interface RelatedToolsProps {
  title?: string
  tools: Tool[]
}

export const RelatedTools = ({ title = 'Related tools', tools }: RelatedToolsProps) => {
  if (tools.length === 0) {
    return null
  }

  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  )
}
