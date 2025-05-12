"use client";
import AppearancePanel from "@/components/appearancepanel";
import AxesPanel from "@/components/settingtab/axespanel/axespanel";
import LinePointPanel from "./linePointPanel/linePointPanel";
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
