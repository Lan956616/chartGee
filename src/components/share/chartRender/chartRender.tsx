"use client";
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
import { Pie, Bar, Line } from "react-chartjs-2";
import { StripDataType } from "@/utils/sampleChartData/projectDataType";
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

type ChartRenderProps = { project: StripDataType };
const ChartRender: React.FC<ChartRenderProps> = ({ project }) => {
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
