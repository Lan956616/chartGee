"use client";
import styles from "./headerEditPage.module.css";
import Container from "@/components/common/container/Container";
import Image from "next/image";
import Link from "next/link";
import ShareButton from "./shareButton/ShareButton";
import SmallSideBar from "./smallSideBar/SmallSideBar";
import type { Dispatch, SetStateAction } from "react";
type HeaderEditPageProps = {
  headerStatus: "hidden" | "loading" | "done";
  setShowSharePopUp: Dispatch<SetStateAction<boolean>>;
};
const HeaderEditPage: React.FC<HeaderEditPageProps> = ({
  headerStatus,
  setShowSharePopUp,
}) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.leftHeader}>
            <Link href="/">
              <Image
                src="/logos/whiteiconwithtitle.png"
                alt="logo"
                width={165}
                height={45}
              />
            </Link>
            {headerStatus === "loading" && (
              <Image
                src="/state/loading.png"
                alt="loading"
                width={35}
                height={35}
                className={`${styles.loading} ${styles.state}`}
              />
            )}
            {headerStatus === "done" && (
              <Image
                src="/state/uploaddone.png"
                alt="uploaddone"
                width={35}
                height={35}
                className={styles.state}
              />
            )}
          </div>
          <div className={styles.rightHeader}>
            {headerStatus !== "hidden" && (
              <ShareButton setShowSharePopUp={setShowSharePopUp} />
            )}
            <SmallSideBar
              setShowSharePopUp={setShowSharePopUp}
              headerStatus={headerStatus}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderEditPage;
