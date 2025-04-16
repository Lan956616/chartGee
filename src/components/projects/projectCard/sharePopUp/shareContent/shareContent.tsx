"use client";

import styles from "./shareContent.module.css";
import AfterPublish from "./afterPublish/AfterPublish";
import BeforePublish from "./beforePublish/BeforePublish";
type ShareContent = { projectID: string; isPublic: boolean; uid: string };
const ShareContent: React.FC<ShareContent> = ({ projectID, isPublic, uid }) => {
  const URL = `${window.location.origin}/share/${projectID}`;

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
