import styles from "./stepTab.module.css";
import type { Dispatch, SetStateAction } from "react";
type StepTabProps = {
  activeIndex: number;
  index: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  tabTitle: string;
};
const StepTab: React.FC<StepTabProps> = ({
  activeIndex,
  index,
  setActiveIndex,
  tabTitle,
}) => {
  return (
    <div
      className={`${styles.stepTab} ${activeIndex === index && styles.active}`}
      onClick={() => {
        setActiveIndex(index);
      }}
    >
      <h1>{tabTitle}</h1>
      <div className={styles.progressBar}></div>
    </div>
  );
};

export default StepTab;
