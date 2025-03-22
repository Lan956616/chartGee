"use client";
import { useContext } from "react";
import type { ContextType } from "@/components/ChartDataProvider";
import { ChartDataContext } from "@/components/ChartDataProvider";
import {
  SampleBarChartdata,
  blankBarChartData,
} from "../../../../sampleChartData";
import { handleOptionChange } from "@/utils/updateOptions";
import styles from "./datatab.module.css";
import DataTableHeader from "./datatableheader/datatableheader";
import DataTableBody from "./datatablebody/datatablebody";
import Button from "@/components/button/button";
const DataTab: React.FC = () => {
  const { setData, option, setOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  return (
    <div className={styles.dataTabContainer}>
      <div className={styles.chartTitleContainer}>
        <input
          type="text"
          value={option.plugins.title.text}
          onChange={(e) => {
            handleOptionChange(setOption, "plugins.title.text", e.target.value);
          }}
          placeholder="Add a title"
        />
      </div>
      <div className={styles.tableContainer}>
        <table>
          <DataTableHeader />
          <DataTableBody />
        </table>
      </div>
      <div className={styles.tableControlButton}>
        <Button
          width={50}
          color="#DE3C4B"
          bgColor="white"
          border="#DE3C4B"
          onClick={() => {
            setData(blankBarChartData);
          }}
        >
          Clear Data
        </Button>
        <Button
          width={50}
          color="#DE3C4B"
          bgColor="white"
          border="#DE3C4B"
          onClick={() => {
            setData(SampleBarChartdata);
          }}
        >
          Reset Data
        </Button>
      </div>
    </div>
  );
};

export default DataTab;
