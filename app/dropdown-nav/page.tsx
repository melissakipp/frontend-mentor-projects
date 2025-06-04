'use client';
import BackBanner from '../components/BackBanner';
import PersonalFooter from '../components/PersonalFooter';
import styles from './page.module.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

export default function page() {
  return (
    <>
    <BackBanner />
    <div className={styles.container}>
      <div className="container">
        <Header />
        <MainContent />
      </div>
    </div>
    <footer>
      <PersonalFooter
        mySolution="https://frontend-mentor-projects-rho.vercel.app/"
        projectNotes="https://github.com/melissakipp/frontend-mentor-projects/blob/main/app/dropdown-nav/notes.md"
        projectReadme="https://github.com/melissakipp/frontend-mentor-projects/blob/main/app/dropdown-nav/README.md"
      />
    </footer>
    </>
  );
}
