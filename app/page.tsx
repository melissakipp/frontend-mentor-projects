import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Frontend Mentor</h1>
      <ul>
        <li>
          <Link href="/base-apparel">
            Base Apparel Coming Soon Page
          </Link>
        </li>
      </ul>
    </main>
  );
}
