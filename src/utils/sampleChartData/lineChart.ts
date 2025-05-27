import type {
  SampleLineChartData,
  SampleLineChartOption,
} from "./lineChartDataType";

const emptyDataset = (color: string) => ({
  label: "",
  data: Array(12).fill(""),
  backgroundColor: color,
  borderColor: color,
});
export const sampleLineChartData: SampleLineChartData = {
  labels: [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  datasets: [
    {
      label: "Strawberry",
      data: [60, 50, 54, 20, 68, 70, "", "", "", "", "", ""],
      backgroundColor: "#E573C2",
      borderColor: "#E573C2",
    },
    {
      label: "Mint",
      data: [20, 40, 42, 37, 55, 43, "", "", "", "", "", ""],
      backgroundColor: "#82E0AA",
      borderColor: "#82E0AA",
    },
    {
      label: "Mango",
      data: [40, 67, 67, 67, 40, 61, "", "", "", "", "", ""],
      backgroundColor: "#F4A261",
      borderColor: "#F4A261",
    },
    emptyDataset("#000000"),
    emptyDataset("#E74C3C"),
    emptyDataset("#B87FDB"),
    emptyDataset("#5E33D1"),
    emptyDataset("#3498DB"),
  ],
};
export const sampleLineChartOption: SampleLineChartOption = {
  indexAxis: "x",
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 1 / 1,
  layout: {
    padding: 20,
  },

  elements: {
    line: {
      tension: 0,
      borderWidth: 5,
      cubicInterpolationMode: "default",
      showLine: false,
    },
    point: {
      rotation: 0,
      radius: 15,
      hoverRadius: 17,
      pointStyle: "round",
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Ice Cream Flavor Sales (January–June)",
      font: {
        family: "'Outfit', 'Noto Sans TC', sans-serif",
        size: 23,
        weight: "bold",
      },
      color: "#4A4A4A",
    },
    backgroundColor: {
      color: "#FFFFFF",
    },
    legend: {
      display: true,
      labels: {
        font: {
          family: "'Outfit', 'Noto Sans TC', sans-serif",
          size: 19,
          weight: "bold",
        },
        color: "#4A4A4A",
      },
    },
    datalabels: {
      display: true,
      color: "red",
      font: {
        family: "'Outfit', 'Noto Sans TC', sans-serif",
        weight: "bold",
        size: 15,
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: "#A0A0A0",
        lineWidth: 3,
      },
      ticks: {
        font: {
          size: 19,
          weight: "bold",
          family: "'Outfit', 'Noto Sans TC', sans-serif",
        },
        color: "#A0A0A0",
        padding: 10,
      },
      title: {
        display: false,
        text: "(scoops)",
        align: "end",
        font: {
          size: 20,
          weight: "normal",
          family: "'Outfit', 'Noto Sans TC', sans-serif",
        },
        color: "#4A4A4A",
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "#A0A0A0",
        lineWidth: 3,
      },
      ticks: {
        font: {
          size: 19,
          weight: "bold",
          family: "'Outfit', 'Noto Sans TC', sans-serif",
        },
        color: "#A0A0A0",
        padding: 10,
      },
      title: {
        display: true,
        text: "(scoops)",
        align: "end",
        font: {
          size: 20,
          weight: "normal",
          family: "'Outfit', 'Noto Sans TC', sans-serif",
        },
        color: "#4A4A4A",
      },
    },
  },
};
export const blankLineChartData: SampleLineChartData = {
  labels: Array(12).fill(""),
  datasets: [
    emptyDataset("#E573C2"),
    emptyDataset("#82E0AA"),
    emptyDataset("#F4A261"),
    emptyDataset("#000000"),
    emptyDataset("#E74C3C"),
    emptyDataset("#B87FDB"),
    emptyDataset("#5E33D1"),
    emptyDataset("#3498DB"),
  ],
};
