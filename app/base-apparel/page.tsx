'use client';

import Image from 'next/image';
import { useState, FormEvent, ChangeEvent } from 'react';

import styles from './base-apparel.module.css';
import Logo from '../../public/images/base-apparel/logo.svg';
import IconError from '../../public/images/base-apparel/icon-error.svg';
import Arrow from '../../public/images/base-apparel/icon-arrow.svg';

import CloudinaryImage from '../components/CloudinaryImage';

import BackBanner from '../components/BackBanner';
import PersonalFooter from '../components/PersonalFooter';

function Header() {
  return (
    <header className={styles.header} role="banner">
      <Image className={styles.logo} src={Logo} alt="Base Apparel logo" />
    </header>
  );
}

function Aside() { 
  return (
    <aside className={styles.hero}>
      <h1 className="sr-only">Landing page</h1>
      {/* Mobile image */}
      <div className={styles.heroMobile}>
        <CloudinaryImage
          publicId='frontend-mentor/hero-mobile_qf19s2'
          alt=''
          width={375}
          height={250}
          fill
          crop='fill'
          quality='auto'
          format='auto'
          className={styles.heroImg}
          sizes="100vw"
          aria-hidden="true"
        />
      </div>
      {/* Desktop image */}
      <div className={styles.heroDesktop}>
        <CloudinaryImage
          publicId='frontend-mentor/hero-desktop_q1uqeu' 
          alt=''
          width={610}
          height={800}
          fill
          crop='auto'
          quality='auto'
          format='auto'
          className={styles.heroImg}
          sizes="50vw"
          aria-hidden="true"
        />
      </div>
    </aside>
  );
}

function Main() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [emailValue, setEmailValue] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const emailValue = emailInput.value;

    if (validateEmail(emailValue)) {
      handleSuccess();
      setEmailValue('');
    } else {
      handleError();
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSuccess = () => {
    setIsSuccess(true);
    setIsError(false);
  };

  const handleError = () => {
    setIsError(true);
    setIsSuccess(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  return (
    <main className={styles.main}>
      <article className={styles.announcement}>
        <h2 className={styles.callOut}>
          <span className={styles.annOne}>We&rsquo;re</span><br />
          <span className={styles.annTwo}>coming soon</span>
        </h2>
        <p className={styles.message}>
          Hello fellow shoppers! We&rsquo;re currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
        <form
          id="form"
          className={styles.formLayout}
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <h2 className="sr-only">Email Sign-up Form</h2>
          <fieldset className={styles.formControl}>
            <label className="sr-only" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              className={isError ? `${styles.input} ${styles.error}` : styles.input}
              type="email"
              placeholder="Email address"
              value={emailValue}
              aria-label="Email address"
              onChange={handleInputChange}
            />
            <Image
              id="errorIcon"
              className={`${styles.errorIcon} ${isError ? styles.visible : ''}`}
              aria-hidden="true"
              src={IconError}
              alt=""
            />
            <button id="submitBtn" type="submit" className={styles.submitButton}>
              <span className="sr-only">submit</span>
              <Image className={styles.arrow} aria-hidden="true" src={Arrow} alt="" />
            </button>
          </fieldset>
          {isError && (
            <div id="errorMgs" className={styles.errorMessage}>
              <p>Please provide a valid email</p>
            </div>
          )}
          {isSuccess && (
            <div className={styles.successMessage}>
              <h3>Thank you!</h3>
              <p>You&rsquo;re subscribed. Look out for our content!</p>
            </div>
          )}
        </form>
      </article>
    </main>
  );
}

export default function BaseApparel() {
  return (
    <>
      <BackBanner />
      <div className={styles.container}>
        <Header />
        <Aside />
        <Main />
      </div>
      <PersonalFooter
        mySolution="https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-1EhXUnKW7h"
        projectNotes="https://github.com/melissakipp/frontend-mentor-projects/tree/main/app/base-apparel/notes.md"
        projectReadme="https://github.com/melissakipp/frontend-mentor-projects/tree/main/app/base-apparel/README.md"
      />
    </>
  );
}
