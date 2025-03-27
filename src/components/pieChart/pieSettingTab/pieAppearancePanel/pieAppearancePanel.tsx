import TabBigItem from "@/components/settingtab/tabbigitem/tabbigitem";
import SelectDropDown from "@/components/settingtab/selectdropdown/selectdropdown";
import Toggle from "@/components/settingtab/toggle/toggle";
import ChartTitleSetting from "./charttitlesettings/charttitlesettings";
import LabelSetting from "./labelsetting/labelsetting";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import { useContext } from "react";
import { handleOptionChange } from "@/utils/updateOptions";
import PieValueSetting from "./PieValueSetting/PieValueSetting";
import ColorSelect from "@/components/settingtab/colorselect/colorselect";
const PieAppearancePanel: React.FC = () => {
  const { pieOption, setPieOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;

  return (
    <TabBigItem title="Appearance" src="/painting.png" alt="painting-icon">
      <SelectDropDown
        label="Aspect Ratio"
        value={pieOption.aspectRatio === 1 ? "1/1" : "16/9"}
        width={80}
        options={[
          { value: "1/1", label: "1 / 1" },
          { value: "16/9", label: "16 / 9" },
        ]}
        onChange={(newRatio) => {
          const [w, h] = newRatio.split("/").map(Number);
          const ratio = w / h;
          handleOptionChange(setPieOption, "aspectRatio", ratio);
        }}
      />
      <ColorSelect
        label="Background Color"
        color={pieOption.plugins.backgroundColor.color}
        onChange={(newColor) => {
          handleOptionChange(
            setPieOption,
            "plugins.backgroundColor.color",
            newColor
          );
        }}
      />
      <Toggle
        label="Show ChartTitle"
        active={pieOption.plugins.title.display}
        onClick={() => {
          handleOptionChange(
            setPieOption,
            "plugins.title.display",
            !pieOption.plugins.title.display
          );
        }}
      />
      {pieOption.plugins.title.display && <ChartTitleSetting />}
      <Toggle
        label="Show Label"
        active={pieOption.plugins.legend.display}
        onClick={() => {
          handleOptionChange(
            setPieOption,
            "plugins.legend.display",
            !pieOption.plugins.legend.display
          );
        }}
      />
      {pieOption.plugins.legend.display && <LabelSetting />}
      <Toggle
        label="Show Values"
        active={pieOption.plugins.datalabels.display}
        onClick={() => {
          handleOptionChange(
            setPieOption,
            "plugins.datalabels.display",
            !pieOption.plugins.datalabels.display
          );
        }}
      />
      {pieOption.plugins.datalabels.display && <PieValueSetting />}
    </TabBigItem>
  );
};

export default PieAppearancePanel;
