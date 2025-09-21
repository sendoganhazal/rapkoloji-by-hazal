import React from "react";
import styles from "./ListView.module.css";
import dummy from "../../../assets/author_dummy.png";
import Link from "next/link";
import Image from "next/image";


export default function ListView({ list_data,isInner }) {
  return (
    <div className={styles.listView}>
      {list_data?.map((item, key) => (
        <div className={styles.listContent} key={key}>
          <div className={styles.img}>
            <Image
              src={item.attributes.img}
              width={100}
              height={100}
              alt={item.attributes.title}
            />
          </div>
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
              <Link href={item.attributes.slug}>Daha Fazla Oku</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
