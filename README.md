# Marble Arms v1 (Next.js)

Heritage-forward site starter (no e-commerce) with:
- Products → categories → product detail (specs, downloads, compatibility, where-to-buy)
- Parts & Specs hub (global search across products/parts/docs/learning)
- Where to Buy (partner list + dealer locator-ready placeholder)
- Analytics event hooks (search, downloads, where-to-buy, contact submits)

## Run locally

```bash
npm install
npm run dev
```

## Update content (v1)
Edit JSON in:
- `content/products/*.json`
- `content/parts/*.json`
- `content/documents/*.json`
- `content/partners/*.json`
- `content/learning/*.json`

## Swap branding
- Replace `public/brand/logo.svg` with your actual MA logo
- Replace placeholder images with real photography, keeping meaningful `alt` text

## Search
Search is served by `GET /api/search?q=...&type=...` using Fuse.js over the content files.

## Analytics
Event hooks are in `lib/analytics.ts`. Wire to GA4, Plausible, or PostHog by implementing `track()`.
