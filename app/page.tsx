import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import cardImage from "../public/base-apparel-images/screenshot_desktop.png";
import cardImagePPC from "../public/product-preview-images/screenshot_desktop-solution.png";

export default function Home() {
  return (
    <main className={styles.homePage}>
      <article>
      <h1 className={styles.pageTitle}>Frontend Mentor</h1>
      <section className={styles.challenges}>
        <h2 className={styles.title} >Newbie</h2>
        <ul className={styles.cardList}>
          <li className={styles.card}>
            <Link href="/base-apparel">
              <h3 className={styles.cardTitle}>
                Base Apparel Coming Soon Page
              </h3>
              <Image
                className={styles.cardImg}
                src={cardImage}
                alt=""
                aria-hidden="true"
                width={300}
                height={300}
                loading="lazy"
              />
            </Link>
          </li>
          <li className={styles.card}>
            <Link href="/product-preview-card">
              <h3 className={styles.cardTitle}>
                Product Preview Card
              </h3>
              <Image
                className={styles.cardImg}
                src={cardImagePPC}
                alt=""
                aria-hidden="true"
                width={300}
                height={300}
                loading="lazy"
              />
            </Link>
          </li>
        </ul>
      </section>

      </article>
    </main>
  );
}
