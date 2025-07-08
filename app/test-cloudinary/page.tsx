import CloudinaryImage from '../components/CloudinaryImage';
import styles from './page.module.css';

export default function TestCloudinaryPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Cloudinary Test</h1>
      
      {/* Test with Cloudinary's sample image */}
      <div className={styles.grid}>
        <div>
          <h2 className={styles.subtitle}>Sample Image (Basic)</h2>
          <CloudinaryImage
            publicId='frontend-mentor/image-hero-mobile_wtjbzp'
            alt='Sample image'
            width={400}
            height={300}
            className={styles.image}
          />
        </div>

        <div>
          <h2 className={styles.subtitle}>Sample Image (Optimized with Blur)</h2>
          <CloudinaryImage
            publicId='frontend-mentor/image-hero-desktop_z02agc'
            alt='Sample image optimized'
            width={600}
            height={400}
            crop='fill'
            quality='auto'
            format='auto'
            placeholder='blur'
            className={styles.image}
          />
        </div>

        <div className={styles.fillContainer}>
          <h2 className={styles.subtitle}>Sample Image (Fill Container)</h2>
          <CloudinaryImage
            publicId='frontend-mentor/base-apparel-preview_dvctjf'
            alt='Sample image fill'
            width={800}
            height={600}
            fill
            crop='fill'
            className={styles.fillImage}
          />
        </div>
      </div>
    </main>
  );
}
