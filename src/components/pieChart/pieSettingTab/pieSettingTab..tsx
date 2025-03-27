"use client";

import styles from "./pieSettingTab.module.css";
import PieAppearancePanel from "./pieAppearancePanel/pieAppearancePanel";
import PiePanel from "./piePanel/piePanel";
const PieSettingTab: React.FC = () => {
  return (
    <div className={styles.settingTab}>
      <PieAppearancePanel />
      <PiePanel />
    </div>
  );
};
export default PieSettingTab;
