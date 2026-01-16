import Fuse from 'fuse.js';
import type { Doc, LearningItem, Part, Product } from './types';

export type SearchType = 'product' | 'part' | 'document' | 'learning';

export type SearchItem = {
  type: SearchType;
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  keywords: string[];
  meta?: Record<string, string>;
};

export function buildSearchItems(args: {
  products: Product[];
  parts: Part[];
  docs: Doc[];
  learning: LearningItem[];
}): SearchItem[] {
  const { products, parts, docs, learning } = args;

  const productItems: SearchItem[] = products.map((p) => ({
    type: 'product',
    id: p.id,
    title: p.name,
    subtitle: p.shortDescription,
    href: `/products/${p.category}/${p.slug}`,
    keywords: [...(p.tags ?? []), p.category, ...Object.values(p.specs ?? {})].filter(Boolean) as string[],
    meta: { category: p.category }
  }));

  const partItems: SearchItem[] = parts.map((pt) => ({
    type: 'part',
    id: pt.id,
    title: `${pt.partNumber} — ${pt.name}`,
    subtitle: pt.sku ? `SKU: ${pt.sku}` : undefined,
    href: `/parts/${pt.slug}`,
    keywords: [
      pt.partNumber,
      pt.sku ?? '',
      ...(pt.synonyms ?? []),
      ...(pt.crossRefs ?? []),
      ...(pt.fitmentTags ?? []),
      ...Object.values(pt.specs ?? {})
    ].filter(Boolean),
    meta: { partNumber: pt.partNumber }
  }));

  const docItems: SearchItem[] = docs.map((d) => ({
    type: 'document',
    id: d.id,
    title: d.title,
    subtitle: `${d.docType.toUpperCase()}${d.version ? ` • v${d.version}` : ''}${d.date ? ` • ${d.date}` : ''}`,
    href: d.url,
    keywords: [d.docType, d.version ?? '', ...(d.relatedPartNumbers ?? [])].filter(Boolean),
    meta: { docType: d.docType }
  }));

  const learningItems: SearchItem[] = learning.map((l) => ({
    type: 'learning',
    id: l.id,
    title: l.title,
    subtitle: `${l.format.toUpperCase()}${l.duration ? ` • ${l.duration}` : ''}`,
    href: `/marbles-u/${l.slug}`,
    keywords: [...(l.topics ?? []), l.format].filter(Boolean),
    meta: { format: l.format }
  }));

  return [...productItems, ...partItems, ...docItems, ...learningItems];
}

export function createFuse(items: SearchItem[]): Fuse<SearchItem> {
  return new Fuse(items, {
    includeScore: true,
    threshold: 0.35,
    ignoreLocation: true,
    keys: [
      { name: 'title', weight: 0.5 },
      { name: 'keywords', weight: 0.35 },
      { name: 'subtitle', weight: 0.15 }
    ]
  });
}
