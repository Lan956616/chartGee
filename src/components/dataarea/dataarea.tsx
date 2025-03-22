"use client";
import styles from "./dataarea.module.css";
import Button from "../button/button";
import Image from "next/image";
import SettingTab from "../settingtab/settingtab";
import DataTab from "./datatab/datatab";
import { useState } from "react";
const DataArea: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"data" | "setting">("data");
  return (
    <section className={styles.dataArea}>
      <div className={styles.crossButton}>
        <Image src="/close.png" alt="close-icon" width={15} height={15} />
      </div>
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
