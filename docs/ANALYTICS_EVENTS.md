# Analytics-ready events (v1)

Events are emitted via `lib/analytics.ts`.

By default they:
1) `console.log()` in dev
2) push to `window.dataLayer` (GA4 / GTM compatible)

## Events
- `search_submit`
  - payload: `{ query, filters: { type }, resultsCount }`
- `search_result_click`
  - payload: `{ type, id, position }`
- `download_click`
  - payload: `{ docId, docType, productId?, partNumber? }`
- `where_to_buy_click`
  - payload: `{ partnerId, contextPage, productId? }`
- `contact_submit`
  - payload: `{ formType, topic }`

## Where events are wired
- Search: `components/SearchClient.tsx`
- Downloads: `components/DownloadsList.tsx`
- Where to buy: `components/WhereToBuyModule.tsx`, `components/WhereToBuyListClient.tsx`
- Contact: `components/ContactForm.tsx`
