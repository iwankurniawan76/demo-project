"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Dashbord() {
  const pathname = usePathname();

  return (
    <div>
      <p>Halaman Dashbord</p>
      <ul>
        <li>
          <Link href="/dashbord" className={pathname === "/dashbord" ? "text-rose-700" : ""}>
            {" "}
            Dashbord
          </Link>
        </li>
        <li>
          <Link href="/setting" className={pathname === "/setting" ? "text-rose-700" : ""}>
            Setting
          </Link>
        </li>
      </ul>
    </div>
  );
}
