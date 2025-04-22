"use client";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { useParams } from "next/navigation";
import { uploadThumbnail } from "@/utils/uploadThumbnail";
import { Chart as ChartJS } from "chart.js";
export const useAutoUploadThumbnail = (
  chartType: "bar" | "line" | "pie" | undefined,
  barRef: React.RefObject<ChartJS<"bar", number[], unknown> | null>,
  lineRef: React.RefObject<ChartJS<"line", number[], unknown> | null>,
  pieRef: React.RefObject<ChartJS<"pie", number[], unknown> | null>
) => {
  const [isUploading, setIsUploading] = useState(false);
  const uid = useAppSelector((store) => store.auth.currentUser);
  const { projectID } = useParams();
  useEffect(() => {
    if (!uid || typeof projectID !== "string") return;
    let canvas: HTMLCanvasElement | null = null;
    if (chartType === "bar") canvas = barRef.current?.canvas || null;
    if (chartType === "line") canvas = lineRef.current?.canvas || null;
    if (chartType === "pie") canvas = pieRef.current?.canvas || null;
    if (!canvas) return;
    setIsUploading(true);
    const timeout = setTimeout(async () => {
      try {
        const imageBase64 = canvas.toDataURL("image/png");
        await uploadThumbnail(imageBase64, uid, projectID);
      } catch (err) {
        console.error(`upload thumbnail failed:${err}`);
      } finally {
        setIsUploading(false);
      }
    }, 1000);
    return () => {
      clearTimeout(timeout);
      setIsUploading(false);
    };
  }, [uid, projectID, chartType, barRef, lineRef, pieRef]);
  return { isUploading };
};
