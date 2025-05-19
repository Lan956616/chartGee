"use client";
import { uploadToFirestore } from "@/utils/uploadToFirestore";
import type {
  ProjectDataType,
  StripDataType,
} from "@/utils/sampleChartData/projectDataType";
import { useEffect, useRef, useState } from "react";
import deepEqual from "fast-deep-equal";
import { stripProjectData } from "@/utils/stripProjectData";
import { toast } from "react-toastify";
export const useAutoSave = (
  originalData: ProjectDataType | null,
  currentData: StripDataType | null,
  projectID: string | string[] | undefined,
  uid: string | null
) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  useEffect(() => {
    if (!originalData || !currentData || !uid) return;
    if (typeof projectID !== "string") return;
    const strippedOriginal = stripProjectData(originalData);
    if (deepEqual(currentData, strippedOriginal)) return;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(async () => {
      try {
        setIsSaving(true);
        await uploadToFirestore(originalData, currentData, projectID, uid);
      } catch (err) {
        console.error(`Upload Failed:${err}`);
        toast.error("Auto-save failed. Please check your network.");
      } finally {
        setIsSaving(false);
      }
    }, 600);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentData, originalData, projectID, uid]);
  return isSaving;
};
