"use client";
import styles from "./chartarea.module.css";
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
  data: any;
  options: any;
};

const ChartArea: React.FC<ChartAreaProps> = ({ data, options }) => {
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
    <section className={styles.chartarea}>
      <Bar
        data={{ labels: activeLabels, datasets: activeDatasets }}
        options={options}
        className={styles.chart}
        width={400}
        height={400}
      />
    </section>
  );
};

export default ChartArea;
