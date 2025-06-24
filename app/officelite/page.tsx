import styles from "./page.module.css";

import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Countdown from './components/Countdown';

import BackBanner from '../components/BackBanner';
import PersonalFooter from '../components/PersonalFooter';

export default function page() {
  return (
    <>
    <BackBanner />
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
    <footer>
      <PersonalFooter
        mySolution=""
        projectNotes="ttps://github.com/melissakipp/frontend-mentor-projects/blob/main/app/officelite/notes.md"
        projectReadme="https://github.com/melissakipp/frontend-mentor-projects/blob/main/app/officelite/README.md"
      />
    </footer>
    </>
  );
}
