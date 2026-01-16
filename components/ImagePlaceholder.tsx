import Image from 'next/image';

export function ImagePlaceholder({
  label,
  className = ''
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-line bg-white/40 ${className}`}>
      <Image
        src="/images/placeholder-photo.svg"
        alt={label}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-end justify-start p-3">
        <div className="rounded-lg bg-bg/80 px-2 py-1 text-xs text-charcoal/80">{label}</div>
      </div>
    </div>
  );
}
