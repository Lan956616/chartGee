"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import styles from "./labelSetting.module.css";
import SelectDropDown from "@/components/editPage/DataArea/SettingTab/common/SelectDropDown/SelectDropDown";
import Slider from "@/components/editPage/DataArea/SettingTab/common/Slider/Slider";
import ColorSelect from "@/components/editPage/DataArea/SettingTab/common/ColorSelect/ColorSelect";
import { updateOption } from "@/utils/editPage/updateOptions";
const LabelSetting: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context?.currentData) return;
  const { setCurrentData } = context;
  const { option } = context.currentData;

  return (
    <div className={styles.labelSettingContainer}>
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={option.plugins.legend.labels.font.size}
        unit="px"
        onChange={(newFontSize) => {
          updateOption(
            setCurrentData,
            "plugins.legend.labels.font.size",
            newFontSize
          );
        }}
      />
      <SelectDropDown
        label="Font Weight"
        value={option.plugins.legend.labels.font.weight}
        width={100}
        options={[
          { value: "normal", label: "Normal" },
          { value: "bold", label: "Bold" },
        ]}
        onChange={(newFontWeight) => {
          updateOption(
            setCurrentData,
            "plugins.legend.labels.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={option.plugins.legend.labels.color}
        onChange={(newColor) => {
          updateOption(setCurrentData, "plugins.legend.labels.color", newColor);
        }}
      />
    </div>
  );
};

export default LabelSetting;
