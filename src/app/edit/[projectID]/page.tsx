"use client";
import { useAutoSave } from "@/hooks/useAutoSave";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Chart as ChartJS } from "chart.js";
import DisplayButtons from "@/components/displaybuttons/displaybuttons";
import DataArea from "@/components/dataarea/dataarea";
import styles from "./style.module.css";
import HeaderEditPage from "@/components/headereditpage/headereditpage";
import Sidebar from "@/components/sidebar/sidebar";
import ChartArea from "@/components/chartarea/chartarea";
import ChartDataProvider from "@/components/ChartDataProvider";
import { useAppSelector } from "@/lib/hooks";
import Loading from "@/components/loading/loading";
import NoProject from "@/components/share/noProject/NoProject";
import Spinner from "@/components/loading/spinner/spinner";
import { useProjectData } from "@/hooks/useProjectData";
import { useAutoUploadThumbnail } from "@/hooks/useAutoUploadThumbnail";
import SharePopUp from "@/components/projects/projectCard/sharePopUp/sharePopUp";
import { downAndUploadImage } from "@/utils/downAndUploadImage";
const ChartEditPage: React.FC = () => {
  const { currentUser: uid, isAuthLoading } = useAppSelector((store) => {
    return store.auth;
  });
  const { projectID } = useParams();
  const router = useRouter();
  const [showData, setShowData] = useState(true);
  const [showSharePopUp, setShowSharePopUp] = useState(false);
  const [isDownload, setIsDownload] = useState(false);
  const barRef = useRef<ChartJS<"bar", number[], unknown> | null>(null);
  const lineRef = useRef<ChartJS<"line", number[], unknown> | null>(null);
  const pieRef = useRef<ChartJS<"pie", number[], unknown> | null>(null);

  const handleDownload = async () => {
    if (!currentData) {
      return;
    }
    let canvas = null;
    if (currentData.chartType === "bar") canvas = barRef.current?.canvas;
    else if (currentData.chartType === "line") canvas = lineRef.current?.canvas;
    else if (currentData.chartType === "pie") canvas = pieRef.current?.canvas;
    if (!canvas || !uid || typeof projectID !== "string") return;
    try {
      setIsDownload(true);
      await downAndUploadImage(
        canvas,
        uid,
        projectID,
        `chart-${Date.now()}.png`
      );
    } catch (err) {
      console.error("Download failed.", err);
    } finally {
      setIsDownload(false);
    }
  };
  useEffect(() => {
    if (isAuthLoading) {
      return;
    }
    if (!isAuthLoading && !uid) {
      router.push("/login");
    }
  }, [router, uid, isAuthLoading]);
  const {
    isLoading,
    originalData,
    currentData,
    showNoProject,
    setCurrentData,
  } = useProjectData(uid, projectID);
  const isSaving = useAutoSave(originalData, currentData, projectID, uid);
  const { isUploading } = useAutoUploadThumbnail(
    currentData?.chartType,
    barRef,
    lineRef,
    pieRef
  );
  if (isAuthLoading) return <Loading />;
  return (
    <div className={styles.pageContainer}>
      <HeaderEditPage
        isSaving={isSaving}
        showNoProject={showNoProject}
        isUploading={isUploading}
        setShowSharePopUp={setShowSharePopUp}
        handleDownload={handleDownload}
        isDownload={isDownload}
      />
      <Sidebar />
      <DisplayButtons
        showData={showData}
        setShowData={setShowData}
        showNoProject={showNoProject}
        currentData={currentData}
      />
      <main
        className={`${styles.main} ${
          (isLoading || showNoProject) && styles.centeredContent
        }`}
      >
        <ChartDataProvider value={{ currentData, setCurrentData }}>
          {isLoading && <Spinner />}
          {showNoProject && <NoProject />}

          {!isLoading && !showNoProject && (
            <>
              <DataArea hideOnMobile={!showData} />
              <ChartArea
                hideOnMobile={showData}
                pieRef={pieRef}
                lineRef={lineRef}
                barRef={barRef}
              />
            </>
          )}
        </ChartDataProvider>
      </main>
      {showSharePopUp && (
        <SharePopUp
          uid={uid as string}
          projectID={projectID as string}
          setShowSharePopup={setShowSharePopUp}
        />
      )}
    </div>
  );
};

export default ChartEditPage;
