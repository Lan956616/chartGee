type LineChartData = {
  label: string;
  data: (number | string)[];
  backgroundColor: string;
  borderColor: string;
};

export type SampleLineChartData = {
  labels: string[];
  datasets: LineChartData[];
};

export type SampleLineChartOption = {
  indexAxis: "x" | "y";
  responsive: true;
  maintainAspectRatio: true;
  aspectRatio: number;
  layout: {
    padding: 20;
  };
  elements: {
    line: {
      tension: number;
      borderWidth: number;
      cubicInterpolationMode: "default" | "monotone";
      showLine: false | true;
    };
    point: {
      rotation: number;
      radius: number;
      hoverRadius: number;
      pointStyle: "round" | "rect" | "rectRounded" | "star" | "triangle";
    };
  };
  plugins: {
    title: {
      display: true | false;
      text: string;
      font: {
        family: "'Outfit', 'Noto Sans TC', sans-serif";
        size: number;
        weight: "normal" | "bold";
      };
      color: string;
    };
    backgroundColor: {
      color: string;
    };
    legend: {
      display: true | false;
      labels: {
        font: {
          family: "'Outfit', 'Noto Sans TC', sans-serif";
          size: number;
          weight: "normal" | "bold";
        };
        color: string;
      };
    };
    datalabels: {
      display: true | false;
      color: string;
      font: {
        family: "'Outfit', 'Noto Sans TC', sans-serif";
        weight: "bold" | "normal";
        size: number;
      };
      formatter: (value: number | string) => string;
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
          family: "'Outfit', 'Noto Sans TC', sans-serif";
        };
        color: string;
        padding: number;
      };
      title: {
        display: false | true;
        text: string;
        align: "end";
        font: {
          size: number;
          weight: "normal" | "bold";
          family: "'Outfit', 'Noto Sans TC', sans-serif";
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
          family: "'Outfit', 'Noto Sans TC', sans-serif";
        };
        color: string;
        padding: number;
      };
      title: {
        display: false | true;
        text: string;
        align: "end";
        font: {
          size: number;
          weight: "normal" | "bold";
          family: "'Outfit', 'Noto Sans TC', sans-serif";
        };
        color: string;
      };
    };
  };
};
