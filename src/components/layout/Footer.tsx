import { Link } from 'react-router-dom'

const legalLinks = [
  { label: 'Privacy Policy', to: '/legal/privacy-policy' },
  { label: 'Terms of Service', to: '/legal/terms-of-service' },
  { label: 'Cookie Policy', to: '/legal/cookie-policy' },
  { label: 'Disclaimer', to: '/legal/disclaimer' },
]

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">AI Tools Radar</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Independent AI tools directory built for transparent reviews, SEO-friendly content, and long-term trust.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-800">Core pages</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/tools" className="text-slate-600 hover:text-slate-900">
                All AI tools
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-slate-600 hover:text-slate-900">
                Guides and tutorials
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-slate-600 hover:text-slate-900">
                About methodology
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-800">Legal</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {legalLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-slate-600 hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} AI Tools Radar. Educational directory template for SEO-first sites.
      </div>
    </footer>
  )
}
