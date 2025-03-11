export const SampleBarChartdata = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Apple",
      data: [65, 59, 80, 81],
      backgroundColor: "#D64550",
      borderColor: "rgba(255, 99, 132, 1)",
    },
    {
      label: "Banana",
      data: [50, 50, 50, 50],
      backgroundColor: "#F6E27F",
      borderColor: "black",
    },
    {
      label: "Guava",
      data: [50, 50, 50, 50],
      backgroundColor: "#BBD8B3",
      borderColor: "black",
    },
  ],
};

export const SampleBarChartoptions = {
  maintainAspectRatio: false,
  //柱狀圖寬度
  barPercentage: 0.9,
  borderWidth: 0,
  //設定圓角數值 0-100數字
  borderRadius: 0,
  //長條圖方向
  indexAxis: "x",
  responsive: false,
  plugins: {
    //圖表標題
    title: {
      display: true,
      text: "Fruit Sales Trends(First Four Months)",
      font: {
        family: "Outfit",
        size: 20,
        weight: "500",
      },
      color: "black",
    },
    //圖表類別顏色區塊
    legend: {
      display: true,
      labels: {
        font: {
          family: "Outfit", // ✅ 設定圖例字體
          size: 16,
          weight: "500",
        },
      },
    },
  },

  //y軸從零開始
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
