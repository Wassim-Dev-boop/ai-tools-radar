import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const siteUrl = process.env.VITE_SITE_URL || 'https://www.aitoolsradar.com'

const extractSlugs = (path) => {
  const source = readFileSync(path, 'utf8')
  return [...source.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
}

const categorySlugs = extractSlugs(resolve('src/data/categories.ts'))
const toolSlugs = extractSlugs(resolve('src/data/tools.ts'))
const articleSlugs = extractSlugs(resolve('src/data/articles.ts'))

const staticRoutes = [
  '/',
  '/tools',
  '/blog',
  '/about',
  '/contact',
  '/legal/privacy-policy',
  '/legal/terms-of-service',
  '/legal/cookie-policy',
  '/legal/disclaimer',
]

const routes = [
  ...staticRoutes,
  ...categorySlugs.map((slug) => `/categories/${slug}`),
  ...toolSlugs.map((slug) => `/tools/${slug}`),
  ...articleSlugs.map((slug) => `/blog/${slug}`),
]

const uniqueRoutes = [...new Set(routes)]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueRoutes
  .map(
    (route) =>
      `  <url>\n    <loc>${siteUrl}${route}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.7'}</priority>\n  </url>`,
  )
  .join('\n')}\n</urlset>\n`

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`

writeFileSync(resolve('public/sitemap.xml'), sitemap, 'utf8')
writeFileSync(resolve('public/robots.txt'), robots, 'utf8')

console.log(`Generated sitemap with ${uniqueRoutes.length} URLs.`)
