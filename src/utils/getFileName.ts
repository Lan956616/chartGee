import type { StripDataType } from "./sampleChartData/projectDataType";
export const getFileName = (currentData: StripDataType) => {
  const safeChartTitle = currentData.option.plugins.title.text
    .replace(/[\\/:*?"<>|]/g, "")
    .replace(/\s+/g, "-");
  const now = new Date();
  const timeStamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(now.getDate()).padStart(2, "0")}-${String(
    now.getHours()
  ).padStart(2, "0")}-${String(now.getMinutes()).padStart(2, "0")}`;
  const fileName = `Chart-${safeChartTitle}-${timeStamp}.png`;
  return fileName;
};
