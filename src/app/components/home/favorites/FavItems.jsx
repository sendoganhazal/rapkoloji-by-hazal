"use client";
import React from "react";
import Image from "next/image";

import img_url from "@/app/assets/hiphop.png";
import Link from "next/link";

import styles from "./Favorites.module.css"

export default function FavItems({ fav_slides }) {
  return (
    <ul className={styles.carouselWrapper } style={{width: (fav_slides.length * 274) + (fav_slides.length * 50) + "px"}}>
      {
        fav_slides?.map((slide,key) => (
          <li key={key} className={styles.carouselItem} style={{width: "274px",marginRight:"50px"}}>
            {slide.attributes.title}
          </li>
        ))
      }
    </ul>
  );
}
