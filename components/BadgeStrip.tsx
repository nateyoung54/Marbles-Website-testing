export function BadgeStrip() {
  const badges = [
    { title: 'Made in USA', sub: 'Built in Michigan' },
    { title: 'Since 1892', sub: 'Heritage you can trust' },
    { title: 'Precision + QC', sub: 'Consistent performance' },
    { title: 'Engineering Support', sub: 'OEM-ready documentation' }
  ];

  return (
    <div className="grid gap-3 rounded-xl border border-line bg-white/40 p-4 sm:grid-cols-2 lg:grid-cols-4">
      {badges.map((b) => (
        <div key={b.title} className="rounded-xl border border-line bg-bg/60 p-4">
          <div className="text-sm font-semibold">{b.title}</div>
          <div className="mt-1 text-xs text-charcoal/70">{b.sub}</div>
        </div>
      ))}
    </div>
  );
}
