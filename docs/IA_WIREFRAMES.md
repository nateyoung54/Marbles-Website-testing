# Information Architecture + Wireframe Outlines (v1)

## Top navigation (global)
- **Products** (`/products`)
- **Parts & Specs** (`/parts`)
- **Where to Buy** (`/where-to-buy`)  ← prominent CTA
- **About** (`/about`)
- **Marbles U** (`/marbles-u`)
- **Support / Contact** (`/support`)

Header utilities:
- **Search** (`/search`)
- **Dealer Portal** (`/dealer-portal`) (placeholder)

Footer includes sitemap, social, and legal.

---

## Sitemap (v1)
### Core
- `/` Home
- `/products` Products hub
- `/products/[category]` Category page
- `/products/[category]/[slug]` Product detail
- `/parts` Parts & Specs hub (search-first)
- `/parts/[slug]` Part detail (part # / SKU)
- `/documents` Document library
- `/where-to-buy` Partner list + dealer locator-ready
- `/about` About hub
  - `/about/history`
  - `/about/facility`
  - `/about/values`
  - `/about/leadership`
- `/marbles-u` Learning hub (filterable)
- `/marbles-u/[slug]` Learning detail
- `/support` Support hub
  - `/support/faq`
  - `/support/warranty`
- `/contact` Contact hub
  - `/contact/consumer`
  - `/contact/oem-engineering`
  - `/contact/distributor`
  - `/contact/careers`
- `/dealer-portal` Placeholder
- `/legal` Placeholder
- `/privacy` Placeholder

---

## Page-by-page wireframe outlines

### Home (`/`)
1) **Hero**
   - Real photo/video placeholder
   - 1-sentence value proposition (legacy + quality + engineering)
   - Primary CTA: **Parts & Specs**
   - Secondary CTA: **Where to Buy**
2) **Proof strip**
   - Made in USA • Since 1892 • Engineering support • Partner placeholders
3) **Three-panel**
   - Products preview (top items)
   - Parts & Specs preview (search prompt + example queries)
   - Marbles U preview (featured video/article)
4) **Heritage teaser**
   - Timeline snapshot + facility photography
5) **Support + Contact**
   - FAQ / Manuals
   - OEM/Engineering inquiry, Distributor inquiry, Careers
6) Footer

### Products hub (`/products`)
- Products hero (real photography)
- Category sections with product cards
- “In use” photography guidance (via placeholders)

### Category (`/products/[category]`)
- Category hero
- Product grid

### Product detail (`/products/[category]/[slug]`)
- Product gallery (real images)
- Description + bullets
- **Specs block** (sticky on desktop)
- **Where to Buy module** (sticky on desktop)
- **Compatibility/Fitment notes** + Contact Engineering CTA
- **Downloads** (PDF) with tracked clicks
- Related products
- Support shortcuts

### Parts & Specs hub (`/parts`)
- Search-first UI
- Filters/tabs: All / Parts / Products / Documents / Learning
- Results list with type chips
- “Need engineering help?” CTA

### Part detail (`/parts/[slug]`)
- Part number + SKU
- Specs + fitment
- Downloads
- Where to buy links

### Where to Buy (`/where-to-buy`)
- Retailers list (outbound links)
- Distributors list (outbound links)
- Dealer locator-ready module (ZIP input placeholder)

### About (`/about`)
- Heritage summary + proof
- Links to: History, Facility, Values, Leadership

### Marbles U (`/marbles-u`)
- Filterable hub
  - Search
  - Filter by format + topic
- Card grid linking to item pages

### Support (`/support`)
- FAQ
- Manuals/downloads
- Warranty placeholder
- Contact

### Contact (`/contact` + subpages)
- Audience split: consumer / OEM-engineering / distributor / careers
- Simple form (no backend in v1) with analytics event
