"use client";
import Image from "next/image";
import React from "react";
import logo from "@/app/assets/logo.svg";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Navbar({ data }) {
  const toggleNav = (e) => {
    const navbar = document.querySelector("#navigation");
    if (navbar.classList.contains("open")) {
      navbar.classList.remove("open");
    } else {
      navbar.classList.add("open");
    }
  };
  return (
    <>
      <div className={styles.brand}>
        <Link href="/">
          <Image src={logo} width={240} height={60} alt="Logo" />
        </Link>
      </div>
      <div id="navigation" className={styles.navigation}>
        <button
          className="btn btn-default btn-toggle"
          onClick={toggleNav}
          style={{ alignSelf: "flex-end" }}
        >
          <svg
            width="32"
            height="14"
            viewBox="0 0 32 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.43213 2H31.4375" stroke="#F0E74D" strokeWidth="3" />
            <path
              d="M0.629883 12L31.4375 12"
              stroke="#F0E74D"
              strokeWidth="3"
            />
          </svg>
        </button>
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
      </div>
      <button className="btn btn-default btn-toggle" onClick={toggleNav}>
        <svg
          width="32"
          height="14"
          viewBox="0 0 32 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.43213 2H31.4375" stroke="#F0E74D" strokeWidth="3" />
          <path d="M0.629883 12L31.4375 12" stroke="#F0E74D" strokeWidth="3" />
        </svg>
      </button>
    </>
  );
}
