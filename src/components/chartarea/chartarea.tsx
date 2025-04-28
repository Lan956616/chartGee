"use client";
import styles from "./chartarea.module.css";
import { useContext, MutableRefObject } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import EditRenderChart from "./editRenderChart/editRenderChart";
import Spinner from "../loading/spinner/spinner";
import { Chart as ChartJS } from "chart.js";

type ChartAreaProps = {
  hideOnMobile: boolean;
  barRef: MutableRefObject<ChartJS<"bar", unknown, unknown> | null>;
  lineRef: MutableRefObject<ChartJS<"line", unknown, unknown> | null>;
  pieRef: MutableRefObject<ChartJS<"pie", unknown, unknown> | null>;
  onReady?: () => void;
};
const ChartArea: React.FC<ChartAreaProps> = ({
  hideOnMobile,
  barRef,
  lineRef,
  pieRef,
  onReady,
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
        onReady={onReady}
      />
    </section>
  );
};

export default ChartArea;
