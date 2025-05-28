import Image from "next/image";
import Link from "next/link";

import styles from "./MainContent.module.css";
import Testmonials from "./Testmonials";
import HeroMobileImg from '@/../public/images/dropdown-nav/image-hero-mobile.png';
import HeroDesktopImg from '@/../public/images/dropdown-nav/image-hero-desktop.png';


export default function MainContent() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={HeroDesktopImg.src}
          />
          <Image
            className={styles.heroImg}
            src={HeroMobileImg}
            alt="Illustration"
            width={500}
            height={500}
            priority
          />
        </picture>   
      </section>
      <section className={`${styles.pageText} ${styles.leftCol}`}>
        <h1 className="sr-only">Snap Home page</h1>
        <h2 className={styles.pageText__title}>Make remote work</h2>
        <p className={styles.pageText__description}>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <div>
          <a className={styles.btn} href="">Learn more</a>
        </div>
      </section>
      <Testmonials />
    </main>
  );
}
