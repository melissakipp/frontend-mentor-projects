'use client';
import BackBanner from '../components/BackBanner';
import PersonalFooter from '../components/PersonalFooter';
import RatingCard from './components/RatingCard';
import styles from './page.module.css';

export default function RatingsCardPage() {
  const handleRatingSubmit = (rating: number): void => {
    console.log(`Rating submitted: ${rating}`);
    // You could add analytics tracking here
  };
  return (
    <>
    <BackBanner />
    <div className={styles.container}>
      <main className={styles.main}>
        <RatingCard onRatingSubmit={handleRatingSubmit} />
      </main>
    </div>
    <footer>
      <PersonalFooter 
        mySolution="https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-1EhXUnKW7h"
        projectNotes="https://github.com/melissakipp/frontend-mentor-projects/tree/main/app/ratings-card/notes.md"
        projectReadme="https://github.com/melissakipp/frontend-mentor-projects/tree/main/app/ratings-card/README.md"
        
      />
    </footer>
    </>
  );
}