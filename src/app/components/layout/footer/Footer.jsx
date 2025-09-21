"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import TagList from "../../common/tags/TagList";
import GridView from "./GridView";
import ListView from "./ListView";
import icon from "../../../assets/Group_30.svg";
import Image from "next/image";
import facebook from "@/app/assets/Vector_1.svg";
import twitter from "@/app/assets/Vector_2.svg";
import twitch from "@/app/assets/Vector_3.svg";
import spotify from "@/app/assets/Vector_4.svg";
import youtube from "@/app/assets/Vector_5.svg";
import Subscription from "../../subscription/Subscription";
import category from "@/lib/data.json";

const nav_links = category.categories;

const social_Links = [
  {
    id: 0,
    img: facebook,
    url: "facebook.com/rapkoloji",
  },
  {
    id: 1,
    img: twitter,
    url: "x.com/rapkoloji",
  },
  {
    id: 2,
    img: twitch,
    url: "twitch.com/rapkoloji",
  },
  {
    id: 3,
    img: spotify,
    url: "spotify.com/rapkoloji",
  },
  {
    id: 4,
    img: youtube,
    url: "youtube.com/rapkoloji",
  },
];

export default function Footer({ footer }) {
  const { id } = useParams();
  const tags = [...new Set(footer?.map((post) => post.attributes.tags).flat())];
  const [selectedTag, setSelectedTag] = useState([]);
  const [data, setData] = useState(footer);
  const [viewType, setViewType] = useState("list");
  const [active, setActive] = useState("list");
  const handleChange = (tag) => {
    setSelectedTag((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    const filtered_data = footer?.filter((foo) =>
      foo.attributes.tags.includes(tag)
    );
    setData(filtered_data);
  };

  const handleClick = (e) => {
    const btn = e.target.closest(".btn");
    const val = btn.value;
    switch (val) {
      case "grid":
        setActive("grid");
        setViewType("grid");
        break;
      case "list":
        setActive("list");
        setViewType("list");
        break;
      default:
        setActive("list");
        setViewType("list");
        break;
    }
  };

  if (id) {
    return (
      <footer className={styles.innerFooter}>
        <section className={styles.top}>
          <div className={styles.sectionHeader}>
            <div className={styles.heading}>
              <h2>Keşfet</h2>
              <div className={styles.icon}>
                <Image width={65} height={65} src={icon} alt="Trend" />
              </div>
            </div>
            <div className={styles.actions}>
              <ul className={styles.actList}>
                <li className={styles.actListItem}>
                  <button
                    value={"list"}
                    onClick={handleClick}
                    className={
                      active === "list"
                        ? `btn btn-default ${styles.active}`
                        : "btn btn-default"
                    }
                  >
                    <svg
                      width="25"
                      height="20"
                      viewBox="0 0 25 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.154297"
                        y="0.601929"
                        width="24.0033"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                      <rect
                        x="0.154297"
                        y="8.35449"
                        width="24.0033"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                      <rect
                        x="0.154297"
                        y="16.1071"
                        width="24.0033"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                    </svg>
                  </button>
                </li>
                <li className={styles.actListItem}>
                  <button
                    value={"grid"}
                    onClick={handleClick}
                    className={
                      active === "grid"
                        ? `btn btn-default ${styles.active}`
                        : "btn btn-default"
                    }
                  >
                    <svg
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.810547"
                        y="0.601929"
                        width="9.9111"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                      <rect
                        x="0.810547"
                        y="16.1071"
                        width="9.9111"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                      <rect
                        x="13.9531"
                        y="0.601929"
                        width="9.9111"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                      <rect
                        x="0.810547"
                        y="8.35437"
                        width="9.9111"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                      <rect
                        x="13.9531"
                        y="8.35437"
                        width="9.9111"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                      <rect
                        x="13.9531"
                        y="16.1073"
                        width="9.9111"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.tabs}>
            <ul className={styles.chipList}>
              {tags.map((tag, key) => (
                <li key={key} className={styles.chip}>
                  <label className={styles.chipLabel}>
                    <input
                      type="checkbox"
                      className={styles.customCheckbox}
                      checked={selectedTag.includes(tag)}
                      onChange={() => handleChange(tag)}
                    ></input>
                    <span className={styles.customLabel}>{tag}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          {viewType === "grid" ? (
            <GridView grid_data={data} isInner={true} />
          ) : (
            <ListView list_data={data} isInner={true} />
          )}
          {/* {data.map((i,key) => <p key={key}>{i.title}</p>)} */}
        </section>
        <section className={styles.bottom}>
          <Subscription socialLinks={social_Links} />
        </section>
      </footer>
    );
  } else {
    return (
      <footer className={styles.footer}>
        <section className={styles.content}>
          <div className={styles.sectionHeader}>
            <div className={styles.heading}>
              <h2>Keşfet</h2>
              <div className={styles.icon}>
                <Image width={65} height={65} src={icon} alt="Trend" />
              </div>
            </div>
            <div className={styles.actions}>
              <ul className={styles.actList}>
                <li className={styles.actListItem}>
                  <button
                    value={"list"}
                    onClick={handleClick}
                    className={
                      active === "list"
                        ? `btn btn-default ${styles.active}`
                        : "btn btn-default"
                    }
                  >
                    <svg
                      width="25"
                      height="20"
                      viewBox="0 0 25 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.154297"
                        y="0.601929"
                        width="24.0033"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                      <rect
                        x="0.154297"
                        y="8.35449"
                        width="24.0033"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                      <rect
                        x="0.154297"
                        y="16.1071"
                        width="24.0033"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                    </svg>
                  </button>
                </li>
                <li className={styles.actListItem}>
                  <button
                    value={"grid"}
                    onClick={handleClick}
                    className={
                      active === "grid"
                        ? `btn btn-default ${styles.active}`
                        : "btn btn-default"
                    }
                  >
                    <svg
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.810547"
                        y="0.601929"
                        width="9.9111"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                      <rect
                        x="0.810547"
                        y="16.1071"
                        width="9.9111"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                      <rect
                        x="13.9531"
                        y="0.601929"
                        width="9.9111"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                      <rect
                        x="0.810547"
                        y="8.35437"
                        width="9.9111"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                      <rect
                        x="13.9531"
                        y="8.35437"
                        width="9.9111"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                      <rect
                        x="13.9531"
                        y="16.1073"
                        width="9.9111"
                        height="3.75257"
                        rx="1.43424"
                        fill="white"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
                <div className={styles.tabs}>
            <h2>Ne Görmek İstersin?</h2>
            <ul className={styles.chipList}>
              {tags.map((tag, key) => (
                <li key={key} className={styles.chip}>
                  <label className={styles.chipLabel}>
                    <input
                      type="checkbox"
                      className={styles.customCheckbox}
                      checked={selectedTag.includes(tag)}
                      onChange={() => handleChange(tag)}
                    ></input>
                    <span className={styles.customLabel}>{tag}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          {viewType === "grid" ? (
            <GridView grid_data={data} />
          ) : (
            <ListView list_data={data} />
          )}
        </section>
        <section className={styles.aside}>
          <div className={styles.tabs}>
            <h2>Ne Görmek İstersin?</h2>
            <ul className={styles.chipList}>
              {tags.map((tag, key) => (
                <li key={key} className={styles.chip}>
                  <label className={styles.chipLabel}>
                    <input
                      type="checkbox"
                      className={styles.customCheckbox}
                      checked={selectedTag.includes(tag)}
                      onChange={() => handleChange(tag)}
                    ></input>
                    <span className={styles.customLabel}>{tag}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <Subscription socialLinks={social_Links} navLinks={nav_links} />
        </section>
      </footer>
    );
  }
}
