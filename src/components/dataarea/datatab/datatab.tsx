"use client";
import Image from "next/image";
import { useContext, useRef } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import styles from "./datatab.module.css";
import DataTableHeader from "./datatableheader/datatableheader";
import DataTableBody from "./datatablebody/datatablebody";
import TableControlButton from "./tablecontrolbutton/tablecontrolbutton";
import PieTableBody from "@/components/pieChart/PieTableBody/PieTableBody";
import { updateOption } from "@/utils/editPage/updateOptions";
import { handleInputKeyDown } from "@/utils/editPage/handleInputKeyDown";
const DataTab: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const context = useContext(ChartDataContext);
  if (!context?.currentData) return;
  const { setCurrentData } = context;
  const { chartType, option } = context.currentData;
  const isPieChart = chartType === "pie";
  const TableHeaderComponent = isPieChart ? null : <DataTableHeader />;
  const TableBodyComponent = isPieChart ? <PieTableBody /> : <DataTableBody />;
  return (
    <div className={styles.dataTabContainer}>
      <div className={styles.TitleInputContainer}>
        <input
          type="text"
          id="titleInput"
          value={option.plugins.title.text}
          onChange={(e) => {
            updateOption(setCurrentData, "plugins.title.text", e.target.value);
          }}
          placeholder="Add a title"
          ref={inputRef}
          onKeyDown={handleInputKeyDown}
        />

        <Image
          src="/pencil.png"
          alt="edit-icon"
          width={20}
          height={20}
          className={styles.editIcon}
          onClick={() => {
            if (inputRef.current) inputRef.current.select();
          }}
        />
      </div>
      <div className={styles.tableContainer}>
        <table>
          {TableHeaderComponent}
          {TableBodyComponent}
        </table>
      </div>
      <TableControlButton />
    </div>
  );
};

export default DataTab;
