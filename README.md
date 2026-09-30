# Catalina Pizza & Chicken

One-page static replacement for the former WordPress/Elementor website at
`catalinapizzaandchicken.com`.

## Local development

```bash
npm ci
npm run dev
```

The dev server binds to `127.0.0.1` only. Open the exact localhost URL printed
by Next.js.

## Production build and local preview

```bash
npm run typecheck
npm run build
node scripts/verify-export.mjs out
npm run preview
```

The site uses Next.js static export and writes the complete deployable site to
`out/`. No Node server, PHP, WordPress, CMS, or database is required in
production.

## Updating content

- Business details, hours, ordering IDs, external links, menu prices, pickup
  specials, reviews, and gallery metadata: `lib/site.ts`.
- Page sections and structured data: `app/page.tsx`.
- Colours, typography, layout, and responsive rules: `app/globals.css`.
- Original local media: `public/images/`.
- Local-only contact form behavior: `components/ContactForm.tsx`.

The GloriaFood widget script is loaded once. All ordering buttons share the
same verified company and restaurant IDs, and the direct OrderMenu URL remains
available as a fallback.

## Production deployment

Every push to `main` runs `.github/workflows/deploy.yml`. The workflow installs
dependencies, audits and type-checks the project, builds and verifies the static
export, then synchronizes the contents of `out/` to the Catalina CloudPanel
document root. The SSH credential is stored only as an encrypted GitHub Actions
repository secret.
