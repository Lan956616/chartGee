"use client";
import DataArea from "@/components/dataarea/dataarea";

import styles from "./style.module.css";
import HeaderEditPage from "@/components/headereditpage/headereditpage";
import Sidebar from "@/components/sidebar/sidebar";
import ChartArea from "@/components/chartarea/chartarea";
import ChartDataProvider from "@/components/ChartDataProvider";

const BarChartEditPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <HeaderEditPage />
      <main className={styles.main}>
        <ChartDataProvider>
          <DataArea />
          <ChartArea />
        </ChartDataProvider>
      </main>
      <Sidebar />
    </div>
  );
};

export default BarChartEditPage;
