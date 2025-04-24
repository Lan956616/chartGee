import cloneDeep from "lodash/cloneDeep";
import set from "lodash/set";
import type { StripDataType } from "./sampleChartData/projectDataType";
import type { SampleBarChartOptions } from "./sampleChartData/barChartDataType";
import { SamplePieChartOption } from "./sampleChartData/pieChartDataType";
import { SampleLineChartOption } from "./sampleChartData/lineChartDataType";
export const updateOption = (
  setCurrentData: React.Dispatch<React.SetStateAction<StripDataType | null>>,
  key: string,
  value: number | string | boolean
) => {
  setCurrentData((prev) => {
    if (!prev) return prev;
    const newOption = cloneDeep(prev?.option);
    set(newOption, key, value);
    switch (prev.chartType) {
      case "bar":
        return {
          ...prev,
          option: newOption as SampleBarChartOptions,
        };
      case "pie":
        return {
          ...prev,
          option: newOption as SamplePieChartOption,
        };
      case "line":
        return {
          ...prev,
          option: newOption as SampleLineChartOption,
        };
    }
  });
};
