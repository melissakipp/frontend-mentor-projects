import styles from './Cards.module.css';
import Card from './Card';

export default function Cards() {
  return (
    <article className={styles.container}>
      <div className={styles.cardsWrapper}>
        <Card type="free" />
        <Card type="basic" />
        <Card type="ultimate" />
      </div>
    </article>
  );
}
