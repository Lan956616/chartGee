import styles from "./sharebutton.module.css";
import Image from "next/image";
import { useState, useRef } from "react";
import { useClickWheelOutside } from "@/hooks/useClickWheelOutside";

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
        <div className={styles.shareItem}>
          <Image
            src="/download.png"
            alt="download-icon"
            width={25}
            height={25}
            className={styles.icon}
          />
          <p>Download PNG</p>
        </div>
        <div className={styles.shareItem}>
          <Image
            src="/link.png"
            alt="link-icon"
            width={25}
            height={25}
            className={styles.icon}
          />
          <p>Share Link</p>
        </div>
      </div>
    </div>
  );
};

export default ShareButton;
