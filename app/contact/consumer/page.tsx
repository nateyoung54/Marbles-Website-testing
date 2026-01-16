import { Container } from '@/components/Container';
import { ContactForm } from '@/components/ContactForm';

export default function ConsumerContact() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="font-headline text-3xl font-bold">Consumer Support</h1>
        <p className="mt-3 max-w-prose text-sm text-charcoal/80">Questions about products, installation, or general support.</p>
        <div className="mt-8"><ContactForm formType="consumer" /></div>
      </div>
    </Container>
  );
}
