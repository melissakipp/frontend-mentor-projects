'use client';
import BackBanner from '../components/BackBanner';
import PersonalFooter from '../components/PersonalFooter';
import styles from './page.module.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Testmonials from './components/Testmonials';

export default function page() {
  return (
    <>
    <BackBanner />
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="container">
          <Header />
          <MainContent />
          <Testmonials />
        </div>     
      </main>
    </div>
    <footer>
      <PersonalFooter
        mySolution=""
        projectNotes="#"
        projectReadme="#"
      />
    </footer>
    </>
  );
}
