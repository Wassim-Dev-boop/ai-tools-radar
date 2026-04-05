import { useEffect } from 'react'
import { siteConfig } from '../../config/site'
import type { SeoData } from '../../types'
import { absoluteUrl, cleanText } from '../../utils/seo'

const upsertMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
  let element = document.head.querySelector(`meta[${attr}="${name}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, name)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const upsertLink = (rel: string, href: string) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

export const SeoHead = ({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  image = siteConfig.defaultOgImage,
  schema,
}: SeoData) => {
  useEffect(() => {
    const canonical = absoluteUrl(canonicalPath)
    const normalizedDescription = cleanText(description)
    const ogImage = absoluteUrl(image)

    document.title = title

    upsertMeta('description', normalizedDescription)
    upsertMeta('og:title', title, 'property')
    upsertMeta('og:description', normalizedDescription, 'property')
    upsertMeta('og:type', ogType, 'property')
    upsertMeta('og:url', canonical, 'property')
    upsertMeta('og:image', ogImage, 'property')
    upsertMeta('twitter:card', 'summary_large_image')
    upsertMeta('twitter:title', title)
    upsertMeta('twitter:description', normalizedDescription)
    upsertMeta('twitter:image', ogImage)
    upsertLink('canonical', canonical)

    let schemaScript: HTMLScriptElement | null = null

    if (schema) {
      schemaScript = document.createElement('script')
      schemaScript.type = 'application/ld+json'
      schemaScript.textContent = JSON.stringify(schema)
      schemaScript.setAttribute('data-seo-schema', 'true')
      document.head.appendChild(schemaScript)
    }

    return () => {
      if (schemaScript) {
        document.head.removeChild(schemaScript)
      }
    }
  }, [canonicalPath, description, image, ogType, schema, title])

  return null
}
