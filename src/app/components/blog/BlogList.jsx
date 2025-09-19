import React from 'react'
import styles from "../../Blog.module.css";
import Link from 'next/link';
import Image from 'next/image';

export default function BlogList({list_items,slug}) {
  return (
    <div className={styles.list}>
      {
        list_items.map((it) => (
          <div className={styles.listItem} key={it._id}>
            <Link href={`/blog/${slug}/${it.attributes.slug}`}>
              <div className={styles.img}>
                <Image src={it.attributes.img} width={100} height={100} alt={it.attributes.title}></Image>
              </div>
              <h4>{it.attributes.title}</h4>
            </Link>
          </div>
        ))
      }
    </div>
  )
}
