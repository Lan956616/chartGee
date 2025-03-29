import styles from "./charttitlesettings.module.css";
import Slider from "../../slider/slider";
import SelectDropDown from "../../selectdropdown/selectdropdown";
import ColorSelect from "../../colorselect/colorselect";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import { useContext } from "react";
import { handleOptionChange } from "@/utils/updateOptions";

type ChartTitleSettingProps = {
  chartType: "bar" | "line" | "pie";
};
const ChartTitleSetting: React.FC<ChartTitleSettingProps> = ({ chartType }) => {
  const {
    option,
    setOption,
    lineOption,
    setLineOption,
    pieOption,
    setPieOption,
  } = useContext(ChartDataContext) as unknown as ContextType;

  const Option =
    chartType === "bar" ? option : chartType === "pie" ? pieOption : lineOption;
  const SetOption =
    chartType === "bar"
      ? setOption
      : chartType === "pie"
      ? setPieOption
      : setLineOption;

  return (
    <div className={styles.chartTitleSettingContainer}>
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={Option.plugins.title.font.size}
        Unit="px"
        onChange={(newFontSize) => {
          handleOptionChange(SetOption, "plugins.title.font.size", newFontSize);
        }}
      />
      <SelectDropDown
        label="Font Weight"
        value={Option.plugins.title.font.weight}
        width={100}
        options={[
          { value: "normal", label: "Normal" },
          { value: "bold", label: "Bold" },
        ]}
        onChange={(newFontWeight) => {
          handleOptionChange(
            SetOption,
            "plugins.title.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={Option.plugins.title.color}
        onChange={(newColor) => {
          handleOptionChange(SetOption, "plugins.title.color", newColor);
        }}
      />
    </div>
  );
};

export default ChartTitleSetting;
