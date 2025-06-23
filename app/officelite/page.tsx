import styles from "./page.module.css";

import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Countdown from './components/Countdown';

export default function page() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.pageWrapper}>
        <Header />
        <Hero />
      </div>
      <div className={styles.pricingWrapper}>
        <Cards />
      </div>
      <div className={styles.contentWrapper}>
        <Countdown />
      </div>
    </main>
  );
}
