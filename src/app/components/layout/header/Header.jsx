import Image from 'next/image'
import React from 'react'
import logo from "@/app/assets/logo.svg"
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
        <Image src={logo} width={240} height={60} />
    </header>
  )
}
