import { Container } from '@/components/Container';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Button } from '@/components/Button';

export default function AboutPage() {
  const links = [
    { href: '/about/history', label: 'History (Since 1892)', desc: 'Milestones and legacy credibility.' },
    { href: '/about/facility', label: 'Facility + Capability', desc: 'Manufacturing, QC, and engineering support.' },
    { href: '/about/values', label: 'Values', desc: 'How we work—grounded and practical.' },
    { href: '/about/leadership', label: 'Leadership', desc: 'The people behind the work.' }
  ];

  return (
    <Container>
      <div className="py-12">
        <h1 className="font-headline text-3xl font-bold">About Marble Arms</h1>
        <p className="mt-3 max-w-prose text-sm text-charcoal/80">
          Since 1892, Marble Arms has built rugged, trustworthy products in Michigan—pairing heritage craftsmanship with modern quality and engineering support.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="grid gap-4">
            <div className="rounded-xl border border-line bg-white/40 p-5">
              <div className="text-sm font-semibold">Timeline snapshot</div>
              <ul className="mt-3 grid gap-2 text-sm">
                {['1892: Founded in Gladstone, MI', 'Legacy outdoor products', 'Today: precision manufacturing + OEM support'].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button href="/contact/oem-engineering" variant="primary">Contact Engineering</Button>
              <Button href="/where-to-buy" variant="secondary">Where to Buy</Button>
            </div>
          </div>
          <ImagePlaceholder label="About hero: facility + people + inspection" className="aspect-[16/10]" />
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-xl border border-line bg-white/40 p-5 hover:bg-white/60">
              <div className="text-sm font-semibold">{l.label}</div>
              <div className="mt-1 text-xs text-charcoal/70">{l.desc}</div>
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
}
