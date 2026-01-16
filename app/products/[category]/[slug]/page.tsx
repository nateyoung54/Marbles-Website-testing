import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { DownloadsList } from '@/components/DownloadsList';
import { ProductGallery } from '@/components/ProductGallery';
import { SpecsCard } from '@/components/SpecsCard';
import { WhereToBuyModule } from '@/components/WhereToBuyModule';
import { getAllPartners, getAllProducts } from '@/lib/content';

export default async function ProductDetailPage({ params }: { params: { category: string; slug: string } }) {
  const products = await getAllProducts();
  const product = products.find((p) => p.category === params.category && p.slug === params.slug);
  if (!product) {
    return (
      <Container>
        <div className="py-12">
          <h1 className="font-headline text-3xl font-bold">Product not found</h1>
        </div>
      </Container>
    );
  }

  const partners = await getAllPartners();
  const productPartners = partners.filter((pt) => product.whereToBuyPartnerIds?.includes(pt.id));
  const related = products.filter((p) => product.relatedProductIds?.includes(p.id));

  return (
    <Container>
      <div className="py-12">
        <div className="text-xs text-charcoal/70">Products / {product.category}</div>
        <div className="mt-2 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ProductGallery images={product.heroImages} />
            <h1 className="mt-6 font-headline text-3xl font-bold">{product.name}</h1>
            <p className="mt-3 text-sm text-charcoal/80">{product.shortDescription}</p>
            {product.bullets?.length ? (
              <ul className="mt-4 grid gap-2 text-sm">
                {product.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-8 grid gap-10">
              <section>
                <h2 className="text-sm font-semibold">Compatibility / Fitment</h2>
                <div className="mt-3 rounded-xl border border-line bg-white/40 p-4 text-sm text-charcoal/80">
                  {product.compatibilityNotes ?? 'Compatibility notes coming soon. For verification, contact Engineering.'}
                </div>
                <div className="mt-3">
                  <Button href="/contact/oem-engineering" variant="secondary">Contact Engineering</Button>
                </div>
              </section>

              <section>
                <h2 className="text-sm font-semibold">Downloads</h2>
                <div className="mt-3">
                  <DownloadsList downloads={product.downloads} context={{ productId: product.id }} />
                </div>
              </section>

              {related.length ? (
                <section>
                  <h2 className="text-sm font-semibold">Related products</h2>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {related.map((p) => (
                      <a key={p.id} href={`/products/${p.category}/${p.slug}`} className="rounded-xl border border-line bg-white/40 p-4 hover:bg-white/60">
                        <div className="text-sm font-semibold">{p.name}</div>
                        <div className="mt-1 text-xs text-charcoal/70">{p.shortDescription}</div>
                      </a>
                    ))}
                  </div>
                </section>
              ) : null}

              <section>
                <h2 className="text-sm font-semibold">Support</h2>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {[
                    { href: '/support/faq', label: 'FAQ' },
                    { href: '/parts', label: 'Parts & Specs' },
                    { href: '/contact', label: 'Contact' },
                    { href: '/where-to-buy', label: 'Where to Buy' }
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="rounded-xl border border-line bg-white/40 p-3 text-sm font-semibold hover:bg-white/60">
                      {l.label}
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 grid gap-4">
              <SpecsCard specs={product.specs} title="Specs" />
              <WhereToBuyModule partners={productPartners} context={{ contextPage: 'product_detail', productId: product.id }} />
            </div>
          </aside>
        </div>
      </div>
    </Container>
  );
}
