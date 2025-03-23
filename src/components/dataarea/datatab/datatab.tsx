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
const DataTab: React.FC = () => {
  const { option, setOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className={styles.dataTabContainer}>
      <div className={styles.TitleInputContainer}>
        <input
          type="text"
          id="titleInput"
          value={option.plugins.title.text}
          onChange={(e) => {
            handleOptionChange(setOption, "plugins.title.text", e.target.value);
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
          <DataTableHeader />
          <DataTableBody />
        </table>
      </div>
      <TableControlButton />
    </div>
  );
};

export default DataTab;
