"use client";
import PieAppearancePanel from "./pieAppearancePanel/PieAppearancePanel";
import PiePanel from "./piePanel/PiePanel";
const PieSettingTab: React.FC = () => {
  return (
    <>
      <PieAppearancePanel />
      <PiePanel />
    </>
  );
};
export default PieSettingTab;
