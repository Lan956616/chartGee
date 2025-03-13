"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/app/edit/barchart/page";
import Slider from "../slider/slider";
import SelectDropDown from "../selectdropdown/selectdropdown";
import TabBigItem from "../tabbigitem/tabbigitem";
import ColorSelect from "../colorselect/colorselect";

import lodash, { set } from "lodash";

const AxesPanel: React.FC = () => {
  const { options, setOptions } = useContext(ChartDataContext);
  const handleOptionChange = (key: string, value: number | string) => {
    setOptions((prevOptions) => {
      const newOptions = lodash.cloneDeep(prevOptions);
      set(newOptions, key, value);
      return newOptions;
    });
  };
  return (
    <TabBigItem title="Axes" src="/axis.png" alt="axis-icon">
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={options.scales.x.ticks.font.size}
        onChange={(newFontSize) => {
          handleOptionChange("scales.x.ticks.font.size", newFontSize);
          handleOptionChange("scales.y.ticks.font.size", newFontSize);
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
          handleOptionChange("scales.x.ticks.font.weight", newFontWeight);
          handleOptionChange("scales.y.ticks.font.weight", newFontWeight);
        }}
      />
      <ColorSelect
        label="Font Color"
        color={options.scales.x.ticks.color}
        onChange={(newColor) => {
          handleOptionChange("scales.x.ticks.color", newColor);
          handleOptionChange("scales.y.ticks.color", newColor);
        }}
      />
      <Slider
        label="Grid Line Width"
        value={options.scales.x.grid.lineWidth}
        min={1}
        max={10}
        onChange={(newLineWidth) => {
          handleOptionChange("scales.x.grid.lineWidth", newLineWidth);
          handleOptionChange("scales.y.grid.lineWidth", newLineWidth);
        }}
      />
      <ColorSelect
        label="Grid Line Color"
        color={options.scales.x.grid.color}
        onChange={(newLineColor) => {
          handleOptionChange("scales.x.grid.color", newLineColor);
          handleOptionChange("scales.y.grid.color", newLineColor);
        }}
      />
    </TabBigItem>
  );
};

export default AxesPanel;
