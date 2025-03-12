"use client";
import AppearancePanel from "./appearancepanel/appearancepanel";
import styles from "./settingtab.module.css";
import TabBigItem from "./tabbigitem/tabbigitem";
const SettingTab: React.FC = () => {
  return (
    <div className={styles.settingTab}>
      <AppearancePanel />
      <TabBigItem title="Bars" src="/blackgraph.png" alt="graph-icon">
        <p>123</p>
      </TabBigItem>
      <TabBigItem title="Axes" src="/axis.png" alt="axis-icon">
        <p>456</p>
      </TabBigItem>
    </div>
  );
};
export default SettingTab;
