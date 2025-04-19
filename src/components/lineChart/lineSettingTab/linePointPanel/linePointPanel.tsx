"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import Slider from "@/components/settingtab/slider/slider";
import SelectDropDown from "@/components/settingtab/selectdropdown/selectdropdown";
import TabBigItem from "@/components/settingtab/tabbigitem/tabbigitem";
import { updateOption } from "@/utils/updateOptions";
import { updateMultipleOptions } from "@/utils/updateMutipleOptions";

const LinePointPanel: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context?.currentData) return;
  const { setCurrentData } = context;
  const { option, chartType } = context.currentData;
  if (chartType !== "line") return;
  return (
    <TabBigItem title="Lines & Points" src="/line.png" alt="line&point-icon">
      <Slider
        label="Line Width"
        value={option.elements.line.borderWidth}
        min={0}
        max={15}
        Unit="px"
        onChange={(newWidth) => {
          updateOption(setCurrentData, "elements.line.borderWidth", newWidth);
        }}
      />
      <SelectDropDown
        label="Line Style"
        value={option.elements.line.cubicInterpolationMode}
        width={100}
        options={[
          { value: "default", label: "Straight" },
          { value: "monotone", label: "Curve" },
        ]}
        onChange={(newStyle) => {
          updateOption(
            setCurrentData,
            "elements.line.cubicInterpolationMode",
            newStyle
          );
        }}
      />
      <Slider
        label="Point Radius"
        value={option.elements.point.radius}
        min={3}
        max={15}
        Unit="px"
        onChange={(newRadius) => {
          updateMultipleOptions(setCurrentData, [
            ["elements.point.radius", newRadius],
            ["elements.point.hoverRadius", newRadius + 2],
          ]);
        }}
      />
      <Slider
        label="Point Rotation"
        value={option.elements.point.rotation}
        min={0}
        max={360}
        Unit="deg"
        onChange={(newDeg) => {
          updateOption(setCurrentData, "elements.point.rotation", newDeg);
        }}
      />
      <SelectDropDown
        label="Point Style"
        value={option.elements.point.pointStyle}
        width={140}
        options={[
          { value: "round", label: "Round" },
          { value: "rect", label: "Rect" },
          { value: "rectRounded", label: "RectRounded" },
          { value: "star", label: "Star" },
          { value: "triangle", label: "Triangle" },
        ]}
        onChange={(newStyle) => {
          updateOption(setCurrentData, "elements.point.pointStyle", newStyle);
        }}
      />
    </TabBigItem>
  );
};

export default LinePointPanel;
