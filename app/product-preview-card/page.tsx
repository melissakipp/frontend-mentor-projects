'use client';

import Image from 'next/image';

import BackBanner from '../components/BackBanner';
import PersonalFooter from '../components/PersonalFooter';
import CloudinaryImage from '../components/CloudinaryImage';

import styles from './product-preview-card.module.css';

import shoppingCart from '../../public/images/product-preview/icon-cart.svg';

function ProductCardPreview() {
  return (
    <article className={styles.product}>
      <h1 className={styles.srOnly}>Product Card</h1>
      <figure className={styles.productImgContainer}>
        <div className={styles.productImg}>
          {/* Mobile Image - Hidden on desktop */}
          <div className={styles.productImgMobile}>
            <CloudinaryImage
              publicId='frontend-mentor/image-product-mobile_ksycbv'
              alt='Gabrielle Essense perfume bottle laying flat on a table with green leaves above and below it'
              width={686}
              height={480}
              crop='fill'
              quality='auto'
              format='auto'
              className={styles.img}
              sizes='(max-width: 599px) 100vw, 0px'
              priority={true}
            />
          </div>

          {/* Desktop Image - Hidden on mobile */}
          <div className={styles.productImgDesktop}>
            <CloudinaryImage
              publicId='frontend-mentor/image-product-desktop_rnwygd'
              alt='Gabrielle Essense perfume bottle laying flat on a table with green leaves above and below it'
              width={600}
              height={1000}
              crop='fill'
              quality='auto'
              format='auto'
              className={styles.img}
              sizes='(min-width: 600px) 50vw, 0px'
              priority={true}
            />
          </div>
        </div>
        <figcaption className={styles.srOnly}>Perfume bottle laying on a table with green foliage around the bottle.</figcaption>
      </figure>
      <div className={styles.productContent}>
        <header>
          <h2 className={styles.productCategory}>Perfume</h2>
        </header>
        <section>
          <h3 className={styles.productTitle}>Gabrielle Essence Eau De Parfum</h3>
          <p className={styles.productDescription}>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        </section>
        <section className={styles.productPricing}>
          <p className={styles.productFinal}>$149.99</p>
          <p className={styles.productOriginal}>$169.99</p>
        </section>
        <button className={styles.productBtn}>
          <span>
            <Image
              className={styles.productBtnIcon}
              src={shoppingCart}
              alt=''
              aria-hidden='true'
            />
          </span>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default function ProductPreviewCard() {
  return (
    <>
      <BackBanner />
      <main className={styles.mainContent}>
        <ProductCardPreview />
      </main>
      <PersonalFooter
        mySolution='https://www.frontendmentor.io/solutions/product-preview-card-solution-2bLFm2ApdY'
        projectNotes='https://github.com/melissakipp/frontend-mentor-projects/tree/main/app/product-preview-card/notes.md'
        projectReadme='https://github.com/melissakipp/frontend-mentor-projects/blob/main/app/product-preview-card/README.md'
      />
    </>
  );
}