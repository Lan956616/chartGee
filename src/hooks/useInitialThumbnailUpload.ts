"use client";
import { useEffect, useRef, MutableRefObject } from "react";
import { uploadThumbnail } from "@/utils/uploadThumbnail";
import type { Dispatch, SetStateAction } from "react";
import type { Chart } from "chart.js";
import type { StripDataType } from "@/utils/sampleChartData/projectDataType";
export const useInitialThumbnailUpload = (
  currentData: StripDataType | null,
  showData: boolean,
  uid: string | null,
  projectID: string | null,
  barRef: MutableRefObject<Chart<"bar", number[], unknown> | null>,
  lineRef: MutableRefObject<Chart<"line", number[], unknown> | null>,
  pieRef: MutableRefObject<Chart<"pie", number[], unknown> | null>,
  isUpLoading: boolean,
  setIsUploading: Dispatch<SetStateAction<boolean>>
) => {
  const hasGeneratedThumbnail = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDesktop = window.innerWidth >= 1025;
    const isChartAreaVisible = isDesktop || !showData;
    if (
      isChartAreaVisible &&
      currentData &&
      !hasGeneratedThumbnail.current &&
      !isUpLoading
    ) {
      setIsUploading(true);
      setTimeout(async () => {
        if (!uid || typeof projectID !== "string") return;
        let canvas = null;
        switch (currentData.chartType) {
          case "bar":
            canvas = barRef.current?.canvas;
            break;
          case "line":
            canvas = lineRef.current?.canvas;
            break;
          case "pie":
            canvas = pieRef.current?.canvas;
            break;
        }
        if (!canvas) {
          return;
        }
        try {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          const imageBase64 = canvas.toDataURL("image/png");
          await uploadThumbnail(imageBase64, uid, projectID);
          hasGeneratedThumbnail.current = true;
        } catch (err) {
          console.error("Failed to upload thumbnail:", err);
        } finally {
          setIsUploading(false);
        }
      }, 3000);
    }
  }, [
    showData,
    currentData,
    uid,
    projectID,
    setIsUploading,
    barRef,
    lineRef,
    pieRef,
    isUpLoading,
  ]);
};
