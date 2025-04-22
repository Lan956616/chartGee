import styles from "./downloadButton.module.css";
import Image from "next/image";

const DownloadButton: React.FC = () => {
  return (
    <button className={styles.btn}>
      <Image
        src="/whitedownload.png"
        alt="download-icon"
        width={20}
        height={20}
        className={styles.btnImg}
      />
      <p className={styles.title}>Download</p>
    </button>
  );
};

export default DownloadButton;
