import styles from "./charttitlesettings.module.css";
import Slider from "../../slider/slider";
import SelectDropDown from "../../selectdropdown/selectdropdown";
import ColorSelect from "../../colorselect/colorselect";
import { ChartDataContext } from "@/app/edit/barchart/page";
import { useContext } from "react";
import lodash, { set } from "lodash";

const ChartTitleSetting: React.FC = () => {
  const { options, setOptions } = useContext(ChartDataContext);
  const handleOptionChange = (
    key: string,
    value: number | string | boolean
  ) => {
    setOptions((prevOptions) => {
      const newOptions = lodash.cloneDeep(prevOptions);
      set(newOptions, key, value);
      return newOptions;
    });
  };
  return (
    <div className={styles.chartTitleSettingContainer}>
      <Slider
        label="Font Size"
        min={6}
        max={40}
        value={options.plugins.title.font.size}
        onChange={(newFontSize) => {
          setOptions((prevOption) => {
            return {
              ...prevOption,
              plugins: {
                ...prevOption.plugins,
                title: {
                  ...prevOption.plugins.title,
                  font: {
                    ...prevOption.plugins.title.font,
                    size: newFontSize,
                  },
                },
              },
            };
          });
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
          setOptions((prevOption) => {
            return {
              ...prevOption,
              plugins: {
                ...prevOption.plugins,
                title: {
                  ...prevOption.plugins.title,
                  font: {
                    ...prevOption.plugins.title.font,
                    weight: newFontWeight,
                  },
                },
              },
            };
          });
        }}
      />
      <ColorSelect
        label="Font Color"
        color={options.plugins.title.color}
        onChange={(newColor) => {
          setOptions((prevOption) => {
            return {
              ...prevOption,
              plugins: {
                ...prevOption.plugins,
                title: {
                  ...prevOption.plugins.title,
                  color: newColor,
                },
              },
            };
          });
        }}
      />
    </div>
  );
};

export default ChartTitleSetting;
