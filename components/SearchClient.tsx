'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { track } from '@/lib/analytics';

type SearchType = 'all' | 'product' | 'part' | 'document' | 'learning';

type SearchResult = {
  type: 'product' | 'part' | 'document' | 'learning';
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  score?: number;
};

export function SearchClient({
  defaultType = 'all',
  initialQuery = '',
  compact = false,
  placeholder = 'Search part #, SKU, product, document title...'
}: {
  defaultType?: SearchType;
  initialQuery?: string;
  compact?: boolean;
  placeholder?: string;
}) {
  const [q, setQ] = useState(initialQuery);
  const [type, setType] = useState<SearchType>(defaultType);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({ product: 0, part: 0, document: 0, learning: 0 });

  const tabs: { key: SearchType; label: string }[] = useMemo(
    () => [
      { key: 'all', label: 'All' },
      { key: 'part', label: 'Parts' },
      { key: 'product', label: 'Products' },
      { key: 'document', label: 'Documents' },
      { key: 'learning', label: 'Learning' }
    ],
    []
  );

  useEffect(() => {
    let cancelled = false;

    async function run() {
      setLoading(true);
      try {
        const url = `/api/search?q=${encodeURIComponent(q)}&type=${encodeURIComponent(type)}`;
        const res = await fetch(url);
        const data = await res.json();
        if (cancelled) return;
        setResults(data.results ?? []);
        setCounts(data.counts ?? counts);
        track({ name: 'search_submit', payload: { query: q, filters: { type }, resultsCount: (data.results ?? []).length } });
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    // Don’t auto-search on empty query unless compact (Parts hub wants a blank state)
    if (!q.trim()) {
      setResults([]);
      setCounts({ product: 0, part: 0, document: 0, learning: 0 });
      return;
    }

    const t = setTimeout(run, 180);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, type]);

  return (
    <div className={compact ? '' : 'rounded-xl border border-line bg-white/40 p-4'}>
      <div className={compact ? 'grid gap-3' : 'grid gap-4'}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full">
            <label className="sr-only" htmlFor="global-search">Search</label>
            <input
              id="global-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={placeholder}
              className="w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-sm outline-none focus:border-orange"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setType(t.key)}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                type === t.key ? 'border-orange bg-orange text-white' : 'border-line bg-bg/60 text-charcoal hover:bg-white/50'
              }`}
            >
              {t.label}
              {t.key !== 'all' ? (
                <span className="ml-2 text-[10px] opacity-80">{counts[t.key] ?? 0}</span>
              ) : null}
            </button>
          ))}
        </div>

        <div className="grid gap-2">
          {loading ? <div className="text-sm text-charcoal/70">Searching…</div> : null}

          {!loading && q.trim() && results.length === 0 ? (
            <div className="text-sm text-charcoal/70">No results. Try a part number, SKU, or document title.</div>
          ) : null}

          {results.map((r, idx) => (
            <Link
              key={`${r.type}-${r.id}-${idx}`}
              href={r.href}
              className="rounded-xl border border-line bg-bg/60 p-3 hover:bg-white/60"
              onClick={() => track({ name: 'search_result_click', payload: { type: r.type, id: r.id, position: idx } })}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">{r.title}</div>
                  {r.subtitle ? <div className="mt-1 text-xs text-charcoal/70">{r.subtitle}</div> : null}
                </div>
                <div className="rounded-full border border-line bg-white/40 px-2 py-1 text-[10px] font-semibold text-charcoal">
                  {r.type.toUpperCase()}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
