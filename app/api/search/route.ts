import { NextResponse } from 'next/server';
import { getAllDocs, getAllLearning, getAllParts, getAllProducts } from '@/lib/content';
import { buildSearchItems, createFuse, type SearchType } from '@/lib/search';

export const runtime = 'nodejs';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') ?? '').trim();
  const type = (searchParams.get('type') ?? 'all').trim();

  const [products, parts, docs, learning] = await Promise.all([
    getAllProducts(),
    getAllParts(),
    getAllDocs(),
    getAllLearning()
  ]);

  const items = buildSearchItems({ products, parts, docs, learning });
  const fuse = createFuse(items);

  const results = q
    ? fuse.search(q).slice(0, 30).map((r) => ({ ...r.item, score: r.score }))
    : items.slice(0, 30).map((i) => ({ ...i, score: undefined }));

  const filtered = type === 'all'
    ? results
    : results.filter((r) => r.type === (type as SearchType));

  const counts = {
    product: results.filter((r) => r.type === 'product').length,
    part: results.filter((r) => r.type === 'part').length,
    document: results.filter((r) => r.type === 'document').length,
    learning: results.filter((r) => r.type === 'learning').length
  };

  return NextResponse.json({ query: q, type, counts, results: filtered });
}
