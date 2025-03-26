import lodash, { set } from "lodash";
import type { SampleBarChartOptions } from "./sampleChartData/barChart";

export const handleOptionChange = (
  setOptions: (
    updateFn: (prev: SampleBarChartOptions) => SampleBarChartOptions
  ) => void,
  key: string,
  value: number | string | boolean
) => {
  setOptions((prevOptions) => {
    const newOptions = lodash.cloneDeep(prevOptions);
    set(newOptions, key, value);
    return newOptions;
  });
};
