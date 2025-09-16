import React from "react";
import HeroSlider from "./HeroSlider";
import styles from "./Hero.module.css"

export default function Hero({data}) {
  return (
    <section className={styles.heroSection}> 
      <HeroSlider data={data}/>
    </section>
  );
}
