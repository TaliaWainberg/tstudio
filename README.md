# T° Studio — website

Marketing site for T° Studio. Astro (static) + plain CSS, Hebrew at `/` (RTL) and English at `/en/`.
The approved design is `design/reference.html`; this site rebuilds it.

## Run it

```bash
npm install
cp .env.example .env   # fill in SITE_URL and, if needed, the form endpoint
npm run dev            # http://localhost:4321  (Hebrew)  ·  /en/ (English)
npm run build          # output in dist/
npm run preview        # serve the built site
```

Node 22.12 or newer.

## Where things live

| What | Where |
| --- | --- |
| All copy (Hebrew / English) | `src/i18n/he.json`, `src/i18n/en.json` |
| Projects in "Selected work" | `src/content/projects/*.md` |
| Colors, type, layout | `src/styles/global.css` (tokens at the top) |
| Sections | `src/components/*.astro`, assembled in `Home.astro` |
| Accessibility statement | `src/components/A11yPage.astro` (text in the i18n files, contact details in `A11Y` in `src/i18n/index.ts`) |
| Hero photo | `src/assets/card-photo-hires.jpg` (AVIF/WebP generated at build) |
| Favicon, OG image | `public/favicon.svg`, `public/og.jpg` (1200×630), `public/apple-touch-icon.png` |

## Adding a project

Create `src/content/projects/<slug>.md`:

```md
---
title: PROJECT NAME
order: 2                      # lower shows first
kind: Website
description:
  he: "תיאור קצר בעברית"
  en: "Short English description"
image: ./project-name.jpg     # optional, put the screenshot next to the .md file (16:10 works best)
imageAlt:
  he: "תיאור התמונה"
  en: "Image description"
url: https://example.com      # optional, adds a "Visit site" link
---
```

Without `image`, the card shows the neutral browser frame with the project name.

## Accessibility

Built to Israeli Standard IS 5568 (WCAG 2.0 AA, as required by the 2013 service accessibility
regulations) and to WCAG 2.2 AA. The accessibility statement is at `/accessibility/` and
`/en/accessibility/`, linked from the footer on every page.

- Update the date in `A11Y.updated` (`src/i18n/index.ts`) whenever the site changes meaningfully.
- No accessibility overlay/widget is used or needed; the adjustments are in the code.
- Checked with axe-core (0 violations) and Lighthouse (accessibility 100) on all pages, keyboard-only
  navigation, 320px width and WCAG text-spacing overrides.
- When adding copy: mark English text inside Hebrew with `lang="en"` (and `dir="ltr"`), keep images'
  alt text meaningful, and use `ExtLink` for links that open in a new tab.

## Contact form

The form posts to [Web3Forms](https://web3forms.com), shows inline success/error messages and has a
honeypot field. The Instagram link stays next to the form as a second option.

1. On web3forms.com, enter the email that should receive messages. The access key is sent to that inbox.
2. Set it as `PUBLIC_FORM_ACCESS_KEY` in `.env` and in Vercel's environment variables.

To use Formspree instead, set `PUBLIC_FORM_ENDPOINT=https://formspree.io/f/<id>`.

## Deploy (Vercel)

`vercel.json` is included (build `npm run build`, output `dist`, long caching for `/_astro/*`).

1. Push the project to GitHub.
2. Vercel → *Add New → Project* → import the repo (framework Astro is detected automatically).
3. *Settings → Environment Variables*: add `SITE_URL` and `PUBLIC_FORM_ACCESS_KEY`.
4. Deploy, then add the domain under *Settings → Domains* and redeploy once so canonical URLs,
   hreflang, the sitemap (`/sitemap-index.xml`) and `robots.txt` use it.
