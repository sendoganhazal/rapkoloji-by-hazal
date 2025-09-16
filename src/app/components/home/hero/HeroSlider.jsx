"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

import img_url from "@/app/assets/hiphop.png";
import Link from "next/link";

export default function HeroSlider({ data }) {
  return (
    <div className="hero-swiper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data?.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="hero-swiper-item">
                <Image src={img_url} width={500} height={500} alt="Hero" />
                <div className="hero-swiper-content">
                  <h4>{item.attributes.title}</h4>
                  <p>{item.attributes.desc}</p>
                  <Link href={`/post/${item.attributes.slug}`} className="btn hero-primary-btn">
                    Devamını Oku
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
