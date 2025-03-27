import Slider from "../../slider/slider";
import SelectDropDown from "../../selectdropdown/selectdropdown";
import ColorSelect from "../../colorselect/colorselect";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import { useContext } from "react";
import { handleOptionChange } from "@/utils/updateOptions";
import TextInput from "../../textinput/textinput";
const UnitSetting: React.FC = () => {
  const { option, setOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;

  return (
    <div>
      <TextInput
        label="Unit"
        value={option.scales.x.title.text}
        onChange={(newUnit) => {
          handleOptionChange(setOption, "scales.x.title.text", newUnit);
          handleOptionChange(setOption, "scales.y.title.text", newUnit);
        }}
      />
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={option.scales.x.title.font.size}
        Unit="px"
        onChange={(newFontSize) => {
          handleOptionChange(
            setOption,
            "scales.x.title.font.size",
            newFontSize
          );
          handleOptionChange(
            setOption,
            "scales.y.title.font.size",
            newFontSize
          );
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
          handleOptionChange(
            setOption,
            "scales.x.title.font.weight",
            newFontWeight
          );
          handleOptionChange(
            setOption,
            "scales.y.title.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={option.scales.x.title.color}
        onChange={(newColor) => {
          handleOptionChange(setOption, "scales.x.title.color", newColor);
          handleOptionChange(setOption, "scales.y.title.color", newColor);
        }}
      />
    </div>
  );
};

export default UnitSetting;
