const getAxisInfo = (
  indexAxis: "x" | "y"
): {
  isHorizontal: boolean;
  valueAxis: "x" | "y";
  labelAxis: "x" | "y";
} => {
  const isHorizontal = indexAxis === "y";
  const valueAxis = isHorizontal ? "x" : "y";
  const labelAxis = isHorizontal ? "y" : "x";
  return { isHorizontal, valueAxis, labelAxis };
};
export default getAxisInfo;
