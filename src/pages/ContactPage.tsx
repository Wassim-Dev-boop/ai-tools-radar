import { SeoHead } from '../components/seo/SeoHead'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'

export const ContactPage = () => {
  return (
    <>
      <SeoHead
        title="Contact AI Tools Radar"
        description="Submit an AI tool, suggest corrections, or request collaboration with the AI Tools Radar editorial team."
        canonicalPath="/contact"
      />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Contact</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          Use this form to suggest a tool, report outdated information, or request a partnership discussion.
        </p>

        <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
          <label className="flex flex-col gap-2 text-sm">
            Name
            <input required className="rounded-lg border border-slate-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Email
            <input type="email" required className="rounded-lg border border-slate-300 px-3 py-2" />
          </label>
          <label className="md:col-span-2 flex flex-col gap-2 text-sm">
            Subject
            <input required className="rounded-lg border border-slate-300 px-3 py-2" />
          </label>
          <label className="md:col-span-2 flex flex-col gap-2 text-sm">
            Message
            <textarea required rows={6} className="rounded-lg border border-slate-300 px-3 py-2" />
          </label>
          <button className="w-fit rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
            Send message
          </button>
        </form>
      </section>
    </>
  )
}
