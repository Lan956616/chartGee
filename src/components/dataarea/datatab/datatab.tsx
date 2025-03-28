"use client";
import Image from "next/image";
import { useContext, useRef } from "react";
import type { ContextType } from "@/components/ChartDataProvider";
import { ChartDataContext } from "@/components/ChartDataProvider";
import { handleOptionChange } from "@/utils/updateOptions";
import styles from "./datatab.module.css";
import DataTableHeader from "./datatableheader/datatableheader";
import DataTableBody from "./datatablebody/datatablebody";
import TableControlButton from "./tablecontrolbutton/tablecontrolbutton";

import PieTableBody from "@/components/pieChart/PieTableBody/PieTableBody";
type DataTabProps = { chartType: "bar" | "pie" | "line" };
const DataTab: React.FC<DataTabProps> = ({ chartType }) => {
  const { option, setOption, pieOption, setPieOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  const OptionName = chartType === "bar" ? option : pieOption;
  const setOptionName = chartType === "bar" ? setOption : setPieOption;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const TableHeaderComponent = chartType === "bar" ? <DataTableHeader /> : null;
  const TableBodyComponent =
    chartType === "bar" ? <DataTableBody /> : <PieTableBody />;
  return (
    <div className={styles.dataTabContainer}>
      <div className={styles.TitleInputContainer}>
        <input
          type="text"
          id="titleInput"
          value={OptionName.plugins.title.text}
          onChange={(e) => {
            handleOptionChange(
              setOptionName,
              "plugins.title.text",
              e.target.value
            );
          }}
          placeholder="Add a title"
          ref={inputRef}
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
      <TableControlButton chartType={chartType} />
    </div>
  );
};

export default DataTab;
