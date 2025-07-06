import Image from 'next/image';
import styles from '../styles/ProfileCard.module.css';

interface ProfileCardProps {
  user: {
    avatar_url: string;
    login: string;
    name?: string;
    created_at: string;
    bio?: string;
    public_repos: number;
    followers: number;
    following?: number;
    location?: string;
    twitter_username?: string;
    company?: string;
    blog?: string;
  };
}

export default function ProfileCard({ user }: ProfileCardProps) {
  if (!user) {
    return (
      <section className={styles.card}>
        <p className={styles.noUser}>No user data available</p>
      </section>
    );
  }

  const formattedDate = user.created_at
    ? new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(new Date(user.created_at))
    : 'Not Available';

  // console.log('GitHub User Data:', user);

  return (
    <article className={styles.card}>
      {user.avatar_url ? (
          <Image
            className={styles.avatar}
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            width={117}
            height={117}
          />
        ) : (
          <div className={styles.avatarPlaceholder}>Not Available</div>
        )}

      <header className={styles.cardHeader}>
        <h2 className={styles.name}>{user.name?.trim() || 'Not Available'}</h2>
        <p className={styles.username}>@{user.login || 'Not Available'}</p>
        <p className={styles.joinDate}>Joined {formattedDate}</p>
      </header>

      <p className={styles.bio}>{user.bio?.trim() || 'This profile has no bio'}</p>

      <ul className={styles.statsList}>
        <li className={styles.statItem}>
          <div className={styles.statLabel}>Repos</div>
          <div className={styles.reposStats}>{user.public_repos ?? 0}</div>
        </li>
        <li className={styles.statItem}>
          <div className={styles.statLabel}>Followers</div>
          <div className={styles.statCount}>{user.followers ?? 0}</div>
        </li>
        <li className={styles.statItem}>
          <div className={styles.statLabel}>Following</div>
          <div className={styles.statCount}>{user.following ?? 0}</div>
        </li>
      </ul>

      <footer className={styles.cardFooter}>
        <ul className={styles.footerList}>
          <li className={styles.footerItem}>
            <Image
              className={styles.icon}
              src='/images/devfinder/icon-location.svg'
              alt='Location Icon'
              width={19}
              height={20}
            />
            <span>{user.location?.trim() || 'Not Available'}</span>
          </li>
          <li className={styles.footerItem}>
            <Image
              className={styles.icon}
              src='/images/devfinder/icon-twitter.svg'
              alt='Twitter Icon'
              width={19}
              height={20}
            />
            {user.twitter_username ? (
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.footerLink}
              >
                @{user.twitter_username}
              </a>
            ) : (
              <span>Not Available</span>
            )}
          </li>
          <li className={styles.footerItem}>
            <Image
              className={styles.icon}
              src='/images/devfinder/icon-website.svg'
              alt='Website Icon'
              width={19}
              height={20}
            />
            {user.blog ? (
              <a
                href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.footerLink}
              >
                {user.blog}
              </a>
            ) : (
              <span>Not Available</span>
            )}
          </li>
          <li className={styles.footerItem}>
            <Image
              className={styles.icon}
              src='/images/devfinder/icon-company.svg'
              alt='Company Icon'
              width={19}
              height={20}
            />
            <span>{user.company || 'Not Available'}</span>
          </li>
        </ul>
      </footer>
    </article>
  );
}
