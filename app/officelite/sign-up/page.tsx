import Countdown from '../components/Countdown';
import Header from '../components/Header';
import SignupForm from '../components/SignupForm';

import styles from './Signup.module.css';

export default function signUp() {
  return (
    <section>
      <Header />
      <main>
        <article>
          <section className={styles.colLeft}>
            <h2 className={styles.title}>Work smarter. Save time.</h2>
            <p className={styles.paragraph}>Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.</p>
            <Countdown
              className={styles.myCustomCountdown}
              titleClassName={styles.multiColorTitle}
              blockClassName={styles.block}
              title='Coming '
              colorScheme={{
                primary: '#8B5CF6',
                secondary: '#FFFFFF',
                text: '#333950',
                blockBackground: '#E4EAFF',
                blockText: '#5175FF',
              }}
              customStyles={{
                '--custom-shadow': '0 20px 40px rgba(139, 92, 246, 0.3)',
                '--custom-border': '1px solid rgba(139, 92, 246, 0.2)',
              }}
              showButton={false}
              showSrOnlyText={true}
              srOnlyText='This countdown shows the time remaining until our new site launches on November 4th, 2025. The countdown updates every second.'
            />
            </section>
            <SignupForm />
        </article>
      </main>
    </section>
  );
}
