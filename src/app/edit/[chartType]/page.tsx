"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import DisplayButtons from "@/components/displaybuttons/displaybuttons";
import DataArea from "@/components/dataarea/dataarea";
import styles from "./style.module.css";
import HeaderEditPage from "@/components/headereditpage/headereditpage";
import Sidebar from "@/components/sidebar/sidebar";
import ChartArea from "@/components/chartarea/chartarea";
import ChartDataProvider from "@/components/ChartDataProvider";
import { useAppSelector } from "@/lib/hooks";
const ChartEditPage: React.FC = () => {
  const { currentUser: user, isAuthLoading } = useAppSelector((store) => {
    return store.auth;
  });
  const { chartType } = useParams();
  const router = useRouter();
  const [showData, setShowData] = useState(true);
  useEffect(() => {
    if (isAuthLoading) {
      return;
    }
    if (!isAuthLoading && !user) {
      router.push("/login");
    }
  }, [router, user, isAuthLoading]);
  useEffect(() => {
    if (
      typeof chartType !== "string" ||
      (chartType !== "pie" && chartType !== "line" && chartType !== "bar")
    ) {
      router.replace("/");
    }
  }, [chartType, router]);
  return (
    <div className={styles.pageContainer}>
      <HeaderEditPage />
      <main className={styles.main}>
        <ChartDataProvider>
          <DataArea
            chartType={chartType as "bar" | "line" | "pie"}
            hideOnMobile={!showData}
          />
          <ChartArea
            chartType={chartType as "bar" | "line" | "pie"}
            hideOnMobile={showData}
          />
        </ChartDataProvider>
      </main>
      <Sidebar />
      <DisplayButtons showData={showData} setShowData={setShowData} />
    </div>
  );
};

export default ChartEditPage;
