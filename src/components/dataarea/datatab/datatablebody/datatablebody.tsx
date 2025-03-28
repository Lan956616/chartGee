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
} from "@/utils/updateData";
import { handleInputKeyDown } from "@/utils/handleInputKeyDown";

const DataTableBody: React.FC = () => {
  const { data, setData } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  return (
    <tbody className={styles.tbody}>
      {data.datasets.map((dataset, index) => {
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
                    handleBgColorChange(setData, newColor, index);
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
                  handleDatasetsLabelChange(setData, e.target.value, index);
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
                        setData,
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
