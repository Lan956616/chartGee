import styles from "./stepContent.module.css";
import Image from "next/image";
type StepContentProps = {
  activeIndex: number;
  index: number;
  tabTitle: string;
  tabContent: string;
  src: string;
  alt: string;
};
const StepContent: React.FC<StepContentProps> = ({
  activeIndex,
  index,
  tabContent,
  tabTitle,
  src,
  alt,
}) => {
  return (
    <div
      className={`${styles.stepContent} ${
        index === activeIndex ? styles.active : ""
      }`}
    >
      <div className={styles.text}>
        <h1 className={styles.title}>{tabTitle}</h1>
        <p className={styles.description}>{tabContent}</p>
      </div>
      <Image
        src={src}
        alt={alt}
        width={120}
        height={120}
        className={styles.image}
      />
    </div>
  );
};

export default StepContent;
