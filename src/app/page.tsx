import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Images, Fonts & Scripts</h2>
      <Link href="/gallery">Gallery</Link>
      <Link href="/funkyfont">Funky Font</Link>
      <Link href="/suacyscripts">Saucy Scripts</Link>
    </main>
  );
}
