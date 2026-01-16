import { Container } from '@/components/Container';
import { LearningHubClient } from '@/components/LearningHubClient';
import { getAllLearning } from '@/lib/content';

export default async function MarblesUPage() {
  const items = await getAllLearning();
  return (
    <Container>
      <div className="py-12">
        <h1 className="font-headline text-3xl font-bold">Marbles U</h1>
        <p className="mt-3 max-w-prose text-sm text-charcoal/80">
          Video-first learning: installation, selection, and OEM integration.
        </p>

        <LearningHubClient items={items} />
      </div>
    </Container>
  );
}
