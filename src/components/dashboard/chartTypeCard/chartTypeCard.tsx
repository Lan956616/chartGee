"use client";
import { useState } from "react";
import styles from "./chartTypeCard.module.css";
import Image from "next/image";
import { createNewProject } from "@/utils/createNewProject";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/components/auth/errorMessage/errorMessage";
type ChartCardProps = {
  src: string;
  alt: string;
  label: string;
  chartType: "bar" | "line" | "pie";
};
const ChartTypeCard: React.FC<ChartCardProps> = ({
  src,
  alt,
  label,
  chartType,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const uid = useAppSelector((store) => {
    return store.auth.currentUser;
  });
  const router = useRouter();
  const handleClick = async () => {
    if (!uid || isLoading) {
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      const projectID = await createNewProject(uid, chartType);
      router.push(`/edit/${projectID}`);
    } catch (err: unknown) {
      console.log(err);
      setError("Failed. Please try again");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.cardWrapper}>
      <div
        className={`${styles.chartTypeCard} ${isLoading && styles.disabled}`}
        onClick={handleClick}
      >
        <div className={styles.contentWrapper}>
          <div className={styles.chartIcon}>
            <Image src={`/${src}.png`} alt={alt} width={100} height={100} />
          </div>
          <p>{label}</p>
        </div>
      </div>
      <ErrorMessage error={error} />
    </div>
  );
};

export default ChartTypeCard;
