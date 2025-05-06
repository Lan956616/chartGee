import type {
  SampleLineChartData,
  SampleLineChartOption,
} from "./lineChartDataType";

export const blankLineChartData: SampleLineChartData = {
  labels: Array(12).fill(""),
  datasets: [
    {
      label: "",
      data: Array(12).fill(""),
      backgroundColor: "#E573C2",
      borderColor: "#E573C2",
    },
    {
      label: "",
      data: Array(12).fill(""),
      backgroundColor: "#82E0AA",
      borderColor: "#82E0AA",
    },
    {
      label: "",
      data: Array(12).fill(""),
      backgroundColor: "#F4A261",
      borderColor: "#F4A261",
    },
    {
      label: "",
      data: Array(12).fill(""),
      backgroundColor: "#000000",
      borderColor: "#000000",
    },
    {
      label: "",
      data: Array(12).fill(""),
      backgroundColor: "#E74C3C",
      borderColor: "#E74C3C",
    },
    {
      label: "",
      data: Array(12).fill(""),
      backgroundColor: "#B87FDB",
      borderColor: "#B87FDB",
    },
    {
      label: "",
      data: Array(12).fill(""),
      backgroundColor: "#5E33D1",
      borderColor: "#5E33D1",
    },
    {
      label: "",
      data: Array(12).fill(""),
      backgroundColor: "#3498DB",
      borderColor: "#3498DB",
    },
  ],
};
export const sampleLineChartOption: SampleLineChartOption = {
  indexAxis: "x",
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 16 / 9,
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
        color: "#AOAOAO",
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
        color: "#AOAOAO",
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
      data: [100, 50, 85, 20, 68, 80, "", "", "", "", "", ""],
      backgroundColor: "#E573C2",
      borderColor: "#E573C2",
    },
    {
      label: "Mint",
      data: [20, 40, 53, 37, 55, 43, "", "", "", "", "", ""],
      backgroundColor: "#82E0AA",
      borderColor: "#82E0AA",
    },
    {
      label: "Mango",
      data: [40, 67, 67, 67, 40, 66, "", "", "", "", "", ""],
      backgroundColor: "#F4A261",
      borderColor: "#F4A261",
    },
    {
      label: "",
      data: Array(12).fill(""),
      backgroundColor: "#000000",
      borderColor: "#000000",
    },
    {
      label: "",
      data: Array(12).fill(""),
      backgroundColor: "#E74C3C",
      borderColor: "#E74C3C",
    },
    {
      label: "",
      data: Array(12).fill(""),
      backgroundColor: "#B87FDB",
      borderColor: "#B87FDB",
    },
    {
      label: "",
      data: Array(12).fill(""),
      backgroundColor: "#5E33D1",
      borderColor: "#5E33D1",
    },
  ],
};
