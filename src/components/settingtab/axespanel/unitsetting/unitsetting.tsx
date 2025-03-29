import Slider from "../../slider/slider";
import SelectDropDown from "../../selectdropdown/selectdropdown";
import ColorSelect from "../../colorselect/colorselect";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import { useContext } from "react";
import { handleOptionChange } from "@/utils/updateOptions";
import TextInput from "../../textinput/textinput";
type UnitSettingProps = { chartType: "bar" | "line" };
const UnitSetting: React.FC<UnitSettingProps> = ({ chartType }) => {
  const { option, setOption, lineOption, setLineOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;
  const Option = chartType === "bar" ? option : lineOption;
  const SetOption = chartType === "bar" ? setOption : setLineOption;
  return (
    <div>
      <TextInput
        label="Unit"
        value={Option.scales.x.title.text}
        onChange={(newUnit) => {
          handleOptionChange(SetOption, "scales.x.title.text", newUnit);
          handleOptionChange(SetOption, "scales.y.title.text", newUnit);
        }}
      />
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={Option.scales.x.title.font.size}
        Unit="px"
        onChange={(newFontSize) => {
          handleOptionChange(
            SetOption,
            "scales.x.title.font.size",
            newFontSize
          );
          handleOptionChange(
            SetOption,
            "scales.y.title.font.size",
            newFontSize
          );
        }}
      />
      <SelectDropDown
        label="Font Weight"
        value={Option.scales.x.title.font.weight}
        width={100}
        options={[
          { value: "normal", label: "Normal" },
          { value: "bold", label: "Bold" },
        ]}
        onChange={(newFontWeight) => {
          handleOptionChange(
            SetOption,
            "scales.x.title.font.weight",
            newFontWeight
          );
          handleOptionChange(
            SetOption,
            "scales.y.title.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={Option.scales.x.title.color}
        onChange={(newColor) => {
          handleOptionChange(SetOption, "scales.x.title.color", newColor);
          handleOptionChange(SetOption, "scales.y.title.color", newColor);
        }}
      />
    </div>
  );
};

export default UnitSetting;
