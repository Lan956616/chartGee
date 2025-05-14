import styles from "./downloadButton.module.css";
import Image from "next/image";
type DownloadButtonProps = {
  handleDownload: () => void;
  isDownload: boolean;
  inSideBar?: boolean;
};
const DownloadButton: React.FC<DownloadButtonProps> = ({
  handleDownload,
  isDownload,
  inSideBar = false,
}) => {
  return (
    <button
      className={`${styles.btn} ${inSideBar && styles.inSideBar}`}
      onClick={handleDownload}
      disabled={isDownload}
    >
      {isDownload ? (
        <Image
          src="/load.png"
          alt="loading spinner"
          width={20}
          height={20}
          className={styles.spinner}
        />
      ) : (
        <Image
          src="/whitedownload.png"
          alt="download-icon"
          width={20}
          height={20}
        />
      )}

      <p className={styles.title}>Download</p>
    </button>
  );
};

export default DownloadButton;
