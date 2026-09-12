# Six Emotions | Stories in Motion

A mobile-first visual brochure for a performance built around six negative emotions: Krodha, Lobha, Kama, Matsara, Moha, and Mada.

## Design

- One continuous, scrollable brochure with six full-screen-ish story sections.
- Each emotion has its own color palette.
- Indian-inspired visual language using rangoli/mandala geometry, Sanskrit labels, ornamental dividers, and warm paper-like textures.
- Responsive layout: single-column on mobile, editorial two-column layout on larger screens.
- No image assets or external APIs required. Decorative motifs are generated with CSS, so the repo is lightweight and easy to deploy.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The project requires Node.js `20.19+` (or `22.12+`). Use `npm ci` for a reproducible install.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Vercel will use the checked-in `vercel.json` configuration.
4. Build command: `npm run build`
5. Output directory: `dist`

No environment variables are required.

## Content

The story text is based on the supplied six-emotion document. It is kept as story copy rather than rewritten into summaries so the brochure can function as a reading piece.
