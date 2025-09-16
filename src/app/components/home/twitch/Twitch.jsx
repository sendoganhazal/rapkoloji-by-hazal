import React from "react";
import styles from "./Twitch.module.css";
import logo from "@/app/assets/twitch-logo.svg";
import one from "@/app/assets/twitch1.png";
import two from "@/app/assets/twitch2.png";
import Image from "next/image";
export default function Twitch() {
  return (
    
    <section className={styles.twitchSection}>

      <div className={styles.left}>
        <Image src={one} alt="one" width={100} height={100} />
      </div>
      <div className={styles.middle}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
      </div>
      <div className={styles.right}>
        <Image src={two} alt="two" width={100} height={100} />
      </div>
    </section>
  );
}
