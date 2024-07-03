'use client';
import Image from 'next/image';
import { useState } from 'react';

import './base.css';
import Logo from '../../public/base-apparel-images/logo.svg';
import IconError from '../../public/base-apparel-images/icon-error.svg';
import Arrow from '../../public/base-apparel-images/icon-arrow.svg';
import desktopImage from '../../public/base-apparel-images/hero-desktop.jpg';import BackBanner from '../components/BackBanner';
import PersonalFooter from '../components/PersonalFooter';

function Header() {
  return (
    <header className='header' role="banner">
      <Image className="logo" src={Logo} alt="Base Apparel logo" />
    </header>
  );
}

function Aside() {

  return (
    <aside className="hero">
      <h1 className="sr-only">Landing page</h1>
      <div style={{position: 'relative',  height: '600px', width: '100%'}}>
        <picture>
          <Image
            className="hero-img"
            src={desktopImage}
            alt=""
            aria-hidden="true"
            fill
          />
        </picture>
      </div>
    </aside>
  );
}



function Main() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [emailValue, setEmailValue] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const emailValue = event.target.elements.email.value;

    if (validateEmail(emailValue)) {
      handleSuccess();
      setEmailValue('');
    } else {
      handleError();
    }
  };

  const validateEmail = (email: any) => {
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

  const handleInputChange = (event: any) => {
    setEmailValue(event.target.value); // Update state on input change
  };

  return (
    <main className="main">
    <article className="announcement">
      <h2 className="call-out">
        <span className="ann-one">We&rsquo;re</span><br />
        <span className="ann-two">coming soon</span>
      </h2>
      <p className="message">
        Hello fellow shoppers! We&rsquo;re currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
      </p>
      <form
        id="form"
        className="form-layout"
        action="#"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h2 className="sr-only">Email Sign-up Form</h2>
        <fieldset className="form-control">
          <label className="sr-only" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            className={isError ? "input error" : "input"}
            type="email"
            placeholder="Email address"
            value={emailValue}
            aria-label="Email address"
            onChange={handleInputChange}
          />
          <Image
            id="errorIcon"
            className={`error-icon ${isError ? "visible" : ""}`}
            aria-hidden="true"
            src={IconError}
            alt=""
          />
          <button id="submitBtn" type="submit">
            <span className="sr-only">submit</span>
            <Image className="arrow" aria-hidden="true" src={Arrow} alt="" />
          </button>
        </fieldset>
        {isError && (
          <div id="errorMgs" className="error-message">
            <p>Please provide a valid email</p>
          </div>
        )}
        {isSuccess && (
          <div className="success-message">
            <h2>Thank you!</h2>
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
    <div className="container">
      <Header />
      <Aside />
      <Main />
    </div>
    <footer>
      <PersonalFooter
        mySolution="https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-1EhXUnKW7h"
        projectNotes="https://github.com/melissakipp/frontend-mentor-projects/tree/main/app/base-apparel/notes.md"
        projectReadme="https://github.com/melissakipp/frontend-mentor-projects/tree/main/app/base-apparel/README.md"
      />
    </footer>
    </>
  );
}