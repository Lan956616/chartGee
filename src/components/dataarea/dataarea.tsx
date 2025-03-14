"use client";
import styles from "./dataarea.module.css";
import Button from "../button/button";
import Image from "next/image";
import SettingTab from "../settingtab/settingtab";
import { useState } from "react";
const DataArea: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"data" | "setting">("setting");
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
          color="white"
          onClick={() => {
            setActiveTab("data");
          }}
          className={`${activeTab === "data" ? styles.activeBTN : ""}`}
        >
          Data
        </Button>
        <Button
          width={50}
          color="white"
          onClick={() => {
            setActiveTab("setting");
          }}
          className={activeTab === "setting" ? styles.activeBTN : ""}
        >
          Setting
        </Button>
      </nav>
      {activeTab === "setting" && <SettingTab />}
      {/* <div className={styles.resetButtonArea}>
        <Button width={50} color="white" border="#ddd">
          Clear Data
        </Button>
        <Button width={50} color="white" border="#ddd">
          Reset Data
        </Button>
      </div> */}
    </section>
  );
};
export default DataArea;
