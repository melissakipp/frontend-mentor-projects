import Image from 'next/image';
import './product.css';

import PPCDesktop from '../../public/product-preview-images/image-product-desktop.jpg';
import PPCMobile from '../../public/product-preview-images/image-product-mobile.jpg';
import shoppingCart from '../../public/product-preview-images/icon-cart.svg';

import BackBanner from '../components/BackBanner';

function ProductCardPreview() {
  return (
    <article className="product">
      <h1 className="sr-only">Product Card</h1>
      <figure className="product__img-container">
        <picture className="product__img">
          <source srcSet={PPCMobile.src} media="(max-width: 599px)" />
          <Image
            className="img"
            src={PPCDesktop.src}
            alt="Gabrielle Essense perfume bottle laying flat on a table with green leaves above and below it"
            width={600}
            height={600}
          />
        </picture>
        <figcaption className="sr-only">Perfume bottle laying on a table with green foliage around the bottle.</figcaption>
      </figure>
      <div className="product__content">
        <header>
          <h2 className="product__category">Perfume</h2>
        </header>
        <section>
          <h3 className="product__title">Gabrielle Essence Eau De Parfum</h3>
          <p className="product__description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        </section>
        <section className="product__pricing">
          <p className="product__final">$149.99</p>
          <p className="product__original">$169.99</p>
        </section>
        <button className="product__btn">
          <span>
            <Image
              className="product__btn-icon"
              src={shoppingCart}
              alt=""
              aria-hidden="true"
            />
          </span>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer>
      <article>
        <section>
          <h3 className="sr-only">Contact Information</h3>
          <p className="attribution">
            Challenge by <a href="https://www.frontendmentor.io/solutions/product-preview-card-solution-2bLFm2ApdY" target="_blank">Frontend Mentor</a> <span className="sr-only">open in a new tab</span>.
            Coded by <a href="https://melissajkipp.com" target="_blank">Melissa Kipp</a> <span className="sr-only">open in a new tab</span>.
          </p>
        </section>
        <br />
        <section>
          <h3 className="sr-only">Project notes</h3>
          <a href="https://github.com/melissakipp/frontend-mentor-projects/tree/main/app/product-preview-card/notes.md" target="_blank">Takeaways and thoughts</a> <span className="sr-only">open in a new tab</span> and <a href="https://github.com/melissakipp/frontend-mentor-projects/blob/main/app/product-preview-card/README.md" target="_blank">Project Readme</a><span className="sr-only">open in a new tab</span>.
        </section>
      </article>
    </footer>
  );
}

export default function ProductPreviewCard() {
  return (
    <>
    <BackBanner />
    <main className="main__content">
      <ProductCardPreview />
    </main>
    <Footer />
    </>

  );
}