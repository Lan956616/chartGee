"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import styles from "./labelsetting.module.css";
import SelectDropDown from "@/components/settingtab/selectdropdown/selectdropdown";
import Slider from "@/components/settingtab/slider/slider";
import ColorSelect from "@/components/settingtab/colorselect/colorselect";
import { handleOptionChange } from "@/utils/updateOptions";
const LabelSetting: React.FC = () => {
  const { pieOption, setPieOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;

  return (
    <div className={styles.labelSettingContainer}>
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={pieOption.plugins.legend.labels.font.size}
        Unit="px"
        onChange={(newFontSize) => {
          handleOptionChange(
            setPieOption,
            "plugins.legend.labels.font.size",
            newFontSize
          );
        }}
      />
      <SelectDropDown
        label="Font Weight"
        value={pieOption.plugins.legend.labels.font.weight}
        width={100}
        options={[
          { value: "normal", label: "Normal" },
          { value: "bold", label: "Bold" },
        ]}
        onChange={(newFontWeight) => {
          handleOptionChange(
            setPieOption,
            "plugins.legend.labels.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={pieOption.plugins.legend.labels.color}
        onChange={(newColor) => {
          handleOptionChange(
            setPieOption,
            "plugins.legend.labels.color",
            newColor
          );
        }}
      />
    </div>
  );
};

export default LabelSetting;
