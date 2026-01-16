import { Container } from '@/components/Container';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Button } from '@/components/Button';

export default function AboutHistoryPage() {
  return (
    <Container>
      <div className="py-12">
        <div className="text-xs text-charcoal/70">About / History</div>
        <h1 className="mt-2 font-headline text-3xl font-bold">Since 1892</h1>
        <p className="mt-3 max-w-prose text-sm text-charcoal/80">
          Replace this page with your verified milestones. Keep copy tight and evidence-forward: dates, innovations, and the
          people behind the work.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-xl border border-line bg-white/40 p-6">
            <h2 className="text-sm font-semibold">Timeline (placeholder)</h2>
            <ul className="mt-4 grid gap-2 text-sm">
              {[
                '1892: Founded in Gladstone, Michigan',
                '1900s: Early growth and craftsmanship',
                'Mid-century: Iconic outdoor products',
                'Today: Precision manufacturing + engineering support'
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button href="/where-to-buy" variant="primary">Where to Buy</Button>
              <Button href="/parts" variant="secondary">Parts & Specs</Button>
            </div>
          </div>

          <ImagePlaceholder label="Historic photo or archive material (real)" className="aspect-[16/10]" />
        </div>
      </div>
    </Container>
  );
}
