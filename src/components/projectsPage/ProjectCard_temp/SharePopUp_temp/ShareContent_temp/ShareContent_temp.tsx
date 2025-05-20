"use client";
import { useState, useEffect } from "react";
import styles from "./shareContent.module.css";
import AfterPublish from "./AfterPublish/AfterPublish";
import BeforePublish from "./BeforePublish/BeforePublish";
type ShareContent = { projectID: string; isPublic: boolean; uid: string };
const ShareContent: React.FC<ShareContent> = ({ projectID, isPublic, uid }) => {
  const [URL, setURL] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setURL(`${window.location.origin}/share/${projectID}`);
    }
  }, [projectID]);
  return (
    <div className={styles.shareContentContainer}>
      {!isPublic ? (
        <BeforePublish uid={uid} projectID={projectID} />
      ) : (
        <AfterPublish url={URL} />
      )}
    </div>
  );
};

export default ShareContent;
