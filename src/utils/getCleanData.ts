import type { SampleBarChartData } from "./sampleChartData/barChart";

export const getCleanData = (data: SampleBarChartData) => {
  const activeLabel = data.labels.filter((label) => label.trim() !== "");
  const activeDatasets = data.datasets
    .filter((dataset) => dataset.label.trim() !== "")
    .map((dataset) => {
      return {
        ...dataset,
        data: dataset.data.slice(0, activeLabel.length).map((val) => {
          return val === "" ? null : Number(val);
        }),
      };
    });

  return {
    labels: activeLabel,
    datasets: activeDatasets,
  };
};
