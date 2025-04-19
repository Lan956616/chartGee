import styles from "./charttitlesettings.module.css";
import Slider from "../../slider/slider";
import SelectDropDown from "../../selectdropdown/selectdropdown";
import ColorSelect from "../../colorselect/colorselect";
import { ChartDataContext } from "@/components/ChartDataProvider";
import { useContext } from "react";
import { updateOption } from "@/utils/updateOptions";

const ChartTitleSetting: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context?.currentData) return;
  const { setCurrentData } = context;
  const { option } = context.currentData;
  return (
    <div className={styles.chartTitleSettingContainer}>
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={option.plugins.title.font.size}
        Unit="px"
        onChange={(newFontSize) => {
          updateOption(setCurrentData, "plugins.title.font.size", newFontSize);
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
          updateOption(
            setCurrentData,
            "plugins.title.font.weight",
            newFontWeight
          );
        }}
      />
      <ColorSelect
        label="Font Color"
        color={option.plugins.title.color}
        onChange={(newColor) => {
          updateOption(setCurrentData, "plugins.title.color", newColor);
        }}
      />
    </div>
  );
};

export default ChartTitleSetting;
