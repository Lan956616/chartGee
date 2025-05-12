"use client";
import styles from "./tablecontrolbutton.module.css";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import { resetDataOnClick, clearDataOnClick } from "@/utils/controlButtonFunc";
const TableControlButton: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context) return;
  const { setCurrentData } = context;
  return (
    <div className={styles.tableControlButton}>
      <button
        className={styles.btn}
        onClick={() => clearDataOnClick(setCurrentData)}
      >
        Clear Data
      </button>
      <button
        className={styles.btn}
        onClick={() => resetDataOnClick(setCurrentData)}
      >
        Reset Data
      </button>
    </div>
  );
};

export default TableControlButton;
