import { CategoryScale } from "chart.js";

export const SampleBarChartdata = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Apple",
      data: [65, 59, 80, 81],
      backgroundColor: "#D64550",
    },
    {
      label: "Banana",
      data: [50, 50, 50, 50],
      backgroundColor: "#F6E27F",
    },
    {
      label: "Guava",
      data: [50, 50, 50, 50],
      backgroundColor: "#BBD8B3",
    },
  ],
};

export const SampleBarChartoptions = {
  maintainAspectRatio: false,
  //柱狀圖寬度
  barThickness: 20,
  borderWidth: 0,
  //設定圓角數值 0-100數字
  borderRadius: 0,
  borderColor: "#000000",
  //長條圖方向
  indexAxis: "y",
  responsive: false,

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
    //圖表類別顏色區塊
    legend: {
      display: true,
      labels: {
        font: {
          family: "Outfit", // ✅ 設定圖例字體
          size: 16,
          weight: "normal",
        },
        color: "#000000",
      },
    },
  },

  //y軸從零開始
  scales: {
    x: {
      grid: {
        color: "#CDCDCD",
        lineWidth: 10,
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
        lineWidth: 10,
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
