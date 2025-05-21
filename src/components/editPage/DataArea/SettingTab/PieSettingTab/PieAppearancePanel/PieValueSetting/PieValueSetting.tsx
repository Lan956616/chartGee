"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import SelectDropDown from "@/components/editPage/DataArea/SettingTab/common/SelectDropDown/SelectDropDown";
import Slider from "@/components/editPage/DataArea/SettingTab/common/Slider/Slider";
import ColorSelect from "@/components/editPage/DataArea/SettingTab/common/ColorSelect/ColorSelect";
import TextInput from "@/components/editPage/DataArea/SettingTab/common/TextInput/TextInput";
import { updateOption } from "@/utils/editPage/updateOptions";

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
        value={option.plugins.datalabels.unit}
        onChange={(newUnit) => {
          updateOption(setCurrentData, "plugins.datalabels.unit", newUnit);
        }}
      />
      <Slider
        label="Font Size"
        min={6}
        max={45}
        value={option.plugins.datalabels.font.size}
        unit="px"
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
