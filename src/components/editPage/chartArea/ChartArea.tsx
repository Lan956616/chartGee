"use client";
import styles from "./chartArea.module.css";
import { useContext, MutableRefObject } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import EditRenderChart from "./editRenderChart/EditRenderChart";
import Spinner from "@/components/common/loading/spinner/Spinner";
import { Chart as ChartJS } from "chart.js";
import DownloadButton from "./downloadButton/DownloadButton";
type ChartAreaProps = {
  hideOnMobile: boolean;
  barRef: MutableRefObject<ChartJS<"bar", unknown, unknown> | null>;
  lineRef: MutableRefObject<ChartJS<"line", unknown, unknown> | null>;
  pieRef: MutableRefObject<ChartJS<"pie", unknown, unknown> | null>;
  handleDownload: () => Promise<void>;
  isDownload: boolean;
};
const ChartArea: React.FC<ChartAreaProps> = ({
  hideOnMobile,
  barRef,
  pieRef,
  lineRef,
  handleDownload,
  isDownload,
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
      <div
        className={`${styles.chartWrapper} ${
          currentData.option.aspectRatio === 1
            ? styles.square
            : styles.rectangle
        }`}
      >
        <EditRenderChart
          {...currentData}
          barRef={barRef}
          pieRef={pieRef}
          lineRef={lineRef}
        />
      </div>
      <DownloadButton handleDownload={handleDownload} isDownload={isDownload} />
    </section>
  );
};

export default ChartArea;
