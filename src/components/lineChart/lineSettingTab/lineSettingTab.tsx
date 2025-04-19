"use client";
import AppearancePanel from "@/components/appearancepanel";
import AxesPanel from "@/components/settingtab/axespanel/axespanel";
import styles from "./lineSettingTab.module.css";
import LinePointPanel from "./linePointPanel/linePointPanel";
const LineSettingTab: React.FC = () => {
  return (
    <div className={styles.settingTab}>
      <AppearancePanel />
      <LinePointPanel />
      <AxesPanel />
    </div>
  );
};
export default LineSettingTab;
