import type { PropsWithChildren } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const SiteLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-site-pattern text-slate-800">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  )
}
