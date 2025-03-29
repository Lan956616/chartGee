import TabBigItem from "./settingtab/tabbigitem/tabbigitem";
import SelectDropDown from "./settingtab/selectdropdown/selectdropdown";
import Toggle from "./settingtab/toggle/toggle";
import ChartTitleSetting from "./settingtab/appearancepanel/charttitlesettings/charttitlesettings";
import LabelSetting from "./settingtab/appearancepanel/labelsetting/labelsetting";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import { useContext } from "react";
import { handleOptionChange } from "@/utils/updateOptions";
import ValueSetting from "./settingtab/appearancepanel/valuesetting/valuesetting";
import ColorSelect from "./settingtab/colorselect/colorselect";
import getAxisInfo from "@/utils/getAxisInfo";
type AppearancePanelProps = {
  chartType: "bar" | "line";
};
const AppearancePanel: React.FC<AppearancePanelProps> = ({ chartType }) => {
  const { option, setOption, lineOption, setLineOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  const Option = chartType === "bar" ? option : lineOption;
  const SetOption = chartType === "bar" ? setOption : setLineOption;

  return (
    <TabBigItem title="Appearance" src="/painting.png" alt="painting-icon">
      <SelectDropDown
        label="Aspect Ratio"
        value={Option.aspectRatio === 1 ? "1/1" : "16/9"}
        width={80}
        options={[
          { value: "1/1", label: "1 / 1" },
          { value: "16/9", label: "16 / 9" },
        ]}
        onChange={(newRatio) => {
          const [w, h] = newRatio.split("/").map(Number);
          const ratio = w / h;
          handleOptionChange(SetOption, "aspectRatio", ratio);
        }}
      />
      <SelectDropDown
        label="Index Axis"
        value={Option.indexAxis}
        width={60}
        options={[
          { value: "x", label: "X" },
          { value: "y", label: "Y" },
        ]}
        onChange={(newAxis) => {
          const { valueAxis: newValueAxis, labelAxis: newLabelAxis } =
            getAxisInfo(newAxis as "x" | "y");
          const { valueAxis: oldValueAxis } = getAxisInfo(Option.indexAxis);
          const currentDisplay = Option.scales[oldValueAxis].title.display;
          handleOptionChange(SetOption, "indexAxis", newAxis);
          handleOptionChange(
            SetOption,
            `scales.${newValueAxis}.title.display`,
            currentDisplay
          );
          handleOptionChange(
            SetOption,
            `scales.${newLabelAxis}.title.display`,
            false
          );
        }}
      />
      <ColorSelect
        label="Background Color"
        color={Option.plugins.backgroundColor.color}
        onChange={(newColor) => {
          handleOptionChange(
            SetOption,
            "plugins.backgroundColor.color",
            newColor
          );
        }}
      />
      <Toggle
        label="Show ChartTitle"
        active={Option.plugins.title.display}
        onClick={() => {
          handleOptionChange(
            SetOption,
            "plugins.title.display",
            !Option.plugins.title.display
          );
        }}
      />
      {Option.plugins.title.display && <ChartTitleSetting />}
      <Toggle
        label="Show Label"
        active={Option.plugins.legend.display}
        onClick={() => {
          handleOptionChange(
            SetOption,
            "plugins.legend.display",
            !Option.plugins.legend.display
          );
        }}
      />
      {Option.plugins.legend.display && <LabelSetting />}
      <Toggle
        label="Show Values"
        active={Option.plugins.datalabels.display}
        onClick={() => {
          handleOptionChange(
            SetOption,
            "plugins.datalabels.display",
            !Option.plugins.datalabels.display
          );
        }}
      />
      {Option.plugins.datalabels.display && <ValueSetting />}
    </TabBigItem>
  );
};

export default AppearancePanel;
