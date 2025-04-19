"use client";
import AppearancePanel from "../appearancepanel";
import BarPanel from "./barpanel/barpanel";
import AxesPanel from "./axespanel/axespanel";
import styles from "./settingtab.module.css";
const SettingTab: React.FC = () => {
  return (
    <div className={styles.settingTab}>
      <AppearancePanel />
      <BarPanel />
      <AxesPanel />
    </div>
  );
};
export default SettingTab;
