import styles from "./displaybuttons.module.css";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
type DisplayButtonsProps = {
  showData: boolean;
  setShowData: Dispatch<SetStateAction<boolean>>;
};
const DisplayButtons: React.FC<DisplayButtonsProps> = ({
  showData,
  setShowData,
}) => {
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
