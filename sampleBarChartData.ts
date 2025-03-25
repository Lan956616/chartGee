import type { ChartOptions, ChartData } from "chart.js";
export type BackgroundColorPlugin = {
  plugins: {
    backgroundColor: {
      color: string;
    };
  };
};

export const SampleBarChartdata: ChartData<"bar"> = {
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
    { label: "", data: Array(12).fill(""), backgroundColor: "#E67E22" },
    { label: "", data: Array(12).fill(""), backgroundColor: "#E573C2" },
    { label: "", data: Array(12).fill(""), backgroundColor: "#5DADE2" },
    { label: "", data: Array(12).fill(""), backgroundColor: "#EC7063" },
  ],
};

export const SampleBarChartoptions: ChartOptions<"bar"> &
  BackgroundColorPlugin = {
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 16 / 9,
  datasets: {
    bar: {
      barThickness: 20,
      borderWidth: 0,
      borderRadius: 10,
      borderColor: "#000000",
    },
  },
  plugins: {
    //圖表標題
    title: {
      display: true,
      text: "Fruit Sales Trends(First Four Months)",
      font: {
        family: "Outfit",
        size: 20,
        weight: "normal",
      },
      color: "#000000",
    },
    backgroundColor: {
      color: "#FFFFFF",
    },
    //圖表類別顏色區塊
    legend: {
      display: true,
      labels: {
        font: {
          family: "Outfit",
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
        weight: "bold",
        size: 12,
      },
      formatter: (value) => {
        return `${value}`;
      },
    },
  },

  scales: {
    x: {
      grid: {
        color: "#CDCDCD",
        lineWidth: 1,
      },
      ticks: {
        font: {
          size: 16,
          weight: "bold",
          family: "Outfit",
        },
        color: "black",
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "#CDCDCD",
        lineWidth: 1,
      },
      ticks: {
        font: {
          size: 16,
          weight: "bold",
          family: "Outfit",
        },
        color: "black",
      },
    },
  },
};

export const blankBarChartData: ChartData<"bar"> = {
  labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "",
      data: Array(12).fill(""),
      backgroundColor: "#E74C3C",
    },
    {
      label: "",
      data: Array(12).fill(""),
      backgroundColor: "#F7DC6F",
    },
    {
      label: "",
      data: Array(12).fill(""),
      backgroundColor: "#ABEBC6",
    },
    { label: "", data: Array(12).fill(""), backgroundColor: "#E67E22" },
    { label: "", data: Array(12).fill(""), backgroundColor: "#E573C2" },
    { label: "", data: Array(12).fill(""), backgroundColor: "#5DADE2" },
    { label: "", data: Array(12).fill(""), backgroundColor: "#EC7063" },
  ],
};
