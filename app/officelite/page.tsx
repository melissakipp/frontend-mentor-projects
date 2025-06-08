import Link from 'next/link';

export default function page() {
  return (
    <main>
      <h1>landing page</h1>
      <Link href="/officelite/sign-up">
        <button>Sign Up</button>
      </Link>
    </main>
  );
}
