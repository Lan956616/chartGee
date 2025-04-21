"use client";
import styles from "./headereditpage.module.css";
import Container from "../container/container";
import Image from "next/image";
import Link from "next/link";
import ShareButton from "./sharebutton/sharebutton";
import SmallSideBar from "./smallsidebar/smallsidebar";
type HeaderEditPageProps = { isSaving: boolean; showNoProject: boolean };
const HeaderEditPage: React.FC<HeaderEditPageProps> = ({
  isSaving,
  showNoProject,
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

            {!showNoProject && isSaving && (
              <Image
                src="/loading.png"
                alt="loading"
                width={35}
                height={35}
                className={`${styles.loading} ${styles.state}`}
              />
            )}
            {!showNoProject && !isSaving && (
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
            <ShareButton />
            <SmallSideBar />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderEditPage;
