import type { SampleBarChartData } from "../sampleChartData/barChartDataType";
import type { SampleLineChartData } from "../sampleChartData/lineChartDataType";

export const getCleanData = (
  data: SampleBarChartData | SampleLineChartData
) => {
  const activeIndices = data.labels
    .map((label, index) => (label !== "" ? index : -1))
    .filter((index) => index !== -1);
  const cleanedLabels = activeIndices.map((i) => data.labels[i]);
  const cleanedDatasets = data.datasets
    .filter((dataset) => dataset.label.trim() !== "")
    .map((dataset) => {
      return {
        ...dataset,
        data: activeIndices.map((i) =>
          dataset.data[i] !== "" ? dataset.data[i] : null
        ),
      };
    });
  return {
    labels: cleanedLabels,
    datasets: cleanedDatasets,
  };
};
