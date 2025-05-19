import Image from "next/image";
import Link from "next/link";

import styles from "./MainContent.module.css";
import Testmonials from "./Testmonials";
import HeroImg from "@/../public/images/dropdown-nav/image-hero-mobile.png";

export default function MainContent() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image 
          className={styles.hero__img} 
          src={HeroImg} 
          alt="Illustration"
          width={500}
          height={500}
          priority 
        />
      </section>
      <section className={`${styles.heroText} ${styles.leftCol}`}>
        <h1 className="sr-only">Snap Home page</h1>
        <h2 className={styles.heroText__title}>Make remote work</h2>
        <p className={styles.heroText__description}>
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
