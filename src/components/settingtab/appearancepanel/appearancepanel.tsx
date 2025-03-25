import TabBigItem from "../tabbigitem/tabbigitem";
import SelectDropDown from "../selectdropdown/selectdropdown";
import Toggle from "../toggle/toggle";
import ChartTitleSetting from "./charttitlesettings/charttitlesettings";
import LabelSetting from "./labelsetting/labelsetting";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import { useContext } from "react";
import { handleOptionChange } from "@/utils/updateOptions";
import ValueSetting from "./valuesetting/valuesetting";
import ColorSelect from "../colorselect/colorselect";
const AppearancePanel: React.FC = () => {
  const { option, setOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  console.log(option.aspectRatio);
  return (
    <TabBigItem title="Appearance" src="/painting.png" alt="painting-icon">
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
          handleOptionChange(setOption, "aspectRatio", ratio);
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
          handleOptionChange(setOption, "indexAxis", newAxis);
        }}
      />
      <ColorSelect
        label="Background Color"
        color={option.plugins.backgroundColor.color}
        onChange={(newColor) => {
          handleOptionChange(
            setOption,
            "plugins.backgroundColor.color",
            newColor
          );
        }}
      />
      <Toggle
        label="Show ChartTitle"
        active={option.plugins.title.display}
        onClick={() => {
          handleOptionChange(
            setOption,
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
          handleOptionChange(
            setOption,
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
          handleOptionChange(
            setOption,
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
