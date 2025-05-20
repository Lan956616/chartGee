"use client";
import AppearancePanel from "./AppearancePanel/AppearancePanel";
import BarPanel from "./BarPanel/BarPanel";
import AxesPanel from "./AxesPanel/AxesPanel";
const SettingTab: React.FC = () => {
  return (
    <>
      <AppearancePanel />
      <BarPanel />
      <AxesPanel />
    </>
  );
};
export default SettingTab;
