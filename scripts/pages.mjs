// Runs after `vite build`. Writes a copy of index.html for every page with its own
// title, description, and link preview tags, so LinkedIn, Slack, and search engines
// see the right card for each URL. Also writes sitemap.xml and robots.txt.
//
// You don't need to edit this file. Page text comes from the data files in src/data.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { site } from '../src/data/site.js'
import { caseStudies } from '../src/data/caseStudies.js'
import { processIntro } from '../src/data/process.js'
import { galleryIntro } from '../src/data/gallery.js'
import { capabilitiesIntro } from '../src/data/capabilities.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

// Netlify sets URL to the live address during its build. Locally, site.url is used.
const baseUrl = (process.env.URL || site.url).replace(/\/$/, '')
const defaultImage = '/images/og-image.jpg'
const suffix = `${site.name} | ${site.role}`

const pages = [
  {
    path: '/',
    title: suffix,
    description: site.headline,
  },
  {
    path: '/process',
    title: `${processIntro.title} | ${site.name}`,
    description: processIntro.lede,
  },
  {
    path: '/rooms',
    title: `${galleryIntro.title} | ${site.name}`,
    description: galleryIntro.lede,
  },
  {
    path: '/capabilities',
    title: `${capabilitiesIntro.title} | ${site.name}`,
    description: 'Program management, AV and technical systems, software, and leadership.',
  },
  {
    path: '/about',
    title: `About | ${site.name}`,
    description: 'The person behind the projects.',
  },
  {
    path: '/contact',
    title: `Contact | ${site.name}`,
    description: 'Questions about any of this work? I’m happy to walk through it.',
  },
  ...caseStudies.map((c) => ({
    path: `/work/${c.slug}`,
    title: `${c.title} | ${site.name}`,
    description: c.summary,
    image: c.detail?.heroImage || c.image || '',
  })),
]

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function headFor(page) {
  const url = baseUrl + (page.path === '/' ? '/' : page.path)
  const image = baseUrl + (page.image || defaultImage)
  return [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ].join('\n    ')
}

const template = readFileSync(join(dist, 'index.html'), 'utf8')
// Strip the default tags from index.html; each page gets its own set.
const stripped = template
  .replace(/<title>[\s\S]*?<\/title>\s*/, '')
  .replace(/<meta\s+name="description"[\s\S]*?\/>\s*/, '')
  .replace(/<meta\s+(property="og:|name="twitter:)[\s\S]*?\/>\s*/g, '')
  .replace(/<!-- Link previews[\s\S]*?-->\s*/, '')

for (const page of pages) {
  const html = stripped.replace('<meta name="viewport"', `${headFor(page)}\n    <meta name="viewport"`)
  const out = page.path === '/' ? join(dist, 'index.html') : join(dist, page.path, 'index.html')
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html)
}

const today = new Date().toISOString().slice(0, 10)
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((p) => `  <url><loc>${baseUrl}${p.path === '/' ? '/' : p.path}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`,
)
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`)

console.log(`Wrote ${pages.length} pages with link preview tags for ${baseUrl}`)
