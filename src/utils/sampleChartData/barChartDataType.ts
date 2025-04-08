type BarChartDatasets = {
  label: string;
  data: (number | "")[];
  backgroundColor: string;
};
export type SampleBarChartData = {
  labels: string[];
  datasets: BarChartDatasets[];
};
export type SampleBarChartOptions = {
  indexAxis: "x" | "y";
  responsive: true | false;
  maintainAspectRatio: true | false;
  aspectRatio: number;
  layout: {
    padding: number;
  };
  datasets: {
    bar: {
      barThickness: number;
      borderWidth: number;
      borderRadius: number;
      borderColor: string;
    };
  };
  plugins: {
    //圖表標題
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
    datalabels: {
      display: true | false;
      color: string;
      font: {
        family: "'Outfit', 'Noto Sans TC', sans-serif";
        weight: "bold" | "normal";
        size: number;
      };
      formatter?: (value: number | string) => string;
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
