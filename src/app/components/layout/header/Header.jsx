import Image from "next/image";
import React from "react";
import styles from "./Header.module.css";
import data from "@/lib/data.json";
import Navbar from "./Navbar";

export default async function Header() {
 
  return (
    <header className={styles.header}>
      <Navbar data={data} />
    </header>
  );
}
