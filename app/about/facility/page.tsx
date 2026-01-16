import { Container } from '@/components/Container';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Button } from '@/components/Button';

export default function AboutFacilityPage() {
  return (
    <Container>
      <div className="py-12">
        <div className="text-xs text-charcoal/70">About / Facility</div>
        <h1 className="mt-2 font-headline text-3xl font-bold">Gladstone, Michigan</h1>
        <p className="mt-3 max-w-prose text-sm text-charcoal/80">
          Showcase real people, real processes, and verifiable capabilities. Keep this page concise: what you do, how you do it,
          and how customers can engage engineering support.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-xl border border-line bg-white/40 p-6">
            <h2 className="text-sm font-semibold">Capability snapshot (placeholder)</h2>
            <ul className="mt-4 grid gap-2 text-sm">
              {[
                'Precision machining and inspection',
                'Documentation and drawings available per part (PDF/DWG/STEP)',
                'OEM support for fitment verification and integration',
                'Made in USA with quality control focus'
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button href="/contact/oem-engineering" variant="primary">Contact Engineering</Button>
              <Button href="/contact" variant="secondary">Book a Visit</Button>
            </div>
          </div>

          <ImagePlaceholder label="Facility photography: machining, inspection, people" className="aspect-[16/10]" />
        </div>
      </div>
    </Container>
  );
}
