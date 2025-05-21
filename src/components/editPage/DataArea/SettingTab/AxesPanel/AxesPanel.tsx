"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import Slider from "@/components/editPage/DataArea/SettingTab/common/Slider/Slider";
import SelectDropDown from "@/components/editPage/DataArea/SettingTab/common/SelectDropDown/SelectDropDown";
import TabBigItem from "@/components/editPage/DataArea/SettingTab/common/TabBigItem/TabBigItem";
import ColorSelect from "@/components/editPage/DataArea/SettingTab/common/ColorSelect/ColorSelect";
import Toggle from "@/components/editPage/DataArea/SettingTab/common/Toggle/Toggle";
import UnitSetting from "@/components/editPage/DataArea/SettingTab/AxesPanel/UnitSetting";
import getAxisInfo from "@/utils/editPage/getAxisInfo";
import { updateOption } from "@/utils/editPage/updateOptions";
import { updateMultipleOptions } from "@/utils/editPage/updateMutipleOptions";
const AxesPanel: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context?.currentData) return;
  const { setCurrentData } = context;
  const { chartType, option } = context.currentData;
  if (chartType === "pie") return;
  const { valueAxis } = getAxisInfo(option.indexAxis);
  return (
    <TabBigItem title="Axes" src="/charts/axis.png" alt="axis-icon">
      <Slider
        label="Font Size"
        min={6}
        max={40}
        unit="px"
        value={option.scales.x.ticks.font.size}
        onChange={(newFontSize) => {
          updateMultipleOptions(setCurrentData, [
            ["scales.x.ticks.font.size", newFontSize],
            ["scales.y.ticks.font.size", newFontSize],
          ]);
        }}
      />
      <SelectDropDown
        label="Font Weight"
        value={option.scales.x.ticks.font.weight}
        width={100}
        options={[
          { value: "normal", label: "Normal" },
          { value: "bold", label: "Bold" },
        ]}
        onChange={(newFontWeight) => {
          updateMultipleOptions(setCurrentData, [
            ["scales.x.ticks.font.weight", newFontWeight],
            ["scales.y.ticks.font.weight", newFontWeight],
          ]);
        }}
      />
      <ColorSelect
        label="Font Color"
        color={option.scales.x.ticks.color}
        onChange={(newColor) => {
          updateMultipleOptions(setCurrentData, [
            ["scales.x.ticks.color", newColor],
            ["scales.y.ticks.color", newColor],
          ]);
        }}
      />
      <Slider
        label="Grid Line Width"
        value={option.scales.x.grid.lineWidth}
        min={1}
        max={10}
        unit="px"
        onChange={(newLineWidth) => {
          updateMultipleOptions(setCurrentData, [
            ["scales.x.grid.lineWidth", newLineWidth],
            ["scales.y.grid.lineWidth", newLineWidth],
          ]);
        }}
      />
      <ColorSelect
        label="Grid Line Color"
        color={option.scales.x.grid.color}
        onChange={(newLineColor) => {
          updateMultipleOptions(setCurrentData, [
            ["scales.x.grid.color", newLineColor],
            ["scales.y.grid.color", newLineColor],
          ]);
        }}
      />
      <Toggle
        label="Show Unit"
        active={option.scales[valueAxis].title.display}
        onClick={() => {
          updateOption(
            setCurrentData,
            `scales.${valueAxis}.title.display`,
            !option.scales[valueAxis].title.display
          );
        }}
      />
      {option.scales[valueAxis].title.display && <UnitSetting />}
    </TabBigItem>
  );
};

export default AxesPanel;
