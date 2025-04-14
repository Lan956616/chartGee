"use client";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import styles from "./sharePopUp.module.css";
import Image from "next/image";
import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
type SharePopUpProps = {
  projectID: string;
  setShowSharePopup: Dispatch<SetStateAction<boolean>>;
};
const SharePopUp: React.FC<SharePopUpProps> = ({
  projectID,
  setShowSharePopup,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const URL = `${window.location.origin}/share/${projectID}`;
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(URL);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      linkRef.current?.select();
    } catch (err) {
      console.error(err);
    }
  };
  useClickOutside(popupRef, () => {
    setShowSharePopup(false);
  });
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupBox} ref={popupRef}>
        <Image
          src="/cross.png"
          alt="close icon"
          width={30}
          height={30}
          className={styles.closeIcon}
          onClick={() => {
            setShowSharePopup(false);
          }}
        />
        <h1 className={styles.title}>Share a Link to Your Graph</h1>
        <div className={styles.link}>
          <div className={styles.description}>
            <p>Copy this URL</p>
            <p className={`${styles.copied} ${isCopied && styles.active}`}>
              Copied!
            </p>
          </div>

          <input
            type="text"
            value={URL}
            onClick={(e) => {
              e.currentTarget.select();
            }}
            ref={linkRef}
            readOnly
          />
        </div>
        <div className={styles.buttons}>
          <Link href={URL} className={`${styles.BTN} ${styles.openBTN}`}>
            Open Link
          </Link>
          <button
            className={`${styles.BTN} ${styles.copyBTN}`}
            onClick={handleCopy}
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharePopUp;
