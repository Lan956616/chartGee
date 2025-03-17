import TabBigItem from "../tabbigitem/tabbigitem";
import SelectDropDown from "../selectdropdown/selectdropdown";
import Toggle from "../toggle/toggle";
import ChartTitleSetting from "./charttitlesettings/charttitlesettings";
import LabelSetting from "./labelsetting/labelsetting";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import { useContext } from "react";
import { handleOptionChange } from "@/utils/updateOptions";

const AppearancePanel: React.FC = () => {
  const { option, setOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  return (
    <TabBigItem title="Appearance" src="/painting.png" alt="painting-icon">
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
    </TabBigItem>
  );
};

export default AppearancePanel;
