import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export default function SupportPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="font-headline text-3xl font-bold">Support</h1>
        <p className="mt-3 max-w-prose text-sm text-charcoal/80">Find FAQs, manuals, warranty info, and contact options.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button href="/support/faq" variant="primary">FAQ</Button>
          <Button href="/parts" variant="secondary">Manuals + Downloads</Button>
          <Button href="/support/warranty" variant="secondary">Warranty</Button>
          <Button href="/contact" variant="secondary">Contact</Button>
        </div>
      </div>
    </Container>
  );
}
