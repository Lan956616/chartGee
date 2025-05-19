"use client";
import Container from "../../container/container";
import styles from "./headerProjectPage.module.css";
import Image from "next/image";
import Link from "next/link";
import UserButton from "./userButton/userButton";
import SmallSideBar from "@/components/headereditpage/smallsidebar/smallsidebar";
const HeaderProjectPage: React.FC = ({}) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <Link href="/">
            <Image
              src="/logos/chartGeeWithTitle.png"
              alt="logo"
              width={165}
              height={45}
            />
          </Link>
          <div className={styles.rightHeader}>
            <UserButton />
            <SmallSideBar inProjectsPage={true} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderProjectPage;
