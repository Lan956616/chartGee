"use client";
import styles from "./dataarea.module.css";
import Button from "@/components/button/button";

import SettingTab from "@/components/settingtab/settingtab";
import DataTab from "./datatab/datatab";
import { useState } from "react";
type DataAreaProps = {
  hideOnMobile: boolean;
};
const DataArea: React.FC<DataAreaProps> = ({ hideOnMobile }) => {
  const [activeTab, setActiveTab] = useState<"data" | "setting">("data");
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
      {activeTab === "setting" && <SettingTab />}
    </section>
  );
};
export default DataArea;
