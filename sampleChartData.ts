export type BarChartDatasets = {
  label: string;
  data: number[];
  backgroundColor: string;
};
export type SampleBarChartData = {
  labels: string[];
  datasets: BarChartDatasets[];
};
export type SampleBarChartOptions = {
  barThickness: number;
  borderWidth: number;
  borderRadius: number;
  borderColor: string;
  indexAxis: "x" | "y";
  responsive: true | false;
  maintainAspectRatio: true | false;
  aspectRatio: number;
  plugins: {
    //圖表標題
    title: {
      display: true | false;
      text: string;
      font: {
        family: "Outfit";
        size: number;
        weight: "normal" | "bold";
      };
      color: string;
    };
    legend: {
      display: true | false;
      labels: {
        font: {
          family: "Outfit";
          size: number;
          weight: "normal" | "bold";
        };
        color: string;
      };
    };
  };
  scales: {
    x: {
      grid: {
        color: string;
        lineWidth: number;
      };
      ticks: {
        font: {
          size: number;
          weight: "bold" | "normal";
          family: "Outfit";
        };
        color: string;
      };
    };
    y: {
      beginAtZero: true;
      grid: {
        color: string;
        lineWidth: number;
      };
      ticks: {
        font: {
          size: number;
          weight: "bold" | "normal";
          family: "Outfit";
        };
        color: string;
      };
    };
  };
};
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
    { label: "", data: Array(12).fill(""), backgroundColor: "##EC7063" },
  ],
};

export const SampleBarChartoptions: SampleBarChartOptions = {
  //柱狀圖寬度
  barThickness: 20,
  borderWidth: 0,
  //設定圓角數值 0-100數字
  borderRadius: 0,
  borderColor: "#000000",
  //長條圖方向
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 16 / 9,

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
