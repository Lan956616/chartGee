"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import styles from "./labelsetting.module.css";
import SelectDropDown from "../../selectdropdown/selectdropdown";
import Slider from "../../slider/slider";
import ColorSelect from "../../colorselect/colorselect";
import { handleOptionChange } from "@/utils/updateOptions";
const LabelSetting: React.FC = () => {
  const { option, setOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;

  return (
    <div className={styles.labelSettingContainer}>
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={option.plugins.legend.labels.font.size}
        Unit="px"
        onChange={(newFontSize) => {
          handleOptionChange(
            setOption,
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
          handleOptionChange(
            setOption,
            "plugins.legend.labels.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={option.plugins.legend.labels.color}
        onChange={(newColor) => {
          handleOptionChange(
            setOption,
            "plugins.legend.labels.color",
            newColor
          );
        }}
      />
    </div>
  );
};

export default LabelSetting;
