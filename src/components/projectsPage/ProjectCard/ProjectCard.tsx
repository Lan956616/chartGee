"use client";
import { useState } from "react";
import styles from "./projectCard.module.css";
import Image from "next/image";
import CardActions from "./CardActions/CardActions";
import { getChartTypeIcon } from "@/utils/projectsPage/getChartTypeIcon";
import SharePopUp from "./SharePopUp/SharePopUp";
import DeletePopUp from "./DeletePopUp/DeletePopUp";
type ProjectCardProps = {
  chartType: "pie" | "line" | "bar";
  updatedAt: string;
  title: string;
  id: string;
  uid: string;
  imageURL?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  chartType,
  updatedAt,
  title,
  id,
  uid,
  imageURL,
}) => {
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.thumbnailWrapper}>
        {imageURL && (
          <Image
            src={imageURL}
            alt="chart thumnail"
            fill
            className={styles.thumbnail}
          />
        )}
      </div>
      <CardActions
        projectID={id}
        setShowDeletePopup={setShowDeletePopup}
        setShowSharePopup={setShowSharePopup}
      />
      <div className={styles.cardInfo}>
        <Image
          src={getChartTypeIcon(chartType)}
          alt={`${chartType} chart icon`}
          width={25}
          height={25}
        />
        <div className={styles.description}>
          <p className={styles.title}>{title || "Untitled Chart"}</p>
          <p className={styles.updatedTime}>{`Updated ${updatedAt}`}</p>
        </div>
      </div>
      {showSharePopup && (
        <SharePopUp
          projectID={id}
          setShowSharePopup={setShowSharePopup}
          uid={uid}
        />
      )}
      {showDeletePopup && (
        <DeletePopUp projectID={id} setShowDeletePopup={setShowDeletePopup} />
      )}
    </div>
  );
};

export default ProjectCard;
