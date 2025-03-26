"use client";
import { useContext } from "react";
import type { ContextType } from "@/components/ChartDataProvider";
import { ChartDataContext } from "@/components/ChartDataProvider";
import styles from "./datatableheader.module.css";
import Image from "next/image";
import { handleOptionChange } from "@/utils/updateOptions";
import { handleLabelChange } from "@/utils/updateData";
import { handleInputKeyDown } from "@/utils/handleInputKeyDown";
import getAxisInfo from "@/utils/getAxisInfo";
const DataTableHeader: React.FC = () => {
  const { data, setData, setOption, option } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  const { valueAxis, labelAxis } = getAxisInfo(option.indexAxis);
  const currentDisplay = option.scales[valueAxis].title.display;
  return (
    <thead className={styles.thead}>
      <tr className={styles.tableRow}>
        <th className={styles.cell}>
          <Image
            src="/sync.png"
            alt="change-axis-icon"
            width={30}
            height={30}
            className={styles.axisIconBase}
          />
          <Image
            src="/bluesync.png"
            alt="blue-change-axis-icon"
            width={30}
            height={30}
            className={styles.axisIconHover}
            onClick={() => {
              handleOptionChange(setOption, "indexAxis", valueAxis);
              handleOptionChange(
                setOption,
                `scales.${labelAxis}.title.display`,
                currentDisplay
              );
              handleOptionChange(
                setOption,
                `scales.${valueAxis}.title.display`,
                false
              );
            }}
          />
        </th>
        <th className={styles.cell}></th>
        {data.labels.map((label, index) => {
          const hasData = data.datasets.some(
            (dataset) =>
              dataset.data[index] !== "" && dataset.data[index] !== null
          );

          return (
            <th
              key={`category${index}`}
              className={`${styles.cell} ${
                hasData && label === "" ? styles.invalidCell : ""
              }`}
            >
              <input
                type="text"
                value={label}
                placeholder={`Cate${index + 1}`}
                onChange={(e) => {
                  handleLabelChange(setData, e.target.value, index);
                }}
                onKeyDown={handleInputKeyDown}
                onFocus={(e) => {
                  e.currentTarget.select();
                }}
              />
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default DataTableHeader;
