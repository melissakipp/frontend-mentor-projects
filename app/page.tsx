import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import cardImage from "../public/base-apparel-images/Screenshot-2024-05-27_first-draft.png";

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
              />
            </Link>
          </li>
        </ul>
      </section>

      </article>
    </main>
  );
}
