import { Container } from '@/components/Container';
import { ContactForm } from '@/components/ContactForm';

export default function OEMContact() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="font-headline text-3xl font-bold">Contact Sales / Engineering</h1>
        <p className="mt-3 max-w-prose text-sm text-charcoal/80">
          Fitment verification, drawings, integration questions, specifications, and OEM/distributor partnership requests.
        </p>
        <div className="mt-8">
          <ContactForm formType="oem" />
        </div>
      </div>
    </Container>
  );
}
