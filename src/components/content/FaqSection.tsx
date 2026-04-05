import type { FaqItem } from '../../types'

interface FaqSectionProps {
  title: string
  items: FaqItem[]
}

export const FaqSection = ({ title, items }: FaqSectionProps) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <details key={item.question} className="group rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer list-none font-medium text-slate-800">
              {item.question}
            </summary>
            <p className="mt-2 text-sm leading-6 text-slate-600 group-open:animate-fade-in">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
