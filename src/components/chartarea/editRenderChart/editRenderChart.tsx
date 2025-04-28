"use client";
import { useEffect } from "react";
import styles from "./editRenderChart.module.css";
import { backgroundColorPlugin } from "@/utils/backgroundColorPlugin";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { applyPieFormatter } from "@/utils/applyPieFormatter";
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
import { EditRenderChartProps } from "@/utils/sampleChartData/projectDataType";
import dynamic from "next/dynamic";
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});
const Pie = dynamic(() => import("react-chartjs-2").then((mod) => mod.Pie), {
  ssr: false,
});
const EditRenderChart: React.FC<EditRenderChartProps> = ({
  chartType,
  data,
  option,
  barRef,
  lineRef,
  pieRef,
  onReady,
}) => {
  useEffect(() => {
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
  }, []);

  if (chartType === "bar") {
    return (
      <Bar
        key={option.aspectRatio}
        data={getCleanData(data)}
        options={option}
        className={styles.chart}
        ref={(instance) => {
          if (instance) {
            barRef.current = instance;
            onReady?.();
          }
        }}
      />
    );
  }
  if (chartType === "line") {
    return (
      <Line
        key={option.aspectRatio}
        data={getCleanData(data)}
        options={option}
        className={styles.chart}
        ref={(instance) => {
          if (instance) {
            lineRef.current = instance;
            onReady?.();
          }
        }}
      />
    );
  }
  if (chartType === "pie") {
    return (
      <Pie
        key={option.aspectRatio}
        data={getCleanPieData(data)}
        options={applyPieFormatter(option)}
        className={styles.chart}
        ref={(instance) => {
          if (instance) {
            pieRef.current = instance;
            onReady?.();
          }
        }}
      />
    );
  }
};

export default EditRenderChart;
