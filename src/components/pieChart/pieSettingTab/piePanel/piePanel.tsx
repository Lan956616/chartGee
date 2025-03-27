import Slider from "@/components/settingtab/slider/slider";
import TabBigItem from "@/components/settingtab/tabbigitem/tabbigitem";
import ColorSelect from "@/components/settingtab/colorselect/colorselect";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import { useContext } from "react";
import { handleOptionChange } from "@/utils/updateOptions";

const PiePanel: React.FC = () => {
  const { pieOption, setPieOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;

  return (
    <TabBigItem title="Pies" src="/piechart.png" alt="pie-icon">
      <Slider
        label="Rotation"
        value={pieOption.datasets.pie.rotation}
        min={0}
        max={360}
        Unit="deg"
        onChange={(newDeg) => {
          handleOptionChange(setPieOption, "datasets.pie.rotation", newDeg);
        }}
      />
      <Slider
        label="Border Width"
        value={pieOption.datasets.pie.borderWidth}
        min={0}
        max={10}
        Unit="px"
        onChange={(newWidth) => {
          handleOptionChange(
            setPieOption,
            "datasets.pie.borderWidth",
            newWidth
          );
        }}
      />
      <Slider
        label="Border Radius"
        value={pieOption.datasets.pie.borderRadius}
        min={0}
        max={25}
        Unit="px"
        onChange={(border) => {
          handleOptionChange(setPieOption, "datasets.pie.borderRadius", border);
        }}
      />
      <ColorSelect
        label="Border Color"
        color={pieOption.datasets.pie.borderColor}
        onChange={(newBorderColor) => {
          handleOptionChange(
            setPieOption,
            "datasets.pie.borderColor",
            newBorderColor
          );
        }}
      />
    </TabBigItem>
  );
};

export default PiePanel;
