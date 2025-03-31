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
type DataTableHeaderProps = { chartType: "bar" | "line" };
const DataTableHeader: React.FC<DataTableHeaderProps> = ({ chartType }) => {
  const {
    data,
    setData,
    setOption,
    option,
    lineData,
    setLineData,
    lineOption,
    setLineOption,
  } = useContext(ChartDataContext) as unknown as ContextType;
  const Option = chartType === "bar" ? option : lineOption;
  const SetOption = chartType === "bar" ? setOption : setLineOption;
  const Data = chartType === "bar" ? data : lineData;
  const SetData = chartType === "bar" ? setData : setLineData;
  const { valueAxis, labelAxis } = getAxisInfo(Option.indexAxis);
  const currentDisplay = Option.scales[valueAxis].title.display;
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
              handleOptionChange(SetOption, "indexAxis", valueAxis);
              handleOptionChange(
                SetOption,
                `scales.${labelAxis}.title.display`,
                currentDisplay
              );
              handleOptionChange(
                SetOption,
                `scales.${valueAxis}.title.display`,
                false
              );
            }}
          />
        </th>
        <th className={styles.cell}></th>
        {Data.labels.map((label, index) => {
          const hasData = Data.datasets.some(
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
                  handleLabelChange(SetData, e.target.value, index);
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
