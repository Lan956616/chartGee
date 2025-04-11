import Image from "next/image";
import styles from "./spinner.module.css";
const Spinner: React.FC = () => {
  return (
    <>
      <Image
        src="/spinner.png"
        alt="loading spinner icon"
        width={70}
        height={70}
        className={styles.loadIcon}
      />
    </>
  );
};

export default Spinner;
