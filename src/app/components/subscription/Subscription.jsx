import Link from "next/link";
import React from "react";
import styles from "./Subscription.module.css";
import Image from "next/image";

export default function Subscription({ socialLinks, navLinks }) {
  return (
    <div className={styles.subscriptionSection}>
      <h3>GELİŞMELERDEN İLK SEN HABERDAR OL!</h3>
      <form>
        <div className="form-row">
          <input
            type="email"
            className="form-control"
            placeholder="EMAIL"
          ></input>
          <button type="submit" className="btn btn-default btn-submit">
            <span>Gönder</span>
            <span>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6.1998H11.1045"
                  stroke="#F0E74D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.30176 1.39755L11.104 6.1998L6.30176 11.002"
                  stroke="#F0E74D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </form>
      <nav className={styles.socialLinks}>
        <ul>
          {socialLinks?.map((sl, key) => (
            <li key={key}>
              <Link href={sl.url}>
                <Image
                  src={sl.img}
                  width={30}
                  height={30}
                  alt={"social link"}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className={styles.navLinks}>
        <ul>
          <li>
            <Link href={"#"}>Haberler</Link>
          </li>
          <li>
            <Link href={"#"}>Etkinlikler</Link>
          </li>
          {navLinks?.map((nl, key) => (
            <li key={key}>
              <Link href={"#"}>{nl.label}</Link>
            </li>
          ))}
          <li>
            <Link href={"#"}>İletişim</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
