"use client";
import AppearancePanel from "../appearancepanel";
import BarPanel from "./barpanel/barpanel";
import AxesPanel from "./axespanel/axespanel";
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
