"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import styles from "./dataTableHeader.module.css";
import Image from "next/image";
import { handleInputKeyDown } from "@/utils/editPage/handleInputKeyDown";
import getAxisInfo from "@/utils/editPage/getAxisInfo";
import { updateMultipleOptions } from "@/utils/editPage/updateMutipleOptions";
import { updateLabelAtIndex } from "@/utils/editPage/updateData";
const DataTableHeader: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context?.currentData) return;
  const { setCurrentData } = context;
  const { chartType, data, option } = context.currentData;
  if (chartType === "pie") return;

  return (
    <thead className={styles.thead}>
      <tr className={styles.tableRow}>
        <th className={styles.cell}>
          <div className={styles.imageWrapper}>
            <Image
              src="/icons/sync.png"
              alt="change-axis-icon"
              className={styles.axisIconBase}
              fill
            />
            <Image
              src="/icons/bluesync.png"
              alt="blue-change-axis-icon"
              className={styles.axisIconHover}
              fill
              onClick={() => {
                const { valueAxis, labelAxis } = getAxisInfo(option.indexAxis);
                const currentDisplay = option.scales[valueAxis].title.display;
                updateMultipleOptions(setCurrentData, [
                  ["indexAxis", valueAxis],
                  [`scales[${valueAxis}].title.display`, false],
                  [`scales[${labelAxis}].title.display`, currentDisplay],
                ]);
              }}
            />
          </div>
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
                hasData && label === "" && styles.invalidCell
              }`}
            >
              <input
                type="text"
                value={label}
                placeholder={`Cate${index + 1}`}
                onChange={(e) => {
                  updateLabelAtIndex(setCurrentData, e.target.value, index);
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
