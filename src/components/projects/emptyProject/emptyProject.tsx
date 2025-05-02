import styles from "./emptyProject.module.css";
import Image from "next/image";
import Link from "next/link";

const EmptyProject: React.FC = () => {
  return (
    <div className={styles.emptyProjectWrapper}>
      <div className={styles.txt}>
        <p>Look at all this empty space!</p>
        <p>Let&#39;s spice things up.</p>
      </div>
      <div className={styles.imageArea}>
        <Image
          src="/analysis.png"
          alt="no chart icon"
          fill
          className={styles.image}
        />
      </div>

      <Link href="/dashboard" className={styles.createBTN}>
        Create New Chart
      </Link>
    </div>
  );
};

export default EmptyProject;
