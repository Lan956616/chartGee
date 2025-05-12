"use client";
import PieAppearancePanel from "./pieAppearancePanel/pieAppearancePanel";
import PiePanel from "./piePanel/piePanel";
const PieSettingTab: React.FC = () => {
  return (
    <>
      <PieAppearancePanel />
      <PiePanel />
    </>
  );
};
export default PieSettingTab;
