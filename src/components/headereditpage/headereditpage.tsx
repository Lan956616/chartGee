"use client";
import styles from "./headereditpage.module.css";
import Container from "../container/container";
import Image from "next/image";
import Link from "next/link";
import ShareButton from "./sharebutton/sharebutton";
import SmallSideBar from "./smallsidebar/smallsidebar";
import type { Dispatch, SetStateAction } from "react";
import DownloadButton from "./downloadButton/downloadButton";
type HeaderEditPageProps = {
  isSaving: boolean;
  showNoProject: boolean;
  isUploading: boolean;
  setShowSharePopUp: Dispatch<SetStateAction<boolean>>;
};
const HeaderEditPage: React.FC<HeaderEditPageProps> = ({
  isSaving,
  showNoProject,
  isUploading,
  setShowSharePopUp,
}) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.leftHeader}>
            <Link href="/">
              <Image
                src="/whiteiconwithtitle.png"
                alt="logo"
                width={165}
                height={45}
              />
            </Link>

            {!showNoProject && (isSaving || isUploading) && (
              <Image
                src="/loading.png"
                alt="loading"
                width={35}
                height={35}
                className={`${styles.loading} ${styles.state}`}
              />
            )}
            {!showNoProject && !isSaving && !isUploading && (
              <Image
                src="/uploaddone.png"
                alt="uploaddone"
                width={35}
                height={35}
                className={styles.state}
              />
            )}
          </div>
          <div className={styles.rightHeader}>
            <DownloadButton />
            <ShareButton setShowSharePopUp={setShowSharePopUp} />
            <SmallSideBar />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderEditPage;
