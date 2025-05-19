"use client";
import { useState, useEffect } from "react";
import styles from "./displaySection.module.css";
import Image from "next/image";
import FeatureItem from "./featureItem/featureItem";
const features = [
  {
    id: 0,
    title: "Easily edit online",
    description:
      "Directly input your data into an online spreadsheet — see your chart come to life instantly with ChartGee’s real-time preview.",
    src: "/gif/editonline.gif",
    alt: "edit data online display",
  },
  {
    id: 1,
    title: "Custom chart styles",
    description:
      "Freely adjust colors, labels, borders, and more — ChartGee gives you full control to style your chart exactly the way you want.",
    src: "/gif/customize.gif",
    alt: "customize chart display",
  },
  {
    id: 2,
    title: "Export & share anywhere",
    description:
      "You’re in control — download your chart as a high-quality PNG or share it with a public link in just a click.",
    src: "/gif/shareanddownload.gif",
    alt: "share and download your chart display",
  },
];
const DisplaySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 9000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <section className={styles.display}>
      <div className={styles.displayWrapper}>
        <h1 className={styles.title}>
          Effortlessly create stunning charts that speak louder than data alone
        </h1>
        <div className={styles.displayBody}>
          <div className={styles.picArea}>
            {features.map(({ id, src, alt }) => {
              return (
                <Image
                  key={id}
                  src={src}
                  alt={alt}
                  fill
                  className={`${styles.pic} ${
                    activeIndex === id && styles.active
                  }`}
                />
              );
            })}
          </div>
          <div className={styles.status}>
            {[0, 1, 2].map((i) => {
              return (
                <div
                  key={i}
                  className={`${styles.dot} ${
                    activeIndex === i && styles.active
                  }`}
                ></div>
              );
            })}
          </div>
          <div className={styles.featureList}>
            {features.map(({ id, title, description }) => {
              return (
                <FeatureItem
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  active={activeIndex === id}
                  setActiveIndex={setActiveIndex}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplaySection;
