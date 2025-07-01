'use client';

import Image from 'next/image';

import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>devfinder</h1>
      <div className={styles.themeToggle}>
        <span className={styles.lightText}>Light</span>
        <label className={`'sr-only' ${styles.switch}`}>Theme Toggle</label>
          <Image
            src='/images/devfinder/icon-moon.svg'
            alt='Dark mode'
            width={20}
            height={20}
          />
          <input type='checkbox' />
          <span className={`${styles.slider} ${styles.round}`}></span>
        <span className={styles.darkText}>Dark</span>
      </div>
    </header>
  );
}