import CloudinaryImage from '../../components/CloudinaryImage';

import styles from './MainContent.module.css';
import Testimonials from './Testimonials';


export default function MainContent() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.imageWrapper}>
          {/* Hide on desktop */}
          <div className={styles.mobileOnly}>
            <CloudinaryImage
              publicId='frontend-mentor/image-hero-mobile_i2u6ed'
              alt='Illustration'
              width={375}
              height={250}
              crop='fill'
              quality='auto'
              format='auto'
              className={styles.heroImg}
              sizes='(max-width: 768px) 100vw, 0px'
              priority={true}
            />
          </div>
          
          {/* Hide on mobile */}
          <div className={styles.desktopOnly}>
            <CloudinaryImage
              publicId='frontend-mentor/image-hero-desktop_wtrdot'
              alt='Illustration'
              width={600}
              height={400}
              crop='fit'
              quality='auto'
              format='auto'
              className={styles.heroImg}
              sizes='(min-width: 769px) 50vw, 0px'
              priority={true}
            />
          </div>
        </div>
      </section>
      <section className={`${styles.pageText} ${styles.leftCol}`}>
        <h1 className='sr-only'>Snap Home page</h1>
        <h2 className={styles.pageText__title}>Make remote work</h2>
        <p className={styles.pageText__description}>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <div>
          <a className={styles.btn} href=''>Learn more</a>
        </div>
      </section>
      <Testimonials />
    </main>
  );
}