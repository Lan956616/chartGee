import styles from "./aboutSection.module.css";
import Image from "next/image";
import Link from "next/link";
const AboutSection: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about_wrapper}>
        <div className={styles.picWrapper}>
          <Image
            src="/HappyStudent.png"
            alt="happy student pic"
            fill
            className={styles.pic}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Use the best chart maker as your guide
          </h1>
          <p className={styles.description}>
            Creating the perfect chart shouldn{`'`}t feel overwhelming. At
            ChartGee, we make it simple. Empower yourself with the best online
            chart maker: crafted by experts, driven by innovation, and trusted
            by data enthusiasts.
          </p>
          <Link href="/signup" className={styles.try_BTN}>
            Try It Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
