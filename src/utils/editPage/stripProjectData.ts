import type { ProjectDataType } from "../sampleChartData/projectDataType";
import type { StripDataType } from "../sampleChartData/projectDataType";
export const stripProjectData = (data: ProjectDataType): StripDataType => {
  switch (data.chartType) {
    case "bar":
      return {
        chartType: data.chartType,
        data: data.data,
        option: data.option,
        createdAt: data.createdAt,
      };
    case "line":
      return {
        chartType: data.chartType,
        data: data.data,
        option: data.option,
        createdAt: data.createdAt,
      };
    case "pie":
      return {
        chartType: data.chartType,
        data: data.data,
        option: data.option,
        createdAt: data.createdAt,
      };
  }
};
