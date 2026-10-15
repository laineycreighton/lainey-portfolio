# Lainey Creighton portfolio

React and Vite, deployed on Netlify. All page text lives in `src/data`, so you can update content without touching layout code.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Where to edit what

| To change | Edit |
|---|---|
| Headline, stats, email, LinkedIn, headshot, credentials | `src/data/site.js` |
| Case studies (add, edit, reorder) | `src/data/caseStudies.js` |
| Room and event photos | `src/data/gallery.js`, files in `public/images/rooms` |
| How I run programs page | `src/data/process.js` |
| Capabilities page | `src/data/capabilities.js` |
| About page | `src/data/about.js` |
| Accent color and fonts | `src/styles/theme.css` |
| Link preview image (1200 x 630) | `public/images/og-image.jpg` |

## Images

| Image | Size | Folder |
|---|---|---|
| Case study card | 1200 x 800 px (3:2) | `public/images/work` |
| Case study page hero | 1600 x 900 px (16:9) | `public/images/work` |
| Gallery, landscape | 1600 x 1067 px (3:2) | `public/images/rooms` |
| Gallery, portrait | 1067 x 1600 px (2:3) | `public/images/rooms` |
| Headshot | 1200 x 1600 px (3:4) | `public/images` |

Use JPG or WebP and keep each file under about 400 KB. Any slot without a file shows a marked placeholder with its ideal size.

Privacy rules: no employer or client names, no identifiable guests, no client logos on screens or signage.

## Adding a case study

1. Copy an existing block in `src/data/caseStudies.js`.
2. Give it a new `slug` (this becomes the address, `/work/your-slug`).
3. Fill in the card fields and the `detail` block.
4. Diagrams are optional. Existing ones live in `src/components/diagrams`.

The build creates the page and its link preview automatically.

## Deploy

See `DEPLOY.md`.
