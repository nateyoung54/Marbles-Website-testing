import { BadgeStrip } from '@/components/BadgeStrip';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { HomeSearchPrompt } from '@/components/HomeSearchPrompt';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { ProductCard } from '@/components/ProductCard';
import { getAllProducts } from '@/lib/content';

export default async function HomePage() {
  const products = await getAllProducts();
  const featured = products.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-8 py-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                American-made sights and precision components—built on heritage, backed by engineering.
              </h1>
              <p className="mt-4 max-w-prose text-base text-charcoal/80">
                Since 1892 in Gladstone, Michigan. Rugged, trustworthy products with documentation and support that help you ship.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/parts" variant="primary">Parts & Specs</Button>
                <Button href="/where-to-buy" variant="secondary">Where to Buy</Button>
              </div>
              <div className="mt-6 text-xs text-charcoal/70">
                Photography guidance: use real facility + inspection shots paired with product-in-use outdoor imagery (no staged tactical clichés).
              </div>
            </div>

            <ImagePlaceholder
              label="Hero photo/video: product in use + close detail of machining/inspection"
              className="aspect-[16/10]"
            />
          </div>

          <div className="pb-12">
            <BadgeStrip />
          </div>
        </Container>
      </section>

      {/* 3-panel */}
      <section>
        <Container>
          <div className="grid gap-6 py-12 lg:grid-cols-3">
            <div className="rounded-xl border border-line bg-white/40 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Products</div>
                  <div className="mt-1 text-xs text-charcoal/70">Browse by category and application.</div>
                </div>
                <Button href="/products" variant="secondary">All</Button>
              </div>
              <div className="mt-4 grid gap-3">
                {featured.slice(0, 3).map((p) => (
                  <ProductCard key={p.id} p={p} />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-line bg-white/40 p-5">
              <HomeSearchPrompt />
              <div className="mt-5">
                <Button href="/parts" variant="primary">Open Parts & Specs</Button>
              </div>
            </div>

            <div className="rounded-xl border border-line bg-white/40 p-5">
              <div className="text-sm font-semibold">Marbles U</div>
              <div className="mt-1 text-xs text-charcoal/70">Video-first learning for installation, selection, and OEM integration.</div>
              <div className="mt-4">
                <ImagePlaceholder label="Featured video thumbnail: installation basics" className="aspect-[16/9]" />
              </div>
              <div className="mt-4 flex gap-2">
                <Button href="/marbles-u" variant="primary">Explore Learning</Button>
                <Button href="/contact/oem-engineering" variant="secondary">Contact Engineering</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Heritage teaser */}
      <section className="border-y border-line bg-white/20">
        <Container>
          <div className="grid gap-8 py-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-semibold">Heritage + capability</div>
              <h2 className="mt-2 font-headline text-2xl font-bold">A legacy of craftsmanship—built for today’s standards.</h2>
              <p className="mt-4 text-sm text-charcoal/80">
                Timeline snapshot (replace with real milestones):
              </p>
              <ul className="mt-3 grid gap-2 text-sm">
                {[
                  '1892: Founded in Michigan',
                  'Mid-century: iconic outdoor products',
                  'Today: precision manufacturing + engineering support'
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-2">
                <Button href="/about" variant="primary">About Marble Arms</Button>
                <Button href="/about/facility" variant="secondary">Our Facility</Button>
              </div>
            </div>
            <ImagePlaceholder label="Facility photo: people + inspection + machining" className="aspect-[16/10]" />
          </div>
        </Container>
      </section>

      {/* Support + contact */}
      <section>
        <Container>
          <div className="grid gap-6 py-12 lg:grid-cols-2">
            <div className="rounded-xl border border-line bg-white/40 p-6">
              <div className="text-sm font-semibold">Support</div>
              <p className="mt-2 text-sm text-charcoal/80">Fast answers, clear documentation, and real people.</p>
              <div className="mt-4 grid gap-2">
                {[
                  { href: '/support/faq', label: 'FAQ' },
                  { href: '/parts', label: 'Manuals + Downloads' },
                  { href: '/contact', label: 'Customer Service' }
                ].map((l) => (
                  <a key={l.href} href={l.href} className="rounded-xl border border-line bg-bg/60 p-3 text-sm font-semibold hover:bg-white/60">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-line bg-white/40 p-6">
              <div className="text-sm font-semibold">Business inquiries</div>
              <p className="mt-2 text-sm text-charcoal/80">
                OEM/engineering support, distributor inquiries, facility visits, and careers.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button href="/contact/oem-engineering" variant="primary">Contact Sales / Engineering</Button>
                <Button href="/contact/distributor" variant="secondary">Distributor Inquiry</Button>
                <Button href="/contact/careers" variant="secondary">Careers</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
