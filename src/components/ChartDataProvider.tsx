"use client";
import { createContext, useState } from "react";
import {
  SampleBarChartdata,
  SampleBarChartoptions,
} from "../../sampleBarChartData";
import { Dispatch, SetStateAction } from "react";
import type {
  SampleBarChartData,
  SampleBarChartOptions,
} from "../../sampleBarChartData";
export type ContextType = {
  data: SampleBarChartData;
  setData: Dispatch<SetStateAction<SampleBarChartData>>;
  option: SampleBarChartOptions;
  setOption: Dispatch<SetStateAction<SampleBarChartOptions>>;
};
export const ChartDataContext = createContext<ContextType | undefined>(
  undefined
);

const ChartDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState(SampleBarChartdata);
  const [option, setOption] = useState(SampleBarChartoptions);

  return (
    <ChartDataContext.Provider value={{ data, setData, option, setOption }}>
      {children}
    </ChartDataContext.Provider>
  );
};

export default ChartDataProvider;
