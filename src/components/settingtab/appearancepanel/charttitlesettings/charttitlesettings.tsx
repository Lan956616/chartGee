import styles from "./charttitlesettings.module.css";
import Slider from "../../slider/slider";
import SelectDropDown from "../../selectdropdown/selectdropdown";
import ColorSelect from "../../colorselect/colorselect";
import { ChartDataContext } from "@/app/edit/barchart/page";
import { useContext } from "react";
import { handleOptionChange } from "@/utils/updateOptions";

const ChartTitleSetting: React.FC = () => {
  const { options, setOptions } = useContext(ChartDataContext);

  return (
    <div className={styles.chartTitleSettingContainer}>
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={options.plugins.title.font.size}
        onChange={(newFontSize) => {
          handleOptionChange(
            setOptions,
            "plugins.title.font.size",
            newFontSize
          );
        }}
      />
      <SelectDropDown
        label="Font Weight"
        value={options.plugins.title.font.weight}
        width={100}
        options={[
          { value: "normal", label: "Normal" },
          { value: "bold", label: "Bold" },
        ]}
        onChange={(newFontWeight) => {
          handleOptionChange(
            setOptions,
            "plugins.title.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={options.plugins.title.color}
        onChange={(newColor) => {
          handleOptionChange(setOptions, "plugins.title.color", newColor);
        }}
      />
    </div>
  );
};

export default ChartTitleSetting;
