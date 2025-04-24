import styles from "./heroSection.module.css";
import Link from "next/link";
import Image from "next/image";
const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_wrapper}>
        <p className={styles.hero_label}>ONLINE GRAPH MAKER</p>
        <h1 className={styles.hero_title}>Make charting easy with Gee!</h1>
        <p className={styles.hero_description}>
          An interactive design platform to easily create clear, engaging, and
          professional data visualizations
        </p>
        <div className={styles.hero_BTNgroup}>
          <Link
            href="/signup"
            className={`${styles.hero_BTN} ${styles.signUp}`}
          >
            Sign Up Free
          </Link>
          <Link href="/login" className={`${styles.hero_BTN} ${styles.logIn}`}>
            Log In
          </Link>
        </div>
        <div className={styles.hero_imageWrapper}>
          <Image
            src="/homepage.png"
            alt="display picture"
            fill
            className={styles.hero_image}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
