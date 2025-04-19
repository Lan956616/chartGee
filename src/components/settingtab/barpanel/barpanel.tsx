import Slider from "../slider/slider";
import TabBigItem from "../tabbigitem/tabbigitem";
import ColorSelect from "../colorselect/colorselect";
import { ChartDataContext } from "@/components/ChartDataProvider";
import { useContext } from "react";
import { updateOption } from "@/utils/updateOptions";

const BarPanel: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context?.currentData || context.currentData.chartType !== "bar") return;
  const { setCurrentData } = context;
  const { option } = context.currentData;

  return (
    <TabBigItem title="Bars" src="/blackgraph.png" alt="graph-icon">
      <Slider
        label="Width"
        min={5}
        max={50}
        value={option.datasets.bar.barThickness}
        Unit="px"
        onChange={(newWidth) => {
          updateOption(setCurrentData, "datasets.bar.barThickness", newWidth);
        }}
      />
      <Slider
        label="Border Radius"
        value={option.datasets.bar.borderRadius}
        min={0}
        max={25}
        Unit="px"
        onChange={(border) => {
          updateOption(setCurrentData, "datasets.bar.borderRadius", border);
        }}
      />
      <Slider
        label="Border Width"
        value={option.datasets.bar.borderWidth}
        min={0}
        max={10}
        Unit="px"
        onChange={(newWidth) => {
          updateOption(setCurrentData, "datasets.bar.borderWidth", newWidth);
        }}
      />
      <ColorSelect
        label="Border Color"
        color={option.datasets.bar.borderColor}
        onChange={(newBorderColor) => {
          updateOption(
            setCurrentData,
            "datasets.bar.borderColor",
            newBorderColor
          );
        }}
      />
    </TabBigItem>
  );
};

export default BarPanel;
