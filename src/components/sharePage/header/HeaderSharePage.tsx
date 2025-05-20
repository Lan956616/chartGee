"use client";
import { useAppSelector } from "@/lib/hooks";
import Container from "../../common/Container/Container";
import styles from "./headerSharePage.module.css";
import Image from "next/image";
import Link from "next/link";
import UserButton from "@/components/projectsPage/header/UserButton/UserButton";

const HeaderSharePage: React.FC = () => {
  const uid = useAppSelector((store) => {
    return store.auth.currentUser;
  });
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <Link href="/">
            <Image
              src="/logos/tryChartGeeIcon.png"
              alt="logo"
              width={165}
              height={45}
            />
          </Link>
          {uid && <UserButton />}
        </div>
      </Container>
    </header>
  );
};

export default HeaderSharePage;
