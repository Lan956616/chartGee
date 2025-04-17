import styles from "./NoProject.module.css";
import Image from "next/image";
import Link from "next/link";
const NoProject: React.FC = () => {
  return (
    <div className={styles.noProjectContainer}>
      <div className={styles.picWrapper}>
        <Image
          src="/noproject.png"
          alt="no project"
          fill
          className={styles.image}
        />
      </div>
      <h1 className={styles.title}>
        Sorry the content you have requested does not exist.
      </h1>
      <Link href="/" className={styles.homeBTN}>
        Go to Homepage
      </Link>
    </div>
  );
};

export default NoProject;
