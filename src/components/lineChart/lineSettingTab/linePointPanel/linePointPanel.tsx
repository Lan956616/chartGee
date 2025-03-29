"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import type { ContextType } from "@/components/ChartDataProvider";
import Slider from "@/components/settingtab/slider/slider";
import SelectDropDown from "@/components/settingtab/selectdropdown/selectdropdown";
import TabBigItem from "@/components/settingtab/tabbigitem/tabbigitem";
import { handleOptionChange } from "@/utils/updateOptions";

const LinePointPanel: React.FC = () => {
  const { lineOption, setLineOption } = useContext(
    ChartDataContext
  ) as unknown as ContextType;

  // point: {
  //   rotation: 0,
  //   radius: 10,
  //   hoverRadius: 10,
  //   pointStyle: "round",
  // },
  return (
    <TabBigItem title="Lines & Points" src="/line.png" alt="line&point-icon">
      <Slider
        label="Line Width"
        value={lineOption.elements.line.borderWidth}
        min={0}
        max={15}
        Unit="px"
        onChange={(newWidth) => {
          handleOptionChange(
            setLineOption,
            "elements.line.borderWidth",
            newWidth
          );
        }}
      />
      <SelectDropDown
        label="Line Style"
        value={lineOption.elements.line.cubicInterpolationMode}
        width={100}
        options={[
          { value: "default", label: "Straight" },
          { value: "monotone", label: "Curve" },
        ]}
        onChange={(newStyle) => {
          handleOptionChange(
            setLineOption,
            "elements.line.cubicInterpolationMode",
            newStyle
          );
        }}
      />
      <Slider
        label="Point Radius"
        value={lineOption.elements.point.radius}
        min={3}
        max={15}
        Unit="px"
        onChange={(newRadius) => {
          handleOptionChange(setLineOption, "elements.point.radius", newRadius);
          handleOptionChange(
            setLineOption,
            "elements.point.hoverRadius",
            newRadius + 2
          );
        }}
      />
      <Slider
        label="Point Rotation"
        value={lineOption.elements.point.rotation}
        min={0}
        max={360}
        Unit="deg"
        onChange={(newDeg) => {
          handleOptionChange(setLineOption, "elements.point.rotation", newDeg);
        }}
      />
      <SelectDropDown
        label="Point Style"
        value={lineOption.elements.point.pointStyle}
        width={140}
        options={[
          { value: "round", label: "Round" },
          { value: "rect", label: "Rect" },
          { value: "rectRounded", label: "RectRounded" },
          { value: "star", label: "Star" },
          { value: "triangle", label: "Triangle" },
        ]}
        onChange={(newStyle) => {
          handleOptionChange(
            setLineOption,
            "elements.point.pointStyle",
            newStyle
          );
        }}
      />
    </TabBigItem>
  );
};

export default LinePointPanel;
