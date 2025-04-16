"use client";
import { useState, useRef } from "react";
import styles from "./shareContent.module.css";
import { db } from "@/utils/firebase";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import Link from "next/link";
import ErrorMessage from "@/components/auth/errorMessage/errorMessage";
import { FirebaseError } from "firebase/app";
type ShareContent = { projectID: string; isPublic: boolean; uid: string };
const ShareContent: React.FC<ShareContent> = ({ projectID, isPublic, uid }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [error, setError] = useState("");
  const linkRef = useRef<HTMLInputElement>(null);
  const URL = `${window.location.origin}/share/${projectID}`;
  const handleCopy = async () => {
    setError("");
    try {
      await navigator.clipboard.writeText(URL);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      linkRef.current?.select();
    } catch (err) {
      setError(`Copy failed. ${err}`);
    }
  };
  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      const projectDoc = doc(db, "users", uid, "projects", projectID);
      const publicRef = doc(db, "publicProjects", projectID);

      const projectSnap = await getDoc(projectDoc);
      if (!projectSnap.exists()) {
        throw new Error("Project not found");
      }
      const projectData = projectSnap.data();
      const { isPublic, ...restData } = projectData;
      await setDoc(publicRef, { ...restData });
      await updateDoc(projectDoc, { isPublic: true });
    } catch (err: unknown) {
      if (err instanceof FirebaseError) setError(err.message);
      else {
        setError("Publish failed. Please try again");
      }
    } finally {
      setIsPublishing(false);
    }
  };
  return (
    <div className={styles.shareContentContainer}>
      {!isPublic ? (
        <>
          <p className={styles.title}>
            {isPublishing ? "Working..." : `Let's go online`}
          </p>
          <p className={styles.description}>
            Share as a link! share on social media.
          </p>
          <div className={styles.BTNwrapper}>
            <button
              className={styles.publishBTN}
              onClick={handlePublish}
              disabled={isPublishing}
            >
              Publish
            </button>
          </div>
          <ErrorMessage error={error} />
        </>
      ) : (
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
          <ErrorMessage error={error} />
        </>
      )}
    </div>
  );
};

export default ShareContent;
