import styles from "./charttitlesettings.module.css";
import Slider from "../../slider/slider";
import SelectDropDown from "../../selectdropdown/selectdropdown";
import ColorSelect from "../../colorselect/colorselect";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import { useContext } from "react";
import { handleOptionChange } from "@/utils/updateOptions";

const ChartTitleSetting: React.FC = () => {
  const { option, setOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;

  return (
    <div className={styles.chartTitleSettingContainer}>
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={option.plugins.title.font.size}
        onChange={(newFontSize) => {
          handleOptionChange(setOption, "plugins.title.font.size", newFontSize);
        }}
      />
      <SelectDropDown
        label="Font Weight"
        value={option.plugins.title.font.weight}
        width={100}
        options={[
          { value: "normal", label: "Normal" },
          { value: "bold", label: "Bold" },
        ]}
        onChange={(newFontWeight) => {
          handleOptionChange(
            setOption,
            "plugins.title.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={option.plugins.title.color}
        onChange={(newColor) => {
          handleOptionChange(setOption, "plugins.title.color", newColor);
        }}
      />
    </div>
  );
};

export default ChartTitleSetting;
