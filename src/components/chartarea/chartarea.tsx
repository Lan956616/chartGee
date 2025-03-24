"use client";
import styles from "./chartarea.module.css";
import { ChartDataContext } from "../ChartDataProvider";
import { useContext } from "react";
import type { ContextType } from "../ChartDataProvider";
import { Bar } from "react-chartjs-2";
import { getCleanData } from "@/utils/getCleanData";
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
  const cleanedData = getCleanData(data);
  return (
    <section
      className={`${styles.chartarea} ${hideOnMobile && styles.hideOnMobile}`}
    >
      <Bar
        key={option.aspectRatio}
        data={cleanedData}
        options={option}
        className={styles.chart}
      />
    </section>
  );
};

export default ChartArea;
