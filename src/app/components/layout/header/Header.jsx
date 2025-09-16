import Image from "next/image";
import React from "react";
import logo from "@/app/assets/logo.svg";
import styles from "./Header.module.css";
import Link from "next/link";
import { fetchingCategories } from "@/lib/api-fetcher";
import data from "@/lib/data.json";

export default async function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} width={240} height={60} alt="Logo" />
        </Link>
      </div>
      <nav className={styles.middle}>
        <ul className={styles.navList}>
          {data.categories.map((c, key) => (
            <li key={key}>
              <Link href={"/"}>{c}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className={styles.right}>
        <ul className={styles.navList}>
          <li>
            <button className="btn btn-default"></button>
          </li>
          <li>
            <button className="btn btn-header">Giriş Yap</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
