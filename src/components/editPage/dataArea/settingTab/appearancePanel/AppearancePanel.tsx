import TabBigItem from "../common/tabBigItem/TabBigItem";
import SelectDropDown from "../common/selectDropDown/SelectDropDown";
import Toggle from "../common/toggle/Toggle";
import ChartTitleSetting from "./chartTitleSettings/ChartTitleSettings";
import LabelSetting from "./labelSetting/LabelSetting";
import { ChartDataContext } from "@/components/ChartDataProvider";
import { useContext } from "react";
import ValueSetting from "./valueSetting/ValueSetting";
import ColorSelect from "../common/colorSelect/ColorSelect";
import getAxisInfo from "@/utils/editPage/getAxisInfo";
import { updateOption } from "@/utils/editPage/updateOptions";
import { updateMultipleOptions } from "@/utils/editPage/updateMutipleOptions";
const AppearancePanel: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context?.currentData) return;
  const { setCurrentData } = context;
  const { chartType, option } = context.currentData;
  if (chartType === "pie") return;
  return (
    <TabBigItem
      title="Appearance"
      src="/charts/painting.png"
      alt="painting-icon"
    >
      <SelectDropDown
        label="Aspect Ratio"
        value={option.aspectRatio === 1 ? "1/1" : "16/9"}
        width={80}
        options={[
          { value: "1/1", label: "1 / 1" },
          { value: "16/9", label: "16 / 9" },
        ]}
        onChange={(newRatio) => {
          const [w, h] = newRatio.split("/").map(Number);
          const ratio = w / h;
          updateOption(setCurrentData, "aspectRatio", ratio);
        }}
      />
      <SelectDropDown
        label="Index Axis"
        value={option.indexAxis}
        width={60}
        options={[
          { value: "x", label: "X" },
          { value: "y", label: "Y" },
        ]}
        onChange={(newAxis) => {
          const { valueAxis: newValueAxis, labelAxis: newLabelAxis } =
            getAxisInfo(newAxis as "x" | "y");
          const { valueAxis: oldValueAxis } = getAxisInfo(option.indexAxis);
          const currentDisplay = option.scales[oldValueAxis].title.display;
          updateMultipleOptions(setCurrentData, [
            ["indexAxis", newAxis],
            [`scales.${newValueAxis}.title.display`, currentDisplay],
            [`scales.${newLabelAxis}.title.display`, false],
          ]);
        }}
      />
      <ColorSelect
        label="Background Color"
        color={option.plugins.backgroundColor.color}
        onChange={(newColor) => {
          updateOption(
            setCurrentData,
            "plugins.backgroundColor.color",
            newColor
          );
        }}
      />
      <Toggle
        label="Show ChartTitle"
        active={option.plugins.title.display}
        onClick={() => {
          updateOption(
            setCurrentData,
            "plugins.title.display",
            !option.plugins.title.display
          );
        }}
      />
      {option.plugins.title.display && <ChartTitleSetting />}
      <Toggle
        label="Show Label"
        active={option.plugins.legend.display}
        onClick={() => {
          updateOption(
            setCurrentData,
            "plugins.legend.display",
            !option.plugins.legend.display
          );
        }}
      />
      {option.plugins.legend.display && <LabelSetting />}
      <Toggle
        label="Show Values"
        active={option.plugins.datalabels.display}
        onClick={() => {
          updateOption(
            setCurrentData,
            "plugins.datalabels.display",
            !option.plugins.datalabels.display
          );
        }}
      />
      {option.plugins.datalabels.display && <ValueSetting />}
    </TabBigItem>
  );
};

export default AppearancePanel;
