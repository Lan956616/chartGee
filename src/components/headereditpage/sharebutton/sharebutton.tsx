import styles from "./sharebutton.module.css";
import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
type ShareButtonProps = {
  setShowSharePopUp: Dispatch<SetStateAction<boolean>>;
};
const ShareButton: React.FC<ShareButtonProps> = ({ setShowSharePopUp }) => {
  return (
    <button
      className={styles.btn}
      onClick={() => {
        setShowSharePopUp(true);
      }}
    >
      <Image
        src="/share.png"
        alt="share-icon"
        width={20}
        height={20}
        className={styles.btnImg}
      />
      <p className={styles.title}>Share</p>
    </button>
  );
};

export default ShareButton;
