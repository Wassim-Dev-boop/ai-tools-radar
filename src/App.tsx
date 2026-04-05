import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })))
const ToolsPage = lazy(() => import('./pages/ToolsPage').then((module) => ({ default: module.ToolsPage })))
const CategoryPage = lazy(() => import('./pages/CategoryPage').then((module) => ({ default: module.CategoryPage })))
const ToolDetailPage = lazy(() =>
  import('./pages/ToolDetailPage').then((module) => ({ default: module.ToolDetailPage })),
)
const BlogPage = lazy(() => import('./pages/BlogPage').then((module) => ({ default: module.BlogPage })))
const BlogArticlePage = lazy(() =>
  import('./pages/BlogArticlePage').then((module) => ({ default: module.BlogArticlePage })),
)
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })))
const PrivacyPolicyPage = lazy(() =>
  import('./pages/legal/PrivacyPolicyPage').then((module) => ({ default: module.PrivacyPolicyPage })),
)
const TermsOfServicePage = lazy(() =>
  import('./pages/legal/TermsOfServicePage').then((module) => ({ default: module.TermsOfServicePage })),
)
const CookiePolicyPage = lazy(() =>
  import('./pages/legal/CookiePolicyPage').then((module) => ({ default: module.CookiePolicyPage })),
)
const DisclaimerPage = lazy(() =>
  import('./pages/legal/DisclaimerPage').then((module) => ({ default: module.DisclaimerPage })),
)
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })),
)

const loadingState = (
  <div className="py-20 text-center text-sm text-slate-500">Loading page content...</div>
)

function App() {
  return (
    <SiteLayout>
      <Suspense fallback={loadingState}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/tools/:toolSlug" element={<ToolDetailPage />} />
          <Route path="/categories/:categorySlug" element={<CategoryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:articleSlug" element={<BlogArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/legal/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/legal/disclaimer" element={<DisclaimerPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </SiteLayout>
  )
}

export default App
