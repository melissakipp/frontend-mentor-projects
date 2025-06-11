import Link from 'next/link';
import Image from 'next/image';

import styles from './Hero.module.css';
import HeroImage from '@/public/images/officelite/home/illustration-charts.svg';

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.colLeft}>
        <Image src={HeroImage} alt="Officelite Hero Image" priority />
      </div>
      <h2 className={styles.title}>A simple solution to complex tasks is coming soon</h2>
      <p className={styles.description}>
        Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.
      </p>
      <Link href="/officelite" className={styles.button}>
        Get Started
      </Link>
    </section>
  );
}
