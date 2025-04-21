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
    <>
      {showData && (
        <button
          className={styles.showGraphBTN}
          onClick={() => {
            setShowData(false);
          }}
        >
          <Image
            src="/statistics.png"
            alt="graph-icon"
            width={30}
            height={30}
          />
          <p>Show Graph</p>
        </button>
      )}
      {!showData && (
        <button
          className={styles.showDataBTN}
          onClick={() => {
            setShowData(true);
          }}
        >
          <Image src="/table.png" alt="data-icon" width={30} height={30} />
          <p>Show Data</p>
        </button>
      )}
    </>
  );
};

export default DisplayButtons;
