import { SampleBarChartData, SampleBarChartOptions } from "./barChartDataType";
import {
  SampleLineChartData,
  SampleLineChartOption,
} from "./lineChartDataType";

import { SamplePieChartData, SamplePieChartOption } from "./pieChartDataType";

export type ProjectDataType =
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

export type ChartDataContextType =
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
