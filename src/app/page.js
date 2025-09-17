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
  const hero_data = all_posts?.sort((a, b) => 
    new Date(b.updatedAt) - new Date(a.updatedAt)
  ).slice(0,10);
  const updated_data = all_posts?.filter(post => post.attributes.trends === true);
  return (
    <main className={styles.main}>
      <Hero data={hero_data}/>
      <Twitch/>
      <Trends data={updated_data}/>
      <Favorites/>
    </main>
  );
}
