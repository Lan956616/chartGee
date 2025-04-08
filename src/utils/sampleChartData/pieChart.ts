import type {
  SamplePieChartData,
  SamplePieChartOption,
} from "./pieChartDataType";

export const samplePieChartData: SamplePieChartData = {
  labels: ["Grape", "BlueBerry", "Banana", "", "", "", "", ""],
  datasets: [
    {
      label: "My First Dataset",
      data: [100, 50, 100, "", "", "", "", ""],
      backgroundColor: [
        "#8E44AD",
        "#1E3799",
        "#F7DC6F",
        "#E573C2",
        "#3498DB",
        "#E74C3C",
        "#F4A261",
        "#7FB3D5",
      ],
    },
  ],
};
export const samplePieChartOption: SamplePieChartOption = {
  indexAxis: "x",
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 16 / 9,
  layout: {
    padding: 20,
  },
  datasets: {
    pie: {
      borderColor: "#000000",
      borderWidth: 5,
      borderRadius: 0,
      rotation: 0,
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Fruit Sales Trends In May",
      font: {
        family: "'Outfit', 'Noto Sans TC', sans-serif",
        size: 20,
        weight: "normal",
      },
      color: "#000000",
    },
    backgroundColor: {
      color: "#FFFFFF",
    },
    legend: {
      display: true,
      labels: {
        font: {
          family: "'Outfit', 'Noto Sans TC', sans-serif",
          size: 16,
          weight: "normal",
        },
        color: "#000000",
      },
    },
    datalabels: {
      display: true,
      color: "#000000",
      font: {
        family: "'Outfit', 'Noto Sans TC', sans-serif",
        weight: "bold",
        size: 12,
      },
    },
  },
};
export const blankPieChartData: SamplePieChartData = {
  labels: ["", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "My First Dataset",
      data: ["", "", "", "", "", "", "", ""],
      backgroundColor: [
        "#8E44AD",
        "#1E3799",
        "#F7DC6F",
        "#E573C2",
        "#3498DB",
        "#E74C3C",
        "#F4A261",
        "#7FB3D5",
      ],
    },
  ],
};
