"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import Slider from "../slider/slider";
import SelectDropDown from "../selectdropdown/selectdropdown";
import TabBigItem from "../tabbigitem/tabbigitem";
import ColorSelect from "../colorselect/colorselect";
import Toggle from "../toggle/toggle";
import { handleOptionChange } from "@/utils/updateOptions";
import UnitSetting from "./unitsetting/unitsetting";
import getAxisInfo from "@/utils/getAxisInfo";
type AxesPanelProps = {
  chartType: "bar" | "line";
};
const AxesPanel: React.FC<AxesPanelProps> = ({ chartType }) => {
  const { option, setOption, lineOption, setLineOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  const Option = chartType === "bar" ? option : lineOption;
  const SetOption = chartType === "bar" ? setOption : setLineOption;
  const { valueAxis } = getAxisInfo(Option.indexAxis);
  return (
    <TabBigItem title="Axes" src="/axis.png" alt="axis-icon">
      <Slider
        label="Font Size"
        min={6}
        max={40}
        Unit="px"
        value={Option.scales.x.ticks.font.size}
        onChange={(newFontSize) => {
          handleOptionChange(
            SetOption,
            "scales.x.ticks.font.size",
            newFontSize
          );
          handleOptionChange(
            SetOption,
            "scales.y.ticks.font.size",
            newFontSize
          );
        }}
      />
      <SelectDropDown
        label="Font Weight"
        value={Option.scales.x.ticks.font.weight}
        width={100}
        options={[
          { value: "normal", label: "Normal" },
          { value: "bold", label: "Bold" },
        ]}
        onChange={(newFontWeight) => {
          handleOptionChange(
            SetOption,
            "scales.x.ticks.font.weight",
            newFontWeight
          );
          handleOptionChange(
            SetOption,
            "scales.y.ticks.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={Option.scales.x.ticks.color}
        onChange={(newColor) => {
          handleOptionChange(SetOption, "scales.x.ticks.color", newColor);
          handleOptionChange(SetOption, "scales.y.ticks.color", newColor);
        }}
      />
      <Slider
        label="Grid Line Width"
        value={Option.scales.x.grid.lineWidth}
        min={1}
        max={10}
        Unit="px"
        onChange={(newLineWidth) => {
          handleOptionChange(
            SetOption,
            "scales.x.grid.lineWidth",
            newLineWidth
          );
          handleOptionChange(
            SetOption,
            "scales.y.grid.lineWidth",
            newLineWidth
          );
        }}
      />
      <ColorSelect
        label="Grid Line Color"
        color={Option.scales.x.grid.color}
        onChange={(newLineColor) => {
          handleOptionChange(SetOption, "scales.x.grid.color", newLineColor);
          handleOptionChange(SetOption, "scales.y.grid.color", newLineColor);
        }}
      />
      <Toggle
        label="Show Unit"
        active={Option.scales[valueAxis].title.display}
        onClick={() => {
          handleOptionChange(
            SetOption,
            `scales.${valueAxis}.title.display`,
            !Option.scales[valueAxis].title.display
          );
        }}
      />
      {Option.scales[valueAxis].title.display && (
        <UnitSetting chartType={chartType} />
      )}
    </TabBigItem>
  );
};

export default AxesPanel;
