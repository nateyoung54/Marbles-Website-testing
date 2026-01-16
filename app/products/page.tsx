import { Container } from '@/components/Container';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { ProductCard } from '@/components/ProductCard';
import { getAllProducts, groupByCategory } from '@/lib/content';

export default async function ProductsPage() {
  const products = await getAllProducts();
  const grouped = groupByCategory(products);

  return (
    <Container>
      <div className="py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="font-headline text-3xl font-bold">Products</h1>
            <p className="mt-3 text-sm text-charcoal/80">Browse categories and find the right product—then use Where to Buy to purchase from trusted partners.</p>
          </div>
          <ImagePlaceholder label="Products hero: product lineup or in-use outdoor scene" className="aspect-[16/10]" />
        </div>

        <div className="mt-10 grid gap-8">
          {Object.entries(grouped).map(([cat, items]) => (
            <section key={cat} className="grid gap-4">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-charcoal/70">{cat}</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.slice(0, 6).map((p) => (
                  <ProductCard key={p.id} p={p} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}
