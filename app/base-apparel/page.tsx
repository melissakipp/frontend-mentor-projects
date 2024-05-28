'use client';
import Image from 'next/image'
import { useState, useLayoutEffect } from 'react';

import './base.css';
import Logo from '../../public/base-apparel-images/logo.svg';
import IconError from '../../public/base-apparel-images/icon-error.svg';
import Arrow from '../../public/base-apparel-images/icon-arrow.svg';
import desktopImage from '../../public/base-apparel-images/hero-desktop.jpg';
import mobileImage from '../../public/base-apparel-images/hero-mobile.jpg';
import BackBanner from '../components/BackBanner';

function Header() {
  return (
    <header className='header' role="banner">
      <Image className="logo" src={Logo} alt="Base Apparel logo" />
    </header>
  );
}

function Aside() {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 600);
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // Call on initial render

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const altText = { alt: "Model wearing Base Apparel's organge t-shirt" };

  return (
    <aside className="hero">
      <h1 className="sr-only">Landing page</h1>
      {isMobile ? (
        <Image className="hero-img" src={desktopImage} alt={altText.alt}  />
      ) : (
        <Image className="hero-img" src={mobileImage} priority={true} alt={altText.alt} />
      )}
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

function Footer() {

  const frontendMentor = "https://www.frontendmentor.io?ref=challenge";
  const personalSite = "https://melissajkipp.com";
  const githubPage = "https://github.com/melissakipp/frontend-mentor-projects/tree/main/app/base-apparel/notes.md";
  const projectReadme = "https://github.com/melissakipp/frontend-mentor-projects/tree/main/app/base-apparel/README.md";

  return (
    <footer>
      <article>
        <section>
          <h3 className="sr-only">Contact Information</h3>
          <p className="attribution">
            Challenge by <a href={frontendMentor} target="_blank">Frontend Mentor</a><span className="sr-only">open in a new tab</span>.
            Coded by <a href={personalSite} target="_blank">Melissa Kipp</a><span className="sr-only">open in a new tab</span>.
          </p>
        </section>
        <br />
        <section>
          <h3 className="sr-only">Project notes</h3>
          <p>
            GitHub Read me: <a href={githubPage} target="_blank">Takeaways and thoughts</a> <span className="sr-only">open in a new tab</span> and <a href={projectReadme} target="_blank">Project Readme</a><span className="sr-only">open in a new tab</span>.
          </p>
        </section>
      </article>
    </footer>
  )
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
    <Footer />
    </>
  );
}