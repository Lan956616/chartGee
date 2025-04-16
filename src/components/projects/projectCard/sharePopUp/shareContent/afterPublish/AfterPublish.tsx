"use client";
import styles from "./AfterPublish.module.css";
import Link from "next/link";
import { useState, useRef } from "react";
import ErrorMessage from "@/components/auth/errorMessage/errorMessage";
type AfterPublishProps = {
  url: string;
};
const AfterPublish: React.FC<AfterPublishProps> = ({ url }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState("");
  const linkRef = useRef<HTMLInputElement>(null);
  const handleCopy = async () => {
    setError("");
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      linkRef.current?.select();
    } catch (err) {
      setError(`Copy failed. ${err}`);
    }
  };
  return (
    <>
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
          value={url}
          onClick={(e) => {
            e.currentTarget.select();
          }}
          ref={linkRef}
          readOnly
        />
      </div>
      <div className={styles.buttons}>
        <Link href={url} className={`${styles.BTN} ${styles.openBTN}`}>
          Open Link
        </Link>
        <button
          className={`${styles.BTN} ${styles.copyBTN}`}
          onClick={handleCopy}
        >
          Copy Link
        </button>
      </div>
      <ErrorMessage error={error} />
    </>
  );
};

export default AfterPublish;
