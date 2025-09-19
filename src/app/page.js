import Image from "next/image";
import Hero from "./components/home/hero/Hero";
import Twitch from "./components/home/twitch/Twitch";
import Favorites from "./components/home/favorites/Favorites";
import Trends from "./components/home/trends/Trends";
import { fetchAllPosts } from "@/lib/api-fetcher";
import styles from "./Page.module.css"


async function getPosts() {
  const post = await fetchAllPosts();
  return post;
}


export default async function Home() {
  const all_posts = await getPosts();
  const hero_data = all_posts?.sort((a, b) => 
    new Date(b.updatedAt) - new Date(a.updatedAt)
  ).slice(0,10);
  const updated_data = all_posts?.filter(post => post.attributes.trends === true);
  const favorites_data = all_posts?.filter(post => post.attributes.tags.includes( "Ayın Videoları"));
  console.log(favorites_data.length)
  return (
    <main className={styles.main}>
      <Hero hero_data={hero_data}/>
      <Twitch/>
      <Trends data={updated_data} params={""}/>
      <Favorites fav_slides={favorites_data}/>
    </main>
  );
}
