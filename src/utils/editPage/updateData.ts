import { StripDataType } from "../sampleChartData/projectDataType";
export const updateLabelAtIndex = (
  setCurrentData: React.Dispatch<React.SetStateAction<StripDataType | null>>,
  newValue: string,
  index: number
) => {
  setCurrentData((prev) => {
    if (!prev) return prev;
    switch (prev.chartType) {
      case "bar":
        return {
          ...prev,
          data: {
            ...prev.data,
            labels: prev.data.labels.map((eachLabel, i) =>
              i === index ? newValue : eachLabel
            ),
          },
        };
      case "line":
        return {
          ...prev,
          data: {
            ...prev.data,
            labels: prev.data.labels.map((eachLabel, i) =>
              i === index ? newValue : eachLabel
            ),
          },
        };
      case "pie":
      default:
        return prev;
    }
  });
};
export const updateDatasetLabelAtIndex = (
  setCurrentData: React.Dispatch<React.SetStateAction<StripDataType | null>>,
  newValue: string,
  index: number
) => {
  setCurrentData((prev) => {
    if (!prev) return prev;
    if (prev.chartType === "pie") return prev;
    if (prev.chartType === "bar")
      return {
        ...prev,
        data: {
          ...prev.data,
          datasets: prev.data.datasets.map((dataset, i) => {
            return i === index ? { ...dataset, label: newValue } : dataset;
          }),
        },
      };
    if (prev.chartType === "line")
      return {
        ...prev,
        data: {
          ...prev.data,
          datasets: prev.data.datasets.map((dataset, i) => {
            return i === index ? { ...dataset, label: newValue } : dataset;
          }),
        },
      };
    return prev;
  });
};
export const updateDatasetColorAtIndex = (
  setCurrentData: React.Dispatch<React.SetStateAction<StripDataType | null>>,
  newColor: string,
  index: number
) => {
  setCurrentData((prev) => {
    if (!prev) return prev;
    if (prev.chartType === "pie") return prev;
    if (prev.chartType === "bar") {
      return {
        ...prev,
        data: {
          ...prev.data,
          datasets: prev.data.datasets.map((dataset, i) => {
            return i === index
              ? { ...dataset, backgroundColor: newColor }
              : dataset;
          }),
        },
      };
    }
    if (prev.chartType === "line") {
      return {
        ...prev,
        data: {
          ...prev.data,
          datasets: prev.data.datasets.map((dataset, i) => {
            return i === index
              ? { ...dataset, backgroundColor: newColor, borderColor: newColor }
              : dataset;
          }),
        },
      };
    }
    return prev;
  });
};

export const updateDatasetValueAtIndex = (
  setCurrentData: React.Dispatch<React.SetStateAction<StripDataType | null>>,
  newValue: string | null,
  index: number,
  eachDataIndex: number
) => {
  setCurrentData((prev) => {
    if (!prev) return prev;
    if (prev.chartType === "pie") return prev;
    if (prev.chartType === "bar")
      return {
        ...prev,
        data: {
          ...prev.data,
          datasets: prev.data.datasets.map((dataset, i) => {
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
        },
      };
    if (prev.chartType === "line")
      return {
        ...prev,
        data: {
          ...prev.data,
          datasets: prev.data.datasets.map((dataset, i) => {
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
        },
      };
    return prev;
  });
};
