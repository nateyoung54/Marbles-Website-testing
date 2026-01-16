import { Container } from '@/components/Container';
import { ContactForm } from '@/components/ContactForm';

export default function DistributorContact() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="font-headline text-3xl font-bold">Distributor Inquiry</h1>
        <p className="mt-3 max-w-prose text-sm text-charcoal/80">
          Tell us about your business and the lines you’re interested in.
        </p>
        <div className="mt-6 max-w-xl">
          <ContactForm formType="distributor" />
        </div>
      </div>
    </Container>
  );
}
