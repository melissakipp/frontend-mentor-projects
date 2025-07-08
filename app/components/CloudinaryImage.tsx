'use client';

import Image from 'next/image';
import { buildCloudinaryUrl, getBlurDataURL, type CloudinaryOptions } from '../lib/cloudinary';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  onClick?: () => void;
  placeholder?: 'blur' | 'empty';
  // Cloudinary transformation options
  crop?: 'scale' | 'fit' | 'fill' | 'crop' | 'thumb' | 'auto' | 'pad' | 'limit';
  quality?: 'auto' | 'auto:best' | 'auto:good' | 'auto:eco' | number;
  format?: 'auto' | 'webp' | 'jpg' | 'png' | 'avif';
  transformation?: string;
}

export default function CloudinaryImage({
  publicId,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  fill = false,
  onClick,
  placeholder = 'empty',
  crop,
  quality,
  format,
  transformation,
}: CloudinaryImageProps) {
  const imageUrl = buildCloudinaryUrl(publicId, {
    width: fill ? undefined : width,
    height: fill ? undefined : height,
    crop,
    quality,
    format,
    transformation,
  });

  const blurDataURL = placeholder === 'blur' ? getBlurDataURL(publicId) : undefined;

  if (fill) {
    return (
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes || '100vw'}
        onClick={onClick}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
      />
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      onClick={onClick}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
    />
  );
}
