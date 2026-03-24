import Image from "next/image";

type ImageGalleryProps = {
  images: Array<{ src: string; alt: string }>;
};

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {images.map((image) => (
        <div key={image.src} className="relative h-60 overflow-hidden rounded-xl border border-brand-border">
          <Image src={image.src} alt={image.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
