"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import Slider from "../slider/slider";
import SelectDropDown from "../selectdropdown/selectdropdown";
import TabBigItem from "../tabbigitem/tabbigitem";
import ColorSelect from "../colorselect/colorselect";
import { handleOptionChange } from "@/utils/updateOptions";

const AxesPanel: React.FC = () => {
  const { option, setOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  return (
    <TabBigItem title="Axes" src="/axis.png" alt="axis-icon">
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={option.scales.x.ticks.font.size}
        onChange={(newFontSize) => {
          handleOptionChange(
            setOption,
            "scales.x.ticks.font.size",
            newFontSize
          );
          handleOptionChange(
            setOption,
            "scales.y.ticks.font.size",
            newFontSize
          );
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
          handleOptionChange(
            setOption,
            "scales.x.ticks.font.weight",
            newFontWeight
          );
          handleOptionChange(
            setOption,
            "scales.y.ticks.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={option.scales.x.ticks.color}
        onChange={(newColor) => {
          handleOptionChange(setOption, "scales.x.ticks.color", newColor);
          handleOptionChange(setOption, "scales.y.ticks.color", newColor);
        }}
      />
      <Slider
        label="Grid Line Width"
        value={option.scales.x.grid.lineWidth}
        min={1}
        max={10}
        onChange={(newLineWidth) => {
          handleOptionChange(
            setOption,
            "scales.x.grid.lineWidth",
            newLineWidth
          );
          handleOptionChange(
            setOption,
            "scales.y.grid.lineWidth",
            newLineWidth
          );
        }}
      />
      <ColorSelect
        label="Grid Line Color"
        color={option.scales.x.grid.color}
        onChange={(newLineColor) => {
          handleOptionChange(setOption, "scales.x.grid.color", newLineColor);
          handleOptionChange(setOption, "scales.y.grid.color", newLineColor);
        }}
      />
    </TabBigItem>
  );
};

export default AxesPanel;
