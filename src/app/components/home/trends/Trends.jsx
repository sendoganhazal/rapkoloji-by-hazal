import Image from "next/image";
import React from "react";
import icon from "../../../assets/trending_up_fill.svg";
import styles from "./Trends.module.css";
import Link from "next/link";
import dummy from "../../../assets/author_dummy.png";

export default function Trends({ data,params }) {
  const sorted_data = data?.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );
  console.log("sorted_data", sorted_data.length);
  return (
    <section className={styles.trendSection}>
      <div className={styles.sectionHeader}>
        <h2>Trendler</h2>
        <div className={styles.icon}>
          <Image width={65} height={65} src={icon} alt="Trend" />
        </div>
      </div>
      <div aria-label={params && "has-slug"} className={styles.trendContentWrapper}>
        {sorted_data.slice(0,6)?.map((item, key) => (
          <div className={styles.trendContent} key={key}>
            <div className={styles.counter}>{key + 1}</div>
            <div className={styles.body}>
              {item?.attributes.authors.map((au, key) => (
                <div className={styles.authorInfo} key={key}>
                  <div className={styles.authorAvatar}>
                    <Image
                      width={32}
                      height={32}
                      alt="avatar"
                      src={dummy}
                    ></Image>
                  </div>
                  <div className={styles.author}>{au}</div>
                </div>
              ))}
              <div className={styles.content}>
                <h4>{item.attributes.title}</h4>
              </div>
              <div className={styles.action}>
                <Link href={`/blog/${item.attributes.category[0].toLowerCase()}/${item.attributes.slug}`}>Daha Fazla Oku</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.trendAction}>
        <Link href={"#"}>Tümünü Gör</Link>
      </div>
    </section>
  );
}
