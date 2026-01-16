import { Container } from '@/components/Container';
import { SearchClient } from '@/components/SearchClient';
import { Button } from '@/components/Button';

export default async function PartsHubPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="font-headline text-3xl font-bold">Parts & Specs</h1>
        <p className="mt-3 max-w-prose text-sm text-charcoal/80">
          Search across products, part numbers, SKUs, documents (PDF titles), manuals, and learning.
        </p>

        <div className="mt-6">
          <SearchClient defaultType="all" />
        </div>

        <div className="mt-8 rounded-xl border border-line bg-white/40 p-6">
          <div className="text-sm font-semibold">Need engineering help?</div>
          <p className="mt-2 text-sm text-charcoal/80">
            If you’re verifying fitment, requesting drawings, or integrating into an OEM platform, contact Sales / Engineering.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button href="/contact/oem-engineering" variant="primary">Contact Engineering</Button>
            <Button href="/documents" variant="secondary">Document Library</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
