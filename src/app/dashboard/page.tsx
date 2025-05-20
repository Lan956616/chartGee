"use client";
import { useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";
import Header from "@/components/homePage/header_temp/Header";
import Loading from "@/components/common/Loading/Loading";
import ChartTypeCard from "@/components/dashBoardPage/ChartTypeCard/ChartTypeCard";
const DashBoardPage: React.FC = () => {
  const router = useRouter();
  const { currentUser: user, isAuthLoading } = useAppSelector((store) => {
    return store.auth;
  });
  useEffect(() => {
    if (isAuthLoading) {
      return;
    }
    if (!isAuthLoading && !user) {
      router.push("/login");
    }
  }, [user, router, isAuthLoading]);

  if (isAuthLoading) {
    return <Loading />;
  }
  return (
    <div className={styles.pageContainer}>
      <Header showCreateGraph={false} />
      <p className={styles.title}>Create A Chart!</p>
      <div className={styles.graphTypeList}>
        <ChartTypeCard
          src="charts/bar-chart"
          alt="Bar Chart Icon"
          label="Bar Chart"
          chartType="bar"
        />
        <ChartTypeCard
          src="charts/pie-chart"
          alt="Pie Chart Icon"
          label="Pie Chart"
          chartType="pie"
        />
        <ChartTypeCard
          src="charts/line-chart"
          alt="Line Chart Icon"
          label="Line Chart"
          chartType="line"
        />
      </div>
    </div>
  );
};

export default DashBoardPage;
