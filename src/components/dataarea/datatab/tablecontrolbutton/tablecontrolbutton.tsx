"use client";
import styles from "./tablecontrolbutton.module.css";
import Button from "@/components/button/button";
import { handleOptionChange } from "@/utils/updateOptions";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import {
  blankBarChartData,
  SampleBarChartdata,
  SampleBarChartoptions,
} from "../../../../../sampleBarChartData";

const TableControlButton: React.FC = () => {
  const { setData, setOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  return (
    <div className={styles.tableControlButton}>
      <Button
        className={styles.btn}
        width={50}
        onClick={() => {
          setData(blankBarChartData);
          handleOptionChange(setOption, "plugins.title.text", "");
        }}
      >
        Clear Data
      </Button>
      <Button
        className={styles.btn}
        width={50}
        onClick={() => {
          setData(SampleBarChartdata);
          handleOptionChange(
            setOption,
            "plugins.title.text",
            SampleBarChartoptions.plugins.title.text
          );
        }}
      >
        Reset Data
      </Button>
    </div>
  );
};

export default TableControlButton;
