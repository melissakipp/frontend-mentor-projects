import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.css';
import Logo from '../../../public/images/officelite/shared/logo.svg';

export default function Header() {
  return (
    <header className={styles.container}>
      {/* Logo */}
      <Link href="/" className={styles.logo}>
        <Image className={styles.logoImg} src={Logo} alt="Snap Logo" priority />
      </Link>
    </header>
  );
}
