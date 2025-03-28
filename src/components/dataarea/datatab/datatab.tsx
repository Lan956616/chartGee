"use client";
import { useContext } from "react";
import type { ContextType } from "@/components/ChartDataProvider";
import { ChartDataContext } from "@/components/ChartDataProvider";
import { handleOptionChange } from "@/utils/updateOptions";
import styles from "./datatab.module.css";
import DataTableHeader from "./datatableheader/datatableheader";
import DataTableBody from "./datatablebody/datatablebody";
import TableControlButton from "./tablecontrolbutton/tablecontrolbutton";
const DataTab: React.FC = () => {
  const { option, setOption } = useContext(
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
      <TableControlButton />
    </div>
  );
};

export default DataTab;
