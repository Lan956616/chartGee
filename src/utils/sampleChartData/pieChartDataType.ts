type PieChartDatasets = {
  label: string;
  data: (number | "")[];
  backgroundColor: string[];
};
export type SamplePieChartData = {
  labels: string[];
  datasets: PieChartDatasets[];
};
export type SamplePieChartOption = {
  indexAxis: "x" | "y";
  responsive: true | false;
  maintainAspectRatio: true | false;
  aspectRatio: number;
  layout: {
    padding: number;
  };
  datasets: {
    pie: {
      borderColor: string;
      borderWidth: number;
      borderRadius: number;
      rotation: number;
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
};
