import { StripDataType } from "./sampleChartData/projectDataType";
export const updatePieColorAtIndex = (
  setCurrentData: React.Dispatch<React.SetStateAction<StripDataType | null>>,
  newColor: string,
  index: number
) => {
  setCurrentData((prev) => {
    if (!prev) return prev;
    if (prev.chartType !== "pie") return prev;
    const newBgColors = [...prev.data.datasets[0].backgroundColor];
    newBgColors[index] = newColor;
    if (prev.chartType === "pie") {
      return {
        ...prev,
        data: {
          ...prev.data,
          datasets: [
            {
              ...prev.data.datasets[0],
              backgroundColor: newBgColors,
            },
          ],
        },
      };
    }
    return prev;
  });
};

export const updatePieLabelAtIndex = (
  setCurrentData: React.Dispatch<React.SetStateAction<StripDataType | null>>,
  newLabel: string,
  index: number
) => {
  setCurrentData((prev) => {
    if (!prev) return prev;
    if (prev.chartType !== "pie") return prev;
    if (prev.chartType === "pie") {
      const newLabels = prev.data.labels;
      newLabels[index] = newLabel;
      return {
        ...prev,
        data: {
          ...prev.data,
          labels: newLabels,
        },
      };
    }
    return prev;
  });
};

export const updatePieValueAtIndex = (
  setCurrentData: React.Dispatch<React.SetStateAction<StripDataType | null>>,
  newData: string | null,
  index: number
) => {
  setCurrentData((prev) => {
    if (!prev) return prev;
    if (prev.chartType !== "pie") return prev;
    if (prev.chartType === "pie") {
      const newDatas = prev.data.datasets[0].data;
      newDatas[index] = newData === "" ? "" : Number(newData);
      return {
        ...prev,
        data: {
          ...prev.data,
          datasets: [{ ...prev.data.datasets[0], data: newDatas }],
        },
      };
    }
    return prev;
  });
};
