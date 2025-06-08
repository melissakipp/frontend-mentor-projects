'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

// Import types from separate file
import type {
  HeaderNavigationData,
  HeaderNavigationItem,
  HeaderDropdownType,
  HeaderDropdownMenuProps,
  HeaderMobileDropdownMenuProps,
  HeaderFocusableSelectors,
  HeaderProps
} from './types';

import Logo from '@/../public/images/dropdown-nav/logo.svg';
import IconMenu from '../../../public/images/dropdown-nav/icon-menu.svg';
import IconClose from '../../../public/images/dropdown-nav/icon-close-menu.svg';
import IconArrowDown from '../../../public/images/dropdown-nav/icon-arrow-down.svg';
import IconArrowUp from '../../../public/images/dropdown-nav/icon-arrow-up.svg';

import IconTodo from '../../../public/images/dropdown-nav/icon-todo.svg';
import IconCalendar from '../../../public/images/dropdown-nav/icon-calendar.svg';
import IconReminders from '../../../public/images/dropdown-nav/icon-reminders.svg';
import IconPlanning from '../../../public/images/dropdown-nav/icon-planning.svg';

// Default navigation data
const defaultNavigationData: HeaderNavigationData = {
  features: [
    { href: '#', text: 'Todo List', icon: IconTodo },
    { href: '#', text: 'Calendar', icon: IconCalendar },
    { href: '#', text: 'Reminders', icon: IconReminders },
    { href: '#', text: 'Planning', icon: IconPlanning },
  ],
  company: [
    { href: '#', text: 'History' },
    { href: '#', text: 'Our Team' },
    { href: '#', text: 'Blog' },
  ],
  mainNav: [
    { href: '#', text: 'Careers' },
    { href: '#', text: 'About' },
  ]
} as const;

// Focusable element selectors for focus trap
const focusableSelectors: HeaderFocusableSelectors = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input[type="text"]:not([disabled])',
  'input[type="radio"]:not([disabled])',
  'input[type="checkbox"]:not([disabled])',
  'select:not([disabled])'
];

