import { db } from "./firebase";
import { deleteDoc, doc } from "firebase/firestore";
export const handleDeleteProject = async (uid: string, projectID: string) => {
  const projectRef = doc(db, "users", uid, "projects", projectID);
  await deleteDoc(projectRef);
};
