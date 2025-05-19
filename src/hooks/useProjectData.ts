"use client";
import { useState, useEffect } from "react";
import { db } from "@/utils/firebase/firebase";
import { onSnapshot, doc } from "firebase/firestore";
import type {
  ProjectDataType,
  StripDataType,
} from "@/utils/sampleChartData/projectDataType";
import { stripProjectData } from "@/utils/editPage/stripProjectData";
import { toast } from "react-toastify";
export const useProjectData = (
  uid: string | null,
  projectID: string | string[] | undefined
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showNoProject, setShowNoProject] = useState(false);
  const [originalData, setOriginalData] = useState<ProjectDataType | null>(
    null
  );
  const [currentData, setCurrentData] = useState<StripDataType | null>(null);
  useEffect(() => {
    if (!uid || !projectID) return;
    if (typeof projectID !== "string") return;
    setIsLoading(true);
    const projectRef = doc(db, "users", uid, "projects", projectID);
    const unsubscribe = onSnapshot(
      projectRef,
      (snapShot) => {
        if (!snapShot.exists()) {
          setIsLoading(false);
          setShowNoProject(true);
          return;
        }
        const project = snapShot.data();
        setIsLoading(false);
        setOriginalData(project as ProjectDataType);
        setCurrentData((prev) => {
          if (prev === null) {
            return stripProjectData(project as ProjectDataType);
          }
          return prev;
        });
      },
      (error) => {
        console.error("get user project failed:", error);
        toast.error("Something Went Wrong! Please try again.");
        setIsLoading(false);
        setShowNoProject(true);
      }
    );
    return () => unsubscribe();
  }, [uid, projectID]);
  return {
    isLoading,
    showNoProject,
    originalData,
    currentData,
    setCurrentData,
  };
};
