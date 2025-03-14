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
  return (
    <section className={styles.chartarea}>
      <Bar
        data={data}
        options={options}
        className={styles.chart}
        width={400}
        height={400}
      />
    </section>
  );
};

export default ChartArea;
