import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export default function ContactPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="font-headline text-3xl font-bold">Contact</h1>
        <p className="mt-3 max-w-prose text-sm text-charcoal/80">
          Choose the best route so you get the right help quickly.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-white/40 p-6">
            <div className="text-sm font-semibold">Consumer support</div>
            <p className="mt-2 text-sm text-charcoal/80">General questions, installation help, warranty placeholders.</p>
            <div className="mt-4"><Button href="/contact/consumer" variant="primary">Contact Support</Button></div>
          </div>
          <div className="rounded-xl border border-line bg-white/40 p-6">
            <div className="text-sm font-semibold">OEM / Engineering</div>
            <p className="mt-2 text-sm text-charcoal/80">Fitment verification, drawings, integration and specs.</p>
            <div className="mt-4"><Button href="/contact/oem-engineering" variant="primary">Contact Engineering</Button></div>
          </div>
          <div className="rounded-xl border border-line bg-white/40 p-6">
            <div className="text-sm font-semibold">Distributor inquiry</div>
            <p className="mt-2 text-sm text-charcoal/80">Product lines, pricing pathways, and partnership requests.</p>
            <div className="mt-4"><Button href="/contact/distributor" variant="primary">Distributor Inquiry</Button></div>
          </div>
          <div className="rounded-xl border border-line bg-white/40 p-6">
            <div className="text-sm font-semibold">Careers</div>
            <p className="mt-2 text-sm text-charcoal/80">Join the team in Gladstone, Michigan.</p>
            <div className="mt-4"><Button href="/contact/careers" variant="primary">Careers</Button></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
