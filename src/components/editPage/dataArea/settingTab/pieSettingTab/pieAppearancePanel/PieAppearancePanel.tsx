import TabBigItem from "@/components/editPage/DataArea/SettingTab/common/TabBigItem/TabBigItem";
import SelectDropDown from "@/components/editPage/DataArea/SettingTab/common/SelectDropDown/SelectDropDown";
import Toggle from "@/components/editPage/DataArea/SettingTab/common/Toggle/Toggle";
import ChartTitleSetting from "../../AppearancePanel/ChartTitleSettings/ChartTitleSettings";
import LabelSetting from "../../AppearancePanel/LabelSetting/LabelSetting";
import { ChartDataContext } from "@/components/ChartDataProvider";
import { useContext } from "react";
import PieValueSetting from "./PieValueSetting/PieValueSetting";
import ColorSelect from "@/components/editPage/DataArea/SettingTab/common/ColorSelect/ColorSelect";
import { updateOption } from "@/utils/editPage/updateOptions";
const PieAppearancePanel: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context?.currentData) return;
  const { setCurrentData } = context;
  const { option, chartType } = context.currentData;
  if (chartType !== "pie") return;

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
      {option.plugins.datalabels.display && <PieValueSetting />}
    </TabBigItem>
  );
};

export default PieAppearancePanel;
