import TabBigItem from "../tabbigitem/tabbigitem";
import SelectDropDown from "../selectdropdown/selectdropdown";
import Toggle from "../toggle/toggle";
import ChartTitleSetting from "./charttitlesettings/charttitlesettings";
import LabelSetting from "./labelsetting/labelsetting";
import { ChartDataContext } from "@/app/edit/barchart/page";
import { useContext } from "react";
import { handleOptionChange } from "@/utils/updateOptions";

const AppearancePanel: React.FC = () => {
  const { options, setOptions } = useContext(ChartDataContext);
  return (
    <TabBigItem title="Appearance" src="/painting.png" alt="painting-icon">
      <SelectDropDown
        label="Index Axis"
        value={options.indexAxis}
        width={60}
        options={[
          { value: "x", label: "X" },
          { value: "y", label: "Y" },
        ]}
        onChange={(newAxis) => {
          handleOptionChange(setOptions, "indexAxis", newAxis);
        }}
      />
      <Toggle
        label="Show ChartTitle"
        active={options.plugins.title.display}
        onClick={() => {
          handleOptionChange(
            setOptions,
            "plugins.title.display",
            !options.plugins.title.display
          );
        }}
      />
      {options.plugins.title.display && <ChartTitleSetting />}
      <Toggle
        label="Show Label"
        active={options.plugins.legend.display}
        onClick={() => {
          handleOptionChange(
            setOptions,
            "plugins.legend.display",
            !options.plugins.legend.display
          );
        }}
      />
      {options.plugins.legend.display && <LabelSetting />}
    </TabBigItem>
  );
};

export default AppearancePanel;
