"use client";
import styles from "./style.module.css";
import { useParams } from "next/navigation";
import HeaderSharePage from "@/components/share/header/headerSharePage";

const SharePage: React.FC = () => {
  const { projectID } = useParams();

  return (
    <div className={styles.sharePageContainer}>
      <HeaderSharePage />
    </div>
  );
};

export default SharePage;
