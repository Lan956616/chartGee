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
  headerStatus: "hidden" | "loading" | "done";
  setShowSharePopUp: Dispatch<SetStateAction<boolean>>;
  handleDownload: () => void;
  isDownload: boolean;
};
const HeaderEditPage: React.FC<HeaderEditPageProps> = ({
  headerStatus,
  setShowSharePopUp,
  isDownload,
  handleDownload,
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

            {headerStatus === "loading" && (
              <Image
                src="/loading.png"
                alt="loading"
                width={35}
                height={35}
                className={`${styles.loading} ${styles.state}`}
              />
            )}
            {headerStatus === "done" && (
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
            {headerStatus !== "hidden" && (
              <>
                <DownloadButton
                  handleDownload={handleDownload}
                  isDownload={isDownload}
                />
                <ShareButton setShowSharePopUp={setShowSharePopUp} />
              </>
            )}
            <SmallSideBar />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderEditPage;
