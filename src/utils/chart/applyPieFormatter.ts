import type { SamplePieChartOption } from "../sampleChartData/pieChartDataType";
export const applyPieFormatter = (
  option: SamplePieChartOption
): SamplePieChartOption => {
  return {
    ...option,
    plugins: {
      ...option.plugins,
      datalabels: {
        ...option.plugins.datalabels,
        formatter: (value: number | "") => {
          if (value === "") return "";
          const unit = option.plugins?.datalabels?.unit || "";
          return `${value}${unit}`;
        },
      },
    },
  };
};
