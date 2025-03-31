"use client";
import { useContext } from "react";
import type { ContextType } from "@/components/ChartDataProvider";
import { ChartDataContext } from "@/components/ChartDataProvider";
import styles from "./datatablebody.module.css";
import ColorBox from "../colorbox/colorbox";
import {
  handleBgColorChange,
  handleDatasetsLabelChange,
  handleDatasetsChange,
  handleBorderColorChange,
} from "@/utils/updateData";
import { handleInputKeyDown } from "@/utils/handleInputKeyDown";
import { SampleLineChartData } from "@/utils/sampleChartData/lineChartDataType";
type DataTableBodyProps = { chartType: "bar" | "line" };
const DataTableBody: React.FC<DataTableBodyProps> = ({ chartType }) => {
  const { data, setData, lineData, setLineData } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  const Data = chartType === "bar" ? data : lineData;
  const SetData = chartType === "bar" ? setData : setLineData;
  return (
    <tbody className={styles.tbody}>
      {Data.datasets.map((dataset, index) => {
        const hasData = dataset.data.some(
          (value) => value !== "" && value !== null
        );
        return (
          <tr key={`tbody${index}`} className={styles.tableRow}>
            <th className={styles.cell}>
              {dataset.label !== "" && (
                <ColorBox
                  color={dataset.backgroundColor}
                  onChange={(newColor) => {
                    if (chartType === "line") {
                      handleBgColorChange<SampleLineChartData>(
                        setLineData,
                        newColor,
                        index
                      );
                      handleBorderColorChange(setLineData, newColor, index);
                    }
                  }}
                />
              )}
            </th>
            <th
              className={`${styles.cell} ${
                hasData && dataset.label === "" ? styles.invalidCell : ""
              }`}
            >
              <input
                type="text"
                value={dataset.label}
                placeholder={`Label${index + 1}`}
                onChange={(e) => {
                  handleDatasetsLabelChange(SetData, e.target.value, index);
                }}
                onKeyDown={handleInputKeyDown}
                onFocus={(e) => {
                  e.currentTarget.select();
                }}
              />
            </th>
            {dataset.data.map((eachData, eachDataindex) => {
              return (
                <td key={`each${eachDataindex}`} className={styles.cell}>
                  <input
                    type="number"
                    value={eachData}
                    placeholder="0"
                    onChange={(e) => {
                      handleDatasetsChange(
                        SetData,
                        e.target.value,
                        index,
                        eachDataindex
                      );
                    }}
                    onKeyDown={handleInputKeyDown}
                    onFocus={(e) => {
                      e.currentTarget.select();
                    }}
                  />
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default DataTableBody;
