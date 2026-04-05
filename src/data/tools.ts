import type { Tool } from '../types'

type ToolSeed = Pick<Tool, 'name' | 'slug' | 'category' | 'pricing' | 'websiteUrl' | 'tags'>

const seeds: ToolSeed[] = [
  { name: 'ChatGPT', slug: 'chatgpt', category: 'writing-assistants', pricing: 'freemium', websiteUrl: 'https://chat.openai.com', tags: ['popular', 'assistant', 'multi-purpose'] },
  { name: 'Claude', slug: 'claude', category: 'writing-assistants', pricing: 'freemium', websiteUrl: 'https://claude.ai', tags: ['popular', 'documents', 'analysis'] },
  { name: 'Gemini', slug: 'gemini', category: 'productivity', pricing: 'freemium', websiteUrl: 'https://gemini.google.com', tags: ['google', 'workspace', 'assistant'] },
  { name: 'Perplexity', slug: 'perplexity', category: 'data-analytics', pricing: 'freemium', websiteUrl: 'https://www.perplexity.ai', tags: ['research', 'sources', 'search'] },
  { name: 'Notion AI', slug: 'notion-ai', category: 'productivity', pricing: 'paid', websiteUrl: 'https://www.notion.so/product/ai', tags: ['notes', 'teams', 'workspace'] },
  { name: 'Grammarly', slug: 'grammarly', category: 'writing-assistants', pricing: 'freemium', websiteUrl: 'https://www.grammarly.com', tags: ['writing', 'editing', 'students'] },
  { name: 'Jasper', slug: 'jasper', category: 'marketing', pricing: 'paid', websiteUrl: 'https://www.jasper.ai', tags: ['marketing', 'copywriting', 'campaigns'] },
  { name: 'Copy.ai', slug: 'copy-ai', category: 'marketing', pricing: 'freemium', websiteUrl: 'https://www.copy.ai', tags: ['sales', 'marketing', 'content'] },
  { name: 'Surfer SEO', slug: 'surfer-seo', category: 'marketing', pricing: 'paid', websiteUrl: 'https://surferseo.com', tags: ['seo', 'content', 'optimization'] },
  { name: 'Frase', slug: 'frase', category: 'marketing', pricing: 'paid', websiteUrl: 'https://www.frase.io', tags: ['seo', 'briefs', 'content'] },
  { name: 'GitHub Copilot', slug: 'github-copilot', category: 'coding-assistants', pricing: 'paid', websiteUrl: 'https://github.com/features/copilot', tags: ['coding', 'developer', 'popular'] },
  { name: 'Cursor', slug: 'cursor', category: 'coding-assistants', pricing: 'freemium', websiteUrl: 'https://cursor.com', tags: ['coding', 'editor', 'pair-programming'] },
  { name: 'Codeium', slug: 'codeium', category: 'coding-assistants', pricing: 'freemium', websiteUrl: 'https://codeium.com', tags: ['coding', 'autocomplete', 'free'] },
  { name: 'Midjourney', slug: 'midjourney', category: 'design-image', pricing: 'paid', websiteUrl: 'https://www.midjourney.com', tags: ['image', 'creative', 'design'] },
  { name: 'Adobe Firefly', slug: 'adobe-firefly', category: 'design-image', pricing: 'freemium', websiteUrl: 'https://www.adobe.com/products/firefly.html', tags: ['design', 'image', 'adobe'] },
  { name: 'Canva Magic Studio', slug: 'canva-magic-studio', category: 'design-image', pricing: 'freemium', websiteUrl: 'https://www.canva.com/magic-studio/', tags: ['design', 'marketing', 'templates'] },
  { name: 'Runway', slug: 'runway', category: 'video-audio', pricing: 'freemium', websiteUrl: 'https://runwayml.com', tags: ['video', 'creator', 'editing'] },
  { name: 'Descript', slug: 'descript', category: 'video-audio', pricing: 'freemium', websiteUrl: 'https://www.descript.com', tags: ['podcast', 'video', 'editing'] },
  { name: 'ElevenLabs', slug: 'elevenlabs', category: 'video-audio', pricing: 'freemium', websiteUrl: 'https://elevenlabs.io', tags: ['audio', 'voice', 'api'] },
  { name: 'Otter.ai', slug: 'otter-ai', category: 'productivity', pricing: 'freemium', websiteUrl: 'https://otter.ai', tags: ['meetings', 'notes', 'students'] },
  { name: 'Zapier AI', slug: 'zapier-ai', category: 'automation', pricing: 'freemium', websiteUrl: 'https://zapier.com/ai', tags: ['automation', 'no-code', 'workflows'] },
  { name: 'Make', slug: 'make', category: 'automation', pricing: 'freemium', websiteUrl: 'https://www.make.com', tags: ['automation', 'integrations', 'workflow'] },
  { name: 'n8n', slug: 'n8n', category: 'automation', pricing: 'freemium', websiteUrl: 'https://n8n.io', tags: ['automation', 'open-source', 'developer'] },
  { name: 'Khanmigo', slug: 'khanmigo', category: 'education', pricing: 'paid', websiteUrl: 'https://www.khanacademy.org/khan-labs', tags: ['students', 'teachers', 'learning'] },
  { name: 'Quizlet Q-Chat', slug: 'quizlet-q-chat', category: 'education', pricing: 'freemium', websiteUrl: 'https://quizlet.com', tags: ['students', 'study', 'revision'] },
  { name: 'Wolfram Alpha AI', slug: 'wolfram-alpha-ai', category: 'education', pricing: 'freemium', websiteUrl: 'https://www.wolframalpha.com', tags: ['stem', 'students', 'math'] },
  { name: 'Intercom Fin', slug: 'intercom-fin', category: 'customer-support', pricing: 'paid', websiteUrl: 'https://www.intercom.com/fin', tags: ['support', 'chatbot', 'saas'] },
  { name: 'Zendesk AI', slug: 'zendesk-ai', category: 'customer-support', pricing: 'paid', websiteUrl: 'https://www.zendesk.com', tags: ['support', 'tickets', 'enterprise'] },
  { name: 'Tidio AI', slug: 'tidio-ai', category: 'customer-support', pricing: 'freemium', websiteUrl: 'https://www.tidio.com', tags: ['support', 'ecommerce', 'chatbot'] },
  { name: 'Rows AI', slug: 'rows-ai', category: 'data-analytics', pricing: 'freemium', websiteUrl: 'https://rows.com/ai', tags: ['spreadsheets', 'analytics', 'reporting'] },
]

export const tools: Tool[] = seeds.map((seed, index) => ({
  ...seed,
  shortDescription: `${seed.name} helps teams in ${seed.category.replace('-', ' ')} workflows.`,
  fullDescription: `${seed.name} is used to speed up repetitive work, improve output quality, and reduce manual effort for ${seed.category.replace('-', ' ')} tasks.`,
  features: ['Fast setup', 'Workflow templates', 'Team collaboration'],
  pros: ['Easy to adopt', 'Good time-to-value', 'Active product updates'],
  cons: ['Advanced features can require paid plans', 'Output quality depends on prompt quality'],
  rating: Number((4 + ((index % 8) + 1) / 10).toFixed(1)),
  featured: index % 4 === 0,
  updatedAt: `2026-03-${String((index % 28) + 1).padStart(2, '0')}`,
}))
