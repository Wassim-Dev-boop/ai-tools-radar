import { categories } from '../data/categories'
import { tools } from '../data/tools'
import type { PricingModel, Tool } from '../types'

export const priceOrder: PricingModel[] = ['free', 'freemium', 'paid']

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug)

export const getToolBySlug = (slug: string) => tools.find((tool) => tool.slug === slug)

export const getToolsByCategory = (categorySlug: string) =>
  tools.filter((tool) => tool.category === categorySlug)

export const sortTools = (items: Tool[], sortKey: 'top-rated' | 'recent' | 'name') => {
  if (sortKey === 'name') {
    return [...items].sort((a, b) => a.name.localeCompare(b.name))
  }

  if (sortKey === 'recent') {
    return [...items].sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    )
  }

  return [...items].sort((a, b) => b.rating - a.rating)
}

export const filterTools = (
  items: Tool[],
  query: string,
  category: string,
  pricing: PricingModel | 'all',
) => {
  const normalizedQuery = query.toLowerCase().trim()

  return items.filter((tool) => {
    const matchesQuery =
      normalizedQuery.length === 0 ||
      tool.name.toLowerCase().includes(normalizedQuery) ||
      tool.shortDescription.toLowerCase().includes(normalizedQuery) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))

    const matchesCategory = category === 'all' || tool.category === category
    const matchesPricing = pricing === 'all' || tool.pricing === pricing

    return matchesQuery && matchesCategory && matchesPricing
  })
}

export const getAlternativeTools = (tool: Tool, limit = 3) =>
  tools
    .filter((item) => item.slug !== tool.slug)
    .filter((item) => item.category === tool.category || item.tags.some((tag) => tool.tags.includes(tag)))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit)
