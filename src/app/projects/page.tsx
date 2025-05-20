"use client";
import styles from "./style.module.css";
import { useAppSelector } from "@/lib/hooks";
import { useUserProjects } from "@/hooks/useUserProjects";
import Loading from "@/components/common/Loading_temp/Loading";
import ErrorMessage from "@/components/auth/ErrorMessage/ErrorMessage";
import HeaderProjectPage from "@/components/projectsPage/header/HeaderProjectPage";
import SidebarProjectPage from "@/components/projectsPage/sidebar/SidebarProjectPage";
import Spinner from "@/components/common/Loading_temp/Spinner/Spinner";
import EmptyProject from "@/components/projectsPage/EmptyProject/EmptyProject";
import ProjectCard from "@/components/projectsPage/ProjectCard/ProjectCard";

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
        <p className={styles.title}>My Charts</p>
        {isLoading && (
          <div className={styles.centeredContent}>
            <Spinner />
          </div>
        )}
        {error && (
          <div className={styles.centeredContent}>
            <ErrorMessage error={error} />
          </div>
        )}

        {!isLoading && !error && projects.length === 0 && (
          <div className={styles.centeredContent}>
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
