import Image from "next/image";
import Hero from "./components/home/hero/Hero";
import Twitch from "./components/home/twitch/Twitch";
import Favorites from "./components/home/favorites/Favorites";
import Trends from "./components/home/trends/Trends";
import { fetchAllPosts } from "@/lib/api-fetcher";
import styles from "./Page.module.css"

async function getPosts() {
  const fullUrl = "https://dummyjson.com/c/a7c4-016a-47aa-8241";
 
  const post = await fetchAllPosts(fullUrl);
  return post;
}


export default async function Home() {
  const all_posts = await getPosts();
  const sortedData = all_posts.sort((a, b) => 
  new Date(b.updatedAt) - new Date(a.updatedAt)
).slice(0,10);
  return (
    <main className={styles.main}>
      <Hero data={sortedData}/>
      <Twitch/>
      <Trends/>
      <Favorites/>
    </main>
  );
}
