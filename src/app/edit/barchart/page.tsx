"use client";
import { useState } from "react";
import DisplayButtons from "@/components/displaybuttons/displaybuttons";
import DataArea from "@/components/barChart/dataarea/dataarea";
import styles from "./style.module.css";
import HeaderEditPage from "@/components/headereditpage/headereditpage";
import Sidebar from "@/components/sidebar/sidebar";
import ChartArea from "@/components/barChart/chartarea/chartarea";
import ChartDataProvider from "@/components/ChartDataProvider";

const BarChartEditPage: React.FC = () => {
  const [showData, setShowData] = useState(true);
  return (
    <div className={styles.pageContainer}>
      <HeaderEditPage />
      <main className={styles.main}>
        <ChartDataProvider>
          <DataArea hideOnMobile={!showData} />
          <ChartArea hideOnMobile={showData} />
        </ChartDataProvider>
      </main>
      <Sidebar />
      <DisplayButtons showData={showData} setShowData={setShowData} />
    </div>
  );
};

export default BarChartEditPage;
