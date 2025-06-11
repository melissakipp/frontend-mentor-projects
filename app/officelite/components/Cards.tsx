import styles from './Cards.module.css';
import Card from './Card';

export default function Cards() {
  return (
    <div className={styles.container}>
      <Card />
      <Card />
      <Card />
    </div>
  )
}
