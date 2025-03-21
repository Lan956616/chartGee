"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import Image from "next/image";
import styles from "./datatab.module.css";
import Button from "@/components/button/button";
import ColorBox from "./colorbox/colorbox";
import {
  handleDatasetsChange,
  handleDatasetsLabelChange,
  handleLabelChange,
  handleBgColorChange,
} from "@/utils/updateData";
import { handleOptionChange } from "@/utils/updateOptions";
import { handleInputKeyDown } from "@/utils/handleInputKeyDown";
const DataTab: React.FC = () => {
  const { data, setData, setOption, option } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  return (
    <div className={styles.dataTabContainer}>
      <div className={styles.tableContainer}>
        <table>
          <thead className={styles.thead}>
            <tr>
              <th>
                <Image
                  src="/sync.png"
                  alt="change-axis-icon"
                  width={30}
                  height={30}
                  className={styles.AxisIcon}
                />
                <Image
                  src="/bluesync.png"
                  alt="blue-change-axis-icon"
                  width={30}
                  height={30}
                  className={styles.blueAxisIcon}
                  onClick={() => {
                    handleOptionChange(
                      setOption,
                      "indexAxis",
                      option.indexAxis === "x" ? "y" : "x"
                    );
                  }}
                />
              </th>
              <th></th>
              {data.labels.map((label, index) => {
                const hasData = data.datasets.some(
                  (dataset) =>
                    dataset.data[index] !== "" && dataset.data[index] !== null
                );

                return (
                  <th
                    key={`category${index}`}
                    style={{
                      backgroundColor:
                        hasData && label === "" ? "#ff9c9c" : "white",
                    }}
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
          <tbody className={styles.tbody}>
            {data.datasets.map((dataset, index) => {
              const hasData = dataset.data.some(
                (value) => value !== "" && value !== null
              );
              return (
                <tr key={`tbody${index}`}>
                  <th>
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
                    style={{
                      backgroundColor:
                        hasData && dataset.label === "" ? "#ff9c9c" : "white",
                    }}
                  >
                    <input
                      type="text"
                      value={dataset.label}
                      placeholder={`Label${index + 1}`}
                      onChange={(e) => {
                        handleDatasetsLabelChange(
                          setData,
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
                  {dataset.data.map((eachData, eachDataindex) => {
                    return (
                      <td key={`each${eachDataindex}`} className={styles.zone}>
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
        </table>
      </div>
      <div className={styles.resetButtonArea}>
        <Button width={50} color="white" border="#ddd">
          Clear Data
        </Button>
        <Button width={50} color="white" border="#ddd">
          Reset Data
        </Button>
      </div>
    </div>
  );
};

export default DataTab;
