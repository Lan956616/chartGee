import Slider from "@/components/editPage/DataArea/SettingTab/common/Slider/Slider";
import SelectDropDown from "@/components/editPage/DataArea/SettingTab/common/SelectDropDown/SelectDropDown";
import ColorSelect from "@/components/editPage/DataArea/SettingTab/common/ColorSelect/ColorSelect";
import { ChartDataContext } from "@/components/ChartDataProvider";
import { useContext } from "react";
import TextInput from "@/components/editPage/DataArea/SettingTab/common/TextInput/TextInput";
import { updateMultipleOptions } from "@/utils/editPage/updateMutipleOptions";
const UnitSetting: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context?.currentData) return;
  const { setCurrentData } = context;
  const { option, chartType } = context.currentData;
  if (chartType === "pie") return;
  return (
    <div>
      <TextInput
        label="Unit"
        value={option.scales.x.title.text}
        onChange={(newUnit) => {
          updateMultipleOptions(setCurrentData, [
            ["scales.x.title.text", newUnit],
            ["scales.y.title.text", newUnit],
          ]);
        }}
      />
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={option.scales.x.title.font.size}
        Unit="px"
        onChange={(newFontSize) => {
          updateMultipleOptions(setCurrentData, [
            ["scales.x.title.font.size", newFontSize],
            ["scales.y.title.font.size", newFontSize],
          ]);
        }}
      />
      <SelectDropDown
        label="Font Weight"
        value={option.scales.x.title.font.weight}
        width={100}
        options={[
          { value: "normal", label: "Normal" },
          { value: "bold", label: "Bold" },
        ]}
        onChange={(newFontWeight) => {
          updateMultipleOptions(setCurrentData, [
            ["scales.x.title.font.weight", newFontWeight],
            ["scales.y.title.font.weight", newFontWeight],
          ]);
        }}
      />
      <ColorSelect
        label="Font Color"
        color={option.scales.x.title.color}
        onChange={(newColor) => {
          updateMultipleOptions(setCurrentData, [
            ["scales.x.title.color", newColor],
            ["scales.y.title.color", newColor],
          ]);
        }}
      />
    </div>
  );
};

export default UnitSetting;
