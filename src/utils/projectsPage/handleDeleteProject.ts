import { db, storage } from "../firebase/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
export const handleDeleteProject = async (uid: string, projectID: string) => {
  const projectRef = doc(db, "users", uid, "projects", projectID);
  const publicProjectRef = doc(db, "publicProjects", projectID);
  const thumbnailRef = ref(storage, `thumbnails/${uid}/${projectID}.png`);
  await Promise.all([
    deleteDoc(projectRef),
    deleteDoc(publicProjectRef),
    deleteObject(thumbnailRef),
  ]);
};
