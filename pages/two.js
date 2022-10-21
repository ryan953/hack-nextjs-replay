import Link from 'next/link';

export default function TwoComponent() {
  return (
    <main>
      <h1>Two</h1>
      <Link href="/one">One</Link>
      <br />
      <Link href="/three">Three</Link>
    </main>
  );
}
