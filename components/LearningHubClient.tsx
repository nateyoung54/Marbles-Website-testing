'use client';

import { useMemo, useState } from 'react';
import type { LearningItem } from '@/lib/types';
import { ImagePlaceholder } from './ImagePlaceholder';

export function LearningHubClient({ items }: { items: LearningItem[] }) {
  const [q, setQ] = useState('');
  const [format, setFormat] = useState<'all' | LearningItem['format']>('all');
  const [topic, setTopic] = useState('all');

  const formats = useMemo(() => {
    const s = new Set(items.map((i) => i.format));
    return Array.from(s);
  }, [items]);

  const topics = useMemo(() => {
    const s = new Set<string>();
    items.forEach((i) => (i.topics ?? []).forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, [items]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter((i) => {
      if (format !== 'all' && i.format !== format) return false;
      if (topic !== 'all' && !(i.topics ?? []).includes(topic)) return false;
      if (!query) return true;
      const hay = `${i.title} ${i.excerpt ?? ''} ${(i.topics ?? []).join(' ')}`.toLowerCase();
      return hay.includes(query);
    });
  }, [items, q, format, topic]);

  return (
    <div>
      <div className="mt-6 rounded-xl border border-line bg-white/40 p-4">
        <div className="grid gap-3 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <label className="text-xs font-semibold text-charcoal/70" htmlFor="learn-search">Search</label>
            <input
              id="learn-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search videos, articles, podcasts…"
              className="mt-1 w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-sm outline-none focus:border-orange"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-charcoal/70" htmlFor="learn-format">Format</label>
            <select
              id="learn-format"
              value={format}
              onChange={(e) => setFormat(e.target.value as any)}
              className="mt-1 w-full rounded-xl border border-line bg-bg/60 px-3 py-3 text-sm"
            >
              <option value="all">All</option>
              {formats.map((f) => (
                <option key={f} value={f}>{f.toUpperCase()}</option>
              ))}
            </select>
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-charcoal/70" htmlFor="learn-topic">Topic</label>
            <select
              id="learn-topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-1 w-full rounded-xl border border-line bg-bg/60 px-3 py-3 text-sm"
            >
              <option value="all">All</option>
              {topics.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-3 text-xs text-charcoal/70">Showing {filtered.length} of {items.length}</div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((l) => (
          <a key={l.id} href={`/marbles-u/${l.slug}`} className="rounded-xl border border-line bg-white/40 p-4 hover:bg-white/60">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-line bg-bg/60">
              <ImagePlaceholder label="Learning thumbnail (real)" className="absolute inset-0" />
            </div>
            <div className="mt-3 text-sm font-semibold">{l.title}</div>
            <div className="mt-1 text-xs text-charcoal/70">
              {l.format.toUpperCase()}
              {l.duration ? ` • ${l.duration}` : ''}
              {(l.topics ?? []).length ? ` • ${(l.topics ?? []).slice(0, 2).join(' • ')}` : ''}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
