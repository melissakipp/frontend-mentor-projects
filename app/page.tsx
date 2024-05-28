import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.homePage}>
      <article>
      <h1>Frontend Mentor</h1>
      <section className={styles.challenges}>
        <h2>Newbie</h2>
        <ul>
          <li className={styles.card}>
            <Link href="/base-apparel">
              <Image
              src="/base-apparel-images/Screenshot-2024-05-27_first-draft.png"
              alt=""
              aria-hidden="true"
              width={300}
              height={300}
              />
                Base Apparel Coming Soon Page
            </Link>
          </li>
        </ul>
      </section>

      </article>
    </main>
  );
}
