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
      <Image src="/analysis.png" alt="no graph icon" width={200} height={200} />
      <Link href="/dashboard" className={styles.createBTN}>
        Create New Graph
      </Link>
    </div>
  );
};

export default EmptyProject;
