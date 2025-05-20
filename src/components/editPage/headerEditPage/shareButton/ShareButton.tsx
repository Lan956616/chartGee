import styles from "./shareButton.module.css";
import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
type ShareButtonProps = {
  setShowSharePopUp: Dispatch<SetStateAction<boolean>>;
  inSideBar?: boolean;
};
const ShareButton: React.FC<ShareButtonProps> = ({
  setShowSharePopUp,
  inSideBar = false,
}) => {
  return (
    <button
      className={`${styles.btn} ${inSideBar && styles.inSideBar}`}
      onClick={() => {
        setShowSharePopUp(true);
      }}
    >
      <Image src="/icons/share.png" alt="share-icon" width={20} height={20} />
      <p className={styles.title}>Share</p>
    </button>
  );
};

export default ShareButton;
