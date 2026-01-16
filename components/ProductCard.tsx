import Link from 'next/link';
import type { Product } from '@/lib/types';

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/products/${p.category}/${p.slug}`} className="rounded-xl border border-line bg-white/40 p-4 hover:bg-white/60">
      <div className="text-sm font-semibold">{p.name}</div>
      <div className="mt-1 text-xs text-charcoal/70">{p.shortDescription}</div>
      {p.bullets?.length ? (
        <ul className="mt-3 grid gap-1 text-xs text-charcoal/80">
          {p.bullets.slice(0, 3).map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </Link>
  );
}
