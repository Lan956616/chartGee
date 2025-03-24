import Slider from "../slider/slider";
import TabBigItem from "../tabbigitem/tabbigitem";
import ColorSelect from "../colorselect/colorselect";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import { useContext } from "react";
import { handleOptionChange } from "@/utils/updateOptions";

const BarPanel: React.FC = () => {
  const { option, setOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;

  return (
    <TabBigItem title="Bars" src="/blackgraph.png" alt="graph-icon">
      <Slider
        label="Width"
        min={5}
        max={50}
        value={option.datasets.bar.barThickness}
        onChange={(newWidth) => {
          handleOptionChange(setOption, "datasets.bar.barThickness", newWidth);
        }}
      />
      <Slider
        label="Border Radius"
        value={option.datasets.bar.borderRadius}
        min={0}
        max={25}
        onChange={(border) => {
          handleOptionChange(setOption, "datasets.bar.borderRadius", border);
        }}
      />
      <Slider
        label="Border Width"
        value={option.datasets.bar.borderWidth}
        min={0}
        max={10}
        onChange={(newWidth) => {
          handleOptionChange(setOption, "datasets.bar.borderWidth", newWidth);
        }}
      />
      <ColorSelect
        label="Border Color"
        color={option.datasets.bar.borderColor}
        onChange={(newBorderColor) => {
          handleOptionChange(
            setOption,
            "datasets.bar.borderColor",
            newBorderColor
          );
        }}
      />
    </TabBigItem>
  );
};

export default BarPanel;
