import { Link } from 'react-router-dom'
import { SeoHead } from '../components/seo/SeoHead'

export const NotFoundPage = () => {
  return (
    <>
      <SeoHead
        title="Page not found | AI Tools Radar"
        description="The page you are looking for does not exist."
        canonicalPath="/404"
      />
      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">404</h1>
        <p className="mt-3 text-sm text-slate-600">This page does not exist or was moved.</p>
        <Link
          to="/"
          className="mt-5 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          Return to homepage
        </Link>
      </section>
    </>
  )
}
