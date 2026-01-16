export function SpecsCard({
  title = 'Specs',
  specs
}: {
  title?: string;
  specs: Record<string, string>;
}) {
  const entries = Object.entries(specs ?? {}).filter(([, v]) => v && v.trim().length > 0);

  return (
    <div className="rounded-xl border border-line bg-white/40 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <dl className="mt-3 grid gap-3">
        {entries.map(([k, v]) => (
          <div key={k} className="grid grid-cols-2 gap-3">
            <dt className="text-xs text-charcoal/70">{k}</dt>
            <dd className="text-xs font-medium text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
