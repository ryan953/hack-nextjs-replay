import Link from 'next/link';

export default function ThreeComponent() {
  return (
    <main>
      <h1>Three</h1>
      <Link href="/one">One</Link>
      <br/>
      <Link href="/two">Two</Link>
    </main>
  );
}
