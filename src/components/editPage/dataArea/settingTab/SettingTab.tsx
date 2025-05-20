"use client";
import AppearancePanel from "./appearancePanel/AppearancePanel";
import BarPanel from "./barPanel/BarPanel";
import AxesPanel from "./axesPanel/AxesPanel";
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
