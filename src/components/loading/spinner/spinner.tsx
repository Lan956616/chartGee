import Image from "next/image";
import styles from "./spinner.module.css";
type SpinnerProps = {
  white?: boolean;
};
const Spinner: React.FC<SpinnerProps> = ({ white = false }) => {
  return (
    <Image
      src={white ? "/whitespinner.png" : "/spinner.png"}
      alt="loading spinner icon"
      width={70}
      height={70}
      className={styles.loadIcon}
    />
  );
};

export default Spinner;
