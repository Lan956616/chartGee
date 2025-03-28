"use client";
import { useContext } from "react";
import type { ContextType } from "@/components/ChartDataProvider";
import { ChartDataContext } from "@/components/ChartDataProvider";
import styles from "./PieTableBody.module.css";
import ColorBox from "@/components/dataarea/datatab/colorbox/colorbox";
import {
  handlePieBgColorChange,
  handlePieLabelChange,
  handlePieDataChange,
} from "@/utils/updatePieData";
import { handleInputKeyDown } from "@/utils/handleInputKeyDown";

const PieTableBody: React.FC = () => {
  const { pieData, setPieData } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  return (
    <tbody className={styles.tbody}>
      {pieData.labels.map((label, index) => {
        const hasData = pieData.datasets[0].data[index] !== "";
        console.log(`index${index}hasdata${hasData}`);
        return (
          <tr key={`tbody${index}`} className={styles.tableRow}>
            <th className={styles.cell}>
              {(label !== "" || pieData.datasets[0].data[index] !== "") && (
                <ColorBox
                  color={pieData.datasets[0].backgroundColor[index]}
                  onChange={(newColor) => {
                    handlePieBgColorChange(setPieData, newColor, index);
                  }}
                />
              )}
            </th>
            <th
              className={`${styles.cell} ${
                label === "" && hasData && styles.invalidCell
              }`}
            >
              <input
                type="text"
                value={label}
                placeholder={`Label${index + 1}`}
                onChange={(e) => {
                  handlePieLabelChange(setPieData, e.target.value, index);
                }}
                onKeyDown={handleInputKeyDown}
                onFocus={(e) => {
                  e.currentTarget.select();
                }}
              />
            </th>
            <td className={styles.cell}>
              <input
                type="number"
                value={pieData.datasets[0].data[index]}
                placeholder="0"
                onChange={(e) => {
                  handlePieDataChange(setPieData, e.target.value, index);
                }}
                onKeyDown={handleInputKeyDown}
                onFocus={(e) => {
                  e.currentTarget.select();
                }}
              />
            </td>
            <td className={`${styles.cell} ${styles.fakeCell}`}></td>
            <td className={`${styles.cell} ${styles.fakeCell}`}></td>
            <td className={`${styles.cell} ${styles.fakeCell}`}></td>
            <td className={`${styles.cell} ${styles.fakeCell}`}></td>
            <td className={`${styles.cell} ${styles.fakeCell}`}></td>
            <td className={`${styles.cell} ${styles.fakeCell}`}></td>
            <td className={`${styles.cell} ${styles.fakeCell}`}></td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default PieTableBody;
