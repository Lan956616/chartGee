import { MutableRefObject } from "react";
import { Chart as ChartJS } from "chart.js";
import { SampleBarChartData, SampleBarChartOptions } from "./barChartDataType";
import {
  SampleLineChartData,
  SampleLineChartOption,
} from "./lineChartDataType";
import { SamplePieChartData, SamplePieChartOption } from "./pieChartDataType";
import { Timestamp } from "firebase/firestore";
export type ProjectDataType =
  | {
      chartType: "bar";
      data: SampleBarChartData;
      option: SampleBarChartOptions;
      updatedAt: Timestamp;
      createdAt: Timestamp;
      isPublic: boolean;
      imageURL?: string;
    }
  | {
      chartType: "pie";
      data: SamplePieChartData;
      option: SamplePieChartOption;
      updatedAt: Timestamp;
      createdAt: Timestamp;
      isPublic: boolean;
      imageURL?: string;
    }
  | {
      chartType: "line";
      data: SampleLineChartData;
      option: SampleLineChartOption;
      updatedAt: Timestamp;
      createdAt: Timestamp;
      isPublic: boolean;
      imageURL?: string;
    };

export type StripDataType =
  | {
      chartType: "bar";
      data: SampleBarChartData;
      option: SampleBarChartOptions;
      createdAt: Timestamp;
    }
  | {
      chartType: "pie";
      data: SamplePieChartData;
      option: SamplePieChartOption;
      createdAt: Timestamp;
    }
  | {
      chartType: "line";
      data: SampleLineChartData;
      option: SampleLineChartOption;
      createdAt: Timestamp;
    };

export type EditRenderChartProps = StripDataType & {
  barRef: MutableRefObject<ChartJS<"bar", unknown, unknown> | null>;
  lineRef: MutableRefObject<ChartJS<"line", unknown, unknown> | null>;
  pieRef: MutableRefObject<ChartJS<"pie", unknown, unknown> | null>;
};
