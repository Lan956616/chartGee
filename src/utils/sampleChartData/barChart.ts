import type {
  SampleBarChartData,
  SampleBarChartOptions,
} from "./barChartDataType";
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
    { label: "", data: Array(12).fill(""), backgroundColor: "#E67E22" },
    { label: "", data: Array(12).fill(""), backgroundColor: "#E573C2" },
    { label: "", data: Array(12).fill(""), backgroundColor: "#5DADE2" },
    { label: "", data: Array(12).fill(""), backgroundColor: "#EC7063" },
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
        family: "'Outfit', 'Noto Sans TC', sans-serif",
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

  scales: {
    x: {
      grid: {
        color: "#4A4A4A",
        lineWidth: 1,
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
        lineWidth: 1,
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
