import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>Yuan Shao Lan &copy; 2025</p>
      <Link
        href="https://github.com/Lan956616/chartGee"
        className={styles.picWrapper}
      >
        <Image
          src="/github.png"
          alt="github icon"
          fill
          className={styles.iconHover}
        />
        <Image
          src="/githubhover.png"
          alt="github hover icon"
          fill
          className={styles.icon}
        />
      </Link>
    </footer>
  );
};

export default Footer;
