"use client";
import AppearancePanel from "../appearancePanel/AppearancePanel";
import AxesPanel from "../axesPanel/AxesPanel";
import LinePointPanel from "./linePointPanel/LinePointPanel";
const LineSettingTab: React.FC = () => {
  return (
    <>
      <AppearancePanel />
      <LinePointPanel />
      <AxesPanel />
    </>
  );
};
export default LineSettingTab;
