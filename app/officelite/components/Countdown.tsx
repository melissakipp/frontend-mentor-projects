'use client';
import { useEffect, useState } from 'react';

import styles from './Countdown.module.css';
import Link from 'next/link';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  const seconds = Math.max(0, Math.floor(diff / 1000) % 60);
  const minutes = Math.max(0, Math.floor(diff / 1000 / 60) % 60);
  const hours = Math.max(0, Math.floor(diff / 1000 / 60 / 60) % 24);
  const days = Math.max(0, Math.floor(diff / 1000 / 60 / 60 / 24));

  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [hasMounted, setHasMounted] = useState(false);
  const targetDate = new Date('2025-11-04T00:00:00');
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  // Only run countdown after the component has mounted in the browser
  useEffect(() => {
    setHasMounted(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!hasMounted) return null; // Avoid rendering before client-side hydration

  return (
    <section aria-labelledby="countdown-heading" className={styles.container}>
      <h2 id="countdown-heading" className={styles.title}>Coming <span className={styles.launch}>4 Nov 2025</span></h2>
      <div aria-live="polite">
        <dl className={styles.list}>
          <div className={styles.block}>
            <dt className={styles.term}>days</dt>
            <dd data-testid="days" className={styles.definition}
            >{timeLeft.days}</dd>
          </div>
          <div className={styles.block}>
            <dt className={styles.term}>hours</dt>
            <dd data-testid="hours" className={styles.definition}>{timeLeft.hours}</dd>
          </div>
          <div className={styles.block}>
            <dt className={styles.term}>min</dt>
            <dd data-testid="minutes" className={styles.definition}>{timeLeft.minutes}</dd>
          </div>
          <div className={styles.block}>
            <dt className={styles.term}>sec</dt>
            <dd data-testid="seconds" className={styles.definition}>{timeLeft.seconds}</dd>
          </div>
        </dl>
      </div>
      <div>
        <Link  href="/officelite" className={styles.link}>
          Get Started
        </Link>
      </div>
    </section>
  );
}
