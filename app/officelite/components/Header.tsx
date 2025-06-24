import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.css';
import Logo from '../../../public/images/officelite/shared/logo.svg';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      {/* Logo */}
      <Link href="/officelite" className={styles.logo}>
        <Image className={styles.logoImg} src={Logo} alt="Snap Logo" priority />
      </Link>
    </header>
  );
}
