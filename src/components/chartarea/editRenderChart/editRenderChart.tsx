import styles from "./editRenderChart.module.css";
import { ProjectDataType } from "@/utils/sampleChartData/projectDataType";
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

const EditRenderChart: React.FC<ProjectDataType> = ({
  chartType,
  data,
  option,
}) => {
  if (chartType === "bar") {
    return (
      <Bar
        key={option.aspectRatio}
        data={getCleanData(data)}
        options={option}
        className={styles.chart}
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
      />
    );
  }
};

export default EditRenderChart;
