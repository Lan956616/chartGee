import type { ProjectDataType } from "./sampleChartData/projectDataType";
export const stripProjectData = (data: ProjectDataType) => {
  const { isPublic, updatedAt, ...rest } = data;
  return rest;
};
