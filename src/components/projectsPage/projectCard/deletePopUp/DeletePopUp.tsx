"use client";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import styles from "./deletePopUp.module.css";
import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
import { useAppSelector } from "@/lib/hooks";
import { handleDeleteProject } from "@/utils/projectsPage/handleDeleteProject";
import { FirebaseError } from "firebase/app";
import ErrorMessage from "@/components/auth/ErrorMessage/ErrorMessage";
type DeletePopUpProps = {
  projectID: string;
  setShowDeletePopup: Dispatch<SetStateAction<boolean>>;
};
const DeletePopUp: React.FC<DeletePopUpProps> = ({
  projectID,
  setShowDeletePopup,
}) => {
  const [isDelete, setIsDelete] = useState(false);
  const [error, setError] = useState("");
  const uid = useAppSelector((store) => {
    return store.auth.currentUser;
  });
  const popupRef = useRef<HTMLDivElement>(null);
  useClickOutside(popupRef, () => {
    setShowDeletePopup(false);
  });
  const handleDelete = async () => {
    setError("");
    setIsDelete(true);
    try {
      await handleDeleteProject(uid as string, projectID);
      setShowDeletePopup(false);
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(err.code);
      } else {
        setError("Delete Failed. Please try again");
      }
    } finally {
      setIsDelete(false);
    }
  };
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupBox} ref={popupRef}>
        <Image
          src="/icons/cross.png"
          alt="close icon"
          width={30}
          height={30}
          className={styles.closeIcon}
          onClick={() => {
            setShowDeletePopup(false);
          }}
        />
        <h1 className={styles.mainTitle}>Delete Chart</h1>
        <p className={styles.title}>
          Are you sure you want to delete this project?
        </p>
        <div className={styles.buttons}>
          <button
            className={`${styles.BTN} ${styles.noBTN}`}
            onClick={() => {
              setShowDeletePopup(false);
            }}
          >
            No
          </button>
          <button
            className={`${styles.BTN} ${styles.yesBTN}`}
            onClick={handleDelete}
            disabled={isDelete}
          >
            Yes
          </button>
        </div>
        <ErrorMessage error={error} />
      </div>
    </div>
  );
};

export default DeletePopUp;
