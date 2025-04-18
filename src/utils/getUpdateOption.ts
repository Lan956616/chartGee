import { cloneDeep, set } from "lodash";
import type { ProjectDataType } from "./sampleChartData/projectDataType";

export const getUpdateOption = <T extends ProjectDataType>(
  currentData: T,
  key: string,
  value: string | number | boolean
): T["option"] => {
  const newOption = cloneDeep(currentData.option);
  set(newOption, key, value);
  return newOption;
};