// Reusable dropdown component with proper typing
const DropdownMenu: React.FC<HeaderDropdownMenuProps> = ({ 
  items, 
  isActive, 
  onToggle, 
  buttonText, 
  dropdownId, 
  className = '',
  itemClassName = '',
  onItemClick 
}) => (
  <>
    <button 
      className={className}
      onClick={onToggle}
      aria-expanded={isActive}
      aria-controls={dropdownId}
      type="button"
    >
      {buttonText}
      <Image 
        src={isActive ? IconArrowUp : IconArrowDown} 
        alt="" 
        className={styles.dropdownIcon}
        aria-hidden="true"
      />
    </button>
    {isActive && (
      <ul id={dropdownId} className={styles.dropdown}>
        {items.map((item, index) => (
          <li key={`${item.text}-${index}`}>
            <Link href={item.href} className={itemClassName} onClick={onItemClick}>
              {item.icon && (
                <Image 
                  src={item.icon} 
                  alt="" 
                  className={styles.featureIcon} 
                  aria-hidden="true" 
                />
              )}
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    )}
  </>
);

// Reusable mobile dropdown component with proper typing
const MobileDropdownMenu: React.FC<HeaderMobileDropdownMenuProps> = ({ 
  items, 
  isActive, 
  onToggle, 
  buttonText, 
  dropdownId,
  onItemClick 
}) => (
  <>
    <button 
      className={styles.mobileDropdownBtn}
      onClick={onToggle}
      aria-expanded={isActive}
      aria-controls={dropdownId}
      type="button"
    >
      {buttonText}
      <Image 
        src={isActive ? IconArrowUp : IconArrowDown} 
        alt="" 
        className={styles.dropdownIcon}
        aria-hidden="true"
      />
    </button>
    {isActive && (
      <ul id={dropdownId} className={styles.mobileDropdown}>
        {items.map((item, index) => (
          <li key={`mobile-${item.text}-${index}`}>
            <Link href={item.href} className={styles.mobileDropdownItem} onClick={onItemClick}>
              {item.icon && (
                <Image 
                  src={item.icon} 
                  alt="" 
                  className={styles.featureIcon} 
                  aria-hidden="true" 
                />
              )}
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    )}
  </>
);

const Header: React.FC<HeaderProps> = ({
  className,
  navigationData,
  variant = 'default',
  showLogo = true,
  logo,
  onMobileMenuToggle,
  sticky = false
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<HeaderDropdownType>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Use provided navigation data or fall back to defaults
  const currentNavigationData = navigationData || defaultNavigationData;

  // Generate header CSS classes based on props
  const headerClasses = [
    styles.header,
    variant === 'compact' && styles.headerCompact,
    variant === 'transparent' && styles.headerTransparent,
    sticky && styles.headerSticky,
    className
  ].filter(Boolean).join(' ');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on resize and handle escape key
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { 
      document.body.style.overflow = ''; 
    };
  }, [isMobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const trap = document.querySelector(`.${styles.mobileNav}`);
    if (!trap) return;

    const focusableElements = trap.querySelectorAll<HTMLElement>(focusableSelectors.join(','));
    if (focusableElements.length === 0) return;

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstEl.focus();

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (): void => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    setActiveDropdown(null);
    
    // Call callback if provided
    onMobileMenuToggle?.(newState);
  };

  const toggleDropdown = (name: HeaderDropdownType): void => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    
    // Call callback if provided
    onMobileMenuToggle?.(false);
  };

  return (
    <header className={headerClasses}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        {showLogo && (
          <Link href="/" className={styles.logo}>
            {logo || <Image src={Logo} alt="Snap Logo" priority />}
          </Link>
        )}

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} ref={navRef}>
          <ul className={styles.navList}>
            {/* Features Dropdown */}
            <li className={styles.navItem}>
              <DropdownMenu
                items={currentNavigationData.features}
                isActive={activeDropdown === 'features'}
                onToggle={() => toggleDropdown('features')}
                buttonText="Features"
                dropdownId="features-dropdown"
                className={styles.dropdownBtn}
                itemClassName={styles.dropdownItem}
              />
            </li>
            
            {/* Company Dropdown */}
            <li className={styles.navItem}>
              <DropdownMenu
                items={currentNavigationData.company}
                isActive={activeDropdown === 'company'}
                onToggle={() => toggleDropdown('company')}
                buttonText="Company"
                dropdownId="company-dropdown"
                className={styles.dropdownBtn}
                itemClassName={styles.dropdownItem}
              />
            </li>
            
            {/* Main navigation links */}
            {currentNavigationData.mainNav.map((item: HeaderNavigationItem, index: number) => (
              <li key={`nav-${item.text}-${index}`} className={styles.navItem}>
                <Link href={item.href} className={styles.navLink}>{item.text}</Link>
              </li>
            ))}
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
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          <Image 
            src={isMobileMenuOpen ? IconClose : IconMenu} 
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={styles.mobileNavOverlay} 
          onClick={closeMobileMenu}
          aria-hidden="true"
        >
          <div 
            id="mobile-navigation"
            className={styles.mobileNav}
            ref={mobileMenuRef}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            {/* Close button inside mobile nav */}
            <div className={styles.mobileNavHeader}>
              <button 
                className={styles.mobileCloseBtn}
                onClick={closeMobileMenu}
                aria-label="Close menu"
                type="button"
              >
                <Image src={IconClose} alt="" aria-hidden="true" />
              </button>
            </div>

            <nav 
              className={styles.mobileNavContent}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              <ul className={styles.mobileNavList}>
                {/* Features Mobile Dropdown */}
                <li className={styles.mobileNavItem}>
                  <MobileDropdownMenu
                    items={currentNavigationData.features}
                    isActive={activeDropdown === 'mobileFeatures'}
                    onToggle={() => toggleDropdown('mobileFeatures')}
                    buttonText="Features"
                    dropdownId="mobile-features-dropdown"
                    onItemClick={closeMobileMenu}
                  />
                </li>
                
                {/* Company Mobile Dropdown */}
                <li className={styles.mobileNavItem}>
                  <MobileDropdownMenu
                    items={currentNavigationData.company}
                    isActive={activeDropdown === 'mobileCompany'}
                    onToggle={() => toggleDropdown('mobileCompany')}
                    buttonText="Company"
                    dropdownId="mobile-company-dropdown"
                    onItemClick={closeMobileMenu}
                  />
                </li>
                
                {/* Main navigation links */}
                {currentNavigationData.mainNav.map((item: HeaderNavigationItem, index: number) => (
                  <li key={`mobile-nav-${item.text}-${index}`} className={styles.mobileNavItem}>
                    <Link href={item.href} className={styles.mobileNavLink} onClick={closeMobileMenu}>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className={styles.mobileAuthButtons}>
                <Link href="#" className={styles.mobileLoginBtn} onClick={closeMobileMenu}>Login</Link>
                <Link href="#" className={styles.mobileRegisterBtn} onClick={closeMobileMenu}>Register</Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;