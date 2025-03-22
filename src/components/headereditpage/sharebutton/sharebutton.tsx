import styles from "./sharebutton.module.css";
import Image from "next/image";
import { useState, useRef } from "react";
import { useClickWheelOutside } from "@/hooks/useClickWheelOutside";
import ListItem from "../smallsidebar/listitem/listitem";
const ShareButton: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const popUpRef = useRef<HTMLDivElement | null>(null);
  useClickWheelOutside(popUpRef, buttonRef, isClicked, () => {
    setIsClicked(false);
  });
  return (
    <div className={styles.ShareButtonContainer}>
      <button
        className={`${styles.btn} ${isClicked && styles.clicked}`}
        onClick={() => {
          setIsClicked((prev) => {
            return !prev;
          });
        }}
        ref={buttonRef}
      >
        <Image
          src="/share.png"
          alt="share-icon"
          width={25}
          height={25}
          className={styles.btnImg}
        />
        Share
      </button>
      <div
        className={styles.sharePopUp}
        style={{ display: `${isClicked ? "" : "none"}` }}
        ref={popUpRef}
      >
        <ListItem href="/" src="/download.png" alt="download-icon">
          Download
        </ListItem>
        <ListItem href="/" src="/link.png" alt="link-icon">
          Share Link
        </ListItem>
      </div>
    </div>
  );
};

export default ShareButton;
