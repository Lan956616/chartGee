import Slider from "@/components/settingtab/slider/slider";
import TabBigItem from "@/components/settingtab/tabbigitem/tabbigitem";
import ColorSelect from "@/components/settingtab/colorselect/colorselect";
import { ChartDataContext } from "@/components/ChartDataProvider";
import { useContext } from "react";
import { updateOption } from "@/utils/editPage/updateOptions";

const PiePanel: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context?.currentData) return;
  const { setCurrentData } = context;
  const { option, chartType } = context.currentData;
  if (chartType !== "pie") return;

  return (
    <TabBigItem title="Pies" src="/charts/piechart.png" alt="pie-icon">
      <Slider
        label="Rotation"
        value={option.datasets.pie.rotation}
        min={0}
        max={360}
        Unit="deg"
        onChange={(newDeg) => {
          updateOption(setCurrentData, "datasets.pie.rotation", newDeg);
        }}
      />
      <Slider
        label="Border Radius"
        value={option.datasets.pie.borderRadius}
        min={0}
        max={25}
        Unit="px"
        onChange={(border) => {
          updateOption(setCurrentData, "datasets.pie.borderRadius", border);
        }}
      />
      <Slider
        label="Border Width"
        value={option.datasets.pie.borderWidth}
        min={0}
        max={10}
        Unit="px"
        onChange={(newWidth) => {
          updateOption(setCurrentData, "datasets.pie.borderWidth", newWidth);
        }}
      />

      <ColorSelect
        label="Border Color"
        color={option.datasets.pie.borderColor}
        onChange={(newBorderColor) => {
          updateOption(
            setCurrentData,
            "datasets.pie.borderColor",
            newBorderColor
          );
        }}
      />
    </TabBigItem>
  );
};

export default PiePanel;
