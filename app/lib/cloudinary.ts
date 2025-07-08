export interface CloudinaryOptions {
  width?: number;
  height?: number;
  crop?: 'scale' | 'fit' | 'fill' | 'crop' | 'thumb' | 'auto' | 'pad' | 'limit';
  quality?: 'auto' | 'auto:best' | 'auto:good' | 'auto:eco' | number;
  format?: 'auto' | 'webp' | 'jpg' | 'png' | 'avif';
  transformation?: string;
}

export function buildCloudinaryUrl(
  publicId: string,
  options: CloudinaryOptions = {}
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  
  if (!cloudName) {
    throw new Error('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not configured');
  }

  const {
    width,
    height,
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
    transformation
  } = options;

  // Build transformation parameters
  const params: string[] = [];
  
  if (width) params.push(`w_${width}`);
  if (height) params.push(`h_${height}`);
  if (crop) params.push(`c_${crop}`);
  if (quality) params.push(`q_${quality}`);
  if (format) params.push(`f_${format}`);
  if (transformation) params.push(transformation);

  const transformationString = params.length > 0 ? `${params.join(',')}/` : '';
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformationString}${publicId}`;
}

// Generate optimized blur placeholder
export function getBlurDataURL(publicId: string): string {
  return buildCloudinaryUrl(publicId, {
    width: 10,
    height: 10,
    quality: 'auto',
    format: 'auto',
    transformation: 'e_blur:1000'
  });
}