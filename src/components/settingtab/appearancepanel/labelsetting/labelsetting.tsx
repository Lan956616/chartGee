"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import styles from "./labelsetting.module.css";
import SelectDropDown from "../../selectdropdown/selectdropdown";
import Slider from "../../slider/slider";
import ColorSelect from "../../colorselect/colorselect";
import { handleOptionChange } from "@/utils/updateOptions";
type LabelSettingProps = { chartType: "bar" | "pie" | "line" };
const LabelSetting: React.FC<LabelSettingProps> = ({ chartType }) => {
  const {
    option,
    setOption,
    lineOption,
    setLineOption,
    pieOption,
    setPieOption,
  } = useContext(ChartDataContext) as unknown as ContextType;

  const Option =
    chartType === "bar" ? option : chartType === "pie" ? pieOption : lineOption;
  const SetOption =
    chartType === "bar"
      ? setOption
      : chartType === "pie"
      ? setPieOption
      : setLineOption;

  return (
    <div className={styles.labelSettingContainer}>
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={Option.plugins.legend.labels.font.size}
        Unit="px"
        onChange={(newFontSize) => {
          handleOptionChange(
            SetOption,
            "plugins.legend.labels.font.size",
            newFontSize
          );
        }}
      />
      <SelectDropDown
        label="Font Weight"
        value={Option.plugins.legend.labels.font.weight}
        width={100}
        options={[
          { value: "normal", label: "Normal" },
          { value: "bold", label: "Bold" },
        ]}
        onChange={(newFontWeight) => {
          handleOptionChange(
            SetOption,
            "plugins.legend.labels.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={Option.plugins.legend.labels.color}
        onChange={(newColor) => {
          handleOptionChange(
            SetOption,
            "plugins.legend.labels.color",
            newColor
          );
        }}
      />
    </div>
  );
};

export default LabelSetting;
