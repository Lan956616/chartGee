import type { SamplePieChartData } from "../sampleChartData/pieChartDataType";

export const getCleanPieData = (
  data: SamplePieChartData
): SamplePieChartData => {
  const activeLabel: string[] = [];
  const activeData: (number | "")[] = [];
  const activeBackgroundColor: string[] = [];

  data.labels.forEach((label, index) => {
    if (label !== "") {
      activeLabel.push(label);
      activeData.push(
        data.datasets[0].data[index] === ""
          ? ""
          : Number(data.datasets[0].data[index])
      );
      activeBackgroundColor.push(data.datasets[0].backgroundColor[index]);
    }
  });

  return {
    labels: activeLabel,
    datasets: [
      {
        ...data.datasets[0],
        data: activeData,
        backgroundColor: activeBackgroundColor,
      },
    ],
  };
};
