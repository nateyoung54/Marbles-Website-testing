import { Container } from '@/components/Container';
import { SearchClient } from '@/components/SearchClient';

export default function SearchPage({ searchParams }: { searchParams?: { q?: string; type?: string } }) {
  const q = (searchParams?.q ?? '').toString();

  return (
    <Container>
      <div className="py-12">
        <h1 className="font-headline text-3xl font-bold">Search</h1>
        <p className="mt-3 text-sm text-charcoal/80">Search products, parts, documents, manuals, and learning resources.</p>
        <div className="mt-6">
          <SearchClient initialQuery={q} />
        </div>
      </div>
    </Container>
  );
}
