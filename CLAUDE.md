# T° Studio — website

Marketing site for **T° Studio**, a small studio for websites, branding and visual identity.
Instagram: https://www.instagram.com/____t.studio/

The approved design is in `design/reference.html` (open it in a browser). It is the source of truth
for look, copy and structure. Rebuild it as a real, deployable site. Match it closely; do not
redesign.

## Stack

- **Astro** (static output) + plain CSS (keep the tokens from the reference; no Tailwind needed).
- Two locales with real URLs: `/` = Hebrew (default, `dir="rtl"`, `lang="he"`), `/en/` = English
  (`dir="ltr"`). Language toggle in the header links between the same page in each locale.
  Put all copy in `src/i18n/he.json` and `src/i18n/en.json`.
- Deploy target: Vercel or Netlify (whichever the owner picks). Add the config and a short
  "Deploy" section to the README.

## Design system (from the reference)

- Colors: `--paper #EEE8DD` (page), `--paper-2 #E4DCCD`, `--card #F5F1EA`, `--ink #3F3934`,
  `--ink-soft #6E655D`, `--rule #CFC5B5`, `--neon #D7F52A` (accent, used sparingly),
  `--brown #5A4332` (process line).
- Type: **Jost** for Latin, **Assistant** for Hebrew (Google Fonts, self-host via
  `@fontsource` for speed). Brand voice = small Latin caps, `letter-spacing: .42em`, 13px.
  Headings light (300).
- The neon appears only as a hard offset shadow (`box-shadow: 5px 5px 0 var(--neon)`), like the
  painted edge of the letterpress card, plus the "0.05" number. Keep it that rare.
- Single light theme by design (paper look). No dark mode.
- Logo: `assets/logo.svg` (thin slanted T + small circle). Use it as the favicon too.

## Sections (in order)

1. Sticky header: logo + "T° Studio", nav (Services, Work, Process, Contact), language toggle.
2. Hero: eyebrow "DETAILS MAKE THE DIFFERENCE", H1, lede, primary button "Book an intro call" →
   #contact, secondary link → #work. Image: `assets/card-photo-hires.jpg` (use Astro `<Image>`,
   AVIF/WebP, correct sizes).
3. Services: Websites · Branding · Visual Identity (3 columns → 1 on mobile).
4. Dark band: large neon "0.05" + "seconds… LET'S MAKE THEM COUNT".
5. Selected work: project cards. Currently one project, **MY DREAM STUDIO** (a coach's brand
   website), plus a "The next project could be yours" card → #contact. Make projects data-driven
   (`src/content/projects/*.md` with title, description he/en, image, url) so more can be added.
6. Process "Trust the process": 01 Discover / 02 Concept / 03 Website on a line with dots,
   last dot filled.
7. Contact: name, business, needs (chips: Website / Branding / Visual identity), message.
8. Footer.

## Contact form

The reference fakes sending by copying the message and opening an Instagram DM. On the real site,
submit properly:
- Use a form backend that works on static hosting (Netlify Forms if on Netlify, otherwise
  Formspree/Web3Forms). Leave the endpoint/key in `.env` with a `.env.example`.
- Show inline success and error states (no alerts). Add a honeypot field for spam.
- Keep the Instagram link beside the form as a second option.

## Quality bar

- Lighthouse 95+ on mobile (performance, accessibility, SEO). No layout shift from fonts/images.
- Fully responsive down to 360px, no horizontal scroll. Test RTL and LTR.
- Semantic HTML, visible focus states, `prefers-reduced-motion` respected, labels on every input.
- SEO: per-locale `<title>`/description, `hreflang` alternates, Open Graph image
  (make one 1200×630 from the card photo + "T° Studio"), sitemap, robots.txt.

## Open items: ask the owner, do not invent

- Screenshots + live URL for MY DREAM STUDIO (use a neutral placeholder frame until provided).
- Any additional projects.
- Domain name, and email address that should receive form submissions.
- Whether to add a WhatsApp contact button (needs a phone number).
