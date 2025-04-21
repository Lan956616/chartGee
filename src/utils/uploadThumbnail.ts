import { updateDoc, doc } from "firebase/firestore";
import { db, storage } from "./firebase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

export const uploadThumbnail = async (
  base64: string,
  uid: string,
  projectID: string
) => {
  const imageRef = ref(storage, `thumbnails/${uid}/${projectID}.png`);
  const projectRef = doc(db, "users", uid, "projects", projectID);
  const base64Data = base64.replace(/^data:image\/\w+;base64,/, "");
  await uploadString(imageRef, base64Data, "base64");
  const downloadUrl = await getDownloadURL(imageRef);
  await updateDoc(projectRef, { imageURL: downloadUrl });
};
