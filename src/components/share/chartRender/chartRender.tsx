"use client";
import { useEffect } from "react";
import styles from "./chartRender.module.css";
import { backgroundColorPlugin } from "@/utils/backgroundColorPlugin";
import ChartDataLabels from "chartjs-plugin-datalabels";
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
import { StripDataType } from "@/utils/sampleChartData/projectDataType";
import dynamic from "next/dynamic";

type ChartRenderProps = { project: StripDataType };
const ChartRender: React.FC<ChartRenderProps> = ({ project }) => {
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
  const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
    ssr: false,
  });
  const Line = dynamic(
    () => import("react-chartjs-2").then((mod) => mod.Line),
    { ssr: false }
  );
  const Pie = dynamic(() => import("react-chartjs-2").then((mod) => mod.Pie), {
    ssr: false,
  });
  if (project.chartType === "bar") {
    return (
      <Bar
        data={getCleanData(project.data)}
        options={project.option}
        className={styles.chart}
      />
    );
  }
  if (project.chartType === "line")
    return (
      <Line
        data={getCleanData(project.data)}
        options={project.option}
        className={styles.chart}
      />
    );
  if (project.chartType === "pie")
    return (
      <Pie
        data={getCleanPieData(project.data)}
        options={project.option}
        className={styles.chart}
      />
    );
};

export default ChartRender;
