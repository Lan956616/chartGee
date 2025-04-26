"use client";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import HeaderSharePage from "@/components/share/header/headerSharePage";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import type { StripDataType } from "@/utils/sampleChartData/projectDataType";
import Spinner from "@/components/loading/spinner/spinner";
import NoProject from "@/components/share/noProject/NoProject";
import ChartRender from "@/components/share/chartRender/chartRender";
const SharePage: React.FC = () => {
  const { projectID } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [showNotFind, setShowNotFind] = useState(false);
  const [project, setProject] = useState<StripDataType | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      if (!projectID || typeof projectID !== "string") {
        setIsLoading(false);
        setShowNotFind(true);
        return;
      }
      try {
        const docRef = doc(db, "publicProjects", projectID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const project = docSnap.data() as StripDataType;
          setProject(project);
        } else {
          setShowNotFind(true);
        }
      } catch (err) {
        console.error(err);
        setShowNotFind(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [projectID]);
  return (
    <div className={styles.sharePageContainer}>
      <HeaderSharePage />
      {isLoading && <Spinner white={true} />}
      {showNotFind && <NoProject />}
      {!isLoading && project && (
        <div
          className={`${styles.chartWrapper} ${
            project.option.aspectRatio === 1 ? styles.square : styles.rectangle
          }`}
        >
          <ChartRender project={project} />
        </div>
      )}
    </div>
  );
};

export default SharePage;
