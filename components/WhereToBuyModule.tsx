'use client';

import { track } from '@/lib/analytics';
import type { Partner } from '@/lib/types';
import { Button } from './Button';

export function WhereToBuyModule({
  partners,
  context
}: {
  partners: Partner[];
  context: { contextPage: string; productId?: string };
}) {
  return (
    <div className="rounded-xl border border-line bg-white/40 p-4">
      <div className="flex items-center justify-between gap-2">
        <div>
          <div className="text-sm font-semibold">Where to Buy</div>
          <div className="mt-1 text-xs text-charcoal/70">We don’t sell directly. Use trusted partners.</div>
        </div>
        <Button href="/where-to-buy" variant="secondary">All partners</Button>
      </div>

      <div className="mt-4 grid gap-2">
        {partners.length === 0 ? (
          <div className="text-sm text-charcoal/70">Partner list coming soon.</div>
        ) : (
          partners.slice(0, 5).map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-xl border border-line bg-bg/60 p-3 hover:bg-white/60"
              onClick={() =>
                track({
                  name: 'where_to_buy_click',
                  payload: { partnerId: p.id, contextPage: context.contextPage, productId: context.productId }
                })
              }
            >
              <div>
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="mt-1 text-xs text-charcoal/70">
                  {p.type.toUpperCase()}
                  {p.regions?.length ? ` • ${p.regions.join(', ')}` : ''}
                </div>
              </div>
              <div className="text-sm font-semibold text-orange">Visit</div>
            </a>
          ))
        )}
      </div>
    </div>
  );
}
