import { Container } from '@/components/Container';
import { ProductCard } from '@/components/ProductCard';
import { getAllProducts } from '@/lib/content';

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const products = await getAllProducts();
  const items = products.filter((p) => p.category === params.category);

  return (
    <Container>
      <div className="py-12">
        <h1 className="font-headline text-3xl font-bold">{params.category}</h1>
        <p className="mt-3 text-sm text-charcoal/80">Explore products in this category. Use Parts & Specs for deeper documentation and compatibility.</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </Container>
  );
}
