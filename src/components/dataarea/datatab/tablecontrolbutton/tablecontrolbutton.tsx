"use client";
import styles from "./tablecontrolbutton.module.css";
import Button from "@/components/button/button";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import { resetDataOnClick, clearDataOnClick } from "@/utils/controlButtonFunc";

const TableControlButton: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context) return;
  const { setCurrentData } = context;
  return (
    <div className={styles.tableControlButton}>
      <Button
        className={styles.btn}
        width={50}
        onClick={() => clearDataOnClick(setCurrentData)}
      >
        Clear Data
      </Button>
      <Button
        className={styles.btn}
        width={50}
        onClick={() => resetDataOnClick(setCurrentData)}
      >
        Reset Data
      </Button>
    </div>
  );
};

export default TableControlButton;
