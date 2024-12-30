import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Halaman Home</p>
      <ul>
        <li>
          <Link href="/dashbord">Home</Link>
        </li>
      </ul>
    </div>
  );
}
