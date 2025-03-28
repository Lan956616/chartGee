"use client";
import styles from "./dataarea.module.css";
import Button from "@/components/button/button";
import SettingTab from "../settingtab/settingtab";
import DataTab from "./datatab/datatab";
import PieSettingTab from "../pieChart/pieSettingTab/pieSettingTab.";
import { useState } from "react";
type DataAreaProps = {
  chartType: "bar" | "pie" | "line";
  hideOnMobile: boolean;
};
const DataArea: React.FC<DataAreaProps> = ({ chartType, hideOnMobile }) => {
  const [activeTab, setActiveTab] = useState<"data" | "setting">("data");
  let DataTabComponent = null;
  let SettingTabComponent = null;
  if (chartType === "bar") {
    DataTabComponent = <DataTab chartType={chartType} />;
    SettingTabComponent = <SettingTab />;
  }
  if (chartType === "pie") {
    DataTabComponent = <DataTab chartType={chartType} />;
    SettingTabComponent = <PieSettingTab />;
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
      {activeTab === "data" && DataTabComponent}
      {activeTab === "setting" && SettingTabComponent}
    </section>
  );
};
export default DataArea;
