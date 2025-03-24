"use client";
import styles from "./chartarea.module.css";
import { ChartDataContext } from "../ChartDataProvider";
import { useContext } from "react";
import type { ContextType } from "../ChartDataProvider";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
type ChartAreaProps = {
  hideOnMobile: boolean;
};
const ChartArea: React.FC<ChartAreaProps> = ({ hideOnMobile }) => {
  const { data, option } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  // 過濾掉空欄位
  const activeLabels = data.labels.filter((label) => label.trim() !== "");
  const activeDatasets = data.datasets
    .filter((dataset) => dataset.label.trim() !== "")
    .map((dataset) => ({
      ...dataset,
      data: dataset.data
        .slice(0, activeLabels.length)
        .map((val) => (val === "" ? null : Number(val))), // 轉換數據
    }));
  console.log("ala", activeLabels);
  return (
    <section
      className={`${styles.chartarea} ${hideOnMobile && styles.hideOnMobile}`}
    >
      <Bar
        key={option.aspectRatio}
        data={{ labels: activeLabels, datasets: activeDatasets }}
        options={option}
        className={styles.chart}
      />
    </section>
  );
};

export default ChartArea;
