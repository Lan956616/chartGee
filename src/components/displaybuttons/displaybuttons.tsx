import styles from "./displaybuttons.module.css";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { StripDataType } from "@/utils/sampleChartData/projectDataType";
type DisplayButtonsProps = {
  showData: boolean;
  setShowData: Dispatch<SetStateAction<boolean>>;
  showNoProject: boolean;
  currentData: StripDataType | null;
};
const DisplayButtons: React.FC<DisplayButtonsProps> = ({
  showData,
  setShowData,
  showNoProject,
  currentData,
}) => {
  if (!currentData || showNoProject) return null;
  return (
    <button
      className={`${styles.toggleButton} ${
        showData ? styles.chart : styles.data
      }`}
      onClick={() => {
        setShowData((prev) => !prev);
      }}
    >
      <Image
        src={showData ? "/statistics.png" : "/table.png"}
        alt={showData ? "chart-icon" : "data-icon"}
        width={30}
        height={30}
        className={styles.icon}
      />
      <p>{showData ? "Show Chart" : "Show Data"}</p>
    </button>
  );
};

export default DisplayButtons;
