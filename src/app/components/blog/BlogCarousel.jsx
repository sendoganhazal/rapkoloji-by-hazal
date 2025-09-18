"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

import img_url from "@/app/assets/hiphop.png";
import Link from "next/link";
import styles from "../../Blog.module.css";


export default function BlogCarousel({ carousel_items, slug }) {
  
  return (
    <Swiper
      key="blog-swiper"
      className="blog-swiper"
      modules={[Pagination, A11y]}
      slidesPerView={1}
      spaceBetween={50}
      pagination={{ clickable: true }}
    >
      {carousel_items?.map((item) => (
        <SwiperSlide key={`blog-${slug}-${item._id}`}>
          <div className="blog-swiper-item">
            <div className="item-img">
                <Image src={item.attributes.img} width={100} height={100} alt={item.attributes.title}/>
                <div className="item-title">
                  <h3>{item.attributes.title}</h3>
                </div>
            </div>
            
            <div className="item-content">
                <h4>{item.attributes.desc}</h4>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
