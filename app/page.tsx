import Link from 'next/link';

import styles from './page.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import CloudinaryImage from './components/CloudinaryImage';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  path: string;
}
// Project card data
const projects: Project[] = [
  {
    id: 'base-apparel',
    title: 'Base Apparel',
    description: 'Coming soon page with email validation',
    image: 'frontend-mentor/base-apparel-preview_dvctjf',
    path: '/base-apparel'
  },
  {
    id: 'product-preview-card',
    title: 'Product Preview Card',
    description: 'Responsive product card component',
    image: 'frontend-mentor/screenshot_desktop_ykzlep',
    path: '/product-preview-card'
  },
  {
    id: 'ratings-card',
    title: 'Interactive Rating Component',
    description: 'User feedback component with rating selection',
    image: 'frontend-mentor/rating-card-preview_xurakh',
    path: '/ratings-card'
  },
  {
    id: 'dropdown-nav',
    title: 'Intro section with dropdown navigation',
    description: 'Responsive with accessible dropdown and frontend interaction testing',
    image: 'frontend-mentor/dropdown-nav-preview_mzec5i',
    path: '/dropdown-nav'
  },
  {
    id: 'officelite',
    title: 'Officelite coming soon site',
    description: 'Build a responsive 2-page coming soon website with form validation, countdown timer, and custom form controls.',
    image: 'frontend-mentor/officelite-preview_qljaju',
    path: '/officelite'
  },
  {
    id: 'devfinder',
    title: 'DevFinder',
    description: 'Build a responsive GitHub user search application with light and dark themes.',
    image: 'frontend-mentor/github-search-preview_gwjnuk',
    path: '/devfinder'
  }
];

export default function Home() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Frontend Mentor Challenges</h1>
        <p className={styles.description}>
          A collection of completed challenges from Frontend Mentor
        </p>
      </header>

      <main className={styles.main}>
        <section className={styles.projectGrid}>
          {projects.map((project) => (
            <Link href={project.path} key={project.id} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <CloudinaryImage
                  publicId={project.image}
                  alt={`Preview of ${project.title}`}
                  width={250}
                  height={175}
                  crop='fill'
                  quality='auto'
                  format='auto'
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.cardDescription}>{project.description}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <HiCode className={styles.codeIcon} />
            <h3>Melissa Kipp</h3>
          </div>
          
          <div className={styles.footerSocial}>
            <a href='https://github.com/melissakipp' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
              <FaGithub className={styles.socialIcon} />
            </a>
            <a href='https://linkedin.com/in/melissajkipp' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
              <FaLinkedin className={styles.socialIcon} />
            </a>
            <a href='https://twitter.com/_melissakipp' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
              <FaTwitter className={styles.socialIcon} />
            </a>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>
            &copy; {getCurrentYear()} Melissa Kipp. All rights reserved.
          </p>
          <p className={styles.footerTagline}>
            Crafting beautiful web experiences with <span className={styles.accentText}>passion</span> and <span className={styles.accentText}>code</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
