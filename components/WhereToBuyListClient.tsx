'use client';

import { track } from '@/lib/analytics';
import type { Partner } from '@/lib/types';

export function WhereToBuyListClient({
  partners,
  contextPage
}: {
  partners: Partner[];
  contextPage: string;
}) {
  if (!partners.length) {
    return <div className="text-sm text-charcoal/70">Add partners in <code>/content/partners</code>.</div>;
  }

  return (
    <div className="mt-4 grid gap-2">
      {partners.map((p) => (
        <a
          key={p.id}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-line bg-bg/60 p-3 hover:bg-white/60"
          onClick={() => track({ name: 'where_to_buy_click', payload: { partnerId: p.id, contextPage } })}
        >
          <div className="text-sm font-semibold">{p.name}</div>
          <div className="mt-1 text-xs text-charcoal/70">
            {p.regions?.length ? p.regions.join(', ') : 'Region TBD'}
          </div>
        </a>
      ))}
    </div>
  );
}
