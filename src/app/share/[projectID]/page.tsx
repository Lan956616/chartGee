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
      if (!projectID) return;
      if (typeof projectID !== "string") {
        setShowNotFind(true);
        return;
      }
      try {
        const docRef = doc(db, "publicProjects", projectID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const project = docSnap.data() as StripDataType;
          setIsLoading(false);
          setProject(project);
        } else {
          setIsLoading(false);
          setShowNotFind(true);
          return;
        }
      } catch (err) {
        setIsLoading(false);
        console.error(err);
        setShowNotFind(true);
      }
    };

    fetchData();
  }, [projectID]);

  return (
    <div className={styles.sharePageContainer}>
      <HeaderSharePage
        projectID={projectID as string}
        isLoading={isLoading}
        showNotFind={showNotFind}
      />
      {isLoading && <Spinner white={true} />}
      {showNotFind && <NoProject />}
      {!isLoading && project && (
        <div className={styles.chartWrapper}>
          <ChartRender project={project} />
        </div>
      )}
    </div>
  );
};

export default SharePage;
