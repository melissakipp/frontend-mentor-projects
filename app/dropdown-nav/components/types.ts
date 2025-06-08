import { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

/**
 * Represents a single navigation item in the menu
 */
export interface NavigationItem {
  href: string;
  text: string;
  icon?: StaticImageData;
}

/**
 * Structure for all navigation data in the header
 */
export interface NavigationData {
  features: NavigationItem[];
  company: NavigationItem[];
  mainNav: NavigationItem[];
}

/**
 * Union type for all possible dropdown states
 */
export type DropdownType = 'features' | 'company' | 'mobileFeatures' | 'mobileCompany' | null;

/**
 * Props for the desktop DropdownMenu component
 */
export interface DropdownMenuProps {
  items: NavigationItem[];
  isActive: boolean;
  onToggle: () => void;
  buttonText: string;
  dropdownId: string;
  className?: string;
  itemClassName?: string;
  onItemClick?: () => void;
}

/**
 * Props for the mobile DropdownMenu component
 */
export interface MobileDropdownMenuProps {
  items: NavigationItem[];
  isActive: boolean;
  onToggle: () => void;
  buttonText: string;
  dropdownId: string;
  onItemClick?: () => void;
}

/**
 * Selectors for focusable elements in focus trap
 */
export type FocusableSelectors = string[];

/**
 * Represents a single navigation item in the menu
 */
export interface HeaderNavigationItem {
  href: string;
  text: string;
  icon?: StaticImageData;
}

/**
 * Structure for all navigation data in the header
 */
export interface HeaderNavigationData {
  features: HeaderNavigationItem[];
  company: HeaderNavigationItem[];
  mainNav: HeaderNavigationItem[];
}

/**
 * Union type for all possible dropdown states
 */
export type HeaderDropdownType = 'features' | 'company' | 'mobileFeatures' | 'mobileCompany' | null;

/**
 * Props for the desktop DropdownMenu component
 */
export interface HeaderDropdownMenuProps {
  items: HeaderNavigationItem[];
  isActive: boolean;
  onToggle: () => void;
  buttonText: string;
  dropdownId: string;
  className?: string;
  itemClassName?: string;
  onItemClick?: () => void;
}

/**
 * Props for the mobile DropdownMenu component
 */
export interface HeaderMobileDropdownMenuProps {
  items: HeaderNavigationItem[];
  isActive: boolean;
  onToggle: () => void;
  buttonText: string;
  dropdownId: string;
  onItemClick?: () => void;
}

/**
 * Selectors for focusable elements in focus trap
 */
export type HeaderFocusableSelectors = string[];

/**
 * Header component variant types
 */
export type HeaderVariant = 'default' | 'compact' | 'transparent';

/**
 * Header component props - Future-ready interface with all configurable options
 */
export interface HeaderProps {
  className?: string;
  navigationData?: HeaderNavigationData;
  variant?: HeaderVariant;
  showLogo?: boolean;
  logo?: ReactNode;
  onMobileMenuToggle?: (isOpen: boolean) => void;
  sticky?: boolean;
}