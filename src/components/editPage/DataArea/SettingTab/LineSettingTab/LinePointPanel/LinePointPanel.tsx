"use client";
import { useContext } from "react";
import { ChartDataContext } from "@/components/ChartDataProvider";
import Slider from "@/components/editPage/DataArea/SettingTab/common/Slider/Slider";
import SelectDropDown from "@/components/editPage/DataArea/SettingTab/common/SelectDropDown/SelectDropDown";
import TabBigItem from "@/components/editPage/DataArea/SettingTab/common/TabBigItem/TabBigItem";
import { updateOption } from "@/utils/editPage/updateOptions";
import { updateMultipleOptions } from "@/utils/editPage/updateMutipleOptions";

const LinePointPanel: React.FC = () => {
  const context = useContext(ChartDataContext);
  if (!context?.currentData) return;
  const { setCurrentData } = context;
  const { option, chartType } = context.currentData;
  if (chartType !== "line") return;
  return (
    <TabBigItem
      title="Lines & Points"
      src="/charts/line.png"
      alt="line&point setting panel"
    >
      <Slider
        label="Line Width"
        value={option.elements.line.borderWidth}
        min={0}
        max={15}
        unit="px"
        onChange={(newWidth) => {
          updateOption(setCurrentData, "elements.line.borderWidth", newWidth);
        }}
      />
      <SelectDropDown
        label="Line Style"
        value={option.elements.line.cubicInterpolationMode}
        width={110}
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
        unit="px"
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
        unit="deg"
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
