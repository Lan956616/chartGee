import { cloneDeep, set } from "lodash";
import type { ProjectDataType } from "./sampleChartData/projectDataType";
import { SampleBarChartOptions } from "./sampleChartData/barChartDataType";
import { SampleLineChartOption } from "./sampleChartData/lineChartDataType";
import { SamplePieChartOption } from "./sampleChartData/pieChartDataType";
export const updateMultipleOptions = (
  setCurrentData: React.Dispatch<React.SetStateAction<ProjectDataType | null>>,
  updates: [string, string | number | boolean][]
) => {
  setCurrentData((prev) => {
    if (!prev) return prev;
    const newOption = cloneDeep(prev.option);
    for (const [key, value] of updates) {
      set(newOption, key, value);
    }
    if (prev.chartType === "bar") {
      return {
        ...prev,
        option: newOption as SampleBarChartOptions,
      };
    } else if (prev.chartType === "line") {
      return {
        ...prev,
        option: newOption as SampleLineChartOption,
      };
    } else if (prev.chartType === "pie") {
      return {
        ...prev,
        option: newOption as SamplePieChartOption,
      };
    } else {
      return prev;
    }
  });
};
