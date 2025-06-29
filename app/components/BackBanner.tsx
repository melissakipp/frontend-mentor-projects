import Link from 'next/link';

export default function BackBanner() {
  return (
    <nav className="backBanner" aria-label="Back navigation">
      <Link href="/">Back to &larr; Home</Link>
    </nav>
  );
}