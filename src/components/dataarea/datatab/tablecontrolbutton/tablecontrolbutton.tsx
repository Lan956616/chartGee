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
} from "@/utils/sampleChartData/barChart";
import {
  blankPieChartData,
  samplePieChartData,
  samplePieChartOption,
} from "@/utils/sampleChartData/pieChart";
import {
  blankLineChartData,
  sampleLineChartData,
  sampleLineChartOption,
} from "@/utils/sampleChartData/lineChart";
type TableControlButtonProps = { chartType: "bar" | "pie" | "line" };
const TableControlButton: React.FC<TableControlButtonProps> = ({
  chartType,
}) => {
  const {
    setData,
    setOption,
    setPieData,
    setPieOption,
    setLineData,
    setLineOption,
  } = useContext(ChartDataContext) as unknown as ContextType;
  const ClearDataOnClick = () => {
    if (chartType === "bar") {
      setData(blankBarChartData);
      handleOptionChange(setOption, "plugins.title.text", "");
    } else if (chartType === "pie") {
      setPieData(blankPieChartData);
      handleOptionChange(setPieOption, "plugins.title.text", "");
    } else if (chartType === "line") {
      setLineData(blankLineChartData);
      handleOptionChange(setLineOption, "plugins.title.text", "");
    }
  };
  const resetDataOnClick = () => {
    if (chartType === "bar") {
      setData(SampleBarChartdata);
      handleOptionChange(
        setOption,
        "plugins.title.text",
        SampleBarChartoptions.plugins.title.text
      );
    } else if (chartType === "pie") {
      setPieData(samplePieChartData);
      handleOptionChange(
        setPieOption,
        "plugins.title.text",
        samplePieChartOption.plugins.title.text
      );
    } else if (chartType === "line") {
      setLineData(sampleLineChartData);
      handleOptionChange(
        setLineOption,
        "plugins.title.text",
        sampleLineChartOption.plugins.title.text
      );
    }
  };
  return (
    <div className={styles.tableControlButton}>
      <Button className={styles.btn} width={50} onClick={ClearDataOnClick}>
        Clear Data
      </Button>
      <Button className={styles.btn} width={50} onClick={resetDataOnClick}>
        Reset Data
      </Button>
    </div>
  );
};

export default TableControlButton;
