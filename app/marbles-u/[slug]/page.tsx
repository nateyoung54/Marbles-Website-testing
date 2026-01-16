import { Container } from '@/components/Container';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Button } from '@/components/Button';
import { getAllLearning } from '@/lib/content';

export default async function LearningDetail({ params }: { params: { slug: string } }) {
  const items = await getAllLearning();
  const item = items.find((i) => i.slug === params.slug);
  if (!item) {
    return (
      <Container>
        <div className="py-12"><h1 className="font-headline text-3xl font-bold">Not found</h1></div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-12">
        <div className="text-xs text-charcoal/70">Marbles U</div>
        <h1 className="mt-2 font-headline text-3xl font-bold">{item.title}</h1>
        <p className="mt-3 text-sm text-charcoal/80">{item.description}</p>

        <div className="mt-8">
          <ImagePlaceholder label="Video embed / hero media" className="aspect-[16/9]" />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <Button href="/parts" variant="primary">Parts & Specs</Button>
          <Button href="/contact" variant="secondary">Contact</Button>
        </div>
      </div>
    </Container>
  );
}
