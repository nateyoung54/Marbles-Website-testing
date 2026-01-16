import { Container } from '@/components/Container';
import { SpecsCard } from '@/components/SpecsCard';
import { DownloadsList } from '@/components/DownloadsList';
import { WhereToBuyModule } from '@/components/WhereToBuyModule';
import { Button } from '@/components/Button';
import { getAllParts, getAllProducts, getAllPartners } from '@/lib/content';

export default async function PartDetailPage({ params }: { params: { slug: string } }) {
  const parts = await getAllParts();
  const part = parts.find((p) => p.slug === params.slug);
  if (!part) {
    return (
      <Container>
        <div className="py-12">
          <h1 className="font-headline text-3xl font-bold">Part not found</h1>
        </div>
      </Container>
    );
  }

  const [products, partners] = await Promise.all([getAllProducts(), getAllPartners()]);
  const relatedProducts = products.filter((p) => part.relatedProductIds?.includes(p.id));
  const partnerIds = new Set<string>();
  relatedProducts.forEach((p) => p.whereToBuyPartnerIds?.forEach((id) => partnerIds.add(id)));
  const wherePartners = partners.filter((pt) => partnerIds.has(pt.id));

  return (
    <Container>
      <div className="py-12">
        <div className="text-xs text-charcoal/70">Parts & Specs</div>
        <h1 className="mt-2 font-headline text-3xl font-bold">{part.partNumber}</h1>
        <p className="mt-2 text-sm text-charcoal/80">{part.name}{part.sku ? ` • SKU: ${part.sku}` : ''}</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 grid gap-10">
            <section>
              <h2 className="text-sm font-semibold">Specs</h2>
              <div className="mt-3">
                <SpecsCard specs={part.specs} />
              </div>
            </section>

            <section>
              <h2 className="text-sm font-semibold">Fitment / Tags</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {(part.fitmentTags ?? ['Fitment tags coming soon']).map((t) => (
                  <span key={t} className="rounded-full border border-line bg-white/40 px-3 py-1 text-xs font-semibold text-charcoal">
                    {t}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-sm font-semibold">Downloads</h2>
              <div className="mt-3">
                <DownloadsList downloads={part.downloads} context={{ partNumber: part.partNumber }} />
              </div>
            </section>

            {relatedProducts.length ? (
              <section>
                <h2 className="text-sm font-semibold">Related products</h2>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {relatedProducts.map((p) => (
                    <a key={p.id} href={`/products/${p.category}/${p.slug}`} className="rounded-xl border border-line bg-white/40 p-4 hover:bg-white/60">
                      <div className="text-sm font-semibold">{p.name}</div>
                      <div className="mt-1 text-xs text-charcoal/70">{p.shortDescription}</div>
                    </a>
                  ))}
                </div>
              </section>
            ) : null}

            <section>
              <h2 className="text-sm font-semibold">Need verification?</h2>
              <p className="mt-2 text-sm text-charcoal/80">Contact Engineering for fitment confirmation or drawings.</p>
              <div className="mt-3">
                <Button href="/contact/oem-engineering" variant="primary">Contact Engineering</Button>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 grid gap-4">
              <WhereToBuyModule partners={wherePartners} context={{ contextPage: 'part_detail' }} />
            </div>
          </aside>
        </div>
      </div>
    </Container>
  );
}
