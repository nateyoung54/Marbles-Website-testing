'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function HomeSearchPrompt() {
  const [q, setQ] = useState('');
  const router = useRouter();

  return (
    <div className="grid gap-3">
      <div className="text-sm font-semibold">Parts & Specs</div>
      <div className="text-xs text-charcoal/70">Search part #, SKU, manuals, drawings, and fitment notes.</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/search?q=${encodeURIComponent(q)}`);
        }}
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search part #, SKU…"
          className="w-full rounded-xl border border-line bg-bg/60 px-3 py-2 text-sm"
        />
      </form>
      <div className="flex flex-wrap gap-2">
        {['Lyman 31', 'Install guide', 'SKU 1234', 'Front sight'].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => router.push(`/search?q=${encodeURIComponent(t)}`)}
            className="rounded-full border border-line bg-white/40 px-3 py-1 text-xs font-semibold hover:bg-white/60"
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
