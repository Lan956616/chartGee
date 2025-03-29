"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import SelectDropDown from "../../selectdropdown/selectdropdown";
import Slider from "../../slider/slider";
import ColorSelect from "../../colorselect/colorselect";
import { handleOptionChange } from "@/utils/updateOptions";
type ValueSettingProps = { chartType: "bar" | "line" };

const ValueSetting: React.FC<ValueSettingProps> = ({ chartType }) => {
  const { option, setOption, lineOption, setLineOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;

  const Option = chartType === "bar" ? option : lineOption;
  const SetOption = chartType === "bar" ? setOption : setLineOption;

  return (
    <div>
      <Slider
        label="Font Size"
        min={6}
        max={45}
        value={Option.plugins.datalabels.font.size}
        Unit="px"
        onChange={(newFontSize) => {
          handleOptionChange(
            SetOption,
            "plugins.datalabels.font.size",
            newFontSize
          );
        }}
      />
      <SelectDropDown
        label="Font Weight"
        value={Option.plugins.datalabels.font.weight}
        width={100}
        options={[
          { value: "normal", label: "Normal" },
          { value: "bold", label: "Bold" },
        ]}
        onChange={(newFontWeight) => {
          handleOptionChange(
            SetOption,
            "plugins.datalabels.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={Option.plugins.datalabels.color}
        onChange={(newColor) => {
          handleOptionChange(SetOption, "plugins.datalabels.color", newColor);
        }}
      />
    </div>
  );
};

export default ValueSetting;
