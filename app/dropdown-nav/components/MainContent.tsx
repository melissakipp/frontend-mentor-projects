import Image from 'next/image';

import styles from './MainContent.module.css';
import Testmonials from './Testmonials';

import mobileHero from '../../../public/images/dropdown-nav/image-hero-mobile.png';
import desktopHero from '../../../public/images/dropdown-nav/image-hero-desktop.png';

export default function MainContent() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.imageWrapper}>
          {/* Hide on desktop */}
          <div className={styles.mobileOnly}>
            <Image
              className={styles.heroImg}
              src={mobileHero}
              alt='Illustration'
              priority={true}
            />
          </div>
          
          {/* Hide on mobile */}
          <div className={styles.desktopOnly}>
            <Image
              className={styles.heroImg}
              src={desktopHero}
              alt='Illustration'
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
      <Testmonials />
    </main>
  );
}