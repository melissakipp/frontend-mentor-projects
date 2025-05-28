'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

import Logo from '@/../public/images/dropdown-nav/logo.svg';
import IconMenu from '../../../public/images/dropdown-nav/icon-menu.svg';
import IconClose from '../../../public/images/dropdown-nav/icon-close-menu.svg';
import IconArrowDown from '../../../public/images/dropdown-nav/icon-arrow-down.svg';
import IconArrowUp from '../../../public/images/dropdown-nav/icon-arrow-up.svg';

import IconTodo from '../../../public/images/dropdown-nav/icon-todo.svg';
import IconCalendar from '../../../public/images/dropdown-nav/icon-calendar.svg';
import IconReminders from '../../../public/images/dropdown-nav/icon-reminders.svg';
import IconPlanning from '../../../public/images/dropdown-nav/icon-planning.svg';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close any open dropdowns when toggling mobile menu
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={styles.header} ref={navRef}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image src={Logo} alt="Snap Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {/* Features Dropdown */}
            <li className={styles.navItem}>
              <button 
                className={styles.dropdownBtn}
                onClick={() => toggleDropdown('features')}
                aria-expanded={activeDropdown === 'features'}
              >
                <span>Features</span>
                <Image 
                  src={activeDropdown === 'features' ? IconArrowUp : IconArrowDown} 
                  alt="" 
                  className={styles.dropdownIcon} 
                />
              </button>
              {activeDropdown === 'features' && (
                <ul className={styles.dropdown}>
                  <li>
                    <Link href="#" className={styles.dropdownItem}>
                      <Image src={IconTodo} alt="" className={styles.featureIcon} />
                      <span>Todo List</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className={styles.dropdownItem}>
                      <Image src={IconCalendar} alt="" className={styles.featureIcon} />
                      <span>Calendar</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className={styles.dropdownItem}>
                      <Image src={IconReminders} alt="" className={styles.featureIcon} />
                      <span>Reminders</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className={styles.dropdownItem}>
                      <Image src={IconPlanning} alt="" className={styles.featureIcon} />
                      <span>Planning</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            
            {/* Company Dropdown */}
            <li className={styles.navItem}>
              <button 
                className={styles.dropdownBtn}
                onClick={() => toggleDropdown('company')}
                aria-expanded={activeDropdown === 'company'}
              >
                Company
                <Image 
                  src={activeDropdown === 'company' ? IconArrowUp : IconArrowDown} 
                  alt="" 
                  className={styles.dropdownIcon} 
                />
              </button>
              {activeDropdown === 'company' && (
                <ul className={styles.dropdown}>
                  <li><Link href="#" className={styles.dropdownItem}>History</Link></li>
                  <li><Link href="#" className={styles.dropdownItem}>Our Team</Link></li>
                  <li><Link href="#" className={styles.dropdownItem}>Blog</Link></li>
                </ul>
              )}
            </li>
            
            <li className={styles.navItem}><Link href="#">Careers</Link></li>
            <li className={styles.navItem}><Link href="#">About</Link></li>
          </ul>
          
          <div className={styles.authButtons}>
            <Link href="#" className={styles.loginBtn}>Login</Link>
            <Link href="#" className={styles.registerBtn}>Register</Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn} 
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          <Image 
            src={isMobileMenuOpen ? IconClose : IconMenu} 
            alt={isMobileMenuOpen ? "Close menu" : "Open menu"} 
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className={styles.mobileNavOverlay}>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {/* Features Mobile Dropdown */}
              <li className={styles.mobileNavItem}>
                <button 
                  className={styles.mobileDropdownBtn}
                  onClick={() => toggleDropdown('mobileFeatures')}
                >
                  Features
                  <Image 
                    src={activeDropdown === 'mobileFeatures' ? IconArrowUp : IconArrowDown} 
                    alt="" 
                    className={styles.dropdownIcon} 
                  />
                </button>
                {activeDropdown === 'mobileFeatures' && (
                  <ul className={styles.mobileDropdown}>
                    <li>
                      <Link href="#" className={styles.mobileDropdownItem}>
                        <Image src={IconTodo} alt="" className={styles.featureIcon} />
                        <span>Todo List</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className={styles.mobileDropdownItem}>
                        <Image src={IconCalendar} alt="" className={styles.featureIcon} />
                        <span>Calendar</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className={styles.mobileDropdownItem}>
                        <Image src={IconReminders} alt="" className={styles.featureIcon} />
                        <span>Reminders</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className={styles.mobileDropdownItem}>
                        <Image src={IconPlanning} alt="" className={styles.featureIcon} />
                        <span>Planning</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              
              {/* Company Mobile Dropdown */}
              <li className={styles.mobileNavItem}>
                <button 
                  className={styles.mobileDropdownBtn}
                  onClick={() => toggleDropdown('mobileCompany')}
                >
                  Company
                  <Image 
                    src={activeDropdown === 'mobileCompany' ? IconArrowUp : IconArrowDown} 
                    alt="" 
                    className={styles.dropdownIcon} 
                  />
                </button>
                {activeDropdown === 'mobileCompany' && (
                  <ul className={styles.mobileDropdown}>
                    <li><Link href="#" className={styles.mobileDropdownItem}>History</Link></li>
                    <li><Link href="#" className={styles.mobileDropdownItem}>Our Team</Link></li>
                    <li><Link href="#" className={styles.mobileDropdownItem}>Blog</Link></li>
                  </ul>
                )}
              </li>
              
              <li className={styles.mobileNavItem}><Link href="#">Careers</Link></li>
              <li className={styles.mobileNavItem}><Link href="#">About</Link></li>
            </ul>
            
            <div className={styles.mobileAuthButtons}>
              <Link href="#" className={styles.mobileLoginBtn}>Login</Link>
              <Link href="#" className={styles.mobileRegisterBtn}>Register</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
