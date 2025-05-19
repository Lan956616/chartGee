"use client";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import styles from "./sharePopUp.module.css";
import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "@/utils/firebase/firebase";
import Spinner from "@/components/loading/spinner/spinner";
import ErrorMessage from "@/components/auth/errorMessage/errorMessage";
import ShareContent from "./shareContent/shareContent";
type SharePopUpProps = {
  projectID: string;
  setShowSharePopup: Dispatch<SetStateAction<boolean>>;
  uid: string;
};
const SharePopUp: React.FC<SharePopUpProps> = ({
  projectID,
  setShowSharePopup,
  uid,
}) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isPublic, setIsPublic] = useState<boolean | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useClickOutside(popupRef, () => {
    setShowSharePopup(false);
  });

  useEffect(() => {
    const projectDoc = doc(db, "users", uid, "projects", projectID);
    const unsubscribe = onSnapshot(
      projectDoc,
      (snapShot) => {
        if (snapShot.exists()) {
          setIsPublic(snapShot.data().isPublic);
        } else {
          setError("Project not found");
        }
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
    return () => unsubscribe();
  }, [uid, projectID]);

  const renderContent = () => {
    if (isLoading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorMessage error={error} />;
    }
    if (isPublic !== null) {
      return (
        <ShareContent projectID={projectID} isPublic={isPublic} uid={uid} />
      );
    }
    return null;
  };

  return (
    <div className={styles.popupContainer}>
      <div
        className={`${styles.popupBox} ${
          (isLoading || error) && styles.contentCentered
        }`}
        ref={popupRef}
      >
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
        {renderContent()}
      </div>
    </div>
  );
};

export default SharePopUp;
