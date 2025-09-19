"use client";
import React, { useState, useEffect } from "react";
import styles from "../../Sub.module.css";
import Subscription from "@/app/components/subscription/Subscription";
import Image from "next/image";
import TagList from "../common/tags/TagList";
import { useParams } from "next/navigation";
import { fetchAllPosts } from "@/lib/api-fetcher";
import BlogPost from "./BlogPost";
import Trends from "../home/trends/Trends";

async function getAllPosts() {
  const post = await fetchAllPosts();
  return post;
}

export default function SubMain() {
  const [blogData, setBlogData] = useState(null);
  const [trendingData, setTrendingData] = useState(null);
  const { subId } = useParams();
  async function getBlogPostBySlug() {
    const data = await getAllPosts();
    const trending_data = data?.filter(
      (post) => post.attributes.trends === true
    );
    const blog_data = data.filter((post) => post.attributes.slug === subId);
    setTrendingData(trending_data);
    setBlogData(blog_data);
  }

  useEffect(() => {
    getBlogPostBySlug();
  }, []);

  return (
    <main className={styles.grid}>
      <section className={styles.content}>
        {blogData && <BlogPost blogPost={blogData} />}
        {trendingData && <div className={styles.trending}><Trends params={subId} data={trendingData} /></div>}
      </section>

      <section className={styles.aside}>
        <Subscription></Subscription>
      </section>
    </main>
  );
}
