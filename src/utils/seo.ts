import { siteConfig } from '../config/site'

export const absoluteUrl = (path: string) => {
  if (!path.startsWith('/')) {
    return `${siteConfig.baseUrl}/${path}`
  }

  return `${siteConfig.baseUrl}${path}`
}

export const cleanText = (input: string) => input.replace(/\s+/g, ' ').trim()

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
