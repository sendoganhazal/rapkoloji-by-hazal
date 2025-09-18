"use client";
import React, { useEffect, useState } from "react";
import styles from "../../Blog.module.css";
import { useParams } from "next/navigation";
import { fetchAllPosts } from "@/lib/api-fetcher";
import BlogCarousel from "./BlogCarousel";
import BlogList from "./BlogList";

async function getPosts() {
  const post = await fetchAllPosts();
  return post;
}

export default function BlogMain() {
  const { id } = useParams();
  const [posts, setPosts] = useState(null);
  async function setData() {
    const data = await getPosts();
    const slug = id.slice(0, 1).toUpperCase() + id.slice(1, id.length);
    console.log(slug);
    const filtered_data = data.filter((item) =>
      item.attributes.category.includes(slug)
    );
    setPosts(filtered_data);
  }
  useEffect(() => {
    setData();
  }, []);
  console.log(posts?.length);
  return (
    <main className={styles.blogMain}>
      <div className={styles.filigran}></div>
      <div className={styles.wrapper}>
        <div className={styles.blogMainContent}>
          <section className={styles.carouselCol}>
            <BlogCarousel
              carousel_items={posts?.length > 5 ? posts?.slice(0, 5) : posts}
              slug={id}
            />
          </section>
          {posts?.length > 5 && (
            <section className={styles.listCol}>
              <BlogList list_items={posts?.slice(5, posts?.length)} />
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
