"use client";
import styles from "./dataarea.module.css";
import Button from "@/components/button/button";
import SettingTab from "../settingtab/settingtab";
import DataTab from "./datatab/datatab";
import PieSettingTab from "../pieChart/pieSettingTab/pieSettingTab.";
import LineSettingTab from "../lineChart/lineSettingTab/lineSettingTab";
import { useState, useContext } from "react";
import { ChartDataContext } from "../ChartDataProvider";
type DataAreaProps = {
  hideOnMobile: boolean;
};
const DataArea: React.FC<DataAreaProps> = ({ hideOnMobile }) => {
  const [activeTab, setActiveTab] = useState<"data" | "setting">("data");
  let SettingTabComponent = null;
  const context = useContext(ChartDataContext);
  if (!context?.currentData) {
    return;
  }
  const { chartType } = context.currentData;
  switch (chartType) {
    case "bar":
      SettingTabComponent = <SettingTab />;
      break;
    case "pie":
      SettingTabComponent = <PieSettingTab />;
      break;
    case "line":
      SettingTabComponent = <LineSettingTab />;
      break;
  }

  return (
    <section
      className={`${styles.dataArea} ${hideOnMobile && styles.hideOnMobile}`}
    >
      <nav
        className={`${styles.tabMenu} ${
          activeTab === "data" ? styles.left : styles.right
        }`}
      >
        <Button
          width={50}
          onClick={() => {
            setActiveTab("data");
          }}
          className={`${styles.btn} ${
            activeTab === "data" ? styles.activeBTN : ""
          }`}
        >
          Data
        </Button>
        <Button
          width={50}
          onClick={() => {
            setActiveTab("setting");
          }}
          className={`${styles.btn} ${
            activeTab === "setting" ? styles.activeBTN : ""
          }`}
        >
          Setting
        </Button>
      </nav>
      {activeTab === "data" && <DataTab />}
      {activeTab === "setting" && SettingTabComponent}
    </section>
  );
};
export default DataArea;
