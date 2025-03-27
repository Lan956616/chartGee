"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import SelectDropDown from "../../selectdropdown/selectdropdown";
import Slider from "../../slider/slider";
import ColorSelect from "../../colorselect/colorselect";
import { handleOptionChange } from "@/utils/updateOptions";

const ValueSetting: React.FC = () => {
  const { option, setOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;

  return (
    <div>
      <Slider
        label="Font Size"
        min={6}
        max={45}
        value={option.plugins.datalabels.font.size}
        Unit="px"
        onChange={(newFontSize) => {
          handleOptionChange(
            setOption,
            "plugins.datalabels.font.size",
            newFontSize
          );
        }}
      />
      <SelectDropDown
        label="Font Weight"
        value={option.plugins.datalabels.font.weight}
        width={100}
        options={[
          { value: "normal", label: "Normal" },
          { value: "bold", label: "Bold" },
        ]}
        onChange={(newFontWeight) => {
          handleOptionChange(
            setOption,
            "plugins.datalabels.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={option.plugins.datalabels.color}
        onChange={(newColor) => {
          handleOptionChange(setOption, "plugins.datalabels.color", newColor);
        }}
      />
    </div>
  );
};

export default ValueSetting;
