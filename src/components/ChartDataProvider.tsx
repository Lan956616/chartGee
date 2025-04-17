"use client";
import { createContext } from "react";
import { ProjectDataType } from "@/utils/sampleChartData/projectDataType";
import { Dispatch } from "react";
import type { SetStateAction } from "react";

type ChartDataContextType = {
  currentData: ProjectDataType | null;
  setCurrentData: Dispatch<SetStateAction<ProjectDataType | null>>;
};
export const ChartDataContext = createContext<ChartDataContextType | null>(
  null
);
type ChartDataProviderProps = {
  children: React.ReactNode;
  value: ChartDataContextType;
};
const ChartDataProvider: React.FC<ChartDataProviderProps> = ({
  children,
  value,
}) => {
  return (
    <ChartDataContext.Provider value={value}>
      {children}
    </ChartDataContext.Provider>
  );
};

export default ChartDataProvider;
