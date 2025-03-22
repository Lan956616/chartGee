"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import ListItem from "./listitem/listitem";
import styles from "./smallsidebar.module.css";
import { useClickWheelOutside } from "@/hooks/useClickWheelOutside";
const SmallSideBar: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const popUpRef = useRef<HTMLDivElement | null>(null);
  useClickWheelOutside(popUpRef, hamburgerRef, isClicked, () => {
    setIsClicked(false);
  });
  return (
    <div className={styles.sideBarWrapper}>
      <div
        className={`${styles.hamburger} ${isClicked && styles.clicked}`}
        onClick={handleClick}
        ref={hamburgerRef}
      >
        <Image
          src="/hamburger.png"
          alt="hamburger-icon"
          width={20}
          height={20}
        />
      </div>
      <div
        className={`${styles.popList} ${isClicked && styles.active}`}
        ref={popUpRef}
      >
        <ul>
          <ListItem href="/" src="/bluehome.png" alt="home-icon">
            Home
          </ListItem>
          <ListItem href="/" src="/bluenewfile.png" alt="newfile-icon">
            New File
          </ListItem>
          <ListItem href="/" src="/bluegraph.png" alt="graph-icon">
            My Graph
          </ListItem>
          <ListItem href="/" src="/bluelogout.png" alt="logout-icon">
            Log Out
          </ListItem>
        </ul>
      </div>
    </div>
  );
};

export default SmallSideBar;
