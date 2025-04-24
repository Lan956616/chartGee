"use client";
import styles from "./BeforePublish.module.css";
import { useState } from "react";
import ErrorMessage from "@/components/auth/errorMessage/errorMessage";
import { db } from "@/utils/firebase";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

type BeforePublishProps = {
  uid: string;
  projectID: string;
};
const BeforePublish: React.FC<BeforePublishProps> = ({ uid, projectID }) => {
  const [isPublishing, setIsPublishing] = useState(false);
  const [error, setError] = useState("");
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { isPublic, updatedAt, imageURL, ...restData } = projectData;
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
  );
};

export default BeforePublish;
