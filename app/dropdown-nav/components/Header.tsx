import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/../public/images/dropdown-nav/logo.svg';
import MenuIcon from '@/../public/images/dropdown-nav/icon-menu.svg';
import ArrowIcon from '@/../public/images/dropdown-nav/icon-arrow-down.svg';
import TodoIcon from '@/../public/images/dropdown-nav/icon-todo.svg';
import CalendarIcon from '@/../public/images/dropdown-nav/icon-calendar.svg';
import RemindersIcon from '@/../public/images/dropdown-nav/icon-reminders.svg';
import PlanningIcon from '@/../public/images/dropdown-nav/icon-planning.svg';

import styles from './Header.module.css';

import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc: (e: KeyboardEvent) => void = (e) => {
      if (e.key === 'Escape') setActiveDropdown(null);
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const toggleDropdown = (id: string) => {
    setActiveDropdown(prev => (prev === id ? null : id));
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image 
            src={Logo} 
            alt="Logo" 
            width={100} 
            height={30} 
          />
        </div>
        
        <button 
          className={`${styles.button} ${styles.menuToggle}`} 
          aria-expanded="false" 
          aria-controls="nav-links" 
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image 
            className={styles.iconMenu} 
            src={MenuIcon} 
            alt="" 
            width={22}
            height={22}
          />
        </button>

        <div id="nav-links" className={`${styles.navWrapper} ${menuOpen ? styles.active : ''}`}>
          <ul className={styles.navLinks}>
            <li className={styles.navLinksItem}>
              <button 
                className={`${styles.button} ${styles.dropdownToggle}`} 
                aria-expanded={activeDropdown === 'features'}
                onClick={() => toggleDropdown('features')}
              >
                Features
                <Image 
                  className={styles.iconArrow} 
                  src={ArrowIcon} 
                  alt=""
                  width={12}
                  height={7}
                />
              </button>
              <ul className={`${styles.dropdownMenu} ${activeDropdown === 'features' ? styles.active : ''}`} id="features-dropdown">
                <li className={styles.dropdownItem}>
                  <Link href="#">
                    <div className={styles.menuItemWrapper}>
                      <Image
                        className={styles.dropdownIcon}
                        src={TodoIcon} 
                        alt=""  
                        aria-hidden="true"
                        width={20}
                        height={20} 
                      />
                      <span>Todo List</span>
                    </div>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="#">
                    <div className={styles.menuItemWrapper}>
                      <Image 
                        className={styles.dropdownIcon}
                        src={CalendarIcon}
                        alt="" 
                        aria-hidden="true"
                        width={20}
                        height={20}
                      />
                      <span>Calendar</span>
                    </div>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="#">
                    <div className={styles.menuItemWrapper}>
                      <Image 
                        className={styles.dropdownIcon}
                        src={RemindersIcon}
                        alt=""                       
                        aria-hidden="true"
                        width={20}
                        height={20}
                      />
                      <span>Reminders</span>
                    </div>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="#">
                    <div className={styles.menuItemWrapper}>
                      <Image 
                        className={styles.dropdownIcon}
                        src={PlanningIcon}
                        alt=""             
                        aria-hidden="true"
                        width={20}
                        height={20} 
                      />
                      <span>Planning</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            
            <li className={styles.navLinksItem}>
              <button 
                className={`${styles.button} ${styles.dropdownToggle}`} 
                aria-expanded="false" 
                aria-controls="company-dropdown"
              >
                Company
                <Image 
                  className={styles.iconArrow} 
                  src={ArrowIcon} 
                  alt="" 
                  width={12}
                  height={7}
                />
              </button>
              <ul id="company-dropdown" className={styles.dropdownMenu}>
                <li><Link href="#">History</Link></li>
                <li><Link href="#">Our Team</Link></li>
                <li><Link href="#">Blog</Link></li>
              </ul>
            </li>

            <li className={styles.navLinksItem}>
              <Link href="#">Careers</Link>
            </li>
            <li className={styles.navLinksItem}>
              <Link href="#">About</Link>
            </li>
          </ul>

          <div className={styles.navAuth}>
            <Link className={styles.login} href="#">Login</Link>
            <Link className={`${styles.btn} ${styles.btnWide}`} href="#">Register</Link>
          </div>
        </div>

        <div className={styles.navOverlay} aria-hidden="true"></div>
      </nav>
    </header>
  );
}
