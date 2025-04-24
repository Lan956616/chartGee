import type { ProjectDataType } from "./sampleChartData/projectDataType";
import type { StripDataType } from "./sampleChartData/projectDataType";
export const stripProjectData = (data: ProjectDataType): StripDataType => {
  const { isPublic, updatedAt, imageURL, ...rest } = data;
  return rest;
};
