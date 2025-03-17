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
        value={option.barThickness}
        onChange={(newWidth) => {
          handleOptionChange(setOption, "barThickness", newWidth);
        }}
      />
      <Slider
        label="Border Radius"
        value={option.borderRadius}
        min={0}
        max={Math.floor(option.barThickness / 2)}
        onChange={(border) => {
          handleOptionChange(setOption, "borderRadius", border);
        }}
      />
      <Slider
        label="Border Width"
        value={option.borderWidth}
        min={0}
        max={Math.floor(option.barThickness / 3)}
        onChange={(newWidth) => {
          handleOptionChange(setOption, "borderWidth", newWidth);
        }}
      />
      <ColorSelect
        label="Border Color"
        color={option.borderColor}
        onChange={(newBorderColor) => {
          handleOptionChange(setOption, "borderColor", newBorderColor);
        }}
      />
    </TabBigItem>
  );
};

export default BarPanel;
