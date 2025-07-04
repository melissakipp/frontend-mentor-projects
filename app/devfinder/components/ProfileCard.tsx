// app/components/ProfileCard.tsx

import Image from 'next/image';
import styles from '../styles/ProfileCard.module.css';

/**
 * ProfileCard Props interface for type safety and Storybook compatibility
 */
interface ProfileCardProps {
  user: {
    avatar_url: string;
    login: string;
    name?: string;
    created_at: string;
    bio?: string;
    public_repos: number;
    followers: number;
  };
}

/**
 * A reusable, presentational profile card component for GitHub User Search.
 * Displays the user avatar, username, join date, bio, repository count, and followers.
 * Uses Next.js Image and CSS Modules for optimization and scoped styling.
 * @param user - User object containing GitHub profile data.
 */
export default function ProfileCard({ user }: ProfileCardProps) {
  const formattedDate = new Date(user.created_at).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className={styles.card}>
      <header className={styles.cardHeader}>
        <div>
          <Image src={user.avatar_url} alt={`${user.login}'s avatar`} width={100} height={100} />
        </div>
        <h2 className={styles.username}>{user.name ?? user.login}</h2>
        <p className={styles.joinDate}>Joined {formattedDate}</p>
        {user.bio && <p className={styles.bio}>{user.bio}</p>}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.reposStats}>{user.public_repos}</span>
            <span className={styles.repoLabel}>Repos</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statCount}>{user.followers}</span>
            <span className={styles.statLabel}>Followers</span>
          </div>
        </div>
      </header>
    </section>
  );
}
