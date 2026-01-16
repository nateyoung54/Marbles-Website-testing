'use client';

import { track } from '@/lib/analytics';
import type { Download } from '@/lib/types';

export function DownloadsList({
  downloads,
  context
}: {
  downloads?: Download[];
  context: { productId?: string; partNumber?: string };
}) {
  if (!downloads || downloads.length === 0) {
    return <div className="text-sm text-charcoal/70">No downloads available yet.</div>;
  }

  return (
    <div className="grid gap-2">
      {downloads.map((d) => (
        <a
          key={d.id}
          href={d.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-4 rounded-xl border border-line bg-white/40 p-3 hover:bg-white/60"
          onClick={() =>
            track({
              name: 'download_click',
              payload: { docId: d.id, docType: d.type, productId: context.productId, partNumber: context.partNumber }
            })
          }
        >
          <div>
            <div className="text-sm font-semibold">{d.title}</div>
            <div className="mt-1 text-xs text-charcoal/70">
              {d.type}
              {d.version ? ` • v${d.version}` : ''}
              {d.date ? ` • ${d.date}` : ''}
              {d.size ? ` • ${d.size}` : ''}
            </div>
          </div>
          <div className="text-sm font-semibold text-orange">Download</div>
        </a>
      ))}
    </div>
  );
}
