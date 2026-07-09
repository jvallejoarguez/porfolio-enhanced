interface ProjectPictureProps {
  src: string;
  fallback: string;
  alt: string;
  eager?: boolean;
  className?: string;
}

export default function ProjectPicture({
  src,
  fallback,
  alt,
  eager = false,
  className,
}: ProjectPictureProps) {
  const isAvif = src.endsWith('.avif');

  return (
    <picture className={className}>
      {isAvif && <source srcSet={src} type="image/avif" />}
      <img
        src={fallback}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
      />
    </picture>
  );
}
