"use client";
import styles from "./dataarea.module.css";
import Button from "../button/button";
import Image from "next/image";
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
          color="white"
          onClick={() => {
            setActiveTab("data");
          }}
        >
          Data
        </Button>
        <Button
          width={50}
          color="white"
          onClick={() => {
            setActiveTab("setting");
          }}
        >
          Setting
        </Button>
      </nav>
      <div className={styles.resetButtonArea}>
        <Button width={50} color="white" border="#ddd">
          Clear Data
        </Button>
        <Button width={50} color="white" border="#ddd">
          Reset Data
        </Button>
      </div>
    </section>
  );
};
export default DataArea;
