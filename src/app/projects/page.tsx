"use client";
import styles from "./style.module.css";
import { useAppSelector } from "@/lib/hooks";
import { useUserProjects } from "@/hooks/useUserProjects";
import Loading from "@/components/loading/loading";
import ErrorMessage from "@/components/auth/errorMessage/errorMessage";
import HeaderProjectPage from "@/components/projects/header/headerProjectPage";
import SidebarProjectPage from "@/components/projects/sidebar/sidebarProjectPage";
import Spinner from "@/components/loading/spinner/spinner";
import EmptyProject from "@/components/projects/emptyProject/emptyProject";
import ProjectCard from "@/components/projects/projectCard/projectCard";

const ProjectPage: React.FC = () => {
  const { isAuthLoading, currentUser: uid } = useAppSelector((store) => {
    return store.auth;
  });
  const { projects, isLoading, error } = useUserProjects(uid, isAuthLoading);
  if (isAuthLoading) return <Loading />;
  return (
    <div className={styles.projectsPageContainer}>
      <HeaderProjectPage />
      <SidebarProjectPage />
      <div className={styles.mainContainer}>
        <p className={styles.title}>My Graphs</p>
        {isLoading && (
          <div className={styles.projectsContainer}>
            <Spinner />
          </div>
        )}
        {error && (
          <div className={styles.projectsContainer}>
            <ErrorMessage error={error} />
          </div>
        )}

        {!isLoading && !error && projects.length === 0 && (
          <div className={styles.projectsContainer}>
            <EmptyProject />
          </div>
        )}

        {!isLoading && !error && projects.length > 0 && (
          <div className={styles.cardListWrapper}>
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  updatedAt={project.updatedAt.toDate().toLocaleString()}
                  title={project.option.plugins.title.text}
                  chartType={project.chartType}
                  id={project.id}
                  uid={uid as string}
                  imageURL={project.imageURL}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
