import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export default function AboutValuesPage() {
  const values = [
    { title: 'Trustworthy', body: 'Clear documentation, accurate specs, and support that respects your time.' },
    { title: 'Rugged + practical', body: 'Built for real use, with straightforward design choices.' },
    { title: 'People-first', body: 'We treat customers and partners like long-term relationships—not transactions.' },
    { title: 'Engineering support', body: 'We help verify fitment, provide drawings, and answer questions quickly.' }
  ];

  return (
    <Container>
      <div className="py-12">
        <div className="text-xs text-charcoal/70">About / Values</div>
        <h1 className="mt-2 font-headline text-3xl font-bold">How we work</h1>
        <p className="mt-3 max-w-prose text-sm text-charcoal/80">
          Keep this page grounded: specific behaviors, not slogans. Replace placeholders with your actual values and examples.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-line bg-white/40 p-6">
              <div className="text-sm font-semibold">{v.title}</div>
              <p className="mt-2 text-sm text-charcoal/80">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Button href="/contact/oem-engineering" variant="primary">Contact Engineering</Button>
          <Button href="/where-to-buy" variant="secondary">Where to Buy</Button>
        </div>
      </div>
    </Container>
  );
}
