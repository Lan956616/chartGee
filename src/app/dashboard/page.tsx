"use client";
import { useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";
import Header from "@/components/header/header";
import Loading from "@/components/loading/loading";
import GraphTypeCard from "@/components/dashboard/graphTypeCard/graphTypeCard";
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
      <p className={styles.title}>Create A Graph!</p>
      <div className={styles.graphTypeList}>
        <GraphTypeCard
          src="bar-chart"
          alt="Bar Graph Icon"
          label="Bar Graph"
          chartType="bar"
        />
        <GraphTypeCard
          src="pie-chart"
          alt="Pie Graph Icon"
          label="Pie Graph"
          chartType="pie"
        />
        <GraphTypeCard
          src="line-chart"
          alt="Line Graph Icon"
          label="Line Graph"
          chartType="line"
        />
      </div>
    </div>
  );
};

export default DashBoardPage;
