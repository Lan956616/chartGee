"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/app/edit/barchart/page";
import Slider from "../slider/slider";
import SelectDropDown from "../selectdropdown/selectdropdown";
import TabBigItem from "../tabbigitem/tabbigitem";
import ColorSelect from "../colorselect/colorselect";
import { handleOptionChange } from "@/utils/updateOptions";

const AxesPanel: React.FC = () => {
  const { options, setOptions } = useContext(ChartDataContext);
  return (
    <TabBigItem title="Axes" src="/axis.png" alt="axis-icon">
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={options.scales.x.ticks.font.size}
        onChange={(newFontSize) => {
          handleOptionChange(
            setOptions,
            "scales.x.ticks.font.size",
            newFontSize
          );
          handleOptionChange(
            setOptions,
            "scales.y.ticks.font.size",
            newFontSize
          );
        }}
      />
      <SelectDropDown
        label="Font Weight"
        value={options.scales.x.ticks.font.weight}
        width={100}
        options={[
          { value: "normal", label: "Normal" },
          { value: "bold", label: "Bold" },
        ]}
        onChange={(newFontWeight) => {
          handleOptionChange(
            setOptions,
            "scales.x.ticks.font.weight",
            newFontWeight
          );
          handleOptionChange(
            setOptions,
            "scales.y.ticks.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={options.scales.x.ticks.color}
        onChange={(newColor) => {
          handleOptionChange(setOptions, "scales.x.ticks.color", newColor);
          handleOptionChange(setOptions, "scales.y.ticks.color", newColor);
        }}
      />
      <Slider
        label="Grid Line Width"
        value={options.scales.x.grid.lineWidth}
        min={1}
        max={10}
        onChange={(newLineWidth) => {
          handleOptionChange(
            setOptions,
            "scales.x.grid.lineWidth",
            newLineWidth
          );
          handleOptionChange(
            setOptions,
            "scales.y.grid.lineWidth",
            newLineWidth
          );
        }}
      />
      <ColorSelect
        label="Grid Line Color"
        color={options.scales.x.grid.color}
        onChange={(newLineColor) => {
          handleOptionChange(setOptions, "scales.x.grid.color", newLineColor);
          handleOptionChange(setOptions, "scales.y.grid.color", newLineColor);
        }}
      />
    </TabBigItem>
  );
};

export default AxesPanel;
