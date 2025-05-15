import type {
  SampleBarChartData,
  SampleBarChartOptions,
} from "./barChartDataType";
const emptyDataset = (color: string) => ({
  label: "",
  data: Array(12).fill(""),
  backgroundColor: color,
});
export const SampleBarChartdata: SampleBarChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "Apple",
      data: [65, 59, 80, 81, "", "", "", "", "", "", "", ""],
      backgroundColor: "#E74C3C",
    },
    {
      label: "Banana",
      data: [50, 50, 50, 50, "", "", "", "", "", "", "", ""],
      backgroundColor: "#F7DC6F",
    },
    {
      label: "Guava",
      data: [50, 50, 50, 50, "", "", "", "", "", "", "", ""],
      backgroundColor: "#ABEBC6",
    },
    emptyDataset("#E67E22"),
    emptyDataset("#E573C2"),
    emptyDataset("#5DADE2"),
    emptyDataset("#EC7063"),
  ],
};

export const SampleBarChartoptions: SampleBarChartOptions = {
  indexAxis: "x",
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 16 / 9,
  layout: {
    padding: 20,
  },
  datasets: {
    bar: {
      barThickness: 31,
      borderWidth: 0,
      borderRadius: 25,
      borderColor: "#000000",
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Fruit Sales Trends(First Four Months)",
      font: {
        family: "'Outfit', 'Noto Sans TC', sans-serif",
        size: 25,
        weight: "bold",
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
          size: 23,
          weight: "bold",
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
        size: 19,
      },
    },
  },

  scales: {
    x: {
      grid: {
        color: "#4A4A4A",
        lineWidth: 3,
      },
      ticks: {
        font: {
          size: 16,
          weight: "bold",
          family: "'Outfit', 'Noto Sans TC', sans-serif",
        },
        color: "#000000",
      },
      title: {
        display: false,
        text: "(kg)",
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
        color: "#4A4A4A",
        lineWidth: 3,
      },
      ticks: {
        font: {
          size: 16,
          weight: "bold",
          family: "'Outfit', 'Noto Sans TC', sans-serif",
        },
        color: "#000000",
      },
      title: {
        display: true,
        text: "(kg)",
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

export const blankBarChartData: SampleBarChartData = {
  labels: Array(12).fill(""),
  datasets: [
    emptyDataset("#E74C3C"),
    emptyDataset("#F7DC6F"),
    emptyDataset("#ABEBC6"),
    emptyDataset("#E67E22"),
    emptyDataset("#E573C2"),
    emptyDataset("#5DADE2"),
    emptyDataset("#EC7063"),
  ],
};
