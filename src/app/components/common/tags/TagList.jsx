import React from 'react'
import styles from "./TagList.module.css"
import Link from 'next/link'

export default function TagList({tagList}) {
  return (
    <ul className={styles.tagList}>
        {
            tagList.map((tag,key) => (
                <li key={key} className={styles.tagListItem}>
                    <Link href={"#"}>{tag}</Link>
                </li>
            ))
        }
    </ul>
  )
}
