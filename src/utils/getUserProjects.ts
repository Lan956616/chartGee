import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";
import type { ProjectDataType } from "./sampleChartData/projectDataType";

export const getUserProjects = async (
  uid: string
): Promise<(ProjectDataType & { id: string })[]> => {
  const projectsCol = collection(db, "users", uid, "projects");
  const querySnapShot = await getDocs(projectsCol);
  const projects = querySnapShot.docs.map((doc) => {
    return {
      id: doc.id,
      ...(doc.data() as ProjectDataType),
    };
  });
  return projects;
};
