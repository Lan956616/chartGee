"use client";
import { useAutoSave } from "@/hooks/useAutoSave";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef, MutableRefObject } from "react";
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
import { uploadThumbnail } from "@/utils/uploadThumbnail";
import SharePopUp from "@/components/projects/projectCard/sharePopUp/sharePopUp";
import { downAndUploadImage } from "@/utils/downAndUploadImage";
import { useProjectData } from "@/hooks/useProjectData";
const ChartEditPage: React.FC = () => {
  const { currentUser: uid, isAuthLoading } = useAppSelector((store) => {
    return store.auth;
  });
  const { projectID } = useParams();
  const router = useRouter();
  const [showData, setShowData] = useState(true);
  const [showSharePopUp, setShowSharePopUp] = useState(false);
  const [isDownload, setIsDownload] = useState(false);
  const [isUpLoading, setIsUploading] = useState(false);
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
  const handleChartReady = async () => {
    console.log("handleChartReady triggered");
    console.log("currentData:", currentData);
    console.log("uid:", uid, "projectID:", projectID);
    if (!currentData || !uid || typeof projectID !== "string") return;
    let canvas = null;
    switch (currentData.chartType) {
      case "bar":
        canvas = barRef.current?.canvas;
        console.log(" barRef canvas:", canvas);
        break;
      case "line":
        canvas = lineRef.current?.canvas;
        console.log("lineRef canvas:", canvas);
        break;
      case "pie":
        canvas = pieRef.current?.canvas;
        console.log("pieRef canvas:", canvas);
        break;
    }
    if (!canvas) {
      console.warn("Chart ready but no canvas, skipping thumbnail upload.");
      console.log("🤖 barRef:", barRef.current);
      console.log("🤖 lineRef:", lineRef.current);
      console.log("🤖 pieRef:", pieRef.current);
      return;
    }
    try {
      console.log("進入到try");
      setIsUploading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const imageBase64 = canvas.toDataURL("image/png");
      console.log("🖼️ base64 image preview:", imageBase64.slice(0, 100));
      await uploadThumbnail(imageBase64, uid, projectID);
      console.log("Thumbnail uploaded successfully!");
    } catch (err) {
      console.error("Failed to upload thumbnail:", err);
    } finally {
      setIsUploading(false);
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
                onReady={handleChartReady}
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
