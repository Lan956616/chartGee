"use client";
import { useContext } from "react";
import { backgroundColorPlugin } from "@/utils/backgroundColorPlugin";
import ChartDataLabels from "chartjs-plugin-datalabels";
import styles from "./chartarea.module.css";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { getCleanData } from "@/utils/getCleanData";
import { Pie, Bar } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  ChartDataLabels,
  backgroundColorPlugin,
  CategoryScale,
  LinearScale,
  BarElement
);

type ChartAreaProps = {
  chartType: "pie" | "bar" | "line";
  hideOnMobile: boolean;
};
const ChartArea: React.FC<ChartAreaProps> = ({ chartType, hideOnMobile }) => {
  const { data, option, pieData, pieOption, unit } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  let ChartComponent = null;
  if (chartType === "pie") {
    ChartComponent = (
      <Pie
        key={pieOption.aspectRatio}
        data={pieData}
        options={{
          ...pieOption,
          plugins: {
            ...pieOption.plugins,
            datalabels: {
              ...pieOption.plugins.datalabels,
              formatter: (value) => {
                return value === null ? "" : `${value}${unit}`;
              },
            },
          },
        }}
        className={styles.chart}
      />
    );
  }
  if (chartType === "bar") {
    ChartComponent = (
      <Bar
        key={option.aspectRatio}
        data={getCleanData(data)}
        options={option}
        className={styles.chart}
      />
    );
  }
  return (
    <section
      className={`${styles.chartarea} ${hideOnMobile && styles.hideOnMobile}`}
    >
      {ChartComponent}
    </section>
  );
};

export default ChartArea;
