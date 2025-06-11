import styles from "./page.module.css";

import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Countdown from './components/Countdown';

export default function page() {
  return (
    <>
    <Header />
    <main className={styles.mainContainer}>
      <Hero />
      <Cards />
      <Countdown />
    </main>
    </>
    
  );
}
