import { Container } from '@/components/Container';
import { getAllDocs } from '@/lib/content';

export default async function DocumentsPage() {
  const docs = await getAllDocs();
  return (
    <Container>
      <div className="py-12">
        <h1 className="font-headline text-3xl font-bold">Document Library</h1>
        <p className="mt-3 text-sm text-charcoal/80">Manuals, spec sheets, drawings, and installation guides.</p>
        <div className="mt-8 grid gap-2">
          {docs.map((d) => (
            <a key={d.id} href={d.url} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-line bg-white/40 p-3 hover:bg-white/60">
              <div className="text-sm font-semibold">{d.title}</div>
              <div className="mt-1 text-xs text-charcoal/70">{d.docType.toUpperCase()} {d.version ? `• v${d.version}` : ''} {d.date ? `• ${d.date}` : ''}</div>
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
}
