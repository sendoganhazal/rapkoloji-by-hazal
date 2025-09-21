"use client";
import React, { useEffect, useState } from "react";
import styles from "../../Blog.module.css";
import { useParams } from "next/navigation";
import { fetchAllPosts } from "@/lib/api-fetcher";
import BlogCarousel from "./BlogCarousel";
import BlogList from "./BlogList";
import Footer from "../layout/footer/Footer";

async function getPosts() {
  const post = await fetchAllPosts();
  return post;
}

export default function BlogMain() {
  const { id } = useParams();
  const [posts, setPosts] = useState(null);
  async function setData() {
    const data = await getPosts();
    if (id === "haberler") {
      setPosts(data);
    } else if (id === "etkinlikler") {
      setPosts(data);
    } else {
      const slug = id.slice(0, 1).toUpperCase() + id.slice(1, id.length);

      const filtered_data = data.filter((item) =>
        item.attributes.category.includes(slug.replace("u", "ü"))
      );
      console.log(filtered_data);
      setPosts(filtered_data);
    }
  }
  useEffect(() => {
    setData();
  }, []);

  return (
    <>
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
                <BlogList
                  list_items={posts?.slice(5, posts?.length)}
                  slug={id}
                />
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer footer={posts} />
    </>
  );
}
