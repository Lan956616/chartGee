import TabBigItem from "../tabbigitem/tabbigitem";
import SelectDropDown from "../selectdropdown/selectdropdown";
import Toggle from "../toggle/toggle";
import ColorSelect from "../colorselect/colorselect";
import Slider from "../slider/slider";
import { ChartDataContext } from "@/app/edit/barchart/page";
import { useContext } from "react";

const AppearancePanel: React.FC = () => {
  const { options, setOptions } = useContext(ChartDataContext);
  return (
    <TabBigItem title="Appearance" src="/painting.png" alt="painting-icon">
      <SelectDropDown
        label="Index Axis"
        value={options.indexAxis}
        width={60}
        options={[
          { value: "x", label: "X" },
          { value: "y", label: "Y" },
        ]}
        onChange={(newAxis) => {
          setOptions((prevOption) => {
            return { ...prevOption, indexAxis: newAxis };
          });
        }}
      />
      <Toggle
        label="Show ChartTitle"
        active={options.plugins.title.display}
        onClick={() => {
          setOptions((prevOptions) => {
            return {
              ...prevOptions,
              plugins: {
                ...prevOptions.plugins,
                title: {
                  ...prevOptions.plugins.title,
                  display: !prevOptions.plugins.title.display,
                },
              },
            };
          });
        }}
      />
      {options.plugins.title.display && (
        <>
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
        </>
      )}
    </TabBigItem>
  );
};

export default AppearancePanel;
