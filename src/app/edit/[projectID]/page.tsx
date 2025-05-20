"use client";
import { useAutoSave } from "@/hooks/useAutoSave";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import { Chart as ChartJS } from "chart.js";
import DisplayButtons from "@/components/editPage/DisplayButtons/DisplayButtons";
import DataArea from "@/components/editPage/DataArea/DataArea";
import styles from "./style.module.css";
import HeaderEditPage from "@/components/editPage/HeaderEditPage/HeaderEditPage";
import Sidebar from "@/components/editPage/SideBar/SideBar";
import ChartArea from "@/components/editPage/ChartArea/ChartArea";
import ChartDataProvider from "@/components/ChartDataProvider";
import { useAppSelector } from "@/lib/hooks";
import Loading from "@/components/common/Loading/Loading";
import NoProject from "@/components/sharePage/NoProject/NoProject";
import Spinner from "@/components/common/Loading/Spinner/Spinner";
import SharePopUp from "@/components/projectsPage/ProjectCard_temp/SharePopUp_temp/SharePopUp_temp";
import { downAndUploadImage } from "@/utils/editPage/downAndUploadImage";
import { useProjectData } from "@/hooks/useProjectData";
import { useInitialThumbnailUpload } from "@/hooks/useInitialThumbnailUpload";
import { toast } from "react-toastify";
import { getFileName } from "@/utils/editPage/getFileName";
const ChartEditPage: React.FC = () => {
  const { currentUser: uid, isAuthLoading } = useAppSelector((store) => {
    return store.auth;
  });
  const { projectID } = useParams();
  const router = useRouter();
  const [showData, setShowData] = useState(true);
  const [showSharePopUp, setShowSharePopUp] = useState(false);
  const [isDownload, setIsDownload] = useState(false);
  const barRef = useRef<ChartJS<"bar", number[], unknown> | null>(
    null
  ) as MutableRefObject<ChartJS<"bar", number[], unknown> | null>;
  const lineRef = useRef<ChartJS<"line", number[], unknown> | null>(
    null
  ) as MutableRefObject<ChartJS<"line", number[], unknown> | null>;
  const pieRef = useRef<ChartJS<"pie", number[], unknown> | null>(
    null
  ) as MutableRefObject<ChartJS<"pie", number[], unknown> | null>;

  const handleDownload = async () => {
    if (!currentData) {
      return;
    }
    let canvas = null;
    const chartType = currentData.chartType;
    if (chartType === "bar") canvas = barRef.current?.canvas;
    else if (chartType === "line") canvas = lineRef.current?.canvas;
    else if (chartType === "pie") canvas = pieRef.current?.canvas;
    if (!canvas || !uid || typeof projectID !== "string") return;
    try {
      setIsDownload(true);
      await downAndUploadImage(
        canvas,
        uid,
        projectID,
        getFileName(currentData)
      );
    } catch (err) {
      console.error("Download failed.", err);
      toast.error("Download failed. Please try again.");
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
  const isUpLoading = useInitialThumbnailUpload(
    currentData,
    showData,
    uid,
    projectID as string,
    barRef,
    lineRef,
    pieRef
  );
  const headerStatus =
    isLoading || showNoProject
      ? "hidden"
      : isSaving || isUpLoading
      ? "loading"
      : "done";
  if (isAuthLoading) return <Loading />;
  return (
    <div className={styles.pageContainer}>
      <HeaderEditPage
        headerStatus={headerStatus}
        setShowSharePopUp={setShowSharePopUp}
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
        {isLoading && <Spinner />}
        {showNoProject && <NoProject />}
        <ChartDataProvider value={{ currentData, setCurrentData }}>
          {!isLoading && !showNoProject && (
            <>
              <DataArea hideOnMobile={!showData} />
              <ChartArea
                hideOnMobile={showData}
                pieRef={pieRef}
                lineRef={lineRef}
                barRef={barRef}
                handleDownload={handleDownload}
                isDownload={isDownload}
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
