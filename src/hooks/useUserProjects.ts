"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { ProjectDataType } from "@/utils/sampleChartData/projectDataType";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/utils/firebase";
export const useUserProjects = (uid: string | null, isAuthLoading: boolean) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<
    (ProjectDataType & { id: string })[]
  >([]);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!uid) {
      router.push("/login");
      return;
    }
    setError("");
    const projectsCol = collection(db, "users", uid, "projects");
    const q = query(projectsCol, orderBy("updatedAt", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snapShot) => {
        const projects = snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...(doc.data() as ProjectDataType),
          };
        });
        setProjects(projects);
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
    return () => unsubscribe();
  }, [uid, isAuthLoading, router]);
  return { projects, isLoading, error };
};
