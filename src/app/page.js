import Image from "next/image";
import Hero from "./components/home/hero/Hero";
import Twitch from "./components/home/twitch/Twitch";
import Favorites from "./components/home/favorites/Favorites";
import Trends from "./components/home/trends/Trends";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Twitch/>
      <Trends/>
      <Favorites/>
    </main>
  );
}
