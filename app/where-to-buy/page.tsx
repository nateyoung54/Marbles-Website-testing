import { Container } from '@/components/Container';
import { WhereToBuyListClient } from '@/components/WhereToBuyListClient';
import { getAllPartners } from '@/lib/content';

export default async function WhereToBuyPage() {
  const partners = await getAllPartners();
  const retailers = partners.filter((p) => p.type === 'retailer');
  const distributors = partners.filter((p) => p.type === 'distributor');

  return (
    <Container>
      <div className="py-12">
        <h1 className="font-headline text-3xl font-bold">Where to Buy</h1>
        <p className="mt-3 max-w-prose text-sm text-charcoal/80">
          Marble Arms does not sell parts directly on this website. Purchase through approved retailers and distributors.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section className="rounded-xl border border-line bg-white/40 p-6">
            <h2 className="text-sm font-semibold">Retailers</h2>
            <WhereToBuyListClient partners={retailers} contextPage="where_to_buy" />
          </section>

          <section className="rounded-xl border border-line bg-white/40 p-6">
            <h2 className="text-sm font-semibold">Distributors</h2>
            <WhereToBuyListClient partners={distributors} contextPage="where_to_buy" />
          </section>
        </div>

        <div className="mt-10 rounded-xl border border-line bg-white/40 p-6">
          <div className="text-sm font-semibold">Dealer locator (ready for data)</div>
          <p className="mt-2 text-sm text-charcoal/80">
            Structure is in place for a ZIP-based locator. Wire this up when you have dealer records.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              disabled
              placeholder="Enter ZIP (coming soon)"
              className="w-full rounded-xl border border-line bg-bg/60 px-3 py-2 text-sm opacity-60"
            />
            <button disabled className="rounded-xl bg-orange px-4 py-2 text-sm font-semibold text-white opacity-60">
              Search
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
