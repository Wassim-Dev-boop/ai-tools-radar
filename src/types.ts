export type PricingModel = 'free' | 'freemium' | 'paid'

export interface Category {
  name: string
  slug: string
  shortDescription: string
  seoTitle: string
  seoDescription: string
}

export interface Tool {
  name: string
  slug: string
  shortDescription: string
  fullDescription: string
  category: string
  pricing: PricingModel
  websiteUrl: string
  features: string[]
  pros: string[]
  cons: string[]
  rating: number
  tags: string[]
  featured: boolean
  updatedAt: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface BlogArticle {
  title: string
  slug: string
  excerpt: string
  content: string[]
  publishedAt: string
  readTime: string
  author: string
  category: string
  tags: string[]
  relatedToolSlugs: string[]
}

export interface SeoData {
  title: string
  description: string
  canonicalPath: string
  ogType?: 'website' | 'article'
  image?: string
  schema?: Record<string, unknown> | Array<Record<string, unknown>>
}
