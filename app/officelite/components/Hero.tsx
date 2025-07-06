import Link from 'next/link';
import Image from 'next/image';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.colRight}>
        <div className={styles.imageWrapper}>
          <Image 
            className={styles.heroImg}
            src='images/officelite/home/illustration-charts.svg'
            alt="Illustration showing data charts and analytics for the Officelite platform"
            width={470}
            height={300}
            sizes="
              (min-width: 1024px) 470px,
              (min-width: 640px) 280px,
              200px
            "
            style={{ objectFit: 'cover' }}
            priority={true}
          />
        </div>
      </div>
      <div className={styles.colLeft}>
        <h1 className={styles.title}>
          A simple solution to complex tasks is coming soon
        </h1>
        <p className={styles.description}>
          Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.
        </p>
        <div className={styles.btnContainer}>
          <Link href="/officelite/sign-up" className={styles.button}>
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
