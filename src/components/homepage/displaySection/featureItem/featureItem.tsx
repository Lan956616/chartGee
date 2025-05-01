import styles from "./featureItem.module.css";
import type { Dispatch, SetStateAction } from "react";

type FeatureItemProps = {
  title: string;
  description: string;
  active: boolean;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  id: number;
};
const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  active,
  setActiveIndex,
  id,
}) => {
  return (
    <div
      className={`${styles.featureItemWrapper} ${active && styles.active}`}
      onClick={() => {
        setActiveIndex(id);
      }}
    >
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FeatureItem;
