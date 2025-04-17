"use client";
import styles from "./chartarea.module.css";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import EditRenderChart from "./editRenderChart/editRenderChart";
import Spinner from "../loading/spinner/spinner";

type ChartAreaProps = {
  hideOnMobile: boolean;
};
const ChartArea: React.FC<ChartAreaProps> = ({ hideOnMobile }) => {
  const context = useContext(ChartDataContext);
  const currentData = context?.currentData;
  if (!currentData) {
    return (
      <section
        className={`${styles.chartarea} ${hideOnMobile && styles.hideOnMobile}`}
      >
        <Spinner />
      </section>
    );
  }
  return (
    <section
      className={`${styles.chartarea} ${hideOnMobile && styles.hideOnMobile}`}
    >
      <EditRenderChart {...currentData} />
    </section>
  );
};

export default ChartArea;
