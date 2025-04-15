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

// export type ChartDataContextType =
//   | {
//       chartType: "bar";
//       data: SampleBarChartData;
//       option: SampleBarChartOptions;
//     }
//   | {
//       chartType: "pie";
//       data: SamplePieChartData;
//       option: SamplePieChartOption;
//     }
//   | {
//       chartType: "line";
//       data: SampleLineChartData;
//       option: SampleLineChartOption;
//     };
