"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import ListItem from "./listitem/listitem";
import styles from "./smallsidebar.module.css";
import { useClickWheelOutside } from "@/hooks/useClickWheelOutside";
import { handleSignOut } from "@/utils/signOutUser";
import ShareButton from "../sharebutton/sharebutton";
import type { Dispatch, SetStateAction } from "react";
type SmallSideBarProps = {
  setShowSharePopUp: Dispatch<SetStateAction<boolean>>;
  headerStatus: "hidden" | "loading" | "done";
};
const SmallSideBar: React.FC<SmallSideBarProps> = ({
  setShowSharePopUp,
  headerStatus,
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const popUpRef = useRef<HTMLUListElement | null>(null);
  useClickWheelOutside(popUpRef, hamburgerRef, isClicked, () => {
    setIsClicked(false);
  });
  return (
    <div className={styles.sideBarWrapper}>
      <div
        className={`${styles.hamburger} ${isClicked && styles.active}`}
        onClick={handleClick}
        ref={hamburgerRef}
      >
        {isClicked ? (
          <Image src="/cross.png" alt="cross icon" width={20} height={20} />
        ) : (
          <Image
            src="/hamburger.png"
            alt="hamburger icon"
            width={15}
            height={15}
          />
        )}
      </div>
      <ul
        className={`${styles.popList} ${isClicked && styles.active}`}
        ref={popUpRef}
      >
        <ListItem
          href="/"
          src="/blackhome.png"
          hoverSrc="/bluehome.png"
          alt="homepage icon"
        >
          Home
        </ListItem>
        <ListItem
          href="/dashboard"
          src="/blacknewfile.png"
          hoverSrc="/bluenewfile.png"
          alt="create newfile icon"
        >
          New File
        </ListItem>
        <ListItem
          href="/projects"
          src="/blackgraph.png"
          hoverSrc="/bluegraph.png"
          alt="my charts icon"
        >
          My Charts
        </ListItem>
        <ListItem
          src="/blacklogout.png"
          hoverSrc="/bluelogout.png"
          alt="logout icon"
          onClick={handleSignOut}
        >
          Log Out
        </ListItem>
        {headerStatus !== "hidden" && (
          <ShareButton setShowSharePopUp={setShowSharePopUp} inSideBar={true} />
        )}
      </ul>
    </div>
  );
};

export default SmallSideBar;
