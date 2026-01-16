import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export default function CareersPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="font-headline text-3xl font-bold">Careers</h1>
        <p className="mt-3 max-w-prose text-sm text-charcoal/80">
          Add open roles and an application link here. (v1 placeholder)
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button href="#" variant="primary">Apply (link)</Button>
          <Button href="/about/facility" variant="secondary">Our Facility</Button>
        </div>
      </div>
    </Container>
  );
}
