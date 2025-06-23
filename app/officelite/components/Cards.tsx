import styles from './Cards.module.css';
import Card from './Card';

export default function Cards() {
  return (
    <article className={styles.container}>
      <Card type="free" />
      <Card type="basic" />
      <Card type="ultimate" />
    </article>
  );
}
