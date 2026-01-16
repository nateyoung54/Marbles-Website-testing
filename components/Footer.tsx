import Link from 'next/link';
import { Container } from './Container';

const cols = [
  {
    title: 'Products',
    links: [
      { href: '/products', label: 'Browse Products' },
      { href: '/where-to-buy', label: 'Where to Buy' }
    ]
  },
  {
    title: 'Parts & Specs',
    links: [
      { href: '/parts', label: 'Parts & Specs' },
      { href: '/search', label: 'Search' }
    ]
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/about/history', label: 'History' },
      { href: '/marbles-u', label: 'Marbles U' }
    ]
  },
  {
    title: 'Support',
    links: [
      { href: '/support', label: 'Support' },
      { href: '/contact', label: 'Contact' },
      { href: '/dealer-portal', label: 'Dealer Portal' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-white/30">
      <Container>
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="font-headline text-lg font-bold">Marble Arms</div>
            <div className="mt-2 text-sm text-charcoal/70">Since 1892 • Gladstone, Michigan</div>
            <div className="mt-4 text-sm">
              <div className="font-semibold">Contact</div>
              <div className="text-charcoal/70">(placeholder) Phone • Email</div>
              <div className="text-charcoal/70">(placeholder) Address line</div>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold">{c.title}</div>
              <ul className="mt-3 grid gap-2">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-charcoal/80 hover:text-ink underline-offset-4 hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <div className="text-sm font-semibold">Social</div>
            <ul className="mt-3 grid gap-2">
              <li><a className="text-sm text-charcoal/80 hover:text-ink underline-offset-4 hover:underline" href="#">Instagram</a></li>
              <li><a className="text-sm text-charcoal/80 hover:text-ink underline-offset-4 hover:underline" href="#">YouTube</a></li>
              <li><a className="text-sm text-charcoal/80 hover:text-ink underline-offset-4 hover:underline" href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-6 text-xs text-charcoal/70 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Marble Arms. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/legal" className="hover:text-ink underline-offset-4 hover:underline">Legal</Link>
            <Link href="/privacy" className="hover:text-ink underline-offset-4 hover:underline">Privacy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
