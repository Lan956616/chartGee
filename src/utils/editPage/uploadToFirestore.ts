import type {
  ProjectDataType,
  StripDataType,
} from "../sampleChartData/projectDataType";
import { db } from "../firebase/firebase";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
export const uploadToFirestore = async (
  originalData: ProjectDataType,
  currentData: StripDataType,
  projectID: string,
  uid: string
) => {
  const projectRef = doc(db, "users", uid, "projects", projectID);
  await updateDoc(projectRef, {
    ...currentData,
    updatedAt: serverTimestamp(),
  });
  if (originalData.isPublic) {
    const publicProjectRef = doc(db, "publicProjects", projectID);
    await updateDoc(publicProjectRef, {
      ...currentData,
    });
  }
};
