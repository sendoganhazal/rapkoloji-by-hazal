import React from 'react'
import styles from "./Favorites.module.css";
import FavItems from './FavItems';
export default function Favorites({fav_slides}) {
  return (
    <section className={styles.favSection}>
      <div className={styles.sectionHeader}>
        <h2>Ayın Favorileri</h2>
      </div>
      <div className={styles.favItems + " " + "custom-scrollbar"}>
        <FavItems fav_slides={fav_slides}/>
      </div>
    </section>
  )
}
