"use client";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading/loading";
import type { ProjectDataType } from "@/utils/sampleChartData/projectDataType";
import ErrorMessage from "@/components/auth/errorMessage/errorMessage";
import { getUserProjects } from "@/utils/getUserProjects";
import { FirebaseError } from "firebase/app";
const ProjectPage: React.FC = () => {
  const router = useRouter();
  const { isAuthLoading, currentUser: uid } = useAppSelector((store) => {
    return store.auth;
  });
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<
    (ProjectDataType & { id: string })[]
  >([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkAuthAndGetProjects = async () => {
      if (isAuthLoading) return;
      if (!uid) {
        router.push("/login");
        return;
      }
      try {
        const projects = await getUserProjects(uid);
        setProjects(projects);
      } catch (err: unknown) {
        if (err instanceof FirebaseError) {
          setError(err.message);
        } else setError("Get Graphs failed. Please try again");
      } finally {
        setIsLoading(false);
      }
    };
    checkAuthAndGetProjects();
  }, [uid, isAuthLoading, router]);

  if (isAuthLoading) return <Loading />;
  if (error) {
    return <ErrorMessage error={error} />;
  }
  if (!isLoading && projects.length === 0) {
    return <p>empty</p>;
  }

  return <p>projects</p>;
};

export default ProjectPage;
