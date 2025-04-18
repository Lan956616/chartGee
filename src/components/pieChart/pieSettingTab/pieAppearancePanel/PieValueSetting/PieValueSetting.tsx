"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import SelectDropDown from "@/components/settingtab/selectdropdown/selectdropdown";
import Slider from "@/components/settingtab/slider/slider";
import ColorSelect from "@/components/settingtab/colorselect/colorselect";
import TextInput from "@/components/settingtab/textinput/textinput";
import { updateOption } from "@/utils/updateOptions";

const PieValueSetting: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context?.currentData) return;
  const { setCurrentData } = context;
  const { option, chartType } = context.currentData;
  if (chartType !== "pie") return;

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
        value={option.plugins.datalabels.font.size}
        Unit="px"
        onChange={(newFontSize) => {
          updateOption(
            setCurrentData,
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
          updateOption(
            setCurrentData,
            "plugins.datalabels.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={option.plugins.datalabels.color}
        onChange={(newColor) => {
          updateOption(setCurrentData, "plugins.datalabels.color", newColor);
        }}
      />
    </div>
  );
};

export default PieValueSetting;
