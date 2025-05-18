import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
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
    image: '/images/base-apparel/base-apparel-preview.png',
    path: '/base-apparel'
  },
  {
    id: 'product-preview-card',
    title: 'Product Preview Card',
    description: 'Responsive product card component',
    image: '/images/product-preview/screenshot_desktop.png',
    path: '/product-preview-card'
  },
  {
    id: 'ratings-card',
    title: 'Interactive Rating Component',
    description: 'User feedback component with rating selection',
    image: '/images/ratings-card/rating-card-preview.png',
    path: '/ratings-card'
  },
  {
    id: 'dropdown-nav',
    title: 'Intro section with dropdown navigation',
    description: 'Responsive with accessible dropdown and frontend interaction testing',
    image: '/images/dropdown-nav/dropdown-nav-preview.png',
    path: '/dropdown-nav'
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
                <Image
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  width={300}
                  height={200}
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
            <a href="https://github.com/melissakipp" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className={styles.socialIcon} />
            </a>
            <a href="https://linkedin.com/in/melissajkipp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className={styles.socialIcon} />
            </a>
            <a href="https://twitter.com/_melissakipp" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
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