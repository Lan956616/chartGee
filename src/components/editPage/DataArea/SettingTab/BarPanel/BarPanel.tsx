import Slider from "@/components/editPage/DataArea/SettingTab/common/Slider/Slider";
import TabBigItem from "@/components/editPage/DataArea/SettingTab/common/TabBigItem/TabBigItem";
import ColorSelect from "@/components/editPage/DataArea/SettingTab/common/ColorSelect/ColorSelect";
import { ChartDataContext } from "@/components/ChartDataProvider";
import { useContext } from "react";
import { updateOption } from "@/utils/editPage/updateOptions";

const BarPanel: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context?.currentData || context.currentData.chartType !== "bar") return;
  const { setCurrentData } = context;
  const { option } = context.currentData;

  return (
    <TabBigItem
      title="Bars"
      src="/charts/blackgraph.png"
      alt="bar setting panel"
    >
      <Slider
        label="Width"
        min={5}
        max={50}
        value={option.datasets.bar.barThickness}
        unit="px"
        onChange={(newWidth) => {
          updateOption(setCurrentData, "datasets.bar.barThickness", newWidth);
        }}
      />
      <Slider
        label="Border Radius"
        value={option.datasets.bar.borderRadius}
        min={0}
        max={25}
        unit="px"
        onChange={(border) => {
          updateOption(setCurrentData, "datasets.bar.borderRadius", border);
        }}
      />
      <Slider
        label="Border Width"
        value={option.datasets.bar.borderWidth}
        min={0}
        max={10}
        unit="px"
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
