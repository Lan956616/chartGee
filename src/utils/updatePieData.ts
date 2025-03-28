import type { SamplePieChartData } from "./sampleChartData/pieChartDataType";
export const handlePieBgColorChange = (
  setPieData: (
    updateFunc: (prevData: SamplePieChartData) => SamplePieChartData
  ) => void,
  newColor: string,
  index: number
) => {
  setPieData((prevPieData) => {
    const newBgColors = [...prevPieData.datasets[0].backgroundColor];
    newBgColors[index] = newColor;
    return {
      ...prevPieData,
      datasets: [
        {
          ...prevPieData.datasets[0],
          backgroundColor: newBgColors,
        },
      ],
    };
  });
};

export const handlePieLabelChange = (
  setPieData: (
    updateFunc: (prevData: SamplePieChartData) => SamplePieChartData
  ) => void,
  newLabel: string,
  index: number
) => {
  setPieData((prevPieData) => {
    const newLabels = prevPieData.labels;
    newLabels[index] = newLabel;
    return {
      ...prevPieData,
      labels: newLabels,
    };
  });
};

export const handlePieDataChange = (
  setPieData: (
    updateFunc: (prevData: SamplePieChartData) => SamplePieChartData
  ) => void,
  newData: string | null,
  index: number
) => {
  setPieData((prevPieData) => {
    const newDatas = prevPieData.datasets[0].data;
    newDatas[index] = newData === "" ? "" : Number(newData);
    return {
      ...prevPieData,
      datasets: [{ ...prevPieData.datasets[0], data: newDatas }],
    };
  });
};
