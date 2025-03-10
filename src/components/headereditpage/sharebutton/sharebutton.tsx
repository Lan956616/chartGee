import styles from "./sharebutton.module.css";
import Image from "next/image";
import Button from "@/components/button/button";
import { useState } from "react";
const ShareButton: React.FC = () => {
  const [isShareButtonClicked, setIsShareButtonClicked] =
    useState<boolean>(false);
  return (
    <div className={styles.shareZone}>
      <Button
        src="/share.png"
        color="white"
        onClick={() => {
          setIsShareButtonClicked((prev) => {
            return !prev;
          });
        }}
      >
        Share
      </Button>
      <div
        className={styles.shareArea}
        style={{ display: `${isShareButtonClicked ? "" : "none"}` }}
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
