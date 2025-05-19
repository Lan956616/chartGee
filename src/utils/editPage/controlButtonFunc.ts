import {
  blankBarChartData,
  SampleBarChartdata,
  SampleBarChartoptions,
} from "../sampleChartData/barChart";
import {
  blankLineChartData,
  sampleLineChartData,
  sampleLineChartOption,
} from "../sampleChartData/lineChart";
import {
  blankPieChartData,
  samplePieChartData,
  samplePieChartOption,
} from "../sampleChartData/pieChart";
import { getUpdateOption } from "./getUpdateOption";
import { Dispatch, SetStateAction } from "react";
import type { StripDataType } from "../sampleChartData/projectDataType";

export const clearDataOnClick = (
  setCurrentData: Dispatch<SetStateAction<StripDataType | null>>
) => {
  setCurrentData((prev) => {
    if (!prev) return prev;
    switch (prev.chartType) {
      case "bar":
        return {
          ...prev,
          data: blankBarChartData,
          option: getUpdateOption(prev, "plugins.title.text", ""),
        };
      case "line":
        return {
          ...prev,
          data: blankLineChartData,
          option: getUpdateOption(prev, "plugins.title.text", ""),
        };
      case "pie":
        return {
          ...prev,
          data: blankPieChartData,
          option: getUpdateOption(prev, "plugins.title.text", ""),
        };
    }
  });
};
export const resetDataOnClick = (
  setCurrentData: Dispatch<SetStateAction<StripDataType | null>>
) => {
  setCurrentData((prev) => {
    if (!prev) return prev;
    switch (prev.chartType) {
      case "bar":
        return {
          ...prev,
          data: SampleBarChartdata,
          option: getUpdateOption(
            prev,
            "plugins.title.text",
            SampleBarChartoptions.plugins.title.text
          ),
        };
      case "line":
        return {
          ...prev,
          data: sampleLineChartData,
          option: getUpdateOption(
            prev,
            "plugins.title.text",
            sampleLineChartOption.plugins.title.text
          ),
        };
      case "pie":
        return {
          ...prev,
          data: samplePieChartData,
          option: getUpdateOption(
            prev,
            "plugins.title.text",
            samplePieChartOption.plugins.title.text
          ),
        };
    }
  });
};
