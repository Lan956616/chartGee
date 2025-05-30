"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import styles from "./pieTableBody.module.css";
import ColorBox from "@/components/editPage/DataArea/DataTab/ColorBox/ColorBox";
import { handleInputKeyDown } from "@/utils/editPage/handleInputKeyDown";
import {
  updatePieColorAtIndex,
  updatePieLabelAtIndex,
  updatePieValueAtIndex,
} from "@/utils/editPage/updatePieData";

const PieTableBody: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context?.currentData) return;
  const { setCurrentData } = context;
  const { data } = context.currentData;
  return (
    <tbody className={styles.tbody}>
      {data.labels.map((label, index) => {
        const hasData = data.datasets[0].data[index] !== "";
        return (
          <tr key={`tbody${index}`} className={styles.tableRow}>
            <th className={styles.cell}>
              {(label !== "" || hasData) && (
                <ColorBox
                  color={data.datasets[0].backgroundColor[index]}
                  onChange={(newColor) => {
                    updatePieColorAtIndex(setCurrentData, newColor, index);
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
                  updatePieLabelAtIndex(setCurrentData, e.target.value, index);
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
                value={data.datasets[0].data[index]}
                placeholder="0"
                onChange={(e) => {
                  updatePieValueAtIndex(setCurrentData, e.target.value, index);
                }}
                onKeyDown={handleInputKeyDown}
                onFocus={(e) => {
                  e.currentTarget.select();
                }}
              />
            </td>
            {Array.from({ length: 7 }).map((_, i) => (
              <td
                key={`fakeCell${i}`}
                className={`${styles.cell} ${styles.fakeCell}`}
              ></td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default PieTableBody;
