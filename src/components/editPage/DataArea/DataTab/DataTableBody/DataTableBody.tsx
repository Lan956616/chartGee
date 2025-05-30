"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import styles from "./dataTableBody.module.css";
import ColorBox from "../ColorBox/ColorBox";
import { handleInputKeyDown } from "@/utils/editPage/handleInputKeyDown";
import {
  updateDatasetColorAtIndex,
  updateDatasetLabelAtIndex,
  updateDatasetValueAtIndex,
} from "@/utils/editPage/updateData";

const DataTableBody: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context?.currentData) return;
  const { setCurrentData } = context;
  const { data, chartType } = context.currentData;
  if (chartType === "pie") return;

  return (
    <tbody className={styles.tbody}>
      {data.datasets.map((dataset, index) => {
        const hasData = dataset.data.some((value) => value !== "");
        return (
          <tr key={`tbody${index}`} className={styles.tableRow}>
            <th className={styles.cell}>
              {dataset.label !== "" && (
                <ColorBox
                  color={dataset.backgroundColor}
                  onChange={(newColor) => {
                    updateDatasetColorAtIndex(setCurrentData, newColor, index);
                  }}
                />
              )}
            </th>
            <th
              className={`${styles.cell} ${
                hasData && dataset.label === "" && styles.invalidCell
              }`}
            >
              <input
                type="text"
                value={dataset.label}
                placeholder={`Label${index + 1}`}
                onChange={(e) => {
                  updateDatasetLabelAtIndex(
                    setCurrentData,
                    e.target.value,
                    index
                  );
                }}
                onKeyDown={handleInputKeyDown}
                onFocus={(e) => {
                  e.currentTarget.select();
                }}
              />
            </th>
            {dataset.data.map((eachData, eachDataIndex) => {
              return (
                <td key={`each${eachDataIndex}`} className={styles.cell}>
                  <input
                    type="number"
                    value={eachData}
                    placeholder="0"
                    onChange={(e) => {
                      updateDatasetValueAtIndex(
                        setCurrentData,
                        e.target.value,
                        index,
                        eachDataIndex
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
