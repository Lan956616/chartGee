"use client";
import { useAppSelector } from "@/lib/hooks";
import Container from "../../container/container";
import styles from "./headerSharePage.module.css";
import Image from "next/image";
import Link from "next/link";
import UserButton from "@/components/projects/header/userButton/userButton";
type HeaderSharePageProps = { projectID: string };
const HeaderSharePage: React.FC<HeaderSharePageProps> = ({ projectID }) => {
  const uid = useAppSelector((store) => {
    return store.auth.currentUser;
  });
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <Link href="/">
            <Image
              src="/tryChartGeeIcon.png"
              alt="logo"
              width={165}
              height={45}
            />
          </Link>
          {uid && (
            <div className={styles.rightHeader}>
              <Link href={`/edit/${projectID}`} className={styles.editBTN}>
                <Image
                  src="/whitepencil.png"
                  alt="edit icon"
                  width={20}
                  height={20}
                />
                Edit Graph
              </Link>
              <UserButton />
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default HeaderSharePage;
