import { Link } from 'react-router-dom'
import { CategoryBlocks } from '../components/content/CategoryBlocks'
import { FaqSection } from '../components/content/FaqSection'
import { NewsletterBox } from '../components/content/NewsletterBox'
import { RelatedArticles } from '../components/content/RelatedArticles'
import { RelatedTools } from '../components/content/RelatedTools'
import { SeoHead } from '../components/seo/SeoHead'
import { AdSlot } from '../components/ui/AdSlot'
import { siteConfig } from '../config/site'
import { articles } from '../data/articles'
import { categories } from '../data/categories'
import { editorialIdeas } from '../data/content-plan'
import { tools } from '../data/tools'

const homepageFaq = [
  {
    question: 'How do you select AI tools for this directory?',
    answer:
      'We review tools using repeatable tests: setup speed, output quality, update frequency, pricing clarity, and practical workflow value.',
  },
  {
    question: 'Do you rank tools based on sponsorships?',
    answer:
      'No. Ratings are editorial and transparent. If a commercial relationship exists, it is disclosed and does not control rankings.',
  },
  {
    question: 'Can I submit a tool for review?',
    answer:
      'Yes. Use the contact page with your product URL and best use case. Submissions go through the same criteria as listed tools.',
  },
]

export const HomePage = () => {
  const featuredTools = tools.filter((tool) => tool.featured).slice(0, 6)
  const latestGuides = [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 3)

  return (
    <>
      <SeoHead
        title={siteConfig.defaultTitle}
        description={siteConfig.defaultDescription}
        canonicalPath="/"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteConfig.name,
            url: siteConfig.baseUrl,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${siteConfig.baseUrl}/tools?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: homepageFaq.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          },
        ]}
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="absolute -right-24 -top-16 h-56 w-56 rounded-full bg-cyan-200/60 blur-3xl" />
        <div className="absolute -bottom-20 -left-24 h-56 w-56 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-700">
            SEO-first AI tools directory
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Find the best AI tools for real workflows
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            AI Tools Radar helps you compare AI tools by category, pricing, and use case. Explore trusted recommendations for students, marketers, developers, and founders.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/tools"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Browse all tools
            </Link>
            <Link
              to="/blog"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-slate-400"
            >
              Read SEO guides
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">Why trust us</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Every listing includes strengths, limitations, and pricing context so readers can make informed decisions.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">How we review tools</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            We run scenario-based tests, compare outputs side by side, and refresh ratings when products ship major updates.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">Built for clarity</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Clean navigation, category pages, and focused guides make this project friendly for users, SEO, and AdSense policy.
          </p>
        </article>
      </section>

      <div className="mt-12">
        <CategoryBlocks categories={categories.slice(0, 6)} />
      </div>

      <div className="mt-12">
        <RelatedTools title="Featured AI tools" tools={featuredTools} />
      </div>

      <AdSlot label="Homepage listing ad slot" className="mt-8" />

      <div className="mt-12">
        <RelatedArticles title="Latest guides" items={latestGuides} />
      </div>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Editorial roadmap</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          20 SEO topics prepared to grow organic traffic across high-intent and long-tail queries.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
          {editorialIdeas.map((idea) => (
            <li key={idea}>• {idea}</li>
          ))}
        </ul>
      </section>

      <div className="mt-12">
        <FaqSection title="Frequently asked questions" items={homepageFaq} />
      </div>

      <div className="mt-12">
        <NewsletterBox />
      </div>
    </>
  )
}
