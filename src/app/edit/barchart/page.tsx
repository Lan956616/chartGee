"use client";
import DataArea from "@/components/dataarea/dataarea";
import styles from "./style.module.css";
import HeaderEditPage from "@/components/headereditpage/headereditpage";
import Sidebar from "@/components/sidebar/sidebar";
import ChartArea from "@/components/chartarea/chartarea";
import { useState, createContext } from "react";
import {
  SampleBarChartdata,
  SampleBarChartoptions,
} from "../../../../sampleChartData";
export const ChartDataContext = createContext<any>(undefined);
const BarChartEditPage: React.FC = () => {
  const [data, setData] = useState(SampleBarChartdata);
  const [options, setOptions] = useState(SampleBarChartoptions);

  return (
    <div className={styles.pageContainer}>
      <HeaderEditPage />
      <main className={styles.main}>
        <ChartDataContext.Provider
          value={{ data, setData, options, setOptions }}
        >
          <DataArea />
          <ChartArea data={data} options={options} />
        </ChartDataContext.Provider>
      </main>
      <Sidebar />
    </div>
  );
};

export default BarChartEditPage;
