"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import SelectDropDown from "@/components/settingtab/selectdropdown/selectdropdown";
import Slider from "@/components/settingtab/slider/slider";
import ColorSelect from "@/components/settingtab/colorselect/colorselect";
import TextInput from "@/components/settingtab/textinput/textinput";
import { handleOptionChange } from "@/utils/updateOptions";

const PieValueSetting: React.FC = () => {
  const { pieOption, setPieOption, unit, setUnit } = useContext(
    ChartDataContext
  ) as unknown as ContextType;

  return (
    <div>
      <TextInput
        label="Unit"
        value={unit}
        onChange={(newUnit) => {
          setUnit(newUnit);
        }}
      />
      <Slider
        label="Font Size"
        min={6}
        max={45}
        value={pieOption.plugins.datalabels.font.size}
        onChange={(newFontSize) => {
          handleOptionChange(
            setPieOption,
            "plugins.datalabels.font.size",
            newFontSize
          );
        }}
      />
      <SelectDropDown
        label="Font Weight"
        value={pieOption.plugins.datalabels.font.weight}
        width={100}
        options={[
          { value: "normal", label: "Normal" },
          { value: "bold", label: "Bold" },
        ]}
        onChange={(newFontWeight) => {
          handleOptionChange(
            setPieOption,
            "plugins.datalabels.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={pieOption.plugins.datalabels.color}
        onChange={(newColor) => {
          handleOptionChange(
            setPieOption,
            "plugins.datalabels.color",
            newColor
          );
        }}
      />
    </div>
  );
};

export default PieValueSetting;
