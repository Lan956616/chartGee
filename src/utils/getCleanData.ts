import type { SampleBarChartData } from "./sampleChartData/barChartDataType";
import type { SampleLineChartData } from "./sampleChartData/lineChartDataType";

export const getCleanData = (
  data: SampleBarChartData | SampleLineChartData
) => {
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
