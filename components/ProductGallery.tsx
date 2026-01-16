import Image from 'next/image';

export function ProductGallery({
  images
}: {
  images: { src: string; alt: string }[];
}) {
  const hero = images?.[0];
  return (
    <div className="grid gap-3">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-white/40">
        <Image
          src={hero?.src ?? '/images/placeholder-photo.svg'}
          alt={hero?.alt ?? 'Product photo'}
          fill
          sizes="(max-width: 768px) 100vw, 70vw"
          className="object-cover"
          priority
        />
      </div>
      {images?.length > 1 ? (
        <div className="grid grid-cols-3 gap-3">
          {images.slice(1, 4).map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-white/40">
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 33vw, 15vw" className="object-cover" />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
