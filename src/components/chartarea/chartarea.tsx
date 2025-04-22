"use client";
import styles from "./chartarea.module.css";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import EditRenderChart from "./editRenderChart/editRenderChart";
import Spinner from "../loading/spinner/spinner";
import { Chart as ChartJS } from "chart.js";

type ChartAreaProps = {
  hideOnMobile: boolean;
  barRef: React.RefObject<ChartJS<"bar", number[], unknown> | null>;
  lineRef: React.RefObject<ChartJS<"line", number[], unknown> | null>;
  pieRef: React.RefObject<ChartJS<"pie", number[], unknown> | null>;
};
const ChartArea: React.FC<ChartAreaProps> = ({
  hideOnMobile,
  barRef,
  lineRef,
  pieRef,
}) => {
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
      <EditRenderChart
        {...currentData}
        barRef={barRef}
        pieRef={pieRef}
        lineRef={lineRef}
      />
    </section>
  );
};

export default ChartArea;
