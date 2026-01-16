import { Container } from '@/components/Container';

export default function FAQPage() {
  const faqs = [
    { q: 'Do you sell parts directly online?', a: 'No. Marble Arms products are sold through approved partners. Use Where to Buy.' },
    { q: 'How do I find manuals and drawings?', a: 'Use Parts & Specs or the Document Library. If you need help verifying fitment, contact Engineering.' },
    { q: 'I’m an OEM/engineer—how do I request drawings?', a: 'Use the Contact Sales / Engineering form and include platform + part numbers.' }
  ];

  return (
    <Container>
      <div className="py-12">
        <h1 className="font-headline text-3xl font-bold">FAQ</h1>
        <div className="mt-8 grid gap-3">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-line bg-white/40 p-5">
              <div className="text-sm font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-charcoal/80">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
