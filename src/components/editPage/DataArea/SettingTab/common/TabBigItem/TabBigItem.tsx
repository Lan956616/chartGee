"use client";
import { useState } from "react";
import styles from "./tabBigItem.module.css";
import Image from "next/image";
type TabBigItemProps = {
  title: string;
  src: string;
  alt: string;
  children: React.ReactNode;
};
const TabBigItem: React.FC<TabBigItemProps> = ({
  title,
  src,
  alt,
  children,
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div className={`${styles.tabBigItem} ${isClicked && styles.itemClicked}`}>
      <div
        className={styles.row}
        onClick={() => {
          setIsClicked((prev) => !prev);
        }}
      >
        <Image src={src} alt={alt} width={30} height={30} />
        <div className={styles.right}>
          <p>{title}</p>
          <Image
            src="/arrows/down-arrow.png"
            alt="down-arrow-icon"
            width={15}
            height={15}
            className={`${styles.arrow} ${isClicked && styles.clicked}`}
          />
        </div>
      </div>
      {isClicked && <div className={styles.childrenWrapper}>{children}</div>}
    </div>
  );
};

export default TabBigItem;
