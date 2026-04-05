import type { ReactNode } from 'react'
import { Breadcrumbs } from '../../components/ui/Breadcrumbs'
import { SeoHead } from '../../components/seo/SeoHead'

interface LegalTemplateProps {
  title: string
  description: string
  canonicalPath: string
  children: ReactNode
}

export const LegalTemplate = ({ title, description, canonicalPath, children }: LegalTemplateProps) => {
  return (
    <>
      <SeoHead title={`${title} | AI Tools Radar`} description={description} canonicalPath={canonicalPath} />
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: title },
          ]}
        />
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">{title}</h1>
        <div className="prose prose-slate mt-4 max-w-none">{children}</div>
      </section>
    </>
  )
}
