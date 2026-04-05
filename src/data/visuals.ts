export interface VisualItem {
  src: string
  alt: string
}

const defaultPhoto =
  'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80'

const toolPhotoMap: Record<string, string> = {
  chatgpt:
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
  claude:
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
  perplexity:
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
  github-copilot:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
  midjourney:
    'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80',
}

const articlePhotoMap: Record<string, string> = {
  'best-ai-tools-2026-guide':
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  'ai-tools-for-students-study-guide':
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
  'ai-tools-marketing-funnel-stack':
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  'best-free-ai-tools-today':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
}

export const showcasePhotos: VisualItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    alt: 'AI data visualization on large digital display',
  },
  {
    src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
    alt: 'Developer workspace with analytics and coding dashboard',
  },
  {
    src: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1600&q=80',
    alt: 'Creative team reviewing digital strategy',
  },
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
    alt: 'Collaboration setup with laptops and tablets',
  },
  {
    src: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1600&q=80',
    alt: 'Modern office with product planning on screen',
  },
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
    alt: 'Startup team discussing AI workflow improvements',
  },
]

export const getToolPhoto = (toolSlug: string) => toolPhotoMap[toolSlug] || defaultPhoto

export const getArticlePhoto = (articleSlug: string) => articlePhotoMap[articleSlug] || defaultPhoto