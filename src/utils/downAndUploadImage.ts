import { uploadThumbnail } from "./uploadThumbnail";

export const downAndUploadImage = async (
  canvas: HTMLCanvasElement,
  uid: string,
  projectID: string,
  fileName: string
) => {
  if (!canvas) {
    return;
  }
  const base64 = canvas.toDataURL("image/png");
  await uploadThumbnail(base64, uid, projectID);
  const link = document.createElement("a");
  link.href = base64;
  link.download = fileName;
  link.click();
};
