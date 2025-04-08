import { db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {
  SampleBarChartdata,
  SampleBarChartoptions,
} from "./sampleChartData/barChart";
import {
  samplePieChartData,
  samplePieChartOption,
} from "./sampleChartData/pieChart";
import {
  sampleLineChartData,
  sampleLineChartOption,
} from "./sampleChartData/lineChart";
const chartConfig = {
  bar: {
    data: SampleBarChartdata,
    option: SampleBarChartoptions,
  },
  pie: {
    data: samplePieChartData,
    option: samplePieChartOption,
  },
  line: {
    data: sampleLineChartData,
    option: sampleLineChartOption,
  },
};
export const createNewProject = async (
  uid: string,
  chartType: "bar" | "pie" | "line"
) => {
  const config = chartConfig[chartType];
  try {
    const docRef = await addDoc(collection(db, "users", uid, "projects"), {
      chartType,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      data: config.data,
      option: config.option,
    });
    return docRef.id;
  } catch (err) {
    throw err;
  }
};
