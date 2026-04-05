import { SeoHead } from '../components/seo/SeoHead'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'

export const AboutPage = () => {
  return (
    <>
      <SeoHead
        title="About AI Tools Radar - Editorial Methodology and Mission"
        description="Learn how AI Tools Radar tests and reviews AI products with transparency, consistency, and user-first criteria."
        canonicalPath="/about"
      />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">About AI Tools Radar</h1>

        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            AI Tools Radar is a lightweight editorial directory helping readers discover AI tools by category, pricing, and real-world usefulness. Our mission is simple: reduce noise and improve decision quality.
          </p>
          <p>
            We prioritize practical criteria over hype: setup speed, consistency, limitations, and value for money. We update listings when tools change major features, pricing, or policy terms.
          </p>
          <p>
            This website is designed for transparent content architecture, clean internal linking, and policy-compliant monetization. It is intentionally simple so creators can maintain it with low cost and high speed.
          </p>
        </div>
      </section>
    </>
  )
}
