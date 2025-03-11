"use client";
import DataArea from "@/components/dataarea/dataarea";
import styles from "./style.module.css";
import HeaderEditPage from "@/components/headereditpage/headereditpage";
import Sidebar from "@/components/sidebar/sidebar";
import ChartArea from "@/components/chartarea/chartarea";
import { useState } from "react";
import {
  SampleBarChartdata,
  SampleBarChartoptions,
} from "../../../../sampleChartData";

const BarChartEditPage: React.FC = () => {
  const [data, setData] = useState(SampleBarChartdata);
  const [options, setOptions] = useState(SampleBarChartoptions);
  return (
    <div className={styles.pageContainer}>
      <HeaderEditPage />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <DataArea />
          <ChartArea data={data} options={options} />
        </div>

        <Sidebar />
      </main>
    </div>
  );
};

export default BarChartEditPage;
