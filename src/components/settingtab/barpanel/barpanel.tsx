import Slider from "../slider/slider";
import TabBigItem from "../tabbigitem/tabbigitem";
import ColorSelect from "../colorselect/colorselect";
import { ChartDataContext } from "@/app/edit/barchart/page";
import { useContext } from "react";
import lodash, { set } from "lodash";
const BarPanel: React.FC = () => {
  const { options, setOptions } = useContext(ChartDataContext);
  const handleOptionChange = (key: string, value: number | string) => {
    setOptions((prevOptions) => {
      const newOptions = lodash.cloneDeep(prevOptions);
      set(newOptions, key, value);
      return newOptions;
    });
  };
  return (
    <TabBigItem title="Bars" src="/blackgraph.png" alt="graph-icon">
      <Slider
        label="Width"
        min={5}
        max={50}
        value={options.barThickness}
        onChange={(newWidth) => {
          handleOptionChange("barThickness", newWidth);
        }}
      />
      <Slider
        label="Border Radius"
        value={options.borderRadius}
        min={0}
        max={Math.floor(options.barThickness / 2)}
        onChange={(border) => {
          handleOptionChange("borderRadius", border);
        }}
      />
      <Slider
        label="Border Width"
        value={options.borderWidth}
        min={0}
        max={Math.floor(options.barThickness / 3)}
        onChange={(newWidth) => {
          handleOptionChange("borderWidth", newWidth);
        }}
      />
      <ColorSelect
        label="Border Color"
        color={options.borderColor}
        onChange={(newBorderColor) => {
          handleOptionChange("borderColor", newBorderColor);
        }}
      />
    </TabBigItem>
  );
};

export default BarPanel;
