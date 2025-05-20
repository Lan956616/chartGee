"use client";
import PieAppearancePanel from "./PieAppearancePanel/PieAppearancePanel";
import PiePanel from "./PiePanel/PiePanel";
const PieSettingTab: React.FC = () => {
  return (
    <>
      <PieAppearancePanel />
      <PiePanel />
    </>
  );
};
export default PieSettingTab;
