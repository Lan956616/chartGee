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
    }
  | {
      chartType: "pie";
      data: SamplePieChartData;
      option: SamplePieChartOption;
      updatedAt: Timestamp;
      createdAt: Timestamp;
      isPublic: boolean;
    }
  | {
      chartType: "line";
      data: SampleLineChartData;
      option: SampleLineChartOption;
      updatedAt: Timestamp;
      createdAt: Timestamp;
      isPublic: boolean;
    };

export type RenderDataType =
  | {
      chartType: "bar";
      data: SampleBarChartData;
      option: SampleBarChartOptions;
    }
  | {
      chartType: "pie";
      data: SamplePieChartData;
      option: SamplePieChartOption;
    }
  | {
      chartType: "line";
      data: SampleLineChartData;
      option: SampleLineChartOption;
    };

export type ShareDataType =
  | {
      chartType: "bar";
      data: SampleBarChartData;
      option: SampleBarChartOptions;
      updatedAt: Timestamp;
      createdAt: Timestamp;
    }
  | {
      chartType: "pie";
      data: SamplePieChartData;
      option: SamplePieChartOption;
      updatedAt: Timestamp;
      createdAt: Timestamp;
    }
  | {
      chartType: "line";
      data: SampleLineChartData;
      option: SampleLineChartOption;
      updatedAt: Timestamp;
      createdAt: Timestamp;
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
