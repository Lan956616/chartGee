"use client";
import { createContext, useState } from "react";
import {
  SampleBarChartdata,
  SampleBarChartoptions,
} from "../utils/sampleChartData/barChart";
import type {
  SampleBarChartData,
  SampleBarChartOptions,
} from "../utils/sampleChartData/barChartDataType";
import type { Dispatch, SetStateAction } from "react";
import {
  samplePieChartData,
  samplePieChartOption,
} from "@/utils/sampleChartData/pieChart";
import type {
  SamplePieChartData,
  SamplePieChartOption,
} from "@/utils/sampleChartData/pieChartDataType";

export type ContextType = {
  data: SampleBarChartData;
  setData: Dispatch<SetStateAction<SampleBarChartData>>;
  option: SampleBarChartOptions;
  setOption: Dispatch<SetStateAction<SampleBarChartOptions>>;
  pieData: SamplePieChartData;
  setPieData: Dispatch<SetStateAction<SamplePieChartData>>;
  pieOption: SamplePieChartOption;
  setPieOption: Dispatch<SetStateAction<SamplePieChartOption>>;
  unit: string;
  setUnit: Dispatch<SetStateAction<string>>;
};
export const ChartDataContext = createContext<ContextType | undefined>(
  undefined
);

const ChartDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState(SampleBarChartdata);
  const [option, setOption] = useState(SampleBarChartoptions);
  const [pieData, setPieData] = useState(samplePieChartData);
  const [pieOption, setPieOption] = useState(samplePieChartOption);
  const [unit, setUnit] = useState("kg");
  return (
    <ChartDataContext.Provider
      value={{
        data,
        setData,
        option,
        setOption,
        pieData,
        setPieData,
        pieOption,
        setPieOption,
        unit,
        setUnit,
      }}
    >
      {children}
    </ChartDataContext.Provider>
  );
};

export default ChartDataProvider;
