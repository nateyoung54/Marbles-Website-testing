import { Container } from '@/components/Container';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';

export default function AboutLeadershipPage() {
  const leaders = [
    { name: 'Leader Name', role: 'Title', note: 'Short, credible bio line (replace).' },
    { name: 'Leader Name', role: 'Title', note: 'Short, credible bio line (replace).' }
  ];

  return (
    <Container>
      <div className="py-12">
        <div className="text-xs text-charcoal/70">About / Leadership</div>
        <h1 className="mt-2 font-headline text-3xl font-bold">Leadership</h1>
        <p className="mt-3 max-w-prose text-sm text-charcoal/80">
          Use real photos and concise bios. Keep the focus on customer outcomes and engineering support.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {leaders.map((l, idx) => (
            <div key={idx} className="rounded-xl border border-line bg-white/40 p-6">
              <div className="grid gap-4">
                <ImagePlaceholder label="Portrait photo (real)" className="aspect-[4/3]" />
                <div>
                  <div className="text-sm font-semibold">{l.name}</div>
                  <div className="mt-1 text-xs text-charcoal/70">{l.role}</div>
                  <p className="mt-3 text-sm text-charcoal/80">{l.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
