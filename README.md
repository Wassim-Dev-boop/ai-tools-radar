# AI Tools Radar

Site React + Vite + TypeScript ultra-léger, orienté SEO et prêt pour AdSense.

## Arborescence du projet

```txt
.
├── .env.example
├── README.md
├── eslint.config.js
├── index.html
├── netlify.toml
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.svg
│   ├── og-cover.svg
│   ├── robots.txt               (généré)
│   └── sitemap.xml              (généré)
├── scripts
│   └── generate-sitemap.mjs
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── content
│   │   │   ├── ArticleCard.tsx
│   │   │   ├── CategoryBlocks.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   ├── NewsletterBox.tsx
│   │   │   ├── RelatedArticles.tsx
│   │   │   └── RelatedTools.tsx
│   │   ├── layout
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── SiteLayout.tsx
│   │   ├── seo
│   │   │   └── SeoHead.tsx
│   │   ├── tools
│   │   │   ├── ToolCard.tsx
│   │   │   └── ToolFilters.tsx
│   │   └── ui
│   │       ├── AdSlot.tsx
│   │       └── Breadcrumbs.tsx
│   ├── config
│   │   └── site.ts
│   ├── data
│   │   ├── articles.ts
│   │   ├── categories.ts
│   │   ├── content-plan.ts
│   │   └── tools.ts
│   ├── index.css
│   ├── main.tsx
│   ├── pages
│   │   ├── AboutPage.tsx
│   │   ├── BlogArticlePage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── CategoryPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── ToolDetailPage.tsx
│   │   ├── ToolsPage.tsx
│   │   └── legal
│   │       ├── CookiePolicyPage.tsx
│   │       ├── DisclaimerPage.tsx
│   │       ├── LegalTemplate.tsx
│   │       ├── PrivacyPolicyPage.tsx
│   │       └── TermsOfServicePage.tsx
│   ├── types.ts
│   └── utils
│       ├── seo.ts
│       └── tools.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
```

## Objectif business couvert

- Site léger et rapide (Vite + React + lazy loading des pages)
- Architecture SEO-friendly (meta dynamiques, canonical, OG/Twitter, JSON-LD)
- Compatible AdSense (pages légales, navigation claire, emplacements pub modérés)
- Extensible (données séparées, composants réutilisables, routes propres)
- Coût bas (déploiement Vercel/Netlify gratuits)

## Fonctionnalités implémentées

- Homepage SEO avec:
  - FAQ
  - How we review tools
  - Why trust us
  - Top categories
  - Latest guides
- Listing global des outils:
  - recherche
  - filtres catégorie/prix
  - tri (rating/récence/nom)
- Pages catégories SEO
- Pages détail outil avec:
  - features, pros/cons, rating
  - compare alternatives
  - related tools
  - related articles
- Blog listing + pages article
- About + Contact
- Pages légales AdSense:
  - Privacy Policy
  - Terms of Service
  - Cookie Policy
  - Disclaimer
- Composant AdSlot réutilisable avec activation par variable d'environnement
- Sitemap + robots générés automatiquement

## Contenu initial intégré

- 10 catégories dans `src/data/categories.ts`
- 30 outils dans `src/data/tools.ts`
- 20 idées d'articles SEO dans `src/data/content-plan.ts`
- Articles de démonstration réalistes dans `src/data/articles.ts`

## Installation

```bash
npm install
```

## Variables d'environnement

Copie `.env.example` vers `.env` puis adapte:

```env
VITE_SITE_URL=https://www.aitoolsradar.com
VITE_ENABLE_ADS=false
VITE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
```

## Lancement local

```bash
npm run dev
```

URL locale par défaut: `http://localhost:5173`

## Build production

```bash
npm run build
```

Ce build exécute automatiquement:

1. `npm run generate:sitemap`
2. `tsc -b`
3. `vite build`

## Preview local du build

```bash
npm run preview
```

## Déploiement Vercel (prioritaire)

1. Push le repo sur GitHub.
2. Va sur Vercel et clique **Add New Project**.
3. Import le repo.
4. Vercel détecte Vite automatiquement.
5. Configure les variables:
   - `VITE_SITE_URL`
   - `VITE_ENABLE_ADS`
   - `VITE_ADSENSE_CLIENT`
6. Déploie.
7. Après déploiement, vérifie:
   - `/sitemap.xml`
   - `/robots.txt`

`vercel.json` inclut la réécriture SPA pour supporter les routes React côté client.

## Alternative Netlify

1. Connecte le repo sur Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Définis les mêmes variables d'environnement.
5. Déploie.

`netlify.toml` inclut la redirection SPA `/* -> /index.html`.

## Intégration Google AdSense

### 1) Activer les emplacements pub dans l'app

Définis:

```env
VITE_ENABLE_ADS=true
```

Le composant `AdSlot` s'affiche alors aux endroits prévus:

- Listing outils
- Articles / pages détail
- Homepage

### 2) Ajouter le script AdSense

Dans `index.html`, un bloc commenté est déjà prêt. Remplace:

`ca-pub-XXXXXXXXXXXXXXXX`

par ton identifiant réel, puis décommente.

### 3) Respect policy

- Garder une densité pub raisonnable
- Ne pas forcer le clic
- Laisser une UX claire et lisible
- Conserver les pages légales et la page contact

## Google Search Console

1. Ouvre Search Console.
2. Ajoute la propriété de ton domaine.
3. Méthode conseillée: DNS TXT chez ton registrar.
4. Vérifie la propriété.
5. Va dans **Sitemaps** et soumets:

`https://ton-domaine.com/sitemap.xml`

6. Demande l'indexation de pages clés:
   - `/`
   - `/tools`
   - catégories principales
   - articles stratégiques

## SEO technique intégré

- Meta title/description par page
- Open Graph + Twitter cards
- Canonical URLs
- JSON-LD schema.org (WebSite, FAQPage, CollectionPage, Article, SoftwareApplication)
- Breadcrumbs
- URLs propres:
  - `/tools/{slug}`
  - `/categories/{slug}`
  - `/blog/{slug}`

## Check-list finale "prêt pour AdSense"

- [x] Navigation propre et claire
- [x] Pages légales complètes
- [x] Page contact
- [x] Contenu lisible et structuré
- [x] Emplacements pub modérés via composant réutilisable
- [x] Activation/désactivation pub via variable d'environnement
- [x] Aucun contournement de policy

## Check-list finale "prêt pour SEO"

- [x] Home optimisée
- [x] Pages catégories
- [x] Pages détail outil
- [x] Blog orienté longue traîne
- [x] Maillage interne (related tools/articles)
- [x] Breadcrumbs
- [x] FAQ
- [x] Sitemap + robots
- [x] Meta/OG/Twitter/canonical
- [x] JSON-LD

## Version future (backend/headless CMS)

### Option A: Supabase

- Tables:
  - `tools`
  - `categories`
  - `articles`
  - `tool_reviews`
- Stockage média: Supabase Storage
- API: Supabase client + RLS
- Génération statique:
  - soit build-time fetch
  - soit ISR (si migration vers Next.js)

### Option B: Headless CMS (Strapi / Sanity / Contentful)

- `tools` et `articles` éditables sans code
- workflow éditorial multi-auteur
- webhook de rebuild Vercel/Netlify

### Plan de migration recommandé

1. Garder la structure de composants actuelle.
2. Remplacer progressivement `src/data/*.ts` par un service `src/services/api.ts`.
3. Conserver les types TypeScript existants.
4. Ajouter cache HTTP + fallback local pour robustesse.
5. Passer éventuellement à un rendu SSR/SSG avancé si besoin SEO supplémentaire.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
