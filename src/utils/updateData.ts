import type { SampleBarChartData } from "./sampleChartData/barChartDataType";
import type { SampleLineChartData } from "./sampleChartData/lineChartDataType";
export const handleLabelChange = (
  setData: (
    updateFunc: (
      prevData: SampleBarChartData | SampleLineChartData
    ) => SampleBarChartData | SampleLineChartData
  ) => void,
  newValue: string,
  index: number
) => {
  setData((prevData) => {
    return {
      ...prevData,
      labels: prevData.labels.map((eachLabel, i) => {
        return i === index ? newValue : eachLabel;
      }),
    };
  });
};
export const handleDatasetsLabelChange = (
  setData: (
    updateFunc: (prevData: SampleBarChartData) => SampleBarChartData
  ) => void,
  newValue: string,
  index: number
) => {
  setData((prevData) => {
    return {
      ...prevData,
      datasets: prevData.datasets.map((dataset, i) => {
        return i === index ? { ...dataset, label: newValue } : dataset;
      }),
    };
  });
};
export const handleBgColorChange = <
  T extends { datasets: { backgroundColor: string }[] }
>(
  setData: React.Dispatch<React.SetStateAction<T>>,
  newColor: string,
  index: number
) => {
  setData((prevData) => {
    return {
      ...prevData,
      datasets: prevData.datasets.map((dataset, i) => {
        return i === index
          ? { ...dataset, backgroundColor: newColor }
          : dataset;
      }),
    };
  });
};
export const handleBorderColorChange = (
  setLineData: (
    updateFunc: (prevData: SampleLineChartData) => SampleLineChartData
  ) => void,
  newColor: string,
  index: number
) => {
  setLineData((prev) => {
    return {
      ...prev,
      datasets: prev.datasets.map((dataset, i) => {
        return i === index
          ? {
              ...dataset,
              borderColor: newColor,
            }
          : dataset;
      }),
    };
  });
};
export const handleDatasetsChange = (
  setData: (
    updateFunc: (prevData: SampleBarChartData) => SampleBarChartData
  ) => void,
  newValue: string | null,
  index: number,
  eachDataIndex: number
) => {
  setData((prevData) => {
    return {
      ...prevData,
      datasets: prevData.datasets.map((dataset, i) => {
        return i === index
          ? {
              ...dataset,
              data: dataset.data.map((eachData, j) => {
                return j === eachDataIndex
                  ? newValue === ""
                    ? ""
                    : Number(newValue)
                  : eachData;
              }),
            }
          : dataset;
      }),
    };
  });
};
