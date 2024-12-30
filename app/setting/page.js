"use client";
import React from "react";
import Link from "next/link";
import style from "./style.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function page() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  const pathname = usePathname();

  useEffect(() => {
    const fecthData = async () => {
      try {
        const data = await fetch("/api/post");
        const response = await data.json();
        setPosts(response.posts);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  }, []);

  return (
    <div>
      <p className={style.heading}> Halaman Seting </p>
      <ul>
        <li>
          <Link href="/dashbord" className={pathname === "/dashbord" ? "text-rose-700" : ""}>
            Dashbord
          </Link>
        </li>
        <li>
          <Link href="/setting" className={pathname === "/setting" ? "text-rose-700" : ""}>
            Setting
          </Link>
        </li>
      </ul>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ backgroundColor: "blue", color: "white", borderRadius: 20, padding: 10, marginTop: 30 }}>
        Increment
      </button>
      <h2>Data Post</h2>
      <ul>
        {posts.map((p, i) => (
          <li key={i}>No :{`${i + 1} = ${p.nama}`}</li>
        ))}
      </ul>
    </div>
  );
}
