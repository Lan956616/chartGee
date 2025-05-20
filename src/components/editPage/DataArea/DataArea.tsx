"use client";
import styles from "./dataArea.module.css";
import Button from "@/components/common/Button/Button";
import SettingTab from "./SettingTab/SettingTab";
import DataTab from "./DataTab/DataTab";
import PieSettingTab from "./SettingTab/PieSettingTab/PieSettingTab";
import LineSettingTab from "./SettingTab/LineSettingTab/LineSettingTab";
import { useState, useContext } from "react";
import { ChartDataContext } from "../../ChartDataProvider";
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
            activeTab === "data" && styles.activeBTN
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
            activeTab === "setting" && styles.activeBTN
          }`}
        >
          Setting
        </Button>
      </nav>
      <div className={styles.tabContent}>
        {activeTab === "data" && <DataTab />}
        {activeTab === "setting" && (
          <div className={styles.settingTabContainer}>
            {SettingTabComponent}
          </div>
        )}
      </div>
    </section>
  );
};
export default DataArea;
