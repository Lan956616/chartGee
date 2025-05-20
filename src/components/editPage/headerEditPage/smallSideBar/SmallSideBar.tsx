"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import ListItem from "./listItem/ListItem";
import styles from "./smallSideBar.module.css";
import { useClickWheelOutside } from "@/hooks/useClickWheelOutside";
import { handleSignOut } from "@/utils/auth/signOutUser";
import ShareButton from "../shareButton/ShareButton";
import type { Dispatch, SetStateAction } from "react";
type SmallSideBarProps =
  | {
      setShowSharePopUp: Dispatch<SetStateAction<boolean>>;
      headerStatus: "hidden" | "loading" | "done";
      inProjectsPage?: never;
    }
  | {
      setShowSharePopUp?: never;
      headerStatus?: never;
      inProjectsPage: true;
    };
const SmallSideBar: React.FC<SmallSideBarProps> = ({
  setShowSharePopUp,
  headerStatus,
  inProjectsPage = false,
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
        className={`${styles.hamburger} ${isClicked && styles.active} ${
          inProjectsPage && styles.projectPage
        }`}
        onClick={handleClick}
        ref={hamburgerRef}
      >
        {isClicked ? (
          <Image
            src="/icons/cross.png"
            alt="cross icon"
            width={20}
            height={20}
          />
        ) : (
          <Image
            src="/icons/hamburger.png"
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
          src="/icons/blackhome.png"
          hoverSrc="/icons/bluehome.png"
          alt="homepage icon"
        >
          Home
        </ListItem>
        <ListItem
          href="/dashboard"
          src="/icons/blacknewfile.png"
          hoverSrc="/icons/bluenewfile.png"
          alt="create newfile icon"
        >
          New File
        </ListItem>
        {!inProjectsPage && (
          <ListItem
            href="/projects"
            src="/charts/blackgraph.png"
            hoverSrc="/charts/bluegraph.png"
            alt="my charts icon"
          >
            My Charts
          </ListItem>
        )}
        <ListItem
          src="/icons/blacklogout.png"
          hoverSrc="/icons/bluelogout.png"
          alt="logout icon"
          onClick={handleSignOut}
        >
          Log Out
        </ListItem>
        {!inProjectsPage && headerStatus !== "hidden" && setShowSharePopUp && (
          <ShareButton setShowSharePopUp={setShowSharePopUp} inSideBar={true} />
        )}
      </ul>
    </div>
  );
};

export default SmallSideBar;
