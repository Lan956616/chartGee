"use client";
import Container from "../../common/Container/Container";
import styles from "./headerProjectPage.module.css";
import Image from "next/image";
import Link from "next/link";
import UserButton from "./UserButton/UserButton";
import SmallSideBar from "@/components/editPage/HeaderEditPage_temp/SmallSideBar/SmallSideBar";
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
