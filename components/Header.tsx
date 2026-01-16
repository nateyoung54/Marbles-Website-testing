'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './Button';

const nav = [
  { href: '/products', label: 'Products' },
  { href: '/parts', label: 'Parts & Specs' },
  { href: '/where-to-buy', label: 'Where to Buy' },
  { href: '/about', label: 'About' },
  { href: '/marbles-u', label: 'Marbles U' },
  { href: '/support', label: 'Support / Contact' }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/brand/logo.svg" alt="Marble Arms" width={40} height={40} priority />
            <div className="hidden sm:block">
              <div className="font-headline text-base font-bold tracking-tight">Marble Arms</div>
              <div className="text-xs text-charcoal/70">Since 1892 • Gladstone, MI</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="text-sm text-charcoal hover:text-ink">
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/search" className="hidden sm:inline-flex rounded-xl border border-line px-3 py-2 text-sm hover:bg-white/40" aria-label="Search">
              Search
            </Link>
            <Link href="/dealer-portal" className="hidden sm:inline-flex rounded-xl px-3 py-2 text-sm underline underline-offset-4 hover:text-charcoal" aria-label="Dealer Portal">
              Dealer Portal
            </Link>
            <Button href="/where-to-buy" variant="primary" ariaLabel="Where to Buy">
              Where to Buy
            </Button>
            <button
              className="lg:hidden rounded-xl border border-line p-2"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              <span className="block h-4 w-5">
                <span className="block h-0.5 w-5 bg-charcoal" />
                <span className="mt-1.5 block h-0.5 w-5 bg-charcoal" />
                <span className="mt-1.5 block h-0.5 w-5 bg-charcoal" />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <div className="grid gap-2 rounded-xl border border-line bg-white/40 p-3">
              <Link href="/search" className="rounded-lg px-2 py-2 hover:bg-white/60" onClick={() => setOpen(false)}>
                Search
              </Link>
              <Link href="/dealer-portal" className="rounded-lg px-2 py-2 hover:bg-white/60" onClick={() => setOpen(false)}>
                Dealer Portal
              </Link>
              {nav.map((i) => (
                <Link key={i.href} href={i.href} className="rounded-lg px-2 py-2 hover:bg-white/60" onClick={() => setOpen(false)}>
                  {i.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
