"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/app/edit/barchart/page";
import styles from "./labelsetting.module.css";
import SelectDropDown from "../../selectdropdown/selectdropdown";
import Slider from "../../slider/slider";
import ColorSelect from "../../colorselect/colorselect";
import { handleOptionChange } from "@/utils/updateOptions";
const LabelSetting: React.FC = () => {
  const { options, setOptions } = useContext(ChartDataContext);

  return (
    <div className={styles.labelSettingContainer}>
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={options.plugins.legend.labels.font.size}
        onChange={(newFontSize) => {
          handleOptionChange(
            setOptions,
            "plugins.legend.labels.font.size",
            newFontSize
          );
        }}
      />
      <SelectDropDown
        label="Font Weight"
        value={options.plugins.legend.labels.font.weight}
        width={100}
        options={[
          { value: "normal", label: "Normal" },
          { value: "bold", label: "Bold" },
        ]}
        onChange={(newFontWeight) => {
          handleOptionChange(
            setOptions,
            "plugins.legend.labels.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={options.plugins.legend.labels.color}
        onChange={(newColor) => {
          handleOptionChange(
            setOptions,
            "plugins.legend.labels.color",
            newColor
          );
        }}
      />
    </div>
  );
};

export default LabelSetting;
