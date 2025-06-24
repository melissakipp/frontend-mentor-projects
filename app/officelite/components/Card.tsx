import Link from 'next/link';

import styles from './Card.module.css';
import { cardData } from './cardData';

type PlanType = 'free' | 'basic' | 'ultimate';

interface CardProps {
  type: PlanType;
}

export default function Card({ type }: CardProps) {
  
  const plan = cardData[type] || {
    title: 'Plan Not Found',
    subtitle: 'Error',
    description: '',
    features: ['Contact support'],
    link: '/officelite/sign-up'
  };

  return (
    <section className={styles.card}>
        <h2 className={styles.title}>{plan.title}</h2>
        <p className={styles.subtitle}>{plan.subtitle}</p>
        <p className={styles.description}>{plan.description}</p>
        <ul className={styles.features}>
          {plan.features.map((feature, idx) => (
            <li key={idx} className={styles.featureItem}>
              {feature}
            </li>
          ))}
        </ul>
        <Link href={plan.link} className={styles.link}>
          Try for Free
        </Link>
    </section>
  );
}