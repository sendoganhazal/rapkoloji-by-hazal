import React from "react";
import HeroSlider from "./HeroSlider";
import styles from "./Hero.module.css"

export default function Hero({hero_data}) {
  return (
    <section className={styles.heroSection}> 
      <HeroSlider hero_data={hero_data}/>
    </section>
  );
}
