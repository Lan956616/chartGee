import styles from "./loading.module.css";
import Image from "next/image";

const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/loader.png"
        alt="loading spinner icon"
        width={60}
        height={60}
        className={styles.loadIcon}
      />
    </div>
  );
};

export default Loading;
