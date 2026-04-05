export const siteConfig = {
  name: 'AI Tools Radar',
  baseUrl: import.meta.env.VITE_SITE_URL || 'https://www.aitoolsradar.com',
  defaultTitle: 'AI Tools Radar - Discover The Best AI Tools By Category',
  defaultDescription:
    'Compare the best AI tools for students, marketing, coding, design, and productivity. Discover free AI tools, alternatives, and practical guides.',
  defaultOgImage: '/og-cover.svg',
  contactEmail: 'hello@aitoolsradar.com',
  social: {
    x: 'https://x.com',
    github: 'https://github.com',
  },
}

export const adConfig = {
  enabled: import.meta.env.VITE_ENABLE_ADS === 'true',
  adsenseClient: import.meta.env.VITE_ADSENSE_CLIENT || '',
}
