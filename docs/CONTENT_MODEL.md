# Content Model (v1)

This starter uses **JSON files** under `/content/` (no CMS required). Swap to a CMS later by mapping these fields.

## Where to edit content
- Products: `content/products/*.json`
- Parts: `content/parts/*.json`
- Documents/manuals: `content/documents/*.json`
- Partners: `content/partners/*.json`
- Learning: `content/learning/*.json`

---

## Product schema (example)
Location: `content/products/*.json`

Required:
- `id` (string)
- `name` (string)
- `slug` (string)
- `category` (string)
- `shortDescription` (string)
- `specs` (record of spec label → value)

Optional:
- `heroImages` (array of { `src`, `alt` })
- `bullets` (array)
- `compatibilityNotes` (string)
- `downloads` (array of { `id`, `title`, `type`, `url`, `version?`, `date?`, `size?` })
- `whereToBuyPartnerIds` (array of partner ids)
- `relatedProductIds` (array of product ids)

---

## Part schema
Location: `content/parts/*.json`

Required:
- `id`
- `partNumber`
- `slug`
- `title`

Optional:
- `sku`
- `summary`
- `specs` (record)
- `fitment` (string)
- `downloads` (array)
- `whereToBuyPartnerIds` (array)

---

## Document schema
Location: `content/documents/*.json`

Required:
- `id`
- `title`
- `slug`
- `type` (e.g., `manual`, `spec-sheet`, `drawing`)
- `url`

Optional:
- `tags` (array)
- `version`, `date`, `size`

---

## Partner schema
Location: `content/partners/*.json`

Required:
- `id`
- `name`
- `type` (`retailer` | `distributor`)
- `url`

Optional:
- `regions` (array)

---

## Learning schema
Location: `content/learning/*.json`

Required:
- `id`
- `title`
- `slug`
- `format` (`video` | `article` | `podcast`)

Optional:
- `excerpt`
- `duration`
- `topics` (array)
- `url` (external link or internal embed in v2)
