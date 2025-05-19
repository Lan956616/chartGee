import { cloneDeep, set } from "lodash";
import type { StripDataType } from "../sampleChartData/projectDataType";

export const getUpdateOption = <T extends StripDataType>(
  currentData: T,
  key: string,
  value: string | number | boolean
): T["option"] => {
  const newOption = cloneDeep(currentData.option);
  set(newOption, key, value);
  return newOption;
};
