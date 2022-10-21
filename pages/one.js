import Link from 'next/link';

export default function OneComponent() {
  return (
    <main>
      <h1>One</h1>
      <Link href="/two">Two</Link>
      <br />
      <Link href="/three">Three</Link>
    </main>
  );
}
