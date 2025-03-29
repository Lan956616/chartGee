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
  LineElement,
  PointElement,
} from "chart.js";
import { getCleanData } from "@/utils/getCleanData";
import { getCleanPieData } from "@/utils/getCleanPieData";
import { Pie, Bar, Line } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  ChartDataLabels,
  backgroundColorPlugin,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);

type ChartAreaProps = {
  chartType: "pie" | "bar" | "line";
  hideOnMobile: boolean;
};
const ChartArea: React.FC<ChartAreaProps> = ({ chartType, hideOnMobile }) => {
  const { data, option, pieData, pieOption, lineData, lineOption, unit } =
    useContext(ChartDataContext) as unknown as ContextType;
  let ChartComponent = null;
  if (chartType === "pie") {
    ChartComponent = (
      <Pie
        key={pieOption.aspectRatio}
        data={getCleanPieData(pieData)}
        options={{
          ...pieOption,
          plugins: {
            ...pieOption.plugins,
            datalabels: {
              ...pieOption.plugins.datalabels,
              formatter: (value) => {
                return value === "" ? "" : `${value}${unit}`;
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
  if (chartType === "line") {
    ChartComponent = (
      <Line
        key={lineOption.aspectRatio}
        data={getCleanData(lineData)}
        options={lineOption}
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
